import { useNavigate } from "react-router-dom";
import { goToLogin} from "../../router/coordinator"


import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';




const NavLink = ({ children }: { children: ReactNode }) => (

  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('#FFC5D0', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const token = window.localStorage.getItem("token")
  const navigate = useNavigate()

  // remover o toque e chamar a pagina de login
const logOut=()=>{
  window.localStorage.removeItem("token")
  goToLogin(navigate)
}
  return (
    <>
      <Box bg={useColorModeValue('#FFC5D0', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>Cokenu</Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
              {
                token?   <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0} onClick={logOut}> LogOut
              
              </MenuButton> :   <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}> 
                
                </MenuButton>
              }
               
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}