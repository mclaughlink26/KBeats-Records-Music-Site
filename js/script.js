function pageLoad() {
    window.onscroll = function () { stickyNav(), headerColor(), scrollFunction() };

    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;

    function stickyNav() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
            document.getElementById("nav-items").style.paddingTop = "10px";
            document.getElementById("nav-items").style.paddingBottom = "10px";
            document.getElementById("site-logo").style.width = "40px";
            document.getElementById("site-logo").style.height = "40px";
        } else if (window.pageYOffset <= sticky) {
            navbar.classList.remove("sticky");
            document.getElementById("nav-items").style.paddingTop = "20px";
            document.getElementById("nav-items").style.paddingBottom = "20px";
            document.getElementById("site-logo").style.width = "60px";
            document.getElementById("site-logo").style.height = "60px";
        }
    }

    function headerColor() {
        const [red1, green1, blue1] = [20, 20, 20];
        const header1 = document.querySelector('.header');
        const span1 = document.querySelector('.headerSpan');

        const [red2, green2, blue2] = [255, 255, 255];
        const [red3, green3, blue3] = [0, 255, 127];

        window.addEventListener('scroll', () => {
            const y = 1 + (window.scrollY || window.pageYOffset) / 150;
            const [r1, g1, b1] = [red1 / y, green1 / y, blue1 / y].map(Math.round);
            header1.style.backgroundColor = `rgb(${r1}, ${g1}, ${b1})`;
            const [r2, g2, b2] = [red2 / y, green2 / y, blue2 / y].map(Math.round);
            header1.style.color = `rgb(${r2}, ${g2}, ${b2})`;
            const [r3, g3, b3] = [red3 / y, green3 / y, blue3 / y].map(Math.round);
            span1.style.color = `rgb(${r3}, ${g3}, ${b3})`;
        })
    }

    // Get the button
    let TOPBtn = document.getElementById("bTTBtn");

    function scrollFunction() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            TOPBtn.style.display = "block";
        } else {
            TOPBtn.style.display = "none";
        }

        if (document.body.scrollTop > 2125 || document.documentElement.scrollTop > 2125) {
            TOPBtn.style.position = "fixed";
            TOPBtn.style.bottom = "145px";
        } else {
            TOPBtn.style.position = "";
            TOPBtn.style.bottom = "";
        }

        if (window.location.href.indexOf("contact") > -1) {
            if (document.body.scrollTop > 803 || document.documentElement.scrollTop > 803) {
                TOPBtn.style.position = "fixed";
                TOPBtn.style.bottom = "145px";
            } else {
                TOPBtn.style.position = "";
                TOPBtn.style.bottom = "";
            }
        }

        if (window.location.href.indexOf("songs") > -1) {
            if (document.body.scrollTop > 2500 || document.documentElement.scrollTop > 2500) {
                TOPBtn.style.position = "fixed";
                TOPBtn.style.bottom = "145px";
            } else {
                TOPBtn.style.position = "";
                TOPBtn.style.bottom = "";
            }
        }
    }

    const blurredImageDiv = document.querySelector(".blurred-main-img");
    const blurredImageDiv2 = document.querySelector(".blurred-logo");

    const img = blurredImageDiv.querySelector("img");
    const img2 = blurredImageDiv2.querySelector("img");

    function loaded() {
        blurredImageDiv.classList.add("loaded");
        blurredImageDiv2.classList.add("loaded");
    }

    if (img.complete) {
        loaded()
    } else {
        img.addEventListener("load", loaded)
        img2.addEventListener("load", loaded)
    }
}

// function dropdown() {
//     var icon = document.getElementById("caret");

//     icon.classList.add("active");
// }