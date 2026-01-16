export class emailValidator {

    isValidEmail(email: string): boolean {
        const atIndex = email.indexOf("@");
        if (atIndex <= 0) return false;

        if (email.includes(" ")) return false;
                
        return true;
    }
}