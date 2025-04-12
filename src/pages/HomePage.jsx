import { Box } from "@mui/material"
import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection"
import ServicesSection from "../components/ServicesSection"
import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"

const HomePage = () => {
  return (
    <Box>
      <Header />
      <HeroSection />
      <Box sx={{ backgroundColor: "background.default", py: 8 }}>
        <AboutSection />
        <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
          <Box sx={{ width: "100%", maxWidth: "400px" }}>
            <ContactForm />
          </Box>
        </Box>
        <ServicesSection />
      </Box>
      <Footer />
    </Box>
  )
}

export default HomePage

