// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const task_1 = inventors.filter((inventor) => inventor.year >= 1500 && inventor.year < 1600);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names

const task_2 = inventors.map((inventor) => `${inventor.first} ${inventor.last}`);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

const task_3 = inventors.sort((inventor_A, inventor_B) => inventor_A.year - inventor_B.year);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

const task_4 = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);

// 5. Sort the inventors by years lived

const task_5 = inventors.sort((inventor_A, inventor_B) => {
  const total_A = inventor_A.passed - inventor_A.year;
  const total_B = inventor_B.passed - inventor_B.year;
  return total_A < total_B ? 1 : -1;
});

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

/*
const task_6 = document.querySelectorAll(".mw-category-group ul li");
const result = [...task_6]
  .filter((thing) => thing.textContent.includes("de"))
  .map((thing) => thing.textContent);

OUTPUT
  [
    "Boulevard de l'Amiral-Bruix",
    "Boulevard des Capucines",
    "Boulevard de la Chapelle",
    "Boulevard de Clichy",
    "Boulevard de l'Hôpital",
    "Boulevard des Italiens",
    "Boulevard de la Madeleine",
    "Boulevard de Magenta",
    "Boulevard Marguerite-de-Rochechouart",
    "Boulevard de Sébastopol",
    "Boulevard de Strasbourg",
    "Boulevard de la Zone",
  ];
*/

// 7. sort Exercise
// Sort the people alphabetically by last name

const task_7 = people.sort();

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

// MDN SOLUTION

const task_8 = data.reduce((unique, current_item) => {
  /*
   * The nullish coalescing operator (??)
   * is a logical operator that returns its right-hand side operand
   * when its left-hand side operand is null or undefined,
   * and otherwise returns its left-hand side operand.
   *
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
   */
  unique[current_item] ??= 0;
  unique[current_item]++;
  return unique;
}, {});

// WES BOS SOLUTION

const task_8b = data.reduce((unique, current_item) => {
  if (!unique[current_item]) unique[current_item] = 0; // If selected item doesn't exist, then add to dictionary
  unique[current_item]++;
  return unique;
}, {});
