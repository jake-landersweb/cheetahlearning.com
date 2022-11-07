const parseString = require('xml2js').parseString;
const fs = require('fs');
const path = require('path');

export default function getClasses() {
    const data = fs.readFileSync(path.join(process.cwd(), 'lib/data/classes.xml'));
    parseString(data, function (err: any, result: any) {
        console.log(JSON.stringify(result))
        return JSON.stringify(result)
    });
    return "FUCK"
};