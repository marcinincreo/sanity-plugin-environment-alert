import React from "react";
import { definePlugin } from "sanity";
import { EnvironmentAlertNavbar } from "./EnvironmentAlertNavbar";
import type { EnvironmentAlertRule } from "./types";

export type { EnvironmentAlertRule } from "./types";

const DEFAULT_RULES: EnvironmentAlertRule[] = [
  { dataset: "development", tone: "caution", environment: "test" },
];

/**
 * Sanity Studio plugin that renders a tinted banner in the navbar based on the
 * active workspace's dataset. Pass an array of rules to customise; call with no
 * argument to use the built-in default that highlights the `development` dataset.
 *
 * @public
 */
export const environmentAlert = definePlugin<EnvironmentAlertRule[] | void>((rules) => {
  const resolvedRules = Array.isArray(rules) && rules.length > 0 ? rules : DEFAULT_RULES;

  return {
    name: "sanity-plugin-environment-alert",
    studio: {
      components: {
        navbar: (navbarProps) =>
          React.createElement(EnvironmentAlertNavbar, { ...navbarProps, __rules: resolvedRules }),
      },
    },
  };
});
