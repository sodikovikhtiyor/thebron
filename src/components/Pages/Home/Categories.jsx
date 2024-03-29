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
function Category({ name, icon }) {
  return (
    <Box
      cursor="pointer"
      color="#03559E;"
      display="flex"
      alignItems="center"
      bg="#DBF2F8"
      py="8px"
      px="16px"
      borderRadius="8px"
    >
      <Image src={icon} alt="icon" mr="5px" w="20px" />
      <Text _hover={{ color: "blue", fontWeight: "700" }}>{name}</Text>
    </Box>
  );
}
function Categories() {
  return (
    <Flex my="4rem" justify="center" flexWrap="wrap" gap="10px">
      <Flex
        alignItems="center"
        py="8px"
        px="16px"
        borderRadius="8px"
        bg="#03559E"
        color="#fff"
      >
        Все
      </Flex>
      <Category name="Отель" icon={hotel} />
      <Category name="Чайхана" icon={teapot} />
      <Category name="Game club" icon={gamepad} />
      <Category name="Самолет" icon={plane} />
      <Category name="Ресторан" icon={restaurant} />
      <Category name="Поезд" icon={train} />
      <Category name="Лагерь" icon={school} />
      <Category name="Дача" icon={house} />
      {/* <Category name="Санатория" icon={hotel} />
      <Category name="Кино" icon={hotel} /> */}
      <Box
        py="8px"
        px="16px"
        borderRadius="8px"
        as="button"
        display="flex"
        alignItems="center"
        color="#666666"
        border="1px solid #666666"
        _hover={{ color: "#000", border: "1px solid #000", fontWeight: "500" }}
      >
        <Text mr="10px"> Фильтр</Text>
        <Image src={filter} alt="filterimg" />
      </Box>
    </Flex>
  );
}

export default Categories;
