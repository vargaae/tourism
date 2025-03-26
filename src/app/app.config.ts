import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient(), provideFirebaseApp(() => initializeApp({ projectId: "fir-demo-57c5b", appId: "1:324370600645:web:372ec77189de0da28756ac", databaseURL: "https://fir-demo-57c5b-default-rtdb.firebaseio.com", storageBucket: "fir-demo-57c5b.appspot.com", apiKey: "AIzaSyDe2xCyShHw6uiDua_UBi7oqXNGDloJris", authDomain: "fir-demo-57c5b.firebaseapp.com", messagingSenderId: "324370600645", measurementId: "G-DVJBQPJX6L" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase())]
};
