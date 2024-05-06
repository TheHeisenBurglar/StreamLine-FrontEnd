import {
  Box,
  Button,
  Text,
  Stack,
  Heading,
  useColorModeValue,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Input,
  Divider,
  InputGroup,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { updateInvs } from "../../Redux/invs/invs.actions";
import { useState } from "react";

export default function InvCard({ name, tag, dim, cost, voh, _id }) {
  const dispatch = useDispatch();

  const [tempTag, setTempTag] = useState("");
  const [tempDim, setTempDim] = useState("");
  const handleChange = (e) => setTempTag(e.target.value);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newName, setName] = useState(name);
  const [newTag, setTag] = useState(tag);
  const [newDim, setDim] = useState(dim);
  const [newCost, setCost] = useState(cost);
  const [newVoh, setVoh] = useState(voh);
  const updateInv = () => {
    dispatch(
      updateInvs(_id, {
        name: newName,
        tag: newTag,
        dim: newDim,
        cost: newCost,
        voh: newVoh,
      })
    );
  };
  // DIMENSIONS
  let dims = newDim ? newDim.split("x") : [];

  const handleSetDims = (index, dimension) => {
    dims[index] = (dimension);
    setDim(dims.join("x"));
  }
  //TAGS
  let tags = newTag ? newTag.split(",") : [];
  //tags = newTag.value.split(",");
  const addTag = (tag) => {
    if (!tags.includes(tag)) {
      tags.push(tag);
      setTag(tags.join(","));
    }
    let addtagElement = document.getElementById("addtag");
    addtagElement.value = "";
  };
  const removeTag = (tag, id) => {
    const updatedTags = tags.filter((t) => t !== tag);
    setTag(updatedTags.join(","));
  };
  return (
    <Box
      maxW={"270px"}
      w={"full"}
      border={"2px"}
      borderColor={useColorModeValue("coral", "chocolate")}
      boxShadow={"2xl"}
      rounded={"md"}
      overflow={"hidden"}
      id={_id}
    >
      <Box p={6}>
        <Stack spacing={0} align={"center"}>
          <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
            {name}
          </Heading>
        </Stack>
        <Text>Dimensions:</Text>
        <Stack direction={"row"} justify={"center"} spacing={3}>
          <Stack
            spacing={0}
            align={"center"}
            border={"2px"}
            _dark={"chocolate"}
            rounded={"md"}
            minWidth={"80px"}
          >
            <Text fontWeight={600}>{dims[0]}</Text>
          </Stack>
          <Text>X</Text>
          <Stack
            spacing={0}
            align={"center"}
            border={"2px"}
            _dark={"chocolate"}
            rounded={"md"}
            minWidth={"80px"}
          >
            <Text fontWeight={600}>{dims[1]}</Text>
          </Stack>
        </Stack>
        <Text>Tag(s):</Text>
        <Stack direction={"row"} justify={"center"} spacing={6}>
          <Stack
            spacing={0}
            align={"center"}
            maxHeight={"70px"}
            overflowY={"scroll"}
          >
            {tags?.map((el) => (
              <Text
                fontWeight={600}
                border={"2px"}
                _dark={"chocolate"}
                rounded={"md"}
                minWidth={"100px"}
              >
                {el}
              </Text>
            ))}
          </Stack>
        </Stack>

        <Button
          w={"full"}
          mt={4}
          bg={useColorModeValue("#151f21", "gray.700")}
          color={"white"}
          rounded={"md"}
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "lg",
          }}
          onClick={onOpen}
        >
          More
        </Button>
        <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
          <ModalOverlay backdropBlur="2px" />
          <ModalContent
            border={"2px"}
            borderColor={useColorModeValue("coral", "chocolate")}
            rounded={"lg"}
          >
            <ModalHeader textAlign={"center"}>
              Item Information
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Heading>Item Name:</Heading>
              <Input
                value={newName}
                placeholder={name}
                textAlign={"center"}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              ></Input>
              <Heading>Dimensions:</Heading>
              <Box display={"flex"}>
                <Input width={"45%"} placeholder={dims[0]} textAlign={"center"} value={dims[0]}  onChange={(e) => handleSetDims(0, e.target.value)}></Input>
                <Text width={"10%"} fontSize={"x-large"} align={"center"}>X</Text>
                <Input width={"45%"} placeholder={dims[1]} textAlign={"center"} value={dims[1]} onChange={(e) => handleSetDims(1, e.target.value)}></Input>
              </Box>
              <Heading>Tags:</Heading>
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
                    }}
                  >
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
              <Heading>Cost:</Heading>
              <Input
                placeholder={"$" + cost}
                value={newCost}
                onChange={(e) => {
                  setCost(e.target.value);
                }}
                textAlign={"center"}
              ></Input>
              <Heading>Value On Hand (VOH)</Heading>
              <Input
                placeholder={"$" + voh}
                value={newVoh}
                onChange={(e) => {
                  setVoh(e.target.value);
                }}
                textAlign={"center"}
              ></Input>
            </ModalBody>
            <ModalFooter justifyContent={"center"} gap={2}>
              <Button
                onClick={updateInv}
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
      </Box>
    </Box>
  );
}
