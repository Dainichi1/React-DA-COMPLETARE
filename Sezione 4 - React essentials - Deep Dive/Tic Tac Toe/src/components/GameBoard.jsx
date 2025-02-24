const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare }) {
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={onSelectSquare}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
/*
{initialGameBoard.map((row, rowIndex) => (
  <li key={rowIndex}>
    <ol>


    Itera su ogni riga della matrice initialGameBoard.
    rowIndex è l'indice della riga corrente (0, 1, 2).
    Per ogni riga, crea un <li> (elemento di lista), necessario perché React richiede che ogni elemento iterato abbia una chiave unica (key={rowIndex}).

    initialGameBoard.map((row, rowIndex) => ... ) scorre ogni riga della matrice.
    Per ogni riga, crea un elemento <li> che rappresenta l'intera riga e contiene una sotto-lista <ol> per le colonne.
*/

/*
{row.map((playerSymbol, colIndex) => (
  <li key={colIndex}>
    <button>{playerSymbol}</button>
  </li>
))}

Itera su ogni cella della riga corrente.
playerSymbol è il valore della cella (null, 'X', 'O').
colIndex è l'indice della colonna (0, 1, 2).

row.map((playerSymbol, colIndex) => ... ) scorre ogni elemento della riga (null inizialmente).
Per ogni cella, viene creato un elemento <li>, che contiene un bottone (<button>).
Il contenuto del bottone ({playerSymbol}) rappresenta il simbolo del giocatore (X o O). Inizialmente è null, quindi il bottone sarà vuoto.


*/
