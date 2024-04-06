const PORT = 8000;

import express from 'express';
import axios from 'axios';
import cheerio from 'cheerio';

const app = express();


app.get('/', async (req, res) => {
    res.json({ message: 'Web Scraping 101' });
});

// Get data from website using URL

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

