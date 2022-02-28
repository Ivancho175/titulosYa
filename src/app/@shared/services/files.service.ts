import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import firebase from 'firebase/compat';
import 'firebase/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  storageRef = firebase.app().storage().ref();

  constructor(
    private http: HttpClient
  ) { }

  async uploadFile(name: string, ) {

  }


}
