// WARNING EVAL WARNING EVAL WARNING EVAL WARNING EVAL WARNING EVAL WARNING
// WARNING EVAL WARNING EVAL WARNING EVAL WARNING EVAL WARNING EVAL WARNING
// WARNING EVAL WARNING EVAL WARNING EVAL WARNING EVAL WARNING EVAL WARNING
// WARNING EVAL WARNING EVAL WARNING EVAL WARNING EVAL WARNING EVAL WARNING
// WARNING EVAL WARNING EVAL WARNING EVAL WARNING EVAL WARNING EVAL WARNING
// WARNING EVAL WARNING EVAL WARNING EVAL WARNING EVAL WARNING EVAL WARNING
// WARNING EVAL WARNING EVAL WARNING EVAL WARNING EVAL WARNING EVAL WARNING
// WARNING EVAL WARNING EVAL WARNING EVAL WARNING EVAL WARNING EVAL WARNING
// WARNING EVAL WARNING EVAL WARNING EVAL WARNING EVAL WARNING EVAL WARNING
// WARNING EVAL WARNING EVAL WARNING EVAL WARNING EVAL WARNING EVAL WARNING
// WARNING EVAL WARNING EVAL WARNING EVAL WARNING EVAL WARNING EVAL WARNING


const dirs = fs.readdirSync('.')

const types = {}

dirs.forEach(d => {
    if (fs.existsSync(`${d}/mod.lua`)) {
        const data = fs.readFileSync(`${d}/mod.lua`, { encoding: 'utf-8' }).split('\r\n').filter(d => !!d)
        data.forEach(p => {
            console.log(p);

            try {



                const args = p.split("=");
                const propertie = args.shift().split(/ +/).join('');

                const True = true, False = false;

                // WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING
                // WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING
                // WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING
                // WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING
                // WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING
                // WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING
                // WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING
                // WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING
                // WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING
                // WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING
                // WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING
                // WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING
                // WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING
                // WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING
                // WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING
                // WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING
                // WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING
                // WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING
                const type = typeof eval(args.join('=').replace('--', '//')) // <----------- HERE

                types[propertie] = type

            } catch (error) {
                console.log(error)
            }
        })
    }
})

fs.writeFileSync('mod.json', JSON.stringify(types, null, 3))