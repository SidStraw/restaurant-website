---
title: Webpack環境設定
tags: 
notebook: 10前端筆記
---


# Webpack環境設定
流程：
1. `npm i -D webpack webpack-dev-server webpack-cli` 安裝Webpack
2. 新增 `webpack.config.js` 並進行設定
3. 於 `package.json` 新增 `"scripts": {...}` 相關參數 `"webpack": "webpack --mode development"` 表示是開發模式，產品模式時請更改為 `"webpack": "webpack --mode production"`
4. `npm i -D babel-core babel-loader babel-preset-env` 安裝Babel並設定 `webpack.config.js`
5. `npm i -D css-loader sass-loader style-loader node-sass` 安裝CSS與SASS處理器並設定 `webpack.config.js`
6. `npm i -D mini-css-extract-plugin` 安裝掛件將 CSS 獨立成一支檔案
7. `npm i -D html-webpack-plugin` 安裝HTML管理掛件
8. `npm i -D ejs-loader` 為了將HTML模組化而使用 ejs ，達成在 HTML 中透過 `<%= ... %>` 快速使用 JS 的功能
9. `npm i -D file-loader image-webpack-loader` 讓 Webpack 可以處理圖片
10. HTML 中需要使用圖片時需使用 `<%= require('../img/cash.png') %>` 作為路徑
11. `npm i -D webpack-spritesmith`





`devtool: "eval-source-map"`
用以在打包後檢視Code的封裝來源