const navbar = document.querySelector("#navigation");
const closebtn = document.querySelector("#closeBtnNav");
const openbtn = document.querySelector("#openNav");

closebtn.addEventListener("click", () => {
  navbar.classList.replace("width-100", "width-0");

  closebtn.style.display = "none";
});

openbtn.addEventListener("click", () => {
  navbar.classList.replace("width-0", "width-100");
  closebtn.removeAttribute("style");
});

const showlanguage = document.querySelector("#showLanguage");
const allLanguages = document.querySelector("#allLanguages");
const closelanguages = document.querySelector("#closelanguages");

closelanguages.addEventListener("click", () => {
  allLanguages.classList.remove("w-full");
  allLanguages.classList.add("w-0");
});

showlanguage.addEventListener("click", () => {
  allLanguages.classList.add("w-full");
});

const clickDiscovery = document.querySelector("#discovery");
const iconsSpan = clickDiscovery.querySelector("span");
const dropdownDisc = document.querySelector("#dropdownDisc");

clickDiscovery.addEventListener("click", () => {
  clickDiscovery.classList.add("border");
  iconsSpan.classList.toggle("rotate-0");
  iconsSpan.classList.toggle("rotate-180");

  dropdownDisc.classList.toggle("hidden");
});

const searchClose = document.querySelector("#searchClose");
const searchOpen = document.querySelector("#searchOpen");
const inputSearch = document.querySelector("#inputSearch");

searchOpen.addEventListener("click", () => {
  inputSearch.removeAttribute("style");
});

searchClose.addEventListener("click", () => {
  inputSearch.style.display = "none";
});

const selectSideIcons = document.querySelector("#side-icons");

let arrayOfData = [];

async function getData() {
  const response = await fetch("../JSON/sideicons.json");
  const data = await response.json();

  arrayOfData.push(...data);

  arrayOfData.forEach((element, index) => {
    const { bgIcons, title } = element;

    const html = `
    <li
    class="2xl:flex items-center 2xl:gap-3 text-white font-semibold 2xl:h-[106.66px] 2xl:w-full hover:bg-[#252525] group rounded-xl z-30 overflow-hidden relative 2xl:p-3 cursor-pointer " id="showImg--${
      index + 1
    }"
  >
    <div
      class="hidden 2xl:block absolute w-0 h-full top-0 left-0 bg-[#363636]   cursor-pointer transition-all duration-1000"
    id="groupHover"></div>
    <figure
      class="hidden 2xl:block 2xl:h-full w-[30%] rounded-lg relative overflow-hidden"
    >
      <img
        src="${bgIcons}"
        alt=""
        class="h-full w-full  object-cover block"
      />
    </figure>
    <a href="#page-${
      index + 1
    }"      class="relative opacity-100 2xl:block 2xl:absolute 2xl:h-full 2xl:w-full bg-green-600 2xl:opacity-0">
      <div
        class="h-2 w-2 rounded-full bg-gray-500 2xl:hidden"
        id="btn-page--${index + 1}"
      ></div>
    </a>
    <h1 class="hidden 2xl:block text-stone-300 z-30">${title}</h1>
  </li>
    `;

    selectSideIcons.insertAdjacentHTML("beforeend", html);
  });

  const pages1 = document.querySelector("#btn-page--1");
  const pages2 = document.querySelector("#btn-page--2");
  const pages3 = document.querySelector("#btn-page--3");
  const pages4 = document.querySelector("#btn-page--4");
  const pages5 = document.querySelector("#btn-page--5");
  const pages6 = document.querySelector("#btn-page--6");

  function removeEl(number) {
    document.querySelector(`#btn-page--${number}`).classList.remove("bg-white");
    document.querySelector(`#btn-page--${number}`).classList.add("bg-gray-500");
  }

  function replaced(element) {
    document
      .querySelector(`#btn-page--${element}`)
      .classList.replace("bg-gray-500", "bg-white");
  }

  pages1?.addEventListener("click", () => {
    replaced("1");

    removeEl("2");
    removeEl("3");
    removeEl("4");
    removeEl("5");
    removeEl("6");
  });

  pages2?.addEventListener("click", () => {
    pages2?.classList.remove("bg-gray-500");
    pages2?.classList.add("bg-white");

    removeEl("1");
    removeEl("3");
    removeEl("4");
    removeEl("5");
    removeEl("6");
  });

  pages3?.addEventListener("click", () => {
    pages3?.classList.remove("bg-gray-500");
    pages3?.classList.add("bg-white");

    removeEl("1");
    removeEl("2");
    removeEl("4");
    removeEl("5");
    removeEl("6");
  });
  pages4?.addEventListener("click", () => {
    pages4?.classList.remove("bg-gray-500");
    pages4?.classList.add("bg-white");

    removeEl("1");
    removeEl("2");
    removeEl("3");
    removeEl("5");
    removeEl("6");
  });
  pages5?.addEventListener("click", () => {
    pages5?.classList.remove("bg-gray-500");
    pages5?.classList.add("bg-white");

    removeEl("1");
    removeEl("2");
    removeEl("3");
    removeEl("4");
    removeEl("6");
  });
  pages6?.addEventListener("click", () => {
    pages6?.classList.remove("bg-gray-500");
    pages6?.classList.add("bg-white");

    removeEl("1");
    removeEl("2");
    removeEl("3");
    removeEl("4");
    removeEl("5");
  });

  const groupHover = document.querySelectorAll("#groupHover");

  function forceClick(e) {
    const sample = document.querySelector(`#showImg--${e}`);
    const anchor = sample.querySelector("a").click();
  }

  function startHover(e) {
    groupHover[e].classList.replace("w-0", "w-full");
  }

  function removeHover(e) {
    groupHover[e].classList.replace("w-full", "w-0");
  }

  number = 0;
  negNumber = 7;

  function decrement() {
    const startInt = setInterval(() => {
      negNumber -= 1;

      if (negNumber == 6) {
        forceClick(5);
        startHover(4);
        removeHover(5);
      }
      if (negNumber == 5) {
        forceClick(4);
        startHover(3);
        removeHover(4);
      }
      if (negNumber == 4) {
        forceClick(3);
        startHover(2);
        removeHover(3);
      }
      if (negNumber == 3) {
        forceClick(2);
        startHover(1);
        removeHover(2);
      }
      if (negNumber == 2) {
        forceClick(1);
        startHover(0);
        removeHover(1);
      }
      if (negNumber == 1) {
        console.log(negNumber);
      }
      // if (negNumber == 1) {
      //   forceClick(5);
      // }

      if (negNumber === 0) {
        clearInterval(startInt);

        negNumber = 7;

        setTimeout(startInterVal, 2500);
      }
    }, 2500);
  }

  function startInterVal() {
    const startInt = setInterval(() => {
      number += 1;

      if (number === 1) {
        let num = number - 1;
        forceClick(1);
        startHover(num);
        removeHover(5);
      }

      if (number === 2) {
        let num = number - 1;
        forceClick(2);
        removeHover(0);
        startHover(num);
      }

      if (number === 3) {
        let num = number - 1;
        forceClick(3);

        removeHover(1);
        startHover(num);
      }
      if (number === 4) {
        let num = number - 1;
        removeHover(2);
        startHover(num);
        forceClick(4);
      }
      if (number === 5) {
        let num = number - 1;
        removeHover(3);
        startHover(num);
        forceClick(5);
      }

      if (number === 6) {
        let num = number - 1;
        forceClick(6);
        removeHover(4);
        startHover(num);
        clearInterval(startInt);

        number = 0;

        setTimeout(decrement, 2500);
      }
    }, 2500);
  }

  // startInterVal();
}
getData();
