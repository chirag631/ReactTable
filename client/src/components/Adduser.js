import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { TextField,Button,Typography } from '@material-ui/core';
//import emailjs from "emailjs-com";


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
     setFetchdata(body);
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
  }