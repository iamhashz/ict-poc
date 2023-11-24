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

const OpportunityForm = ({ onClose }) => {
  const [opportunityName, setOpportunityName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [accountName, setAccountName] = useState("");
  const [contactName, setContactName] = useState("");
  const [workLocation, setWorkLocation] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [workHours, setWorkHours] = useState("");
  const [phase, setPhase] = useState("");

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Opportunity Name"
        value={opportunityName}
        onChange={(e) => setOpportunityName(e.target.value)}
        sx={{ marginBottom: "16px", width: "100%" }}
      />
      <br />

      <TextField
        label="Job Title"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
        sx={{ marginBottom: "16px", width: "100%" }}
      />
      <br />

      <FormControl sx={{ marginBottom: "16px", width: "100%" }}>
        <InputLabel>Account Name</InputLabel>
        <Select
          label="Account Name"
          value={accountName}
          onChange={(e) => setAccountName(e.target.value)}
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
          label="Contact Name"
          value={contactName}
          onChange={(e) => setContactName(e.target.value)}
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
        value={workLocation}
        onChange={(e) => setWorkLocation(e.target.value)}
        sx={{ marginBottom: "16px", width: "100%" }}
      />
      <br />

      <TextField
        label="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        sx={{ marginBottom: "16px", width: "100%" }}
      />
      <br />

      <TextField
        label="Pincode"
        value={pincode}
        onChange={(e) => setPincode(e.target.value)}
        sx={{ marginBottom: "16px", width: "100%" }}
      />
      <br />

      <TextField
        label="Start Date"
        type="date"
        value={startDate.toISOString().split("T")[0]}
        onChange={(e) => handleStartDateChange(new Date(e.target.value))}
        InputLabelProps={{
          shrink: true,
        }}
        sx={{ marginBottom: "16px", width: "100%" }}
      />
      <br />

      <TextField
        label="Work Hours"
        value={workHours}
        onChange={(e) => setWorkHours(e.target.value)}
        sx={{ marginBottom: "16px", width: "100%" }}
      />
      <br />

      <FormControl sx={{ marginBottom: "16px", width: "100%" }}>
        <InputLabel>Phase</InputLabel>
        <Select label="Phase" value={phase} onChange={(e) => setPhase(e.target.value)}>
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
