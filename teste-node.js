// teste-node.js
const os = require("os"); // Importa módulo do Sistema Operacional

console.log("=== Auditoria do Servidor ===");
console.log("Sistema:", os.type(), os.release());
console.log("Memória Livre:", (os.freemem() / 1024 / 1024).toFixed(2) + " MB");
console.log("CPUs:", os.cpus().length, "núcleos");
console.log("Usuário:", os.userInfo().username);

// Simulando uma tarefa assíncrona (comum em back-end)
setTimeout(() => {
  console.log("\n✅ Auditoria finalizada com sucesso!");
}, 2000);
