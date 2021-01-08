<?php
namespace App\Repositories;

use App\Models\DoctorSchedule;
use Exception;
use stdClass;

class DoctorScheduleRepository
{
    public function Get($req)
    {
        $doctorSchedule = DoctorSchedule::latest();

        if ($req->doctor_id) {
            $doctorSchedule->where('doctor_id', $req->doctor_id);
        }

        return $doctorSchedule->get()->map(function ($s) {
            $s->start_time = date('h:i A', strtotime($s->start_time));
            $s->end_time = date('h:i A', strtotime($s->end_time));
            return $s;
        });
    }

    public function GetById($id)
    {
        return DoctorSchedule::find($id);
    }

    public function Insert($req)
    {
        $res = new stdClass();

        try {
            $inputs = $req->all();

            if ($inputs['start_time']) {
                $inputs['start_time'] = date('H:i', strtotime($inputs['start_time']));
            }

            if ($inputs['end_time']) {
                $inputs['end_time'] = date('H:i', strtotime($inputs['end_time']));
            }

            $exists = DoctorSchedule::where('available_day', $inputs['available_day'])
            ->where('doctor_id', $inputs['doctor_id'])->first();

            if ($exists) {
                $res->code = 409;
                $res->message = "{$inputs['available_day']} already exists";
                return $res;
            }

            $d = DoctorSchedule::create($inputs);

            $res->doctor_id = $d->doctor_id;
            $res->code = 200;
            $res->message = "Doctor schedule info saved successfully";
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
            $item = DoctorSchedule::find($req->id);
            $inputs = $req->all();

            if ($inputs['start_time']) {
                $inputs['start_time'] = date('H:i', strtotime($inputs['start_time']));
            }

            if ($inputs['end_time']) {
                $inputs['end_time'] = date('H:i', strtotime($inputs['end_time']));
            }

            $exists = DoctorSchedule::where('available_day', $inputs['available_day'])
            ->where('doctor_id', $inputs['doctor_id'])->where('id', '!=', $inputs['id'])->first();

            if ($exists) {
                $res->code = 409;
                $res->message = "{$inputs['available_day']} already exists";
                return $res;
            }

            $item->update($inputs);

            $res->doctor_id = $item->doctor_id;
            $res->code = 200;
            $res->message = "Doctor schedule info updated successfully";
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
            $item = $this->GetById($req->id);
            $doctorId = $item->doctor_id;

            $item->delete();

            $res->doctor_id = $doctorId;
            $res->code = 200;
            $res->message = "Doctor schedule info deleted successfully";
        } catch (Exception $ex) {
            $res->code = 500;
            $res->message = $ex->getMessage();
        }

        return $res;
    }
}
