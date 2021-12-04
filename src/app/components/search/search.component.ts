import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  artistas: any[] = [];
  loading: boolean = false;

  constructor(private _spotify: SpotifyService) {}

  buscar(termino: string) {
    console.log(termino);
    if (termino.length > 0) {
      this.loading = true;
    }

    if (termino.length != 0) {
      this._spotify.getArtistas(termino).subscribe((data: any) => {
        //console.log(data.artists.items);
        this.artistas = data;
        this.loading = false;
      });
    }
  }
}
