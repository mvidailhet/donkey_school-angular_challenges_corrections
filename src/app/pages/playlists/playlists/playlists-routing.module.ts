import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePlaylistComponent } from '../create-playlist/create-playlist.component';
import { PlaylistDetailComponent } from '../playlist-detail/playlist-detail.component';
import { PlaylistsComponent } from './playlists.component';

const routes: Routes = [
  {
    path: '',
    component: PlaylistsComponent
  },
  {
    path: 'detail',
    component: PlaylistDetailComponent
  },
  {
    path: 'create',
    component: CreatePlaylistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistsRoutingModule { }
