"use client"

import { Box, Typography, Modal, IconButton, List, ListItem, ListItemIcon, ListItemText, Divider } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import ArrowRightIcon from "@mui/icons-material/ArrowRight"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: "80%", md: "60%" },
  maxHeight: "90vh",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  overflowY: "auto",
}

const PagesModal = ({ open, handleClose }) => {
  const pageCategories = [
    {
      title: "Main Pages",
      pages: ["Home", "About Us", "Services", "Contact Us", "Pricing", "FAQ"],
    },
    {
      title: "Service Pages",
      pages: [
        "Car Detailing",
        "Engine Repair",
        "Paint Correction",
        "Interior Cleaning",
        "Electrical Systems",
        "Brake Services",
      ],
    },
    {
      title: "Utility Pages",
      pages: ["Blog", "Testimonials", "Gallery", "Team", "Careers", "Privacy Policy", "Terms of Service"],
    },
  ]

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="pages-modal-title"
      aria-describedby="pages-modal-description"
    >
      <Box sx={style}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography id="pages-modal-title" variant="h4" component="h2" fontWeight="bold">
            Site Pages
          </Typography>
          <IconButton onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </Box>

        <Typography variant="body1" id="pages-modal-description" sx={{ mb: 4, color: "text.secondary" }}>
          Browse through all the pages available on our website. Click on any page to navigate to it.
        </Typography>

        {pageCategories.map((category, index) => (
          <Box key={index} sx={{ mb: 4 }}>
            <Typography variant="h5" color="primary" gutterBottom>
              {category.title}
            </Typography>
            <List>
              {category.pages.map((page, pageIndex) => (
                <Box key={pageIndex}>
                  <ListItem
                    button
                    sx={{
                      py: 1.5,
                      "&:hover": {
                        backgroundColor: "rgba(255, 193, 7, 0.1)",
                      },
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: "40px" }}>
                      <ArrowRightIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={page} />
                  </ListItem>
                  {pageIndex < category.pages.length - 1 && <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />}
                </Box>
              ))}
            </List>
          </Box>
        ))}
      </Box>
    </Modal>
  )
}

export default PagesModal

