import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import {goToCadastro, goToLogin} from "../../router/coordinator"
  
  export default function FormularioCad({form, onChange, cadastrarApi}) {
    const [showPassword, setShowPassword] = useState(false);
  const navigate= useNavigate()
    return (
      <Flex
        minH={'80vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
             Cadastre-se
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
            na nossa aplicação de receitas ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
            <FormControl id="name" isRequired>
                <FormLabel>Nome</FormLabel>
                <Input type="text" name="name"
               value={form.name} onChange={onChange}/>
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" name="email" value={form.email}  onChange={onChange}/>
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Senha</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} name="password" value={form.password} onChange={onChange}/>
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'#821D30'}
                  color={'white'}
                  _hover={{
                    bg:'blue.500' ,
                  }}
                   onClick={cadastrarApi} 
                  >
                  Cadastrar
                </Button>
                <Text align={'center'}>
                  Ja tem cadastro? <Link onClick={()=>goToLogin(navigate)} color={'#FB6090'}>Faça o login</Link>
                </Text>
              </Stack>
              
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }