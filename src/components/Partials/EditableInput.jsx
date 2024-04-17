import React, { useState } from "react";
import { Input, Button, Flex, Text, Box } from "@chakra-ui/react";

const EditableInput = ({
  title,
  initialValue = "нет данных",
  onSave,
  btnName = "Редактировать",
}) => {
  const [value, setValue] = useState(initialValue);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    onSave(value);
    setIsEditing(false);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSave();
    }
  };
  return (
    <Flex align="center">
      {isEditing ? (
        <Flex
          justify="space-between"
          w={{ sm: "600px", md: "100%" }}
          py="1rem"
          borderBottom="1px solid #e0e0e0"
          alignItems={{ base: "center", md: "top" }}
        >
          <Box maxW="100%">
            <Text fontWeight="500" fontSize="18px">
              {title}
            </Text>
            <Input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={handleKeyPress}
              autoFocus
              _focusVisible="none"
              py="10px"
              w="100%"
              // maxW={{ base: "300px", sm: "400px", md: "100%" }}
              color="#000"
              border="1px solid #000"
              borderRadius="8px"
            />
          </Box>
          <Text ml={2} onClick={handleSave} cursor="pointer">
            Сохранить
          </Text>
        </Flex>
      ) : (
        <Flex
          justify="space-between"
          w={{ sm: "600px", md: "100%" }}
          borderBottom="1px solid #e0e0e0"
          py="1rem"
          alignItems={{ base: "center", md: "top" }}
        >
          <Box maxW={{ base: "350px", sm: "400px", md: "700px" }}>
            <Text fontWeight="500" fontSize="18px">
              {title}
            </Text>
            <Input
              w="100%"
              value={value}
              isReadOnly
              py="10px"
              color="#7A7A7A"
              border="none"
            />
          </Box>
          <Text
            fontWeight="700"
            ml={2}
            onClick={() => setIsEditing(true)}
            textDecoration="none"
            cursor="pointer"
          >
            {btnName}
          </Text>
        </Flex>
      )}
    </Flex>
  );
};

export default EditableInput;
