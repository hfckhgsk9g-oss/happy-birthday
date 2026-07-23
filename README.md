<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Happy Birthday ❤️</title>

<style>
body{
    margin:0;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    background:#0f172a;
    color:white;
    font-family:Arial,sans-serif;
    text-align:center;
}
button{
    padding:15px 35px;
    font-size:20px;
    border:none;
    border-radius:50px;
    background:#ff4d6d;
    color:white;
}
</style>

</head>
<body>

<div>
<h1>Happy Birthday ❤️</h1>
<p>I made something special just for you.</p>

<button onclick="openGift()">Open My Heart ❤️</button>
</div>

<script>
function openGift(){
    document.body.innerHTML=`
    <div style="display:flex;height:100vh;justify-content:center;align-items:center;flex-direction:column;background:#111;color:white;font-family:Arial;">
    <h1>🎉 Happy Birthday My Love ❤️</h1>
    <p>You are the most beautiful part of my life.</p>
    </div>
    `;
}
</script>

</body>
</html>