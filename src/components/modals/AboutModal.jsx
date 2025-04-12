"use client"

import {
  Box,
  Typography,
  Modal,
  IconButton,
  Grid,
  Button,
  LinearProgress,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import PeopleAltIcon from "@mui/icons-material/PeopleAlt"
import VerifiedIcon from "@mui/icons-material/Verified"
import PhoneIcon from "@mui/icons-material/Phone"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

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

const AboutModal = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="about-modal-title"
      aria-describedby="about-modal-description"
    >
      <Box sx={style}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography id="about-modal-title" variant="h4" component="h2" fontWeight="bold">
            About Us
          </Typography>
          <IconButton onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1" color="primary" gutterBottom sx={{ fontWeight: 600 }}>
              WHO WE ARE ?
            </Typography>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 700,
                fontSize: { xs: "1.75rem", md: "2.25rem" },
                lineHeight: 1.2,
                mb: 3,
              }}
            >
              Car Detailing And Repair
              <br />
              Services You Can Rely On
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: "text.secondary", mb: 3 }}>
              we are dedicated to delivering top-notch car detailing and repair services 
              that you can rely on. With years of experience in the automotive industry, 
              our skilled technicians are committed to restoring your vehicle's appearance 
              and ensuring its optimal performance.
            </Typography>

            <Box mb={4}>
              <Box display="flex" justifyContent="space-between" mb={1}>
                <Typography variant="body2">Client Satisfaction</Typography>
                <Typography variant="body2" fontWeight="bold">
                  90%
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={90}
                sx={{
                  height: 6,
                  borderRadius: 3,
                  backgroundColor: "rgba(255,255,255,0.1)",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "primary.main",
                  },
                }}
              />
            </Box>

            <Grid container spacing={3} sx={{ mb: 4 }}>
              <Grid item xs={6}>
                <Box display="flex" alignItems="center" gap={2}>
                  <PeopleAltIcon color="primary" fontSize="large" />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Professional &<br />
                      Creative Staff
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box display="flex" alignItems="center" gap={2}>
                  <VerifiedIcon color="primary" fontSize="large" />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Warranties &<br />
                      Guarantees
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>

            <Button variant="contained" color="primary" size="large" startIcon={<PhoneIcon />} sx={{ px: 3, py: 1 }}>
              +2710-456-7890
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://i.pinimg.com/736x/d6/50/8d/d6508db8dcb3f3539c162070486af992.jpg"
              alt="Professional Mechanic"
              sx={{
                width: "100%",
                height: "auto",
                maxHeight: "500px",
                objectFit: "cover",
              }}
            />
            <Typography variant="body1" sx={{ mt: 3, color: "text.secondary" }}>
              With over 15 years of experience in the automotive industry, TowCare has established itself as a leader in
              car detailing and repair services. Our team of certified professionals is dedicated to providing the
              highest quality service to keep your vehicle running smoothly and looking its best.
            </Typography>
          </Grid>
        </Grid>

        {/* Detailed Services Section */}
        <Box mt={6}>
          <Typography variant="h4" component="h2" gutterBottom color="primary" sx={{ fontWeight: 600 }}>
            Car Detailing and Repair Services You Can Rely On
          </Typography>

          <Typography variant="body1" paragraph sx={{ mb: 3 }}>
            When it comes to maintaining the performance and appearance of your vehicle, you need a service provider you
            can trust. Our comprehensive car detailing and repair services are designed to meet your specific needs and
            ensure your vehicle remains in top condition. Here's what we offer:
          </Typography>

          <Accordion sx={{ mb: 2, backgroundColor: "background.paper", "&:before": { display: "none" } }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />}>
              <Typography variant="h6" fontWeight="bold">
                1. Exterior Car Detailing
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" component="div">
                <Box component="ul" sx={{ pl: 2 }}>
                  <Box component="li" sx={{ mb: 1 }}>
                    <Typography variant="body1" component="span" fontWeight="medium">
                      Hand Wash & Dry:
                    </Typography>{" "}
                    We use high-quality products to gently clean your vehicle's exterior without damaging the paint.
                  </Box>
                  <Box component="li" sx={{ mb: 1 }}>
                    <Typography variant="body1" component="span" fontWeight="medium">
                      Clay Bar Treatment:
                    </Typography>{" "}
                    This process removes embedded contaminants, leaving your paint smooth and ready for waxing.
                  </Box>
                  <Box component="li" sx={{ mb: 1 }}>
                    <Typography variant="body1" component="span" fontWeight="medium">
                      Polishing:
                    </Typography>{" "}
                    Enhance your vehicle's shine and protect the paint from aging with a professional polish treatment.
                  </Box>
                  <Box component="li">
                    <Typography variant="body1" component="span" fontWeight="medium">
                      Waxing & Sealants:
                    </Typography>{" "}
                    Add a protective layer to your car's paint to shield it from UV rays, dirt, and environmental
                    contaminants.
                  </Box>
                </Box>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ mb: 2, backgroundColor: "background.paper", "&:before": { display: "none" } }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />}>
              <Typography variant="h6" fontWeight="bold">
                2. Interior Car Detailing
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" component="div">
                <Box component="ul" sx={{ pl: 2 }}>
                  <Box component="li" sx={{ mb: 1 }}>
                    <Typography variant="body1" component="span" fontWeight="medium">
                      Vacuuming & Shampooing:
                    </Typography>{" "}
                    Comprehensive vacuuming followed by deep cleaning of carpets, seats, and mats to remove dirt and
                    stains.
                  </Box>
                  <Box component="li" sx={{ mb: 1 }}>
                    <Typography variant="body1" component="span" fontWeight="medium">
                      Leather Cleaning & Conditioning:
                    </Typography>{" "}
                    We treat leather upholstery with specialized products to keep it supple and prevent cracking.
                  </Box>
                  <Box component="li">
                    <Typography variant="body1" component="span" fontWeight="medium">
                      Dashboard & Console Care:
                    </Typography>{" "}
                    Every surface, including the dashboard, door panels, and console, is cleaned and treated to restore
                    its original appearance.
                  </Box>
                </Box>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ mb: 2, backgroundColor: "background.paper", "&:before": { display: "none" } }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />}>
              <Typography variant="h6" fontWeight="bold">
                3. Engine Bay Cleaning
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                A clean engine not only looks better but can also prevent corrosion and help identify potential issues.
                We carefully clean and degrease the engine bay to keep it functioning optimally.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ mb: 2, backgroundColor: "background.paper", "&:before": { display: "none" } }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />}>
              <Typography variant="h6" fontWeight="bold">
                4. Paint Correction & Touch-Up
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" component="div">
                <Box component="ul" sx={{ pl: 2 }}>
                  <Box component="li" sx={{ mb: 1 }}>
                    <Typography variant="body1" component="span" fontWeight="medium">
                      Scratch and Swirl Removal:
                    </Typography>{" "}
                    Our technicians specialize in correcting imperfections in your vehicle's paintwork.
                  </Box>
                  <Box component="li">
                    <Typography variant="body1" component="span" fontWeight="medium">
                      Touch-Up Painting:
                    </Typography>{" "}
                    For deeper scratches or chips, we use matching paint to restore your car's body and protect it from
                    corrosion.
                  </Box>
                </Box>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ mb: 2, backgroundColor: "background.paper", "&:before": { display: "none" } }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />}>
              <Typography variant="h6" fontWeight="bold">
                5. Windshield Repair and Replacement
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                Small chips and cracks can often be repaired without needing a full windshield replacement. If needed,
                we offer glass replacement services that meet OEM standards.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ mb: 2, backgroundColor: "background.paper", "&:before": { display: "none" } }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />}>
              <Typography variant="h6" fontWeight="bold">
                6. Light Mechanical Repairs
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                Our skilled technicians can diagnose and perform light mechanical repairs—ensuring your vehicle runs
                smoothly. Services include brake replacement, battery checks, and fluid changes.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ mb: 2, backgroundColor: "background.paper", "&:before": { display: "none" } }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />}>
              <Typography variant="h6" fontWeight="bold">
                7. Full-Service Auto Repair
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                From engine diagnostics to transmission repair, we have the expertise and equipment to handle a wide
                range of auto repairs. We use high-quality parts and adhere to industry standards for every service.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ mb: 2, backgroundColor: "background.paper", "&:before": { display: "none" } }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />}>
              <Typography variant="h6" fontWeight="bold">
                8. 24/7 Tow Truck Services
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                Stranded? Don't worry! Our tow truck service operates 24/7, ensuring we can reach you no matter where
                you are or what time it is. Whether you've run out of gas, have a flat tire, or need emergency
                transportation, our reliable tow trucks are just a call away. We offer affordable packages to suit your
                needs and get you back on the road quickly and safely.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ mb: 2, backgroundColor: "background.paper", "&:before": { display: "none" } }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon color="primary" />}>
              <Typography variant="h6" fontWeight="bold">
                9. Customer Satisfaction Guarantee
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                We prioritize our customers' needs and strive for transparency in our services. Your satisfaction is our
                top priority, and we take pride in our work.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Box mt={4}>
            <Typography variant="h5" gutterBottom color="primary" fontWeight="bold">
              Why Choose Us?
            </Typography>
            <Box component="ul" sx={{ pl: 3 }}>
              <Box component="li" sx={{ mb: 1 }}>
                <Typography variant="body1" fontWeight="medium">
                  Experienced Professionals:
                </Typography>
                <Typography variant="body1" sx={{ ml: 1 }}>
                  Our technicians are trained and certified, providing you with expertise you can trust.
                </Typography>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Typography variant="body1" fontWeight="medium">
                  Quality Products:
                </Typography>
                <Typography variant="body1" sx={{ ml: 1 }}>
                  We use premium detailing products and high-quality parts to ensure the best possible outcome for your
                  vehicle.
                </Typography>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Typography variant="body1" fontWeight="medium">
                  Convenient Scheduling:
                </Typography>
                <Typography variant="body1" sx={{ ml: 1 }}>
                  We understand your time is valuable; that's why we offer flexible scheduling to fit your needs.
                </Typography>
              </Box>
              <Box component="li">
                <Typography variant="body1" fontWeight="medium">
                  Affordability:
                </Typography>
                <Typography variant="body1" sx={{ ml: 1 }}>
                  Our competitive pricing ensures you receive top-notch services without breaking the bank.
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            mt={4}
            p={3}
            sx={{ backgroundColor: "rgba(255, 193, 7, 0.1)", borderLeft: "4px solid", borderColor: "primary.main" }}
          >
            <Typography variant="h5" gutterBottom fontWeight="bold">
              Contact Us
            </Typography>
            <Typography variant="body1">
              Ready to give your vehicle the care it deserves? Contact us today to schedule an appointment or to learn
              more about our car detailing, repair services, and 24/7 tow truck assistance. Your car will thank you!
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<PhoneIcon />}
              sx={{ mt: 2, px: 3, py: 1, color: "black" }}
            >
              +270-456-7890
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  )
}

export default AboutModal

