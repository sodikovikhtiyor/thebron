import { Container } from "@chakra-ui/react";
import React from "react";
import Showcase from "../../login/Showcase";
import Categories from "./Categories";
import Filter from "../../Search/Filter";
import Cards from "../../Cards";

function Home() {
  return (
    <>
      <Container w="1200px" mx="auto" my="0">
        <Showcase />
        <Categories />
      </Container>
      <hr />
      <Container w="1200px" mx="auto" my="0">
        <Filter />
        <Cards />
      </Container>
    </>
  );
}

export default Home;
