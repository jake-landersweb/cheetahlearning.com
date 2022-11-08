const parseString = require('xml2js').parseString;
const fs = require('fs');
const path = require('path');

export default async function getClasses() {
    var xml = "There was an error"
    const data = fs.readFileSync(path.join(process.cwd(), 'lib/data/classes.xml'));
    await parseString(data, function (err: any, result: any) {
        xml = JSON.stringify(result)
    });
    return xml
};