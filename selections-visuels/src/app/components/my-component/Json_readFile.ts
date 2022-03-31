
//import { Prop, State, Watch } from '@stencil/core';

import { readFileSync } from 'fs';

async function JsonFile(filePath: string){
    const input = readFileSync(filePath, {encoding: "binary"});
    return JSON.stringify(input);
}

export { JsonFile };

