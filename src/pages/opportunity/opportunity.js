import * as React from 'react';
import {Box, Button, Modal} from '@mui/material';
import OpportunityForm from "./opportunity-form";

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
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen} style={{ margin: "32px 0 32px 0" }}>Create Opportunity</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <OpportunityForm onClose={handleClose} />
        </Box>
      </Modal>
    </div>
  );
}
