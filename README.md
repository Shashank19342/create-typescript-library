# create-typescript-library

## Setting up TypeScript

#### Pre-requisits
  - Latest version of Node to be installed
  - Knowledge of JavaScript
  - VsCode editor

#### Installing TypeScript Globally
  - In the command prompt run "npm i -g typescript" to globally install typeScript on your machine.
  - Check if it is installed or not by running "tsc -v".

#### Setting up your TypeScript Project
  - Create a folder for the Project and open it in VsCode editor.
  - In the terminal run "tsc --init" to create a tsconfig.json file.
  - In the tsconfig.json file search for the commented *"rootDir": "./",* and un-comment it and replace it with *"rootDir": "./src",*.
  - Similarly search for *"outDir": "./",* and un-comment it and replace it with *"outDir": "./dist",*.

#### Creating your First TypeScript File
  - In the src folder create a file called "index.ts".
  - Add some typeScript code in it(for eg. "console.log('hello')").

#### Running your TypeScript File.
  - In the terminal cd to your Project folder's directory ( "cd ..").
  - Run "tsc index" or just "tsc".
  - A new index.js file will be created in the dist folder.
  - You can also use "tsc --watch index" or "tsc --watch" to continuously watch for any changes in index.ts file.
