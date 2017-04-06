//import gulp from 'gulp';
//import webpack from 'webpack';
//import cfg from './webpack.config';
//import devServer from 'webpack-dev-server';
//import path from 'path';
//import util from 'gulp-util';
const gulp = require('gulp');
const webpack = require('webpack');
const cfg = require('./webpack.config');
const devServer = require('webpack-dev-server');
const path = require('path');
const util = require('gulp-util');

gulp.task('dev', () => {
  cfg.plugins = [
    new webpack.HotModuleReplacementPlugin(),
  ];
  cfg.entry = {
    'app': [
      'babel-polyfill',
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8080',
      './src/index',
    ],
  };

  new devServer(webpack(cfg), {
    //contentBase: path.join(__dirname, 'dist'),
    hot: true,
    historyApiFallback: true,
    //publicPath: cfg.output.publicPath,
    stats: {
      colors: true,
    },
  }).listen(8080, 'localhost', function (err) {
    if(err) throw new gutil.PluginError("webpack-dev-server", err);
    util.log(`'${util.colors.cyan('dev:server')}' http://localhost:8080/webpack-dev-server/index.html`);
  });
});
