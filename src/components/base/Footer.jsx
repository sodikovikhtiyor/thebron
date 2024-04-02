import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import twitter from "../../assets/thebron-icons/Feather Icons/twitter.png";
import facebook from "../../assets/thebron-icons/Feather Icons/facebook.png";
import instagram from "../../assets/thebron-icons/Feather Icons/instagram.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <Flex
      mt="2rem"
      py="2rem"
      px="30px"
      justify="space-between"
      borderTop="1px solid #A29F9F"
      mx="auto"
      bg="#F7F7F7"
      flexWrap="wrap"
      // bottom="0"
      // w="100%"
      // pos="static"
    >
      <Flex
        gap="10px"
        fontSize="18px"
        fontWeight="400"
        justifyContent={{ base: "center", md: "space-between" }}
        flexWrap="wrap"
      >
        <Text>2024, thebron</Text>
        <Text>Конфиденцальность</Text>
        <Text>Условия</Text>
        <Text>Реквезиты</Text>
      </Flex>
      <Flex
        justify="space-between"
        w={{ base: "100%", md: "250px" }}
        flexWrap="wrap"
        mt={{ base: "15px", md: "0" }}
      >
        <Flex align="center" gap="10px" cursor="pointer" flexWrap="wrap">
          <LanguageIcon />
          <Text>Русский(ru)</Text>
        </Flex>
        <Flex gap='20px'>
          <Link to="https://twitter.com/thebron">
            <Image src={twitter} color="#000" cursor="pointer" />
          </Link>
          <Link to="https://www.facebook.com/thebron">
            <Image src={facebook} cursor="pointer" />
          </Link>
          <Link to="https://www.instagram.com/thebron">
            <Image src={instagram} cursor="pointer" />
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Footer;
