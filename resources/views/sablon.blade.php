<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>

<body>
    <ul class="nav justify-content-end">
        <li class="nav-item">
            <a class="nav-link " href="http://127.0.0.1:8000/">Pocetna</a>
        </li>
        <li class="nav-item">
            <a class="nav-link " href="http://127.0.0.1:8000/rezervisi">Rezervisi</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="http://127.0.0.1:8000/maseri">Maseri</a>
        </li>
        <li class="nav-item">
            <form method="GET" action="http://127.0.0.1:8000/admin" class="form-group">
                <input class="nav-link btn btn-block" type="submit" value="Admin panel" >
                <input type="text" class="form-control" name="sifra" placeholder="Unesite sifru">
            </form>
        </li>
    </ul>
    <div class="container">
        @yield('content')
    </div>
    <script src="{{asset('js/app.js')}}"></script>
</body>

</html>
