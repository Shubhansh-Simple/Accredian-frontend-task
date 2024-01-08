/*
 * ENTRY POINT OF THE SERVER
 */

// Node Packages
import express    from 'express';
import dotenv     from 'dotenv';
import morgan     from 'morgan';


// SETTING PORT
const PORT = process.env.PORT || 5000;
const MODE = process.env.NODE_ENV;


// SETTING EXPRESS
const app = express();

/* TESTING */
app.get('/', (_, res)=>{
  res.send('Welcome to Note-Taking-Apis');
});


// Listen to given port with return alert message
app.listen(PORT, 
  () => console.log(`Server running in ${MODE} mode on port ${PORT}`)
);


