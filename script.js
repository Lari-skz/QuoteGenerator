const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const btn = document.getElementById('new-quote');

async function fetchQuote() {
  try {
    const response = await fetch('https://api.quotable.io/random');
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    quoteText.textContent = `"${data.content}"`;
    authorText.textContent = `— ${data.author}`;
  } catch (error) {
    quoteText.textContent = "Oops, couldn't fetch a quote right now.";
    authorText.textContent = '';
    console.error('Error fetching quote:', error);
  }
}

btn.addEventListener('click', fetchQuote);

// Fetch a quote on initial load
fetchQuote();
