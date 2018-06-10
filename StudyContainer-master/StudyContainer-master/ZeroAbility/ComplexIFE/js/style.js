var flagkey = 0;
function activeOnclik(flagkey) {
    var childblock1 = document.getElementById("activeflag1");
    var childblock2 = document.getElementById("activeflag2");
    var childblock3 = document.getElementById("activeflag3");
    switch (flagkey) {
        case 1:
            childblock1.style.display = "block"; childblock2.style.display = "none"; childblock3.style.display = "none";
            break;
        case 2: childblock1.style.display = "none"; childblock2.style.display = "block"; childblock3.style.display = "none";
            break;
        case 3: childblock1.style.display = "none"; childblock2.style.display = "none"; childblock3.style.display = "block";
            break;
        default:
            childblock1.style.display = "none"; childblock2.style.display = "none"; childblock3.style.display = "none";
            break;
    }
}

var openFlag = true;
function navControl() {
    var navWidth = document.getElementById("tosetnavwidth");
    var bodySetion = document.getElementById("body-section");
    if (openFlag == true) {
        navWidth.style.width = "250px";
        bodySetion.style.paddingLeft = "248px";
        openFlag = false;
    } else {
        navWidth.style.width = "60px";
        bodySetion.style.paddingLeft = "58px";
        openFlag = true;
    }
}

var paddLeftStatus = 0;
function setBlueDots(paddLeftStatus) {
    var setBox1 = document.getElementById("personsbox1");
    var setBox2 = document.getElementById("personsbox2");
    var setBox3 = document.getElementById("personsbox3");
    var setBox4 = document.getElementById("personsbox4");
    var setBox5 = document.getElementById("personsbox5");
    var setBox6 = document.getElementById("personsbox6");
    var setBox7 = document.getElementById("personsbox7");
    switch (paddLeftStatus) {
        case 1:
            setBox1.style.borderLeftColor = "rgb(0, 140, 255)";
            setBox1.getElementsByClassName("status")[0].style.display = "inline-block";
            setBox1.getElementsByClassName("personname")[0].setAttribute("style", "color:rgb(0, 140, 255);width:195px;");
            setBox1.getElementsByClassName("message-num")[0].style.display = "none";
            setBox2.style.borderLeftColor = "white";
            setBox2.getElementsByClassName("status")[0].style.display = "none";
            setBox2.getElementsByClassName("personname")[0].setAttribute("style", "width:213px");
            setBox3.style.borderLeftColor = "white";
            setBox3.getElementsByClassName("status")[0].style.display = "none";
            setBox3.getElementsByClassName("personname")[0].setAttribute("style", "width:213px");
            setBox4.style.borderLeftColor = "white";
            setBox4.getElementsByClassName("status")[0].style.display = "none";
            setBox4.getElementsByClassName("personname")[0].setAttribute("style", "width:213px");
            setBox5.style.borderLeftColor = "white";
            setBox5.getElementsByClassName("status")[0].style.display = "none";
            setBox5.getElementsByClassName("personname")[0].setAttribute("style", "width:213px");
            setBox6.style.borderLeftColor = "white";
            setBox6.getElementsByClassName("status")[0].style.display = "none";
            setBox6.getElementsByClassName("personname")[0].setAttribute("style", "width:213px");
            setBox7.style.borderLeftColor = "white";
            setBox7.getElementsByClassName("status")[0].style.display = "none";
            setBox7.getElementsByClassName("personname")[0].setAttribute("style", "width:213px");
            break;
        case 2:
            setBox2.style.borderLeftColor = "rgb(0, 140, 255)";
            setBox2.getElementsByClassName("status")[0].style.display = "inline-block";
            setBox2.getElementsByClassName("personname")[0].setAttribute("style", "color:rgb(0, 140, 255);width:195px;");
            setBox2.getElementsByClassName("message-num")[0].style.display = "none";
            setBox1.style.borderLeftColor = "white";
            setBox1.getElementsByClassName("status")[0].style.display = "none";
            setBox1.getElementsByClassName("personname")[0].setAttribute("style", "width:213px");
            setBox3.style.borderLeftColor = "white";
            setBox3.getElementsByClassName("status")[0].style.display = "none";
            setBox3.getElementsByClassName("personname")[0].setAttribute("style", "width:213px");
            setBox4.style.borderLeftColor = "white";
            setBox4.getElementsByClassName("status")[0].style.display = "none";
            setBox4.getElementsByClassName("personname")[0].setAttribute("style", "width:213px");
            setBox5.style.borderLeftColor = "white";
            setBox5.getElementsByClassName("status")[0].style.display = "none";
            setBox5.getElementsByClassName("personname")[0].setAttribute("style", "width:213px");
            setBox6.style.borderLeftColor = "white";
            setBox6.getElementsByClassName("status")[0].style.display = "none";
            setBox6.getElementsByClassName("personname")[0].setAttribute("style", "width:213px");
            setBox7.style.borderLeftColor = "white";
            setBox7.getElementsByClassName("status")[0].style.display = "none";
            setBox7.getElementsByClassName("personname")[0].setAttribute("style", "width:213px");
            break;
        case 3: 
            setBox3.style.borderLeftColor = "rgb(0, 140, 255)";
            setBox3.getElementsByClassName("status")[0].style.display = "inline-block";
            setBox3.getElementsByClassName("personname")[0].setAttribute("style", "color:rgb(0, 140, 255);width:195px;");
            setBox3.getElementsByClassName("message-num")[0].style.display = "none";
            setBox2.style.borderLeftColor = "white";
            setBox2.getElementsByClassName("status")[0].style.display = "none";
            setBox2.getElementsByClassName("personname")[0].setAttribute("style", "width:213px");
            setBox1.style.borderLeftColor = "white";
            setBox1.getElementsByClassName("status")[0].style.display = "none";
            setBox1.getElementsByClassName("personname")[0].setAttribute("style", "width:213px");
            setBox4.style.borderLeftColor = "white";
            setBox4.getElementsByClassName("status")[0].style.display = "none";
            setBox4.getElementsByClassName("personname")[0].setAttribute("style", "width:213px");
            setBox5.style.borderLeftColor = "white";
            setBox5.getElementsByClassName("status")[0].style.display = "none";
            setBox5.getElementsByClassName("personname")[0].setAttribute("style", "width:213px");
            setBox6.style.borderLeftColor = "white";
            setBox6.getElementsByClassName("status")[0].style.display = "none";
            setBox6.getElementsByClassName("personname")[0].setAttribute("style", "width:213px");
            setBox7.style.borderLeftColor = "white";
            setBox7.getElementsByClassName("status")[0].style.display = "none";
            setBox7.getElementsByClassName("personname")[0].setAttribute("style", "width:213px");
            break;
        case 4: 
            setBox4.style.borderLeftColor = "rgb(0, 140, 255)";
            setBox4.getElementsByClassName("status")[0].style.display = "inline-block";
            setBox4.getElementsByClassName("personname")[0].setAttribute("style", "color:rgb(0, 140, 255);width:195px;");
            setBox4.getElementsByClassName("message-num")[0].style.display = "none";
            setBox2.style.borderLeftColor = "white";
            setBox2.getElementsByClassName("status")[0].style.display = "none";
            setBox2.getElementsByClassName("personname")[0].setAttribute("style", "width:213px");
            setBox3.style.borderLeftColor = "white";
            setBox3.getElementsByClassName("status")[0].style.display = "none";
            setBox3.getElementsByClassName("personname")[0].setAttribute("style", "width:213px");
            setBox1.style.borderLeftColor = "white";
            setBox1.getElementsByClassName("status")[0].style.display = "none";
            setBox1.getElementsByClassName("personname")[0].setAttribute("style", "width:213px");
            setBox5.style.borderLeftColor = "white";
            setBox5.getElementsByClassName("status")[0].style.display = "none";
            setBox5.getElementsByClassName("personname")[0].setAttribute("style", "width:213px");
            setBox6.style.borderLeftColor = "white";
            setBox6.getElementsByClassName("status")[0].style.display = "none";
            setBox6.getElementsByClassName("personname")[0].setAttribute("style", "width:213px");
            setBox7.style.borderLeftColor = "white";
            setBox7.getElementsByClassName("status")[0].style.display = "none";
            setBox7.getElementsByClassName("personname")[0].setAttribute("style", "width:213px");
            break;
        case 5: 
            setBox5.style.borderLeftColor = "rgb(0, 140, 255)";
            setBox5.getElementsByClassName("status")[0].style.display = "inline-block";
            setBox5.getElementsByClassName("personname")[0].setAttribute("style", "color:rgb(0, 140, 255);width:195px;");
            setBox5.getElementsByClassName("message-num")[0].style.display = "none";
            setBox2.style.borderLeftColor = "white";
            setBox2.getElementsByClassName("status")[0].style.display = "none";
            setBox2.getElementsByClassName("personname")[0].setAttribute("style", "width:213px");
            setBox3.style.borderLeftColor = "white";
            setBox3.getElementsByClassName("status")[0].style.display = "none";
            setBox3.getElementsByClassName("personname")[0].setAttribute("style", "width:213px");
            setBox4.style.borderLeftColor = "white";
            setBox4.getElementsByClassName("status")[0].style.display = "none";
            setBox4.getElementsByClassName("personname")[0].setAttribute("style", "width:213px");
            setBox1.style.borderLeftColor = "white";
            setBox1.getElementsByClassName("status")[0].style.display = "none";
            setBox1.getElementsByClassName("personname")[0].setAttribute("style", "width:213px");
            setBox6.style.borderLeftColor = "white";
            setBox6.getElementsByClassName("status")[0].style.display = "none";
            setBox6.getElementsByClassName("personname")[0].setAttribute("style", "width:213px");
            setBox7.style.borderLeftColor = "white";
            setBox7.getElementsByClassName("status")[0].style.display = "none";
            setBox7.getElementsByClassName("personname")[0].setAttribute("style", "width:213px");
            break;
        case 6: 
            setBox6.style.borderLeftColor = "rgb(0, 140, 255)";
            setBox6.getElementsByClassName("status")[0].style.display = "inline-block";
            setBox6.getElementsByClassName("personname")[0].setAttribute("style", "color:rgb(0, 140, 255);width:195px;");
            setBox6.getElementsByClassName("message-num")[0].style.display = "none";
            setBox2.style.borderLeftColor = "white";
            setBox2.getElementsByClassName("status")[0].style.display = "none";
            setBox2.getElementsByClassName("personname")[0].setAttribute("style", "width:213px");
            setBox3.style.borderLeftColor = "white";
            setBox3.getElementsByClassName("status")[0].style.display = "none";
            setBox3.getElementsByClassName("personname")[0].setAttribute("style", "width:213px");
            setBox4.style.borderLeftColor = "white";
            setBox4.getElementsByClassName("status")[0].style.display = "none";
            setBox4.getElementsByClassName("personname")[0].setAttribute("style", "width:213px");
            setBox5.style.borderLeftColor = "white";
            setBox5.getElementsByClassName("status")[0].style.display = "none";
            setBox5.getElementsByClassName("personname")[0].setAttribute("style", "width:213px");
            setBox1.style.borderLeftColor = "white";
            setBox1.getElementsByClassName("status")[0].style.display = "none";
            setBox1.getElementsByClassName("personname")[0].setAttribute("style", "width:213px");
            setBox7.style.borderLeftColor = "white";
            setBox7.getElementsByClassName("status")[0].style.display = "none";
            setBox7.getElementsByClassName("personname")[0].setAttribute("style", "width:213px");
            break;
        case 7: 
            setBox7.style.borderLeftColor = "rgb(0, 140, 255)";
            setBox7.getElementsByClassName("status")[0].style.display = "inline-block";
            setBox7.getElementsByClassName("personname")[0].setAttribute("style", "color:rgb(0, 140, 255);width:195px;");
            setBox7.getElementsByClassName("message-num")[0].style.display = "none";
            setBox2.style.borderLeftColor = "white";
            setBox2.getElementsByClassName("status")[0].style.display = "none";
            setBox2.getElementsByClassName("personname")[0].setAttribute("style", "width:213px");
            setBox3.style.borderLeftColor = "white";
            setBox3.getElementsByClassName("status")[0].style.display = "none";
            setBox3.getElementsByClassName("personname")[0].setAttribute("style", "width:213px");
            setBox4.style.borderLeftColor = "white";
            setBox4.getElementsByClassName("status")[0].style.display = "none";
            setBox4.getElementsByClassName("personname")[0].setAttribute("style", "width:213px");
            setBox5.style.borderLeftColor = "white";
            setBox5.getElementsByClassName("status")[0].style.display = "none";
            setBox5.getElementsByClassName("personname")[0].setAttribute("style", "width:213px");
            setBox6.style.borderLeftColor = "white";
            setBox6.getElementsByClassName("status")[0].style.display = "none";
            setBox6.getElementsByClassName("personname")[0].setAttribute("style", "width:213px");
            setBox1.style.borderLeftColor = "white";
            setBox1.getElementsByClassName("status")[0].style.display = "none";
            setBox1.getElementsByClassName("personname")[0].setAttribute("style", "width:213px");
            break;
        default:
            break;
    }
}