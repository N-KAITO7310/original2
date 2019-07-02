<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// ログイン認証
Route::get('login', 'Auth\LoginController@showLoginForm')->name('login');
Route::post('login', 'Auth\LoginController@login')->name('login.post');
Route::get('logout', 'Auth\LoginController@logout')->name('logout.get');


Route::get('meditation', 'Meditation_recordsController@index')->name("meditation");

Route::get('trainning', 'Trainning_recordsController@index')->name("trainning");

Route::get('exw', 'Exw_recordsController@index')->name("exw");

Route::group(['middleware' => 'auth'], function(){
    Route::resource('users', 'UsersController', ['only' => 'show']);
    Route::get('exw/show/{id}', 'Exw_recordController@show')->name('exw.show');
    
    
    Route::post('meditation', 'Meditation_recordsController@store')->name("meditation.post");
    Route::post('trainning', 'Trainning_recordsController@store')->name("trainning.post");
    Route::post('exw', 'Exw_recordsController@store')->name("exw.post"); 
    
});
