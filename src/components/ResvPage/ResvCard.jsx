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
import { updateResvs } from "../../Redux/resvs/resvs.actions";
import { useState } from "react";

export default function ResvCard({ invitem, amount, ordernum, username, status, _id }) {
  const dispatch = useDispatch();
  //NEW
  const [tempNum, setTempNum] = useState(ordernum)
  const [tempAmount, setTempAmount] = useState(amount)
  const [tempPerson, setTempPerson] = useState(username)
  const { isOpen, onOpen, onClose } = useDisclosure();
 
  // //OLD
  // const updateInv = () => {
  //   dispatch(
  //     updateInvs(_id, {
  //       name: newName,
  //       tag: newTag,
  //       dim: newDim,
  //       quantity: newQuantity,
  //       cost: newCost,
  //       voh: newVoh,
  //     })
  //   );
  // };
  // //VALUE ON HAND
  // const handleVOH = (price, amount) =>{
  //   setVoh(price*amount)
  //   setCost(price)
  //   setQuantity(amount)
  // }

  // // DIMENSIONS
  // let dims = newDim ? newDim.split("x") : [];

  // const handleSetDims = (index, dimension) => {
  //   dims[index] = (dimension);
  //   setDim(dims.join("x"));
  // }
  // //TAGS
  // let tags = newTag ? newTag.split(",") : [];
  // //tags = newTag.value.split(",");
  // const addTag = (tag) => {
  //   if (!tags.includes(tag)) {
  //     tags.push(tag);
  //     setTag(tags.join(","));
  //   }
  //   let addtagElement = document.getElementById("addtag");
  //   addtagElement.value = "";
  // };
  // const removeTag = (tag, id) => {
  //   const updatedTags = tags.filter((t) => t !== tag);
  //   setTag(updatedTags.join(","));
  // };
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
            {ordernum}
          </Heading>
        </Stack>
        <Text>Sales Person:</Text>
        <Heading>{username}</Heading>
        <Text>Satus:</Text>
        <Button bg={"green"}>OPEN</Button>
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
              Reserve Information
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Heading>Order #:</Heading>
              <Input
                value={tempNum}
                placeholder={ordernum}
                textAlign={"center"}
                onChange={(e) => {
                  setTempNum(e.target.value);
                }}
              ></Input>
              <Heading>Sales Person:</Heading>
              <Input
                value={tempPerson}
                placeholder={username}
                textAlign={"center"}
                onChange={(e) => {
                  setTempPerson(e.target.value);
                }}
              ></Input>
              <Heading>Amount:</Heading>
              <Input
                placeholder={tempAmount}
                value={amount}
                onChange={(e) => {
                  setTempAmount(e.target.value);
                }}
                textAlign={"center"}
              ></Input>
              <Heading>Status</Heading>
              <Text>{status}</Text>
              <Heading>Inv Item</Heading>
              <Text>{invitem}</Text>
            </ModalBody>
            <ModalFooter justifyContent={"center"} gap={2}>
              <Button
                //onClick={updateInv}
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
