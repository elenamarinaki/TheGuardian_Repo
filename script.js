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

function searchKeyWord(e) {
  e.preventDefault();

  const oldTemplate = document.querySelector('.result-box');
  if (oldTemplate !== null) {
    const formData = new FormData(form);
    const data = formData.get('key-word');
    console.log(data);

    fetch(
      `https://content.guardianapis.com/search?q=${data}&api-key=f2f5bbdc-ac41-4807-906c-f6197107dba9`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.response.results);
        return data.response.results;
      })
      .then((array) => {
        if (array.length === 0) throw new Error('No results found!');

        array.forEach((result) => {
          document.querySelector('.section-name').textContent =
            result.sectionName;
          document.querySelector('.type').textContent = result.type;
          document.querySelector(
            '.web-title'
          ).textContent = `🔗 ${result.webTitle}`;
          document.querySelector('.web-title').href = result.webUrl;
        });
      })
      .catch((error) => {
        console.log(error);
        alert(`${error.message}. Try again!`);
      });
  } else {
    const formData = new FormData(form);
    const data = formData.get('key-word');
    console.log(data);

    fetch(
      `https://content.guardianapis.com/search?q=${data}&api-key=f2f5bbdc-ac41-4807-906c-f6197107dba9`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.response.results);
        return data.response.results;
      })
      .then((array) => {
        if (array.length === 0) throw new Error('No results found!');

        array.forEach((result) => {
          const attach = document.querySelector('.grid');
          const template = document.querySelector('.result-template');
          const domFragment = template.content.cloneNode(true);

          domFragment.querySelector('.section-name').textContent =
            result.sectionName;
          domFragment.querySelector('.type').textContent = result.type;
          domFragment.querySelector(
            '.web-title'
          ).textContent = `🔗 ${result.webTitle}`;
          domFragment.querySelector('.web-title').href = result.webUrl;

          attach.appendChild(domFragment);
        });
      })
      .catch((error) => {
        console.log(error);
        alert(`${error.message}. Try again!`);
      });
  }
}

window.addEventListener('load', init);
form.addEventListener('submit', searchKeyWord);
