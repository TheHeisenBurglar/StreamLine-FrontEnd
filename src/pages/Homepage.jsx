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
} from "@chakra-ui/react";
import { Navbar } from "../components";
import tproll from "../assets/tp_roll.png";
import { ReactNode } from "react";
import { FiUser, FiBox, FiBookmark } from "react-icons/fi";
import { ChevronDownIcon } from "@chakra-ui/icons";

function StatsCard(props) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("coral", "chocolate")}
      rounded={"lg"}
    >
      <Flex justifyContent={"center"}>
        <Box>
          <StatLabel fontWeight={"medium"} isTruncated>
            {title}
          </StatLabel>
          <Box align="center">{icon}</Box>

          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
        </Box>
      </Flex>
    </Stat>
  );
}

export default function Homepage() {
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Inventory Management{" "}
          <Text as={"span"} color={"#33cc33"}>
            Made Easy
          </Text>
        </Heading>
        <Text  maxW={"3xl"} fontSize={"22px"}>
          Simplify inventory management with a system that prevents shortages
          and overstocking. Get email alerts for optimal stock levels and
          monitor everything through a single dashboard. Manage reservations and
          track inventory in real time to stay on top of your needs. It's an
          all-in-one solution for effortless inventory control.
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Button
            rounded={"full"}
            px={6}
            // colorScheme={"orange"}
            bg={"#33cc33"}
            _hover={{ bg: "#66ff66" }}
          >
            Request Account
          </Button>
        </Stack>
        <Divider background={"#33cc33"} />
        <Accordion allowToggle width="100%" maxW="xl" rounded="lg">
          <AccordionItem border={"none"}>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
            >
              <StatsCard
                title={"Individually Manage"}
                stat={"STAFF"}
                icon={<FiUser size={"3em"} />}
              />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text useColorModeValue="black, white">
                Set up accounts for employees in the sales department and on the
                production floor.
              </Text>
              <Button
                rounded={"full"}
                px={6}
                // colorScheme={"orange"}
                bg={"#33cc33"}
                _hover={{ bg: "#66ff66" }}
              >
                Preview This Feature
              </Button>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem border={"none"}>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
            >
              <StatsCard
                title={"Store Inventory"}
                stat={"ITEMS"}
                icon={<FiBox size={"3em"} />}
              />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text useColorModeValue="black, white">
                Create and manage inventory items that trigger automatic email
                notifications when stock is low.
              </Text>
              <Button
                rounded={"full"}
                px={6}
                // colorScheme={"orange"}
                bg={"#33cc33"}
                _hover={{ bg: "#66ff66" }}
              >
                Preview This Feature
              </Button>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem border={"none"}>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
            >
              <StatsCard
                title={"Staff Created"}
                stat={"RESERVES"}
                icon={<FiBookmark size={"3em"} />}
              />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text useColorModeValue="black, white">
                Sales personnel are able to establish and oversee reserves using
                the current inventory items.
              </Text>
              <Button
                rounded={"full"}
                px={6}
                // colorScheme={"orange"}
                bg={"#33cc33"}
                _hover={{ bg: "#66ff66" }}
              >
                Preview This Feature
              </Button>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Stack>
    </Container>
  );
}
