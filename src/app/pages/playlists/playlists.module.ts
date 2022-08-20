import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlaylistsRoutingModule } from './playlists/playlists-routing.module';
import { PlaylistsComponent } from './playlists/playlists.component';

@NgModule({
  declarations: [PlaylistsComponent],
  imports: [CommonModule, PlaylistsRoutingModule, NgbModule],
  providers: [],
})
export class PlaylistsModule {}
