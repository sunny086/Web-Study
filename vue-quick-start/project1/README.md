# Vite Vue Starter

This is a project template using [Vite](https://vitejs.dev/). It requires [Node.js](https://nodejs.org) v12+.

To start:

```sh
npm install
npm run dev

# if using yarn:
yarn
yarn dev
```

App.vue：
这是一个单文件组件 (SFC)，它是Vue.js应用程序的主要组成部分之一。
包含了该应用的主要布局和结构，通常包含模板 (HTML)，样式 (CSS 或者预处理器) 以及行为 (JavaScript 或者 TypeScript)。
其中包含了根组件的结构和逻辑，可以作为其他组件的容器，也可以直接渲染在应用中。

main.js：
这是应用的入口文件，是整个Vue.js应用程序的起点。
通常用于创建Vue实例、加载全局插件、设置路由或状态管理器，并将根组件挂载到页面上的DOM元素上。

tsconfig.json：
这是 TypeScript 的配置文件，用于指定 TypeScript 编译器的行为和选项。
可以配置编译选项、指定输入文件、输出目录、引入类型声明等。
在Vue项目中，tsconfig.json文件用于配置 TypeScript 编译器，以便在Vue应用中使用TypeScript。
这三个文件一起协同工作，构建了一个基本的Vue.js项目，其中App.vue作为主要的页面组件，main.js作为应用的入口文件，而tsconfig.json则负责配置TypeScript编译器的行为。
