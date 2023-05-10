import React from 'react'
import { useState } from 'react';
import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { useToast } from "@chakra-ui/toast";
import { VStack } from "@chakra-ui/layout";
import axios from "axios";
import {useHistory} from "react-router-dom"
import validator from 'validator'
const Signup = () => {
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [confirmpassword,setConfirmPassword] = useState();
    const [password,setPassword] = useState();
    const [show,setshow] = useState(false);
    const [show1,setshow1] = useState(false);
    const [picloading,setLoading] = useState(false); 
    const history = useHistory();
    const toast = useToast();
    const handleShow1 =()=> {setshow(!show)};
    const handleShow2 =()=> {setshow1(!show1)};
    const [errorMessage, setErrorMessage] = useState('')
 
  const validate = (value) => {
        if (validator.isStrongPassword(value, {
        minLength: 8, minLowercase: 1,
        minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            setErrorMessage('')
            setPassword(value);
        } else {
            if(value.length<8){
                setErrorMessage('Password length must be at least 8');
            }else{
                setErrorMessage('Password must Contain minimum 1 Uppercase, minimum 1 Lowercase, minimum 1 Number, minimum 1 special symbol');
            }
        }
  }
    const submitHandler= async()=>{
        setLoading(true);
        if(!name || !email || !password || !confirmpassword){
            setErrorMessage('Please fill all the fields');
            toast({
                title: 'Please fill all the fields',
                status: 'warning',
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            setLoading(false);
            return;
        }
        if(password!==confirmpassword){
            setErrorMessage('Password do not match')
            toast({
                title: 'Password do not match',
                status: 'warning',
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            setLoading(false);
            return;
        }
        setErrorMessage('');
        try{
            const config = {
                headers:{
                    "Content-type":"application/json",
                },
            };
            const {data} = await axios.post("/api/user",{name,email,password},config);
            toast({
                title: 'Registration Successfull',
                status: 'success',
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            localStorage.setItem('userInfo',JSON.stringify(data));
            setLoading(false);
            history.push("/movies");

        }catch(err){
            setErrorMessage(err.response.data.message);
            toast({
                title: 'Error occured',
                status: 'warning',
                description:err.response.data.message,
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            setLoading(false);
            setErrorMessage('');
        }
    }
  return (
    <VStack spacing='5px'>
        <FormControl id='first-name' isRequired>
            <FormLabel>Name</FormLabel>
            <Input
            placeholder='Enter Your Name'
            onChange={(e)=>setName(e.target.value)}
            />
        </FormControl>

        <FormControl id='email' isRequired>
            <FormLabel>Email</FormLabel>
            <Input
            placeholder='Enter Your Email'
            onChange={(e)=>setEmail(e.target.value)}
            />
        </FormControl>


        <FormControl id='password' isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
            <Input
            type={show?"text" : "password"}
            width="100%"
            placeholder='Password'
            onChange={((e)=>validate(e.target.value)) }
            />
            <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleShow1}>
                    {show?"Hide":"Show"}
                </Button>
            </InputRightElement>
            </InputGroup>
        </FormControl>

        <FormControl id='conpassword' isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <InputGroup  width="100%">
            <Input
            width="100%"
            type={show1?"text" : "password"}
            placeholder='Confirm Password'
            onChange={(e)=>setConfirmPassword (e.target.value)}
            />
            <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleShow2}>
                    {show1?"Hide":"Show"}
                </Button>
            </InputRightElement>
            </InputGroup>
        </FormControl>


        <Button
        colorScheme="red"
        width="100%"
        style={{marginTop:15}}
        onClick={submitHandler}
        isLoading={picloading}
        >
            Sign Up
        </Button>
        {errorMessage === '' ? null :
        <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{errorMessage}</span>}

    </VStack>
  )
}

export default Signup

