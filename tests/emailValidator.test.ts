import { emailValidator } from "../src/emailValidator";

describe("Email validation", () => {
    it("should return true when given email", () => {
        const emailValidation = new emailValidator();

        const actual = emailValidation.isValidEmail("test@email.com");

        expect (actual).toBe(true);
    })

    it("should return false when given email without @", () => {
        const emailValidation = new emailValidator();

        const actual = emailValidation.isValidEmail("testemail.com");

        expect (actual).toBe(false);
    })
});