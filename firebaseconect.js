importScripts('https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/11.0.2/firebase-messaging.js');

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBISGP2J3zWVRF7fR-7IWL4O0C6wLSuaWk",
    authDomain: "codigosojalafuncione.firebaseapp.com",
    projectId: "codigosojalafuncione",
    storageBucket: "codigosojalafuncione.firebasestorage.app",
    messagingSenderId: "42021843470",
    appId: "1:42021843470:web:22e0ab25a65be9e064825f",
    measurementId: "G-7WP5JVZM7J"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Recibió mensaje en segundo plano ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/firebase-logo.png'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
