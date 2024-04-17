import { Flex, Box, Text, Heading, Button, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ArrowBackIcon, CloseIcon } from "@chakra-ui/icons";
import ConfirmCode from "./ConfirmCode";
import OtherOptions from "./OtherOptions";

function Confirm({ isConOpen, onConfirmClose }) {
  const [isConfirmOpen, setIsConfirmOpen] = useState(isConOpen);
  const [isOptionOpen, setIsOptOpen] = useState(false);

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
          <Box className="modal" maxW={{ base: "350px", sm: "400px", md: "100%" }} onClick={(e) => e.stopPropagation()} p="2rem">
            {/* <button className="close-button" onClick={handleClose}>
            X
          </button> */}
            <div className="modal-content">
              <Flex
                flexDir="column"
                gap="12px"
                maxW={{ base: "350px", sm: "400px", md: "100%" }}
                // borderRadius="20px"
                // boxShadow="0px 8px 16px 0px #00000014"
                // py="28px"
                // px="36px"
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
                  <b> +998(90) 115 92 34</b>
                </Text>
                <ConfirmCode />
                <Text fontSize="14px" fontWeight="400" color="#454545">
                  Если код не придет, то можно получить новый через 51 сек
                </Text>
                <Button w="100%" bg="#03559E" borderRadius="10px" color="#fff">
                  Продолжить
                </Button>
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
