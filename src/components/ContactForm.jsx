import { Box, Typography, TextField, Button } from "@mui/material"
import SendIcon from "@mui/icons-material/Send"

const ContactForm = () => {
  return (
    <Box className="contact-form">
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
        REQUEST A SERVICE
      </Button>
    </Box>
  )
}

export default ContactForm

