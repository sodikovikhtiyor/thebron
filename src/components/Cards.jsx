import React from "react";
import Card from "./Card";
import img1 from "../assets/images/image1.png";
import { Button, Flex, Text } from "@chakra-ui/react";

function Cards() {
  return (
    <div>
      <Text fontWeight="600" fontSize="28px" mb="1rem" color="#000">
        Рекомендуемые
      </Text>
      <Flex flexWrap="wrap" justifyContent="space-between">
        <Card
          img={img1}
          name="Отель Узбекистан"
          rate="4.6"
          distance="2.8"
          date="10-12"
          price="125 000"
        />
        <Card
          img={img1}
          name="Отель Узбекистан"
          rate="4.6"
          distance="2.8"
          date="10-12"
          price="125 000"
        />
        <Card
          img={img1}
          name="Отель Узбекистан"
          rate="4.6"
          distance="2.8"
          date="10-12"
          price="125 000"
        />
        <Card
          img={img1}
          name="Отель Узбекистан"
          rate="4.6"
          distance="2.8"
          date="10-12"
          price="125 000"
        />
        <Card
          img={img1}
          name="Отель Узбекистан"
          rate="4.6"
          distance="2.8"
          date="10-12"
          price="125 000"
        />
        <Card
          img={img1}
          name="Отель Узбекистан"
          rate="4.6"
          distance="2.8"
          date="10-12"
          price="125 000"
        />
        <Card
          img={img1}
          name="Отель Узбекистан"
          rate="4.6"
          distance="2.8"
          date="10-12"
          price="125 000"
        />
        <Card
          img={img1}
          name="Отель Узбекистан"
          rate="4.6"
          distance="2.8"
          date="10-12"
          price="125 000"
        />
        <Card
          img={img1}
          name="Отель Узбекистан"
          rate="4.6"
          distance="2.8"
          date="10-12"
          price="125 000"
        />
        <Card
          img={img1}
          name="Отель Узбекистан"
          rate="4.6"
          distance="2.8"
          date="10-12"
          price="125 000"
        />
        <Card
          img={img1}
          name="Отель Узбекистан"
          rate="4.6"
          distance="2.8"
          date="10-12"
          price="125 000"
        />
        <Card
          img={img1}
          name="Отель Узбекистан"
          rate="4.6"
          distance="2.8"
          date="10-12"
          price="125 000"
        />
        <Button
          bg="#03559E"
          borderRadius="10px"
          px="16px"
          py="8px"
          fontSize="20px"
          color="#fff"
          mb="2rem"
          mx="auto"
          display="inline-block"
        >
          Показать больше
        </Button>
      </Flex>
      <Text fontWeight="600" fontSize="28px" mb="1rem" color="#000">
        Акции
      </Text>
      <Flex justifyContent="space-between">
        <Card
          img={img1}
          name="Отель Узбекистан"
          rate="4.6"
          distance="2.8"
          date="10-12"
          price="125 000"
        />
        <Card
          img={img1}
          name="Отель Узбекистан"
          rate="4.6"
          distance="2.8"
          date="10-12"
          price="125 000"
        />
        <Card
          img={img1}
          name="Отель Узбекистан"
          rate="4.6"
          distance="2.8"
          date="10-12"
          price="125 000"
        />
        <Card
          img={img1}
          name="Отель Узбекистан"
          rate="4.6"
          distance="2.8"
          date="10-12"
          price="125 000"
        />
      </Flex>
    </div>
  );
}

export default Cards;
