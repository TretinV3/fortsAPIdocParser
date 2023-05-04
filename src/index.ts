import { parse } from 'node-html-parser';
import { readFileSync, writeFileSync } from "fs";
import { request } from "https"

let options = {
    host: 'www.earthworkgames.com',
    path: '/content/docs/FortsAPI.html'
}

let r = request(options, (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', async () => {
        writeFileSync('content.html', data);

        createJSON(data)
    });
});
r.on('error', (e) => {
    console.log(e.message);
});
r.end();

function createJSON(data: string) {

    const output: any = {};

    const lines = data.split('\n');

    for (let i = 0; i < lines.length; i++) {
        //console.log(i)
        let text = lines[i];
        if (text.includes('<h3><a name="')) {
            //console.log(text.split('"')[1])
            const name = text.split('"')[1]

            const nextLines = lines.slice(i, i+100).join('\n');
            const nextLinesHtml = parse(nextLines);
            const descRaw = nextLinesHtml.querySelector('p')?.text;
            const desc = descRaw?.split(/ +/).filter(d => !!d).join(' ').split('\n').filter(d => !!d).join('\n')
            const docs = nextLinesHtml.querySelectorAll('pre').slice(0, 2).map(d => {
                return d.firstChild.rawText.split('\n').filter(d => !!d).join('\n')
            });
            output[name] = { documentation: docs, description: desc }
        }
    }

    writeFileSync('data.json', JSON.stringify(output, null, 3));
    console.log('done !')
}