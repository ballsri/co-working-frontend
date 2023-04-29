
<template>
    <body>
        <h1 style="text-align: center;">Co-working Places</h1>
        <div class="container">
            <div class="card">
                <img src="https://via.placeholder.com/500x300.png?text=COW%201" alt="Co-working place image">
                <h2>COW: 1</h2>
                <p>123 Main Street, City, State Zip</p>
                <p>Phone: (123) 456-7890</p>
                <button>Detail</button>
            </div>

            <div class="card">
                <img src="https://via.placeholder.com/500x300.png?text=COW%202" alt="Co-working place image">
                <h2>COW: 2</h2>
                <p>123 Main Street, City, State Zip</p>
                <p>Phone: (123) 456-7890</p>
                <button>Detail</button>
            </div>

        </div>
    </body>
</template>

<style>
/* Style for the cards */
.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 500px;
    margin: 20px;
    text-align: center;
    font-family: Arial, sans-serif;
    background-color: #f2f2f2;
    border-radius: 10px;
    overflow: hidden;
    transition: all 0.3s ease-in-out;
}

.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    transform: translateY(-10px);
}

.card img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
}

.card h2 {
    margin: 10px 0;
    font-size: 24px;
    color: #007bff;
}

.card p {
    margin: 10px 0;
    font-size: 16px;
    color: #333;
}

.card button {
    border: none;
    outline: 0;
    padding: 10px;
    color: white;
    background-color: #007bff;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    transition: all 0.3s ease-in-out;
}

.card button:hover {
    opacity: 0.7;
}

.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 20px;
}
</style>