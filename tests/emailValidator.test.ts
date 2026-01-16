import { emailValidator } from "../src/emailValidator";

describe("Email validation", () => {
    const emailValidation = new emailValidator();

    it("should return true when given valid email", () => {

        const actual = emailValidation.isValidEmail("test@email.com");

        expect (actual).toBe(true);
    })

    it("should return false when given email without @", () => {

        const actual = emailValidation.isValidEmail("testemail.com");

        expect (actual).toBe(false);
    })

    it("should return false when given email with space", () => {

        const actual = emailValidation.isValidEmail("test@ email.com");

        expect (actual).toBe(false);
    })

    it("should return false when given email with nothing before @", () => {

        const actual = emailValidation.isValidEmail("@email.com");

        expect (actual).toBe(false);
    })
});