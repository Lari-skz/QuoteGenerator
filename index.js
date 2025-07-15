<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Daily Quote</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                max-width: 600px;
                margin: 50px auto;
                padding: 20px;
                text-align: center;
                background-color: #f5f5f5;
            }
            .quote-container {
                background: white;
                padding: 30px;
                border-radius: 10px;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                margin: 20px 0;
            }
            #quote {
                font-size: 24px;
                font-style: italic;
                color: #333;
                margin-bottom: 20px;
                line-height: 1.4;
            }
            #author {
                font-size: 18px;
                color: #666;
                font-weight: bold;
            }
            button {
                background-color: #4caf50;
                color: white;
                padding: 12px 24px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                font-size: 16px;
                margin-top: 20px;
            }
            button:hover {
                background-color: #45a049;
            }
        </style>
    </head>
    <body>
        <h1>Daily Inspirational Quote</h1>
        <div class="quote-container">
            <div id="quote">Loading quote...</div>
            <div id="author"></div>
        </div>
        <button onclick="fetchQuote()">Get New Quote</button>

        <script src="script.js"></script>
    </body>
</html>

