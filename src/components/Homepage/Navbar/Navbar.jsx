'use client'

import {
  Box,
  Flex,
  Avatar,
  Text,
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
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Navigate, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LOGOUT } from '../../../Redux/users/user.types'

interface Props {
  children: React.ReactNode
}


export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch = useDispatch()
  const{auth,token,loading,error} =useSelector((state)=>state.userReducer)

  const Nav = useNavigate()
  return (
    <>
      <Box zIndex={"1000"} position={'fixed'} top={0} w={"100%"} boxShadow={"rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;"} 
        backgroundColor={"#8A2BE2"} backgroundImage={"linear-gradient(to bottom right, rgba(255, 255, 255, 0.5) 10%, rgba(255, 255, 255, 0) 70%)"}
        px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box fontWeight={'bold'} color={'white'} cursor={"pointer"} onClick={()=>{
            Nav("/")
          }}>Notes App</Box>

          <Flex alignItems={'center'}>
            <Stack alignItems={"center"} direction={'row'} spacing={7}>
              <Button display={auth==true?"block":"none"}  bg={"white"} color={"black"} onClick={()=>{
                Nav("/notes")
              }}>All Notes</Button>

              <Button display={auth==true?"none":"block"} bg={"white"} color={"black"} onClick={()=>{
                Nav("/register")
              }}>Singnup</Button>

              <Button display={auth==true?"none":"block"} bg={"white"} color={"black"} onClick={()=>{
                Nav("/Login")
              }}>Login</Button>

              <Button  onClick={toggleColorMode}>
                
                {colorMode === 'light' ? <MoonIcon color={colorMode === 'light' ? 'gray.800' : 'gray.200'} 
                /> : <SunIcon color={colorMode === 'light' ? 'gray.800' : 'gray.200'}/>}
              </Button>

              <Menu>
                <MenuButton 
                  display={auth==true?"block":"none"}
                  as={Button}
                  border={"2px solid yellow"}
                  padding={2}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem onClick={()=>{
                    dispatch({type:LOGOUT})
                  }}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}