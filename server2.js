
const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname, 'public')));//indique le fichier css
app.set('view engine', 'ejs');//indique le mode de rendu
app.set('views', path.join(__dirname, 'views'));//indique le dossier des vues
app.get('/photos/popular', async(req, res) => {
    let photos = null;
    try {
        const response = await fetch('https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },}
        );
        photos = await response.json().then((photo) => {

           
            return photo.items.slice(0,10).map((photo) => {
            return {
                //id: photo.id,
                title: photo.title,
                url: photo.media.m,
                published: photo.published,
                author: photo.author,
                date_taken: photo.date_taken,
            };})});
            
    } catch (error)
    {
        console.error("error", error);
        
    }
   // res.send(photos);
    console.log(photos);
    res.render('index', { photos: photos });
});

app.listen(3000, () => {
    console.log('Server sur l url http://localhost:3000/photos/popular');
});