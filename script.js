async function fetchQuote() {
  try {
    const response = await fetch("/quote");
    if (!response.ok) throw new Error("Network error");
    const data = await response.json();

    const quote = data.contents.quotes[0].quote;
    const author = data.contents.quotes[0].author;

    document.getElementById("quote").textContent = `"${quote}"`;
    document.getElementById("author").textContent = `— ${author}`;
  } catch (error) {
    document.getElementById("quote").textContent =
      "Oops, couldn't fetch quote now.";
    document.getElementById("author").textContent = "";
    console.error(error);
  }
}

// Load a quote when the page loads
window.addEventListener("load", fetchQuote);
