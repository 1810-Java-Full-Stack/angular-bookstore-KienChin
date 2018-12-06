import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookViewComponent } from './book-view/book-view.component';
import { FakeDatabaseService } from './fake-database.service';
import { UpdateBookComponent } from './update-book/update-book.component';
import { UpdateAuthorComponent } from './update-author/update-author.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { ListViewComponent } from './list-view/list-view.component';

@NgModule({
  declarations: [
    AppComponent,
    BookViewComponent,
    UpdateBookComponent,
    UpdateAuthorComponent,
    BookDetailsComponent,
    ListViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [FakeDatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
