import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import React from 'react';

const firebaseConfig = {
  apiKey: "AIzaSyDx_jhy8cqCACCtJCgqd7WGYHfq7iZUfdA",
  authDomain: "world-singularity.firebaseapp.com",
  projectId: "world-singularity",
  storageBucket: "world-singularity.appspot.com",
  messagingSenderId: "813844869538",
  appId: "1:813844869538:web:06d0d3e05376c691f642fb",
  measurementId: "G-LQNW8JFH10"
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage, app };