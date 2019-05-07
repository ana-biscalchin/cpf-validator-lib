const chai = require("chai");
const expect = chai.expect;
const validator = require("../lib/validator");


describe("lib validator", () => {
  describe('Receber, verificar e retornar string', () => {
    it("should to be a string", () => {
      expect(validator.receiveCPF("00478457162")).to.be.a("string");
    }),
    it("deve ter onze digitos", () => {
      expect(validator.receiveCPF("00478457162")).to.have.lengthOf(11);
    })
  });
  describe("Deve validar conforme Receita Federal", () => {
    it("Compara os dois últimos dígitos com os resultados do validador", () => {
      expect(validator.validateCPF("00478457162")).to.equal(true);
    });
  });
});

