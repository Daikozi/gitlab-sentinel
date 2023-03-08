import { DEFAULT_DOMAIN } from "../constants";
import { MergeRequest, MergeRequestState } from "../types";

export type GetMergeRequestsParams = {
  domain?: string;
  nonArchived?: boolean;
  page?: number;
  perPage?: number;
  reviewerUsername?: string;
  scope?: string;
  state?: MergeRequestState;
  token: string;
  username?: string;
  view?: string;
};

export const getMergeRequests = async ({
  domain = DEFAULT_DOMAIN,
  nonArchived,
  page,
  perPage,
  reviewerUsername,
  scope,
  state,
  token,
  username,
  view,
}: GetMergeRequestsParams): Promise<MergeRequest[]> => {
  const url = new URL(`https://${domain}/api/v4/merge_requests`);

  if (username) {
    url.searchParams.append("username", username);
  }

  if (nonArchived) {
    url.searchParams.append("non_archived", "true");
  }

  if (reviewerUsername) {
    url.searchParams.append("reviewer_username", reviewerUsername);
  }

  if (page) {
    url.searchParams.append("page", page.toString());
  }

  if (perPage) {
    url.searchParams.append("per_page", perPage.toString());
  }

  if (scope) {
    url.searchParams.append("scope", scope);
  }

  if (state) {
    url.searchParams.append("state", state);
  }

  if (view) {
    url.searchParams.append("view", view);
  }

  try {
    const response = await fetch(url.toString(), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const data = (await response.json()) as { message: string };

      throw new Error(data.message);
    }

    const data = (await response.json()) as MergeRequest[];

    return data;
  } catch (error) {
    throw error;
  }
};
