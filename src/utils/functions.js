const axios = require('axios');

module.exports = {

  getCars: function (url) {
    return axios.get(url).then(response => response.data);
  },

  filterByID(cars, id) {
    return cars.filter(car => car.id == id);
  },

  filterByColor(cars, val) {
    return cars.filter(car => car.color === val);
  },

  rando() {
    return Math.floor(Math.random() * 10) + 1;
  },

  clash(eH, oH, eA, oA) {
    while(eH > 0 || oH > 0) {
      oH -= eA;
      if (oH<= 0) return 'Elf';
      eH -= oA;
      if (eH <= 0) return 'Orc';
    }
  }

}