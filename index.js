
const fs = require('fs');
const http = require('http');

const port = 3000;

const routes = (link, res) => {
    fs.readFile(link, (err, data) => {
        if (err) {
            res.writeHead(404)
            res.write('error : page not found')
        } else {
            res.write(data)
        }
        res.end()
    })
}
const server = http.createServer((req, res) => {
    const url = req.url
    console.log(url);
    res.statusCode = 200;
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })


    if (url === '/about') {
        routes('./about.html', res)
    } else if (url === '/contact') {
        routes('./contact.html', res)
    } else {
        routes('./index.html', res)
    }
});

server.listen(3000, () => {
    console.log(`Server running at http://:${port}/`);
});