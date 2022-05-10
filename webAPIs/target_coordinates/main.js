const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

// Ellie's Solution

document.addEventListener('mousemove', (event) => {
  const x = event.clientX;
  const y = event.clientY;
  console.log(`${x}, ${y}`);

  vertical.style.left = `${x}px`;
  horizontal.style.top = `${y}px`;

  target.style.left = `${x}px`;
  target.style.top = `${y}px`;

  tag.style.left = `${x}px`;
  tag.style.top = `${y}px`;

  tag.innerHTML = `${x}px, ${y}px`;
});

// My Solution

// function updateTag() {
//   tag.innerHTML = `X: ${event.clientX}px, Y: ${event.clientY}px`;

//   vertical.style.left = event.clientX + 'px';
//   horizontal.style.top = event.clientY + 'px';

//   target.style.left = event.clientX + 'px';
//   target.style.top = event.clientY + 'px';

//   tag.style.left = event.clientX + 'px';
//   tag.style.top = event.clientY + 'px';
// }

// window.addEventListener('mousemove', (event) => {
//   //console.log(`pageX: ${event.pageX}, pageY: ${event.pageY}`);
//   updateTag();
// });
// updateTag();
