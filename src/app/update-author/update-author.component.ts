import { Component, OnInit, Input } from '@angular/core';
import { FakeDatabaseService } from '../fake-database.service'
import { BookViewComponent } from '../book-view/book-view.component';


@Component({
  selector: 'app-update-author',
  templateUrl: './update-author.component.html',
  styleUrls: ['./update-author.component.css']
})
export class UpdateAuthorComponent implements OnInit {
  displayInputs = false;
  text = '';

  @Input() id:number
  name = 'new name';
  
  constructor(private data: FakeDatabaseService, private viewBooks: BookViewComponent) { }

  ngOnInit() {
  }

  updateAuthor(){
    this.displayInputs = true;
    this.text = '';
  }

  submitUpdate(){
    this.displayInputs = false;
    console.log(this.id + ' ' + this.name);
    this.data.updateAuthor(this.id, this.name);
    this.viewBooks.viewBooks();
  }
}
