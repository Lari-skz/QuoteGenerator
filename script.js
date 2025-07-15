
async function fetchQuote() {
  const quoteElement = document.getElementById('quote');
  const authorElement = document.getElementById('author');
  const button = document.querySelector('button');
  
  try {
    // Add loading state
    quoteElement.classList.add('loading');
    quoteElement.textContent = 'Getting a new quote...';
    authorElement.textContent = '';
    button.disabled = true;
    
    const response = await fetch('/quote');
    if (!response.ok) throw new Error('Network error');
    const data = await response.json();

    const quote = data.contents.quotes[0].quote;
    const author = data.contents.quotes[0].author;

    // Small delay for smooth transition
    setTimeout(() => {
      quoteElement.classList.remove('loading');
      quoteElement.textContent = `"${quote}"`;
      authorElement.textContent = `— ${author}`;
      button.disabled = false;
    }, 300);
    
  } catch (error) {
    quoteElement.classList.remove('loading');
    quoteElement.textContent = "Oops, couldn't fetch quote now.";
    authorElement.textContent = '';
    button.disabled = false;
    console.error(error);
  }
}

// Load a quote when the page loads
window.addEventListener('load', fetchQuote);

// Add touch feedback for mobile
document.addEventListener('DOMContentLoaded', function() {
  const button = document.querySelector('button');
  if (button) {
    button.addEventListener('touchstart', function() {
      this.style.transform = 'scale(0.95)';
    });
    
    button.addEventListener('touchend', function() {
      this.style.transform = 'scale(1)';
    });
  }
}););
