const express = require('express');
const layerRouter = require('./routes/layerRouter');
const functionRouter = require('./routes/functionRouter');
const userRouter = require('./routes/userRouter');
const testRouter = require('./routes/testRouter')
// Initialize Express
const app = express();
const PORT = 3000;

// CORS
const cors = require('cors');
app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Endpoint to list AWS Lambda layers
app.use('/layers', layerRouter);
app.use('/functions', functionRouter);
app.use('/user', userRouter);
app.use('/test', testRouter)

// Start Express Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
