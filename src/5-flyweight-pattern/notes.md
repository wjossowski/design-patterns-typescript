# Kolej na Ciebie - Pyłek

## Figury szachowe

Twoim zadaniem będzie zakodowanie głównego elementu gry w szachy - mianowicie figur szachowych.

W grze mamy do dyspozycji trzydzieści dwie figury, każda z nich posiadająca jeden z dwóch możliwych kolorów - więc jest to doskonała okazja na zastosowanie wzorca projektowego Pyłek.

Zacznij od utworzenia klasy `Color` z trzema polami typu int - `r,g,b` (od red, green, blue) i konstruktorem przyjmującym te wartości.

Następnie utwórz repozytorium `ColorRepository`, gdzie utworzone zostaną dwa obiekty typu Color :

- `white` (wartości 0,0,0)
- `black` (wartości 255,255,255)

Klasa ta powinna mieć również dwie publiczne metody: `getBlack()` oraz `getWhite()` zwracające odpowiedni obiekt typu `Color` (jednak nie nowy, lecz ten utworzony w repozytorium).

Może to na przykład wyglądać w ten sposób:

```java
public class ColorRepository {
    static Color black = new Color(255,255,255);
    public static Color getBlack() {
        return black;
    }
   //...
}
```

Następnie należy utworzyć abstrakcyjną klasę ChessPiece z czterema atrybutami:

- `name`
- `numberPosition`
- `letterPosition`
- `color` - gdzie color jest ustawiany w konstruktorze na podstawie np. stringa przekazanego z konstruktora klasy podrzędnej i pobierany z repozytorium, przykładowo:

```java
public ChessPiece(String name, String numberPosition, String letterPosition, String color) {
    this.name = name;
    this.numberPosition = numberPosition;
    this.letterPosition = letterPosition;
    switch(color.toLowerCase()) {
        case "black":
            this.color = ColorRepository.getBlack();
            break;
        default:
            this.color = ColorRepository.getWhite();
            break;
    }
}
```

Finalnie możesz utworzyć kilka klas dla konkretnych już figur, przykładowo:

```java
public class WhiteQueen extends ChessPiece {
    public WhiteQueen(String name) {
        super(name, "1", "d", "white");
    }
}
```

Ostatecznie, poniższe wywołanie metody main :

```java
public static void main(String[] args) {
    ChessPiece blackPawn = new BlackPiece("Czarny Pionek","7", "a");
    ChessPiece whitePawn = new WhitePiece("Biały Pionek","2","a");
    ChessPiece blackQueen = new BlackQueen("Czarna Królowa");
    ChessPiece whiteQueen = new WhiteQueen("Biala Królowa");
    //exactly same color object is used
    System.out.println(blackPawn.getColor()==blackQueen.getColor());
    System.out.println(whitePawn.getColor()==whiteQueen.getColor());
}
```

powinno zwrócić informacje:

```java
true
true
```

Ponieważ atrybut color dla każdego pionka to nasz pyłek, obiekt współdzielony jest identyczny dla każdej białej bądź czarnej figury.

Powodzenia!
