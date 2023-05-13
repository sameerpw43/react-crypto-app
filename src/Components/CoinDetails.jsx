import { Box, Container, StatLabel, VStack,Image ,HStack} from '@chakra-ui/react'
import React from 'react'
import Loader from './Loader';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {server} from '../';
import Loader from "./Loader";


const CoinDetails = () => {
    const [loading, setLoading] = useState(true);
  const [coins, setCoin] = useState({});
  const [error, setError] = useState(false);
 
  const [currency, setCurrency] = useState('inr');
  const params = useParams()
  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${params.id}`);
        setCoin(data);
        setLoading(false);
        console.log('s')
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoin();
  }, [params.id]);
  if (error) {
    return <ErrorComponent message={'Error while fetching'} />;
  }
  return (
    <Container maxW={"container.xl"}>
      {
        loading ? <Loader/>:(
            <>
            <Box width={"full"} borderWidth={1}></Box>
            <RadioGroup defaultValue="inr" onChange={(value) => handleCurrencyChange(value)}>

<HStack spacing={'4'} width="200px" justifyContent={"space-evenly"}>
  <Radio value="inr">₹</Radio>
  <Radio value="eur">€</Radio>
  <Radio value="usd">$</Radio>
</HStack>
</RadioGroup>
<VStack spacing={"4"} p={"16"} alignItems={"flex-start"}>
    <Text fontSize={"small"} alignSelf="center">
        Last updated on {Date(coin.market_data.last_update).split("G")[0]}
    </Text>
    <Image src={coin.image.large} w={"16"} h={"16"}/>
    <Stat>
       <StatLabel>{coin.name}</StatLabel> 
       <StateNumber>{currencySymbol}{}</StateNumber>
    </Stat>

</VStack>
            </>
        )
      }
    </Container>
  )
}

export default CoinDetails
