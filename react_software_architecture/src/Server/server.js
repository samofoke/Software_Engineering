import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import HomePage from '../pages/Home';


const app = express();

const PORT = 8080;


app.use(express.static('./build', {index: false}));



app.get('/*', (req, res) => {
    const getReactApp = renderToString(
        <HomePage />
    );

    return res.send(`
        <html>
            <body>
                <div id="root">${getReactApp}</div>
            </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log("Listeninfg to port: ", PORT);
})