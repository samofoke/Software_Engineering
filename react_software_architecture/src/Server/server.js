import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from '../app/App';
import path from 'path';
import fs from 'fs';


const app = express();

const PORT = 8080;


app.use(express.static('./build', {index: false}));



app.get('/*', (req, res) => {
    const getReactApp = renderToString(
        <StaticRouter location={req.url}>
            <App />
        </StaticRouter>
    );

    const pullRootFile = path.resolve('./build/index.html');

    fs.readFile(pullRootFile, 'utf-8', (err, data) => {
        if (err){
            return(res.status(500).send("They is a technical issue", err));
        };

        return res.send(
            data.replace('<div id="root"></div', `<div id="root">${getReactApp}</div>`)
        );
    });
});

app.listen(PORT, () => {
    console.log("Listeninfg to port: ", PORT);
})