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
        placeholder="Opportunity Name"
        name="opportunityName"
        value={formState.opportunityName}
        onChange={handleChange}
        sx={{ marginBottom: "16px", width: "100%" }}
        required={true}
        id="opportunityName"
      />
      <br />

      <TextField
        id="jobTitle"
        placeholder="Job Title"
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
          id="accountName"
          required={true}
          placeholder="Account Name"
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
          id="contactName"
          required={true}
          placeholder="Contact Name"
          name="contactName"
          value={formState.contactName}
          onChange={handleChange}
        >
          <MenuItem value="gaurav@tftus.com">Gaurav</MenuItem>
          <MenuItem value="daniel@tftus.com">Daniel</MenuItem>
          <MenuItem value="jhon@tftus.com">Jhon</MenuItem>
        </Select>
      </FormControl>
      <br />

      <TextField
        id="workLocation"
        placeholder="Work Location"
        name="workLocation"
        value={formState.workLocation}
        onChange={handleChange}
        sx={{ marginBottom: "16px", width: "100%" }}
        required={true}
      />
      <br />
      <TextField
        id="address"
        placeholder="Experience"
        name="experience"
        value={formState.experience}
        onChange={handleChange}
        sx={{ marginBottom: "16px", width: "100%" }}
      />
      <br />
      <TextField
        id="experience"
        placeholder="Salary"
        name="salary"
        value={formState.salary}
        onChange={handleChange}
        sx={{ marginBottom: "16px", width: "100%" }}
        required={true}
      />
      <br />
      <TextField
        id="salary"
        placeholder="Address"
        name="address"
        value={formState.address}
        onChange={handleChange}
        sx={{ marginBottom: "16px", width: "100%" }}
        required={true}
      />
      <br />

      <TextField
        id="pincode"
        placeholder="Pincode"
        name="pincode"
        value={formState.pincode}
        onChange={handleChange}
        sx={{ marginBottom: "16px", width: "100%" }}
        required={true}

      />
      <br />

      <TextField
        id="startDate"
        placeholder="Start Date"
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
        id="workHours"
        placeholder="Work Hours"
        name="workHours"
        value={formState.workHours}
        onChange={handleChange}
        sx={{ marginBottom: "16px", width: "100%" }}
        required={true}
      />
      <br />

      <FormControl sx={{ marginBottom: "16px", width: "100%" }}>
        <InputLabel>Phase</InputLabel>
        <Select id="phase" placeholder="Phase" name="phase" value={formState.phase} required={true}
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
