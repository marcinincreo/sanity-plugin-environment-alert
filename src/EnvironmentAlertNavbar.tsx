import React from "react";
import { useWorkspace } from "sanity";
import { Box, Card, Flex, Stack, Text } from "@sanity/ui";
import type { EnvironmentAlertRule } from "./types";

type NavbarProps = {
  renderDefault: (props: any) => React.ReactNode;
  __rules: EnvironmentAlertRule[];
};

export function EnvironmentAlertNavbar(props: NavbarProps) {
  const workspace = useWorkspace();
  const { __rules, ...rest } = props;
  const match = __rules.find((rule) => rule.dataset === workspace.dataset);

  if (!match) {
    return <>{rest.renderDefault(rest)}</>;
  }

  const label = match.environment || match.dataset;

  return (
    <Stack>
      <Box>
        <Card tone={match.tone} muted padding={3} border scheme="light">
          <Flex justify="center" align="center" gap={[1, 1, 2]}>
            <Text align="center" size={2}>
              {`This is ${label} environment`}
            </Text>
          </Flex>
        </Card>
      </Box>
      {rest.renderDefault(rest)}
    </Stack>
  );
}