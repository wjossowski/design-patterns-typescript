# Boombox

Twoim zadaniem będzie stworzenie zdalnie sterowanego odtwarzacza muzyki. Do tego celu należy w odpowiedni sposób wykorzystać wzorzec _Command_.

W centrum wzorca będzie klasa `MusicPlayer`, która posiadać będzie dwa pola prywatne:

- `List<String> tracks = Arrays.asList("Track 1", "Track 2", "Track 3");`
- `int currentTrackNumber = 0;`

Jak widać mamy tutaj kolekcję utworów o mało oryginalnych nazwach oraz wskaźnik aktualnie odtwarzanego utworu.

Do klasy `MusicPlayer` należy dodać metody, które będą odpowiadać za:

- odtworzenie pierwszego utworu - metoda o nazwie `playFirstTrack`
- odtworzenie kolejnego utworu - metoda o nazwie `playNextTrack`
- oraz odtworzenie losowego utworu - metoda o nazwie `playRandomTrack`

Każda z metod powinna wypisywać na ekran aktualnie odtwarzany utwór. Przykład implementacji metody odtwarzającej następny utwór:

```java
public void playNextTrack() {
currentTrackNumber++;
if (currentTrackNumber > 2) {
currentTrackNumber = 0;
}
System.out.println("Gram kolejny utwór: " + tracks.get(currentTrackNumber));
}
```

Ponadto należy utworzyć interfejs o nazwie `MusicPlayerCommand` z deklaracją metody o nazwie `play` oraz trzy klasy komend implementujące ten interfejs, odpowiadające metodom z klasy `MusicPlayer` : `PlayFirstTrack`, `PlayNextTrack` oraz `PlayRandomTrack`.

Ponadto należy utworzyć pilot zdalnego sterowania odtwarzaczem. Będzie on miał postać klasy o nazwie `MusicPlayerRemote`. Klasa ta powinna posiadać jedno pole prywatne typu `MusicPlayerCommand` o tej samej nazwie, setter dla tego pola oraz implementację metody o nazwie `pressButton`, która będzie odpowiadała za przekazywanie komend wybranym metodom z klas komend.

Po wykonaniu poniższego kodu z metody `main` :

```java
MusicPlayer musicPlayer = new MusicPlayer();
MusicPlayerRemote remote = new MusicPlayerRemote();
remote.setMusicPlayerCommand(new PlayFirstTrack(musicPlayer));
remote.pressButton();
remote.setMusicPlayerCommand(new PlayNextTrack(musicPlayer));
remote.pressButton();
remote.pressButton();
remote.pressButton();
remote.setMusicPlayerCommand(new PlayRandomTrack(musicPlayer));
remote.pressButton();
remote.pressButton();
```

powinniśmy uzyskać rezultat podobny do tego:

```
Gram pierwszy utwór: Track 1
Gram kolejny utwór: Track 2
Gram kolejny utwór: Track 3
Gram kolejny utwór: Track 1
Gram losowy utwór: Track 2
Gram losowy utwór: Track 3
```

Najpierw będzie odtwarzany pierwszy utwór, później kolejne, a gdy dotrzemy do końca listy utwórów, to odtwarzacz automatycznie ustawia odtwarzanie na początek listy i odtwarza kolejny utwór. Na końcu mamy dwa wywołania losowych utworów.

Powodzenia!
