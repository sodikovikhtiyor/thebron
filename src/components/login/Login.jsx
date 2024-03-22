import React, { useEffect, useState } from "react";
import "./Modal.css";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import envelope from "../../assets/icons/envelope.png";
import google from "../../assets/icons/google.png";
import facebook from "../../assets/icons/facebook.png";
import apple from "../../assets/icons/apple.png";
import Confirm from "./Confirm";
const Login = ({ isOpen, onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [number, setNumber] = useState("");
  const handleSelectChange = (event) => {
    setNumber(event.target.value);
    console.log(number);
  };
  // Update state when `isOpen` prop changes
  useEffect(() => {
    setIsModalOpen(isOpen);
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
  const selectStyle = {
    width: "100%",
    border: "1px solid #C2C2C2",
    borderTopRadius: "10px",
    padding: "16px 22px",
    borderStartStartRadius: "10px",
    borderStartEndRadius: "10px",
    fontSize: "1rem",
  };
  function openConfirm() {
    // handleClose();
    setIsConfirmOpen(true);
  }
  const closeConfirmModal = () => {
    setIsConfirmOpen(false);
  };
  return (
    <>
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleClose}>
          <Box className="modal" onClick={(e) => e.stopPropagation()} p="2rem">
            {/* <button className="close-button" onClick={handleClose}>
              X
            </button> */}
            <div className="modal-content">
              <Flex
                // border="1px solid #C2C2C2"
                flexDir="column"
                gap="12px"
                w="450px"
              >
                {/* <Box
                  onClick={handleClose}
                  pos="absolute"
                  mt="-2.5rem"
                  ms="-2rem"
                >
                  <CloseIcon />
                </Box> */}
                <Heading textAlign="center">
                  Добро пожаловать в <span>theBron</span>
                </Heading>
                <Text textAlign="center">Войдите или зарегистрируйтесь</Text>
                <Box>
                  <select
                    id="selectInput"
                    value={number}
                    onChange={handleSelectChange}
                    style={selectStyle}
                  >
                    <option value="uz">Uzb(+998)</option>
                    <option value="ru">Rus(+7)</option>
                    <option value="en">USA(+1)</option>
                  </select>
                  <Input
                    fontSize="1rem"
                    placeholder="Номер телефона"
                    type="tel"
                    size="lg"
                    py="16px"
                    w="100%"
                    px="28.8px"
                    border="1px solid #C2C2C2"
                    borderBottomRadius="10px"
                  />
                </Box>
                <Text fontSize="14px" fontWeight="400" color="#454545">
                  Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </Text>
                <Button
                  w="100%"
                  bg="#03559E"
                  borderRadius="10px"
                  color="#fff"
                  // isOpen={isModalOpen}
                  // onClose={closeModal}
                  onClick={openConfirm}
                >
                  Продолжить
                </Button>
                <Confirm
                  isConOpen={isConfirmOpen}
                  onConfirmClose={closeConfirmModal}
                />
                <Flex justify="space-between" alignItems="center" gap="10px">
                  <hr width="300px" />
                  <Text color="#666666">или</Text>
                  <hr width="300px" />
                </Flex>
                <Flex
                  as="button"
                  justifyContent="start"
                  gap="6rem"
                  w="100%"
                  border="1px solid #0A0A0A"
                  borderRadius="8px"
                  bg="#fff"
                >
                  <Image src={envelope} />
                  <Text fontWeight="700">C помощью эл почты</Text>
                </Flex>
                <Flex
                  as="button"
                  justifyContent="start"
                  gap="6rem"
                  w="100%"
                  border="1px solid #0A0A0A"
                  borderRadius="8px"
                  bg="#fff"
                >
                  <Image src={google} />
                  <Text fontWeight="700">C помощью эл почты</Text>
                </Flex>
                <Flex
                  as="button"
                  justifyContent="start"
                  gap="6rem"
                  w="100%"
                  border="1px solid #0A0A0A"
                  borderRadius="8px"
                  bg="#fff"
                >
                  <Image src={facebook} />
                  <Text fontWeight="700">C помощью эл почты</Text>
                </Flex>
                <Flex
                  as="button"
                  justifyContent="start"
                  gap="6rem"
                  w="100%"
                  border="1px solid #0A0A0A"
                  borderRadius="8px"
                  bg="#fff"
                >
                  <Image src={apple} />
                  <Text fontWeight="700">C помощью эл почты</Text>
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
