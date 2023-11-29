import * as React from 'react';
import { Box, Button, Modal } from '@mui/material';
import OpportunityForm from "./opportunity-form";
import OpportunityTable from './opportunityTable';
import file from "../../assets/data.xlsx"
import { format } from 'date-fns'
import { saveAs } from 'file-saver';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: 600,
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #f2f2f2',
  borderRadius: '8px',
  boxShadow: 24,
  p: 4,
  overflowY: 'scroll',
};

export default function Opportunity() {
  const [open, setOpen] = React.useState(false);
  const [showData, setShowData] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [formState, setFormState] = React.useState({
    opportunityName: "",
    jobTitle: "",
    accountName: "",
    contactName: "",
    workLocation: "",
    address: "",
    experience: "",
    salary: "",
    pincode: "",
    startDate: format(new Date(), "yyyy-MM-dd"),
    workHours: "",
    phase: "",
  });

  const downloadFile = () => {
    const filePath = file;
    fetch(filePath)
      .then((response) => response.blob())
      .then((blob) => {
        saveAs(blob, 'data.xlsx');
      })
      .catch((error) => console.error('Error downloading file:', error));
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => {
        handleOpen() && setShowData(false)
      }} style={{ margin: "32px 0 32px 0" }}>Create Opportunity</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <OpportunityForm onClose={handleClose} formState={formState} setFormState={setFormState} setOpen={setOpen} setShowData={setShowData} />
        </Box>
      </Modal>
      <Box>
        <Button variant="outlined" color="info" onClick={downloadFile}>Download Records</Button>
      </Box>
      {!open && showData && formState.constructor === Object && <OpportunityTable formState={formState} />}
    </div>
  );
}
