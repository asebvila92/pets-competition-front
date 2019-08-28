import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import types from '../data/typesOfPets';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SelectTypePet(props) {
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="slcType">Type</InputLabel>
      <Select
        value={props.petType}
        onChange={props.handleChangeType}
        inputProps={{
          name: 'type',
          id: 'slcType',
        }}
      >
        {types.map((type, key) => (
          <MenuItem key={key} value={type.name}>
            {type.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
