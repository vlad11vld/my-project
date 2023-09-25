//bamburger-menu
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

//creatrea produselor

const baza1 = [
  {
    id: 1,
    poza: "https://s13emagst.akamaized.net/products/59283/59282810/images/res_52442bdc8306f99ac3bad59c840cf9c0.jpg?width=720&height=720&hash=7954E0425F88179F2B4EC66C9F877778",
    pret: "149.998,99 Lei",
    descriere:
      "Trotineta electrica KUGOO S1 Plus, Viteza maxima 30km/h, Autonomie maxima 25Km, Motor 350W",
  },
  {
    id: 2,
    poza: "https://s13emagst.akamaized.net/products/51244/51243179/images/res_13021c5e39a9e67c7c2c58a48861ec16.jpg?width=720&height=720&hash=F3806D7DECF24E436918AA64FA821A98",
    pret: "99.893,15 Lei",
    descriere:
      "Trotineta electrica AERIUM T350 PRO neagra, 350 W, autonomie pana la 35 km, max. 33 km/h, max. 120 kg ",
  },
  {
    id: 3,
    poza: "https://s13emagst.akamaized.net/products/56671/56670723/images/res_30dc5e1b2f83411b3488ec39ed384073.jpg?width=720&height=720&hash=2A964F9B3202DDE41D40871B5ABB1645",
    pret: "149.998,99 Lei",
    descriere:
      "Trotineta electrica AOVO M365 GO, viteza maxima de 31 km/h, distanta maxima de 25 km, motor 350 W",
  },
  {
    id: 4,
    poza: "https://s13emagst.akamaized.net/products/49868/49867489/images/res_7019d64fa6e32f65efbb502e1b40c835.jpg?width=720&height=720&hash=CAC85BBB9332EEEF2C178D3FBA1C51EF",
    pret: "99.893,15 Lei",
    descriere:
      "Trotineta electrica KUGOO KIRIN G2 Pro Electric Scooter, Viteza maxima 45km/h, Autonomie 55Km ",
  },
  {
    id: 5,
    poza: "https://s13emagst.akamaized.net/products/46358/46357237/images/res_1f553dc492d5647140b8e967af079d9c.jpg?width=720&height=720&hash=FE1D2B441F8606B6E37F607F8D440DF6",
    pret: "149.998,99 Lei",
    descriere: "Trotineta electrica RCB, R11, Pliabila, lumina colorata, LED",
  },
  {
    id: 6,
    poza: "https://s13emagst.akamaized.net/products/49298/49297234/images/res_263d756f63c6382d61e1eac40aea9416.jpg?width=720&height=720&hash=A670C0426B0F435F6AE6423C5C9861CE",
    pret: "99.893,15 Lei",
    descriere:
      "Trotineta electrica Xiaomi Electric Scooter 4 Lite, putere motor 300 W, autonomie pana la 20 Km ",
  },
  {
    id: 7,
    poza: "https://s13emagst.akamaized.net/products/48572/48571328/images/res_90408090e6867a37c905d5ff6dc59b63.jpg?width=720&height=720&hash=3C76E88F620789ED745CA853ADAD9764",
    pret: "149.998,99 Lei",
    descriere:
      "Trotineta electrica RCB, R11, Pliabila, lumina colorata, LED, pentru copii, Negru",
  },
  {
    id: 8,
    poza: "https://s13emagst.akamaized.net/products/58210/58209501/images/res_503b68ddd7e683ee99da3711b72828e8.jpg?width=720&height=720&hash=6C5B590467A6E2F4541380D75AD852CB",
    pret: "99.893,15 Lei",
    descriere:
      "Trotineta electrica, HITWAY, 800W, Viteza maxima 45km/h, 40km, Pliabila, Cu afisaj LCD, Baterie Li-Ion 10Ah ",
  },
  {
    id: 9,
    poza: "https://s13emagst.akamaized.net/products/58210/58209501/images/res_503b68ddd7e683ee99da3711b72828e8.jpg?width=720&height=720&hash=6C5B590467A6E2F4541380D75AD852CB",
    pret: "99.893,15 Lei",
    descriere: "Trotienta electrica AOVO PRO, 31KM/H, 350W, Negru ",
  },
  {
    id: 10,
    poza: "https://s13emagst.akamaized.net/products/58210/58209501/images/res_503b68ddd7e683ee99da3711b72828e8.jpg?width=720&height=720&hash=6C5B590467A6E2F4541380D75AD852CB",
    pret: "99.893,15 Lei",
    descriere:
      "Trotineta electrica Breckner BK90129 TE 120-2.6-N, motor 120 W, autonomie 5 km, neagra",
  },
  {
    id: 11,
    poza: "https://s13emagst.akamaized.net/products/58210/58209501/images/res_503b68ddd7e683ee99da3711b72828e8.jpg?width=720&height=720&hash=6C5B590467A6E2F4541380D75AD852CB",
    pret: "99.893,15 Lei",
    descriere:
      "Trotineta electrica RCB, 4 trepte de viteza, 350w, 7.8AH, 25km/h, Negru",
  },
  {
    id: 12,
    poza: "https://s13emagst.akamaized.net/products/57394/57393376/images/res_66e852cce0bdfc71cf573202e4cbad4d.jpg?width=720&height=720&hash=D46F858AD78C78015B6497099AAF8D83",
    pret: "99.893,15 Lei",
    descriere:
      "Trotineta Electrica RYDE 200 Super Teen, 200W/24V/4Ah, Viteza maxima 20km/h, negru ",
  },
];

const baza2 = [
  {
    id: 1,
    poza: "https://s13emagst.akamaized.net/products/2725/2724170/images/res_0b1b39f9482e39b49124141c910e5501.jpg?width=720&height=720&hash=C4DEF9609AB6DDB8DE553A496CE22595",
    pret: "200 lei",
    descriere: "Casca de bicicleta M-WAVE, DOWNHILL ALL IN 1, Negru, M",
  },
  {
    id: 2,
    poza: "https://s13emagst.akamaized.net/products/58460/58459592/images/res_f8852a7b825ff8631bea49452294806b.jpg?width=720&height=720&hash=50FE3A98C1A18A28506084A1882E0D8E",
    pret: "223 lei",
    descriere:
      "Casca protectie copii, full face, bicicleta, scooter, skateboard, patine, sistem de reglare, marimea S (52-56 cm)",
  },
  {
    id: 3,
    poza: "https://s13emagst.akamaized.net/products/54571/54570436/images/res_8f0f0b7c98ee935b84a35eb2be7a9f80.jpg?width=720&height=720&hash=CBB7E66FFD7735353995257B49A03575",
    pret: "120 lei",
    descriere:
      "Casca protectie bicicleta, aerodinamica, viziera magnetica detasabila, stop led incorporat",
  },
  {
    id: 4,
    poza: "https://s13emagst.akamaized.net/products/2725/2724170/images/res_0b1b39f9482e39b49124141c910e5501.jpg?width=720&height=720&hash=C4DEF9609AB6DDB8DE553A496CE22595",
    pret: " 295 Lei",
    descriere:
      "Casca de bicicleta M-WAVE, DOWNHILL ALL IN 1, Negru, L(58-62 cm)",
  },
  {
    id: 5,
    poza: "https://s13emagst.akamaized.net/products/50120/50119317/images/res_0581afdb3718c4b02aa8e3bd21fb622a.jpg?width=720&height=720&hash=0BFA8CC504B7139C3151C1CC5358F9B3",
    pret: " 591 lei",
    descriere: "Casca full face bicicleta, 7IDP M1, L 59 - 60cm, negru, ABS",
  },
  {
    id: 6,
    poza: "https://s13emagst.akamaized.net/products/3349/3348458/images/res_2b58aaa2bfece2d146f61763fdc6d018.jpg?width=720&height=720&hash=B16BB339315A3663B415A176D8A4D11D",
    pret: "70 lei",
    descriere: "Casca ciclism X Fact X10, unisex, gri, marime L (57-62)",
  },
  {
    id: 7,
    poza: "https://s13emagst.akamaized.net/products/22006/22005553/images/res_5fb2a09894bfe27f84bdcf5c019e41ae.jpg?width=720&height=720&hash=5DC6C7D38ACC55AA0EF297E845A63D7A",
    pret: "300 lei",
    descriere: "Casca Force Downhill Junior Negru Lucios S-M",
  },
  {
    id: 8,
    poza: "https://s13emagst.akamaized.net/products/56251/56250140/images/res_769b22f9e08308cf4e9f093d241291c2.png?width=720&height=720&hash=E62F4329107114941CD1AC3E7F4C9A66",
    pret: "800 lei",
    descriere: "Casca pentru bicicleta, O'neal, Plastic, Negru, XS",
  },
  {
    id: 9,
    poza: "https://s13emagst.akamaized.net/products/58071/58070679/images/res_19be592b1bc243ef87bf940338a7691f.jpg?width=720&height=720&hash=0688EA435A07FC949B67062285AA2803",
    pret: "600 lei",
    descriere:
      " Casca full face bicicleta, 7IDP M1, M 57 - 58cm, Portocaliu, ABS",
  },
  {
    id: 10,
    poza: "https://s13emagst.akamaized.net/products/28484/28483791/images/res_909ae8f88268f1b648b8dea6b12e5527.jpg?width=720&height=720&hash=CFF38562B00D1F57352748ACD1927B74",
    pret: "300 lei",
    descriere: "Casca Force Downhill Junior Alb Lucios S-M",
  },
  {
    id: 11,
    poza: "https://s13emagst.akamaized.net/products/3349/3348458/images/res_2b58aaa2bfece2d146f61763fdc6d018.jpg?width=720&height=720&hash=B16BB339315A3663B415A176D8A4D11D",
    pret: "70 lei",
    descriere: "Casca ciclism X Fact X10, unisex, gri, marime L (57-62)",
  },
  {
    id: 12,
    poza: "https://s13emagst.akamaized.net/products/22006/22005553/images/res_5fb2a09894bfe27f84bdcf5c019e41ae.jpg?width=720&height=720&hash=5DC6C7D38ACC55AA0EF297E845A63D7A",
    pret: "300 lei",
    descriere: "Casca Force Downhill Junior Negru Lucios S-M",
  },
];

const baza3 = [
  {
    id: 1,
    poza: "https://s13emagst.akamaized.net/products/36167/36166030/images/res_45308214d142a277805c5d04e5101809.jpg?width=720&height=720&hash=D520DFDB56799A9D3675A07FBA5D2B54",
    pret: "50 lei",
    descriere:
      "Cauciuc plin de 8 x 1/2 x 2 sau 8,5 x 2 cu gauri, pentru Trotineta electrica Xiaomi M 365, Kugoo M2 Pro",
  },
  {
    id: 2,
    poza: "https://s13emagst.akamaized.net/products/48973/48972490/images/res_879502e6dbd162c8ad0f6326d708357e.jpg?width=720&height=720&hash=8102D367C6B8C7E983C4BD0FF5958095",
    pret: "30 lei",
    descriere:
      "Incarcator trotineta electrica, Compatibil cu Xiaomi M365, Negru",
  },
  {
    id: 3,
    poza: "https://s13emagst.akamaized.net/products/29130/29129960/images/res_87216fa2eaee358e56ddcda2e7180917.jpg?width=720&height=720&hash=92DA897265E89AD51F9235E5AFFFF29F",
    pret: "20 lei",
    descriere: "Camera cauciuc 8.5 inch trotineta electrica pentru Xiaomi M365",
  },
  {
    id: 4,
    poza: "https://s13emagst.akamaized.net/products/44114/44113034/images/res_6efe5f0af09c00bc50eba5787597b54d.jpg?width=720&height=720&hash=9E9765FA1B23DE3B0F64EEBEF0535A5D",
    pret: "80 lei",
    descriere: "Geanta de transport trotineta electrica Wild Man GS8 3L",
  },
  {
    id: 5,
    poza: "https://s13emagst.akamaized.net/products/48923/48922082/images/res_0c416c6a1e71c41184a3883f8f11cad1.jpg?width=720&height=720&hash=70827834997A53535E453BE698B96B9B",
    pret: "120 lei",
    descriere:
      "Set capace protectie roti trotineta electrica, ABS/Policarbonat, Compatibil cu Xiaomi M365, Rosu/Negru",
  },
  {
    id: 6,
    poza: "https://s13emagst.akamaized.net/products/48923/48922063/images/res_a518d8b3f311654b82fbfff931c7e713.jpg?width=720&height=720&hash=71FEE53BE16FED0C9FF9A4FFCED3F889",
    pret: "15 lei",
    descriere:
      "Maneta acceleratie trotineta electrica, Plastic/Aluminiu, Compatibil cu Xiaomi M365/Pro, 65x45x28mm, Negru",
  },
  {
    id: 1,
    poza: "https://s13emagst.akamaized.net/products/36167/36166030/images/res_45308214d142a277805c5d04e5101809.jpg?width=720&height=720&hash=D520DFDB56799A9D3675A07FBA5D2B54",
    pret: "50 lei",
    descriere:
      "Cauciuc plin de 8 x 1/2 x 2 sau 8,5 x 2 cu gauri, pentru Trotineta electrica Xiaomi M 365, Kugoo M2 Pro",
  },
  {
    id: 2,
    poza: "https://s13emagst.akamaized.net/products/48973/48972490/images/res_879502e6dbd162c8ad0f6326d708357e.jpg?width=720&height=720&hash=8102D367C6B8C7E983C4BD0FF5958095",
    pret: "30 lei",
    descriere:
      "Incarcator trotineta electrica, Compatibil cu Xiaomi M365, Negru",
  },
  {
    id: 3,
    poza: "https://s13emagst.akamaized.net/products/29130/29129960/images/res_87216fa2eaee358e56ddcda2e7180917.jpg?width=720&height=720&hash=92DA897265E89AD51F9235E5AFFFF29F",
    pret: "20 lei",
    descriere: "Camera cauciuc 8.5 inch trotineta electrica pentru Xiaomi M365",
  },
  {
    id: 4,
    poza: "https://s13emagst.akamaized.net/products/44114/44113034/images/res_6efe5f0af09c00bc50eba5787597b54d.jpg?width=720&height=720&hash=9E9765FA1B23DE3B0F64EEBEF0535A5D",
    pret: "80 lei",
    descriere: "Geanta de transport trotineta electrica Wild Man GS8 3L",
  },
  {
    id: 5,
    poza: "https://s13emagst.akamaized.net/products/48923/48922082/images/res_0c416c6a1e71c41184a3883f8f11cad1.jpg?width=720&height=720&hash=70827834997A53535E453BE698B96B9B",
    pret: "120 lei",
    descriere:
      "Set capace protectie roti trotineta electrica, ABS/Policarbonat, Compatibil cu Xiaomi M365, Rosu/Negru",
  },
  {
    id: 6,
    poza: "https://s13emagst.akamaized.net/products/48923/48922063/images/res_a518d8b3f311654b82fbfff931c7e713.jpg?width=720&height=720&hash=71FEE53BE16FED0C9FF9A4FFCED3F889",
    pret: "15 lei",
    descriere:
      "Maneta acceleratie trotineta electrica, Plastic/Aluminiu, Compatibil cu Xiaomi M365/Pro, 65x45x28mm, Negru",
  },
];

const sect4 = document.getElementById("products");

function creare_produse(baza_date, container_parinte) {
  // Functie reutilizabila de creare a produselor si de introducere a lor intr-un anumit container parinte la alegere cand se apeleaza functia.

  for (const obiect of baza_date) {
    //crearea elementelor produselor din baza date

    const div_produs = document.createElement("div");
    div_produs.classList = "product";
    const fig_produs = document.createElement("figure");
    const img_produs = document.createElement("img");
    const h2_produs = document.createElement("h3");
    const parag_produs = document.createElement("p");
    const buton_produs = document.createElement("button");
    const ancora_produs = document.createElement("a");
    const favorit_produs = document.createElement("p");
    const titlu_prod = document.createElement("h2");
    titlu_prod.classList = "black-title";
    titlu_prod.innerHTML = "trotinete";
    favorit_produs.innerHTML = '<i class="fa-regular fa-heart"></i>';
    favorit_produs.classList = "fav";
    buton_produs.innerHTML = "Adauga in Cos";
    fig_produs.appendChild(img_produs);
    ancora_produs.appendChild(fig_produs);

    div_produs.appendChild(ancora_produs);
    div_produs.appendChild(h2_produs);
    div_produs.appendChild(parag_produs);
    div_produs.appendChild(buton_produs);
    div_produs.appendChild(favorit_produs);
    //adaugarea atributelor la fiecare element din pagina
    img_produs.setAttribute("src", obiect.poza);

    ancora_produs.setAttribute("href", "");
    h2_produs.innerHTML = obiect.descriere.slice(0, 40) + " ...";
    parag_produs.innerHTML = obiect.pret;

    container_parinte.appendChild(div_produs);
  }
}
const sectiune_titlu = document.getElementById("prod_title");
function creare_titlu(titlu, container_parinte) {
  const titlu_prod = document.createElement("h2");
  titlu_prod.classList = "black-title";
  titlu_prod.innerHTML = titlu;
  container_parinte.appendChild(titlu_prod);
}
creare_titlu("Produse", sectiune_titlu);
creare_produse(baza2, sect4);
creare_produse(baza1, sect4);
creare_produse(baza3, sect4);
const filtru1 = document.getElementById("fil-1");

filtru1.addEventListener("click", function () {
  sectiune_titlu.innerHTML = "";
  sect4.innerHTML = "";
  creare_titlu("Trotinete electrice", sectiune_titlu);
  creare_produse(baza1, sect4);
});
const filtru2 = document.getElementById("fil-2");

filtru2.addEventListener("click", function () {
  sectiune_titlu.innerHTML = "";
  sect4.innerHTML = "";
  creare_titlu("Echipamente de protectie", sectiune_titlu);
  creare_produse(baza2, sect4);
});
const filtru3 = document.getElementById("fil-3");

filtru3.addEventListener("click", function () {
  sectiune_titlu.innerHTML = "";
  sect4.innerHTML = "";
  creare_titlu("Accesorii", sectiune_titlu);
  creare_produse(baza3, sect4);
});
const haerts = document.querySelectorAll(".fav");
let nrinim = 0;
const inim = document.querySelector(".inima");
haerts.forEach((h) => {
  h.addEventListener("click", function () {
    h.innerHTML = `<i class="fa-solid fa-heart"></i>`;
    nrinim++;
    inim.innerHTML = ` <b
    ><a href="/splash/index.html" class="home"
      ><i class="fa-solid fa-heart">${nrinim}</i></a
  ></b> `;
  });
});
