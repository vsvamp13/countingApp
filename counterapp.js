let countEl = document.getElementById("counting");

let count = 0;

function increment() {
    count += 1;
    countEl.innerHTML = count;
}

function decrement() {
    count -= 1;
    countEl.innerHTML = count;
}

let saveMe = document.getElementById("save-El");

function save() {
    let saveEl = count + " - ";
    saveMe.textContent += saveEl; // incazul in care nu se creaza spatii intre cifrele salvate folosim .textContent in loc de innerHTML
    countEl.innerHTML = 0;
    count = 0;
    // my solution document.getElementById("counting").innerHTML = 0;
}
