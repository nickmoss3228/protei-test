import express from 'express'

const cors = require('cors');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Database connection
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true, 
}));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Server is running!', endpoints: ['/api/auth/login', '/api/auth/signup'] });
});

app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!' });
});


// Login endpoint
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const result = await pool.query(
      'SELECT * FROM users WHERE email = $1',
      [email.toLowerCase()]
    );
    
    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'Пользователь с таким email не найден' });
    }
    
    const user = result.rows[0];
    const passwordMatch = await bcrypt.compare(password, user.password_hash);
    
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Неверный пароль' });
    }
    
    // User without password
    const userData = {
      id: user.id.toString(),
      email: user.email,
      firstName: user.first_name,
      lastName: user.last_name,
      createdAt: user.created_at
    };
    
    res.json({ success: true, user: userData });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

// Signup endpoint
app.post('/api/auth/signup', async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    
    // Check
    const existingUser = await pool.query(
      'SELECT * FROM users WHERE email = $1',
      [email.toLowerCase()]
    );
    
    if (existingUser.rows.length > 0) {
      return res.status(409).json({ error: 'Пользователь с таким email уже существует' });
    }
    
    // Hash password
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);
    
    // Insert
    const result = await pool.query(
      'INSERT INTO users (email, first_name, last_name, password_hash) VALUES ($1, $2, $3, $4) RETURNING *',
      [email.toLowerCase(), firstName, lastName, passwordHash]
    );
    
    const newUser = result.rows[0];
    const userData = {
      id: newUser.id.toString(),
      email: newUser.email,
      firstName: newUser.first_name,
      lastName: newUser.last_name,
      createdAt: newUser.created_at
    };
    
    res.json({ success: true, user: userData });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

// Database connection test endpoint
app.get('/api/db-test', async (req, res) => {
  try {
    // Test basic connection
    const client = await pool.connect();
    const result = await client.query('SELECT NOW() as current_time, version() as postgres_version');
    client.release();
    
    // Test if users table exists
    const tableCheck = await pool.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' AND table_name = 'users'
    `);
    
    // Count users
    const userCount = await pool.query('SELECT COUNT(*) FROM users');
    
    res.json({
      success: true,
      connection: 'Connected to PostgreSQL',
      currentTime: result.rows[0].current_time,
      postgresVersion: result.rows[0].postgres_version,
      usersTableExists: tableCheck.rows.length > 0,
      totalUsers: userCount.rows[0].count
    });
  } catch (error) {
    console.error('Database test error:', error);
    res.status(500).json({
      success: false,
      error: 'Database connection failed',
      details: error.message
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});