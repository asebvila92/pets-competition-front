import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog(props) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleChangeSurname(event) {
    setSurname(event.target.value);
  }

  function handleClickAddPerson() {
    const newPerson = {
      name: name,
      surname: surname,
    };
    props.onPostPerson(newPerson);
    handleClose();
  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Person
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your name and surname here. You can add your pets
            later.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            onChange={handleChangeName}
            fullWidth
          />
          <TextField
            margin="dense"
            id="surname"
            label="Surname"
            type="text"
            onChange={handleChangeSurname}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClickAddPerson} color="primary">
            Suscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
