module.exports = {
  receiveCPF: (cpf) => {
    if (typeof cpf === "string"
      && cpf.length === 11
      && cpf !== "00000000000") {
      return cpf;
    } else {
      return false;
    }
  },

  validateCPF: (cpf) => {
    // valida o primeiro dígito
    const array1 = (cpf) =>
      (cpf.map) ? cpf.slice(0, 9) : cpf.substr(0, 9).split("");
    const sum = array1(cpf).map((value, index) =>
      parseInt(value) * (10 - index)).reduce((accumulate, item) =>
      accumulate += item);
    const firstDigit = sum % 11;
    const validFirstDigit = firstDigit === (0 || 1) ? 0 : (11 - firstDigit);

    // valida o segundo dígito
    const secondArray = (cpf) =>
      (cpf.map) ? cpf.slice(0, 10) : cpf.substr(0, 10).split("");
    const sum2 = secondArray(cpf).map((value, index) =>
      parseInt(value) * (11 - index)).reduce((accumulate, item) =>
      accumulate += item);
    const secondDigit = sum2 % 11;
    const validSecondDigit = secondDigit === (0 || 1) ? 0 : (11 - secondDigit);

    if (validFirstDigit.toString() === cpf[9] && validSecondDigit.toString() === cpf[10]) {
      return true;
    } else {
      return false;
    }
  }
};