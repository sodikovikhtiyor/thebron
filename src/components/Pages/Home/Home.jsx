import { Container } from "@chakra-ui/react";
import React from "react";
import Showcase from "./Showcase";
import Categories from "./Categories";
import Cards from "../../Partials/Cards";
import Filter from "../../Search/Filter";

function Home() {
  return (
    <>
      <Container
        maxW={{
          base: "500px",
          sm: "600px",
          md: "750px",
          lg: "900px",
          xl: "1200px",
        }}
        mx="auto"
        my="0"
      >
        <Showcase />
        <Categories />
      </Container>
      <hr />
      <Container maxW="1200px" mx="auto" my="0">
        <Filter />
        <Cards />
      </Container>
    </>
  );
}

export default Home;
