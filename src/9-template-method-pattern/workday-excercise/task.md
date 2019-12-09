# Dzień pracy

Twoim zadaniem będzie utworzenie algorytmu - Metody Szablonowej reprezentującej dzień pracy osoby zatrudnionej na etacie.

Ma ona zawierać kilka metod (np.: `pobudka`, `powrotDoDomu` ), w tym co najmniej jedną metodę abstrakcyjną, która powinna być zaimplementowana przez klasę implementującą dany algorytm. Klasa ta ma jako argument pobierać enum `TransportType` wyglądający następująco:

```java
public enum TypeOfTransport {
CAR, TRAM, BIKE
}
```

Na jego podstawie klasa abstrakcyjna ma zwracać na ekran (bądź jako wartość) różne rzeczy, zależne od konkretnej implementacji.

Przykładowa klasa szablonowa WeekDay może prezentować się następująco:

```java
public abstract class WeekDay {

    public final void everyDayIsExaclyTheSame(TypeOfTransport typeOfTransport) {
        wakeUp();
        getReady();
        int time = goToWork(typeOfTransport);
        summary(time);
        work();
        goHome();
    }

    private void goHome() {
        System.out.println("Powrot do domu");
    }

    protected abstract void work();
    protected abstract int goToWork(TypeOfTransport transport);

    protected void summary(int time) {
        System.out.println("Trasa do pracy zajęła: " + time + " minut");
    }

    private void getReady() {
        System.out.println("Przygotowania do wyjscia");
    }

    private void wakeUp() {
        System.out.println("Pobudka");
    }

}
```

a jedna z konkretnych implementacji algorytmu:

```java
public class MyDay extends WeekDay {

    protected void work() {
        System.out.println("Code monkey get up, get coffee");
    }

    public int goToWork(TypeOfTransport transport) {
        switch(transport) {
            case CAR:
                return 15;
            case BIKE:
                return 25;
            case TRAM:
                return 20;
            default:
                return 20;
        }
    }

}
```

Powodzenia!
