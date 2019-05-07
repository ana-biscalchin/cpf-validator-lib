const chai = require("chai");
const expect = chai.expect;
const validator = require("../lib/validator");

describe("lib validator", () => {
  describe("Receber, verificar e retornar string", () => {
    it("should to be a string", () => {
      expect(validator.receiveCPF("25509631058")).to.be.a("string");
    }),
    it("must be eleven digits", () => {
      expect(validator.receiveCPF("25509631058")).to.have.lengthOf(11);
    });
  }),
  describe("Casos que não devem passar", () => {
    it("should to be string", () => {
      expect(validator.receiveCPF(25509631058)).to.equal(false);
    })
    it("more than eleven digits", () => {
      expect(validator.receiveCPF("2550963105800")).to.equal(false);
    });
    it("não pode ter dígitos iguais", () => {
      expect(validator.receiveCPF("000000000000")).to.equal(false);
    });
  }),
  describe("Deve validar conforme Receita Federal", () => {
    it("Compares the last two digits with the validator results", () => {
      expect(validator.validateCPF("25509631058")).to.equal(true);
    });
    it("Compares the last two digits with the validator results - false case", () => {
      expect(validator.validateCPF("25509631059")).to.equal(false);
    });
  });
});

