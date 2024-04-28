import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  useColorModeValue,
  Text,
  Container,
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Heading,
  Stack,
  Button,
  Icon,
  IconProps,
  Image,
  Divider,
  Card,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Grid,
  GridItem,
  List,
  ListItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Navbar } from "../components";
import tproll from "../assets/tp_roll.png";
import { ReactNode } from "react";
import { FiUser, FiBox, FiBookmark } from "react-icons/fi";
import { ChevronDownIcon } from "@chakra-ui/icons";

function InvCard(props) {
  const { name, dim, tag, voh } = props;
  let dimen = [];
  dimen = dim.split("x");
  let tags = [];
  tags = tag.split(",");
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"3"}
      shadow={"xl"}
      border={"2px solid"}
      borderColor={useColorModeValue("gray.500", "white")}
      background={useColorModeValue("coral", "chocolate")}
      rounded={"lg"}
    >
      <Flex justifyContent={"center"}>
        <Box>
          <StatLabel fontWeight={"medium"} isTruncated>
            <Text fontSize={"lg"}>
              Item Name:{" "}
              <Card
              p={"4px"}
                bg={"gray.500"}
                textColor={"white"}
                border={"2px solid"}
                rounded={"lg"}
                _dark={{ bg: "white", textColor: "black" }}
              >
                {name}
              </Card>
            </Text>
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            Dimensions
            <Grid
              templateColumns={"repeat(2, 1fr)"}
              fontSize={"medium"}
              gap={"2"}
            >
              {dimen.map((dimen) => (
                <Card
                  bg={"gray.500"}
                  textColor={"white"}
                  border={"2px solid"}
                  rounded={"lg"}
                  _dark={{ bg: "white", textColor: "black" }}
                >
                  {dimen}
                </Card>
              ))}
            </Grid>
          </StatNumber>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            <Text>Value On Hand</Text>
            <Card
              bg={"gray.500"}
              textColor={"white"}
              border={"2px solid"}
              rounded={"lg"}
              _dark={{ bg: "white", textColor: "black" }}
            >
              ${voh}
            </Card>
          </StatNumber>
          <Button
            marginTop={"12px"}
            bgColor={useColorModeValue("white", "gray.700")}
          >
            More
          </Button>
        </Box>
      </Flex>
    </Stat>
  );
}

export default function Inventorypage() {
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Grid>
          <GridItem>
            <InvCard
              name={"2"}
              dim={"22x44"}
              tag={"paper, silk, text"}
              voh={"200"}
            />
          </GridItem>
        </Grid>
      </Stack>
    </Container>
  );
}
