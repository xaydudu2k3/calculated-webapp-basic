
function Rs(){
    document.getElementById("gta").value = null;
    document.getElementById("gtb").value = null;
    document.getElementById("result").value = null;
    document.getElementById("demo").innerHTML = "";
    console.clear();
}
function S(){
    let a =  document.getElementById("gta").value;
    let b =  document.getElementById("gtb").value;
    check(a, b)
    if(check(a, b) === 1) return;
    let s = parseFloat(a) + parseFloat(b);
    document.getElementById("result").value = s;
    console.log(s);
}
function M(){
    let a =  document.getElementById("gta").value;
    let b =  document.getElementById("gtb").value;
    check(a, b)
    if(check(a, b) === 1) return;
    let s = parseFloat(a) - parseFloat(b);
    document.getElementById("result").value = s;
    console.log(s);
}
function Mul(){
    let a =  document.getElementById("gta").value;
    let b =  document.getElementById("gtb").value;
    check(a, b)
    if(check(a, b) === 1) return;
    let s = parseFloat(a) * parseFloat(b);
    document.getElementById("result").value = s;
    console.log(s);
}
function D(){
    let a =  document.getElementById("gta").value;
    let b =  document.getElementById("gtb").value;
    check(a, b)
    if(check(a, b) === 1) return;
    let s;
    if(b === '0'){
        alert("Mẫu phải khác 0")
        s = "ERROR"
    }
    else s = parseFloat(a) / parseFloat(b);
    document.getElementById("result").value = s;
    console.log(s);
}

function check(a, b){
    if(isNaN(a) == true){
        console.log("A khong hop le!:")
    }else {
        console.log("Nhap A thanh cong!")
    }
    if(isNaN(b) == true){
        console.log("b khong hop le!:")
    }else {
        console.log("Nhap b thanh cong!")
    }
   if((isNaN(a) === true) || (isNaN(b) ===true)) {
    document.getElementById("demo").innerHTML = "Dữ liệu vào không hợp lệ!"
    return 1;
   }else document.getElementById("demo").innerHTML = ""
}


