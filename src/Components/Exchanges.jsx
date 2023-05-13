import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { server } from '../index';
import { Container, Flex } from '@chakra-ui/react';
import Loader from './Loader';
import ExchangeCard from './ExchangeCard';
import ErrorComponent from './ErrorComponent';

const Exchanges = () => {
  const [loading, setLoading] = useState(true);
  const [exchanges, setExchanges] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchExchanges = async () => {
      try{
        const { data } = await axios.get(`${server}/exchanges`);
        setExchanges(data);
        setLoading(false);
      } catch(error){
        setError(true);
        setLoading(false);
      }
    };
    fetchExchanges();
  }, []);
  if(error)
    return <ErrorComponent message={"Error while fetching "}/>

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <Flex flexWrap="wrap" justify={"space-evenly"}>
          {exchanges.map((i) => (
            <ExchangeCard
              name={i.name}
              img={i.image}
              rank={i.trust_socre_rank}
              key={i.id}
              url={i.url}
            />
          ))}
        </Flex>
      )}
    </Container>
  );
};

export default Exchanges;
