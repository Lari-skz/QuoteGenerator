async function fetchQuote() {
  const quoteElement = document.getElementById('quote');
  const authorElement = document.getElementById('author');
  
  try {
    quoteElement.textContent = 'Getting a new quote...';
    const response = await fetch('/quote');
    
    if (!response.ok) throw new Error('Network error');
    const data = await response.json();
    
    const quote = data.contents.quotes[0].quote;
    const author = data.contents.quotes[0].author;

    quoteElement.textContent = `"${quote}"`;
    authorElement.textContent = `— ${author}`;
    
  } catch (error) {
    quoteElement.textContent = "Oops, couldn't fetch quote now.";
    authorElement.textContent = '';
    console.error(error);
  }
}

// Load a quote when the page loads
window.addEventListener('load', fetchQuote);
