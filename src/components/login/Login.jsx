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
  Text,
} from "@chakra-ui/react";
import facebook from "../../assets/thebron-icons/Socials/facebook.png";
import google from "../../assets/thebron-icons/Socials/google.png";
import apple from "../../assets/thebron-icons/Socials/apple.png";
import Confirm from "./Confirm";
import { auth, provider } from "./Config";
import {
  signInWithPopup,
  FacebookAuthProvider,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import "./Modal.css";
const Login = ({ isOpen, onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
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

  function openConfirm() {
    // handleClose();
    console.log(phoneNumber);
    if (phoneNumber.length > 4) {
      setIsConfirmOpen(true);
    } else {
      alert("Enter phone number!");
    }
  }
  const closeConfirmModal = () => {
    setIsConfirmOpen(false);
  };
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
    handleClose();
  };
  const signInWithFacebook = () => {
    const fbProvider = new FacebookAuthProvider();
    signInWithPopup(auth, fbProvider)
      .then((re) => {
        console.log(re);
      })
      .catch((err) => {
        console.log(err.message);
      });
    handleClose();
  };
  function setUpRecaptha() {
    const recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {},
      auth
    );
    recaptchaVerifier.render();
    return signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier);
  }
  const sendOtp = async (e) => {
    e.preventDefault();
    console.log(phoneNumber);
    setError("");
    if (phoneNumber === "" || phoneNumber === undefined)
      return setError("Please enter a valid phone number!");
    try {
      const response = await setUpRecaptha(phoneNumber);
      setResult(response);
      setFlag(true);
    } catch (err) {
      setError(err.message);
    }
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
                  <form>
                    <Flex>
                      <PhoneInput
                        value={phoneNumber}
                        country={"uz"}
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
                      />
                      <div id="recaptcha-container" />
                      {error && <Alert variant="danger">{error}</Alert>}
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
                      onClick={sendOtp}
                    >
                      Продолжить
                    </Button>
                  </form>
                </Box>

                <Confirm
                  isConOpen={isConfirmOpen}
                  onConfirmClose={closeConfirmModal}
                  userPhNum={"+" + phoneNumber}
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
