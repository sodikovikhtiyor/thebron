import React, { useEffect, useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Checkbox,
  Text,
  useToast,
} from "@chakra-ui/react";
import "./Modal.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

const LoginEnd = ({ isLogOpen, onLoginEndClose, userGmail }) => {
  //   const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dob, setDob] = useState("");
  const [isLoginEnd, setIsLoginEnd] = useState(isLogOpen);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://back.thebron.uz/account/register/",
        {
          first_name: firstname,
          last_name: lastname,
          phone_number: phoneNumber,
          email: 'ikhtiyorsodikov@gmail.com',
          password: dob,
          password2: dob,
        }
      );
      console.log("Registration successful:", response);
      toast({
        title: "Вы успешно прошли регистрацию !",
        // description: "We've created your account for you.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      handleClose();

      //   setIsConfirmOpen(true);
    } catch (error) {
      console.error("Registration failed:", error);
      toast({
        title: `${error}`,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  useEffect(() => {
    setIsLoginEnd(isLogOpen);
    if (isLoginEnd) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLogOpen, isLoginEnd]);
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //   };
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      handleClose();
    }
  };
  function openOptModel() {
    setIsOptOpen(true);
  }
  const closeOptModal = () => {
    setIsOptOpen(false);
  };
  const handleClose = () => {
    setIsLoginEnd(false);
    onLoginEndClose();
  };
  return (
    <>
      {isLoginEnd && (
        <div className="modal-overlay">
          <Box
            maxW={{ base: "350px", sm: "400px", md: "100%" }}
            onClick={(e) => e.stopPropagation()}
            py="28px"
            px="36px"
            h="676px"
            className="modal"
          >
            <Box maxW="md" mx="auto">
              <Text fontWeight="bold" fontSize="18px">
                Завершить регистрацию
              </Text>
              <form onSubmit={handleSubmit}>
                <FormControl id="firstName" mb={1}>
                  <Input
                    type="text"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    required
                    placeholder="Имя"
                    fontSize="16px"
                    color="#0A0A0A"
                    border-radius="10px"
                    py="8px"
                    px="16px"
                    border="2px solid #A3A3A3"
                    h="56px"
                  />
                </FormControl>
                <FormControl id="lastName">
                  <Input
                    fontSize="16px"
                    color="#0A0A0A"
                    type="text"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    required
                    py="8px"
                    px="16px"
                    border="2px solid #A3A3A3"
                    h="56px"
                    placeholder="Фамилия"
                  />
                </FormControl>
                <Text fontSize="14px" color="#454545" mt="5px" mb="15px">
                  Имя должно совпадать с данными в удостоверении личности.
                </Text>
                <FormControl id="dob" mb={1}>
                  <FormLabel>Дата рождения:</FormLabel>
                  <Input
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    required
                    py="8px"
                    px="16px"
                    border="2px solid #A3A3A3"
                    h="56px"
                  />
                </FormControl>
                <FormControl id="email" mb={4}>
                  <Input
                    type="number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                    py="8px"
                    px="16px"
                    border="2px solid #A3A3A3"
                    h="56px"
                    placeholder="Номер телефона"
                  />
                  <Text fontSize="14px" color="#454545" mt="5px" mb="20px">
                    Мы отправим потверждение и квитанцию вам на почту{" "}
                  </Text>
                </FormControl>
                <Box fontSize="12px" fontFamily="sans-serif" mb="20px">
                  <Text>
                    Нажимая <b> Согласиться и продолжить</b>, я принимаю
                    следующие документы theBron:
                  </Text>
                  <Text
                    textDecoration="underline"
                    color="#004CC4"
                    fontWeight="600"
                  >
                    Условия предоставления услуг, Условия обработки платежей, и
                    Политика конфиденциальности.
                  </Text>
                </Box>
                <Button
                  type="submit"
                  color="#fff"
                  w="100%"
                  bg="#03559E"
                  size="md"
                  py="8px"
                  px="16px"
                  mb="20px"
                >
                  Согласиться и продолжть
                </Button>

                <Text fontSize="14px">
                  theBron будет отправлять вам эксклюзивные предложения, идеи,
                  рекламные письма и push-оповещения. Вы можете отказаться от
                  них в настройках аккаунта или в маркетинговом уведомлении.
                </Text>
                <Checkbox mt="10px">
                  Я не хочу получать рекламные сообщения от{" "}
                  <NavLink to="#" color="blue" style={{ color: "#03559E" }}>
                    theBron
                  </NavLink>
                </Checkbox>
              </form>
            </Box>
          </Box>
        </div>
      )}
    </>
  );
};

export default LoginEnd;
