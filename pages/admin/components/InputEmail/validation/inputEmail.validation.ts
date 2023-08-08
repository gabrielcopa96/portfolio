//
export function validateEmail(email: string): boolean {
    
    const regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/
    
    return regexEmail.test(email);
    
}