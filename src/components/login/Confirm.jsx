import {
  Flex,
  Box,
  Text,
  Heading,
  Button,
  Input,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ArrowBackIcon, CloseIcon } from "@chakra-ui/icons";
import OtherOptions from "./OtherOptions";
import OtpInput from "react-otp-input";
import axios from "axios";
import LoginEnd from "./LoginEnd";
import "./Modal.css";

function Confirm({ isConOpen, onConfirmClose, userEmail }) {
  const [isConfirmOpen, setIsConfirmOpen] = useState(isConOpen);
  const [isOptionOpen, setIsOptOpen] = useState(false);
  const [loginEndOpen, setLoginEndOpen] = useState(false);
  const [otp, setOtp] = useState("");
  const toast = useToast();

  const verifyOtp = async (e) => {
    console.log(otp);
    e.preventDefault();
    try {
      const respons = await axios.post(
        "https://back.thebron.uz/account/verify-email/",
        {
          otp: otp,
        }
      );
      console.log("OTP is sent:", respons.data);
      toast({
        title: "Код подтверждён!",
        description: "Пожалуйста закончите регестрацию",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      setLoginEndOpen(true);
      setIsConfirmOpen(false);

    } catch (error) {
      console.error("Otp failed:", error);
      toast({
        title: `${error}`,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  useEffect(() => {
    setIsConfirmOpen(isConOpen);
    if (isConfirmOpen) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isConOpen, isConfirmOpen]);
  const handleClose = () => {
    setIsConfirmOpen(false);
    onConfirmClose();
  };
  const closeLoginEndModal = () => {
    setLoginEndOpen(false);
  };
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
  return (
    <>
      {isConfirmOpen && (
        <div className="modal-overlay">
          <Box
            className="modal"
            maxW={{ base: "350px", sm: "400px", md: "500px" }}
            onClick={(e) => e.stopPropagation()}
            p="2rem"
          >
            <div className="modal-content">
              <Flex
                flexDir="column"
                gap="12px"
                maxW={{ base: "350px", sm: "400px", md: "100%" }}
              >
                <Flex justify="space-between" alignItems="center" mb="1rem">
                  <ArrowBackIcon
                    style={{ fontSize: "1.4rem" }}
                    onClick={handleClose}
                  />
                  <CloseIcon onClick={handleClose} />
                </Flex>
                <Heading>Введите код</Heading>
                <Text>
                  Для подтверждения телефона отправили 4 значный код на{" "}
                  {/* <b> {userPhNum}</b> */}
                  <b> {userEmail}</b>
                </Text>
                <OtpInput
                  justifyContent="space-between"
                  value={otp}
                  autoFocus
                  onChange={setOtp}
                  numInputs={6}
                  renderSeparator={<span>-</span>}
                  renderInput={(props) => (
                    <Input
                      {...props}
                      minW="60px"
                      h="60px"
                      me="5px"
                      my="10px"
                      fontSize="20px"
                      textAlign="center"
                      bg="#efefef"
                      borderRadius="8px"
                      border="none"
                    />
                  )}
                />
                <Text fontSize="14px" fontWeight="400" color="#454545">
                  Если код не придет, то можно получить новый через 51 сек
                </Text>
                <Button
                  onClick={verifyOtp}
                  w="100%"
                  bg="#03559E"
                  borderRadius="10px"
                  color="#fff"
                >
                  Продолжить
                </Button>
                {/* {console.log(userEmail)} */}
                <LoginEnd
                  isLogOpen={loginEndOpen}
                  userGmail={userEmail}
                  onLoginEndClose={closeLoginEndModal}
                />
                <Button
                  onClick={openOptModel}
                  w="100%"
                  bg="#fff"
                  color="#000"
                  textDecoration="underline"
                >
                  Другие варианты
                </Button>
                <OtherOptions
                  isOptOpen={isOptionOpen}
                  onOptionClose={closeOptModal}
                />
              </Flex>
            </div>
          </Box>
        </div>
      )}
    </>
  );
}

export default Confirm;
