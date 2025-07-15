const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); // allow all origins
app.use(express.static('.')); // serve static files from current directory

app.get('/quote', async (req, res) => {
  try {
    // Try the original API first
    const response = await fetch('https://quotes.rest/qod?category=inspire');
    
    if (!response.ok) {
      console.log(`API Error: ${response.status} - ${response.statusText}`);
      
      // Fallback to a working API
      try {
        const fallbackResponse = await fetch('https://api.quotable.io/random?tags=inspirational');
        if (fallbackResponse.ok) {
          const fallbackData = await fallbackResponse.json();
          // Convert to the expected format
          const convertedData = {
            contents: {
              quotes: [{
                quote: fallbackData.content,
                author: fallbackData.author
              }]
            }
          };
          return res.json(convertedData);
        }
      } catch (fallbackError) {
        console.log('Fallback API also failed:', fallbackError);
      }
      
      // Last resort: return a static inspiring quote
      return res.json({
        contents: {
          quotes: [{
            quote: "The only way to do great work is to love what you do.",
            author: "Steve Jobs"
          }]
        }
      });
    }
    
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));
