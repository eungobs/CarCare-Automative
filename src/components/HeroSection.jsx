import { Box, Typography, Container, Button, Grid } from "@mui/material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

const HeroSection = () => {
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
            <Button variant="contained" color="primary" size="large" sx={{ px: 4, py: 1.5 }}>
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
                  “your driving experience will always be exceptional!” 
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
                <Typography variant="body2"> Day or night, we're just a call away!".</Typography>
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
                  We providing valuable insights without any fees."
                </Typography>
                {/* Add the new yellow text here */}
                <Typography variant="body1" sx={{ color: "yellow" }}>
                  Car Service from R599.99
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

export default HeroSection

