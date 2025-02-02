const filesystem = require('fs');

filesystem.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Cannot read the file:', err);
        return;
    }
    console.log(data);
});
