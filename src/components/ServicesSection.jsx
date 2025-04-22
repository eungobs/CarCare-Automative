"use client"

import { useState } from "react"
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  Modal,
  IconButton,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import CloseIcon from "@mui/icons-material/Close"
import BrushIcon from "@mui/icons-material/Brush"
import CleaningServicesIcon from "@mui/icons-material/CleaningServices"
import ColorLensIcon from "@mui/icons-material/ColorLens"
import BuildIcon from "@mui/icons-material/Build"
import EngineeringIcon from "@mui/icons-material/Engineering"
import LocalShippingIcon from "@mui/icons-material/LocalShipping"

const modalStyle = {
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

const ServiceCard = ({ service, onReadMore }) => {
  const { title, description, icon, image } = service

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "background.paper",
        borderRadius: 0,
      }}
    >
      <Box sx={{ position: "relative", width: "100%", height: "220px" }}>
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover", // Maintain aspect ratio
          }}
        />
        <Box className="service-icon">{icon}</Box>
      </Box>
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ p: 3, pt: 0 }}>
        <Button
          className="read-more-btn"
          endIcon={<ArrowForwardIcon />}
          onClick={() => onReadMore(service)}
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
      </CardActions>
    </Card>
  )
}

const ServiceDetailModal = ({ open, service, handleClose }) => {
  if (!service) return null

  const extendedDescriptions = {
    "Exterior Detailing": (
      <>
        <Typography variant="body1" paragraph>
          Our exterior detailing service is a comprehensive cleaning and restoration process that enhances your
          vehicle's appearance and protects its paint and exterior components.
        </Typography>
        <ul>
          <li>Hand Wash & Dry</li>
          <li>Clay Bar Treatment</li>
          <li>Paint Polishing</li>
          <li>Wax/Sealant Application</li>
          <li>Trim & Tire Dressing</li>
          <li>Glass Cleaning</li>
        </ul>
      </>
    ),
    "Interior Detailing": (
      <>
        <Typography variant="body1" paragraph>
          Our interior detailing service is a meticulous cleaning process that restores your vehicle's interior to
          like-new condition, creating a clean, fresh, and comfortable cabin environment.
        </Typography>
        <ul>
          <li>Thorough Vacuuming</li>
          <li>Steam Cleaning</li>
          <li>Leather/Upholstery Treatment</li>
          <li>Dashboard & Console Detailing</li>
          <li>Interior Glass Treatment</li>
        </ul>
      </>
    ),
    "Paint Correction": (
      <>
        <Typography variant="body1" paragraph>
          Paint correction is a specialized process that removes imperfections from your vehicle's paint, restoring its
          original luster and creating a flawless finish.
        </Typography>
        <ul>
          <li>Surface Preparation</li>
          <li>Paint Inspection</li>
          <li>Multi-Stage Polishing</li>
          <li>Finishing Polish</li>
          <li>Paint Protection</li>
        </ul>
      </>
    ),
    "Engine Diagnostics & Repair": (
      <>
        <Typography variant="body1" paragraph>
          Our engine diagnostics and repair service uses advanced technology to identify and resolve issues affecting
          your vehicle's performance, ensuring reliable operation.
        </Typography>
        <ul>
          <li>Comprehensive Diagnostics</li>
          <li>Performance Testing</li>
          <li>Expert Repairs</li>
          <li>Preventative Maintenance</li>
          <li>Post-Repair Testing</li>
        </ul>
      </>
    ),
    "Towing Services": (
      <>
        <Typography variant="body1" paragraph>
          Our 24/7 towing service provides reliable assistance when you need it most, whether you're stranded due to a
          breakdown or other emergency situation.
        </Typography>
        <ul>
          <li>Emergency Towing</li>
          <li>Flatbed Towing</li>
          <li>Accident Recovery</li>
          <li>Roadside Assistance</li>
          <li>Long-Distance Towing</li>
        </ul>
      </>
    ),
    "Suspension & Brake Services": (
      <>
        <Typography variant="body1" paragraph>
          Our suspension and brake services ensure your vehicle handles properly and stops safely.
        </Typography>
        <ul>
          <li>Brake Inspection</li>
          <li>Brake Pad Replacement</li>
          <li>Rotor Resurfacing/Replacement</li>
          <li>Suspension Diagnosis</li>
          <li>Wheel Alignment</li>
        </ul>
      </>
    ),
  }

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="service-detail-title">
      <Box sx={modalStyle}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography id="service-detail-title" variant="h4" component="h2" fontWeight="bold">
            {service.title}
          </Typography>
          <IconButton onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            width: "100%",
            height: "400px",
            mb: 3,
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src={service.image}
            alt={service.title}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover", // Maintain aspect ratio
            }}
          />
        </Box>

        {extendedDescriptions[service.title] || (
          <Typography variant="body1">{service.description}</Typography>
        )}

        {/* Removed Book This Service Button */}
      </Box>
    </Modal>
  )
}

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  const handleReadMore = (service) => {
    setSelectedService(service)
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  const services = [
    {
      title: "Exterior Detailing",
      description: "We meticulously wash, restore, and protect your vehicle's exterior.",
      icon: <BrushIcon />,
      image: "https://i.pinimg.com/736x/4b/bd/78/4bbd784facbd06244fd117767c3fbbe2.jpg",
    },
    {
      title: "Interior Detailing",
      description: "Restoration of a vehicle's interior, focusing on all surfaces.",
      icon: <CleaningServicesIcon />,
      image: "https://i.pinimg.com/736x/a3/93/a0/a393a0c566844eca2c853deb76ffc9a2.jpg",
    },
    {
      title: "Paint Correction",
      description: "Restoring the finish of a vehicle's paint by removing imperfections.",
      icon: <ColorLensIcon />,
      image: "https://i.pinimg.com/736x/36/5b/00/365b00080ee70f9f87a7b94624619014.jpg",
    },
    {
      title: "Engine Diagnostics & Repair",
      description: "Identifying and resolving engine issues for optimal performance.",
      icon: <BuildIcon />,
      image: "https://i.pinimg.com/736x/fd/a0/f1/fda0f12cfed52d323f45574cd50b5acd.jpg",
    },
    {
      title: "Towing Services",
      description: "Our reliable towing services are available 24/7.",
      icon: <LocalShippingIcon />,
      image: "https://i.pinimg.com/736x/56/8f/ff/568fff77a52b66fe2e99ab2ee823e7f0.jpg",
    },
    {
      title: "Suspension & Brake Services",
      description: "Focuses on brake components and ensuring safety.",
      icon: <EngineeringIcon />,
      image: "https://i.pinimg.com/736x/9b/7e/90/9b7e90613dcf97fee7cf9a4d22401f7a.jpg",
    },
  ]

  return (
    <Box className="section-padding" sx={{ backgroundColor: "background.default" }}>
      <Container>
        <Box textAlign="center" mb={6}>
          <Typography variant="subtitle1" color="primary" gutterBottom sx={{ fontWeight: 600 }}>
            OUR SERVICES
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: { xs: "2rem", md: "2.5rem" },
              lineHeight: 1.2,
              mb: 3,
            }}
          >
            Delivering{" "}
            <Typography component="span" color="primary" variant="inherit">
              Superior
            </Typography>{" "}
            Car Detailing
            <br />& Repair{" "}
            <Typography component="span" color="primary" variant="inherit">
              Solutions
            </Typography>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: "700px",
              mx: "auto",
              color: "text.secondary",
            }}
          >
            We pride ourselves on providing exceptional car detailing and repair services tailored to meet your needs.
            Our team of skilled professionals is committed to restoring your vehicle to its optimal condition, both
            inside and out.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ServiceCard service={service} onReadMore={handleReadMore} />
            </Grid>
          ))}
        </Grid>

        <ServiceDetailModal open={modalOpen} service={selectedService} handleClose={handleCloseModal} />
      </Container>
    </Box>
  )
}

export default ServicesSection