import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import star from "../assets/images/star.png";
import Carousel from "nuka-carousel";
import img from "../assets/images/image1.png";
function Card({ img, name, rate, distance, date, price }) {
  return (
    <Flex flexDirection="column" w="270px" gap="10px" color="#000" mb="3rem">
      <Carousel>
        <Image src={img} w="100%" />
        <Image src={img} w="100%" />
        <Image src={img} w="100%" />
        <Image src={img} w="100%" />
        <Image src={img} w="100%" />
      </Carousel>
      <Flex justifyContent="space-between" mt="10px">
        <Text fontSize="20px" fontWeight="700">
          {name}
        </Text>
        <Text fontWeight="700">
          {rate} <Image src={star} alt="star" />{" "}
        </Text>
      </Flex>
      <Text color="#7B7979">Расстояние: {distance} km от цетра</Text>
      <Text color="#7B7979">{date} марта</Text>
      <Text fontSize="20px" fontWeight="700">
        {price} cум <span>ночь</span>
      </Text>
    </Flex>
  );
}

export default Card;
