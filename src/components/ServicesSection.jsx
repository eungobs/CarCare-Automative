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
            objectFit: "fill", 
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

  // Extended descriptions for each service
  const extendedDescriptions = {
    "Exterior Detailing": (
      <>
        <Typography variant="body1" paragraph>
          Our exterior detailing service is a comprehensive cleaning and restoration process that enhances your
          vehicle's appearance and protects its paint and exterior components.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>What's included:</strong>
        </Typography>
        <ul>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Hand Wash & Dry:</strong> We use pH-balanced soaps and premium microfiber towels to safely remove
              dirt and contaminants without scratching.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Clay Bar Treatment:</strong> This process removes embedded contaminants that washing alone can't
              remove, leaving your paint smooth as glass.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Paint Polishing:</strong> We carefully polish the paint to remove minor scratches, swirl marks,
              and oxidation, restoring your vehicle's shine.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Wax/Sealant Application:</strong> A protective layer is applied to shield your paint from UV rays,
              environmental contaminants, and water spots.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Trim & Tire Dressing:</strong> All exterior plastic, rubber, and vinyl surfaces are cleaned and
              protected with specialized dressings.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <strong>Glass Cleaning:</strong> All exterior glass surfaces are thoroughly cleaned for optimal visibility
              and a streak-free finish.
            </Typography>
          </li>
        </ul>
      </>
    ),
    "Interior Detailing": (
      <>
        <Typography variant="body1" paragraph>
          Our interior detailing service is a meticulous cleaning process that restores your vehicle's interior to
          like-new condition, creating a clean, fresh, and comfortable cabin environment.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>What's included:</strong>
        </Typography>
        <ul>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Thorough Vacuuming:</strong> We remove all dust, dirt, and debris from carpets, seats, and
              hard-to-reach areas.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Steam Cleaning:</strong> High-temperature steam is used to sanitize surfaces and remove stubborn
              stains.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Leather/Upholstery Treatment:</strong> Seats and surfaces are cleaned with appropriate products
              and conditioned to prevent cracking and fading.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Dashboard & Console Detailing:</strong> All interior panels, vents, buttons, and screens are
              carefully cleaned and protected.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <strong>Interior Glass Treatment:</strong> All windows and mirrors are cleaned for perfect clarity and a
              streak-free finish.
            </Typography>
          </li>
        </ul>
      </>
    ),
    "Paint Correction": (
      <>
        <Typography variant="body1" paragraph>
          Paint correction is a specialized process that removes imperfections from your vehicle's clear coat and paint,
          restoring its original luster and creating a flawless finish.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>What's included:</strong>
        </Typography>
        <ul>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Surface Preparation:</strong> The vehicle is thoroughly washed, decontaminated, and clay barred to
              create a clean surface for correction.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Paint Inspection:</strong> We use specialized lighting to identify swirls, scratches, oxidation,
              and other imperfections.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Multi-Stage Polishing:</strong> Using professional-grade compounds and polishes, we carefully
              remove defects while preserving the clear coat.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Finishing Polish:</strong> A final polishing step maximizes gloss and clarity for a mirror-like
              finish.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <strong>Paint Protection:</strong> After correction, we apply a premium sealant or ceramic coating to
              protect the restored finish.
            </Typography>
          </li>
        </ul>
      </>
    ),
    "Engine Diagnostics & Repair": (
      <>
        <Typography variant="body1" paragraph>
          Our engine diagnostics and repair service uses advanced technology to identify and resolve issues affecting
          your vehicle's performance, ensuring reliable operation and preventing costly breakdowns.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>What's included:</strong>
        </Typography>
        <ul>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Comprehensive Diagnostics:</strong> We use state-of-the-art diagnostic equipment to read error
              codes and identify issues.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Performance Testing:</strong> We evaluate engine performance metrics to identify problems that may
              not trigger warning lights.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Expert Repairs:</strong> Our certified technicians perform necessary repairs using quality OEM or
              approved aftermarket parts.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Preventative Maintenance:</strong> We identify and address potential issues before they cause
              breakdowns.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <strong>Post-Repair Testing:</strong> After repairs, we thoroughly test the vehicle to ensure all issues
              have been resolved.
            </Typography>
          </li>
        </ul>
      </>
    ),
    "Towing Services": (
      <>
        <Typography variant="body1" paragraph>
          Our 24/7 towing service provides reliable assistance when you need it most, whether you're stranded due to a
          breakdown, accident, or other emergency situation.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>What's included:</strong>
        </Typography>
        <ul>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Emergency Towing:</strong> Fast response times to get you and your vehicle to safety.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Flatbed Towing:</strong> Secure transportation that prevents additional damage to your vehicle.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Accident Recovery:</strong> Specialized equipment and techniques for recovering vehicles from
              difficult situations.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Roadside Assistance:</strong> Jump starts, tire changes, fuel delivery, and lockout services.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <strong>Long-Distance Towing:</strong> Safe transportation for vehicles that need to be moved across town
              or to another city.
            </Typography>
          </li>
        </ul>
      </>
    ),
    "Suspension & Brake Services": (
      <>
        <Typography variant="body1" paragraph>
          Our suspension and brake services ensure your vehicle handles properly and stops safely, providing peace of
          mind and optimal performance in all driving conditions.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>What's included:</strong>
        </Typography>
        <ul>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Brake Inspection:</strong> Thorough evaluation of brake pads, rotors, calipers, and fluid to
              identify wear and potential issues.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Brake Pad Replacement:</strong> Installation of high-quality brake pads designed for your specific
              vehicle and driving needs.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Rotor Resurfacing/Replacement:</strong> Machining or replacing worn rotors to ensure smooth,
              effective braking.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Suspension Diagnosis:</strong> Identifying worn shocks, struts, bushings, and other components
              that affect ride quality.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              <strong>Suspension Repair:</strong> Replacement of worn components to restore handling, stability, and
              comfort.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <strong>Wheel Alignment:</strong> Precise adjustment of wheel angles to ensure even tire wear and proper
              handling.
            </Typography>
          </li>
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
              objectFit: "fill",
            }}
          />
        </Box>

        {extendedDescriptions[service.title] || <Typography variant="body1">{service.description}</Typography>}

        <Button variant="contained" color="primary" sx={{ mt: 4, color: "black" }} onClick={handleClose}>
          Book This Service
        </Button>
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
      description: "In car exterior detailing, we meticulously wash the vehicle.",
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
      description: "Repair service and resolving issues within a vehicle's engine system.",
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
      description: "Focuses on the brake pads, rotors, calipers, and brake fluid.",
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
            we pride ourselves on providing exceptional car detailing 
            and repair services tailored to meet your needs.
            Our team of skilled professionals is committed to restoring
            your vehicle to its optimal condition, both inside and out. 
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





