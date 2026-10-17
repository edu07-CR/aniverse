const admin = require('firebase-admin');

// Pega a variável de ambiente do GitHub
const serviceAccountString = process.env.FIREBASE_SERVICE_ACCOUNT;

if (!serviceAccountString) {
    console.error("❌ ERRO: A variável FIREBASE_SERVICE_ACCOUNT não foi encontrada nos Secrets do GitHub.");
    process.exit(1);
}

let serviceAccount;
try {
    // Tenta converter a string para objeto JSON
    serviceAccount = JSON.parse(serviceAccountString);
} catch (e) {
    console.error("❌ ERRO: O JSON da chave de serviço está inválido. Verifique se você copiou o arquivo inteiro no GitHub Secrets.");
    process.exit(1);
}

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const SEU_EMAIL = "07kadurodrigues@gmail.com";

async function tornarAdmin() {
    try {
        console.log(`Buscando usuário: ${SEU_EMAIL}...`);
        const user = await admin.auth().getUserByEmail(SEU_EMAIL);
        
        console.log(`Dando permissão de admin para o UID: ${user.uid}...`);
        await admin.auth().setCustomUserClaims(user.uid, { admin: true });
        
        console.log(`✅ Sucesso! O usuário ${SEU_EMAIL} agora é administrador.`);
        process.exit(0);
    } catch (error) {
        console.error("❌ Erro ao tornar admin:", error);
        process.exit(1);
    }
}

tornarAdmin();
