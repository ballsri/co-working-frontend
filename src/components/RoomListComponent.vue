
<template>
<body>
	<h1 style="text-align: center;">Co-Working Rooms</h1>
	<div class="container">
		<div class="card">
			<img src="https://via.placeholder.com/500x300.png?text=Room%201" alt="Room image">
			<h2>Room 1</h2>
			<p>Size: S</p>
			<p>Price: 100฿ ต่อชั่วโมง</p>
			<button onclick="window.location.href='room1.html'">Details</button>
		</div>
		
		<div class="card">
			<img src="https://via.placeholder.com/500x300.png?text=Room%202" alt="Room image">
			<h2>Room 2</h2>
			<p>Size: M</p>
			<p>Price: 200฿ ต่อชั่วโมง</p>
			<button onclick="window.location.href='room2.html'">Details</button>
		</div>

		<div class="card">
			<img src="https://via.placeholder.com/500x300.png?text=Room%203" alt="Room image">
			<h2>Room 3</h2>
			<p>Size: L</p>
			<p>Price: 200฿ ต่อชั่วโมง</p>
			<button onclick="window.location.href='room3.html'">Details</button>
		</div>
		
	</div>
</body>
</template>

<style>
body {
    font-family: Arial, sans-serif;
    background-color: #f7f7f7;
    margin: 0;
    padding: 0;
}

h1 {
    text-align: center;
    margin-top: 50px;
    font-size: 36px;
    font-weight: bold;
}

.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
}

.card {
    width: 300px;
    height: 400px;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    margin: 20px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    transition: all 0.3s ease-in-out;
}

.card:hover {
    transform: translateY(-10px);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
}

.card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.card h2 {
    font-size: 24px;
    font-weight: bold;
    margin: 10px;
    text-align: center;
}

.card p {
    font-size: 16px;
    margin: 10px;
}

.card button {
    background-color: #0069d9;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.3s ease-in-out;
}

.card button:hover {
    background-color: #0056b3;
}
</style>
