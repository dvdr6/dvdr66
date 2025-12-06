
const validCredentials = [
    {
        username: "admin",
        password: "admin123"
    },
    {
        username: "user1",
        password: "password1"
    },
    {
        username: "user2",
        password: "password2"
    }
    
];


function validateCredentials(username, password) {
    return validCredentials.some(
        cred => cred.username === username && cred.password === password
    );
}