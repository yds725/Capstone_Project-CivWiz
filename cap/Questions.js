const data = [
  {
    Question: "In inches, how high is a table-tennis net?",
    A: "There is no standard",
    B: "4 inches",
    C: "5 inches",
    D: "6 inches",
    Answer: "D"
  },
  {
    Question: "Which Italian football team has the nickname I Lupi which translates as The Wolves?",
    A: "Fiorentina",
    B: "Parma",
    C: "Roma",
    D: "Genoa",
    Answer: "C"
  },
  {
    Question: "Whose ear did Mike Tyson bite in 1997?",
    A: "Edward Teech",
    B: "Rashad Evans",
    C: "Evander Hockle",
    D: "Evander Holyfield",
    Answer: "D"
  },
  {
    Question: "In a rugby scrum, which player is responsible for controlling the ball with their feet inside the scrum?",
    A: "Fullback",
    B: "Tighthead Prop",
    C: "Hooker",
    D: "Rowler",
    Answer: "D"
  },
  {
    Question: "How many times has the host nation won the football World Cup?",
    A: "3",
    B: "4",
    C: "5",
    D: "6",
    Answer: "D"
  },
  {
    Question: "How deep is the atmosphere that surrounds the Earth?",
    A: "About 50 miles",
    B: "About 100 miles",
    C: "About 400 miles",
    D: "About 1000 miles",
    Answer: "C"
  },
  {
    Question: "The currents of which ocean produce the El Nino effect?",
    A: "Indian",
    B: "Atlantic",
    C: "Pacific",
    D: "Arctic",
    Answer: "C"
  },
  {
    Question: "What is the highest point in Antarctica?",
    A: "Mount Coman",
    B: "Mount Erebus",
    C: "Mount Jackson",
    D: "Mount Mino",
    Answer: "C"
  },
  {
    Question: "Which country shares borders with Egypt, Jordan, Lebanon and Syria?",
    A: "Iraq",
    B: "Israel",
    C: "Oman",
    D: "Saudi Arabia",
    Answer: "B"
  },
  {
    Question: "Which river flows through the Polish capital, Warsaw?",
    A: "Neisse",
    B: "Oder",
    C: "Vistula",
    D: "Warta",
    Answer: "C"
  },
  {
    Question: "How many chambers does a normal human heart have?",
    A: "2",
    B: "4",
    C: "6",
    D: "8",
    Answer: "B"
  },
  {
    Question: "In human body, where is the humerus bone?",
    A: "Upper leg",
    B: "Lower leg",
    C: "Upper arm",
    D: "Lower arm",
    Answer: "C"
  },
  {
    Question: "Which chemist is best known for the process of heating liquids to destroy harmful organisms?",
    A: "Michael Faraday",
    B: "Primo Levi",
    C: "Alfred Nobel",
    D: "Louis Pasteur",
    Answer: "D"
  },
  {
    Question: "What colour does blue litmus paper turn under acidic conditions?",
    A: "Black",
    B: "Green",
    C: "Red",
    D: "Yellow",
    Answer: "C"
  },
  {
    Question: "What is created in space upon the collapse of a neutron star?",
    A: "Asteroids",
    B: "Black Hole",
    C: "Galaxy",
    D: "Solar System",
    Answer: "B"
  },
  {
    Question: "Which director won a special achievement Oscar for his work on the 1995 Pixar film 'Toy Story'",
    A: "Brad Bird",
    B: "Mike Judge",
    C: "John Lasseter",
    D: "Trey Parker",
    Answer: "C"
  },
  {
    Question: "What is circling the actual golden globe on the Golden Globe statuette?",
    A: "A strip of film",
    B: "An airplane",
    C: "A movie ticket",
    D: "A film script",
    Answer: "A"
  },
  {
    Question: "The 2008 film The Curious Case of Benjamin Button is based on the short story by which author?",
    A: "Isaac Asimov",
    B: "Roald Dahl",
    C: "Daphne du Maurier",
    D: "F Scott Fitzgerald",
    Answer: "D"
  },
  {
    Question: "What nationality is Thomas Keneally, whose novel Schindler's Ark became the 1993 film Schindler's List?",
    A: "American",
    B: "Australian",
    C: "Irish",
    D: "South African",
    Answer: "B"
  },
  {
    Question: "The 1984 film Children of the Corn is based on a short story from which Stephen King collection?",
    A: "Blood and Smoke",
    B: "Different Seasons",
    C: "Night Shift",
    D: "Skeleton Crew",
    Answer: "C"
  },
  {
    Question: "Which religious leader was assassinated on 4th April 1968?",
    A: "Jesse Jackson",
    B: "Martin Luther King",
    C: "Mother Theresa",
    D: "Pope Paul",
    Answer: "B"
  },
  {
    Question: "What nationality was the philosopher and mathematician, Pythagoras?",
    A: "Greek",
    B: "Persian",
    C: "Roman",
    D: "Trojan",
    Answer: "A"
  },
  {
    Question: "Between 1918 and 1939, how did people refer to World War 1?",
    A: "The Big War",
    B: "The Continental War",
    C: "The European War",
    D: "The Great War",
    Answer: "D"
  },
  {
    Question: "What was the name of the regime in Germany between 1918 and 1933?",
    A: "North German Confederation",
    B: "Second German Empire",
    C: "Third Reich",
    D: "Weimar Republic",
    Answer: "D"
  },
  {
    Question: "How was the 'Kingdom of Serbs, Croats and Slovenes' re-named in 1929?",
    A: "Bulgaria",
    B: "Czechoslovakia",
    C: "Romania",
    D: "Yugoslavia",
    Answer: "D"
  },
  {
    Question: "Pablo Picasso was born in 1881 in which Spanish city?",
    A: "Madrid",
    B: "Malaga",
    C: "Marbella",
    D: "Murcia",
    Answer: "B"
  },
  {
    Question: "The English artist George Stubbs, who died in 1806, is best remembered for his paintings of what?",
    A: "Cats",
    B: "Deer",
    C: "Dogs",
    D: "Horses",
    Answer: "D"
  },
  {
    Question: "Hans Holbein the Younger was criticized by Henry VIII for painting a flattering portrait of whom?",
    A: "Anne Boleyn",
    B: "Anne of Cleves",
    C: "Catherine Howard",
    D: "Jane Seymour",
    Answer: "B"
  },
  {
    Question: "Leonardo da Vinci's famous Mona Lisa was painted on what type of wood?",
    A: "Elm",
    B: "Mahogany",
    C: "Poplar",
    D: "Walnut",
    Answer: "C"
  },
  {
    Question: "How did Vincent van Gogh die?",
    A: "He gassed himself",
    B: "He poisoned himself",
    C: "He shot himself",
    D: "He stabbed himself",
    Answer: "C"
  }
];