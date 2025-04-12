"use client"

import { useState } from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import PhoneIcon from "@mui/icons-material/Phone"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import PercentIcon from "@mui/icons-material/Percent"
import FacebookIcon from "@mui/icons-material/Facebook"
import TwitterIcon from "@mui/icons-material/Twitter"
import YouTubeIcon from "@mui/icons-material/YouTube"

// Import modals
import AboutModal from "./modals/AboutModal"
import ServicesModal from "./modals/ServicesModal"
import ContactModal from "./modals/ContactModal"
import PagesModal from "./modals/PagesModal"

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  // State for modals
  const [aboutModalOpen, setAboutModalOpen] = useState(false)
  const [servicesModalOpen, setServicesModalOpen] = useState(false)
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [pagesModalOpen, setPagesModalOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleMenuClick = (menuItem) => {
    // Close mobile drawer if open
    if (mobileOpen) {
      setMobileOpen(false)
    }

    // Open the appropriate modal based on menu item
    switch (menuItem) {
      case "ABOUT US":
        setAboutModalOpen(true)
        break
      case "SERVICES":
        setServicesModalOpen(true)
        break
      case "CONTACT US":
        setContactModalOpen(true)
        break
      case "PAGES":
        setPagesModalOpen(true)
        break
      default:
        // Homepage or other navigation
        break
    }
  }

  const menuItems = ["HOMEPAGE", "ABOUT US", "SERVICES", "CONTACT US"]

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Box
          component="img"
          src="https://i.pinimg.com/736x/12/5f/40/125f406347f02a28d17bbae3d171a3c1.jpg"
          alt="CarCare"
          sx={{ height: 40 }}
        />
      </Typography>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item} disablePadding onClick={() => handleMenuClick(item)}>
            <ListItemText
              primary={item}
              sx={{
                textAlign: "center",
                "& .MuiTypography-root": {
                  fontSize: "14px",
                  fontWeight: 600,
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <>
      <Box className="top-bar" sx={{ display: { xs: "none", md: "block" } }}>
        <Container>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box display="flex" gap={3}>
              <Box display="flex" alignItems="center" gap={1}>
                <LocationOnIcon fontSize="small" />
                <Typography variant="body2">05 Robrtville MainRee Road., Gauteng, 1703</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <PhoneIcon fontSize="small" />
                <Typography variant="body2">For Emergency: +2710-456-7890</Typography>
              </Box>
            </Box>
            <Box display="flex" gap={3}>
              <Box display="flex" alignItems="center" gap={1}>
                <PercentIcon fontSize="small" />
                <Typography variant="body2">Discount 10% for every service</Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <AccessTimeIcon fontSize="small" />
                <Typography variant="body2">08:00AM - 17:00PM</Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <AppBar position="static" color="secondary" elevation={0}>
        <Container>
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Typography variant="h6" component="div">
              <Box
                component="img"
                src="https://i.pinimg.com/736x/12/5f/40/125f406347f02a28d17bbae3d171a3c1.jpg"
                alt="CaCare"
                sx={{ height: 50 }}
              />
            </Typography>

            {isMobile ? (
              <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
            ) : (
              <Box display="flex" alignItems="center">
                <Box sx={{ display: "flex" }}>
                  {menuItems.map((item) => (
                    <Button
                      key={item}
                      color="inherit"
                      onClick={() => handleMenuClick(item)}
                      sx={{
                        mx: 1,
                        fontSize: "14px",
                        fontWeight: 600,
                      }}
                    >
                      {item}
                    </Button>
                  ))}
                </Box>
                <Box sx={{ display: "flex", ml: 2 }}>
                  <IconButton color="primary" aria-label="facebook">
                    <FacebookIcon />
                  </IconButton>
                  <IconButton color="primary" aria-label="twitter">
                    <TwitterIcon />
                  </IconButton>
                  <IconButton color="primary" aria-label="youtube">
                    <YouTubeIcon />
                  </IconButton>
                </Box>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>

      {/* Modals */}
      <AboutModal open={aboutModalOpen} handleClose={() => setAboutModalOpen(false)} />
      <ServicesModal open={servicesModalOpen} handleClose={() => setServicesModalOpen(false)} />
      <ContactModal open={contactModalOpen} handleClose={() => setContactModalOpen(false)} />
      <PagesModal open={pagesModalOpen} handleClose={() => setPagesModalOpen(false)} />
    </>
  )
}

export default Header

