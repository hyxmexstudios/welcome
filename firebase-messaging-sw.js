// Importar el script de Firebase
importScripts('https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/11.0.2/firebase-messaging.js');

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBISGP2J3zWVRF7fR-7IWL4O0C6wLSuaWk",
  authDomain: "codigosojalafuncione.firebaseapp.com",
  projectId: "codigosojalafuncione",
  storageBucket: "codigosojalafuncione.appspot.com",
  messagingSenderId: "42021843470",
  appId: "1:42021843470:web:22e0ab25a65be9e064825f",
  measurementId: "G-7WP5JVZM7J"
};

// Inicializar Firebase en el Service Worker
firebase.initializeApp(firebaseConfig);

// Inicializar el servicio de mensajería
const messaging = firebase.messaging();

// Manejar mensajes en segundo plano
messaging.onBackgroundMessage((payload) => {
  console.log('Mensaje recibido en segundo plano:', payload);

  const notificationTitle = payload.notification?.title || 'Notificación';
  const notificationOptions = {
    body: payload.notification?.body || 'Tienes un nuevo mensaje',
    icon: payload.notification?.icon || '/default-icon.png' // Cambia a la ruta de tu icono
  };

  // Mostrar la notificación
  self.registration.showNotification(notificationTitle, notificationOptions);
});
