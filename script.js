async function fetchQuote() {
  try {
    const response = await fetch('https://dummyjson.com/quotes/random');
    if (!response.ok) throw new Error('Network error');
    const data = await response.json();

    // The API returns { quote: '...', author: '...' }
    const quote = data.quote;
    const author = data.author;

    document.getElementById('quote').textContent = `"${quote}"`;
    document.getElementById('author').textContent = `— ${author}`;
  } catch (error) {
    document.getElementById('quote').textContent = "Oops, couldn't fetch quote now.";
    document.getElementById('author').textContent = '';
    console.error(error);
  }
}

// Load a quote when the page loads
window.addEventListener('load', fetchQuote);
