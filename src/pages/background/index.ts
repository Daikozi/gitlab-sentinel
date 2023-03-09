// import { LoginInfosState } from "../../redux/slices/loginInfosSlice";

import { MergeRequest } from "../../types";

type LoginInfosState = {
  domain: string;
  token: string;
  username: string;
};

let loginInfos: LoginInfosState | undefined;
let badgeUpdate: Date | undefined;

const fetchMergeRequests = async () => {
  if (!loginInfos || !badgeUpdate) {
    return;
  }

  let badgeCount = 0;

  const test = badgeUpdate;

  const { domain, token, username } = loginInfos;

  Promise.all([
    fetch(
      `https://${domain}/api/v4/merge_requests?username=${username}&state=opened`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    ),
    fetch(
      `https://${domain}/api/v4/merge_requests?username=${username}&non_archived=true&reviewer_username=${username}&per_page=100&scope=all&state=opened`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    ),
  ])
    .then(function (responses) {
      // Handle response for endpoint 1
      responses[0].json().then(function (data) {
        const newMergeRequests = (data as MergeRequest[]).filter(
          ({ updated_at }) => new Date(updated_at) > new Date(test)
        ).length;

        badgeCount = newMergeRequests + badgeCount;
      });

      // Handle response for endpoint 2
      responses[1].json().then(function (data) {
        const newMergeRequests = (data as MergeRequest[]).filter(
          ({ updated_at }) => new Date(updated_at) > new Date(test)
        ).length;

        badgeCount = newMergeRequests + badgeCount;

        if (badgeCount > 0) {
          chrome.action.setBadgeText({ text: badgeCount.toString() }, () => {});
        } else {
          chrome.action.setBadgeText({ text: "" }, () => {});
        }
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};

chrome.storage.local.get(["loginInfos"], (result) => {
  loginInfos = result.loginInfos;
});

chrome.storage.local.get(["badgeUpdate"], (result) => {
  badgeUpdate = result.badgeUpdate;
});

chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
  fetchMergeRequests();
  setInterval(fetchMergeRequests, 1000 * 60 * 10);
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "loginInfos" && !loginInfos) {
    loginInfos = message.value;
    chrome.storage.local.set({ loginInfos });
  }
  if (message.type === "updateBadge") {
    badgeUpdate = message.value;
    console.log("new badge update", badgeUpdate);
    chrome.storage.local.set({ badgeUpdate });
  }
  chrome.action.setBadgeText({ text: "" });
});

export {};
