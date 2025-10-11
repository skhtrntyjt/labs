// При помощи цикла for..in перебрать объект-справочник с датами рождения и смерти людей и вернуть справочник с продолжительностью их жизни. Например:
const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};
// console.log(ages(persons));
// // {
// //   lenin: 54,
// //   mao: 83,
// //   gandhi: 79,
// //   hirohito: 88,
// // }
function ages(persons) {
    var obj = {}
    for (const personsname in persons) {
       const value = persons[personsname]
             console.log(personsname, value.died - value.born) 
             obj[personsname] = value.died - value.born

    }
    return obj

}
console.log(ages(persons));