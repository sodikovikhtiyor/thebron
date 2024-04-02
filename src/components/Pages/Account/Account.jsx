import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import AccCard from "./AccCard.jsx";
import AccCardImg from "../../../assets/images/AccCard.png";

function Account() {
  return (
    <Box>
      <Heading>Аккаунт</Heading>
      <Flex flexDir="column" gap="4rem" mt="10px" flexWrap="wrap">
        <Text>
          <b>Faxriddin Mulatov</b>, workmulatov@gmail.com
          <NavLink to="/account/info" style={{ textDecoration: "underline" }}>
            <Text as="b" ms="10px">
              Перейти в профиль
            </Text>
          </NavLink>
        </Text>
        <Flex justify="space-between" flexWrap="wrap" gap="20px">
          <NavLink to="/account/info">
            <AccCard
              icon={AccCardImg}
              title="Личная информация"
              text="Faxriddin Mulatov, workmulatov@gmail.com"
            />
          </NavLink>
          <NavLink to="/account/privacy">
            <AccCard
              icon={AccCardImg}
              title="Вход и безопасность"
              text="Обновите пароль и обеспечьте безопасноть аккаунта"
            />
          </NavLink>
          <NavLink to="/account/payment">
            <AccCard
              icon={AccCardImg}
              title="Платежи и выплаты"
              text="Проверте платежи, выплаты, купоны и подарочные карты"
            />
          </NavLink>
        </Flex>
        {/* <Outlet /> */}
      </Flex>
    </Box>
  );
}

export default Account;
