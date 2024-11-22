let clockJson = [
  {
  id: 1,
  name: 'Audemars',
  img: '../assets/clocks/audemars.png',
  description: 'A Audemars Piguet é uma marca de relógios de luxo suíços, famosa por sua inovação e design sofisticado. Fundada em 1875, a marca é reconhecida pela sua habilidade em criar movimentos mecânicos complexos e pela criação do icônico modelo Royal Oak, lançado em 1972. A Audemars Piguet combina tradição e vanguarda, oferecendo relógios de alta precisão e estilo refinado.',
  },

  {
  id: 2,
  name: 'Omega',
  img: '../assets/clocks/omega.png',
  description: 'A Omega é uma das marcas mais renomadas do mundo da relojoaria, fundada em 1848 na Suíça. Famosa por sua precisão e inovação, a Omega é conhecida por ser a escolha oficial das missões espaciais da NASA, incluindo a histórica missão Apollo 11, que levou o homem à lua. Modelos como o Speedmaster e o Seamaster são ícones de qualidade e durabilidade.',
  },
  {
  id: 3,
  name: 'Patek',
  img: '../assets/clocks/patek.png',
  description: 'Patek Philippe é uma das marcas de relógios de luxo mais prestigiosas e antigas, fundada em 1839. Conhecida pela excelência em relógios mecânicos, a marca se destaca pela criação de peças de altíssima qualidade, com complicações raras e design refinado. A Patek Philippe é sinônimo de tradição, artesanato e inovação, sendo admirada por colecionadores ao redor do mundo.',
  },
  {
  id: 4,
  name: 'Rolex',
  img: '../assets/clocks/rolex.png',
  description: 'Rolex é uma das marcas de relógios de luxo mais famosas e desejadas do mundo, fundada em 1905. A marca é sinônimo de prestígio, precisão e durabilidade. Com modelos icônicos como o Submariner, o Daytona e o Datejust, a Rolex estabeleceu um padrão de excelência em design e funcionalidade, sendo uma referência no mercado de alta relojoaria.',
  },
  {
  id: 5,
  name: 'TAG Heuer',
  img: '../assets/clocks/tagheuer.png',
  description: 'TAG Heuer é uma marca suíça reconhecida por sua inovação em cronometragem e design esportivo. Fundada em 1860, a TAG Heuer tem uma forte ligação com o automobilismo, sendo famosa por criar cronógrafos de precisão para pilotos e equipes de corrida. A marca é conhecida por seus relógios de alto desempenho, como o Monaco e o Carrera, combinando estilo e tecnologia.',
  },
];


let currentIndex = 0;

function updateClockDisplay() {
  document.getElementById('clockImage').src = clockJson[currentIndex].img;
  document.getElementById('clockName').textContent = clockJson[currentIndex].name;
  document.getElementById('clockDescription').textContent = clockJson[currentIndex].description;
}

function nextClock() {
  currentIndex = (currentIndex + 1) % clockJson.length;
  updateClockDisplay();
}

function prevClock() {
  currentIndex = (currentIndex - 1 + clockJson.length) % clockJson.length;
  updateClockDisplay();
}

window.onload = updateClockDisplay;