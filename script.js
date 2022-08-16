const input = document.getElementById('input-screen__text');

function display(num) {
    input.value += num;
}

function Calculate() {
    try {
        input.value = eval(input.value);
    }
    catch(err) {
        alert('invalid');
    }
}

function Clear() {
    input.value = "";
}

function del() {
    input.value = input.value.slice(0, -1);
}