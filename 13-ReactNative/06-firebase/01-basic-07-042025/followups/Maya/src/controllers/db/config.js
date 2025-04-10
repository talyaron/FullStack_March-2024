"use strict";
exports.__esModule = true;
exports.storage = exports.db = exports.auth = exports.app = void 0;
var firebaseConfig = {
    apiKey: "AIzaSyDSPTgVF7hN_Qb9ZXdwJ21lfvKC1RwxWg4",
    authDomain: "whatsapp-maya.firebaseapp.com",
    projectId: "whatsapp-maya",
    storageBucket: "whatsapp-maya.firebasestorage.app",
    messagingSenderId: "924575048389",
    appId: "1:924575048389:web:6289812eefb4cbe93c06ac",
    measurementId: "G-X0YBZS3N1T"
};
// Initialize Firebase
var app = initializeApp(firebaseConfig);
exports.app = app;
// Initialize Firebase services
var auth = getAuth(app);
exports.auth = auth;
var db = getFirestore(app);
exports.db = db;
var storage = getStorage(app);
exports.storage = storage;
