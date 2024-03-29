import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import arrow from "../../../assets/thebron-icons/Phosphor Icons/CaretRight.png";
import EditableInput from "../../partials/EditableInput";
function AccInfo() {
  const [inputValue, setInputValue] = useState("Initial Value");

  const handleSave = (newValue) => {
    setInputValue(newValue);
  };
  return (
    <>
      <Flex flexDir="column" gap="20px">
        <Flex gap="10px" alignItems="center">
          <NavLink to="/account/in">
            <Text as="b">Аккаунт</Text>
          </NavLink>
          <Image src={arrow} w="24px" />
          <Text as="b">Личная информация</Text>
        </Flex>
        <Heading fontSize="28px">Личная информация</Heading>
        <Flex flexDir="column">
          <Box>
            <EditableInput
              title="Имя по документам"
              initialValue="Ikhtiyor Sodikov"
              onSave={handleSave}
            />
            <EditableInput
              title="Электронный адрес"
              initialValue="workmulatov@gmail.com"
              onSave={handleSave}
            />
            <EditableInput
              title="Номера телефонов"
              initialValue="Укажите телефон, чтобы с вами могли связаться theBron и гости по потвержденным бронированиям.
               Можно добавить другие номера и указать их назначения."
              onSave={handleSave}
              btnName="Добавить"
            />
            <EditableInput
              title="Удостоверение личности государственного образца"
              onSave={handleSave}
            />
            <EditableInput
              title="Адрес"
              onSave={handleSave}
              btnName="Добавить"
            />
            <EditableInput
              title="Контактное лицо в чрезвычайные ситуации"
              onSave={handleSave}
              btnName="Добавить"
            />
          </Box>
        </Flex>
      </Flex>
    </>
  );
}

export default AccInfo;
