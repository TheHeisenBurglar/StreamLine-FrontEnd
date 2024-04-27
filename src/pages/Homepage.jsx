import { Box, Image } from "@chakra-ui/react";
import { Navbar } from "../components";
import tproll from "../assets/tp_roll.png"

export default function Homepage(){
    return <Box>
        <Navbar />
        <Image src={tproll}/>
    </Box>
}