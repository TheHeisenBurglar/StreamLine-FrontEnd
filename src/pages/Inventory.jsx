import {
  Flex,
  useColorModeValue,
  Text,
  Container,
  Box,
  Stat,
  StatLabel,
  StatNumber,
  Stack,
  Button,
  Card,
  Grid,
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Input,
  ModalFooter,
  SimpleGrid,
  InputGroup,
  IconButton,
  Heading,
  Divider,
} from "@chakra-ui/react";
import { ReactNode, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../Constants/config";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../Redux/store";
import { createInvs, getInvs } from "../Redux/invs/invs.actions";
import InvCard from "../components/InvsPage/InvCard";
import { PiPlusLight } from "react-icons/pi";
import { LuPackagePlus } from "react-icons/lu";
export default function Inventorypage() {
  const { loading, error, data } = useSelector((state) => state.invReducer);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [invs, setInvs] = useState([]);
  const [name, setName] = useState("");
  const [tag, setTag] = useState("");
  const [dim, setDim] = useState("");
  const [quantity, setQuantity] = useState("");
  const [cost, setCost] = useState("");
  const [voh, setVOH] = useState("");
  const [tempTag, setTempTag] = useState("");
  const handleChange = (e) => setTempTag(e.target.value);
  useEffect(() => {
    dispatch(getInvs());
  }, []);
  useEffect(() => {
    setInvs(data);
  }, [data]);
  const createInv = () => {
    dispatch(createInvs({ name, tag, dim, quantity, cost, voh }));
    onClose();
  };
  function handleNew() {
    setTag(null);
    onOpen();
  }
  function findIdByTag() {
    // Get value from search bar
    let input = document.getElementById("search");
    // SEARCH TIME
    let invsArray = [];
    invsArray = invs.forEach((temptag) => {
      const isVisible =
        temptag.name.includes(input.value) || temptag.tag.includes(input.value);
      let searchedCard = document.getElementById(temptag._id);
      searchedCard.classList.toggle("hide", !isVisible);
    });
  }
  //TAGS
  let tags = tag ? tag.split(",") : [];
  //tags = newTag.value.split(",");
  const addTag = (tag) => {
    if (!tags.includes(tag)) {
      tags.push(tag);
      setTag(tags.join(","));
    }
    let addtagElement = document.getElementById("addtag");
    addtagElement.value = "";
    console.warn("tags: ", tags)
    return(
      <div>{tags}</div>
    )
  };
  const removeTag = (tag, id) => {
    const updatedTags = tags.filter((t) => t !== tag);
    setTag(updatedTags.join(","));
  };
  return (
    <Box padding={20}>
      <Flex>
        <InputGroup justifyContent={"center"} gap={4}>
          <Input width={"60%"} id="search" onChange={findIdByTag}></Input>
        </InputGroup>
      </Flex>
      <SimpleGrid
        gap={2}
        w={"90%"}
        margin={"auto"}
        paddingTop={8}
        minChildWidth={"220px"}
      >
        {invs?.map((el) => {
          return <InvCard {...el} />;
        })}
      </SimpleGrid>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay backdropBlur={"2px"} />
        <ModalContent
          border={"2px"}
          borderColor={useColorModeValue("coral", "chocolate")}
          rounded={"lg"}
          m={"auto"}
        >
          <ModalHeader textAlign={"center"}>New Item</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Heading>Item Name</Heading>
            <Input
              value={name}
              placeholder="Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></Input>
            <Heading>Tags</Heading>
            {tags?.map((el, index) => (
              <InputGroup gap={2} m={2}>
                <Input placeholder={el} value={tags[index]}></Input>
                <Button
                bgColor={"#FE4747"}
                _hover={{
                  bg: "#FE6868",
                }}
                _focus={{
                  bg: "#FE4747",
                }}
                onClick={() => {
                  removeTag(el);
                }}>
                  DEL
                </Button>
              </InputGroup>
            ))}
            <Divider />
              <InputGroup gap={2} m={2}>
                <Input
                  placeholder="new tag"
                  onChange={handleChange}
                  id="addtag"
                ></Input>
                <Button
                  onClick={() => addTag(tempTag)}
                  bgColor={"#38DE32"}
                  _hover={{
                    bg: "#33CA2D",
                  }}
                  _focus={{
                    bg: "#38DE32",
                  }}
                >
                  ADD
                </Button>
                </InputGroup>
            <Heading>Dimensions</Heading>
            <Input
              value={dim}
              placeholder="Name"
              onChange={(e) => {
                setDim(e.target.value);
              }}
            ></Input>
            <Heading>Quantity</Heading>
            <Input
              value={quantity}
              placeholder="Name"
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            ></Input>
            <Heading>Cost</Heading>
            <Input
              value={cost}
              placeholder="Name"
              onChange={(e) => {
                setCost(e.target.value);
              }}
            ></Input>
            <Heading>Value On Hand</Heading>
            <Input
              value={voh}
              placeholder="Name"
              onChange={(e) => {
                setVOH(e.target.value);
              }}
            ></Input>
          </ModalBody>
          <ModalFooter justifyContent={"center"} gap={2}>
            <Button
              onClick={createInv}
              _light={{
                bgColor: "black",
                color: useColorModeValue("white", "black"),
              }}
            >
              Save
            </Button>
            <Button
              onClick={onClose}
              _light={{
                bgColor: "black",
                color: useColorModeValue("white", "black"),
              }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <IconButton
        position={"fixed"}
        bottom={0}
        right={0}
        margin={4}
        w={20}
        h={20}
        borderRadius={50}
        bg={useColorModeValue("#151f21", "gray.700")}
        boxShadow={
          "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;"
        }
        icon={<LuPackagePlus size={"28px"} color="white" />}
        _hover={{
          transform: "translateY(-2px)",
          boxShadow: "lg",
        }}
        onClick={handleNew}
      ></IconButton>
    </Box>
  );
}
