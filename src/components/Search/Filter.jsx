import { Box, Flex, Text, Button, Image, Input } from "@chakra-ui/react";
import searchIcon from "../../assets/thebron-icons/Feather Icons/search.png";
import React, { useState } from "react";

function Filter() {
  const [search, setSearch] = useState(true);
  const handleSearch = () => {
    setSearch(false);
  };
  return (
    <Flex
      p="12px"
      borderRadius="68px"
      border="1px solid #C2C2C2"
      boxShadow="0px 8px 16px 0px #00000014"
      justifyContent="space-between"
      alignItems="center"
      maxW="800px"
      mx="auto"
      my="4rem"
      color="black"
      cursor="pointer"
    >
      {search ? (
        <Box px="2rem" cursor="pointer" onClick={handleSearch}>
          <Text>Где</Text>
          <Text fontWeight="400" color="#C2C2C2">
            Поиск направлений
          </Text>
        </Box>
      ) : (
        <Input
          type="text"
          ps="20px"
          borderRadius="68px"
          border="none"
          maxW="700px"
          h="64px"
          _focusVisible="none"
          outline="none"
          color="black"
          fontSize="20px"
          cursor="pointer"
        />
      )}
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
      <Button
        borderRadius="50%"
        h="64px"
        w="64px"
        bg="#03559E"
        onClick={handleSearch}
      >
        <Image src={searchIcon} />
      </Button>
    </Flex>
  );
}

export default Filter;
