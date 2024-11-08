
const http = require("http");    // Importing http module
const fs = require("fs");       // Importing fs module for file handling
const path = require("path");   // Importing path module for working with files and directories

const server = http.createServer((req, res) => {
    console.log(`Request received for: ${req.url}`);
    
    // Define the file to serve based on the URL
    let filePath = path.join(__dirname, "content", req.url === "/" ? "index.html" : req.url);
    const ext = path.extname(filePath);

    // Set default MIME type for HTML files
    let contentType = "text/html";
    
    // Define content type for different file extensions
    if (ext === ".css") {
        contentType = "text/css";
    } else if (ext === ".js") {
        contentType = "application/javascript";
    } else if (ext === ".jpg" || ext === ".jpeg") {
        contentType = "image/jpeg";
    } else if (ext === ".png") {
        contentType = "image/png";
    } else if (ext === ".gif") {
        contentType = "image/gif";
    }

    // If no extension is provided, append ".html"
    if (!ext) {
        filePath += ".html";
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            if (err.code === "ENOENT") {  // File not found
                res.writeHead(404, { "Content-Type": "text/plain" });
                res.end("404 Not Found");
            } else {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Server Error");
            }
        } else { 
            res.writeHead(200, { "Content-Type": contentType });
            res.end(data);
        }
    });

});

server.listen(8080, () => {
    console.log("Server is running on port 8080");
});
