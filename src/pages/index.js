import Logo from '../assets/svg/Logo.svg';
import { Flex, Box } from "@chakra-ui/core";

const Index = () => (
  <div>
    <Flex flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh" bg="#0D78D3">
      <Logo mx={2}/>
    </Flex>
  </div>
)

export default Index
