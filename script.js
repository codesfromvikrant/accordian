const data = [
  {
    title: "What are top Emerging Startups in 2022?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
  },
  {
    title: "How much does uber taxi charge for 1km in Delhi?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
  },
  {
    title: "Bollywood upcoming comedy movies.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
  },
  {
    title: "When will the registration start for upcoming ssc exam?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
  },
  {
    title: "Best business ideas in artificial Intelligence",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
  }
];

const id = (id) => document.getElementById(id);
const container = id('container');


data.forEach((el) => {
  const accordian = document.createElement('div');
  accordian.classList.add('accordian');

  const accTitle = document.createElement('div');
  accTitle.classList.add('acc-title');
  const HTML = `<i class="fa fa-solid fa-caret-right"></i>`;
  accTitle.insertAdjacentHTML('afterbegin', HTML);

  const accTitle_text = document.createElement('h3');
  accTitle_text.textContent = el.title;
  accTitle_text.classList.add('acc-title-text');
  accTitle.appendChild(accTitle_text);

  const accContent = document.createElement('div')
  accContent.classList.add('acc-content');
  accContent.innerHTML = el.content;

  accordian.appendChild(accTitle);
  accordian.appendChild(accContent);
  container.appendChild(accordian)
})

const contentArr = document.querySelectorAll('.acc-content');
const iconsArr = document.querySelectorAll('.fa-caret-right');

container.addEventListener('click', function (e) {
  iconsArr.forEach((el) => {
    el.classList.remove('movedown')
  })
  contentArr.forEach((el) => {
    el.style.display = "none";
  })
  const targetEl = e.target;
  const icon = targetEl.closest('.acc-title').firstChild;
  icon.classList.add('movedown');
  const accContent = targetEl.closest('.accordian').lastChild;
  accContent.style.display = "block";
})