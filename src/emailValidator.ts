export class emailValidator {

    isValidEmail(email: string): boolean {
        const atIndex = email.indexOf("@");
        if (atIndex <= 0) return false;

        if (email.includes(" ")) return false;
        
        const parts = email.split("@");
        if (parts.length !== 2) return false;
        return true;
    }
}