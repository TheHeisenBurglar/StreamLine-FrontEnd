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
import { getResvs } from "../Redux/resvs/resvs.actions";
import ResvCard from "../components/ResvPage/ResvCard";
export default function Reservepage() {
  const { loading, error, data } = useSelector((state) => state.invReducer);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [resvs, setResvs] = useState([]);
  useEffect(() => {
    dispatch(getResvs());
  }, []);
  useEffect(() => {
    setResvs(data);
  }, [data]);
  
  // function findIdByTag() {
  //   // Get value from search bar
  //   let input = document.getElementById("search");
  //   // SEARCH TIME
  //   let invsArray = [];
  //   invsArray = invs.forEach((temptag) => {
  //     const isVisible =
  //       temptag.name.includes(input.value) || temptag.tag.includes(input.value);
  //     let searchedCard = document.getElementById(temptag._id);
  //     searchedCard.classList.toggle("hide", !isVisible);
  //   });
  // }
  return (
    <Box padding={20}>
      <Flex>
        <Text>RESERVES</Text>
        <InputGroup justifyContent={"center"} gap={4}>
          <Input width={"60%"} id="search" /*onChange={findIdByTag}*/ placeholder="search"></Input>
        </InputGroup>
      </Flex>
      <SimpleGrid
        gap={2}
        w={"90%"}
        margin={"auto"}
        paddingTop={8}
        minChildWidth={"220px"}
      >
        {resvs?.map((el) => {
          return <ResvCard {...el} />;
        })}
      </SimpleGrid>
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
        //onClick={handleNew}
      ></IconButton>
    </Box>
  );
}
