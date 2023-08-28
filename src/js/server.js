const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path'); 

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://sudsarkar13:bP8ctucxDgPKVQLk@cluster0.wysx6kz.mongodb.net/testDB", { useNewUrlParser: true, useUnifiedTopology: true, })

    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
    });

// Create a data schema
const userSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    phoneNumber: String,
    password: String,
});

module.exports = mongoose.model('User', userSchema);

// app.get('/', function (req, res) {
//     const indexPath = path.join(__dirname, '/index.html');
// });

// Set up static file serving for CSS, JS, and images
app.use(express.static(path.join(__dirname, '/index.html')));

//post
app.post('/register', async (req, res) => {
    try {
        const { fullName, email, phoneNumber, password } = req.body;

        // Create a new user instance using the User model
        const newUser = new User({
            fullName,
            email,
            phoneNumber,
            password,
        });

        // Save the new user to the database
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});