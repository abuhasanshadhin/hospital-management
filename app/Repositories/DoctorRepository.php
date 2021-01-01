<?php
namespace App\Repositories;

use App\Models\Doctor;
use App\Utils;
use Exception;
use stdClass;

class DoctorRepository
{
    use Utils;

    public function Get($req)
    {
        return Doctor::leftJoin('departments', 'doctors.department_id', '=', 'departments.id')
        ->select('doctors.*', 'departments.name as department_name')->latest()->get();
    }

    public function GetById($id)
    {
        return Doctor::find($id);
    }

    public function Insert($req)
    {
        $res = new stdClass();

        try {

            $inputs = $req->all();

            $inputs['code'] = $this->generateCode('Doctor', 'D-');

            if ($req->has('date_of_birth') && $req->filled('date_of_birth')) {
                $inputs['date_of_birth'] = $this->dateFormat($inputs['date_of_birth']);
            }

            if ($req->hasFile('photo')) {
                $inputs['photo'] = $this->fileUpload($req, 'photo', 'uploads/doctor');
            }

            Doctor::create($inputs);

            $res->code = 200;
            $res->message = "Doctor info saved successfully";
        } catch(Exception $ex) {
            $res->code = 500;
            $res->message = $ex->getMessage();
        }

        return $res;
    }

    public function Update($req)
    {
        $res = new stdClass();

        try {
            $item = Doctor::find($req->id);

            $inputs = $req->all();

            if ($req->has('date_of_birth') && $req->filled('date_of_birth')) {
                $inputs['date_of_birth'] = $this->dateFormat($inputs['date_of_birth']);
            }

            if ($req->hasFile('photo')) {
                if (!empty($item->photo) && file_exists('public/' . $item->photo)) {
                    unlink('public/' . $item->photo);
                }
                $inputs['photo'] = $this->fileUpload($req, 'photo', 'uploads/doctor');
            }

            $item->update($inputs);

            $res->code = 200;
            $res->message = "Doctor info updated successfully";
        } catch(Exception $ex) {
            $res->code = 500;
            $res->message = $ex->getMessage();
        }

        return $res;
    }

    public function Delete($req)
    {
        $res = new stdClass();

        try {
            $item = $this->GetById($req->id);
            $item->delete();

            $res->code = 200;
            $res->message = "Doctor info deleted successfully";
        } catch(Exception $ex) {
            $res->code = 500;
            $res->message = $ex->getMessage();
        }

        return $res;
    }
}
