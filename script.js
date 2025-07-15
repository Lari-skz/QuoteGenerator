async function fetchQuote() {
  try {
    const response = await fetch('https://2082666d-df63-4fa3-b646-003f7a56e192-00-1y05tghu0sb3b.riker.replit.dev/');
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
