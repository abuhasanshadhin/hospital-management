<?php
namespace App\Repositories;

use App\Models\Department;
use Exception;
use stdClass;

class DepartmentRepository
{
    public function Get($req)
    {
        $department = Department::latest();
        if ($req->has('status')) {
            $department->where('status', $req->status);
        }
        return $department->get();
    }

    public function GetById($id)
    {
        return Department::find($id);
    }

    public function Insert($req)
    {
        $res = new stdClass();

        try {
            $hasDept = Department::where('name', $req->name)->count();

            if ($hasDept) {
                $res->code = 409;
                $res->message = "'{$req->name}' already exists";
                return $res;
            }

            Department::create($req->all());

            $res->code = 200;
            $res->message = "Department info saved successfully";
        } catch (Exception $ex) {
            $res->code = 500;
            $res->message = $ex->getMessage();
        }

        return $res;
    }

    public function Update($req)
    {
        $res = new stdClass();

        try {
            $exists = Department::where([
                ['name', '=', $req->name],
                ['id', '!=', $req->id],
                ['deleted_at', '=', null],
            ])->count();

            if ($exists) {
                $res->code = 409;
                $res->message = "{$req->name} already exists";
                return $res;
            }

            $department = $this->GetById($req->id);
            $department->update($req->all());

            $res->code = 200;
            $res->message = "Department info updated successfully";
        } catch (Exception $ex) {
            $res->code = 500;
            $res->message = $ex->getMessage();
        }

        return $res;
    }

    public function Delete($req)
    {
        $res = new stdClass();

        try {
            $department = $this->GetById($req->id);
            $department->delete();

            $res->code = 200;
            $res->message = "Department info deleted successfully";
        } catch (Exception $ex) {
            $res->code = 500;
            $res->message = $ex->getMessage();
        }

        return $res;
    }
}
