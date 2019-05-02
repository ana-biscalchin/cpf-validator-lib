const chai = require("chai");
const expect = chai.expect;
const validator = require("../lib/validator");


describe("lib validator", () => {
  describe('Receber, verificar e retornar string', () => {
    it("should to be a number", () => {
      expect(validator.receiveCPF(00478457162)).to.be.a("number");
    });
    it("deve ter onze digitos", () => {
      expect(validator.receiveCPF("00478457162")).to.have.lengthOf(11);
    });
  });
  describe('validação', () => {
    it("deve ser válido", () => {
      expect(validator.validateCPF(00478457162)).to.eql(true);
    });
  });
});

