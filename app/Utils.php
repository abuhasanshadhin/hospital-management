<?php

namespace App;

trait Utils
{
    public function fileUpload($request, $name, $uploadDir, $rootDir = 'public')
    {
        if (empty($name) || !$request->hasFile($name)) return null;
        try {
            $file = $request->file($name);
            $name = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
            $extention = $file->getClientOriginalExtension();
            $fileName = $name . '_' . time() . uniqId() . '.' . $extention;
            $directory = $rootDir . '/' . $uploadDir;
            $file->move($directory, $fileName);
            return $uploadDir . '/' . $fileName;
        } catch (\Exception $th) {
            return null;
        }
    }

    public function generateCode($model, $prefix = '')
    {
        $code = "00001";
        $model = '\\App\\Models\\' . $model;
        $num_rows = $model::count();
        if ($num_rows != 0) {
            $newCode = $num_rows + 1;
            $zeros = ['0', '00', '000', '0000'];
            $code = strlen($newCode) > count($zeros) ? $newCode : $zeros[count($zeros) - strlen($newCode)] . $newCode;
        }
        return $prefix . $code;
    }

    public function dateFormat($date = '')
    {
        return !empty($date) ? date('Y-m-d', strtotime($date)) : null;
    }
}
