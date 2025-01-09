import React, { useState } from "react";
import axios from "axios";
import { Typography, TextField, Button, Paper, Box, Chip } from "@mui/material";
import { useNavigate } from "react-router-dom";

const initial = { postId: "", postProfile: "", reqExperience: 0, postTechStack: [], postDesc: "" };

const Create = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState(initial);
  const [skillInput, setSkillInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!/^\d+$/.test(form.postId)) {
      alert("Post ID must be numeric.");
      return;
    }
    if (form.postTechStack.length === 0) {
      alert("Please add at least one skill.");
      return;
    }

    axios
      .post("http://localhost:8080/jobPosts", form)
      .then((resp) => {
        console.log(resp.data);
        navigate("/"); // Navigate after successful submission
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const { postId, postProfile, reqExperience, postDesc, postTechStack } = form;

  const handleSkillAdd = () => {
    if (skillInput.trim() && !postTechStack.includes(skillInput)) {
      setForm({ ...form, postTechStack: [...postTechStack, skillInput] });
      setSkillInput(""); // Clear the input field
    }
  };

  const handleSkillRemove = (skill) => {
    setForm({
      ...form,
      postTechStack: postTechStack.filter((s) => s !== skill),
    });
  };

  return (
    <Paper sx={{ padding: "1%" }} elevation={0}>
      <Typography sx={{ margin: "3% auto" }} align="center" variant="h5">
        Create New Post
      </Typography>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <TextField
            type="number"
            sx={{ width: "50%", margin: "2% auto" }}
            onChange={(e) => setForm({ ...form, postId: e.target.value })}
            label="Enter your Post ID"
            variant="outlined"
            value={postId}
          />
          <TextField
            sx={{ width: "50%", margin: "2% auto" }}
            required
            onChange={(e) => setForm({ ...form, postProfile: e.target.value })}
            label="Job-Profile"
            variant="outlined"
            value={postProfile}
          />
          <TextField
            type="number"
            sx={{ width: "50%", margin: "2% auto" }}
            required
            onChange={(e) => setForm({ ...form, reqExperience: e.target.value })}
            label="Years of Experience"
            variant="outlined"
            value={reqExperience}
          />
          <TextField
            sx={{ width: "50%", margin: "2% auto" }}
            required
            multiline
            rows={4}
            onChange={(e) => setForm({ ...form, postDesc: e.target.value })}
            label="Job Description"
            variant="outlined"
            value={postDesc}
          />
          <Box sx={{ margin: "1% auto", width: "50%" }}>
            <Typography variant="h6">Skills:</Typography>
            <Box sx={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
              <TextField
                fullWidth
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                label="Enter a skill"
                variant="outlined"
              />
              <Button variant="contained" onClick={handleSkillAdd}>
                Add
              </Button>
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {postTechStack.map((skill, index) => (
                <Chip
                  key={index}
                  label={skill}
                  onDelete={() => handleSkillRemove(skill)}
                  color="primary"
                  sx={{ margin: "5px" }}
                />
              ))}
            </Box>
          </Box>
          <Button sx={{ width: "50%", margin: "2% auto" }} variant="contained" type="submit">
            Submit
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default Create;
