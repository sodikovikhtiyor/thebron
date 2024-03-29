import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import star from "../../assets/images/star.png";
import Carousel from "nuka-carousel";

import arrowRight from "../../assets/thebron-icons/Feather Icons/chevron-right.png";
// import img from "../../assets/images/image1.png";
function Card({ img, name, rate, distance, date, price }) {
  const params = {
    wrapAround: true,
    autoplay: true,
    autoplayInterval: "4000",
    defaultControlsConfig: {
      containerClassName: "containerClassName",
      nextButtonClassName: "nextButtonClassName",
      prevButtonClassName: "prevButtonClassName",
      nextButtonText: "›",
      nextButtonStyle: {
        backgroundColor: "#fff",
        color: "#000",
        width: "35px",
        height: "35px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "2rem",
        borderRadius: "50%",
        marginRight: "5px",
      },
      prevButtonText: "‹",
      prevButtonStyle: {
        backgroundColor: "#fff",
        color: "#000",
        width: "35px",
        height: "35px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "2rem",
        borderRadius: "50%",
        marginLeft: "5px",
      },
      pagingDotsClassName: 'pagingDotsClassName',
    
    },
  };
  return (
    <Flex flexDirection="column" w="270px" gap="10px" color="#000" mb="3rem">
      <Carousel {...params}>
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
