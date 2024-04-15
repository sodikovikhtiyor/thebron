import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ArrowBackIcon, CloseIcon } from "@chakra-ui/icons";
import OtherOption from "./OtherOption";
import messageIcon from "../../assets/thebron-icons/Feather Icons/message-square.png";
import telegramLogo from "../../assets/thebron-icons/Phosphor Icons/TelegramLogo.png";
import phoneOutgoing from "../../assets/thebron-icons/Phosphor Icons/PhoneOutgoing.png";
function OtherOptions({ isOptOpen, onOptionClose }) {
  const [isOptionOpen, setIsOptOpen] = useState(isOptOpen);

  useEffect(() => {
    setIsOptOpen(isOptOpen);
  }, [isOptOpen]);
  const handleClose = () => {
    setIsOptOpen(false);
    onOptionClose();
  };
  const borderBottomStyle = {
    border: "1px solid #e0e0e0",
  };
  return (
    <>
      {isOptionOpen && (
        <div className="modal-overlay">
          <Box className="modal" onClick={(e) => e.stopPropagation()} p="2rem">
            <Flex flexDir="column" gap="12px" maxW={{ base: "350px", sm: "400px", md: "100%" }}>
              <Flex justify="space-between" alignItems="center" mb="1rem">
                <ArrowBackIcon
                  style={{ fontSize: "1.4rem" }}
                  onClick={handleClose}
                />
                <CloseIcon onClick={handleClose} />
              </Flex>
              <Heading>Другие варианты</Heading>
              <OtherOption
                className={borderBottomStyle}
                icon={messageIcon}
                name="SMS"
                text="Мы отпрвим вам код"
              />
              <OtherOption
                className={borderBottomStyle}
                icon={telegramLogo}
                name="Telegram"
                text="Мы отправим вам код во Wi-Fi"
              />
              <OtherOption
                icon={phoneOutgoing}
                name="Телефонный звонок"
                text="Мы позвоним и сообщим код"
              />
              <Button w="100%" bg="#011120" borderRadius="10px" color="#fff">
                Отправить код ещё раз
              </Button>
            </Flex>
          </Box>
        </div>
      )}
    </>
  );
}

export default OtherOptions;
