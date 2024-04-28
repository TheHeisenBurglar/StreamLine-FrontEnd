import {
  Box,
  Button,
  ChakraBaseProvider,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../Redux/users/user.actions";
import { Link, useNavigate } from "react-router-dom";

export default function Loginpage() {
  const nav = useNavigate();
  const { auth, token, loading, error } = useSelector(
    (state) => state.userReducer
  );
  console.log(auth, token);
  if (auth) {
    nav("/inv");
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(getUser({ email, password }));
  };
  

  return (
    <Flex padding={4} w="100%">
      <div id="trailer">
        <i id="trailer-icon" className="fa-solid"></i>
      </div>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6} mt={8}>
        <Box
          rounded={"lg"}
          className="modal"
          boxShadow={"lg"}
          p={8}
          border={"2px solid coral"}
        >
          <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Login</Heading>
          </Stack>
          <Stack spacing={4} mt={8}>
            <FormControl id="email" >
              <FormLabel cursor={"none"}>Email address</FormLabel>
              <Input
              className="interactable"
              border={"2px solid coral"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel cursor={"none"}>Password</FormLabel>
              <Input
              className="interactable"
              border={"2px solid coral"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
            </FormControl>
            <Stack spacing={10}>
              
              <Button
              id="signIn"
              className="interactable"
                onClick={handleLogin}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Confirm
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
