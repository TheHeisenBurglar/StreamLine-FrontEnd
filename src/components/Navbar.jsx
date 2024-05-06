"use client";

import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT } from '../Redux/users/user.types';

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { auth, token, loading, error } = useSelector(
    (state) => state.userReducer
  );
  const dispatch = useDispatch();
  console.warn("auth: ", auth)
  const nav = useNavigate();
  return (
    <>
      <Box
        bg={useColorModeValue("coral", "chocolate")}
        px={4}
        position={"fixed"}
        w={"100%"}
        zIndex={9999}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box fontWeight={"bold"}>StreamLine</Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button
                onClick={toggleColorMode}
                bg={useColorModeValue("gray.200", "gray.700")}
              >
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Button
                bg={useColorModeValue("gray.200", "gray.700")}
                display={auth==true?"none":"block"}
                //onClick={nav("/login")}
              >
                Login
              </Button>
              <Button
                bg={useColorModeValue("gray.200", "gray.700")}
                //display={auth==true?"block":"none"}
                onClick={()=>{
                  dispatch({type:LOGOUT})
                }}
              >
                Log Out
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
