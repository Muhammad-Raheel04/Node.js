const express = require('express');
const app = express();
const path=require('path');

// Express can automatically serve static files from the "pages" directory.
// This allows the application to respond directly to requests for files
// without defining explicit routes for each one.

// Using res.redirect(), the user can be redirected to any required route
// or resource when needed.

// The express.static() middleware also simplifies serving static assets
// such as CSS files, images, and JavaScript files.
// When a static file (e.g., styles.css) is linked in an HTML file,
// Express automatically resolves and serves it using its absolute path,
// eliminating the need to manually specify full paths.

app.use(express.static(path.join(__dirname, 'pages')));

app.get('/', (req, resp) => {
   resp.sendFile(path.join(__dirname,'pages','home.html'));
});
app.get('/about',(req,resp)=>{
    resp.sendFile(path.join(__dirname,'pages','about.html'));
})
app.use((req,resp)=>{
   resp.status(404).sendFile(path.join(__dirname,'pages','404.html'));
})
app.listen(3200,()=>{
    console.log('Server live on http://localhost:3200');
})