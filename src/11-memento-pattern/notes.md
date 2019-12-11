# Memento Pattern

1. Zapisywanie stanu obiektu i powrót do niego w dowolnym momencie
2. Nie dawać klientowi mozliwosci edycji listy snapshotow

## Podzial

1. Originator

   1. publiczne metody do komunikacji z klientem
   1. metody publiczne save/load operujade na memento

2. Memento
   1. Zapisuje stan
   2. Gettery do pól zmienianych w stacie
3. Caretaker
   1. operuje na liście memento
