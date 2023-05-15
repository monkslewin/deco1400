const activePage = window.location.pathname; // finds page the user is currently on
const navLinks = document.querySelectorAll('nav a').
forEach(link => { // Loops through the nav bar links
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active'); // Adds the 'active' class to a link
    }
} )

$(".step").click( function() {
	$(this).addClass("active").prevAll().addClass("active"); // Adds active class to previous steps
	$(this).nextAll().removeClass("active"); // Removes active classes for steps in front
});

$(".step01").click( function() {
	$("#line-progress").css("width", "3%"); // Increases width of the line
	$(".2019").addClass("active").siblings().removeClass("active"); // Displays text with class 2019
});

$(".step02").click( function() {
	$("#line-progress").css("width", "25%");
	$(".2020").addClass("active").siblings().removeClass("active"); // Removes class without the class 2020
});

$(".step03").click( function() {
	$("#line-progress").css("width", "50%");
	$(".2021").addClass("active").siblings().removeClass("active");
});

$(".step04").click( function() {
	$("#line-progress").css("width", "75%");
	$(".2022").addClass("active").siblings().removeClass("active");
});

$(".step05").click( function() {
	$("#line-progress").css("width", "100%");
	$(".2023").addClass("active").siblings().removeClass("active");
});

filterObjects("all");

function filterInformation(info) {
    var boxes, i;
    let boxes = document.getElementsByClassName("box");
    if (info == "all") info = "";
    for (i = 0; i < boxes.length; i++) {
        removeClass(boxes[i], "show");
        if(boxes[i].className.indexOf(info) > -1) addClass(boxes[i], "show")
    }
}

function addClass(element, name) {
    var i, arr1, arr2;
    let arr1 = element.className.split(" ");
    let arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function removeClass(element, name) {
    var i, arr1, arr2;
    let arr1 = element.className.split(" ");
    let arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}