const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./src/db/dbconnection');
const authRoutes = require('./src/routes/auth');

dotenv.config();


const app = express();

connectDB();

const corsOptions = {
    origin: ['http://localhost:5173', 'http://localhost:5174'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    credentials: 'true',
}

app.use(express.json());
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send('Node Server is Up!');
    }
);
console.log('authRoutes :', authRoutes);
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}
);

