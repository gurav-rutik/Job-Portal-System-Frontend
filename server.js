const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Nodemailer setup (use your email credentials here)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password'
  }
});

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'admin-email@example.com', // Replace with your email
    subject: `New Contact Us message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Error sending message');
    }
    res.status(200).send('Message sent successfully');
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
