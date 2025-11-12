document.getElementById("nextBtn").addEventListener("click", () => {
      document.body.classList.add("fade-out");
      setTimeout(() => {
        window.location.href = "nextpage.html"; // change this to your target page
      }, 600); // matches the CSS transition duration
    });
    