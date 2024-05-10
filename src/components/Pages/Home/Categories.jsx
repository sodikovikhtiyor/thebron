import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import hotel from "../../../assets/thebron-icons/hotel.png";
import train from "../../../assets/thebron-icons/train.png";
import gamepad from "../../../assets/thebron-icons/gamepad.png";
import plane from "../../../assets/thebron-icons/plane-alt.png";
import restaurant from "../../../assets/thebron-icons/utensils.png";
import school from "../../../assets/thebron-icons/school.png";
import house from "../../../assets/thebron-icons/house-chimney.png";
import filter from "../../../assets/thebron-icons/filter.png";
import teapot from "../../../assets/thebron-icons/chayxona.png";
import mountain from "../../../assets/thebron-icons/mountain-city.png";
import videoCameraAlt from "../../../assets/thebron-icons/video-camera-alt.png";
import Carousel from "nuka-carousel";
import "./Category.css";
function Category({ name, icon }) {
  return (
    <Flex
      cursor="pointer"
      color="#03559E"
      alignItems="center"
      justifyContent="center"
      bg="#DBF2F8"
      py="8px"
      px="16px"
      borderRadius="10px"
      h="40px"
      me="10px"
    >
      <Image src={icon} alt="icon" mr="5px" w="20px" />
      <Text
        _hover={{ color: "blue", fontWeight: "500" }}
        fontSize={{ base: "16px", md: "18px" }}
      >
        {name}
      </Text>
    </Flex>
  );
}
function Categories() {
  let viewportWidth = document.documentElement.clientWidth;
  // const slidesNum = viewportWidth < "700" ? "4" : "8";
  let slidesNum;
  if (viewportWidth >= "1500") {
    slidesNum = 9;
  } else if (viewportWidth >= "1440") {
    slidesNum = 6.2;
  } else if (viewportWidth >= "1280") {
    slidesNum = 5.2;
  } else if (viewportWidth >= "1200") {
    slidesNum = 4.5;
  } else if (viewportWidth >= "900") {
    slidesNum = 4.2;
  } else if (viewportWidth >= "700") {
    slidesNum = 3.2;
  } else if (viewportWidth >= "600") {
    slidesNum = 3;
  } else {
    slidesNum = 1.5;
  }

  const params = {
    slidesToShow: slidesNum,
    defaultControlsConfig: {
      containerClassName: "containerClassName",
      nextButtonClassName: "nextButtonClassName",
      prevButtonClassName: "prevButtonClassName",
      nextButtonStyle: {
        display: "none",
      },
      prevButtonStyle: {
        display: "none",
      },
      pagingDotsStyle: {
        display: "none",
      },
    },
  };

  return (
    <Flex
      h={{ base: "40px" }}
      gap="10px"
      my={{ base: "2rem", md: "2rem", lg: "4rem" }}
      alignItems="center"
      justify="space-evenly"
      maxW={{
        base: "500px",
        sm: "600px",
        md: "800px",
        lg: "900px",
        xl: "1200px",
        "2xl": "1920px",
      }}
      // overflow="hidden"
    >
      <Flex
        alignItems="center"
        h="100%"
        px="16px"
        borderRadius="8px"
        bg="#03559E"
        color="#fff"
      >
        Все
      </Flex>

      <Box
        maxW={{
          // base: "250px",
          sm: "320px",
          md: "500px",
          lg: "600px",
          xl: "900px",
          "2xl": "1280px",
        }}
        className="categoryBox"
      >
        <Carousel {...params}>
          <Category name="Отель" icon={hotel} />
          <Category name="Чайхана" icon={teapot} />
          <Category name="Самолет" icon={plane} />
          <Category name="Gameclub" icon={gamepad} />
          <Category name="Ресторан" icon={restaurant} />
          <Category name="Поезд" icon={train} />
          <Category name="Лагерь" icon={school} />
          <Category name="Дача" icon={house} />
          <Category name="Санатория" icon={mountain} />
          <Category name="Кино" icon={videoCameraAlt} />
        </Carousel>
      </Box>
      <Box
        px={{ base: "10px", md: "16px" }}
        borderRadius="10px"
        as="button"
        h="40px"
        display={{ base: "none", md: "flex" }}
        alignItems="center"
        color="#454545"
        border="1px solid var(--Grey-01-90, #454545)"
        _hover={{
          transition: ".1s ease-in-out",
          color: "#888",
          border: "2px solid #888",
          fontWeight: "700",
        }}
        box-shadow="0px 8px 16px 0px rgba(0, 0, 0, 0.08)"
      >
        <Text mr="10px" display={{ base: "none", lg: "inline-block" }}>
          Фильтр
        </Text>
        <Image src={filter} alt="filterimg" minW="24px" />
      </Box>
    </Flex>
  );
}

export default Categories;
