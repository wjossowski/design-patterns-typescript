# Decorator pattern

Dynamiczne rozszerzanie funkcjonalności danej klasy

## Gra - przyklad

- Generowanie terenu

1. Abstrakcyjny komponent Terrain
   1. publiczna metoda fuelCost
2. dziedziczy po niej Abstract TerrainDecorator
   1. Jako prywatny komponent zawiera Terrain (konkretny komponent lub ozdobiony)
