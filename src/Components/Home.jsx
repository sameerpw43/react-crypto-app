import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react'
import {motion} from "framer-motion"

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"85vh"}>
     <motion.div style={{
      height:"80vh",


     }}
     animate={{
      translateY:"20px"
     }}
     transition={{
      duration:1,
      repeat:Infinity,
      repeatType:"reverse"

     }}

     >
      <Image
        w={"full"}
        h={"full"}
       objectFit={"contain"}
        filter={"grayscale(1)"}
        src={
          "https://altcoinsbox.com/wp-content/uploads/2023/02/bitcoin-gold-coin-with-BTC-logo-300x300.webp"
        }
        fallbackSrc={"https://via.placeholder.com/400x300"}
      />
      </motion.div>
      <Text fontSize={"6x1"} textAlign={"center"} fontWeight={"thin"} color={"whiteAlpha.700"} mt={"-20"}>
        Welcome to our Crypto App
      </Text>
    </Box>
  )
}

export default Home;
