const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} d-flex align-items-center alert-dismissible" role="alert">`,
    `   <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    alert('Poprawnie przewidujesz kupon!', 'success')
  })
}

let kurs1 = 0;
let stawka1 = 0;
//function stawka() {
//    const stawka1 = parseFloat(prompt("Podaj stawkę."));
//    document.getElementById("p1").innerHTML = "Stawka wynosi: " + stawka1 + "zł.";
//}
function druzyny() {
  let druz = prompt("Podaj drużynę pierwszą.");
  let druz2 = prompt("Podaj drużynę drugą.");
  document.getElementById("druzyna1").innerHTML = "Drużyna pierwsza: " + druz;
  document.getElementById("druzyna2").innerHTML = "Drużyna druga: " + druz2;
}

function stawka() {
  const stawka1 = parseFloat(prompt("Podaj stawkę."));
  if (isNaN(stawka1)) {
    console.log("Błąd: Stawka to nie liczba.");
    return;
  }
  console.log("Stawka:", stawka1);
  document.getElementById("p1").innerHTML = "Stawka wynosi: " + stawka1 + "zł.";
}

function kurs() {
  const kurs1 = parseFloat(prompt("Podaj kurs."));
  console.log("Kurs:", kurs1);
  document.getElementById("kurs").innerHTML = "Kurs wynosi: " + kurs1 + "x";
}

function mozlwygr(stawka1, kurs1) {
  const wygrana = stawka1 * kurs1;
  console.log(wygrana)
}

function mozlwygr(stawka1, kurs1) {
  if (isNaN(stawka1) || isNaN(kurs1)) {
    console.log("Błąd: Stawka lub kurs to nie liczba.");
    return;
  }
  let wygrana = stawka1 * kurs1;
  document.getElementById("mozliwawygrana1").innerHTML = "Możliwa wygrana: " + wygrana + "zł.";
}