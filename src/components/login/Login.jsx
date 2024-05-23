import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  Alert,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import facebook from "../../assets/thebron-icons/Socials/facebook.png";
import google from "../../assets/thebron-icons/Socials/google.png";
import apple from "../../assets/thebron-icons/Socials/apple.png";
import Confirm from "./Confirm";
import { auth, provider } from "./Config";
import { signInWithRedirect, FacebookAuthProvider } from "firebase/auth";
import "./Modal.css";
import axios from "axios";
const Login = ({ isOpen, onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [value, setValue] = useState("");
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://back.thebron.uz/account/register/",
        {
          first_name: "string",
          last_name: "string",
          phone_number: "+" + phoneNumber,
          email: email,
          password: "string",
          password2: "string",
        }
      );
      // console.log("Registration successful:", response.data);
      toast({
        title: "Мы отправили вам КОД подтверждения",
        status: "info",
        duration: 4000,
        isClosable: true,
      });
      setIsConfirmOpen(true);
    } catch (error) {
      console.error("Registration failed:", error.response.data.email[0]);
      toast({
        title: `${error.response.data.email[0]}`,
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      // setIsConfirmOpen(false);
    }
  };
  useEffect(() => {
    setIsModalOpen(isOpen);
    setValue(localStorage.getItem("email"));
    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, isModalOpen]);

  const handleClose = () => {
    setIsModalOpen(false);
    onClose();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      handleClose();
    }
  };
  const closeConfirmModal = () => {
    setIsConfirmOpen(false);
  };
  const signInWithGoogle = () => {
    signInWithRedirect(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
    handleClose();
  };
  const signInWithFacebook = () => {
    const fbProvider = new FacebookAuthProvider();
    signInWithRedirect(auth, fbProvider)
      .then((re) => {
        console.log(re);
      })
      .catch((err) => {
        console.log(err.message);
      });
    handleClose();
  };
  return (
    <>
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleClose}>
          <Box
            maxW={{ base: "350px", sm: "400px", md: "100%" }}
            className="modal"
            onClick={(e) => e.stopPropagation()}
            px="2rem"
          >
            <div className="modal-content">
              <Flex
                flexDir="column"
                gap="12px"
                maxW={{ base: "100%", md: "400px" }}
              >
                <Heading textAlign="center">
                  Добро пожаловать в <span>theBron</span>
                </Heading>
                <Text textAlign="center">Войдите или зарегистрируйтесь</Text>
                <Box>
                  <form onSubmit={handleSubmit}>
                    <Flex flexDir="column">
                      {/* <PhoneInput
                        country={"uz"}
                        value={phoneNumber}
                        onChange={setPhoneNumber}
                        placeholder="Enter Phone Number"
                        containerStyle={{
                          width: "100%",
                        }}
                        buttonStyle={{
                          background: "#fff",
                          height: "48px",
                          borderRadius: "10px 0 0 10px",
                        }}
                        inputStyle={{
                          borderRadius: "10px",
                          height: "48px",
                          width: "100%",
                          fontWeight: "bold",
                        }}
                      /> */}

                      <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        w="100%"
                        mt="10px"
                        h="64px"
                        fontSize="16px"
                        placeholder="Эл. почта"
                        required
                      />
                      <div id="recaptcha-container" />
                    </Flex>

                    <Text
                      fontSize="14px"
                      fontWeight="400"
                      color="#454545"
                      my="5px"
                    >
                      Мы позвоним вам или отправим SMS, чтобы подтвердить номер
                      телефона. Применяются стандартные условия вашего тарифа на
                      прием сообщений и передачу данных. Политика
                      конфиденциальности
                    </Text>
                    <Button
                      w="100%"
                      bg="#03559E"
                      borderRadius="10px"
                      color="#fff"
                      type="submit"
                      // onClick={openConfirm}
                    >
                      Продолжить
                    </Button>
                  </form>
                </Box>

                <Confirm
                  isConOpen={isConfirmOpen}
                  onConfirmClose={closeConfirmModal}
                  // userPhNum={phoneNumber}
                  userEmail={email}
                />
                <Flex justify="space-between" alignItems="center" gap="10px">
                  <hr width="300px" />
                  <Text color="#666666">или</Text>
                  <hr width="300px" />
                </Flex>
                <Flex
                  justify={{ base: "space-around", md: "center" }}
                  flexDir={{ base: "row", md: "column" }}
                  gap={{ base: "0", md: "1rem" }}
                >
                  <Flex
                    as="button"
                    justifyContent={{ base: "center", md: "start" }}
                    gap={{ base: "0", md: "4rem" }}
                    w={{ base: "50px", md: "100%" }}
                    border="1px solid #0A0A0A"
                    borderRadius="8px"
                    bg="#fff"
                    py={{ base: "10px", md: "10px" }}
                    px={{ base: "0", md: "28.8px" }}
                  >
                    <Image src={google} />
                    <Text
                      onClick={signInWithGoogle}
                      display={{ base: "none", md: "inline-block" }}
                      fontWeight="700"
                    >
                      C помощью эл почты
                    </Text>
                  </Flex>
                  <Flex
                    as="button"
                    justifyContent={{ base: "center", md: "start" }}
                    gap={{ base: "0", md: "4rem" }}
                    w={{ base: "50px", md: "100%" }}
                    border="1px solid #0A0A0A"
                    borderRadius="8px"
                    bg="#fff"
                    py={{ base: "10px", md: "10px" }}
                    px={{ base: "0", md: "28.8px" }}
                  >
                    <Image src={facebook} />
                    <Text
                      display={{ base: "none", md: "inline-block" }}
                      fontWeight="700"
                      onClick={signInWithFacebook}
                    >
                      C помощью эл почты
                    </Text>
                  </Flex>
                  <Flex
                    as="button"
                    justifyContent={{ base: "center", md: "start" }}
                    gap={{ base: "0", md: "4rem" }}
                    w={{ base: "50px", md: "100%" }}
                    border="1px solid #0A0A0A"
                    borderRadius="8px"
                    bg="#fff"
                    py={{ base: "10px", md: "10px" }}
                    px={{ base: "0", md: "28.8px" }}
                  >
                    <Image src={apple} />
                    <Text
                      display={{ base: "none", md: "inline-block" }}
                      fontWeight="700"
                    >
                      C помощью эл почты
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </div>
          </Box>
        </div>
      )}
    </>
  );
};

export default Login;
