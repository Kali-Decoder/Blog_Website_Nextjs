import React from "react";
import { Text } from "@chakra-ui/react";
const Footer = () => {
  return (
    <>
      <div className="container">
        <div className=" p-2 footer">
          <Text className="text-white text-center" size="sm" fontWeight="20">
            Copyright Deploy Blog's{" "}
          </Text>
        </div>
      </div>
    </>
  );
};

export default Footer;
