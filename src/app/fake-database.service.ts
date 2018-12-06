import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeDatabaseService {

  constructor() { }

  books = [
    {id: 1, title: 'book1', aID: 1},
    {id: 2, title: 'book2', aID: 2},
    {id: 3, title: 'book3', aID: 3},
    {id: 4, title: 'book4', aID: 4},
    {id: 5, title: 'book5', aID: 5},
    {id: 6, title: 'book6', aID: 1},
    {id: 7, title: 'book7', aID: 2},
    {id: 8, title: 'book8', aID: 3},
    {id: 9, title: 'book9', aID: 5}
  ]

  authors = [
    {id: 1, name: 'name1'},
    {id: 2, name: 'name2'},
    {id: 3, name: 'name3'},
    {id: 4, name: 'name4'},
    {id: 5, name: 'name5'},
  ]

  getBooks(): { id: number; title: string; aID: number; }[]{
    return this.books;
  }
  getAuthors(): { id: number; name: string;}[]{
    return this.authors;
  }

  updateBook(newId: number, newTitle: string){
    for(let i = 0; i < this.books.length; i++){
      if(this.books[i].id == newId){
        this.books[i] = {id: newId, title: newTitle, aID: this.books[i].aID}
      }
    }
  }
  updateAuthor(newId: number, newName: string){
    for(let i = 0; i < this.authors.length; i++){
      if(this.authors[i].id == newId){
        this.authors[i] = {id: newId, name: newName}
      }
    }
  }

}
