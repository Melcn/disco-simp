import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistModule } from './pages/artist/artist.module';
import { AlbumModule } from './pages/album/album.module';
import { TrackModule } from './pages/track/track.module';
import { NotFoundModule } from './pages/not-found/not-found.module';
import { HomepageModule } from './pages/homepage/homepage.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
