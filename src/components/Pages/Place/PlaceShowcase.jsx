import { Grid, GridItem, Heading, Image } from "@chakra-ui/react";
import React from "react";
import villa from "../../../assets/images/villa.png";
function PlaceShowcase() {
  return (
    <>
      <Heading fontSize="28px" fontWeight="600" mb='40px'>
        Линнеахольме частный остров до которого можно добраться по пешеходному
        мосту
      </Heading>
      <Grid
        h="416px"
        templateAreas={`"img1 img2 img3" "img1 img4 img5"`}
        gridTemplateRows={"199px 199px"}
        gridTemplateColumns={"710px 1fr 1fr"}
        gap={4}
        w="100%"
      >
        <GridItem area={"img1"}>
          <Image src={villa} alt="villa" h="100%" />
        </GridItem>
        <GridItem area={"img2"}>
          <Image src={villa} alt="villa" h="100%" />
        </GridItem>
        <GridItem area={"img3"}>
          <Image src={villa} alt="villa" h="100%" />
        </GridItem>
        <GridItem area={"img4"}>
          <Image src={villa} alt="villa" h="100%" />
        </GridItem>
        <GridItem area={"img5"}>
          <Image src={villa} alt="villa" h="100%" />
        </GridItem>
       
      </Grid>
    </>
  );
}

export default PlaceShowcase;
