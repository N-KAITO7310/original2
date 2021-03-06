
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import jQuery from 'jquery'
global.jquery = jQuery
global.$ = jQuery
window.$ = window.jQuery = require('jquery')

import Vue from 'vue'
// ルーティングの定義をインポートする
import router from './router'
// ルートコンポーネントをインポートする
import App from './components/App.vue'

new Vue({
  el: '#app',
  router, // ルーティングの定義を読み込む
  components: { App }, // ルートコンポーネントの使用を宣言する
  template: '<App v-bind:app="app" v-on:appEvent="storeEvent" />', // ルートコンポーネントを描画する
  data:{app:app},
  created:function(){
      console.log("selected app:" + this.app);
  },
  methods:{
      storeEvent:function(point){
          console.log("app情報を取得：" + point);
          document.getElementById("back").classList.remove('d-none');
          document.getElementById("endBack").classList.remove('d-none');
          document.getElementById("appInfo").value = point;
          
      }
  }
})