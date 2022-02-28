import { Injectable } from '@angular/core';
import { User } from 'src/app/@shared/models/user';
import { DocType } from 'src/app/@shared/enums/doc-type';
import { Role } from 'src/app/@shared/enums/role';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';

// Firebase
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users!: Observable<User[]>;
  private usersCollection: AngularFirestoreCollection<User>;

  private data = {
    fakeUsers: [
      {
        name: 'Ivan Developer',
        email: 'ivancho175@hotmail.com',
        phone: '3008923625',
        docType: DocType.CC,
        docNumber: 1234567890,
        password: 'password',
        role: Role.admin
      },
      {
        name: 'Test User',
        email: 'testing@hotmail.com',
        phone: '3234567890',
        docType: DocType.CE,
        docNumber: 9087654321,
        password: 'contraseña',
        role: Role.lawyer
      },
      {
        name: 'Test User',
        email: 'testing@hotmail.com',
        phone: '3234567890',
        docType: DocType.CC,
        docNumber: 9887654321,
        password: '12345678',
        role: Role.user
      },
      {
        name: 'Laura Gamer',
        email: 'laura_242011@hotmail.com',
        phone: '345678913',
        docType: DocType.PP,
        docNumber: 4567891230,
        password: '87654321',
        role: Role.user
      }
    ]
  }

  constructor(
    private readonly firestore: AngularFirestore,
    private fireauth: AngularFireAuth,
    private router: Router
  ) {
    this.usersCollection = firestore.collection<User>('users');
    this.getUsers();
  }

  async onLogin(email: string, password: string) {
    const result = await this.fireauth.signInWithEmailAndPassword(email, password);
    return result;
  }

  async onRegister(email: string, password:string) {
    const result = await this.fireauth.createUserWithEmailAndPassword(email, password);
    return result;
  }

  async logout() {
    try {
      await this.fireauth.signOut();
    } catch (error: any) {
      console.log(error.message)
    }
  }

  getCurrentUser() {
    return this.fireauth.authState.pipe(first()).toPromise();
  }

  onSaveUser(user: User, userId: string): Promise<void> {
    return new Promise( async (resolve, reject) => {
      try {
        const id = userId || this.firestore.createId();
        const data = {id, ...user};
        const result = await this.usersCollection.doc(id).set(data);
        resolve(result);
      } catch (err: any) {
        reject(err.message)
      }
    });
  }

  onDeleteUser(userId: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = this.usersCollection.doc(userId).delete();
        resolve(result);
      } catch (err: any) {
        reject(err.message)
      }
    });
  }

  getUsers(): void {
    this.users = this.usersCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as User))
    );
  }

  async get(): Promise<any> {
    return this.data;
  }
}

