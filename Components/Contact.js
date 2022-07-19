import React, { useState } from "react";
import Title from "./Title";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Textarea,
  Button,
} from "@chakra-ui/react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [contactData, setContactData] = useState({
    email: "",
    number: undefined,
    query: "",
  });
  const [isUpload, setIsUpload] = useState(false);
  const [show, setShow] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [queryError, setQueryError] = useState(false);

  const onChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setContactData({ ...contactData, [name]: value });
  };
  const onClick = async (e) => {
    e.preventDefault();
    setIsSending(true);

    contactData.email === "" ? setEmailError(true) : setEmailError(false);
    contactData.number === undefined
      ? setNumberError(true)
      : setNumberError(false);
    contactData.query === "" ? setQueryError(true) : setQueryError(false);

    if (contactData.email && contactData.number && contactData.query) {
      let response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(contactData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      response = await response.json();

      if (!response.isError) {
        setIsUpload(true);
        setShow(true);
      } else {
        setIsUpload(false);
        setShow(true);
      }
      setTimeout(() => {
        setShow(false);
      }, 1000);
      setIsSending(false);
      setContactData({
        email: "",
        number: '',
        query: "",
      });
    }
  };
  return (
    <>
      <Title
        title="Contact Section"
        description="Tell's the Contact section of nextjs Blog Website"
        name="contact"
      />
      <div className="container form mt-5">
        {show ? (
          <div className="row mt-1 mb-2">
            <div className="col-md-12 col-12 col-xs-12 mx-auto">
              <Alert status={isUpload ? "success" : "error"}>
                <AlertIcon />
                <AlertTitle>
                  {isUpload
                    ? "Your Query Successfully Upload"
                    : "Upload Failed !"}
                </AlertTitle>
                {/* <AlertDescription>
              {isUpload ? "success" : "error"}
              </AlertDescription> */}
              </Alert>
            </div>
          </div>
        ) : null}
        <div className="row mt-2">
          <div className="col-md-6 col-12 col-xs-6 col-lg-6 mx-auto">
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                isInvalid={emailError}
                outlineColor="black"
                onChange={onChange}
                value={contactData.email}
              />
              {emailError ? (
                <FormHelperText color="red">
                  Please enter valid email address.
                </FormHelperText>
              ) : (
                <FormHelperText>We'll never share your email.</FormHelperText>
              )}
            </FormControl>
          </div>
          <div className="col-md-6 col-12 col-xs-6 col-lg-6 mx-auto">
            <FormControl>
              <FormLabel>Phone Number</FormLabel>
              <Input
                type="number"
                name="number"
                isInvalid={numberError}
                outlineColor="black"
                onChange={onChange}
                value={contactData.number}
              />
              {numberError ? (
                <FormHelperText color="red">
                  Please enter valid number.
                </FormHelperText>
              ) : (
                <FormHelperText>We'll never share your number.</FormHelperText>
              )}
            </FormControl>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12 col-12 col-xs-12 col-lg-12 mx-auto">
            <FormControl>
              <FormLabel>Query</FormLabel>
              <Textarea
                placeholder="Please Enter Your Query"
                outlineColor="black"
                name="query"
                color="teal"
                onChange={onChange}
                value={contactData.query}
                isInvalid={queryError}
              />
              {queryError ? (
                <FormHelperText color="red">
                  Please enter valid Query.
                </FormHelperText>
              ) : null}
            </FormControl>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4 col-12 col-xs-4 col-lg-4 ">
            <Button
              colorScheme="facebook"
              onClick={onClick}
              isLoading={isSending}
              spinnerPlacement="start"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
