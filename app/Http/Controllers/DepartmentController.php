<?php

namespace App\Http\Controllers;

use App\Repositories\DepartmentRepository;
use Illuminate\Http\Request;

class DepartmentController extends Controller
{
    private $departmentRepo;

    public function __construct()
    {
        $this->departmentRepo = new DepartmentRepository;
    }

    public function getDepartments(Request $request)
    {
        $departments = $this->departmentRepo->Get($request);
        return response()->json(['departments' => $departments], 200);
    }

    public function addDepartment(Request $request)
    {
        $res = $this->departmentRepo->Insert($request);
        return response()->json(['message' => $res->message], $res->code);
    }

    public function updateDepartment(Request $request)
    {
        $res = $this->departmentRepo->Update($request);
        return response()->json(['message' => $res->message], $res->code);
    }

    public function deleteDepartment(Request $request)
    {
        $res = $this->departmentRepo->Delete($request);
        return response()->json(['message' => $res->message], $res->code);
    }
}
