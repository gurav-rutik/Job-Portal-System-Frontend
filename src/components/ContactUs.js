import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch("http://localhost:8080/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData), // Ensure formData has 'name', 'email', 'message'
        });

        if (response.ok) {
            alert("Message sent successfully");
        } else {
            alert("Failed to send message. Please try again.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Error occurred while sending the message. Please check your network.");
    }
};

  

  return (
    <Box sx={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
      <Typography variant="h4" align="center">
        Contact Us
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Send Message
        </Button>
      </form>
    </Box>
  );
};

export default ContactUs;
