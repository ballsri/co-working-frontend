
<template>
<body>
	<h1>Register</h1>
	<div class="container">
		<div class="card">
			<img src="https://via.placeholder.com/150" alt="Logo">
			<form>
				<input type="email" placeholder="Email" name="email" required>
				<input type="text" placeholder="Name" name="name" required>
				<input type="tel" placeholder="Phone" name="phone" required>
				<button type="submit">Register</button>
			</form>
            <RouterLink to="/" class="back-button">Back to Login</RouterLink>

		</div>
	</div>
</body>
</template>

<style scoped>
/* General Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f1f1f1;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
  padding: 40px;
}

.card img {
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
}

/* Form Styles */
form {
  display: flex;
  flex-direction: column;
}

form input[type="email"],
form input[type="text"],
form input[type="tel"] {
  background-color: #f1f1f1;
  border: none;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 12px;
  font-size: 16px;
  color: #333;
}

form input[type="email"]:focus,
form input[type="text"]:focus,
form input[type="tel"]:focus {
  outline: none;
  box-shadow: 0 0 5px #007bff;
}

form button[type="submit"] {
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  padding: 12px;
  transition: background-color 0.3s ease-in-out;
}

form button[type="submit"]:hover {
  background-color: #0062cc;
}

/* Header Styles */
h1 {
  color: #007bff;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
}

.back-button {
  display: inline-block;
  padding: 12px 20px;
  margin-top: 15px;
  border-radius: 5px;
  background-color: #ff5722;
  color: #fff;
  font-size: 16px;
  text-decoration: none;
  transition: background-color 0.3s ease-in-out;
}

.back-button:hover {
  background-color: #ff7043;
  color: #fff;
}
</style>
