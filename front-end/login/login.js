const API_url = "http://localhost:8000/api";

document.querySelector(".login-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("Email").value;
  const password = document.getElementById("Password").value;

  try {
    const response = await fetch(`${API_url}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
      credentials: 'include' // 👈 CRITICAL: Tells the browser to accept/send cookies
    });

    const data = await response.json();
    console.log(`jSON data received from the backend: `, data);

    if (response.ok) {
      alert("login successful! redirecting to homepage...");
      localStorage.setItem('isLoggedIn', 'true');
      window.location.href = "index.html";

    } else {
      alert(data.message || "Signup failed.");
    }
  } catch (error) {
    console.log(`error during login: `, error);
    alert("something went wrong please try again later!");
  }
});
