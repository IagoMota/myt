const getUserCredentials = () => {
    const credentials = [
        document.querySelector("#userName").value,
        document.querySelector("#userPassword").value
    ]
    return credentials;
}
const areCredentialsCorrect = (credentialsArray) => {
    const userName = credentialsArray[0];
    const userPassword = credentialsArray[1];

    if (userName === "admin" && userPassword === "admin123") {
        return true;
    } else {
        return false;
    }
}
const allowLogin = (booleanValue) => {
    if (booleanValue === true) {
        location.assign("./worker.html")
    } else {
        window.alert("Erro: senha ou usuário invalido")
    }
}
const activateLoginButton = () => {
    const loginButton = document.querySelector("#login");
    loginButton.addEventListener("click", () => {
        const userCredentials = getUserCredentials();
        const verifiedCredentials = areCredentialsCorrect(userCredentials)
        allowLogin(verifiedCredentials);
    })
}
const activateLoginSystem = () => {
    const loginToggle = document.querySelector("#login-toggle")

    loginToggle.addEventListener("click", () => {
        const loginOptions = document.querySelector("#login-options")
        const loginFieldsContainer = document.querySelector(".login-fields-container");
        loginOptions.style.display = "none"
        loginFieldsContainer.style.display = "flex"
        activateLoginButton()
    })

}
export default activateLoginSystem;