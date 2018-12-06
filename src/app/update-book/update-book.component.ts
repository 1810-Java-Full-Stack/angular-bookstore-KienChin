import { Component, OnInit, Input } from '@angular/core';
import { FakeDatabaseService } from '../fake-database.service'
import { BookViewComponent } from '../book-view/book-view.component';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  displayInputs = false;
  text = '';

  @Input() id:number
  title = 'new title';
  
  constructor(private data: FakeDatabaseService, private viewBooks: BookViewComponent) { }

  ngOnInit() {
  }

  updateBook(){
    this.displayInputs = true;
    this.text = '';
  }

  submitUpdate(){
    this.displayInputs = false;
    console.log(this.id + ' ' + this.title);
    this.data.updateBook(this.id, this.title);
    this.viewBooks.viewBooks();

  }

}
