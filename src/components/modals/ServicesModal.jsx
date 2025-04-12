"use client"

import { Box, Typography, Modal, IconButton, Grid, Button } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import BrushIcon from "@mui/icons-material/Brush"
import CleaningServicesIcon from "@mui/icons-material/CleaningServices"
import ColorLensIcon from "@mui/icons-material/ColorLens"
import BuildIcon from "@mui/icons-material/Build"
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices"
import EngineeringIcon from "@mui/icons-material/Engineering"

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

const ServiceCard = ({ title, description, icon, image }) => {
  return (
    <Box className="service-card" sx={{ mb: 4 }}>
      <Box sx={{ position: "relative" }}>
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
          }}
        />
        <Box className="service-icon">{icon}</Box>
      </Box>
      <Box sx={{ p: 3, backgroundColor: "background.paper" }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {description}
        </Typography>
        <Button
          className="read-more-btn"
          endIcon={<ArrowForwardIcon />}
          sx={{
            color: "primary.main",
            p: 0,
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          READ MORE
        </Button>
      </Box>
    </Box>
  )
}

const ServicesModal = ({ open, handleClose }) => {
  const services = [
    {
      title: "Exterior Detailing",
      description: "In car exterior detailing, we meticulously wash the vehicle.",
      icon: <BrushIcon />,
      image:
        "https://i.pinimg.com/736x/4b/bd/78/4bbd784facbd06244fd117767c3fbbe2.jpg  ",
    },
    {
      title: "Interior Detailing",
      description: "Restoration of a vehicle's interior, focusing on all surfaces.",
      icon: <CleaningServicesIcon />,
      image:
        "https://i.pinimg.com/736x/fd/03/60/fd036039f22c0a5d3eeaaee37dfc90f1.jpg",
    },
    {
      title: "Paint Correction",
      description: "Using professional-grade compounds and polishes, we carefully remove defects while preserving the clear coat.",
      icon: <ColorLensIcon />,
      image:
        "https://i.pinimg.com/736x/5f/64/6c/5f646c6ad97cc152a9d9b918409bf5b2.jpg",
    },
    {
      title: "Engine Diagnostics & Repair",
      description: "Repair service and resolving issues within a vehicle's engine system.",
      icon: <BuildIcon />,
      image:
        "https://i.pinimg.com/736x/3b/e4/20/3be420c005085060959505b6e947d9e9.jpg",
    },
    {
      title: "Electrical System Repairs",
      description: "battery replacement, alternator repairs, diagnostics, wiring fixes, lighting repairs, and accessory installations..",
      icon: <ElectricalServicesIcon />,
      image:
        "https://i.pinimg.com/736x/2f/7d/d2/2f7dd2dacfbd9ca537575b8031954ff7.jpg",
    },
    {
      title: "Suspension & Brake Services",
      description: "Suspension and brake services, shock and strut replacements, brake pad and rotor replacements, brake fluid servicing, and alignment adjustments.",
      icon: <EngineeringIcon />,
      image:
        "https://i.pinimg.com/736x/d9/e9/47/d9e94713b8839e8a2859d8993561a7ec.jpg",
    },
  ]

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="services-modal-title"
      aria-describedby="services-modal-description"
    >
      <Box sx={style}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography id="services-modal-title" variant="h4" component="h2" fontWeight="bold">
            Our Services
          </Typography>
          <IconButton onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </Box>

        <Typography variant="body1" id="services-modal-description" sx={{ mb: 4, color: "text.secondary" }}>
          We offer a comprehensive range of car detailing and repair services to keep your vehicle in top condition.
          Browse our services below or contact us for a custom quote.
        </Typography>

        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ServiceCard {...service} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Modal>
  )
}

export default ServicesModal

