const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/news', async (req, res) => {
  const { country, category, pageSize, page } = req.query;
  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        country,
        category,
        pageSize,
        page,
        apiKey: '44c4702b1137483285066c4327fe4b10', // Replace with your NewsAPI key
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching news' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
