# react-learning
My personal React playground

- [x] Redux Toolkit
- [x] Webpack config in TS
- [x] CSS Modules
- [ ] New JSX Transform

### Webpack config in TS
To use Webpack config in TS and have `"module": "esnext"` you need to add in `tsconfig.json`
```ts
"ts-node": {
    "compilerOptions": {
      "module": "commonjs"
    }
},
```

### CSS Modules
Had to define typings for it fo work in TS
```ts
declare module '*.scss';
```

### Issues with webpack v5
1/ Starts requiring fully specified paths and some modules (like Ant Design) might not have it.

Fixed by adding this to the rules
```ts        
{
    test: /\.m?js/,
    resolve: {
        fullySpecified: false,
    },
},
```

2/ Types might not be correct as a lot of modules still use `@types/webpack` - webpack v5 makes its own types now