// Stolen from https://stackoverflow.com/a/31615643
const appendSuffix = n => {
  var s = ['th', 'st', 'nd', 'rd'],
    v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

module.exports = function dateFilter(value) {
  const dateObject = new Date(value);

  const months = [
    'Jan', 
    'Fev', 
    'Mar', 
    'Abr', 
    'Mai', 
    'Jun', 
    'Jul', 
    'Ago', 
    'Set', 
    'Out', 
    'Nov', 
    'Dez'
  ];

  return `${dateObject.getDate()}/${months[dateObject.getMonth()]}/${dateObject.getFullYear()}`;
};
