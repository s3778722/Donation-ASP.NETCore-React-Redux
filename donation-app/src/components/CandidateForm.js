import React, { useState } from "react";
import {
  Paper,
  TextField,
  Typography,
  Grid,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Button,
  Box,
  Item,
  Alert,
  AlertTitle,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../actions/donationCandidate";

const defaultValues = {
  fullName: "",
  mobile: "",
  email: "",
  age: "",
  bloodGroup: "",
  address: "",
};

const CandidateForm = () => {
  const [formValues, setFormValues] = useState(defaultValues);
  const [currentId, setCurrentId] = useState(0);
  const [successAlert, setSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [tempName, setTempName] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // const c = {[a]: "d"}
    // syntactic sugar for:
    // const c = {}
    // c[a] = "d"
    const fieldValues = { [name]: value };
    setFormValues({
      ...formValues,
      ...fieldValues, // or can replace here << [name]: value >>
    });
  };

  console.log(formValues);

  const resetForm = () => {
    setFormValues(defaultValues);
    setCurrentId(0);
  };

  const nameBeforeReset = (name) => {
    setTempName(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId === 0) {
      const action = dispatch(actions.create(formValues, setErrorMessage));
      if (action) {
        setSuccessAlert(true);
        nameBeforeReset(formValues.fullName);
        resetForm();
      } else {
        setErrorAlert(true);
      }
    } else {
      const action = dispatch(actions.update(currentId, formValues, setErrorMessage));
      if (action) {
        setSuccessAlert(true);
        nameBeforeReset(formValues.fullName);
        resetForm();
      } else {
        setErrorAlert(true);
      }
    }
  };

  return (
    <Paper sx={{ my: 2, width: 1 }} elevation={3}>
      {successAlert && (
        <Alert severity="success">
          <AlertTitle align="left">Success</AlertTitle>
          <strong>{tempName}</strong> - successfully created/updated!
        </Alert>
      )}
      {errorAlert && (
        <Alert severity="error">
          <AlertTitle align="left">Error</AlertTitle>
          Error submitting candidate form! - <strong>{errorMessage}</strong>
        </Alert>
      )}
      <Typography variant="h6" sx={{ p: 3 }} color="#696969" align="left">
        Candidate Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} px={3} pb={3}>
          <Grid item xs={4}>
            <TextField
              color="secondary"
              id="fullname-input"
              name="fullName"
              label="Full Name"
              variant="standard"
              type="text"
              value={formValues.fullName}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              color="secondary"
              id="mobile-input"
              name="mobile"
              label="Mobile Number"
              variant="standard"
              type="tel"
              value={formValues.mobile}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              color="secondary"
              id="email-input"
              name="email"
              label="Email Address"
              variant="standard"
              type="email"
              value={formValues.email}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              color="secondary"
              id="age-input"
              name="age"
              label="Age"
              variant="standard"
              type="number"
              value={formValues.age}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              color="secondary"
              id="address-input"
              name="address"
              label="Address"
              variant="standard"
              type="text"
              value={formValues.address}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={4}>
            <FormControl
              fullWidth
              color="secondary"
              sx={{ maxWidth: 200 }}
              required
            >
              <InputLabel>Blood Group</InputLabel>
              <Select
                name="bloodGroup"
                onChange={handleInputChange}
                label="Blood Group"
                value={formValues.bloodGroup}
              >
                <MenuItem value="">Select Blood Group</MenuItem>
                <MenuItem value="A+">A +ve</MenuItem>
                <MenuItem value="A-">A -ve</MenuItem>
                <MenuItem value="B+">B +ve</MenuItem>
                <MenuItem value="B-">B -ve</MenuItem>
                <MenuItem value="AB+">AB +ve</MenuItem>
                <MenuItem value="AB-">AB -ve</MenuItem>
                <MenuItem value="O+">O +ve</MenuItem>
                <MenuItem value="O-">O -ve</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Box display="flex" sx={{ justifyContent: "flex-end", p: 3 }}>
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            sx={{ mr: 1 }}
          >
            Submit
          </Button>
          <Button variant="outlined" color="warning">
            Reset
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default CandidateForm;
