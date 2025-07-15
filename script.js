async function fetchQuote() {
  try {
    const response = await fetch('https://api.quotable.io/random');
    if (!response.ok) throw new Error('Network error');
    const data = await response.json();
    document.getElementById('quote').textContent = `"${data.content}"`;
    document.getElementById('author').textContent = `— ${data.author}`;
  } catch {
    document.getElementById('quote').textContent = "Oops, can't fetch quote now.";
    document.getElementById('author').textContent = '';
  }
}

document.getElementById('new-quote').addEventListener('click', fetchQuote);

fetchQuote();
