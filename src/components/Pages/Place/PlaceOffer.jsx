import React from "react";
import room from "../../../assets/images/room.png";
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
import calendar from "../../../assets/images/calendar.png";
// import BookingDate from "./BookingDate";
function PlaceOffer() {
  return (
    <>
      <Flex gap="30px" mt="40px">
        <Box>
          <Image src={room} />
          <Heading fontSize="18px" mt="15px" mb="5px">
            Спальня
          </Heading>
          <Text>1 односпальнпя кровать</Text>
        </Box>
        <Box>
          <Image src={room} />
          <Heading fontSize="18px" mt="15px" mb="5px">
            Спальня
          </Heading>
          <Text>1 односпальнпя кровать</Text>
        </Box>
      </Flex>
      <Box>
        <Heading fontSize="18px" mt="40px" mb="15px">
          Какие удобства вас ждут
        </Heading>
        <Grid templateColumns="repeat(2, 1fr)" w="500px" rowGap="10px">
          <GridItem>Class aptent taciti </GridItem>
          <GridItem>Class aptent taciti </GridItem>
          <GridItem>Быстрый Wi-Fi </GridItem>
          <GridItem>Быстрый Wi-Fi </GridItem>
          <GridItem>Быстрый Wi-Fi </GridItem>
          <GridItem>Быстрый Wi-Fi </GridItem>
          <GridItem>Быстрый Wi-Fi </GridItem>
          <GridItem>Быстрый Wi-Fi </GridItem>
        </Grid>
        <Button
          my="40px"
          bg="none"
          borderRadius="10px"
          border="1px solid var(--Primary-secondary, #011120)"
        >
          Показать все удобства: 12
        </Button>
      </Box>
      <Box mb='40px'>
        {/* <BookingDate/> */}
        <Image src={calendar} />
      </Box >
        <hr />
    </>
  );
}

export default PlaceOffer;
