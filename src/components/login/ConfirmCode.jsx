import { Box, Flex, Input } from "@chakra-ui/react";
import React, { useState, useRef } from "react";
import OtpInput from "react-otp-input";

function ConfirmCode() {
  const [otp, setOtp] = useState("");
  const [user, setUser] = useState(null);

  // const [confirmationCode, setConfirmationCode] = useState([
  //   "",
  //   "",
  //   "",
  //   "",
  //   "",
  // ]);
  // const inputRefs = useRef([]);

  // const handleChange = (index, e) => {
  //   const newConfirmationCode = [...confirmationCode];
  //   newConfirmationCode[index] = e.target.value;
  //   setConfirmationCode(newConfirmationCode);

  //   // Move focus to the next input field if available
  //   if (e.target.value.length === 1 && index < 4) {
  //     inputRefs.current[index + 1].focus();
  //   }
  // };

  // const handleKeyDown = (index, e) => {
  //   // Move focus to the previous input field if the current field is empty and backspace is pressed
  //   if (e.key === "Backspace" && index > 0 && confirmationCode[index] === "") {
  //     inputRefs.current[index - 1].focus();
  //   }
  // };
  const verifyOtp = async () => {
    try {
      user.confirm();
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <OtpInput
      justifyContent="space-between"
      value={otp}
      autoFocus
      onChange={setOtp}
      numInputs={5}
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
    // <Flex justify="space-around">
    //   {confirmationCode.map((digit, index) => (
    //     <Input
    //       key={index}
    //       ref={(el) => (inputRefs.current[index] = el)}
    //       type="text"
    //       maxLength="1"
    //       value={digit}
    //       onChange={(e) => handleChange(index, e)}
    //       onKeyDown={(e) => handleKeyDown(index, e)}
    //       w="60px"
    //       h="60px"
    //       me="5px"
    //       my="10px"
    //       fontSize="20px"
    //       textAlign="center"
    //       bg="#efefef"
    //       borderRadius="8px"
    //       border="none"
    //     />

    //   ))}
    // </Flex>
  );
}

export default ConfirmCode;
