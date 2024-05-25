import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import caretRight from "../../../assets/thebron-icons/Phosphor Icons/CaretRight.png";
import star from "../../../assets/thebron-icons/Phosphor Icons/Star.png";

function ImportantInfo() {
  return (
    <>
      <Box>
        <Heading fontSize="20px" my="40px">
          Где вы будете
        </Heading>
        <AspectRatio ratio={16 / 9} h="500px" border="2px solid #efefef">
          <iframe
            src="https://yandex.uz/map-widget/v1/?ll=69.279737%2C41.311151&z=12"
            width="560"
            height="400"
          ></iframe>
        </AspectRatio>
        <Heading fontSize="20px" my="40px">
          Остров Gukhdи, Швеция
        </Heading>
        <Text mb="10px" maxW="950px">
          Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Curabitur tempus urna at turpis condimentum
          lobortis.Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos...
        </Text>
        <Flex
          textDecoration="underline"
          gap="4rem"
          align="center"
          fontWeight="bold"
          fontSize="18px"
          cursor="pointer"
          mb="40px"
        >
          <Text>Показать ещё...</Text>
          <Image
            display="inline-block"
            src={caretRight}
            alt="right"
            w="26px"
            h="20px"
          />
        </Flex>
        <hr />
        {/* ///////////////////////////////////////////////////////////////////////////////////////////// */}
        <Flex gap="35px" mb="40px" mt="40px" align="end">
          <Flex flexDir="column" gap="16px">
            <Flex
              justify="start"
              gap="10px"
              alignItems="center"
              fontSize="18px"
            >
              <Box w="60px" h="60px" borderRadius="50%" bg="#d9d9d9" />

              <Flex flexDir="column" justify="space-between">
                <Text fontWeight="bold">Sven</Text>
                <Text color="#7B7979">
                  Вступление в сообщество: февраль 2023 г
                </Text>
              </Flex>
            </Flex>
            <Flex gap="5px" fontSize="18px" align="center">
              <Image h="20px" src={star} alt="star" />
              <Text mx="16px">24 отзыва</Text>
              <Image h="20px" src={star} alt="star" />
              <Text mx="16px">Личность потверждения</Text>
            </Flex>
            <Text fontSize="18px" w="600px" display="inline-block">
              Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis.Yorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nunc vulputate libero et{" "}
              <b>
                {" "}
                <u>Показать ещё...</u>
              </b>
            </Text>
          </Flex>
          <Flex flexDir="column" gap="16px">
            <Text>Языки: Русский, Узбекиский, Англиский</Text>
            <Text>Быстрота ответов: 100%</Text>
            <Text>Время ответа: 2 часа</Text>
            <Button
              border-radius="10px"
              color="#fff"
              w="250px"
              bg="var(--Primary-main, #03559E)"
            >
              Связаться с хозяином
            </Button>
          </Flex>
        </Flex>
        {/* ///////////////////////////////////////////////////////////////////////////////////////////// */}
        <hr />
        <Box>
          <Heading fontSize="20px" my="40px">
            Важная информация
          </Heading>
          <Flex justify="space-between" maxW="1200px">
            <Flex flexDir="column" gap="16px">
              <Text>Правила дома: 14:00</Text>
              <Text>Правила дома до 12:00</Text>
              <Text>Максимум 3 гостя</Text>
              <Flex
                textDecoration="underline"
                gap="1rem"
                align="center"
                fontWeight="bold"
                fontSize="18px"
                cursor="pointer"
                mb="40px"
              >
                <Text>Показать ещё...</Text>
                <Image
                  display="inline-block"
                  src={caretRight}
                  alt="right"
                  w="26px"
                  h="20px"
                />
              </Flex>
            </Flex>
            <Flex flexDir="column" gap="16px">
              <Text>Правила дома: 14:00</Text>
              <Text>Правила дома до 12:00</Text>
              <Text>Максимум 3 гостя</Text>
              <Flex
                textDecoration="underline"
                gap="1rem"
                align="center"
                fontWeight="bold"
                fontSize="18px"
                cursor="pointer"
                mb="40px"
              >
                <Text>Показать ещё...</Text>
                <Image
                  display="inline-block"
                  src={caretRight}
                  alt="right"
                  w="26px"
                  h="20px"
                />
              </Flex>
            </Flex>
            <Flex flexDir="column" gap="16px">
              <Text>Правила дома: 14:00</Text>
              <Text>Правила дома до 12:00</Text>
              <Text>Максимум 3 гостя</Text>
              <Flex
                textDecoration="underline"
                gap="1rem"
                align="center"
                fontWeight="bold"
                fontSize="18px"
                cursor="pointer"
                mb="40px"
              >
                <Text>Показать ещё...</Text>
                <Image
                  display="inline-block"
                  src={caretRight}
                  alt="right"
                  w="26px"
                  h="20px"
                />
              </Flex>
            </Flex>
          </Flex>
        </Box>
        <Box>
          <Heading fontSize="20px" my="40px">
            Важная информация
          </Heading>
          <Flex justify="space-between" maxW="1200px">
            <Flex flexDir="column" gap="16px">
              <Text>Правила дома: 14:00</Text>
              <Text>Правила дома до 12:00</Text>
              <Text>Максимум 3 гостя</Text>
              <Flex
                textDecoration="underline"
                gap="1rem"
                align="center"
                fontWeight="bold"
                fontSize="18px"
                cursor="pointer"
                mb="40px"
              >
                <Text>Показать ещё...</Text>
                <Image
                  display="inline-block"
                  src={caretRight}
                  alt="right"
                  w="26px"
                  h="20px"
                />
              </Flex>
            </Flex>
            <Flex flexDir="column" gap="16px">
              <Text>Правила дома: 14:00</Text>
              <Text>Правила дома до 12:00</Text>
              <Text>Максимум 3 гостя</Text>
              <Flex
                textDecoration="underline"
                gap="1rem"
                align="center"
                fontWeight="bold"
                fontSize="18px"
                cursor="pointer"
                mb="40px"
              >
                <Text>Показать ещё...</Text>
                <Image
                  display="inline-block"
                  src={caretRight}
                  alt="right"
                  w="26px"
                  h="20px"
                />
              </Flex>
            </Flex>
            <Flex flexDir="column" gap="16px">
              <Text>Правила дома: 14:00</Text>
              <Text>Правила дома до 12:00</Text>
              <Text>Максимум 3 гостя</Text>
              <Flex
                textDecoration="underline"
                gap="1rem"
                align="center"
                fontWeight="bold"
                fontSize="18px"
                cursor="pointer"
                mb="40px"
              >
                <Text>Показать ещё...</Text>
                <Image
                  display="inline-block"
                  src={caretRight}
                  alt="right"
                  w="26px"
                  h="20px"
                />
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </>
  );
}

export default ImportantInfo;
