import { Box, Container } from "@chakra-ui/react";
import React from "react";
import Showcase from "./Showcase";
import Categories from "./Categories";
import Cards from "../../Partials/Cards";
import Search from "../../Search/Search";

function Home() {
  return (
    <>
      <Box display={{ base: "block", md: "none" }}>
        <Search />
      </Box>
      <Container
        maxW={{
          base: "500px",
          sm: "600px",
          md: "750px",
          lg: "900px",
          xl: "1200px",
          '2xl': '1920px'
        }}
        mx="auto"
        my="0"
      >
        <Showcase />
        <Categories />
      </Container>
      <hr />
      <Container maxW="1920px" mx="auto" my="0">
        <Box display={{ base: "none", md: "block" }}>
          <Search />
        </Box>
        <Cards />
        
      </Container>
    </>
  );
}

export default Home;
