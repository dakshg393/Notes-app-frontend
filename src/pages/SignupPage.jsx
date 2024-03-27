import { Flex, Image, VStack } from "@chakra-ui/react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

import LoginImg from "../assets/Loginimg.png"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, saveUser } from "../Redux/users/user.actions";
import { Await, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../constants/config";

export default function SignupPage() {
  const nav= useNavigate()
  

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()

  const handleSignup = async () => {
    try {
      // const emailExists = await axios.get(`${BASE_URL}/user/check-email/${email}`);
      // if (emailExists.data.exists) {
      //   alert('Email already exists. Please use a different email address.');
      //   return;
      // }
    
    let data = await axios.post(BASE_URL+"/user/register", {
      name, email, password
    })
    let { message, status } = data.data
    if (status == 1) {
      alert(message)
      nav("/login")

    } else {
      alert(message)
    }

  } catch (error) {
      alert("somthing went wrong")
  }
  }

  return <Flex padding={8} w={"100%"}>
    <Image w={"50%"} src={LoginImg}></Image>

    <VStack w={"50%"}>

      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
      >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign up with Your Notes App</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Text color={'blue.400'}>features</Text> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input value={name} onChange={(e) => setName(e.target.value)} type="name" />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                </Stack>
                <Button
                  onClick={handleSignup}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Register
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>


    </VStack>

  </Flex>
}