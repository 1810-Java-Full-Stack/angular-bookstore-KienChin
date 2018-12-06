import { Component, OnInit } from '@angular/core';
import { FakeDatabaseService } from '../fake-database.service'
//import { NgModule } from '@angular/core';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {
  displayBooks = false;
  displayEdits = false;
  books: { id: number; title: string; aID: number; }[];
  authors: { id: number; name: string; }[];
  combinedArray: { id: number; title: string; author: string; aId:number; }[];

  newId = 0;
  newTitle = '';
  newAuthor = '';

  constructor(private data: FakeDatabaseService) { }

  ngOnInit() {
    this.books = this.data.getBooks();
    this.authors = this.data.getAuthors();
  }

  viewBooks(){
    this.displayBooks = true;
    this.combinedArray = new Array<{ id: number; title: string; author: string; aId:number }>(this.books.length);
    console.log(this.combinedArray);
    for(let i = 0; i < this.books.length; i++){
      this.combinedArray[i] = {id: this.books[i].id, title: this.books[i].title, author: this.authors.find(x => x.id == this.books[i].aID).name, aId: this.books[i].aID}
    }


  }

  viewAuthors(){

  }
  makeEdit(){
    this.displayEdits = true;
  }

  submitUpdate(){
    //let updateItem = this.books.find()
  }
  
}
