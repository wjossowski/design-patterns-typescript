import * as commands from './commands'
import { MusicPlayer } from './MusicPlayer'
import { MusicPlayerRemoteControl } from './MusicPlayerRemoteControl'

describe('MusicPlayer Command pattern', () => {
  it('Passes required behavior', () => {
    const musicPlayer = new MusicPlayer()
    const remoteControl = new MusicPlayerRemoteControl()
    remoteControl.setMusicPlayerCommand(
      new commands.PlayFirstTrack(musicPlayer),
    )
    remoteControl.pressButton()

    remoteControl.setMusicPlayerCommand(new commands.PlayNextTrack(musicPlayer))
    remoteControl.pressButton()
    remoteControl.pressButton()
    remoteControl.pressButton()
    remoteControl.setMusicPlayerCommand(
      new commands.PlayRandomTrack(musicPlayer),
    )
    remoteControl.pressButton()
    remoteControl.pressButton()

    expect(musicPlayer.actions[0]).toEqual('Gram pierwszy utwór: Track 1')
    expect(musicPlayer.actions[1]).toEqual('Gram kolejny utwór: Track 2')
    expect(musicPlayer.actions[2]).toEqual('Gram kolejny utwór: Track 3')
    expect(musicPlayer.actions[3]).toEqual('Gram kolejny utwór: Track 1')
    expect(musicPlayer.actions[4]).toMatch(/Gram losowy utwór: Track \d/)
    expect(musicPlayer.actions[5]).toMatch(/Gram losowy utwór: Track \d/)
  })
})
