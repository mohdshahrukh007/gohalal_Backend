exports.Error=(req,res)=>{
    const htmlContent = `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Not Found</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
      }
      .container {
        text-align: center;
      }
      .error-code {
        font-size: 3rem;
        color: #e74c3c;
      }
      .error-message {
        font-size: 1.5rem;
        margin-top: 1rem;
        color: #333;
      }
    </style>
    </head>
    <body>
      <div class="container">
        <div class="error-code">404</div>
        <div class="error-message">Page Not Found</div>
      </div>
    </body>
    </html>
    `;
    res.send(htmlContent);


}