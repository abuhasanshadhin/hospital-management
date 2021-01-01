<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <link rel="shortcut icon" href="{{ asset('favicon.ico') }}" type="image/x-icon">

        <link rel="stylesheet" href="{{ asset('public/fontAwesome/css/all.min.css') }}">
        <link rel="stylesheet" href="{{ asset('public/css/app.css') }}">

    </head>
    <body>

        <div id="app"></div>

        <script src="{{ asset('public/js/app.js') }}"></script>

    </body>
</html>
