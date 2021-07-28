import { Flex } from '@chakra-ui/react';

export default function ProfileBadge({ Badge, value }) {
  return (
    <Flex
      mr={2}
      color="whiteAlpha.800"
      bg="blackAlpha.700"
      borderRadius="18px"
      padding="2"
      width="110px"
    >
      <Flex color="purple.400" mr={1}>
        <Badge fontSize="25px" />
      </Flex>
      {value}
    </Flex>
  );
}
