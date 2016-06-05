<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Renter Helper</title>
    <script type="text/javascript" src="../vendors/bootstrap.min.css"></script>

    <script type="text/javascript" src="../scripts/app.js"></script>
    <script type="text/javascript" src="../scripts/factories/data-factory.js"></script>
    <script type="text/javascript" src="../scripts/controllers/maincontroller.js"></script>

    <link rel="stylesheet" href="../styles/stylesheet.css"/>

</head>
<body ng-app="myApp">

    <div class="app">
        <div class="navbar">
            <div class="navbar">
                Renter Helper
            </div>
        </div>
        <div class='app-body'>
            <div class='app-content'>
                <ng-view></ng-view>
            </div>
        </div>
    </div>

</body>
</html>