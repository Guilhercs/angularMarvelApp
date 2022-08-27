import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharactersApiService } from 'src/app/marvel-api.service';
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent implements OnInit {
  idCharacter!: number;
  hero: any;

  ngOnInit(): void {
    this.idCharacter = this.activateRoute.snapshot.params['id'];
    this.idDetails();
  }

  constructor(
    private characterApi: CharactersApiService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {}

  idDetails() {
    this.characterApi.detailsHero(this.idCharacter).subscribe((heroApi) => {
      this.hero = heroApi;
    });
  }
  backToListHeroes() {
    this.router.navigate([`/characters`]);
  }
}
