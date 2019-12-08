# Połączenie lotnicze

Twoim zadaniem będzie stworzenie narzędzia pomocnego w budowaniu bazy połączeń lotniczych.

Stwórz klasę odpowiadającą za połączenie lotnicze, a jej konstrukcją niech zajmie się wzorzec Builder z klasą wewnętrzną. Mamy pewne wymagania co do pól, ich walidacji i możliwości mutowania.

Klasa `FlightLeg` powinna zawierać poniższe pola:

- `from` (z) - wymagany, niezmienny po wybudowaniu przez Builder
- `to` (do) - wymagany, niezmienny po wybudowaniu przez Builder
- `delayed` (opóźniony) - domyślnie false, może być ustawiany tylko poprzez setter
- `price` (cena) - wymagany, może być zmieniany po utworzeniu obiektu

Przykładowe wywołanie metody main z odpowiednio ustawionymi polami:

```java
public static void main(String[] args) {
FlightLeg leg = new FlightLeg.FlightLegBuilder("Las Vegas", "Los Angeles").price(50).build();

 System.out.println(leg);

}
```

spowoduje wyświetlenie komunikatu z metody toString :

```java
FlightLeg{from='Las Vegas', to='Los Angeles', price=50, delayed=false}
```

Natomiast wywołanie przy braku ceny:

```java
public static void main(String[] args) {
FlightLeg leg = new FlightLeg.FlightLegBuilder("Las Vegas","Los Angeles").build();
System.out.println(leg);
}
```

powinno spowodować wyświetlenie komunikatu błędu:

```java
Exception in thread "main" java.lang.IllegalStateException: Brak wymaganego pola - cena
at co.devfoundry.FlightLeg\$FlightLegBuilder.build(FlightLeg.java:59)
at co.devfoundry.Main.main(Main.java:7)
```

Powodzenia!

Gotowe rozwiązanie tego zadania znajduje się na githubie (branch builder-task).
