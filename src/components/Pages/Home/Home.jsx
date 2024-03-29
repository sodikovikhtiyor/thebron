import { Container } from "@chakra-ui/react";
import React from "react";
import Showcase from "./Showcase";
import Categories from "./Categories";
import Filter from "../../search/Filter";
import Cards from "../../partials/Cards";

function Home() {
  return (
    <>
      <Container
        // w={{ base: "24px", md: "700px", lg: "900px", xl: "1200px" }}
        maxW="1200px"
        mx="auto"
        my="0"
        
      >
        <Showcase />
        <Categories />
      </Container>
      <hr />
      <Container w="sm" mx="auto" my="0">
        <Filter />
        <Cards />
      </Container>
    </>
  );
}

export default Home;
