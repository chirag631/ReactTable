import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { TextField,Button,Typography } from '@material-ui/core';
import emailjs from "emailjs-com";
import { Alert } from 'react-alert'

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
  
  export default function Emailbox(props) {
    const email=props;

    const classes = useStyles();
    const [value, setValue] = React.useState(email.tosend);
    const [subjectValue, setSubjectValue] = React.useState('');
    const [msgValue, setMsgValue] = React.useState('');
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
    function sendEmail(e) {
      e.preventDefault();

  emailjs.sendForm('service_wk5pnhe', 'template_9sz15ef', e.target, 'user_VFybhY6rdNbuXC9LmNicz')
      .then((result) => {
          alert("Email Sended successfully");
      }, (error) => {
          alert(error.text);
      }).then(()=>{
        
      });
      e.target.reset()
      handleClose();
  }
    const handleClose = () => {
      
      setSubjectValue('');
      setMsgValue('');
        setOpen(false);
    };
    const handleChangeemail = (event) => {
        setValue(event.target.value);
      };
      const handleChangesubject = (event) => {
        setSubjectValue(event.target.value);
      };
      const handleChangemessage = (event) => {
        setMsgValue(event.target.value);
      };
    const body = (
      <div style={modalStyle} className={classes.paper}>
       
         <form className={classes.root} onSubmit={sendEmail} noValidate autoComplete="off">
      <div>
      <TextField
          id="standard-multiline-flexible"
          name="email"
          label="To Send"
          value={value}
          onChange={handleChangeemail}
        />
        <TextField
          id="standard-multiline-flexible"
          label="Subject"
          name="subject"
          multiline
          rowsMax={2}
          value={subjectValue}
          onChange={handleChangesubject}
        />
        <TextField
          id="standard-multiline-flexible"
          label="Message"
          name="message"
          multiline
          rowsMax={4}
          value={msgValue}
          onChange={handleChangemessage}
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
      Send 
   </Typography>
</Button><Button
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
          Send Mail                    
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