exports.contactUsConfirmation = (name) => {
  return `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Thank You for Contacting EZ Works</title>
        <style>
            body {
                background-color: #f5f5f5;
                font-family: 'Exo 2', Arial, sans-serif;
                font-size: 16px;
                line-height: 1.6;
                color: #333333;
                margin: 0;
                padding: 0;
            }
    
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 30px 20px;
                background-color: #ffffff;
                border-radius: 8px;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            }
    
            .header {
                text-align: center;
                margin-bottom: 30px;
                padding-bottom: 20px;
                border-bottom: 1px solid #eaeaea;
            }
    
            .logo {
                max-width: 180px;
                margin-bottom: 20px;
            }
    
            .message {
                font-size: 24px;
                font-weight: 600;
                color: #143654;
                margin-bottom: 25px;
                text-align: center;
            }
    
            .body {
                font-size: 16px;
                margin-bottom: 30px;
                color: #4a4a4a;
            }
    
            .highlight {
                color: #ea7b2c;
                font-weight: 600;
            }
    
            .button {
                display: inline-block;
                background-color: #ea7b2c;
                color: #ffffff;
                text-decoration: none;
                padding: 12px 25px;
                border-radius: 4px;
                font-weight: 600;
                margin: 20px 0;
                text-align: center;
            }
    
            .footer {
                font-size: 14px;
                color: #777777;
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #eaeaea;
                text-align: center;
            }
    
            .social-links {
                margin: 20px 0;
                text-align: center;
            }
    
            .social-links a {
                display: inline-block;
                margin: 0 10px;
                color: #143654;
                text-decoration: none;
            }
        </style>
    </head>
    
    <body>
        <div class="container">
            <div class="header">
                <a href="https://www.ez.works/">
                    <img class="logo" src="https://res.cloudinary.com/deru8rihm/image/upload/v1745673198/headerlogo_hobjx6.png" 
                        alt="EZ Works Logo">
                </a>
            </div>
            
            <div class="message">Thank You for Contacting EZ Works!</div>
            
            <div class="body">
                <p>Dear <span class="highlight">${name}</span>,</p>
                
                <p>Thank you for reaching out to EZ Works. We have received your message and our team will get back to you within <span class="highlight">10 minutes</span> as per our commitment.</p>
                
                <p>At EZ Works, we pride ourselves on being <span class="highlight">Faster than the Fastest</span>. Our team of experts is ready to assist you with your requirements across our comprehensive range of services including Graphics & Video, Language & Communications, Research & Data, Technology & AI, and Back-Office & Administrative services.</p>
                
                <p>If your inquiry is urgent, please feel free to reach out to us directly at <a href="mailto:info@ez.works">info@ez.works</a>.</p>
                
                <div style="text-align: center;">
                    <a href="https://www.ez.works/" class="button">Visit Our Website</a>
                </div>
            </div>
            
            <div class="social-links">
                <a href="https://www.ez.works/">Website</a> | 
                <a href="https://www.ez.works/">LinkedIn</a> | 
                <a href="https://www.ez.works/">Twitter</a>
            </div>
            
            <div class="footer">
                <p>© 2024 EZ Works. All rights reserved.</p>
                <p>An Extended Team for Business Professionals</p>
                <p>If you have any further questions, feel free to email us at <a href="mailto:info@ez.works">info@ez.works</a></p>
            </div>
        </div>
    </body>
    </html>`;
};
