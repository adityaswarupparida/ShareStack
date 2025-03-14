// Function to generate random string as hash
export function generateRandomString(length: number): string {
    let randomString = '';
    const options = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for (let index = 0; index < options.length; index++) {
        randomString += options[Math.floor(options.length * Math.random())];
        
    }
    return randomString;
}