import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import config from "../config";
 
const AddInternship = () => {
  const [formData, setFormData] = useState({
    type: "internship", // Default type
    company: "",
    role: "",
    location: "",
    duration: "",
    stipend: "",
    applyLink: "",
    logo: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const baseURL =
  process.env.NODE_ENV === "development"
    ? config.LOCAL_BASE_URL
    : config.BASE_URL;

  // ✅ Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${baseURL}/internship/add`, formData);
      setSuccessMessage("Internship/Job added successfully!");
      setFormData({ type: "internship", company: "", role: "", location: "", duration: "", stipend: "", applyLink: "", logo: "" });
      toast.success("Internship added successfully!");
    } catch (error) {
      toast.error("Error adding internship.");
      console.error(error);
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center">📌 Add Internship/Job</h2>
      {successMessage && <Alert variant="success">{successMessage}</Alert>}

      <Form onSubmit={handleSubmit} className="p-4 border rounded shadow">
        <Form.Group className="mb-3">
          <Form.Label>Type</Form.Label>
          <Form.Select name="type" value={formData.type} onChange={handleChange} required>
            <option value="internship">Internship</option>
            <option value="job">Job</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Company</Form.Label>
          <Form.Control type="text" name="company" value={formData.company} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Role</Form.Label>
          <Form.Control type="text" name="role" value={formData.role} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" name="location" value={formData.location} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Duration</Form.Label>
          <Form.Control type="text" name="duration" value={formData.duration} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Stipend</Form.Label>
          <Form.Control type="text" name="stipend" value={formData.stipend} onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Apply Link</Form.Label>
          <Form.Control type="url" name="applyLink" value={formData.applyLink} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Company Logo URL</Form.Label>
          <Form.Control type="url" name="logo" value={formData.logo} onChange={handleChange} required />
        </Form.Group>

        <Button type="submit" variant="success" className="w-100">
          Submit Internship/Job
        </Button>
      </Form>
    </Container>
  );
};

export default AddInternship;
