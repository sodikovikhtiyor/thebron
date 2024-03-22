import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import hotel from "../../../assets/icons/Vector.png";
import teapot from "../../../assets/icons/train2.png";
import filter from "../../../assets/icons/Filter.png";
function Category({ name, icon }) {
  return (
    <Box
      color="#03559E;"
      display="flex"
      alignItems="center"
      bg="#DBF2F8"
      py="8px"
      px="16px"
      borderRadius="8px"
    >
      <Image src={icon} alt="icon" mr="5px" />
      {/* <img src={icon} alt="icon" /> */}
      <Text>{name}</Text>
    </Box>
  );
}
function Categories() {
  return (
    <Flex my="4rem" justify="space-between">
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
      <Category name="Game club" icon={hotel} />
      <Category name="Самолет" icon={hotel} />
      <Category name="Ресторан" icon={hotel} />
      <Category name="Поезд" icon={hotel} />
      <Category name="Лагерь" icon={hotel} />
      <Category name="Дача" icon={hotel} />
      <Category name="Санатория" icon={hotel} />
      <Category name="Кино" icon={hotel} />
      <Box
        py="8px"
        px="16px"
        borderRadius="8px"
        as="button"
        display="flex"
        alignItems="center"
      >
        <Text mr="5px"> Фильтр</Text>
        <Image src={filter} alt="" />
      </Box>
    </Flex>
  );
}

export default Categories;
