<?php

namespace App\Http\Controllers;

use App\Repositories\DoctorRepository;
use Illuminate\Http\Request;

class DoctorController extends Controller
{
    private $doctorRepo;

    public function __construct()
    {
        $this->doctorRepo = new DoctorRepository;
    }

    public function getDoctors(Request $request)
    {
        $doctors = $this->doctorRepo->Get($request);
        return response()->json(['doctors' => $doctors], 200);
    }

    public function getDoctor($id)
    {
        $doctor = $this->doctorRepo->GetById($id);
        return response()->json(['doctor' => $doctor], 200);
    }

    public function addDoctor(Request $request)
    {
        $res = $this->doctorRepo->Insert($request);
        return response()->json(['message' => $res->message], $res->code);
    }

    public function updateDoctor(Request $request)
    {
        $res = $this->doctorRepo->Update($request);
        return response()->json(['message' => $res->message], $res->code);
    }

    public function deleteDoctor(Request $request)
    {
        $res = $this->doctorRepo->Delete($request);
        return response()->json(['message' => $res->message], $res->code);
    }
}
