const parseString = require('xml2js').parseString;
const fs = require('fs');
const path = require('path');

export default async function handle(req: any, res: any) {
  const data = fs.readFileSync(path.join(process.cwd(), '../../lib/data/classes.xml'));
  parseString(data, function (err: any, result: any) {
    console.log(result);
    res.status(200).json({ result });
  });
};