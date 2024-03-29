import { Box, Image } from "@chakra-ui/react";
import React from "react";
import resort from "../../../assets/images/resort.jpeg";
import Carousel from "nuka-carousel";
function Showcase() {
  const params = {
    wrapAround: true,
    autoplay: true,
    autoplayInterval: "4000",
    defaultControlsConfig: {
      containerClassName: "containerClassName",
      nextButtonClassName: "nextButtonClassName",
      prevButtonClassName: "prevButtonClassName",
      nextButtonText: "›",
      nextButtonStyle: {
        backgroundColor: "#ddddddad",
        color: "#000",
        width: "35px",
        height: "35px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "2rem",
        borderRadius: "50%",
        marginRight: "5px",
      },
      prevButtonText: "‹",
      prevButtonStyle: {
        backgroundColor: "#ddddddad",
        color: "#000",
        width: "35px",
        height: "35px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "2rem",
        borderRadius: "50%",
        marginLeft: "5px",
      },
    },
  };
  return (
    <>
      <Box>
        <Carousel {...params}>
          <Image w="100%" h="364px" src={resort} alt="resort" />
          <Image w="100%" h="364px" src={resort} alt="resort" />
          <Image w="100%" h="364px" src={resort} alt="resort" />
        </Carousel>
      </Box>
    </>
  );
}

export default Showcase;
