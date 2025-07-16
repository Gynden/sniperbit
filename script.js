
async function fazerLogin() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    try {
        const response = await fetch("https://sniperbit-backend.onrender.com/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, senha })
        });

        const data = await response.json();

        if (response.ok) {
            alert("Login feito com sucesso!");
            document.getElementById("dashboard").style.display = "block";
            buscarSaldo();
        } else {
            alert("Erro no login: " + data.mensagem);
        }
    } catch (error) {
        alert("Erro ao conectar com servidor: " + error.message);
    }
}

async function buscarSaldo() {
    try {
        const res = await fetch("https://sniperbit-backend.onrender.com/saldo");
        const data = await res.json();
        document.getElementById("saldo").innerText = "US$ " + data.saldo;
    } catch (e) {
        document.getElementById("saldo").innerText = "--";
    }
}

async function startBot(modo) {
    try {
        const response = await fetch("https://sniperbit-backend.onrender.com/operar", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ modo })
        });

        const data = await response.json();

        if (response.ok) {
            alert("Robô iniciado com sucesso!\n" + JSON.stringify(data));
        } else {
            alert("Erro ao iniciar o robô:\n" + data.mensagem);
        }
    } catch (error) {
        alert("Erro de conexão com o servidor: " + error.message);
    }
}
