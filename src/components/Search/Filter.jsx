import { Box, Flex, Text, Button, Image } from "@chakra-ui/react";
import search from "../../assets/thebron-icons/Feather Icons/search.png";
import React from "react";

function Filter() {
  return (
    <Flex
      p="12px"
      borderRadius="68px"
      border="1px solid #C2C2C2"
      boxShadow="0px 8px 16px 0px #00000014"
      justifyContent="space-between"
      alignItems="center"
      maxW="700px"
      mx="auto"
      my="4rem"
      color="black"
    >
      <Box borderRight="1px solid #ededed" px="2rem" cursor="pointer">
        <Text>Где</Text>
        <Text fontWeight="400" color="#C2C2C2">
          Поиск направлений
        </Text>
      </Box>
      {/* <Box borderRight="1px solid #ededed" px="2rem" cursor="pointer">
        <Text>Прибытие</Text>
        <Text color="#C2C2C2" fontWeight="400">
          Поиск направлений
        </Text>
      </Box>
      <Box borderRight="1px solid #ededed" px="2rem" cursor="pointer">
        <Text>Выезд</Text>
        <Text color="#C2C2C2" fontWeight="400">
          Поиск направлений
        </Text>
      </Box>
      <Flex alignItems="center" gap="20px" cursor="pointer" ps="2rem">
        <Box>
          <Text>Кто</Text>
          <Text color="#C2C2C2" fontWeight="400">
            Кто едет
          </Text>
        </Box>
      </Flex> */}
      <Button borderRadius="50%" h="64px" w="64px" bg="#03559E">
        <Image src={search} />
      </Button>
    </Flex>
  );
}

export default Filter;
