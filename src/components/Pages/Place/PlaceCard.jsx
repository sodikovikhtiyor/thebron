import React from "react";
import {
  Box,
  Text,
  Flex,
  Grid,
  Spacer,
  GridItem,
  Image,
  Button,
} from "@chakra-ui/react";
import caretDown from "../../../assets/thebron-icons/Phosphor Icons/CaretDown.png";
const PlaceCard = () => {
  return (
    <Flex
      gap="24px"
      py="40px"
      px="20px"
      minW="530px"
      h='590px'
      borderRadius="20px"
      border="1px solid var(--Grey-01-50, #C2C2C2)"
      flexDir="column"

    >
      <Text fontSize="24px">
        <b>125 000сум</b> ночь
      </Text>
      {/* <Flex justifyContent="space-between" mb={4}>
      </Flex> */}

      <Grid
        // gridTemplateRows={'50px 1fr 30px'}
        gridTemplateColumns={"1fr 1fr"}
        borderRadius="20px"
        border="1px solid var(--Grey-01-50, #C2C2C2)"
        fontSize="18px"
      >
        <Box
          borderEnd="1px solid var(--Grey-01-50, #C2C2C2)"
          px="16px"
          py="12px"
        >
          <b>Прибытие</b>
          <Text>09.03.2024</Text>
        </Box>
        <Box px="16px" py="12px">
          <b>Выезд</b>
          <Text>12.03.2024</Text>
        </Box>
        <GridItem
          colSpan={2}
          borderTop="1px solid var(--Grey-01-50, #C2C2C2)"
          px="16px"
          py="12px"
        >
          <Flex justify="space-between" align="center">
            <Text>
              <b>Для кого:</b> <br /> 1 гость
            </Text>
            <Image src={caretDown} w="20px" h="20px" cursor="pointer" />
          </Flex>
        </GridItem>
      </Grid>
      <Button
        fontSize="18px"
        minH='48px'
        bg="var(--Primary-main, #03559E)"
        color="#fff"
        borderRadius="10px"
      >
        Button
      </Button>
      <Box>
        <Flex fontSize='20px' justifyContent="space-between" mt={4}>
          <Text textDecoration="underline">125 000сум x 5</Text>
          <Text>625 000сум</Text>
        </Flex>

        <Flex fontSize='20px' justifyContent="space-between" mt={4}>
          <Text textDecoration="underline">Плата за уборку</Text>
          <Text>100 000сум</Text>
        </Flex>

        <Flex fontSize='20px' justifyContent="space-between" my={4}>
          <Text textDecoration="underline">Сервисный сбор thebron</Text>
          <Text>20 000сум</Text>
        </Flex>
        <hr />
        <Flex  fontSize="24px" fontWeight='600' justifyContent="space-between" mt={4}>
          <Text>Всего (без учета)</Text>
          <Text>745 000сум</Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default PlaceCard;
