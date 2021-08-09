const typed = document.querySelector('h1');

let i = 0;
let txt = 'TheGuardian Repo';
let speed = 50;

window.onload = function typeWriter() {
  if (i < txt.length) {
    typed.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
};
