const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');

async function fetchQuote() {
  try {
    // Fetch a random quote from the quotable API
    const response = await fetch('https://api.quotable.io/random');
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();

    // Add a simple fade-out/fade-in animation
    quoteText.style.opacity = 0;
    authorText.style.opacity = 0;

    setTimeout(() => {
      quoteText.textContent = `"${data.content}"`;
      authorText.textContent = `— ${data.author}`;
      quoteText.style.opacity = 1;
      authorText.style.opacity = 1;
    }, 300);
  } catch (error) {
    quoteText.textContent = 'Oops! Could not fetch a quote.';
    authorText.textContent = '';
    console.error(error);
  }
}

newQuoteBtn.addEventListener('click', fetchQuote);

// Fetch a quote on page load
fetchQuote();
