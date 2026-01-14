const express = require('express');
const app = express();
const path=require('path');

// Express will automatically server folders from
// my pages directory
// i can later use resp.redirect(''); to redirect my user to 
// any specified folder
app.use(express.static(path.join(__dirname,'pages')))
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