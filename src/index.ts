// npx tsc --init ==> create a tsconfig.json file

//Modificaciones en el archivo tsconfig.json
//1- "target": "es6", 
//2-"rootDir": "./src",  
//3-"outDir": "./build",

//para compilar a ts ejecutar: npx tsc

import app from "./app";
import {createConnection} from "./db";

createConnection()

app.listen(app.get('port'))
console.log('Server listening on port 3000')

