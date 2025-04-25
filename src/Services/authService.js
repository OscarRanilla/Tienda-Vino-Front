import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword ,sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";


const firebaseConfig = {

    apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGEINGSENDERID,
    appId: import.meta.env.VITE_FIREBASE_APPID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const UrlApi = import.meta.env.VITE_API_URL + '/login';

const login = async (email, password, userName) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        const idToken = await user.getIdToken();
        const response = await fetch(UrlApi, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ idToken }), // <-- enviamos también el nombre
            credentials: "include" // Es importante es linea, si no esta, no se guarda la cookie
        });
        
        const data = await response.json();
        console.log('data front:'  )
        console.log(  data)
        if (data.success) {
            // Guardar en localStorage el usuaro para luego usar en el Nabvar
            localStorage.setItem('user', JSON.stringify(data.user));

             window.location.href = "/";  //Home o Dasboard
        } else {
            console.error("En el front:", data.message);
            console.error("Error en login:", data.message);
        }
    } catch (error) {
        console.log(`Error en login: ${error}`);
    }
};

const passwordRecovery = async (email) => {
    const auth = getAuth(app);  // Asegúrate de que 'auth' esté correctamente inicializado
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Te hemos enviado un correo para restablecer tu contraseña.");
    } catch (error) {
        console.error("Error al enviar el correo de restablecimiento: ", error);
        alert("Hubo un problema al enviar el correo de restablecimiento.");
    }
};


export { login, passwordRecovery };