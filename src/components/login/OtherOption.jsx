import { Box, Flex, Heading, Image, Input, Text } from "@chakra-ui/react";

export default function OtherOption({ icon, name, text }) {
  return (
    <>
      <Flex justify="space-between" py="20px">
        <Flex justify="space-between" alignItems="center" gap="10px">
          <Image src={icon} alt="icon" h="24px" />
          <Box>
            <Heading fontSize="18px" fontWeight="700">
              {name}
            </Heading>
            <Text color="#7A7A7A" fontSize="16px" fontWeight="400">
              {text}
            </Text>
          </Box>
        </Flex>
        <Input color="#000" type="radio" w="24px" cursor="pointer" />
      </Flex>
    </>
  );
}
