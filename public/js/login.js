const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#name-login").value.trim();
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response)
    if (response.ok) {
      document.location.replace("/login");
    } else {
      alert("Failed to log in.");
    }
  }
};

document
  .querySelector("#loginBtn")
  .addEventListener("click", loginFormHandler);

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#name-login").value.trim();
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/users/signup", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response)
    if (response.ok) {
      document.location.replace("/login");
    } else {
      alert("Failed to sign up.");
    }
  }
};

document
  .querySelector("#signupBtn")
  .addEventListener("click", signupFormHandler);