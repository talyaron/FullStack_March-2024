start by writing `npm init --y`
This will open a new file package.json -> all teh settings are stored here.

npm = node package manager (https://www.npmjs.com/)

npm install -D typescript tsc ts-node @types/node nodemon (installing typescript, tsc, ts-node, @types/node, nodemon, all the files we need to run typescript)

add tsconfig.json file -> this file will have all the settings for typescript
{
"compilerOptions": {
"target": "es6",
"module": "commonjs",
"outDir": "./dist",
"rootDir": "./src",
"strict": true,
"esModuleInterop": true,
"forceConsistentCasingInFileNames": true,
"resolveJsonModule": true,
"sourceMap": true
},
"include": ["src/**/*"],
"exclude": ["node_modules", "**/*.spec.ts"]
}

create /src folder and add index.ts file

add to package.json

```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon src/index.ts"
}
```

run `npm run dev` to start the server

```

```
