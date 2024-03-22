import React, { useState } from "react";
import logo from "../assets/images/Logo.png";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import Login from "./login/Login";
import { NavLink } from "react-router-dom";
function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Flex justifyContent="space-between" py="30px">
      <NavLink to="/">
        <img src={logo} alt="logo" width="130px" />
      </NavLink>
      <Flex w="170px" align="center" justifyContent="space-between">
        <Flex align="center">
          <LanguageIcon />
          <p>ru</p>
        </Flex>
        {/* <Button bg="#efefef" onClick={clickHandle}>
          Login
        </Button> */}
        <Box>
          <Button onClick={openModal}>Login</Button>
          <Login isOpen={isModalOpen} onClose={closeModal} />
        </Box>
        <Box cursor="pointer">
          <MenuIcon />
        </Box>
      </Flex>
    </Flex>
  );
}

export default Header;
