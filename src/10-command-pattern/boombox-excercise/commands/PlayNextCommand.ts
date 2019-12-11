import { MusicPlayerTrack } from './MusicPlayerTrack'
import { MusicPlayer } from '../MusicPlayer'

export class PlayNextTrack implements MusicPlayerTrack {
  constructor(private readonly player: MusicPlayer) {}
  public play() {
    this.player.playNextTrack()
  }
}
