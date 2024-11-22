let clockJson = [
  {
  id: 1,
  name: 'Audemars',
  img: '../assets/clocks/audemars.png',
  description: 'Audemars Piguet is a Swiss luxury watch brand, famous for its innovation and sophisticated design. Founded in 1875, the brand is recognized for its ability to create complex mechanical movements and the creation of the iconic Royal Oak model, launched in 1972. Audemars Piguet combines tradition and avant-garde, offering watches of high precision and refined style.',
  },

  {
  id: 2,
  name: 'Omega',
  img: '../assets/clocks/omega.png',
  description: "Omega is one of the most renowned brands in the world of watchmaking, founded in 1848 in Switzerland. Famous for its precision and innovation, Omega is known for being the official choice of NASA's space missions, including the historic Apollo 11 mission, which took man to the moon. Models such as the Speedmaster and Seamaster are icons of quality and durability.",
  },
  {
  id: 3,
  name: 'Patek',
  img: '../assets/clocks/patek.png',
  description: 'Patek Philippe is one of the most prestigious and longest-running luxury watch brands, founded in 1839. Known for excellence in mechanical watches, the brand stands out for the creation of very high quality pieces, with rare complications and refined design. Patek Philippe is synonymous with tradition, craftsmanship and innovation, and is admired by collectors around the world.',
  },
  {
  id: 4,
  name: 'Rolex',
  img: '../assets/clocks/rolex.png',
  description: 'Rolex is one of the most famous and desired luxury watch brands in the world, founded in 1905. The brand is synonymous with prestige, precision and durability. With iconic models such as the Submariner, the Daytona and the Datejust, Rolex has set a standard of excellence in design and functionality, being a benchmark in the haute horlogerie market.',
  },
  {
  id: 5,
  name: 'TAG Heuer',
  img: '../assets/clocks/tagheuer.png',
  description: 'TAG Heuer is a Swiss brand recognized for its innovation in timekeeping and sports design. Founded in 1860, TAG Heuer has a strong connection with motorsport, being famous for creating precision chronographs for drivers and racing teams. The brand is known for its high-performance watches, such as the Monaco and Carrera, combining style and technology.',
  },
];

const select = e => document.querySelector(e)
let currentIndex = 0;

function updateClockDisplay() {
  select('#clockImage').src = clockJson[currentIndex].img;
  select('#clockName').textContent = clockJson[currentIndex].name;
  select('#clockDescription').textContent = clockJson[currentIndex].description;
}

select('.next-btn').addEventListener('click', () => {
  currentIndex = (currentIndex + 1)
  updateClockDisplay();
});

select('.prev-btn').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + clockJson.length) % clockJson.length;
  updateClockDisplay();
});

window.onload = updateClockDisplay;