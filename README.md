# TypeScript project boilerplate

I made this boilerplate for use in my own projects, but I thought it could be useful to others.

It includes Visual Studio Code specific configurations (the `.vscode` directory), but you'll want to gitignore it in a real project.

The TypeScript source files go in the `src` folder, the default Grunt task compiles it, runs tslint and copies all `.json` files from the all the `src` subdirs to the `build` directory, that is also defined as the `outDir` in the bundled `tsconfig.json`.

I made it so it puts everything in the same folder, that can be atomically zipped and deployed. The downside is that you must explicitly change the working directory in your `index.ts` since by default it's one level lower (in the root, while our code is executing from a subdir).

There's also a `build` task that cleans the output directory and compiles without emitting sourcemaps.

The `config:{filename}` tasks copy the corrisponding json from `config` to `src/config.json`.

`npm start` is already configured to start `build/index.js`.

### Contributing

If you find something that could be improved, open an issue and I'll look into that.

Of course pull requests are more than welcome! 
