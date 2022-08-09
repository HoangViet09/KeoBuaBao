<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>KeoBuaBao</title>
    <style>
        .user {
            min-width: 130px;
        }
        .user,#computer {
            font-size: 5rem;
        }
        .notification {
            margin: 0 auto;
            max-width: 400px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1 class="text-center text-info">
            Game Kéo Búa Bao
        </h1>
        <div class="row mb-5">
            <div class="col-6">
                <h2 class="text-center">Player</h2>
                <div class="d-flex flex-column justify-content-center align-items-center">
                    <div class="mb-3">
                        <button class="btn btn-outline-warning user " id="scissors">
                            ✌️ 
                        </button>
                    </div>
                    <div class="mb-3">
                        <button class="btn btn-outline-warning user " id="rock">
                            👊 
                        </button>
                    </div>
                    <div class="mb-3">
                        <button class="btn btn-outline-warning user " id="paper">
                            ✋
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="d-flex flex-column h-100">
                    <h2 class="text-center">Máy Tính</h2>
                    <div class="d-flex align-items-center flex-grow-1 justify-content-center">
                        <span id="computer">👊</span>
                    </div>
                </div>
            </div>
        </div>   
        <div class="notification"></div>
        <div class="text-center d-none " id="play-again">
            <button class="btn btn-primary text-center btn-play-again">play again</button>
        </div>
    </div>
    <script src="./KeoBuaBao.js"></script>
</body>
</html>
