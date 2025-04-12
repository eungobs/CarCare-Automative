import { Box, Typography, Container, Grid, Link, Divider } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#121926", pt: 8, pb: 4 }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box mb={3}>
              <Typography variant="h6" color="text.secondary">
                Follow us on social media!
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" paragraph>
              "Follow us on our social media platforms to stay updated!"
            </Typography>
            <Box display="flex" gap={1} mt={2}>
              <Box
                sx={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  p: 1,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    "& .MuiSvgIcon-root": {
                      color: "black",
                    },
                  },
                }}
              >
                <FacebookIcon fontSize="small" />
              </Box>
              <Box
                sx={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  p: 1,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    "& .MuiSvgIcon-root": {
                      color: "black",
                    },
                  },
                }}
              >
                <TwitterIcon fontSize="small" />
              </Box>
              <Box
                sx={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  p: 1,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    "& .MuiSvgIcon-root": {
                      color: "black",
                    },
                  },
                }}
              >
                <YouTubeIcon fontSize="small" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box display="flex" flexDirection="column" gap={1}>
              {["About Us", "Services", "Contact", "Pricing", "FAQ", "Blog"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  underline="none"
                  color="text.secondary"
                  sx={{
                    "&:hover": {
                      color: "primary.main",
                      pl: 1,
                      transition: "all 0.3s ease",
                    },
                  }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Info
            </Typography>
            <Box display="flex" flexDirection="column" gap={3}>
              <Box display="flex" gap={2}>
                <PhoneIcon color="primary" />
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Phone Number
                  </Typography>
                  <Typography variant="body1">+271-056-7890</Typography>
                </Box>
              </Box>
              <Box display="flex" gap={2}>
                <EmailIcon color="primary" />
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Email Address
                  </Typography>
                  <Typography variant="body1">carcare@gmail.com</Typography>
                </Box>
              </Box>
              <Box display="flex" gap={2}>
                <LocationOnIcon color="primary" />
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Office Address
                  </Typography>
                  <Typography variant="body1">5 Robetville, MainReef Road., Gauteng 1703</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.1)" }} />

        <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap">
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} CarCare. All Rights Reserved.
          </Typography>
          <Box>
            <Link href="#" underline="none" color="text.secondary" sx={{ mr: 3 }}>
              Privacy Policy
            </Link>
            <Link href="#" underline="none" color="text.secondary">
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;