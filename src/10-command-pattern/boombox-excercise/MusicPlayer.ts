export class MusicPlayer {
  public actions: string[] = []
  public currentTrackNumber: number = 0
  public readonly tracks: string[] = ['Track 1', 'Track 2', 'Track 3']

  public playFirstTrack() {
    this.playTrack(0, 'pierwszy')
  }

  public playNextTrack() {
    this.playTrack(this.pickNexNumber(), 'kolejny')
  }

  public playRandomTrack() {
    this.playTrack(this.pickRandomNumber(), 'losowy')
  }

  private pickNexNumber() {
    return this.currentTrackNumber === 2 ? 0 : this.currentTrackNumber + 1
  }

  private pickRandomNumber() {
    return Math.floor(this.tracks.length * Math.random())
  }

  private playTrack(trackNumber: number, caller: string) {
    this.currentTrackNumber = trackNumber
    this.actions.push(
      `Gram ${caller} utwór: ${this.tracks[this.currentTrackNumber]}`,
    )
  }
}
