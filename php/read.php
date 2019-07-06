<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
    table td{
        background-color: #3ed;
    }
    </style>
    <?php
    if(isset($_POST['msg'])){
        $msg = $_POST['msg'];
        $f = @fopen('savedata.txt', 'a');
        fputs($f, $msg . "\n");
        fclose($f);
    }
    ?>
</head>
<body>
    <h1>Hello!</h1>
    <form action="/read.php" method="post">
        <input type="text" name="msg">
        <input type="submit">
    </form>
    <hr>
    <table>
    <?php
    $data = @file('savedata.txt') or exit('<tr><td>ファイルの読み込みに失敗しました。</td></tr>');

    $num = 0;
    foreach($data as $line) {
        $num++;
        $line = htmlspecialchars($line);
        echo "<tr><td>{$num}</td><td>{$line}</td></tr>";
    }
    ?>
    </table>
</body>
</html>