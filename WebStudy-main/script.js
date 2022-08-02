let sliderData = {
  one: {
    h1Text: "The CHALLENGERS <br> DEVELOP ALL-WAYS",
    pText:
      "고민하고 도전하는 사람들, 챌린저스의 멈추지 않은 이야기를 전합니다.",
    backgroundColor: "#007aff",
    imgLink:
      "https://devinn.dev/@resource/images/index/kivi-main-challengers.svg",
  },
  two: {
    h1Text: "제 3회 ABC Meetup<br>Tech Con",
    pText: "디지털 대전환 시대의 일하는 방식'에 대한 이야기를 나눕니다.",
    backgroundColor: "black",
    imgLink: "https://devinn.dev/@resource/images/index/kivi-techcon.svg",
  },
};

let h1txt = document.querySelector("#slider-h1");
let ptxt = document.querySelector("#slider-p");
let imglink = document.querySelector("#slider-img");
let backgroundcolor = document.querySelector(".ct-sliderbox");


function leftClick() {
  if (h1txt.innerHTML === sliderData.one.h1Text) {
    h1txt.innerHTML = sliderData.two.h1Text;
    ptxt.innerHTML = sliderData.two.pText;
    imglink.src = sliderData.two.imgLink;
    backgroundcolor.style.backgroundColor = sliderData.two.backgroundColor;
  } else {
    h1txt.innerHTML = sliderData.one.h1Text;
    ptxt.innerHTML = sliderData.one.pText;
    imglink.src = sliderData.one.imgLink;
    backgroundcolor.style.backgroundColor = sliderData.one.backgroundColor;
  }

}

function rightClick() {
  if (h1txt.innerHTML === sliderData.one.h1Text) {
    h1txt.innerHTML = sliderData.two.h1Text;
    ptxt.innerHTML = sliderData.two.pText;
    imglink.src = sliderData.two.imgLink;
    backgroundcolor.style.backgroundColor = sliderData.two.backgroundColor;
  } else {
    h1txt.innerHTML = sliderData.one.h1Text;
    ptxt.innerHTML = sliderData.one.pText;
    imglink.src = sliderData.one.imgLink;
    backgroundcolor.style.backgroundColor = sliderData.one.backgroundColor;
  }
}
