const email = localStorage.getItem("pendingEmail");
const codeInput = document.getElementById("codeInput");

codeInput.addEventListener("keydown", async (e) => {
    if (e.key === "Enter") {
        code = codeInput.value;

        verifyCode = await fetch("https://authenticatex-server-main-439442280694.europe-west1.run.app/verifyCode", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
            code: code,
            email: email
            })
        })

        const response = await verifyCode.json()

        if (response.success === "true") {
            console.log("Code verifed successfully")
            window.location.href = "dashboard.html"
        } else {
            console.log("Unknown error ocoured")
        }
    }
})

    



