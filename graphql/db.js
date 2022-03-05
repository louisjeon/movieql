export const people = [
  {
    id: 0,
    name: "Nicolas",
    age: 18,
    gender: "female",
  },
  {
    id: 1,
    name: "James",
    age: 36,
    gender: "male",
  },
  {
    id: 2,
    name: "Lowky",
    age: 32,
    gender: "male",
  },
  {
    id: 3,
    name: "Rebecca",
    age: 35,
    gender: "female",
  },
  {
    id: 4,
    name: "Lilly",
    age: 22,
    gender: "female",
  },
];

export const getById = (id) => people.find((person) => id === person.id);
