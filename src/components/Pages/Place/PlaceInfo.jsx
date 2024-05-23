import React, { useState } from "react";
import PlaceCard from "./PlaceCard";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import wifi from "../../../assets/thebron-icons/Feather Icons/wifi.png";
// import { ChevronRightIcon } from "@chakra-ui/icons";
import caretRight from "../../../assets/thebron-icons/Phosphor Icons/CaretRight.png";

function MainInfo() {
  const [openText, setOpenText] = useState(false);
  function openMore() {
    setOpenText(true);
  }
  return (
    <Flex flexDir="column" gap="40px">
      <Heading fontSize="24px" fontWeight="700">
        Title
      </Heading>
      <Text>10 гостей 6 спален 8 кроватей 2 ванные</Text>
      <Box>
        <StarIcon />
        <Text>
          4.6 <b>24 отзыва</b>
        </Text>
      </Box>
      <hr />
      <Flex justify="start" gap="10px" alignItems="center" fontSize="18px">
        <Box w="60px" h="60px" borderRadius="50%" bg="#d9d9d9" />
        <Flex flexDir="column">
          <Text fontWeight="bold">Хозяин: Grigory Ishuk</Text>
          <Text>5 лет принимает гостей</Text>
        </Flex>
      </Flex>
      <hr />
      <Flex flexDir="column" gap="16px">
        <Flex justify="start" gap="10px" alignItems="center" fontSize="18px">
          <Image src={wifi} />
          <Flex flexDir="column">
            <Text fontWeight="bold">Быстрый Wi-Fi </Text>
            <Text>
              На скорости 235 Мбит/с вы можете принимать видео звонки и
              транслировать видео для всей группы
            </Text>
          </Flex>
        </Flex>
        <Flex justify="start" gap="10px" alignItems="center" fontSize="18px">
          <Image src={wifi} />
          <Text fontWeight="bold">Беспоатная отмена в течение 48 часов</Text>
        </Flex>
        <Flex justify="start" gap="10px" alignItems="center" fontSize="18px">
          <Image src={wifi} />
          <Flex flexDir="column">
            <Text fontWeight="bold">Самостоятельное прибытие</Text>
            <Text>Вы заселитесь самостоятельно на двери умный звонок</Text>
          </Flex>
        </Flex>
      </Flex>
      <Text>
        Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Curabitur tempus urna at turpis condimentum lobortis.Yorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
        interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos...
      </Text>
      {openText && (
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
          praesentium voluptatem consectetur! Nulla praesentium porro
          laudantium? Cumque saepe at ipsam itaque natus dignissimos doloremque,
          repellendus consectetur nam autem facere ex.
        </Text>
      )}
      <Flex
        textDecoration="underline"
        gap="4rem"
        align="center"
        fontWeight="bold"
        fontSize="18px"
        onClick={openMore}
        cursor='pointers'
      >
        <Text>Показать ещё...</Text>
        <Image
          display="inline-block"
          src={caretRight}
          alt=""
          w="26px"
          h="20px"
        />
      </Flex>
      <hr />
    </Flex>
  );
}
function PlaceInfo() {
  return (
    <>
      <Flex align="top" mt="40px" gap="24px">
        <MainInfo />
        <PlaceCard />
      </Flex>
    </>
  );
}

export default PlaceInfo;
