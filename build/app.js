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

  startInterVal();
}
getData();

const slideShowData = [
  {
    mobileImg: "../img/slideShow-mobile-1.png",
    desktopImg: "../img/slideShow-desktop-1.png",
    headingImg: "../img/slideShow-header-1.png",
    header: " EGS Exclusive - Out Now",
    paragraph:
      "Uncover the truth behind the outbreak and discover who or what you are",
    price: "Php 2,199,00",
    buttonText: "buy now",
  },
  {
    mobileImg: "../img/slideShow-mobile-2.png",
    desktopImg: "../img/slideShow-desktop-2.png",
    headingImg: "../img/slideShow-header-2.png",
    header: "Now Availabe",
    paragraph:
      "HoYoverse's Honkai: Star Rail is available now! Climb aboard to the stars!",
    price: "Free",
    buttonText: "Play for free",
  },
  {
    mobileImg: "../img/slideShow-mobile-3.png",
    desktopImg: "../img/slideShow-desktop-3.png",
    headingImg: "../img/slideShow-header-3.png",
    header: "Now Availabe",
    paragraph:
      "Join Jedi Knight Cal Kestis in STAR WARS Jedi: Survivor™, a galaxy-spanning, action-packed adventure.",
    price: "Php 2,999.00",
    buttonText: "out now",
  },
  {
    mobileImg: "../img/slideShow-mobile-4.png",
    desktopImg: "../img/slideShow-desktop-4.png",
    headingImg: "../img/slideShow-header-4.png",
    header: "Comming May 2",
    paragraph:
      "Uncover the Truth, Take Back Redfall in this new open-world, co-op FPS from Arkane Austin.",
    price: "Php 2,099.00",
    buttonText: "pre-purchase now",
  },
  {
    mobileImg: "../img/slideShow-mobile-5.png",
    desktopImg: "../img/slideShow-desktop-5.png",
    headingImg: "../img/slideShow-header-5.png",
    header: "Last Chance to Pre-Purchase",
    paragraph:
      "Explore new magical realms in Age of Wonders’ signature blend of 4X strategy and turn-based tactical combat.",
    price: "Php 1,859.00",
    buttonText: "pre-purchase now",
  },
  {
    mobileImg: "../img/slideShow-mobile-6.png",
    desktopImg: "../img/slideShow-desktop-6.png",
    headingImg: "../img/slideShow-header-6.png",
    header: "EGS Exclusive",
    paragraph:
      "Take on the role of Travis Baker – a man with his sights set on becoming the new King of Rockay City, one crime at a time…",
    price: "Php 1,077.99",
    buttonText: "Now availabe",
  },
];

const mainSlideShow = document.querySelector("#mainSlideShow");

slideShowData.forEach((element, index) => {
  const {
    mobileImg,
    desktopImg,
    headingImg,
    header,
    paragraph,
    price,
    buttonText,
  } = element;

  const value =
    price === "Free"
      ? `<p>${price}</p>`
      : `<p>Starting at</p>
  <p>${price}</p>`;

  const html = `<div
  class="grow-0 shrink-0 h-full w-96 snap-center rounded-2xl md:w-[85%] relative overflow-hidden lg:w-[100%]"
  id="page-${index + 1}"
>
  <picture>
    <source
      media="(max-width: 768px)"
      srcset="${mobileImg}"
    />
    <img
      src="${desktopImg}"
      alt="slide show logo "
      class="rounded-md block absolute h-full w-full object-cover top-0 left-0"
    />
  </picture>

  <div
    class="relative h-20 w-14 ml-auto right-0 top-0 flex justify-center items-center z-40 2xl:hidden"
  >
    <div
      class="h-7 w-7 rounded-full bg-black border-2 border-white flex justify-center items-center text-white"
    >
      <span class="material-symbols-outlined text-white text-2xl">
        add
      </span>
    </div>
  </div>

  <article
    class="w-full absolute flex flex-col gap-4 bottom-0 text-white pl-4 pb-8 z-10 md:pl-10 md:pr-52 2xl:w-[50%] 2xl:pr-0 2xl:pb-16 2xl:pl-16"
  >
    <img
      src="${headingImg}"
      alt=""
      class="w-40 md:w-52 2xl:w-72 2xl:mb-8"
    />
    <p class="text-[0.6rem] font-bold md:text-sm">
      ${header}
    </p>
    <p
      class="font-bold leading-5 md:text-lg md:leading-6 2xl:leading-7 2xl:max-w-xs"
    >
     ${paragraph}
    </p>
    <div
      class="flex flex-col font-semibold leading-3 2xl:flex-row gap-2 2xl:font-medium"
    >
      ${value}
    </div>

    <div class="hidden 2xl:flex gap-2 mt-6">
      <button
        class="block font-medium bg-white text-black rounded-sm py-3 px-${
          buttonText === "buy now" ? "5" : "7"
        } uppercase text-sm -mt-2"
      >
        ${buttonText}
      </button>
      <button
        class="flex items-center gap-2 font-medium hover:bg-white/20 text-white rounded-sm py-3 px-7 uppercase text-xs -mt-2 transition-all duration-200"
      >
        <div
          class="h-5 w-5 rounded-full border-2 border-white flex justify-center items-center"
        >
          <span class="material-symbols-outlined text-sm font-bold">
            add
          </span>
        </div>
        add to wishlist
      </button>
    </div>
  </article>
  <div class="absolute h-full w-full top-0 left-0 bg-img"></div>
</div>`;

  mainSlideShow.insertAdjacentHTML("beforeend", html);
});
