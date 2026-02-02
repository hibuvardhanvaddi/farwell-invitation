document.getElementById("nameForm").addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("username").value.trim();

      if (name) {
        localStorage.setItem("animatedName", name);
        window.location.href = "animation.html";
      }
    });