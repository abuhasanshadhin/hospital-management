<?php

use App\Http\Controllers\PatientController;
use App\Http\Controllers\DoctorScheduleController;
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


// doctor schedule
Route::post('/get_doctor_schedules', [DoctorScheduleController::class, 'getDoctorSchedules']);
Route::post('/add_doctor_schedule', [DoctorScheduleController::class, 'addDoctorSchedule']);
Route::post('/update_doctor_schedule', [DoctorScheduleController::class, 'updateDoctorSchedule']);
Route::post('/delete_doctor_schedule', [DoctorScheduleController::class, 'deleteDoctorSchedule']);

// patient
Route::post('/get_patients', [PatientController::class, 'getPatients']);
Route::get('/get_patient/{id}', [PatientController::class, 'getPatient']);
Route::post('/add_patient', [PatientController::class, 'addPatient']);
Route::post('/update_patient', [PatientController::class, 'updatePatient']);
Route::post('/delete_patient', [PatientController::class, 'deletePatient']);
