import { Fragment, React, useState } from 'react'
import { API_BASE_URL} from '../../Services/Constants'
import { Button, Grid, TextField, Box } from '@mui/material';
import axios from 'axios';

function SaveData() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');

  const post_base_api = API_BASE_URL + "api/Contact";

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    await axios.post(post_base_api, {
      name: name,
      email: email,
      phone: number,
      address: address,
    })
      .then((response) => {
        setName('');
        setEmail('');
        setAddress('');
        setNumber('');
      });
  };
  
  return (
    <Fragment>
      <Box
        sx={{
          maxWidth:300,
          border:1,
          borderRadius:4, 
          padding: 4,
        }}
      >
      <form onSubmit={handleSubmit}>
      <Grid container spacing={1} direction="column" gap={2}>
        <TextField
          required
          id="outlined-required"
          label="Name"
          value={name}
          onChange={handleNameChange}
        />
        <TextField
          id="outlined-disabled"
          label="Email Id"
          value={email}
          onChange={handleEmailChange}
        />
        <TextField
          id="outlined-read-only-input"
          label="Address"
          value={address}
          onChange={handleAddressChange}
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={number}
          onChange={handleNumberChange}
        />
        <Button 
          variant="contained" color="primary" type="submit"
          sx={{
            backgroundColor: "white",
            color: "black",
            border: 1,
            '&:hover':{
              backgroundColor:"white",
              border: 0,
            }
          }}
        >
        Save Contacts
      </Button>
      </Grid>
    </form>
    </Box>
    </Fragment>
  )
}

export default SaveData