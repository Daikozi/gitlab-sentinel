import { MergeRequest } from "../types";
import { useQuery, UseQueryResult } from "react-query";
import { getMergeRequests, GetMergeRequestsParams } from "../utils";
import { useLoginInfos } from "./useLoginInfos";
import { useIdentification } from "./useIdentification";

type useMergeRequestsParams = GetMergeRequestsParams & { queryKey: string };

type useMergeRequestsReturn = Pick<
  UseQueryResult<MergeRequest[]>,
  "data" | "isError" | "isLoading" | "refetch" | "remove" | "isSuccess"
>;

export const useMergeRequests = () => {
  const { isIdentified } = useIdentification();
  const { loginInfos } = useLoginInfos();
  const { token, username, domain } = loginInfos;

  const {
    data: openedMergeRequests,
    isLoading: isOpenedMergeRequestLoading,
    isError: isOpenedMergeRequestError,
    refetch: openedMergeRequestRefetch,
    isSuccess: isOpenedMergeRequestSuccess,
    remove: removeOpenedMergeRequests,
  } = useQuery(
    "openedMergeRequests",
    () => getMergeRequests({ username, domain, token, state: "opened" }),
    {
      enabled: isIdentified,
      cacheTime: 1000 * 10 * 60,
      staleTime: 1000 * 10 * 60,
    }
  );

  const {
    data: reviewedMergeRequests,
    isLoading: isReviewedMergeRequestLoading,
    isError: isReviewedMergeRequestError,
    isSuccess: isReviewedMergeRequestSuccess,
    refetch: reviewedMergeRequestRefetch,
    remove: removeReviewedMergeRequests,
  } = useQuery(
    "reviewedMergeRequests",
    () =>
      getMergeRequests({
        ...loginInfos,
        reviewerUsername: loginInfos.username,
        state: "opened",
        perPage: 100,
        scope: "all",
        nonArchived: true,
      }),
    {
      enabled: isIdentified,
      cacheTime: 1000 * 10 * 60,
      staleTime: 1000 * 10 * 60,
    }
  );

  const isLoading =
    isOpenedMergeRequestLoading || isReviewedMergeRequestLoading;

  const isError = isOpenedMergeRequestError || isReviewedMergeRequestError;

  const isSuccess =
    isOpenedMergeRequestSuccess && isReviewedMergeRequestSuccess;

  const refetch = () => {
    openedMergeRequestRefetch();
    reviewedMergeRequestRefetch();
  };

  const remove = () => {
    removeOpenedMergeRequests();
    removeReviewedMergeRequests();
  };

  const hasData = !!openedMergeRequests || !!reviewedMergeRequests;

  return {
    openedMergeRequests,
    reviewedMergeRequests,
    isLoading,
    isError,
    isSuccess,
    refetch,
    remove,
    hasData,
  };
};
