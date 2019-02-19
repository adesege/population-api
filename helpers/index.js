const calculateTotalResident = (numberOfMaleResidents, numberOfFemaleResident) => (
  parseInt(numberOfMaleResidents, 10) + parseInt(numberOfFemaleResident, 10)
);

module.exports = {
  calculateTotalResident,
};
