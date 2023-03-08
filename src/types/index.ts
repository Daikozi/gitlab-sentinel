export type LoginInfo = {
  domain: string;
  token: string;
  username: string;
};

export type MergeRequest = {
  approvals_before_merge: number;
  assignee: User;
  assignees: User[];
  author: User;
  blocking_discussions_resolved: boolean;
  closed_at: string;
  closed_by: User;
  created_at: string;
  description: string;
  detailed_merge_status: string;
  discussion_locked: boolean;
  downvotes: number;
  draft: boolean;
  error?: string;
  force_remove_source_branch: boolean;
  has_conflicts: boolean;
  id: number;
  iid: number;
  labels: string[];
  merge_commit_sha: string;
  merge_status: MergeRequestStatus;
  merge_user: User;
  merge_when_pipeline_succeeds: boolean;
  merged_at: string;
  merged_by: User;
  milestone: Milestone;
  project_id: number;
  reference: string;
  references: References;
  reviewers: User[];
  sha: string;
  should_remove_source_branch: boolean;
  source_branch: string;
  source_project_id: number;
  squash: boolean;
  squash_commit_sha: string;
  state: MergeRequestState;
  target_branch: string;
  target_project_id: number;
  task_completion_status: TaskCompletionStatus;
  time_stats: TimeStats;
  title: string;
  updated_at: string;
  upvotes: number;
  user_notes_count: number;
  web_url: string;
  work_in_progress: boolean;
};

export type References = {
  short: string;
  relative: string;
  full: string;
};

export type MergeRequestState = "opened" | "closed" | "locked" | "merged";

export type MergeRequestStatus =
  | "can_be_merged"
  | "cannot_be_merged"
  | "unchecked";

export type User = {
  id: number;
  name: string;
  username: string;
  state: string;
  avatar_url: string;
  web_url: string;
};

export type TimeStats = {
  time_estimate: number;
  total_time_spent: number;
  human_time_estimate: number;
  human_total_time_spent: number;
};

export type Milestone = {
  id: number;
  iid: number;
  project_id: number;
  title: string;
  description: string;
  state: string;
  created_at: string;
  updated_at: string;
  due_date: string;
  start_date: string;
  web_url: string;
};

export type TaskCompletionStatus = {
  count: number;
  completed_count: number;
};
