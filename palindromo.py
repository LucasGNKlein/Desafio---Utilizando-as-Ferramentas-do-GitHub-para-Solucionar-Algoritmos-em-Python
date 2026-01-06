texto = input("Digite uma palavra ou frase: ")

# remove espaços e transforma em minúsculas
tratado = texto.replace(" ", "").lower()

invertido = tratado[::-1]

if tratado == invertido:
    print(f'"{texto}" é um palíndromo.')
else:
    print(f'"{texto}" não é um palíndromo.')
