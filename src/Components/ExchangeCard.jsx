import { VStack ,Image,Heading, Flex } from '@chakra-ui/react'
import React from 'react'

const ExchangeCard = ({name, img, rank, url}) => {
  return (
    <a href={url} target="_blank" >
      <Flex w={"52"} shadow={"lg"} p={"8"} borderRadius={"lg"} transition="all 0.3s" m={"4"} css={{ "&:hover": { transform: "scale(1.1)" }}}>
        <Image src={img} w={"10"} h={"10"} objectFit="contain" alt="Exchange" />
        <VStack>
          <Heading size="md" noOfLines={1}>{name}</Heading>
          <Heading size="sm">{rank}</Heading>
        </VStack>
      </Flex>
    </a>
  );
}

export default ExchangeCard;
