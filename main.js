
// navbar hidden


let lastScrollTop = 0;
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", function() {
let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
if (scrollTop > lastScrollTop) {
    navbar.style.transform = "translateY(-100%)";
} else {
    navbar.style.transform = "translateY(0)";
}
lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});


// navbar hidden
// form
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Stop default form submission

    let formData = new FormData(this); // Get form data

    fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                let popup = document.getElementById("thankYouPopup");
                popup.classList.remove("hidden"); // Show popup
                popup.classList.add("flex"); // Ensure centering

                setTimeout(() => {
                    window.location.href = "https://alshazrwan.com/"; // Redirect after 3 seconds
                }, 3000);
            }
        })
        .catch(error => console.error("Error:", error));
});
// form

// to top btn
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        scrollToTopBtn.classList.remove("hidden");
    } else {
        scrollToTopBtn.classList.add("hidden");
    }
});

// Smooth scroll to top
scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
// to top btn

document.addEventListener("DOMContentLoaded", function () {
    let items = document.querySelectorAll(".carousel-item");
    let currentIndex = 0;

    function showNextSlide() {
        // إخفاء الشريحة الحالية
        items[currentIndex].classList.remove("opacity-100", "scale-100");
        items[currentIndex].classList.add("opacity-0", "scale-50");

        // الانتقال إلى الشريحة التالية
        currentIndex = (currentIndex + 1) % items.length;

        // إظهار الشريحة الجديدة
        items[currentIndex].classList.remove("opacity-0", "scale-50");
        items[currentIndex].classList.add("opacity-100", "scale-100");
    }

    // عرض أول صورة عند تحميل الصفحة
    items[currentIndex].classList.add("opacity-100", "scale-100");

    // تغيير الشريحة كل 3 ثوانٍ
    setInterval(showNextSlide, 3000);
});



AOS.init();