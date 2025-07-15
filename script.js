async function fetchQuote() {
  try {
       const response = await fetch('https://2082666d-df63-4fa3-b646-003f7a56e192-00-1y05tghu0sb3b.riker.replit.dev/quote');
    if (!response.ok) throw new Error('Network error');
    const data = await response.json();

    const quote = data.contents.quotes[0].quote;
    const author = data.contents.quotes[0].author;

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
