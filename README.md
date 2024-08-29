# Dado a seguinte base de dados:

|  I  |  II | III |  IV  |  V  |  VI | VII | VIII| 
| --- | --- | --- | ---  | --- | --- | --- | --- |
| 11  |  5  |  2  |   0  |  9  |  9  |  1  |  5  |
|  1  |  3  |  3  |   3  |  7  |  4  | 12  |  8  |
|  5  |  2  |  6  |   1  | 11  |  1  |  2  |  4  |
|  2  |  1  |  3  |   9  |  0  | 10  |  3  |  3  |
|  1  |  5  | 18  |   4  | 22  |  8  |  3  |  0  |
|  8  |  9  |  2  |   3  | 12  |  1  |  3  |  1  |
|  7  |  5  | 14  |   7  |  7  | 28  |  1  |  3  |
|  2  | 11  | 13  |   2  |  0  |  1  |  6  | 12  |
| 15  |  0  |  6  |   7  | 19  |  1  |  1  |  9  |
|  1  |  5  |  3  |  17  | 10  | 15  | 43  |  2  |
|  6  |  1  | 13  |  13  | 19  | 10  |  9  | 20  |
| 19  |  2  | 27  |   5  | 20  |  5  | 10  |  8  |
|  2  |  3  |  1  |   1  |  4  |  3  |  6  | 13  |
| 10  |  9  |  1  |   1  |  3  |  9  |  9  |  4  |
|  0  |  3  |  6  |   3  | 27  |  3  | 18  |  4  |
|  6  |  0  |  2  |   2  |  8  |  4  |  5  |  1  |
|  4  | 18  |  1  |   0  | 16  | 20  |  2  |  2  |
|  2  | 12  | 28  |   0  |  7  |  3  | 18  | 12  |
|  3  |  2  |  8  |   3  | 19  | 12  |  5  |  4  |
|  6  |  0  |  5  |   0  |  3  |  7  |  0  |  8  |
|  8  | 12  |  3  |   7  |  1  |  3  |  1  |  3  |
|  2  |  5  |  4  |   9  |  4  | 12  |  4  | 11  |
|  9  |  2  |  0  |   5  |  8  | 24  |  1  |  5  |
| 12  |  9  | 17  | 728  | 12  |  6  |  4  |  3  |
|  5  |  7  |  4  |   4  |  4  | 11  |  3  |  8  |

## Parâmetros:
- **Soma**: Identifique cada valor na tabela, conte quantas vezes ele se repete e some os valores correspondentes.
- **Média**: Divida a soma pelo produto do número de linhas (25) e colunas (8) da tabela.
- **Soma da variância**: Para cada valor na tabela, subtraia da média, eleve o resultado ao quadrado e multiplique pela quantidade de vezes que esse número se repete. Repita o processo para todos os valores e, ao final, some os resultados.
- **Média da variância**: Divida a soma da variância por 200 (o produto da matriz de 25 linhas por 8 colunas) e subtraia 1. Portanto, o cálculo é: Soma da variância / (200 - 1).
- **Desvio Padrão**: Representa o grau de variação de um conjunto de elementos. Para encontrá-lo, basta calcular a raiz quadrada da média da variância.

## Resultado:
![Resultado](https://github.com/user-attachments/assets/019e2ff7-9fb0-471c-8607-f8aacd34e60e)

