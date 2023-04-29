
<template>
  <h1>Login</h1>
  <div class="container">
    <div class="card">
      <img src="https://via.placeholder.com/150" alt="Logo">
      <form>
        <input type="text" placeholder="Email" name="email" required>
        <input type="password" placeholder="Password" name="password" required>
        <button type="submit">Login</button>
      </form>
      <RouterLink to="/register" class="btn">Register</RouterLink>
    </div>
  </div>
</template>

<style scoped>
body {
  background-color: #f5f5f5;
  font-family: 'Open Sans', sans-serif;
}

h1 {
  text-align: center;
  margin-top: 50px;
  font-size: 36px;
  color: #333333;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.card {
  background-color: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
  padding: 50px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card img {
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

input[type="text"],
input[type="password"] {
  margin-bottom: 20px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #f5f5f5;
  font-size: 16px;
}

input[type="text"]:focus,
input[type="password"]:focus {
  outline: none;
  background-color: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
}

button[type="submit"] {
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #ffffff;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
}

button[type="submit"]:hover {
  background-color: #0062cc;
}

.btn {
  padding: 10px;
  border: none;
  margin-top: 15px;
  border-radius: 5px;
  background-color: #007bff;
  color: #ffffff;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn:hover {
  background-color: #0062cc;
}
</style>