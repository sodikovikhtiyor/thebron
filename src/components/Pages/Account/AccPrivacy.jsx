import {  Flex, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import EditableInput from "../../Partials/EditableInput";

function AccPrivacy() {
  const [inputValue, setInputValue] = useState("Initial Value");

  const handleSave = (newValue) => {
    setInputValue(newValue);
  };
  return (
    <>wd 
      <Flex mb="2rem">
        <NavLink to="/">
          <Text
            p="10px"
            pe="20px"
            color="#03559E"
            borderBottom="3px solid #03559E"
          >
            Войти
          </Text>
        </NavLink>
        <NavLink>
          <Text
            p="10px"
            pe="20px"
            color="#454545"
            borderBottom="3px solid #E0E0E0"
            fontWeight="700"
            _hover={{
              color: "#03559E",
              borderBottom: "3px solid #03559E",
              transition: ".3s ease-in-out",
            }}
          >
            Запросы на вход
          </Text>
        </NavLink>
        <NavLink>
          <Text
            fontWeight="700"
            p="10px"
            pe="20px"
            color="#454545"
            borderBottom="3px solid #E0E0E0"
            _hover={{
              color: "#03559E",
              borderBottom: "3px solid #03559E",
              transition: ".3s ease-in-out",
            }}
          >
            Совместный доступ
          </Text>
        </NavLink>
      </Flex>
      <Heading mt="2rem" fontSize="28px">
        Вход
      </Heading>

      <EditableInput
        title="Пароль"
        initialValue="Дата последнего изменения: 8 дней назад"
        btnName="Обновить"
        onSave={handleSave}
      />
      <Heading mt="2rem" fontSize="28px">
        Аккаунты в социальных сетях
      </Heading>

      <EditableInput
        title="Facebook"
        initialValue="Не подключено"
        btnName="Подключиться"
        onSave={handleSave}
      />
      <EditableInput
        title="Google"
        initialValue="Подключено"
        btnName="Отключиться"
        onSave={handleSave}
      />
      <Heading mt="2rem" fontSize="28px">
        Последние устройства
      </Heading>

      <EditableInput
        title="Сеанс"
        initialValue="2 марта 2024 г. в 20:40"
        btnName="Отключиться"
        onSave={handleSave}
      />
    </>
  );
}

export default AccPrivacy;
