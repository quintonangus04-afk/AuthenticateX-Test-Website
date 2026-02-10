// Locating key elements

const emailInput = document.getElementById('emailInput');
const passInput = document.getElementById('passInput');
const signUpForm = document.getElementById('signUpForm');

// sending data to backend

signUpForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // prevents the page from auto reloading from submittion

    const email = emailInput.value.trim(); // trim() removes spaces which would cause errors when sendding emails
    const password = passInput.value;

    const signUpRequest = await fetch("https://authenticatex-server-main-439442280694.europe-west1.run.app/signUpRequest", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    });

    const signUpResponse = await signUpRequest.json();

    if (signUpResponse.outcome === "success, may proccede to email authentication") {
        localStorage.setItem("pendingEmail", email)
        window.location.href = "verify.html"
    } else {
        console.log("An unkonwn error has ocoured, sorry about that.")
    }

    console.log(signUpResponse)
});