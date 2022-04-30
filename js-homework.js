/*Sơ đồ 3 khối*/

/*BÀI 1: Hàm này được gắn vào nút button
 Input: Tạo và lấy giá trị biến khi người dùng nhập 3 số nguyên

Process(Pseudo code)
1. Vì chỉ có 3 số nên giá trị tăng dần sẽ là var min, mid và max
2. So sánh lần lượt để tìm ra số min và max
3. Số mid = tổng 3 số - số min - số max
Output: Thứ tự từ trái qua phải là min, mid, max
*/

function submit1(){
    var numberA = +document.getElementById("A").value
    var numberB = +document.getElementById("B").value
    var numberC = +document.getElementById("C").value

    var min = numberA < numberB ? numberA : numberB
    var max = numberA > numberB ? numberA : numberB
    min = min < numberC ? min : numberC
    max = max > numberC ? max : numberC
    var mid = numberA + numberB + numberC - min - max

    document.getElementById("result1").style.display = 'block';
    document.getElementById("order").innerHTML = min + "  " + mid + "  " + max

}

/*BÀI 2: Hàm này được gắn vào nút button
 Input: Tạo biến WhoIsThere và lấy giá trị khi người dùng chọn Bố hoặc Mẹ hoặc Anh trai hoặc Em gái

Process(Pseudo code)
1. Cho hiện result2 khi nhấn vào button
2. Chèn vào greeting dòng Xin chào + giá trị biến WhoIsThere
Output: Nhấn button sẽ hiện Xin chào + giá trị biến WhoIsThere
*/

function submit2(){
    var whoIsThere = document.getElementById("who").value
    document.getElementById("result2").style.display = 'block';
    document.getElementById("greeting").innerHTML = "Xin chào " + whoIsThere
}
// BÀI 3: Hàm này được gắn vào nút button
/*Cách 1:
function submit3(){
    var numberX = +document.getElementById("X").value
    var numberY = +document.getElementById("Y").value
    var numberZ = +document.getElementById("Z").value

var EvenOdd = [numberX, numberY, numberZ];

var countEven = 0
var countOdd = 0

if (numberX % 2 === 0){
    countEven+= 1
}else{
    countOdd+= 1
}
if (numberY % 2 === 0){
    countEven+= 1
}else{
    countOdd+= 1
}
if (numberZ % 2 === 0){
    countEven+= 1
}else{
    countOdd+= 1
}
    document.getElementById("result3").style.display = 'block';
    document.getElementById("even").innerHTML = "Có tổng cộng " + countEven + " số chẵn"
    document.getElementById("odd").innerHTML = "Có tổng cộng " + countOdd + " số lẻ"
}*/
/*Cách 2
 Input: 
 1. Tạo và lấy giá trị biến khi người dùng nhập 3 số nguyên
 2. Tạo biến countEven là biến đếm số chẵn và gán giá trị = 0
 3. Tạo biến countOdd là biến đếm số lẻ và = 3 - số lượng số chẵn

Process(Pseudo code)
Lần lượt chia 3 số cho 2, nếu phần dư = 0 là đúng thì +1 vào countEven

Output: Nhấn button sẽ hiện countEven và countOdd
*/
function submit3(){
    var numberX = +document.getElementById("X").value
    var numberY = +document.getElementById("Y").value
    var numberZ = +document.getElementById("Z").value

var countEven = 0

if (numberX % 2 === 0){
    countEven+= 1
}
if (numberY % 2 === 0){
    countEven+= 1
}
if (numberZ % 2 === 0){
    countEven+= 1
}
    document.getElementById("result3").style.display = 'block';
    document.getElementById("even").innerHTML = "Có tổng cộng " + countEven + " số chẵn"
    var countOdd = 3 - countEven
    document.getElementById("odd").innerHTML = "Có tổng cộng " + countOdd + " số lẻ"
}

/*BÀI 4: Hàm này được gắn vào nút button
 Input: Tạo và lấy giá trị biến khi người dùng nhập 3 số
Process(Pseudo code)

1. Nếu a = b và b = c => tam giác đều
2. Nếu a = b hoặc b = c hoặc c = a => tam giác cân
3. Nếu a^2 + b^2 = c^2 hoặc b^2 = c^2 + a^2 hoặc a^2 = b^2 + c^2 => tam giác vuông
4. Nếu k phải 3 loại trên, thì là loại khác

Output: Loại tam giác
*/

function submit4(){
    var numberI = document.getElementById("I").value
    var numberL = document.getElementById("L").value
    var numberU = document.getElementById("U").value

if (numberI === numberL && numberL === numberU){
    document.getElementById("triangle").innerHTML = "Đây là tam giác đều"
    // document.getElementById("result4").style.display = 'block';
}
else if (numberI === numberL || numberL === numberU || numberU === numberI){
    document.getElementById("triangle").innerHTML = "Đây là tam giác cân"
    // document.getElementById("result4").style.display = 'block';
}
else if (numberI * numberI === numberL * numberL + numberU * numberU||
         numberL * numberL === numberU * numberU + numberI * numberI||
         numberU * numberU === numberL * numberL + numberI * numberI){
    document.getElementById("triangle").innerHTML = "Đây là tam giác vuông"
    // document.getElementById("result4").style.display = 'block';
}else{
    document.getElementById("triangle").innerHTML = "Đây là một loại tam giác nào đó"
    // document.getElementById("result4").style.display = 'block';
}
    document.getElementById("result4").style.display = 'block';
}