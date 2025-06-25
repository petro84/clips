import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth'
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: 'AIzaSyA6LZSrLu-u5CAiWgEpmORIxu-pOoyyGv0',
        authDomain: 'clips-v2-fbfa2.firebaseapp.com',
        projectId: 'clips-v2-fbfa2',
        storageBucket: 'clips-v2-fbfa2.firebasestorage.app',
        messagingSenderId: '1015204087006',
        appId: '1:1015204087006:web:726a2feca629e5e5d3ae4f',
        measurementId: 'G-T4WELNL19J',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};
