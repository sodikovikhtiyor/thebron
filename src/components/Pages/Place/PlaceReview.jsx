import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import CheckCircle from "../../../assets/thebron-icons/Phosphor Icons/CheckCircle.png";
import star from "../../../assets/images/star.png";
import caretRight from "../../../assets/thebron-icons/Phosphor Icons/CaretRight.png";

function PlaceReview() {
  return (
    <>
      <Flex justify="space-between" my="40px">
        <Flex flexDir="column" gap="10px">
          <Heading fontSize="18px">Общая оценка</Heading>
          <Flex align="center" gap="10px">
            5
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="219"
              height="10"
              viewBox="0 0 219 10"
              fill="none"
            >
              <rect
                y="0.109863"
                width="219"
                height="9"
                rx="4.5"
                fill="#D9D9D9"
              />
              <path
                d="M0 4.60986C0 2.12458 2.01472 0.109863 4.5 0.109863H134.695V9.10986H4.5C2.01472 9.10986 0 7.09514 0 4.60986Z"
                fill="#011120"
              />
            </svg>
          </Flex>
          <Flex align="center" gap="10px">
            4
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="219"
              height="10"
              viewBox="0 0 219 10"
              fill="none"
            >
              <rect
                y="0.928223"
                width="219"
                height="9"
                rx="4.5"
                fill="#D9D9D9"
              />
              <path
                d="M0 5.42822C0 2.94294 2.01472 0.928223 4.5 0.928223H64.978V9.92822H4.5C2.01472 9.92822 0 7.9135 0 5.42822Z"
                fill="#011120"
              />
            </svg>
          </Flex>
          <Flex align="center" gap="10px">
            3
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="219"
              height="10"
              viewBox="0 0 219 10"
              fill="none"
            >
              <rect
                y="0.746582"
                width="219"
                height="9"
                rx="4.5"
                fill="#D9D9D9"
              />
              <path
                d="M0 5.24658C0 2.7613 2.01472 0.746582 4.5 0.746582H27.6758V9.74658H4.5C2.01472 9.74658 0 7.73186 0 5.24658Z"
                fill="#011120"
              />
            </svg>
          </Flex>
          <Flex align="center" gap="10px">
            2
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="219"
              height="10"
              viewBox="0 0 219 10"
              fill="none"
            >
              <rect
                y="0.564941"
                width="219"
                height="9"
                rx="4.5"
                fill="#D9D9D9"
              />
              <path
                d="M0 5.06494C0 2.57966 2.01472 0.564941 4.5 0.564941H9.62638V9.56494H4.5C2.01472 9.56494 0 7.55022 0 5.06494Z"
                fill="#011120"
              />
            </svg>
          </Flex>
        </Flex>
        <Box bg="#D9D9D9" w="1px" h="176px" />
        <Flex
          flexDir="column"
          justify="center"
          gap="20px"
          align="center"
          fontSize="18px"
        >
          <Heading fontSize="18px">Чистота</Heading>
          <Heading fontSize="18px">4.7</Heading>
          <Image src={CheckCircle} w="32px" h="32px" />
        </Flex>
        <Box bg="#D9D9D9" w="1px" h="176px" />

        <Flex
          flexDir="column"
          justify="center"
          gap="20px"
          align="center"
          fontSize="18px"
        >
          <Heading fontSize="18px">Чистота</Heading>
          <Heading fontSize="18px">4.7</Heading>
          <Image src={CheckCircle} w="32px" h="32px" />
        </Flex>
        <Box bg="#D9D9D9" w="1px" h="176px" />

        <Flex
          flexDir="column"
          justify="center"
          gap="20px"
          align="center"
          fontSize="18px"
        >
          <Heading fontSize="18px">Чистота</Heading>
          <Heading fontSize="18px">4.7</Heading>
          <Image src={CheckCircle} w="32px" h="32px" />
        </Flex>
        <Box bg="#D9D9D9" w="1px" h="176px" />

        <Flex
          flexDir="column"
          justify="center"
          gap="20px"
          align="center"
          fontSize="18px"
        >
          <Heading fontSize="18px">Чистота</Heading>
          <Heading fontSize="18px">4.7</Heading>
          <Image src={CheckCircle} w="32px" h="32px" />
        </Flex>
        <Box bg="#D9D9D9" w="1px" h="176px" />

        <Flex
          flexDir="column"
          justify="center"
          gap="20px"
          align="center"
          fontSize="18px"
        >
          <Heading fontSize="18px">Чистота</Heading>
          <Heading fontSize="18px">4.7</Heading>
          <Image src={CheckCircle} w="32px" h="32px" />
        </Flex>
      </Flex>
      {/* Users review */}
      {/* <Box w="60px" h="60px" borderRadius="50%" bg="#d9d9d9"> */}
      <Flex gap="35px" mb="40px">
        <Flex flexDir="column" gap="16px">
          <Flex justify="start" gap="10px" alignItems="center" fontSize="18px">
            <Box w="60px" h="60px" borderRadius="50%" bg="#d9d9d9" />

            <Flex flexDir="column">
              <Text fontWeight="bold">Sven</Text>
              <Text>Германия</Text>
            </Flex>
          </Flex>
          <Flex gap="5px" fontSize="18px">
            <Image h="20px" src={star} alt="star" />
            <Image h="20px" src={star} alt="star" />
            <Image h="20px" src={star} alt="star" />
            <Image h="20px" src={star} alt="star" />
            <Image h="20px" src={star} alt="star" />
            <Text mx="16px">август 2023 г. </Text>
            <Text color="#A29F9F">Срок аренды - Около недели</Text>
          </Flex>
          <Text color="#343330">Срок аренды - Около недели</Text>
          <Text fontSize="18px">
            Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </Text>
          <Flex
            textDecoration="underline"
            gap="1rem"
            align="center"
            fontWeight="bold"
            fontSize="18px"
            // onClick={openMore}
            cursor="pointers"
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
        </Flex>
        <Flex flexDir="column" gap="16px">
          <Flex justify="start" gap="10px" alignItems="center" fontSize="18px">
            <Box w="60px" h="60px" borderRadius="50%" bg="#d9d9d9" />

            <Flex flexDir="column">
              <Text fontWeight="bold">Sven</Text>
              <Text>Германия</Text>
            </Flex>
          </Flex>
          <Flex gap="5px" fontSize="18px">
            <Image h="20px" src={star} alt="star" />
            <Image h="20px" src={star} alt="star" />
            <Image h="20px" src={star} alt="star" />
            <Image h="20px" src={star} alt="star" />
            <Image h="20px" src={star} alt="star" />
            <Text mx="16px">август 2023 г. </Text>
            <Text color="#A29F9F">Срок аренды - Около недели</Text>
          </Flex>
          <Text color="#343330">Срок аренды - Около недели</Text>
          <Text fontSize="18px">
            Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </Text>
          <Flex
            textDecoration="underline"
            gap="1rem"
            align="center"
            fontWeight="bold"
            fontSize="18px"
            // onClick={openMore}
            cursor="pointers"
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
        </Flex>
      </Flex>
      <Flex gap="35px">
        <Flex flexDir="column" gap="16px">
          <Flex justify="start" gap="10px" alignItems="center" fontSize="18px">
            <Box w="60px" h="60px" borderRadius="50%" bg="#d9d9d9" />

            <Flex flexDir="column">
              <Text fontWeight="bold">Sven</Text>
              <Text>Германия</Text>
            </Flex>
          </Flex>
          <Flex gap="5px" fontSize="18px">
            <Image h="20px" src={star} alt="star" />
            <Image h="20px" src={star} alt="star" />
            <Image h="20px" src={star} alt="star" />
            <Image h="20px" src={star} alt="star" />
            <Image h="20px" src={star} alt="star" />
            <Text mx="16px">август 2023 г. </Text>
            <Text color="#A29F9F">Срок аренды - Около недели</Text>
          </Flex>
          <Text color="#343330">Срок аренды - Около недели</Text>
          <Text fontSize="18px">
            Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </Text>
          <Flex
            textDecoration="underline"
            gap="1rem"
            align="center"
            fontWeight="bold"
            fontSize="18px"
            // onClick={openMore}
            cursor="pointers"
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
        </Flex>
        <Flex flexDir="column" gap="16px">
          <Flex justify="start" gap="10px" alignItems="center" fontSize="18px">
            <Box w="60px" h="60px" borderRadius="50%" bg="#d9d9d9" />

            <Flex flexDir="column">
              <Text fontWeight="bold">Sven</Text>
              <Text>Германия</Text>
            </Flex>
          </Flex>
          <Flex gap="5px" fontSize="18px">
            <Image h="20px" src={star} alt="star" />
            <Image h="20px" src={star} alt="star" />
            <Image h="20px" src={star} alt="star" />
            <Image h="20px" src={star} alt="star" />
            <Image h="20px" src={star} alt="star" />
            <Text mx="16px">август 2023 г. </Text>
            <Text color="#A29F9F">Срок аренды - Около недели</Text>
          </Flex>
          <Text color="#343330">Срок аренды - Около недели</Text>
          <Text fontSize="18px">
            Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </Text>
          <Flex
            textDecoration="underline"
            gap="1rem"
            align="center"
            fontWeight="bold"
            fontSize="18px"
            // onClick={openMore}
            cursor="pointers"
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
        </Flex>
      </Flex>
      <Button
        my="40px"
        bg="none"
        fontSize='18px'
        color='#000'
        borderRadius="10px"
        border="1px solid var(--Primary-secondary, #011120)"
      >
        Показать все отзывы(23)
      </Button>
      <hr />
    </>
  );
}

export default PlaceReview;
