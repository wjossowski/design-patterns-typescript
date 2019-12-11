# System Backup

Twoim zadaniem będzie utworzenie systemu backupowania dla systemu operacyjnego z wykorzystaniem wzorca Memento.

Główną klasą, której stan będziemy chcieli zapisywać, będzie klasa `OperatingSystem`. Klasa ta posiadać będzie dwa pola prywatne:

- pole typu int o nazwie backupNumber z ustawioną początkową wartością 0
- pole typu Date o nazwie backupDate

W klasie `OperatingSystem` będzie również zaimplementowana metoda createBackup, której celem będzie tworzenie backupów:

```java
public void createBackup() {
 this.backupNumber++;
 this.backupDate = new Date();
 System.out.println("Utworzono backup nr: " + this.backupNumber + " z datą: " + backupDate);
}
```

Oprócz metody `createBackup` w klasie `OperatingSystem` należy zaimplementować metody `save` oraz `load` służące do zapisu oraz odczytu pamiątek.

Ponadto należy utworzyć klasę memento o nazwie `OperatingSystemMemento` oraz klasę typu caretaker o nazwie `OperatingSystemCaretaker`.

W klasie caretaker wystarczy zadeklarować jedno pole prywatne typu `OperatingSystemMemento`.

Klasa main będzie odpowiedzialna za utworzenie odpowiednich obiektów oraz utworzenie backupu systemu operacyjnego:

```java
public static void main(String[] args) throws InterruptedException {
 OperatingSystemCaretaker operatingSystemCaretaker = new OperatingSystemCaretaker();
 OperatingSystem operatingSystem = new OperatingSystem();
 operatingSystem.createBackup();
 Thread.sleep(3000);
 operatingSystem.createBackup();
 Thread.sleep(3000);
 operatingSystemCaretaker.addMemento(operatingSystem.save());
 operatingSystem.createBackup();
 Thread.sleep(3000);
 operatingSystem.createBackup();
 Thread.sleep(3000);
 operatingSystem.load(operatingSystemCaretaker.getMemento());
}
```

UWAGA: Działamy tutaj na wątkach, a więc trzeba pamiętać o throws `InterruptedException` w przypadku, gdyby coś miało pójść nie tak.

Efektem uruchomienia metody main, powinny być stosowne komunikaty wyświetlane na ekranie:

Utworzono backup nr: 1 z datą: Tue Mar 27 19:54:37 CEST 2018
Utworzono backup nr: 2 z datą: Tue Mar 27 19:54:40 CEST 2018
Zapisano backup nr: 2 z datą: Tue Mar 27 19:54:40 CEST 2018
Utworzono backup nr: 3 z datą: Tue Mar 27 19:54:43 CEST 2018
Utworzono backup nr: 4 z datą: Tue Mar 27 19:54:46 CEST 2018
Wczytano backup nr: 2 z datą: Tue Mar 27 19:54:40 CEST 2018

Powinniśmy widzieć różnicę w sekundach wyświetlanej daty, natomiast same daty:

Utworzono backup nr: 2 z datą: Tue Mar 27 19:54:40 CEST 2018
Zapisano backup nr: 2 z datą: Tue Mar 27 19:54:40 CEST 2018
oraz

Wczytano backup nr: 2 z datą: Tue Mar 27 19:54:40 CEST 2018
powinny być identyczne.

Powodzenia!
