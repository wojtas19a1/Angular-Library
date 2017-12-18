import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['../app.component.css']
})
export class EditbookComponent implements OnInit {
  title: string;
  author: string;
  bookid: string;
  constructor(private http: HttpClient) { }
  // Funckje wysyłające wartosci z inputow do buttona
  changetitle(event) {
   this.title = event.target.value;
  }
  changeauthor(event) {
   this.author = event.target.value;
 }
  edit(event) {
    // tslint:disable-next-line:max-line-length
    // Funkcja do edycji ksiazek
    this.http.put('http://localhost:3000/books/' + event.target.id, {title: event.target.title, author: event.target.name, id: event.target.id}).subscribe(data => {
     // Po udanej edycji powrot do listy ksiazek
     // Zrobione w taki sposob poniewaz gdy umiescimy buttona w tagu <a></a> z linkiem do poczatkowej strony
     // jest szansa ze link wywola sie przed edycja i zmiany sie nie dokonaja
    window.location.replace('http://localhost:4200');
    });
   }

  ngOnInit() {
    this.bookid = localStorage.id;
    this.title = localStorage.title;
    this.author = localStorage.author;
  }

}
