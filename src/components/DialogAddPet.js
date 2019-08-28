import React, { useState } from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Icon,
} from '@material-ui/core';

import SelectTypePet from './SelectTypePet';

export default function FormDialog(props) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [type, setType] = useState('');

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleChangeType(event) {
    setType(event.target.value);
  }

  function handleClickAddPet() {
    const { selectedPerson, onPostPet } = props;
    const newPet = {
      name: name,
      type: type,
      personName: selectedPerson.name,
      personSurname: selectedPerson.surname,
      personId: selectedPerson._id,
    };
    onPostPet(newPet);
    handleClose();
  }

  return (
    <div>
      <Button color="secondary" onClick={handleClickOpen}>
        <Icon>add</Icon>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Pet</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your email address here. We will send updates
            occasionally.
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
          <SelectTypePet handleChangeType={handleChangeType} petType={type} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClickAddPet} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
