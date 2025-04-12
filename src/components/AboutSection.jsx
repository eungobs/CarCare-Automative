import { Box, Typography, Container, Grid, Button, LinearProgress } from "@mui/material"
import PhoneIcon from "@mui/icons-material/Phone"
import PeopleAltIcon from "@mui/icons-material/PeopleAlt"
import VerifiedIcon from "@mui/icons-material/Verified"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

const AboutSection = () => {
  return (
    <Box className="section-padding" sx={{ backgroundColor: "background.default" }}>
      <Container>
        <Grid container spacing={4} alignItems="center">
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
                fontSize: { xs: "2rem", md: "2.5rem" },
                lineHeight: 1.2,
                mb: 3,
              }}
            >
              Car Detailing And Repair
              <br />
              Services You Can Rely On
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: "text.secondary", mb: 3 }}>
              we are dedicated to delivering top-notch car detailing and repair 
              services that you can rely on. With years of experience in the automotive industry,
              our skilled technicians are committed to restoring your vehicle's appearance and 
              ensuring its optimal performance.
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

            <Box display="flex" gap={2} flexWrap="wrap">
              <Button
                variant="outlined"
                color="primary"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{ px: 3, py: 1 }}
              >
              
              </Button>
              <Button variant="contained" color="primary" size="large" startIcon={<PhoneIcon />} sx={{ px: 3, py: 1 }}>
                +271-056-7890
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              
              alt="Professional Mechanic"
              sx={{
                width: "100%",
                height: "auto",
                maxHeight: "600px",
                objectFit: "cover",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default AboutSection

