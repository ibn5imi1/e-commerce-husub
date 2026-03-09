window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');

import "bootstrap/dist/js/bootstrap.bundle.js"
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./css/style.css"

document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(item => new bootstrap.Tooltip(item))
document.querySelectorAll('.add-to-cart-btn').forEach(item => {
    item.addEventListener("click", () => {
        alert("أضيف المُنتج إلى عربة الشراء")
    })
})

console.log("okay okay 1");
console.log("okay okay 2");
console.log("okay okay 3");