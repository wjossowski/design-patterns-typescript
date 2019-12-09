# Świąteczne Przygotowania

Tym razem mama poprosiła trójkę swoich dzieci, aby pomogły jej w świątecznych przygotowaniach w kuchni. Potrzebny jest jej słoik z przetworami umieszczony na którejś z półek.

Twoim zadaniem jest wykorzystanie wzorca Chain of Responsibility do przekazania requesta od mamy do dzieci tak, aby któreś z nich zdjęło słoik z półki. Zamiast typu enum `OfficerRank` (jak to było w naszym przykładzie), należy utworzyć enum Shelf. Jego wartości to: `LOW`, `MEDIUM` oraz `HIGH` .

Trzeba będzie również utworzyć klasę `MotherRequest`, która zawierać będzie jedno prywatne pole typu `Shelf`.

Dodatkowo należy utworzyć klasę abstrakcyjną o nazwie `Child`, która będzie zawierać jedno, prywatne pole typu `Child` o nazwie `tallerChild` . Klasy oficerów z przykładu zostaną zastąpione klasami dzieci: `Ania`, `Tomek` i `Antek` . Powinny one dziedziczyć po klasie `Child` i nadpisywać metodę o nazwie `processRequest`.

Przykład nadpisanej metody `processRequest` z klasy `Ania` :

```java
@Override
public void processRequest(MotherRequest motherRequest) {
     if (motherRequest.getShelf().equals(Shelf.LOW)) {
         System.out.println("Ania zdjęła słoik z półki!");
     } else {
         getTallerChild().processRequest(motherRequest);
     }
}
```

W tym zadaniu można pominąć kwestię dodatkowych kodów sprawdzających lub identyfikujących danego odbiorcę.

W metodzie main po utworzeniu odpowiednich obiektów i wywołaniu kodu:

```java
 MotherRequest motherRequest = new MotherRequest(Shelf.HIGH);
 Child tomek = new Tomek();
 Child ania = new Ania();
 Child antek = new Antek();
 tomek.setTallerChild(ania);
 ania.setTallerChild(antek);
 tomek.processRequest(motherRequest);
```

powinniśmy uzyskać następujący efekt oraz komunikaty:

- po wywołaniu requesta z `Shelf.LOW` , klasą przetwarzającą powinna być Ania i na ekranie powinniśmy zobaczyć komunikat:
  _"Ania zdjęła słoik z półki!"_

- po wywołaniu requesta z `Shelf.MEDIUM` , klasą przetwarzającą powinien być Tomek i na ekranie powinniśmy zobaczyć komunikat:
  _"Tomek zdjął słoik z półki!"_

- po wywołaniu requesta z `Shelf.HIGH` , klasą przetwarzającą powinien być Antek i na ekranie powinniśmy zobaczyć komunikat:
  _"Antek zdjął słoik z półki!"_
