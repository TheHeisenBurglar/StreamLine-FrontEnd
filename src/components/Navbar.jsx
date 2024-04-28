'use client'

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
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'


export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const nav = useNavigate();
  return (
    <>
      <Box bg={useColorModeValue('coral', 'chocolate')} px={4} position={'fixed'} w={'100%'}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box fontWeight={"bold"}>StreamLine</Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode} bg={useColorModeValue('gray.200', 'gray.700')}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Button bg={useColorModeValue('gray.200', 'gray.700')} onClick={()=>{
                    nav("/login")
                  }}>
                Login
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}