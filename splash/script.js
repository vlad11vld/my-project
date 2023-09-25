///bamburger-menu
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);
//carousel
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides1");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}
//
var swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  direction: getDirection(),
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
    },
  },
});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 760 ? "vertical" : "horizontal";

  return direction;
}
//faq
const intrebare = document.getElementById("q1");
const raspFaq = document.getElementById("rasp1");
const faqBrn1 = document.getElementById("faqBtn1");
const h3_faq = document.getElementById("q1").querySelector("h3");
let nr1 = 0;
intrebare.addEventListener("click", function () {
  h3_faq.style.color = "rgb(177, 24, 7)";
  intrebare.classList = " boxShadow";
  raspFaq.style.display = "block";
  faqBrn1.classList = "flipAnim";
  raspFaq.classList = "heightAnim";
  faqBrn1.style.color = "rgb(177, 24, 7)";
  nr1++;

  if (nr1 === 2) {
    h3_faq.style.color = "black";
    faqBrn1.classList.remove = "flipAnim";
    raspFaq.setAttribute("class", "heightAnim2");
    intrebare.setAttribute("class", "");
    faqBrn1.setAttribute("class", "flipAnim2");
    faqBrn1.style.color = "black";
    nr1 = 0;
  }
});

const intrebare2 = document.getElementById("q2");
const raspFaq2 = document.getElementById("rasp2");
const faqBrn2 = document.getElementById("faqBtn2");
const h3_faq2 = document.getElementById("q2").querySelector("h3");
let nr2 = 0;
intrebare2.addEventListener("click", function () {
  h3_faq2.style.color = "rgb(177, 24, 7)";
  intrebare2.setAttribute("class", "boxShadow");
  raspFaq2.style.display = "block";
  faqBrn2.classList = "flipAnim";
  faqBrn2.style.color = "rgb(177, 24, 7)";
  raspFaq2.classList = "heightAnim";
  nr2++;
  if (nr2 === 2) {
    faqBrn2.classList.remove = "flipAnim";
    h3_faq2.style.color = "black";
    raspFaq2.setAttribute("class", "heightAnim2");
    intrebare2.setAttribute("class", "");
    faqBrn2.setAttribute("class", "flipAnim2");
    faqBrn2.style.color = "black";
    nr2 = 0;
  }
});
const intrebare3 = document.getElementById("q3");
const raspFaq3 = document.getElementById("rasp3");
const faqBrn3 = document.getElementById("faqBtn3");
const h3_faq3 = document.getElementById("q3").querySelector("h3");
nr3 = 0;
intrebare3.addEventListener("click", function () {
  h3_faq3.style.color = "rgb(177, 24, 7)";
  faqBrn3.style.color = "rgb(177, 24, 7)";
  intrebare3.classList = " boxShadow";
  raspFaq3.style.display = "block";
  faqBrn3.classList = "flipAnim";
  raspFaq3.classList = "heightAnim";
  nr3++;

  if (nr3 === 2) {
    h3_faq3.style.color = "black";
    raspFaq3.setAttribute("class", "heightAnim2");
    intrebare3.setAttribute("class", "");
    faqBrn3.setAttribute("class", "flipAnim2");

    faqBrn3.style.color = "black";
    nr3 = 0;
  }
});
const intrebare4 = document.getElementById("q4");
const raspFaq4 = document.getElementById("rasp4");
const faqBrn4 = document.getElementById("faqBtn4");
const h3_faq4 = document.getElementById("q4").querySelector("h3");
nr4 = 0;
intrebare4.addEventListener("click", function () {
  h3_faq4.style.color = "rgb(177, 24, 7)";
  faqBrn4.style.color = "rgb(177, 24, 7)";
  intrebare4.classList = " boxShadow";
  raspFaq4.style.display = "block";
  faqBrn4.classList = "flipAnim";
  raspFaq4.classList = "heightAnim";
  nr4++;

  if (nr4 === 2) {
    h3_faq4.style.color = "black";
    raspFaq4.setAttribute("class", "heightAnim2");
    intrebare4.setAttribute("class", "");
    faqBrn4.setAttribute("class", "flipAnim2");

    faqBrn4.style.color = "black";
    nr4 = 0;
  }
});
const intrebare5 = document.getElementById("q5");
const raspFaq5 = document.getElementById("rasp5");
const faqBrn5 = document.getElementById("faqBtn5");
const h3_faq5 = document.getElementById("q5").querySelector("h3");
nr5 = 0;
intrebare5.addEventListener("click", function () {
  h3_faq5.style.color = "rgb(177, 24, 7)";
  faqBrn5.style.color = "rgb(177, 24, 7)";
  intrebare5.classList = " boxShadow";
  raspFaq5.style.display = "block";
  faqBrn5.classList = "flipAnim";
  raspFaq5.classList = "heightAnim";
  nr5++;

  if (nr5 === 2) {
    h3_faq5.style.color = "black";
    raspFaq5.setAttribute("class", "heightAnim2");
    intrebare5.setAttribute("class", "");
    faqBrn5.setAttribute("class", "flipAnim2");

    faqBrn5.style.color = "black";
    nr5 = 0;
  }
});
const intrebare6 = document.getElementById("q6");
const raspFaq6 = document.getElementById("rasp6");
const faqBrn6 = document.getElementById("faqBtn6");
const h3_faq6 = document.getElementById("q6").querySelector("h3");
nr6 = 0;
intrebare6.addEventListener("click", function () {
  h3_faq6.style.color = "rgb(177, 24, 7)";
  faqBrn6.style.color = "rgb(177, 24, 7)";
  intrebare6.classList = " boxShadow";
  raspFaq6.style.display = "block";
  faqBrn6.classList = "flipAnim";
  raspFaq6.classList = "heightAnim";
  nr6++;

  if (nr6 === 2) {
    h3_faq6.style.color = "black";
    raspFaq6.setAttribute("class", "heightAnim2");
    intrebare6.setAttribute("class", "");
    faqBrn6.setAttribute("class", "flipAnim2");

    faqBrn6.style.color = "black";
    nr6 = 0;
  }
});
const obiectUser = {
  nume: "",
  ph_number: "",
  email: "",
  parola: "",
};
console.log(obiectUser);
const navBar = document.querySelector(".navBar");
const mainSecton = document.querySelector("main");
const butonLogin = document.querySelector("#logIn");
const buttonSingup = document.querySelector("#signUp");
const nav = document.querySelector("class", ".navBar");
const body = document.querySelector("body").querySelector("footer");
butonLogin.addEventListener("click", function () {
  navBar.style.display = "none";
  body.style.display = "none";
  mainSecton.innerHTML = " ";
  mainSecton.style.marginTop = "0";
  mainSecton.innerHTML = `<section class="logSection">
  <div id="homepg" class="homepg"><a href="/splash/index.html"><i class="fa-solid fa-house"></i></a></div>
  <div class="logInBox"> 
   <div class="rightBoxL">
  <h2>Log In</h2>
  <p>Email</p>
  <input type="email" placeholder="..." id="emailL"required>
  <p>Password</p>
  <input type="password" placeholder="..." id="passwordL"required>
  <button class="button-green" id="btnL"><b>Submit</b></button>
  </div>
  <div class="blueLog" id="blueLog"> <p>Sign Up <i class="fa-solid fa-right-to-bracket fa-rotate-90"></i></p></div>
  </div>
  
  <div class="signUpBox" id="singUpBox"s> 
  <div class="rightBox">
  <h2>Sign Up</h2>
  <p>Name & Second-Name</p>
  <input type="text" placeholder="..." id="nameS" required>
  <p>Phone number</p>
  <input type="text" placeholder="..." id="numberS" required>
  <p>Email</p>
  <input type="email" placeholder="..." id="emailS" required>
  <p>Password</p>
  <input type="password" placeholder="..." id="passwordS" required>
  <button class="button-blue" id="btnS"><b>Submit</b></button>
  </div>
  <div class="orangeLog" id="orangeLog"> <p>Log In <i class="fa-solid fa-right-to-bracket fa-rotate-270"></i></p></div>
  </section>`;

  const loginBox = document.querySelector(".logInBox");
  const singupBox = document.querySelector("#singUpBox");
  const buttonL = document.querySelector("#blueLog");
  const buttonS = document.querySelector("#orangeLog");
  const btnS = document.querySelector("#btnS");
  const btnL = document.querySelector("#btnL");
  const nameS = document.querySelector("#nameS");
  const numberS = document.querySelector("#numberS");
  const emailS = document.querySelector("#emailS");
  const passwordS = document.querySelector("#passwordS");
  const passwordL = document.querySelector("#passwordL");
  const emailL = document.querySelector("#emailL");
  const head = document.querySelector("head");
  if (btnS) {
    btnS.addEventListener("click", function () {
      obiectUser.nume = nameS.value;
      obiectUser.ph_number = numberS.value;
      obiectUser.email = emailS.value;
      obiectUser.parola = passwordS.value;
    });
  } else {
    alert("etst");
  }
  if (btnL) {
    btnL.addEventListener("click", function () {
      if (
        obiectUser.email === emailL.value &&
        obiectUser.parola === passwordL.value
      ) {
        alert("te ai conectat");
        mainSecton.innerHTML = `
          <section style="background-color: #eee;">
          <div class="container py-5">
           
        
            <div class="row">
              <div class="col-lg-4">
                <div class="card mb-4">
                  <div class="card-body text-center">
                    <img src="https://toppng.com/uploads/preview/cool-avatar-transparent-image-cool-boy-avatar-11562893383qsirclznyw.png" alt="avatar"
                      class="rounded-circle img-fluid" style="width: 150px;" id="profilPoza">
                    <h5 class="my-3"> ${obiectUser.nume}</h5>
                    <p class="text-muted mb-1">Full Stack Developer</p>
                 
                    <div class="d-flex justify-content-center mb-2">
                      <button type="button" id="updatePoza" class="btn btn-primary">Update Picture</button>
                      <button type="button" class="btn btn-outline-primary ms-1">Message</button>
                    </div>
                  </div>
                </div>
                <div class="card mb-4 mb-lg-0">
                  <div class="card-body p-0">
                    <ul class="list-group list-group-flush rounded-3">
                      <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                        <form class="form-control">
                          <input type="text" placeholder="sursa pozei" id="sursaPoza"> 
                        
                        </form>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                        <i class="fab fa-github fa-lg" style="color: #333333;"></i>
                        <p class="mb-0">${obiectUser.nume}.github</p>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                        <i class="fab fa-twitter fa-lg" style="color: #55acee;"></i>
                        <p class="mb-0">${obiectUser.nume}.tw</p>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                        <i class="fab fa-instagram fa-lg" style="color: #ac2bac;"></i>
                        <p class="mb-0">${obiectUser.nume}.insta</p>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                        <i class="fab fa-facebook-f fa-lg" style="color: #3b5998;"></i>
                        <p class="mb-0">${obiectUser.nume}.fb</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-8">
                <div class="card mb-4">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-sm-3">
                        <p class="mb-0">Full Name</p>
                      </div>
                      <div class="col-sm-9">
                        <p class="text-muted mb-0">${obiectUser.nume} </p>
                      </div>
                    </div>
                    <hr>
                    <div class="row">
                      <div class="col-sm-3">
                        <p class="mb-0">Email</p>
                      </div>
                      <div class="col-sm-9">
                        <p class="text-muted mb-0">${obiectUser.email}</p>
                      </div>
                    </div>
                   
                    <hr>
                    <div class="row">
                      <div class="col-sm-3">
                        <p class="mb-0">Mobile</p>
                      </div>
                      <div class="col-sm-9">
                        <p class="text-muted mb-0">${obiectUser.ph_number}</p>
                      </div>
                    </div>
                    
                    
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="card mb-4 mb-md-0">
                      <div class="card-body">
                        <p class="mb-4"><span class="text-primary font-italic me-1">assigment</span> Project Status
                        </p>
                        <p class="mb-1" style="font-size: .77rem;">Web Design</p>
                        <div class="progress rounded" style="height: 5px;">
                          <div class="progress-bar" role="progressbar" style="width: 80%" aria-valuenow="80"
                            aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p class="mt-4 mb-1" style="font-size: .77rem;">Website Markup</p>
                        <div class="progress rounded" style="height: 5px;">
                          <div class="progress-bar" role="progressbar" style="width: 72%" aria-valuenow="72"
                            aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p class="mt-4 mb-1" style="font-size: .77rem;">One Page</p>
                        <div class="progress rounded" style="height: 5px;">
                          <div class="progress-bar" role="progressbar" style="width: 89%" aria-valuenow="89"
                            aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p class="mt-4 mb-1" style="font-size: .77rem;">Mobile Template</p>
                        <div class="progress rounded" style="height: 5px;">
                          <div class="progress-bar" role="progressbar" style="width: 55%" aria-valuenow="55"
                            aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p class="mt-4 mb-1" style="font-size: .77rem;">Backend API</p>
                        <div class="progress rounded mb-2" style="height: 5px;">
                          <div class="progress-bar" role="progressbar" style="width: 66%" aria-valuenow="66"
                            aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="card mb-4 mb-md-0">
                      <div class="card-body">
                        <p class="mb-4"><span class="text-primary font-italic me-1">assigment</span> Project Status
                        </p>
                        <p class="mb-1" style="font-size: .77rem;">Web Design</p>
                        <div class="progress rounded" style="height: 5px;">
                          <div class="progress-bar" role="progressbar" style="width: 80%" aria-valuenow="80"
                            aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p class="mt-4 mb-1" style="font-size: .77rem;">Website Markup</p>
                        <div class="progress rounded" style="height: 5px;">
                          <div class="progress-bar" role="progressbar" style="width: 72%" aria-valuenow="72"
                            aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p class="mt-4 mb-1" style="font-size: .77rem;">One Page</p>
                        <div class="progress rounded" style="height: 5px;">
                          <div class="progress-bar" role="progressbar" style="width: 89%" aria-valuenow="89"
                            aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p class="mt-4 mb-1" style="font-size: .77rem;">Mobile Template</p>
                        <div class="progress rounded" style="height: 5px;">
                          <div class="progress-bar" role="progressbar" style="width: 55%" aria-valuenow="55"
                            aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p class="mt-4 mb-1" style="font-size: .77rem;">Backend API</p>
                        <div class="progress rounded mb-2" style="height: 5px;">
                          <div class="progress-bar" role="progressbar" style="width: 66%" aria-valuenow="66"
                            aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
          `;
      } else {
        alert("ceva este gresit");
      }
    });
  }
  console.log(obiectUser);
  btnS.addEventListener("click", function () {});
  buttonL.addEventListener("click", function () {
    singupBox.style.display = "flex";
    loginBox.style.display = "none";
  });
  buttonS.addEventListener("click", function () {
    singupBox.style.display = "none";
    loginBox.style.display = "flex";
  });
});

//articole js

const readMore1 = document.querySelector("#readMore1");
const textArt1 = document.querySelector("#textArt1");
let NrArt = 0;
readMore1.addEventListener("click", function () {
  readMore1.innerHTML = `READ <i class="fa-solid fa-check"></i>`;
  textArt1.style.display = "block";
  NrArt++;
  if (NrArt === 2) {
    textArt1.style.display = "none";
    NrArt = 0;
    readMore1.innerHTML = "READ MORE";
  }
});

//sec 7 hover efect
const divS7 = document.querySelectorAll(".divs");
const imgS = document.querySelectorAll(".S");
for (let i = 0; i < divS7.length; i++) {
  divS7.innerHTML = "test";
  divS7[i].addEventListener("mouseover", function () {
    divS7[i].classList.add("boxHover");
  });
  divS7[i].addEventListener("mouseout", function () {
    divS7[i].classList.remove("boxHover");
    imgS[i].classList.add("stow");
  });
}
//art2
const textArt2 = document.querySelector("#textArt2");
const artBtn2 = document.querySelector("#readMore2");
let artnr2 = 0;
artBtn2.addEventListener("click", function () {
  textArt2.style.display = "block";
  artBtn2.innerHTML = `READ <i class="fa-solid fa-check"></i>`;
  artnr2++;
  if (artnr2 === 2) {
    artBtn2.innerHTML = "READ MORE";
    textArt2.style.display = "none";
    artnr2 = 0;
  }
});
