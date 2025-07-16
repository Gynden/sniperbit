
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
      alert("✅ Login realizado com sucesso!");
      document.getElementById("login").style.display = "none";
      document.getElementById("dashboard").style.display = "block";
      buscarSaldo();
    } else {
      alert("❌ Erro no login: " + (data.mensagem || "verifique os dados."));
    }
  } catch (error) {
    alert("❌ Erro de conexão: " + error.message);
  }
}

async function buscarSaldo() {
  try {
    const response = await fetch("https://sniperbit-backend.onrender.com/saldo");
    const data = await response.json();

    if (response.ok && data.saldo !== undefined) {
      document.getElementById("saldo").innerText = `R$ ${data.saldo.toFixed(2)}`;
    } else {
      document.getElementById("saldo").innerText = "Erro ao obter saldo";
    }
  } catch (error) {
    document.getElementById("saldo").innerText = "Erro na conexão";
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
      alert(`🤖 Robô iniciado no modo ${modo.toUpperCase()}`);
    } else {
      alert("Erro ao iniciar o robô: " + (data.mensagem || ""));
    }
  } catch (error) {
    alert("Erro de rede: " + error.message);
  }
}
