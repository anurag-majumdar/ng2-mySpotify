import { Component, OnInit }  from '@angular/core';
import { SpotifyService }     from '../spotify.service';
import { Artist }             from '../../Artist';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private searchStr: string;
  private searchResponse: Artist[];

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  searchMusic(){
    this.spotifyService.searchMusic(this.searchStr)
    .debounceTime(300)
    .distinctUntilChanged()
    .subscribe(res => {
      this.searchResponse = res.artists.items;
    });
  }

}
