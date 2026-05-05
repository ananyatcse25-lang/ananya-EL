document.addEventListener("DOMContentLoaded", function () {
    // Registration form
    document.getElementById("regForm").addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Registration Successful!");
    });

    // Donation buttons
    const buttons = document.querySelectorAll(".amount-btn");
    const amountInput = document.getElementById("donationAmount");

    buttons.forEach(btn => {
        btn.addEventListener("click", function () {
            amountInput.value = this.getAttribute("data-amount");

            buttons.forEach(b => b.style.background = "");
            this.style.background = "lightgreen";
        });
    });

    // Donation form
    document.getElementById("donateForm").addEventListener("submit", function (e) {
        e.preventDefault();

        if (amountInput.value === "") {
            alert("Please select amount");
        } else {
            alert("Thank you for donating ₹" + amountInput.value);
        }
    });

    // Image popup
    const images = document.querySelectorAll(".grid img");
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");
    const closeBtn = document.querySelector(".close");

    images.forEach(img => {
        img.addEventListener("click", function () {
            modal.style.display = "flex";
            modalImg.src = this.src;
        });
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close modal when clicking outside the image
    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // Dynamic news
    const news = ["Alumni Meet 2026", "New Courses Added", "Website Updated"];
    const container = document.getElementById("newsContainer");

    news.forEach(n => {
        const p = document.createElement("p");
        p.textContent = n;
        container.appendChild(p);
    });
});
