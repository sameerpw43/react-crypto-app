import { Avatar, Box, Stack, VStack ,Text} from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} color={"whiteAlpha.700"}
    minH={"48"} px={"16"} py={["16","8"]}
    >
      <Stack direction={["column","row"]} h={"full"} alignItems={"center"}>
      <Text fontWeight={"bold"}>About us</Text>
      <Text fontSize={"sm"} letterSpacing={"widest"} textAling={["center","left"]}>We are the best crypto trading app in India</Text>
      <VStack>

      </VStack>
      <VStack>
        
        <Avatar boxSize={"28"} mt={["4","0"]} />
        <Text>Our Founder</Text>
      </VStack>
      </Stack>
     
    </Box>
  )
}

export default Footer
