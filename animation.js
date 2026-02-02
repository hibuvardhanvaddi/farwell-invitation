function handleAnimationComplete() {
  console.log("Character animation completed!");
}

const el = document.querySelector(".blur-text");
const name = "Hi! " + (localStorage.getItem("animatedName") || "Guest") + ", you’re heartly invited to our Farewell Party. ";
const time = "On 7 Feb 2026."
const delay = Number(el.dataset.delay) || 50;

el.innerHTML = "";

const chars = [...name, ...time];

chars.forEach((char, index) => {
  const span = document.createElement("span");
  span.className = "blur-char";

  span.innerHTML = char === " " ? "&nbsp;" : char;
  span.style.animationDelay = `${index * delay}ms`;

  el.appendChild(span);
});

// [...time].forEach((char, index) => {
//   const span = document.createElement("span");
//   span.className = "blur-char";

//   span.innerHTML = char === " " ? "&nbsp;" : char;
//   span.style.animationDelay = `${index * delay}ms`;

//   el.appendChild(span);
// });

const totalDuration = (chars.length - 1) * delay + 500;
setTimeout(handleAnimationComplete, totalDuration);
