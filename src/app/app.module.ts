import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavComponent } from './components/template/nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './views/home/home.component';
import { CharactersComponent } from './views/characters/characters.component';
import { CharacterComponent } from './views/character/character.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { MatFormFieldModule } from '@angular/material/form-field'
import {MatGridListModule} from '@angular/material/grid-list'
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort'
import { NgxPaginationModule } from 'ngx-pagination';
import { CharactersApiService } from './marvel-api.service';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button'
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    CharactersComponent,
    CharacterComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    FlexLayoutModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    NgxPaginationModule,
    FormsModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [CharactersApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
