// thanks to Javascript30.com
const content = document.querySelector("#main-content");
const text = content.querySelector("h1");
const walk = 12;

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = content;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  console.log(x, y);
  const xWalk = Math.round(x / width * walk - walk / 2);
  const yWalk = Math.round(y / height * walk - walk / 2);

  text.style.textShadow = `
  ${xWalk}px ${yWalk}px 0 rgba(0, 0, 0, .5)
  `;
}

content.addEventListener("mousemove", shadow);

const pressed = [];
const secretCode = 'jennchu';
window.addEventListener('keyup', (e) => {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join('').includes(secretCode)) {
    $.getScript('https://www.cornify.com/js/cornify.js', function () {
      cornify_add();
    })
  }
  console.log(pressed);
})
