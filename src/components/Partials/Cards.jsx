import React from "react";
import Card from "./Card";
import img1 from "../../assets/images/image1.png";
import map from "../../assets/thebron-icons/Feather Icons/map.png";
import { Button, Flex, Image, Text } from "@chakra-ui/react";

function Cards() {
  return (
    <div>
      <Text fontWeight="700" fontSize="28px" mb="1rem" color="#000">
        Дачные дома
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
      </Flex>
      <Flex flexWrap="wrap" justify="center">
        <Button
          borderRadius="20px"
          boxShadow=".1px .1px 20px 5px #e0e0e0"
          border="none"
          _hover={{
            boxShadow: ".1px .1px 30px 10px #e0e0e0",
            fontWeight: "700",
          }}
          fontWeight="600"
          fontSize="18px"
        >
          <Text me="10px">Карта</Text>
          <Image src={map} />
        </Button>
      </Flex>
      <Text fontWeight="700" fontSize="28px" mb="1rem" color="#000">
        Санатории
      </Text>
      <Flex flexWrap="wrap" flexWrap="wrap" justifyContent="space-between">
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
      <Text fontWeight="700" fontSize="28px" mb="1rem" color="#000">
        Чайханы
      </Text>
      <Flex flexWrap="wrap" flexWrap="wrap" justifyContent="space-between">
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
      <Flex flexWrap="wrap" justify="center">
        <Button
          bg="#03559E"
          borderRadius="20px"
          px="16px"
          py="8px"
          fontSize="18px"
          color="#fff"
        >
          Показать больше
        </Button>
      </Flex>
      <Text fontWeight="700" fontSize="28px" mb="1rem" color="#000">
        Акции
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
      </Flex>
    </div>
  );
}

export default Cards;
