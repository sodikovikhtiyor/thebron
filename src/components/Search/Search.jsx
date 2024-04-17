import { Box, Flex, Text, Button, Image, Input } from "@chakra-ui/react";
import searchIcon from "../../assets/thebron-icons/Feather Icons/search.png";
import React, { useState } from "react";
import filter from "../../assets/thebron-icons/filter.png";

function Search() {
  const [search, setSearch] = useState(true);
  const handleSearch = () => {
    setSearch(false);
  };
  return (
    <Flex
      p="12px"
      borderRadius="68px"
      border="1px solid #efefef"
      boxShadow="0px 8px 16px 0px #00000014"
      justifyContent="space-between"
      alignItems="center"
      maxW="800px"
      mx="auto"
      my={{ base: "2rem", md: "4rem" }}
      color="black"
      cursor="pointer"
    >
      {search ? (
        <Box px="2rem" cursor="pointer" onClick={handleSearch}>
          <Text>Где</Text>
          <Text display={{base: 'none', sm: 'block'}} fontWeight="400" color="#C2C2C2">
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
      <Flex alignItems='center' gap='10px'>
        <Button
          borderRadius="50%"
          h={{ base: "55px", md: "64px" }}
          w={{ base: "55px", md: "64px" }}
          bg="#03559E"
          onClick={handleSearch}
        >
          <Image src={searchIcon} />
        </Button>
        <Box
          px={{ base: "10px", md: "16px" }}
          borderRadius="8px"
          as="button"
          h="50px"
          display={{ base: "flex", md: "none" }}
          alignItems="center"
          color="#454545"
          border="2px solid #454545"
          _hover={{
            color: "#000",
            border: "2px solid #000",
            fontWeight: "700",
          }}
        >
          <Text mr="10px" display={{ base: "none", lg: "inline-block" }}>
            Фильтр
          </Text>
          <Image src={filter} alt="filterimg" minW="24px" />
        </Box>
      </Flex>
    </Flex>
  );
}

export default Search;
