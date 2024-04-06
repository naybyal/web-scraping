const PORT = 8000;

const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();


app.get('/', async (req, res) => {
    res.json({ message: 'Scraping Goodreads' });
});

// Get data from website using URL

app.get('/goodreads', async (req, res) => {
    axios.get('https://www.goodreads.com/list/show/1230.Best_Gothic_Books_Of_All_Time')
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        const books = [];
        $('.bookTitle').each((i, elem) => {
            books[i] = {
                title: $(elem).text(),
                url: $(elem).attr('href')
            };
        });
        console.log(books);
        res.json(books);
    })
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

