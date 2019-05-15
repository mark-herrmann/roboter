## Upgrading roboter from 1.x to 2.x

roboter 2.x introduces `babel` 7. If you have been using the precompilation feature of the `release` task, you might need to take action. If you've been using a local `.babelrc` make sure to upgrade it to the scoped package names of `babel` 7. If you have been using [`babel-runtime`](https://www.npmjs.com/package/babel-runtime) as a dependency in your module, also make sure to switch to the new scoped [`@babel/runtime`](https://www.npmjs.com/package/@babel/runtime) module. Please refer to the [babel upgrading guide](https://babeljs.io/docs/en/next/v7-migration) and the new [`precompile`](#the-precompile-task) task that has been introduced to verify the precompilation result before a release.