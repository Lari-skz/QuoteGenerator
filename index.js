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
      
      // Last resort: return a random static inspiring quote
      const fallbackQuotes = [
        { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
        { quote: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
        { quote: "Life is what happens to you while you're busy making other plans.", author: "John Lennon" },
        { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
        { quote: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
        { quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
        { quote: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
        { quote: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
        { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
        { quote: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" }
      ];
      
      const randomQuote = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
      
      return res.json({
        contents: {
          quotes: [randomQuote]
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

