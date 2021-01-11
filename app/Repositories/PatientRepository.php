<?php
namespace App\Repositories;

use App\Models\Patient;
use App\Utils;
use Exception;
use stdClass;

class PatientRepository
{
    use Utils;

    public function Get($req)
    {
        return Patient::latest()->get();
    }

    public function GetById($id)
    {
        return Patient::find($id);
    }

    public function Insert($req)
    {
        $res = new stdClass();

        try {
            $inputs = $req->all();

            $inputs['code'] = $this->generateCode('Patient', 'P-');

            if ($req->hasFile('photo')) {
                $inputs['photo'] = $this->fileUpload($req, 'photo', 'uploads/patient');
            }

            Patient::create($inputs);

            $res->code = 200;
            $res->message = "Patient info saved successfully";
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
            $item = Patient::find($req->id);
            $inputs = $req->all();

            if ($req->hasFile('photo')) {
                if (!empty($item->photo) && file_exists('public/' . $item->photo)) {
                    unlink('public/' . $item->photo);
                }
                $inputs['photo'] = $this->fileUpload($req, 'photo', 'uploads/patient');
            }

            $item->update($inputs);

            $res->code = 200;
            $res->message = "Patient info updated successfully";
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
            $res->message = "Patient info deleted successfully";
        } catch(Exception $ex) {
            $res->code = 500;
            $res->message = $ex->getMessage();
        }

        return $res;
    }
}
