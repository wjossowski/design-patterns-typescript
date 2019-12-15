# System bankowy

Wyobraźmy sobie uproszczoną wersję systemu bankowego, który składa się z bankomatów oraz z centralnego systemu bankowego. My jako klienci podchodzimy do bankomatu i chcemy z niego wypłacić gotówkę.

Twoim zadaniem jest utworzenie Fasady dla istniejących dwóch klas (można je umieścić w paczce o nazwie "bank"):

Klasa `AtmMachine`, która posiada 3 metody:

- `checkBalance`
- `enterPin`
- `withdrawCash`

Klasa `BankSystem`, która posiada 4 metody:

- `transferMoney`
- `validatePin` - zwraca wartość boolean
- `validateTransaction` - zwraca wartość boolean
- `getTransactionHistory`

Klasa `AtmMachineFacade` powinna mieć jedną metodę:

`withdrawMoney`, która ma służyć do wypłacenia pieniędzy z bankomatu.

Procedura wypłaty pieniędzy wygląda następująco:

1. Należy wprowadzić kod PIN

2. Jeśli kod PIN jest poprawny ORAZ transakcja jest zwalidowana poprawnie

3. To wtedy można wypłacić pieniądze z bankomatu

Pamiętaj o tym, żeby ustawić odpowiednią widoczność metod oraz klas `AtmMachine` i `BankSystem`.

Po utworzeniu instancji klasy `AtmMachineFacade` w klasie `Main` i uruchomieniu metody main, powinniśmy zobaczyć odpowiednie komunikaty (oczywiście chodzi o odpowiednią kolejność działań, Twoja treść komunikatów zapewne będzie się różnić od tej poniżej):

```
Pin entered.
PIN number validated.
Transaction validated.
Cash withdrawn successfully!
```

Powodzenia!
