import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlaylistsRoutingModule } from './playlists/playlists-routing.module';
import { PlaylistsComponent } from './playlists/playlists.component';
import { PlaylistDetailComponent } from './playlist-detail/playlist-detail.component';
import { CreatePlaylistComponent } from './create-playlist/create-playlist.component';

@NgModule({
  declarations: [PlaylistsComponent, PlaylistDetailComponent, CreatePlaylistComponent],
  imports: [CommonModule, PlaylistsRoutingModule, NgbModule],
  providers: [],
})
export class PlaylistsModule {}
