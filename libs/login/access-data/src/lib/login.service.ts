import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth, User } from 'firebase/app';
import { from, Observable } from 'rxjs';
import { FirebaseAuth } from '@angular/fire';

@Injectable()
export class LoginService {
    constructor(public afAuth: AngularFireAuth) {
        this.afAuth.authState.subscribe((user: any) => {
            console.warn('authState', user);
        })
    }

    loginWithGoogle(): Observable<auth.UserCredential> {
        return from(this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()));
    }
}