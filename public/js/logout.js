const logoutBtn = document.querySelector("#logout");
const logout = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/users/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/");
    } else {      
      alert("Failed to log out");
    }
  };
  
  logoutBtn.addEventListener("click", logout);
