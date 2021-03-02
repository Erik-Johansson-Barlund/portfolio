document.addEventListener("DOMContentLoaded", function (e) {
  const header = document.querySelector("header");
  const header_image = document.querySelector(".header-img");
  const test = document.querySelector(".test");
  const inner_test = document.querySelector(".inner-test");
  const about_text = document.querySelector(".about");
  const header_window = document.querySelector(".window");
  const links = document.querySelector(".links");
  const about_text3 = document.querySelector(".text3");
  const header_word = document.querySelector(".header-word");
  const calc_wrapper = document.querySelector(".calc-wrapper");
  const calc_output = document.querySelector(".test-output");
  const gamesiteimg = document.getElementById("gamesiteimg");
  //const calculator_section = document.querySelector('.calculator_section');

  // CHANGE TEXT ON STARTPAGE
  let words = [
    "HTML5",
    "CSS3",
    "Javascript",
    "design",
    "programmering",
    "FrontEnd",
    "React",
    "Tacos",
  ];
  let counter = 0;

  setInterval(function () {
    if (counter == words.length) {
      counter = 0;
    }
    header_word.innerHTML = "En man som gillar <i>" + words[counter] + " </i>";
    counter++;
  }, 2000);

  //PARALAX
  let distance = 0;
  window.addEventListener("scroll", function () {
    distance = window.scrollY;
    console.log(distance);

    if (distance > 300) {
      header_window.style.transform = `translateX(${
        -distance / 2 + 150
      }px) translateY(${-distance / 3 + 100}px)`;

      about_text.style.transform = `translateX(${
        distance / 3 - 100
      }px) translateY(${-distance / 2 + 150}px)`;
      if (distance < 800) {
        calc_wrapper.style.transform = `translateX(${distance / 2}px) rotateZ(${
          -distance / 100
        }deg)`;
        calc_output.style.filter = `opacity(${distance / 8}%)`;
      }
      if (distance > 1200) {
        gamesiteimg.style.transform = `rotate(${distance / 150 - 14}deg)`;
      }
    }
    //calculator_section.style.transform = `translateY(${distance}px)`;
    links.style.transform = `translateY(${-distance / 5}px)`;

    /*setTimeout(() => {
			document.querySelector('section h3').classList.add('animate-me');
		}, 400);*/
  });

  //TRANSFORMS IN HEADER
  header.addEventListener("mousemove", (e) => {
    x_axis = (window.innerWidth / 2 - e.pageX) / 45;
    y_axis = (window.innerHeight / 2 - e.pageY) / 45;

    header_image.style.transform = `rotateX(${y_axis * 0.5}deg) rotateY(${
      -x_axis * 0.5
    }deg) translateZ(150px)`;

    test.style.transform = `translateY(${-y_axis * 0.3}px) translateX(${
      x_axis * 0.3
    }px) translateZ(0px)`;
    inner_test.style.transform = `translateY(${-y_axis * 0.6}px) translateX(${
      -x_axis * 0.6
    }px) translateZ(20px)`;
    if (distance < 300) {
      about_text.style.transform = `rotateY(${-x_axis * 0.3}deg) rotateX(${
        y_axis * 0.3
      }deg) translateZ(320px)`;
    }
  });
});
