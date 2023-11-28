import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const OpportunityForm = ({ onClose, formState, setFormState, setOpen, setShowData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(false)
    setShowData(true)
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Opportunity Name"
        name="opportunityName"
        value={formState.opportunityName}
        onChange={handleChange}
        sx={{ marginBottom: "16px", width: "100%" }}
        required={true}
      />
      <br />

      <TextField
        label="Job Title"
        name="jobTitle"
        value={formState.jobTitle}
        onChange={handleChange}
        sx={{ marginBottom: "16px", width: "100%" }}
        required={true}
      />
      <br />

      <FormControl sx={{ marginBottom: "16px", width: "100%" }}>
        <InputLabel>Account Name</InputLabel>
        <Select
          required={true}
          label="Account Name"
          name="accountName"
          value={formState.accountName}
          onChange={handleChange}
        >
          {/* Populate account names from your data source */}
          <MenuItem value="gaurav@tftus.com">Gaurav</MenuItem>
          <MenuItem value="daniel@tftus.com">Daniel</MenuItem>
          <MenuItem value="jhon@tftus.com">Jhon</MenuItem>
        </Select>
      </FormControl>
      <br />

      <FormControl sx={{ marginBottom: "16px", width: "100%" }}>
        <InputLabel>Contact Name</InputLabel>
        <Select
          required={true}
          label="Contact Name"
          name="contactName"
          value={formState.contactName}
          onChange={handleChange}
        >
          {/* Populate contact names from your data source */}
          <MenuItem value="gaurav@tftus.com">Gaurav</MenuItem>
          <MenuItem value="daniel@tftus.com">Daniel</MenuItem>
          <MenuItem value="jhon@tftus.com">Jhon</MenuItem>
        </Select>
      </FormControl>
      <br />

      <TextField
        label="Work Location"
        name="workLocation"
        value={formState.workLocation}
        onChange={handleChange}
        sx={{ marginBottom: "16px", width: "100%" }}
        required={true}
      />
      <br />
      <TextField
        label="Experience"
        name="experience"
        value={formState.experience}
        onChange={handleChange}
        sx={{ marginBottom: "16px", width: "100%" }}
      />
      <br />
      <TextField
        label="Salary"
        name="salary"
        value={formState.salary}
        onChange={handleChange}
        sx={{ marginBottom: "16px", width: "100%" }}
        required={true}
      />
      <br />
      <TextField
        label="Address"
        name="address"
        value={formState.address}
        onChange={handleChange}
        sx={{ marginBottom: "16px", width: "100%" }}
        required={true}
      />
      <br />

      <TextField
        label="Pincode"
        name="pincode"
        value={formState.pincode}
        onChange={handleChange}
        sx={{ marginBottom: "16px", width: "100%" }}
        required={true}

      />
      <br />

      <TextField
        label="Start Date"
        type="date"
        name="startDate"
        value={formState.startDate}
        onChange={handleChange}
        required={true}
        InputLabelProps={{
          shrink: true,
        }}
        sx={{ marginBottom: "16px", width: "100%" }}
      />
      <br />

      <TextField
        label="Work Hours"
        name="workHours"
        value={formState.workHours}
        onChange={handleChange}
        sx={{ marginBottom: "16px", width: "100%" }}
        required={true}

      />
      <br />

      <FormControl sx={{ marginBottom: "16px", width: "100%" }}>
        <InputLabel>Phase</InputLabel>
        <Select label="Phase" name="phase" value={formState.phase} required={true}
          onChange={handleChange}>
          <MenuItem value="in-progress">In Progress</MenuItem>
          <MenuItem value="on-hold">On Hold</MenuItem>
          <MenuItem value="closed">Closed</MenuItem>
        </Select>
      </FormControl>
      <br />
      <Grid
        container
        spacing={2}
        justifyContent="space-around"
        style={{ marginBottom: "16px", width: "100%" }}
      >
        <Grid item xs={6}>
          <Button variant="outlined" onClick={onClose} fullWidth>
            Cancel
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button type="submit" variant="contained" fullWidth>
            Save
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default OpportunityForm;
