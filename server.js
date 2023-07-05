const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());


app.patch('/api/update-db', (req, res) => {
    const obj = req.body;
    const jsonContent = fs.readFileSync('./db/db.json', 'utf-8');
    const jsonData = JSON.parse(jsonContent);
    // Recursive function to access key names of nested objects
    function getNestedKeys(obj, keys = []) {
        for (const key in obj) {
            keys.push(key);
            if (typeof obj[key] === "object") {
                getNestedKeys(obj[key], keys); // Recursively call the function for nested objects
            }
        }
        return keys;
    }

    // get the keys
    const nestedKeys = getNestedKeys(obj);
    console.log(nestedKeys);
    console.log(nestedKeys[1]);
    // console.log(Object.keys(obj.food_category)[0]);


    jsonData[`${nestedKeys[0]}`][`${nestedKeys[1]}`][`${nestedKeys[2]}`][`${nestedKeys[3]}`][`${nestedKeys[4]}`] = obj[`${nestedKeys[0]}`][`${nestedKeys[1]}`][`${nestedKeys[2]}`][`${nestedKeys[3]}`][`${nestedKeys[4]}`];

    const modifiedJson = JSON.stringify(jsonData, null, 2);
    fs.writeFileSync('./db/db.json', modifiedJson, 'utf-8');

    res.json({
        status: 'success',
        updatedData: obj[`${nestedKeys[0]}`][`${nestedKeys[1]}`][`${nestedKeys[2]}`][`${nestedKeys[3]}`][`${nestedKeys[4]}`],
    })
})
// Serve HTML file
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
// Serve CSS file
app.get('/css/style.css', function (req, res) {
    res.sendFile(__dirname + '/css/style.css');
});

// Serve static image files from images folder
app.use('/images', express.static(__dirname + '/images'));

// Serve static videos files from kitchen folder
app.use('/Kitchen', express.static(__dirname + '/Kitchen'));

// Serve static icons from webfonts folder
app.use('/webfonts', express.static(__dirname + '/webfonts'));

// Serve JS file
app.get('/js/mainTwo.js', function (req, res) {
    res.sendFile(__dirname + '/js/mainTwo.js');
});

// Serve JS icons file
app.get('/js/all.min.js', function (req, res) {
    res.sendFile(__dirname + '/js/all.min.js');
});
// Serve CSS icons file
app.get('/css/all.min.css', function (req, res) {
    res.sendFile(__dirname + '/css/all.min.css');
});

// Serve JSON file
app.get('/db/db.json', function (req, res) {
    res.sendFile(__dirname + '/db/db.json');
});




// Start the server
app.listen(3000, function () {
    console.log('Server started on port 3000');
});