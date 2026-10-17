const admin = require('firebase-admin');

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const SEU_EMAIL = "07kadurodrigues@gmail.com";

async function tornarAdmin() {
    try {
        const user = await admin.auth().getUserByEmail(SEU_EMAIL);
        await admin.auth().setCustomUserClaims(user.uid, { admin: true });
        console.log(`✅ Sucesso! O usuário ${SEU_EMAIL} agora é administrador.`);
        process.exit(0);
    } catch (error) {
        console.error("❌ Erro ao tornar admin:", error);
        process.exit(1);
    }
}

tornarAdmin();
