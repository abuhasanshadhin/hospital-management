<?php

namespace App\Http\Controllers;

use App\Repositories\DoctorScheduleRepository;
use Illuminate\Http\Request;

class DoctorScheduleController extends Controller
{
    private $doctorScheduleRepo;

    public function __construct()
    {
        $this->doctorScheduleRepo = new DoctorScheduleRepository;
    }

    public function getDoctorSchedules(Request $request)
    {
        $doctorSchedules = $this->doctorScheduleRepo->Get($request);
        return response()->json(['doctor_schedules' => $doctorSchedules], 200);
    }

    public function addDoctorSchedule(Request $request)
    {
        $res = $this->doctorScheduleRepo->Insert($request);
        return response()->json([
            'message' => $res->message,
            'doctor_id' => $res->doctor_id ?? null,
        ], $res->code);
    }

    public function updateDoctorSchedule(Request $request)
    {
        $res = $this->doctorScheduleRepo->Update($request);
        return response()->json([
            'message' => $res->message,
            'doctor_id' => $res->doctor_id ?? null,
        ], $res->code);
    }

    public function deleteDoctorSchedule(Request $request)
    {
        $res = $this->doctorScheduleRepo->Delete($request);
        return response()->json([
            'message' => $res->message,
            'doctor_id' => $res->doctor_id ?? null,
        ], $res->code);
    }
}
