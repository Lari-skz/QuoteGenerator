const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); // allow all origins
app.use(express.static('.')); // serve static files from current directory

// Local quote database
const quotes = [
  { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { quote: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
  { quote: "Life is what happens to you while you're busy making other plans.", author: "John Lennon" },
  { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { quote: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
  { quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { quote: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
  { quote: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
  { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { quote: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
  { quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
  { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { quote: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
  { quote: "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.", author: "Winston Churchill" },
  { quote: "It's not whether you get knocked down, it's whether you get up.", author: "Vince Lombardi" },
  { quote: "If you are not willing to risk the usual, you will have to settle for the ordinary.", author: "Jim Rohn" },
  { quote: "Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea.", author: "Swami Vivekananda" },
  { quote: "All our dreams can come true if we have the courage to pursue them.", author: "Walt Disney" },
  { quote: "Good things happen to those who dare to think differently.", author: "Anonymous" },
  { quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" }
];

app.get('/quote', (req, res) => {
  try {
    // Get a random quote from our local database
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
    // Return in the expected format
    res.json({
      contents: {
        quotes: [randomQuote]
      }
    });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => console.log(`Proxy server running on port ${PORT}`));
