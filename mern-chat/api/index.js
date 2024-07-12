const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const User = require('./models/User');

dotenv.config();

// Mongoose connection using promises
mongoose.connect(process.env.MONGO_URL, {
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);
});

// // Use async/await for Mongoose connection
// async function connectDB() {
//     try {
//       await mongoose.connect(process.env.MONGO_URL, {
//       });
//       console.log('Connected to MongoDB');
//     } catch (err) {
//       console.error('Error connecting to MongoDB:', err.message);
//       process.exit(1);
//     }
//   }
  
//   connectDB();

jwtSecret = process.env.JWT_SECRET;

const app = express();
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
}));


app.get('/test', (req, res) => {
    res.json('test ok');
});

app.post('/register', async (req,res) => {
    const {username, password} = req.body;
    try {    
        const createdUser = await User.create({username, password});
        jwt.sign({userId:createdUser._id}, jwtSecret, (err, token) => {
            if (err) throw err;
            res.cookie('token', token).status(201).json({
                id: createdUser._id,
            });
        });
    } catch (err) {
        if (err) throw err;
        res.status(500).json('error');
    }
});

app.listen(4000);

// username: mernchat
// password: 868686
