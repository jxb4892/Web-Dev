const express = require('express');
const app = express();
const path = require('path');

function handleIndexReq(req, res) {
    return res.sendFile(path.join(__dirname, '/views/home.html'));
}

function handleImgReq(req, res, file) {
    return res.sendFile(path.join(__dirname, file));
}

function moveBigFoot() {
    console.log('debugging');
    alert('Woohoo, you win! You found Bigfoot!');
    var picture = document.getElementById('bigFoot');

    var x = Math.random() * 300;
    var y = Math.random() * 300;
    picture.style.top = x + 'px';
    picture.style.left = y + 'px';

}

app.get('/', handleIndexReq);
app.get('/views/bigfoot.png', (req, res) => { handleImgReq(req, res, '/views/bigfoot.png'); });
app.get('/views/forest.jpeg', (req, res) => { handleImgReq(req, res, '/views/forest.jpeg'); });
app.listen(3000, () => {
    console.log('Bigfoot is listening on port 3000.');
});