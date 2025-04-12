"use client"

import { Box, Typography, Modal, IconButton, Grid, TextField, Button } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import SendIcon from "@mui/icons-material/Send"
import PhoneIcon from "@mui/icons-material/Phone"
import EmailIcon from "@mui/icons-material/Email"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import AccessTimeIcon from "@mui/icons-material/AccessTime"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: "80%", md: "70%" },
  maxHeight: "90vh",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  overflowY: "auto",
}

const ContactModal = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="contact-modal-title"
      aria-describedby="contact-modal-description"
    >
      <Box sx={style}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography id="contact-modal-title" variant="h4" component="h2" fontWeight="bold">
            Contact Us
          </Typography>
          <IconButton onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom color="primary">
              Get In Touch
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: "text.secondary", mb: 4 }}>
              Have questions about our services? Need to schedule an appointment? Fill out the form and we'll get back
              to you as soon as possible.
            </Typography>

            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom>
                Name
              </Typography>
              <TextField
                fullWidth
                placeholder="Enter Your Name"
                variant="outlined"
                margin="normal"
                InputProps={{
                  sx: {
                    backgroundColor: "rgba(255,255,255,0.05)",
                    borderRadius: 0,
                  },
                }}
              />

              <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                Email
              </Typography>
              <TextField
                fullWidth
                placeholder="Enter Your Email"
                variant="outlined"
                margin="normal"
                InputProps={{
                  sx: {
                    backgroundColor: "rgba(255,255,255,0.05)",
                    borderRadius: 0,
                  },
                }}
              />

              <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                Message
              </Typography>
              <TextField
                fullWidth
                placeholder="Enter Message Here"
                variant="outlined"
                margin="normal"
                multiline
                rows={4}
                InputProps={{
                  sx: {
                    backgroundColor: "rgba(255,255,255,0.05)",
                    borderRadius: 0,
                  },
                }}
              />

              <Button
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                startIcon={<SendIcon />}
                sx={{
                  mt: 3,
                  py: 1.5,
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                SEND MESSAGE
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom color="primary">
              Contact Information
            </Typography>
            <Box display="flex" flexDirection="column" gap={4} mt={3}>
              <Box display="flex" gap={2}>
                <PhoneIcon color="primary" fontSize="large" />
                <Box>
                  <Typography variant="h6">Phone Number</Typography>
                  <Typography variant="body1" color="text.secondary">
                    +270-456-7890
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" gap={2}>
                <EmailIcon color="primary" fontSize="large" />
                <Box>
                  <Typography variant="h6">Email Address</Typography>
                  <Typography variant="body1" color="text.secondary">
                    info@towcarcare.com
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" gap={2}>
                <LocationOnIcon color="primary" fontSize="large" />
                <Box>
                  <Typography variant="h6">Office Address</Typography>
                  <Typography variant="body1" color="text.secondary">
                    Shop 05 Main Reef Robertville., Gauteng, 1703
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" gap={2}>
                <AccessTimeIcon color="primary" fontSize="large" />
                <Box>
                  <Typography variant="h6">Working Hours</Typography>
                  <Typography variant="body1" color="text.secondary">
                    Monday - Friday: 08:00AM - 17:00PM
                    <br />
                    Saturday: 09:00AM - 12:00PM
                    <br />
                    Sunday: Closed
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  )
}

export default ContactModal

