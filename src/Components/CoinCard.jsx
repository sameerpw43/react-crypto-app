import { VStack ,Image,Heading, Flex,Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';

const CoinCard = ({name, img, rank, url, id, symbol, currencySymbol="₹", price}) => {
  return (
    <Link to={`/coin/${id}`} target="_blank" >
      <Flex w={"52"} shadow={"lg"} p={"8"} borderRadius={"lg"} transition="all 0.3s" m={"4"} css={{ "&:hover": { transform: "scale(1.1)" }}}>
        <Image src={img} w={"10"} h={"10"} objectFit="contain" alt="Exchange" />
        <VStack>
          
          <Heading size={"md"} noOfLines={1}>{symbol}</Heading>
          <Text size="md" noOfLines={1}>{name}</Text>
          <Text size="sm">{price ? `${currencySymbol}${price}`:"NA"}</Text>

        </VStack>
        <Flex flex={1} justifyContent="space-between" alignItems="center">
         
        </Flex>
      </Flex>
    </Link>
  );
}

export default CoinCard;
