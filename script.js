const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');

async function fetchQuote() {
  try {
    const response = await fetch('https://quotes.rest/qod?category=inspire');
    const data = await response.json();

    if (data && data.contents && data.contents.quotes && data.contents.quotes.length > 0) {
      const quote = data.contents.quotes[0];
      quoteText.textContent = `"${quote.quote}"`;
      authorText.textContent = `— ${quote.author}`;
    } else {
      quoteText.textContent = "No quote found.";
      authorText.textContent = "";
    }
  } catch (error) {
    quoteText.textContent = "Oops! Could not fetch a quote.";
    authorText.textContent = "";
    console.error(error);
  }
}

newQuoteBtn.addEventListener('click', fetchQuote);

fetchQuote();
