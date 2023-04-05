const container = document.querySelector('#container');

const pars = document.createElement('p');
pars.setAttribute('style', 'color: red');
pars.textContent = "Hey, i'm red!";
container.appendChild(pars);

const header = document.createElement('h3');
header.setAttribute('style', 'color: blue');
header.textContent = "I'm a blue h3!";
container.appendChild(header);

const div = document.createElement('div');
div.setAttribute('style', 'background: pink; border:1px solid black');
container.appendChild(div);

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";
div.appendChild(h1);

const p = document.createElement('p');
p.textContent = 'ME TOO';
div.appendChild(p);

const btn = document.querySelector('#btn');
btn.onclick = () => {
  alert('Hello world!');
};

const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', () => {
  alert('hello world!');
});
