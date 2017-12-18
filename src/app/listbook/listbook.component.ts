import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listbook',
  templateUrl: './listbook.component.html',
  styleUrls: ['../app.component.css']
})
export class ListbookComponent implements OnInit {
   results: Object;
   constructor(private http: HttpClient) {}
   // Pobranie ksiażek z jsona za pomocą json-server z pliku books.json z portu 3000 //
   get() {
      this.http.get('http://localhost:3000/books', {responseType: 'json'}).subscribe(data => {
      this.results = data;
    });
  }
  // Funkcja usuwania, wywołuje się po kliknięciu przycisku 'Usuń', //
  // jesli zakonczy sie sukcesem wywoluje funkcje get() by odswiezyc liste //
   delete(event) {
      this.http.delete('http://localhost:3000/books/' + event.target.id, {responseType: 'json'}).subscribe(data => {
      this.get();
   });
   }
   edit(event) {
    localStorage.setItem('id', event.target.id);
    localStorage.setItem('title', event.target.title);
    localStorage.setItem('author', event.target.name);
   }
   ngOnInit(): void {
    // Make the HTTP request:
    this.get();
  }
}
