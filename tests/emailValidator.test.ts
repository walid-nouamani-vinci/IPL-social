import { emailValidator } from "../src/emailValidator";

describe("Email validation", () => {
    const emailValidation = new emailValidator();
    it("should return true when given email", () => {

        const actual = emailValidation.isValidEmail("test@email.com");

        expect (actual).toBe(true);
    })

    it("should return false when given email without @", () => {

        const actual = emailValidation.isValidEmail("testemail.com");

        expect (actual).toBe(false);
    })
});