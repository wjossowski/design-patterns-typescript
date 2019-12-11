import { MusicPlayerTrack } from './commands/MusicPlayerTrack'

export class MusicPlayerRemoteControl {
  private command?: MusicPlayerTrack

  setMusicPlayerCommand(command: MusicPlayerTrack) {
    this.command = command
  }

  pressButton() {
    if (this.command) {
      this.command.play()
    }
  }
}
