
import { useState, useEffect } from 'react';
import { FormControl, FormGroup, InputLabel, Input, Typography, Button, styled } from '@mui/material'
import React from 'react'
import {getUser, editUser} from '../service/api'
import { useNavigate, useParams } from 'react-router-dom';

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;
    & > div {
        margin-top:20px;
    }
`
const initialValue = {
    name: '',
    username:'',
    email:'',
    phone:''
}
const EditUser = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(initialValue)
    const {id} = useParams();

    useEffect(() => {
        getUserData();
    }, [])

    const getUserData = async () => {
        let response = await getUser(id);
        setUser(response.data)
        
    }
    //e.target.value
    const onValueChange = (e) =>{
        setUser({...user, [e.target.name]: e.target.value})
        console.log(user);
    }

    const addUserDetails = async() => {
        await editUser(user, id);
        navigate('/all');
    }
  return (
    <Container>
        <Typography variant="h4">Add User</Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={(e)=> onValueChange(e)} name="name" value={user.name}/>
        </FormControl>

        <FormControl>
            <InputLabel>Uername</InputLabel>
            <Input onChange={(e)=> onValueChange(e)} name="username" value={user.username}/>
        </FormControl>

        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={(e)=> onValueChange(e)} name="email" value={user.email}/>
        </FormControl>

        <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input onChange={(e)=> onValueChange(e)} name="phone" value={user.phone}/>
        </FormControl>

        <FormControl>
            <Button onClick={() => addUserDetails()} variant="contained">Add User</Button>
        </FormControl>
    </Container>
  )
}

export default EditUser