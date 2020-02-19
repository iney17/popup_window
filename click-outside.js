const btns = document.querySelectorAll("button"); //объявляем конст. для всех кнопок в документе
const modalOuter = document.querySelector(".modal-outer"); // объявляем конст. элемент класса .modal-outer
const modalInner = document.querySelector(".modal-inner");

//btns.forEach Перебирает btns дальше btn => { создаёт переменную btn
//дальше btn.addEventListener("click"  выбирает кнопку из btns  которая получила"click"
//"click",- это у нас получается тип события взаимодействие с перменой btn которая его получила .
//btn.addEventListener("click", openWindow); - так мы его передаём в функцию с названием "openWindow "
//  А в функции клик становится параметром е
btns.forEach(btn => {
  btn.addEventListener("click", openWindow); //перебираем тип события "click"по кнопкам и запускаем функцию openWindow c параметром e
});

function openWindow(e) {
  const btn = e.currentTarget; //объявляем конст. Определяем элемент, который получил клик
  const card = btn.closest(".card"); // объявляем конст. с род. элементом кнопки с классом .card
  const img = card.querySelector("img");
  const title = card.querySelector("h2").innerText;
  modalInner.innerHTML = `
  <img src="${img.src}">   
 <h2> ${title}</h2>    `;
  modalOuter.classList.add("open"); //добавляем класс к константе, получаем класс .modal-outer.open (и окно становится видимым)
}

modalOuter.addEventListener("click", cloceWindow);

function cloceWindow(e) {
  if (e.target.classList.contains("open")) {
    modalOuter.classList.remove("open");
  }
}
