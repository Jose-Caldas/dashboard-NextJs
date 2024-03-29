import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>José Caldas</Text>
          <Text color="gray.300" fontSize="small">
            jrcaldas2013@gmail.com
          </Text>
        </Box>
      )}
      <Avatar size="md" name="José Caldas" />
    </Flex>
  );
}
