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
  Divider,
} from "@chakra-ui/react";
import { ChevronDownIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT } from "../Redux/users/user.types";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { auth, token, loading, error } = useSelector(
    (state) => state.userReducer
  );
  const dispatch = useDispatch();
  console.warn("auth: ", auth);
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
          <Box
            fontWeight={"bold"}
            onClick={() => {
              nav("/");
            }}
          >
            StreamLine
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={4}>
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  bg={useColorModeValue("gray.200", "gray.700")}
                  display={auth == true ? "block" : "none"}
                >
                  Menu
                </MenuButton>
                <MenuList>
                  <MenuItem
                    onClick={() => {
                      nav("/dash");
                    }}
                  >
                    Dashboard
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      nav("/inv");
                    }}
                  >
                    Inventories
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      nav("/resv");
                    }}
                  >
                    Reserves
                  </MenuItem>
                  <Divider />
                  <MenuItem
                    onClick={() => {
                      dispatch({ type: LOGOUT });
                    }}
                  >
                    Log Out
                  </MenuItem>
                </MenuList>
              </Menu>
              <Button
                onClick={toggleColorMode}
                bg={useColorModeValue("gray.200", "gray.700")}
              >
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Button
                bg={useColorModeValue("gray.200", "gray.700")}
                display={auth == true ? "none" : "block"}
                onClick={() => {
                  nav("/login");
                }}
              >
                Login
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
