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

// Route::prefix('frontend')->group(function() {
    Route::get('/', 'HomeController@index')->name('frontend.home');
    Route::get('{slug}/detail', 'HomeController@detail')->name('frontend.detail');
    Route::get('/ongoing', 'HomeController@ongoing')->name('frontend.ongoing');



    
   
// });