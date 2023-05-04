import { parse } from 'node-html-parser';
import { readFileSync, readdirSync, writeFileSync } from "fs";
import { request } from "https"

function getDocFromWeb(){
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
            //writeFileSync('content.html', data);
    
            convertFonctions(data)
        });
    });
    r.on('error', (e) => {
        console.log(e.message);
    });
    r.end();
}

function convertFonctions(data: string) {

    console.log('creating json')

    const output: any = {};

    const lines = data.split('\n');

    for (let i = 0; i < lines.length; i++) {
        //console.log(i)
        let text = lines[i];
        if (text.includes('<h3><a name="')) {
            //console.log(text.split('"')[1])
            const name = text.split('"')[1]

            const nextLines = lines.slice(i, i + 100).join('\n');
            const nextLinesHtml = parse(nextLines);
            const descRaw = nextLinesHtml.querySelector('p')?.text;
            const desc = descRaw?.split(/ +/).filter(d => !!d).join(' ').split('\n').filter(d => !!d).join('\n')
            const docs = nextLinesHtml.querySelectorAll('pre').slice(0, 2).map(d => {
                return d.firstChild.rawText.split('\n').filter(d => !!d).join('\n')
            });
            output[name] = { documentation: docs, description: desc }
        }
    }

    writeFileSync('data/functions.json', JSON.stringify(output, null, 3));
    console.log('done !')
}

//import { Devices } from './dumps/ts/devices'

function convertTsToJons() {
    readdirSync('out/dumps/ts').forEach(d => {
        const data = require('./dumps/ts/' + d);
        writeFileSync('src/dumps/json/' + d + 'on', JSON.stringify(data, null, 3));
    })
}

function getGlobalType() {

    const out: any = {};

    readdirSync('out/dumps/ts').forEach(d => {

        const types: any = {}

        const data = require('./dumps/ts/' + d);
        const name = Object.keys(data)[0];
        data[name].forEach((device: any) => {
            Object.keys(device).forEach(k => {
                types[k] = typeof device[k]
            });
        });

        out[name] = types;
    })

    writeFileSync('data/propreties.json', JSON.stringify(out, null, 3));

}

//console.log(require('./dumps/ts/device_sprites'))