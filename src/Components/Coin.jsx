import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { server } from '../index';
import { Button, Container, Flex, HStack, RadioGroup, Radio } from '@chakra-ui/react';
import Loader from './Loader';

import ErrorComponent from './ErrorComponent';
import CoinCard from './CoinCard';
{/*
 const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [error, setError] = useState(false);
  const [pages, setPages] = useState(1);
  const [currency, setCurrency] = useState('inr');*/
}

const Coin = () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [error, setError] = useState(false);
  const [pages, setPages] = useState(1);
  const [currency, setCurrency] = useState('inr');
  const changePage = (page) => {
    setPages(page);
    setLoading(true);
  };
  const currencySymbol = currency === 'inr' ? '₹' : currency === 'eur' ? '€' : '$';
  const btns = new Array(132).fill(1);
  const handleCurrencyChange = (value) => {
    setCurrency(value);
  };
  
  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${pages}`);
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [currency, pages]);
  
  if (error) {
    return <ErrorComponent message={'Error while fetching'} />;
  }


  return (
    <Container maxW={'container.xl'}>
      {loading ? (
        <Loader />
      ) : (
        <Flex flexWrap="wrap">
          <Flex w="100%" justifyContent="center" alignItems="center">
          <RadioGroup defaultValue="inr" onChange={(value) => handleCurrencyChange(value)}>

              <HStack spacing={'4'} width="200px" justifyContent={"space-evenly"}>
                <Radio value="inr">₹</Radio>
                <Radio value="eur">€</Radio>
                <Radio value="usd">$</Radio>
              </HStack>
            </RadioGroup>
          </Flex>
          {coins.map((i) => (
            <CoinCard
              name={i.name}
              img={i.image}
              rank={i.trust_socre_rank}
              key={i.id}
              id={i.id}
              price={i.current_price}
              symbol={i.symbol}
              currencySymbol={currency}
            />
          ))}
        </Flex>
      )}
      <HStack w={'full'} overflow={'auto'} p={'8'}>
        {btns.map((item, index) => (
          <Button bgColor={'blackAlpha.900'} color={'white'} onClick={() => changePage(index + 1)} key={index}>
            {index + 1}
          </Button>
        ))}
      </HStack>
    </Container>
  );
};

export default Coin;
