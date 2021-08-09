// ------------------------- TYPEWRITER
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

// ------------------------- INPUT SEARCH
const form = document.querySelector('form');

function init() {
  document.querySelector('#key-word').value = '';
}

// >>>>>> test unit
// fetch(
//   `https://content.guardianapis.com/search?q=${data}&api-key=f2f5bbdc-ac41-4807-906c-f6197107dba9`
// )
//   .then((response) => response.json())
//   .then((data) => console.log(data.response.results));
//   >>>>>> END of test unit

function searchKeyWord(e) {
  e.preventDefault();

  const formData = new FormData(form);
  const data = formData.get('key-word');
  console.log(data);

  fetch(
    `https://content.guardianapis.com/search?q=${data}&api-key=f2f5bbdc-ac41-4807-906c-f6197107dba9`
  )
    .then((response) => response.json())
    .then((data) => console.log(data.response.results))
    // .then((data) => {
    //   if (oldTemplate !== null) {
    //     /////////
    //   } else {
    //     /////create template
    //   }
    // })
    .catch((error) => {
      console.log(error);
      alert(`${error.message}. Try again!`);
    });
}

window.addEventListener('load', init);
form.addEventListener('submit', searchKeyWord);
