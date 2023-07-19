const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB using Mongoose
mongoose
  .connect(
    "mongodb+srv://20bd1a056b:Eash%40123@cluster0.wvwcvqn.mongodb.net/colleges_db",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error);
  });

// Define the college schema and model
const collegeSchema = new mongoose.Schema({
  name: String,
  rollno: String,
  dept: String,
  College: String,
  Grade : Number
});

const College = mongoose.model("students", collegeSchema);

// Define an API route to fetch colleges data
app.get("/api/colleges", (req, res) => {
  College.find({})
    .then((colleges) => {
      res.json(colleges);
    })
    .catch((error) => {
      console.log("Error fetching colleges:", error);
      res.status(500).json({ error: "Failed to fetch colleges" });
    });
});
app.get("/api/colleges/:dept", (req, res) => {
  College.find({ dept: req.params.dept })
    .then((colleges) => {
      res.json(colleges);
    })
    .catch((error) => {
      console.log("Error fetching colleges:", error);
      res.status(500).json({ error: "Failed to fetch colleges" });
    });
});
app.get("/api/:college", (req, res) => {
  College.find({ College: req.params.college })
    .then((colleges) => {
      res.json(colleges);
    })
    .catch((error) => {
      console.log("Error fetching colleges:", error);
      res.status(500).json({ error: "Failed to fetch colleges" });
    });
});
// Define an API route to fetch student data by roll number
app.get('/api/students/:rollNumber', (req, res) => {
  const rollNumber = req.params.rollNumber;
  College.findOne({ 'rollno': rollNumber })
    .then(student => {
      if (!student) {
        return res.status(404).json({ error: 'Student not found' });
      }
      res.json(student);
    })
    .catch(error => {
      console.log('Error fetching student:', error);
      res.status(500).json({ error: 'Failed to fetch student' });
    });
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
