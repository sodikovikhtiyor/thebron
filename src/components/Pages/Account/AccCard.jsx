import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
function AccCard({ icon, title, text }) {
  return (
    <>
      <Flex
        boxShadow="0px 8px 16px 0px #00000014"
        justify="space-between"
        borderRadius="20px"
        flexDir="column"
        py="20px"
        px="16px"
        h={{base: '190px',md:"220px"}}
        w="350px"
        gap='15px'
      >
        <Image src={icon} w="48px" />
        <Box>
          <Heading fontSize="20px">{title}</Heading>
          <Text>{text}</Text>
        </Box>
      </Flex>
    </>
  );
}

export default AccCard;
