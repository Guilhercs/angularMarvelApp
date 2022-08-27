import { Component, OnInit } from '@angular/core';
import { CharactersApiService } from 'src/app/marvel-api.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  allHeros!: Observable<any>;
  pagina!: number;
  character!: string;
  constructor(
    private characterApi: CharactersApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((parametro: any) => {
      this.pagina = parametro.page;
      this.getHeroesService(this.pagina);
    });
  }
  //Recebendo os herois do serviço
  getHeroesService(pagina: number) {
    this.allHeros = this.characterApi.getHeroes(pagina);
  }
  //paginação
  nextPage(event: any) {
    this.router.navigate([`characters/${event.pageIndex}`]);
    console.log(event);
  }
  //campo de busca
  search() {
    this.allHeros = this.characterApi.searchHero(this.character);
  }
  //Rota para a descrição dos herois
  detailsCharacter(id: number) {
    this.router.navigate([`character/${id}`]);
  }
}

//let route = this.activatedRoute.snapshot.params['page'];
//console.log(route)
