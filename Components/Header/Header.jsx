import React, { Fragment, useState, useState } from 'react';
import { Button, Input, Box } from '@mui/material';
import './Header.css';

function Header({ handleSaveDataComponent }) { 
  
  const [changeBTN, setChangeBTN] = useState("Add data");

  const handleOpenSaveData = () => {
    setChangeBTN("table")
    props.showSaveDataComponent
  }

  return (
    <Fragment>
      <Box
        className="header-main-comp"
        width="100%"
        sx={{
          height: 100,
        }}
      >
        <Input 
          placeholder="Search" 
          disableUnderline={true} 
          sx={{
            width: 400,
            border: 1,
            borderRadius: 4,
            padding: 1,
            line: false,
            marginRight: 3,
            '&:hover':{
              boxShadow:3,
              border: 0,
            },
          }}
        />
        <Button 
          variant="contained" 
          onClick={() => handleSaveDataComponent()} 
          sx={{
            backgroundColor:"white",
            color: "black",
            padding:1,
            border:1,
            '&:hover':{
              background:"white",
              border: 0,
            },
          }}
        >
          {changeBTN}
        </Button>
      </Box>
    </Fragment>
  )
}

export default Header