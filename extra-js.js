// BÀI 1
var DD = +document.getElementById("D").value
var MM = +document.getElementById("M").value
var YY = +document.getElementById("Y").value

function submit1a(){
    if( DD > 1 && DD < 30){
        document.getElementById("date").innerHTML = DD - 1 + MM + YY
    }
    document.getElementById("result1").style.display = "block"
    if( DD = 1 && MM > 1 && MM <= 12){
        document.getElementById("date").innerHTML = DD - 1 + MM + YY
    }
}

// BÀI 2: 
function submit2(){
    var monthInput = +document.getElementById("month").value
    var yearInput = +document.getElementById("year").value
    
    switch (monthInput){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        document.getElementById("dayAmount").innerHTML= "tháng này có 31 ngày"
    break;
    case 2:
        if (yearInput % 4 === 0){
            document.getElementById("dayAmount").innerHTML= "Tháng này có 29 ngày"
        }else{
            document.getElementById("dayAmount").innerHTML= "Tháng này có 28 ngày"
        }
    break;
    case 4:
    case 6:
    case 9:
    case 11:
        document.getElementById("dayAmount").innerHTML= "Tháng này có 30 ngày"
    break
    default:
        document.getElementById("dayAmount").innerHTML= "Tháng không xác định"
    }
    document.getElementById("result2").style.display = "block"
}

