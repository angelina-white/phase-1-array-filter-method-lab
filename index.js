// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

const drivers2 = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function findMatching(drivers, passedName)
{
    let driverMatch = drivers.filter(function (element) {
        return element.toUpperCase() === passedName.toUpperCase();})
    return driverMatch;
}

//console.log(findMatching(drivers, "Annette"));

function fuzzyMatch(drivers, passedName)
{
    let driverMatch = drivers.filter(function (element) {
        return element.charAt(0) === passedName.charAt(0);})
    return driverMatch;
}

//console.log(fuzzyMatch(drivers, "S"));

function matchName(drivers, passedName)
{
    let driverMatch = drivers.filter(function (element) {
        return element.name === passedName;})
    return driverMatch;
}

//console.log(matchName(drivers2, "Sally"));