import React, { useState } from "react";
import Title from "./Title";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  FormHelperText,
} from "@chakra-ui/react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
const CreateBlog = () => {
  const [blogData, setBlogData] = useState({
    title: "",
    src: "",
    date: "",
    desc: "",
  });
  const [titleError, setTitleError] = useState(false);
  const [srcError, setSrcError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [descError, setDescError] = useState(false);
  const [pending, setPending] = useState(false);
  const [isUpload, setIsUpload] = useState(false);
  const [show, setShow] = useState(false);
  const onChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setBlogData({ ...blogData, [name]: value });
  };
  const onClick = async (e) => {
    e.preventDefault();

    blogData.title === "" ? setTitleError(true) : setTitleError(false);
    blogData.date === "" ? setDateError(true) : setDateError(false);
    blogData.src === "" ? setSrcError(true) : setSrcError(false);
    blogData.desc === "" ? setDescError(true) : setDescError(false);

    if (blogData.date && blogData.title && blogData.src && blogData.desc) {
      setPending(true);
      let response = await fetch("/api/create", {
        method: "POST",
        body: JSON.stringify(blogData),
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
      setPending(false);

      setBlogData({
        title: "",
        src: "",
        date: "",
        desc: "",
      });
    }
  };
  return (
    <>
      <Title
        title="Create Blog Section"
        description="Create your blogs on nextjs "
        name="create_blog"
      />
      <div className="container create">
        {show ? (
          <div className="row mt-1 mb-2">
            <div className="col-md-12 col-12 col-xs-12 mx-auto">
              <Alert status={isUpload ? "success" : "error"}>
                <AlertIcon />
                <AlertTitle>
                  {isUpload
                    ? "Your Blog Successfully Upload"
                    : "Upload Failed !"}
                </AlertTitle>
                {/* <AlertDescription>
              {isUpload ? "success" : "error"}
              </AlertDescription> */}
              </Alert>
            </div>
          </div>
        ) : null}
        <div className="row mt-5">
          <div className="col-md-4 col-12 col-xs-6 col-lg-4 mx-auto">
            <FormControl>
              <FormLabel>Blog Title</FormLabel>
              <Input
                type="text"
                outlineColor="black"
                name="title"
                onChange={onChange}
                value={blogData.title}
                isInvalid={titleError}
              />
              {titleError ? (
                <FormHelperText color="red">Please fill titile.</FormHelperText>
              ) : null}
            </FormControl>
          </div>

          <div className="col-md-4 col-12 col-xs-6 col-lg-4 mx-auto">
            <FormControl>
              <FormLabel>Paste Image Url</FormLabel>
              <Input
                type="url"
                outlineColor="black"
                name="src"
                onChange={onChange}
                value={blogData.src}
                isInvalid={srcError}
              />
              {srcError ? (
                <FormHelperText color="red">Please fill url.</FormHelperText>
              ) : null}
            </FormControl>
          </div>

          <div className="col-md-4 col-12 col-xs-6 col-lg-4 mx-auto">
            <FormControl>
              <FormLabel>Pick Date</FormLabel>
              <Input
                type="date"
                outlineColor="black"
                name="date"
                onChange={onChange}
                value={blogData.date}
                isInvalid={dateError}
              />
              {dateError ? (
                <FormHelperText color="red">Please fill date.</FormHelperText>
              ) : null}
            </FormControl>
          </div>

          <div className="col-md-12 mt-4 col-12 col-xs-12 col-lg-12 mx-auto">
            <FormControl>
              <FormLabel>Write Your Blog</FormLabel>
              <Textarea
                outlineColor="green"
                name="desc"
                onChange={onChange}
                value={blogData.desc}
                isInvalid={descError}
              />
              {descError ? (
                <FormHelperText color="red">
                  Please fill description.
                </FormHelperText>
              ) : null}
            </FormControl>
          </div>
          <div className="col-md-4 mt-4 col-10 col-xs-10 col-lg-4 ">
            <Button
              isLoading={pending}
              spinnerPlacement="end"
              onClick={onClick}
              colorScheme="whatsapp"
            >
              Add Blog
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateBlog;
