# Strategia rabatowa

Twoim zadaniem będzie utworzenie kalkulatora wyliczającego cenę w danym sklepie z wykorzystanie wzorca Strategy.

Aby to zrobić, należy najpierw utworzyć interfejs o nazwie `PricingStrategy`, którego metoda `calculatePrice` będzie przyjmowała dwa argumenty:

- argument typu int o nazwie price
- argument typu boolean o nazwie isSignedUpForNewsletter

Interfejs ten powinien być implementowany przez dwie klasy: `RegularPrice` oraz `SalePrice`. Obydwie te klasy będą również musiały implementować metodę calulcatePrice.

W przypadku klasy `RegularPrice` metoda `calulcatePrice` powinna wypisać na ekran niezmienioną cenę, jeśli przekazany argument `isSignedUpForNewsletter` jest ustawiony na `false`, natomiast metoda z klasy `SalePrice` ma wypisać na ekran 50% oryginalnej ceny jeśli argument `isSignedUpForNewsletter` jest ustawiony na `true`. Jeśli w powyższych przypadkach argument `isSignedUpForNewsletter` będzie miał wartość inną od zamierzonej, to należy o tym poinformować użytkownika, wypisując na ekran stosowny komunikat.

Oprócz interfejsu i implementujących go klas, należy utworzyć klasę o nazwie `PriceCalculator`, w której będzie się ustawiać daną strategię cenową. Powinna ona posiadać pole prywatne typu PricingStrategy oraz metodę o nazwie calculate, również przyjmującą dwa argumenty, podobnie jak w przypadku deklaracji metody `calculatePrice` w interfejsie `PricingStrategy`.

Po wywołaniu poniższego kodu w metodzie main:

```java
PriceCalculator priceCalculator = new PriceCalculator();
//Użytkownik nie jest zapisany do newslettera - normalna cena
priceCalculator.setPricingStrategy(new RegularPrice());
priceCalculator.calculate(100, false);
//Użytkownik jest zapisany do newslettera - wybrana błędna strategia
priceCalculator.setPricingStrategy(new RegularPrice());
priceCalculator.calculate(100, true);
//Użytkownik jest zapisany do newslettera
priceCalculator.setPricingStrategy(new SalePrice());
priceCalculator.calculate(100, true);
//Użytkownik jest zapisany do newslettera - wybrana błędna strategia
priceCalculator.setPricingStrategy(new SalePrice());
priceCalculator.calculate(100, false);
```

na ekranie powinny wyświetlić się podobne komunikaty:

```
Normalna cena: 100zł
Użytkownik zapisany do newslettera, należy wybrać inną strategię cenową!

Przecena: 50zł
Użytkownik nie jest zapisany do newslettera, należy wybrać inną strategię cenową!
```

Powodzenia!
