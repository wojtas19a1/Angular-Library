import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EditService {
  editedid: number = 0;
  constructor(private http: HttpClient) { }
  editedbook(id) {
    this.editedid = id;
   }
}
