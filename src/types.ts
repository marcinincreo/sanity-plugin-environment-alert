/**
 * Rule that defines how to label a given dataset in the environment-alert banner.
 *
 * @public
 */
export type EnvironmentAlertRule = {
  dataset: string;
  tone: "caution" | "positive" | "critical" | "primary";
  environment?: string;
};
