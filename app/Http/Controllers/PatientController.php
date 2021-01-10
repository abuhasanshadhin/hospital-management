<?php

namespace App\Http\Controllers;

use App\Repositories\PatientRepository;
use Illuminate\Http\Request;

class PatientController extends Controller
{
    private $patientRepo;

    public function __construct()
    {
        $this->patientRepo = new PatientRepository;
    }

    public function getPatients(Request $request)
    {
        $patients = $this->patientRepo->Get($request);
        return response()->json(['patients' => $patients], 200);
    }

    public function getPatient($id)
    {
        $patient = $this->patientRepo->GetById($id);
        return response()->json(['patient' => $patient], 200);
    }

    public function addPatient(Request $request)
    {
        $res = $this->patientRepo->Insert($request);
        return response()->json(['message' => $res->message], $res->code);
    }

    public function updatePatient(Request $request)
    {
        $res = $this->patientRepo->Update($request);
        return response()->json(['message' => $res->message], $res->code);
    }

    public function deletePatient(Request $request)
    {
        $res = $this->patientRepo->Delete($request);
        return response()->json(['message' => $res->message], $res->code);
    }
}
