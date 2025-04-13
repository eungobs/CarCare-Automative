import React, { useState } from 'react';
import { Box, Typography, Container, Button, Grid, Modal, TextField } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const HeroSection = () => {
  const [openAppointmentModal, setOpenAppointmentModal] = useState(false);
  const [openReadMore, setOpenReadMore] = useState(false);

  const handleOpenAppointment = () => {
    setOpenAppointmentModal(true);
  };

  const handleCloseAppointment = () => {
    setOpenAppointmentModal(false);
  };

  const handleOpenReadMore = () => {
    setOpenReadMore(true);
  };

  const handleCloseReadMore = () => {
    setOpenReadMore(false);
  };

  return (
    <Box
      className="hero-section"
      sx={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://i.pinimg.com/736x/48/43/85/484385d042f7b6c6b6b0fa3694840d48.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "600px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Container>
        <Box py={8}>
          <Typography variant="subtitle1" color="primary" gutterBottom sx={{ fontWeight: 600 }}>
            DRIVE WITH CONFIDENCE
          </Typography>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              lineHeight: 1.2,
              mb: 2,
            }}
          >
            Premium Car{" "}
            <Typography component="span" color="primary" variant="inherit">
              Detailing
            </Typography>
            <br />& Repair{" "}
            <Typography component="span" color="primary" variant="inherit">
              Solutions
            </Typography>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: "600px",
              mb: 4,
              color: "text.secondary",
            }}
          >
            If you experience a breakdown or accident, we are here for you. Our reliable towing services are available 24/7 
            to provide immediate assistance when you need it most.
          </Typography>
          <Box display="flex" gap={2} flexWrap="wrap">
            <Button variant="contained" color="primary" size="large" sx={{ px: 4, py: 1.5 }} onClick={handleOpenAppointment}>
              MAKE APPOINTMENT
            </Button>
            <Button
              variant="text"
              color="primary"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                px: 4,
                py: 1.5,
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
              onClick={handleOpenReadMore}
            >
              READ MORE
            </Button>
          </Box>
        </Box>
      </Container>
      <Box sx={{ backgroundColor: "background.paper", py: 0 }}>
        <Container>
          <Grid container>
            <Grid item xs={12} md={4}>
              <Box
                className="feature-box"
                sx={{
                  backgroundColor: "background.paper",
                  borderRight: { md: "1px solid rgba(255,255,255,0.1)" },
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Expertise & Professional
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  “Your driving experience will always be exceptional!” 
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                className="feature-box"
                sx={{
                  backgroundColor: "primary.main",
                  color: "black",
                  "& .MuiTypography-root": {
                    color: "black",
                  },
                }}
              >
                <Typography variant="h6" gutterBottom>
                  24/7 Ready Support
                </Typography>
                <Typography variant="body2"> Day or night, we're just a call away!</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                className="feature-box"
                sx={{
                  backgroundColor: "background.paper",
                  borderLeft: { md: "1px solid rgba(255,255,255,0.1)" },
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Free Consulting
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We provide valuable insights without any fees.
                </Typography>
                <Typography variant="body1" sx={{ color: "yellow" }}>
                  Car Service from R599.99
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Appointment Modal */}
      <Modal open={openAppointmentModal} onClose={handleCloseAppointment}>
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}>
          <Typography variant="h6" gutterBottom>
            Make an Appointment
          </Typography>
          <TextField label="Name" fullWidth sx={{ mb: 2 }} />
          <TextField label="Email" fullWidth sx={{ mb: 2 }} />
          <TextField label="Phone" fullWidth sx={{ mb: 2 }} />
          <TextField label="Service" select fullWidth SelectProps={{ native: true }} sx={{ mb: 2 }}>
            <option value="detailing">Detailing</option>
            <option value="repair">Repair</option>
            <option value="diagnosis">Diagnosis</option> {/* Added Diagnosis option */}
            <option value="inspection">Inspection</option> {/* Added Inspection option */}
          </TextField>
          <TextField label="Time" select fullWidth SelectProps={{ native: true }} sx={{ mb: 2 }}>
            <option value="">Select Time</option>
            {[...Array(8).keys()].map((i) => {
              const hour = 9 + i; // Starting from 9 AM
              const timeValue = hour >= 12 ? `${hour - 12 || 12} PM` : `${hour} AM`;
              return <option key={i} value={timeValue}>{timeValue}</option>;
            })}
          </TextField>
          <Button variant="contained" color="primary" onClick={handleCloseAppointment}>
            Submit
          </Button>
        </Box>
      </Modal>

      {/* Read More Modal */}
      <Modal open={openReadMore} onClose={handleCloseReadMore}>
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 500,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}>
          <Typography variant="h6" gutterBottom>
            Our Services
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            We offer a wide range of car detailing and repair services to ensure your vehicle is in top condition. Our fully equipped service center uses the latest tools and techniques to deliver results that exceed your expectations.
          </Typography>
          <Typography variant="body1">
            Some of our services include:
          </Typography>
          <ul>
            <li><Typography variant="body2">Exterior and Interior Detailing</Typography></li>
            <li><Typography variant="body2">Paint Correction</Typography></li>
            <li><Typography variant="body2">Engine Bay Cleaning</Typography></li>
            <li><Typography variant="body2">Scratch Removal</Typography></li>
            <li><Typography variant="body2">Minor Collision Repairs</Typography></li>
            <li><Typography variant="body2">Diagnosis</Typography></li> {/* Added Diagnosis to services list */}
            <li><Typography variant="body2">Inspection</Typography></li> {/* Added Inspection to services list */}
          </ul>
          <Button variant="contained" color="primary" onClick={handleCloseReadMore}>
            Close
          </Button>
        </Box>
      </Modal>
    </Box>
  )
}

export default HeroSection;