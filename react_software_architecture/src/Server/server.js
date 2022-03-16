import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';


const app = express();

const PORT = 8080;

app.get('/*', (req, res) => {
    const getReactApp = renderToString(
        <h1>I am able to access the Server</h1>
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