//import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { TextField } from '@material-ui/core';
import { Alert } from 'react-alert'
//import emailjs from "emailjs-com";
/*

  function getModalStyle() {
    const top = 50 ;
    const left = 50 ;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '25ch',
        },
      },
  }));
  
  export default function Adduser() {
    
    const [fetchdata,setFetchdata]=React.useState('');
    
    const classes = useStyles();

    const [name, setName] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
   
  
    const handleOpen = () => {
      setOpen(true);
    };
    

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log()
    async function fetchData() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify({name,username,email})
        };
        const response = await fetch('/post', requestOptions);
     const body = await response.json();
     console.log(body);
     setFetchdata(response);
      }
      fetchData().then(() => {
        handleClose();
    }).catch((e)=>{
       
    });
  }
  
    const handleClose = () => {
      
      setName('');
      setUsername('');
      setEmail('')
        setOpen(false);
    };
    const handleChangeName = (event) => {
        setName(event.target.value);
      };
      const handleChangeUsername = (event) => {
        setUsername(event.target.value);
      };
      const handleChangeEmail = (event) => {
        setEmail(event.target.value);
      };
    const body = (  
      <div style={modalStyle} className={classes.paper}>
       
         <form className={classes.root} onSubmit={handleSubmit} noValidate autoComplete="off">
      <div>
      <TextField
          id="standard-multiline-flexible"
          name="Name"
          label="Name"
          value={name}
          onChange={handleChangeName}
        />
        <TextField
          id="standard-multiline-flexible"
          label="Username"
          name="username"
          multiline
          rowsMax={2}
          value={username}
          onChange={handleChangeUsername}
        />
        <TextField
          id="standard-multiline-flexible"
          label="Email"
          name="email"
          multiline
          rowsMax={4}
          value={email}
          onChange={handleChangeEmail}
        />
        <Button
        type="submit"
   variant="contained"
   size="large"
   color="primary"
   target="_top"
   rel="noopener noreferrer"
   
>
  
   <Typography variant="button" style={{ fontSize: '0.69rem' }}>
      Add
   </Typography>
</Button>
<Button
        type="button"
   variant="contained"
   size="large"
   color="primary"
   target="_top"
   rel="noopener noreferrer"
   onClick={handleClose}
>
   <Typography variant="button" style={{ fontSize: '0.69rem' }}>
      Close
   </Typography>
</Button>
        </div>
        
        </form>
        
      </div>
    );
    

    
    return (
      <div>
          <Button variant="contained" color="primary" onClick={handleOpen}>
          Add User                    
          </Button>
        
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </div>
    );
  }*/

  import React, { useState} from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import { lighten, makeStyles } from '@material-ui/core/styles';
import { TableCell, TableHead } from "@material-ui/core";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 100,
    },
    container: {
      maxHeight: 350,
      
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
  }));

const Adduser = (props) => {
  
  
  
console.log(props);
  const classes = useStyles();
  const [user, setdata] = useState('');
  const [fetchdata,setFetchdata]=React.useState('');
    
  

  const [name, setName] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  // getModalStyle is not a pure function, we roll the style only on the first render
  //const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
 

  
  

const handleSubmit = (e) => {
  e.preventDefault()
  console.log()
  async function fetchData() {
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body:JSON.stringify({name,username,email})
      };
      const response = await fetch('/post', requestOptions);
   const body = await response.json();
   console.log(body);
   setFetchdata(response);
    }
    fetchData().then(() => {
      alert("User Added Successfully!!!");
  }).then(()=>{
    handleClose();
  }).catch((e)=>{
     alert(e);
  });
}

  const handleClose = () => {
    
    setName('');
    setUsername('');
    setEmail('')
      
  };
  const handleChangeName = (event) => {
      setName(event.target.value);
    };
    const handleChangeUsername = (event) => {
      setUsername(event.target.value);
    };
    const handleChangeEmail = (event) => {
      setEmail(event.target.value);
    };
 
  

  return (
    <div className={classes.root} class="mainpage1 ">
      <div ><h1 >Add User</h1><br/><h2></h2></div>

      <Paper className={classes.paper} >
      <div class="fl w-60  ">  
      
            <Button
            variant="contained"
            color="//#endregion"
            rel="noopener noreferrer" >

                <Link to='/'> Go To Home</Link>   
             </Button> 
        </div>
      <TableContainer className={classes.container} >
      <form className={classes.root} onSubmit={handleSubmit} noValidate autoComplete="off">    
          <Table
            className={classes.table}>
            
                
            <TableBody>
        

                  
                    <TableRow>
                      <TableCell >
                        Name
                      </TableCell>
                      <TableCell >
                      <TextField
          id="standard-multiline-flexible"
          name="name"
          label="Name"
          value={name}
          onChange={handleChangeName}
        />
                      </TableCell>
                      </TableRow><TableRow>
                      <TableCell >
                        Username
                      </TableCell>
                      <TableCell >
                      <TextField
          id="standard-multiline-flexible"
          label="Username"
          name="username"
          multiline
          rowsMax={2}
          value={username}
          onChange={handleChangeUsername}
        />      </TableCell>
                      </TableRow>
                      <TableRow>
                      <TableCell >
                          Email
                      </TableCell>
                      <TableCell >
                      <TextField
          id="standard-multiline-flexible"
          label="Email"
          name="email"
          multiline
          rowsMax={4}
          value={email}
          onChange={handleChangeEmail}
        />
                      </TableCell>
                      </TableRow>
                      <TableRow>
                      <TableCell >
                          
                      </TableCell>
                      <TableCell >
                      <Button
        type="submit"
   variant="contained"
   size="large"
   color="primary"
   target="_top"
   rel="noopener noreferrer"
   
>
  
   <Typography variant="button" style={{ fontSize: '0.69rem' }}>
      Add
   </Typography>
</Button>
                      </TableCell>
                      </TableRow>
            </TableBody>
          </Table>
          
          </form>
        </TableContainer>      
      </Paper>
      
    </div>
  );
};



export default Adduser;