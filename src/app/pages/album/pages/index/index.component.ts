import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../services/album.service';

const url = "http://localhost:3000/albums";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit{

  public albums!: any;

  constructor(private albumService : AlbumService){
    this.albumService.getAlbumsFromApi();
  }

  ngOnInit(): void {
    
    this.albumService.getAlbums().subscribe(data => { this.albums = data});
  }
}
