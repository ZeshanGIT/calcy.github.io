function dis(val) {
    document.getElementById("result").innerHTML += val
}

function solve() {
    let x = document.getElementById("result").innerHTML;
    let y = eval(x)
    document.getElementById("result").innerHTML = y
}

function clr() {
    document.getElementById("result").innerHTML = ""
}

function copyStringToClipboard(str) {
    var el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style = { position: 'absolute', left: '-9999px' };
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}

function copy() {
    var result = document.getElementById("result").innerHTML;
    copyStringToClipboard(result);
    alert("Result copied !\n" + result);
}