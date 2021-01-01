<?php

use App\Http\Controllers\DoctorController;
use App\Http\Controllers\DepartmentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/get_departments', [DepartmentController::class, 'getDepartments']);
Route::post('/add_department', [DepartmentController::class, 'addDepartment']);
Route::post('/update_department', [DepartmentController::class, 'updateDepartment']);
Route::post('/delete_department', [DepartmentController::class, 'deleteDepartment']);


// doctor
Route::post('/get_doctors', [DoctorController::class, 'getDoctors']);
Route::get('/get_doctor/{id}', [DoctorController::class, 'getDoctor']);
Route::post('/add_doctor', [DoctorController::class, 'addDoctor']);
Route::post('/update_doctor', [DoctorController::class, 'updateDoctor']);
Route::post('/delete_doctor', [DoctorController::class, 'deleteDoctor']);
