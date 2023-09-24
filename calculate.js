function calculate() {
    let a = parseInt(document.getElementById('book1').value);
    let b = parseInt(document.getElementById('book2').value);
    let c = parseInt(document.getElementById('book3').value);
    let d = parseInt(document.getElementById('book4').value);
    let f = parseInt(document.getElementById('book5').value);
    

    if (a > 100 || b > 100 || c > 100 || d > 100 || f > 100) {
        alert('please enter correct value');
    }

    else if (a < 0 || b < 0 || c < 0 || d < 0 || f < 0) {
        alert('please enter correct value');
    }

    else {
        let obtainmark = a + b + c + d + f;
        document.getElementById('obtain').innerHTML = obtainmark;

        let persentage = Math.floor(obtainmark / 500 * 100);
        document.getElementById('pers').innerHTML = persentage;

        let grad = obtainmark / 500 * 100;
        document.getElementById('pers').innerHTML = grad;

        if (a >= 40 && b >= 40 && c >= 40 && d >= 40 && f >= 40) {
            let pass = document.getElementById('remark').innerHTML = '<span style = "color: green"> Pass <span>';
        }
        else {
            let pass = document.getElementById('remark').innerHTML = '<span style = "color: red; font-size: 24px;font-family:"> Fail <span>';
        }

        if (persentage >= 85) {
            let pass = document.getElementById('grade').innerHTML = 'A';
        }

        else if (persentage >= 60) {
            let pass = document.getElementById('grade').innerHTML = 'B';
        }

        else if (persentage >= 40) {
            let pass = document.getElementById('grade').innerHTML = 'C';
        }

        else if (persentage >= 35) {
            let pass = document.getElementById('grade').innerHTML = 'D';
        }

        else {
            let pass = document.getElementById('grade').innerHTML = 'E';
        }

    }

    //  <-- close butonn -->

    left1.style.display = "none";
    right.style.display = 'block';
    close.style.display = 'block';
    document.getElementById('book1').innerText = "";
    return false;
    
}



let right = document.getElementById("right");
let left1 = document.getElementById("left");
let hid = document.getElementById("close");

hid.addEventListener('click', () => {
    right.style.display = 'none';
    left1.style.display = "block";
});
