const { readJson } = require('./readJson');

async function main(){
   const read = await readJson()
   console.log(read);
}

main()