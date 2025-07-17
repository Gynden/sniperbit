
document.getElementById("loginBtn").addEventListener("click", async () => {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const statusDiv = document.getElementById("status");
  const balanceDiv = document.getElementById("balance");
  const balanceValue = document.getElementById("balanceValue");

  if (!email || !password) {
    statusDiv.innerText = "Preencha todos os campos.";
    statusDiv.classList.remove("hidden");
    return;
  }

  statusDiv.innerText = "Conectando...";
  statusDiv.classList.remove("hidden");

  try {
    const response = await fetch("https://iq-connect-api.vercel.app/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (data.status === "ok") {
      balanceValue.innerText = `US$ ${data.balance.toFixed(2)}`;
      balanceDiv.classList.remove("hidden");
      statusDiv.innerText = "Login realizado com sucesso!";
    } else {
      statusDiv.innerText = "Erro ao fazer login: " + data.message;
    }
  } catch (err) {
    statusDiv.innerText = "Erro na conexão com servidor.";
  }
});
