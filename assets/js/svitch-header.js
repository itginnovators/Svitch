// submenu hover
// Check the viewport width when the page loads
function handleSubMenuStyles() {
    let subMenuLis = document.querySelectorAll('.navbar .links li .sub-menu li');
    let subMenuLinks = document.querySelectorAll('.navbar .links li .sub-menu a');


    for (let i = 0; i < subMenuLis.length; i++) {

        subMenuLis[i].addEventListener('mouseenter', function () {
            subMenuLinks[i].style.color = '#fff';
        });

        subMenuLis[i].addEventListener('mouseleave', function () {
            subMenuLinks[i].style.color = '#000';
        });
    }
}

// Check the viewport width when the page loads and on window resize
function handleResize() {
    if (window.innerWidth > 1200) {
        handleSubMenuStyles();
    }
}

// Add an event listener to handle window resizing
window.addEventListener('resize', handleResize);

// Call the function initially when the page loads
window.addEventListener('load', handleResize);



// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let CustomerArrow = document.querySelector(".customer-arrow");
CustomerArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let ProjectArrow = document.querySelector(".project-arrow");
ProjectArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
let KpiArrow = document.querySelector(".kpi-arrow");
KpiArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}
let AuditArrow = document.querySelector(".audit-arrow");
AuditArrow.onclick = function() {
 navLinks.classList.toggle("show4");
}
let ReportArrow = document.querySelector(".report-arrow");
ReportArrow.onclick = function() {
 navLinks.classList.toggle("show5");
}
let PowerArrow = document.querySelector(".power-arrow");
PowerArrow.onclick = function() {
 navLinks.classList.toggle("show6");
}
let KpiMoreArrow = document.querySelector(".kpi-more-arrow");
KpiMoreArrow.onclick = function() {
 navLinks.classList.toggle("show7");
}
let AuditMoreArrow = document.querySelector(".audit-more-arrow");
AuditMoreArrow.onclick = function() {
 navLinks.classList.toggle("show8");
}
let PreAuditMoreArrow = document.querySelector(".pre-audit-more-arrow");
PreAuditMoreArrow.onclick = function() {
 navLinks.classList.toggle("show9");
}

