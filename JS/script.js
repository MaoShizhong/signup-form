const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#password-confirm");
const matchError = document.querySelector("#match-error");
const createAccount = document.querySelector("#create-account");

password.addEventListener("input", checkPassword);
passwordConfirm.addEventListener("input", checkPassword);

createAccount.addEventListener("click", alertIfPasswordNotMatching)

function checkPassword()
{
    if (passwordConfirm.value !== "")
    {
        if (passwordConfirm.value === password.value)
        {
            passwordConfirm.classList.add("valid");
            passwordConfirm.classList.remove("invalid");
        }
        else
        {
            passwordConfirm.classList.add("invalid");
            passwordConfirm.classList.remove("valid");
        }
    }
    return;
}

function alertIfPasswordNotMatching(event)
{
    if (passwordConfirm.classList.contains("invalid"))
    {
        event.preventDefault();
        matchError.classList.remove("hidden");
    }
    else
    {
        matchError.classList.add("hidden");
    }
    return;
}