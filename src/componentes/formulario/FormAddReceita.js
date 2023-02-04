import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Textarea,
  } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { goToFeed } from '../../router/coordinator';
  
  export default function FormAddReceita({form, onChange, requisicao}) {
   const navigate = useNavigate()
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Adcionar Receita</Heading>
    

          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
            <FormControl id="name"  >
                <FormLabel>Titulo:</FormLabel>
                <Input type="text" name='title' placeholder='Titulo' value={form.title} onChange={onChange} />
              </FormControl>

              <FormControl id="description">
                <FormLabel>Descrição:</FormLabel>
                <Textarea minLength={15} type="text" name='description' value={form.description} onChange={onChange} placeholder="Descrição"/>
              </FormControl>

              <FormControl id="imageUrl">
                <FormLabel>Foto:</FormLabel>
                <Input type="text" name='imageUrl' value={form.imageUrm} onChange={onChange} placeholder="url da imagem" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>

                </Stack>
                <Button
                  bg={'#FB6090'}
                  color={'white'}
                  _hover={{
                    bg: '#FFC5D0',
                  }} onClick={requisicao}>
                  Adcionar receita
                </Button>
                <Button
                  bg={'#FB6090'}
                  color={'white'}
                  _hover={{
                    bg: '#FFC5D0',
                  }} onClick={()=>goToFeed(navigate)}>
                  voltar para o feed
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }