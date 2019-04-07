import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth, User } from 'firebase/app';
import { from, Observable } from 'rxjs';

@Injectable()
export class LoginService {
    constructor(
        public afAuth: AngularFireAuth
    ) { }

    listenAuth(): Observable<User> {
        return this.afAuth.authState;
    }

    loginWithGoogle(): Observable<auth.UserCredential> {
        return from(this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()));
    }
}