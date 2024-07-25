import { pieces } from "../../model/pieces/piecesModel.ts";
import { renderPiece } from "../piece/pieceView.ts";
import { allowedMoves } from "../../controller/pieceCont.ts";
import { renderAllowedMoves } from "../piece/pieceView.ts";

const app = document.querySelector<HTMLDivElement>("#app");
let piecesHTML = document.querySelectorAll(".piece");
// let movesHTML = document.querySelectorAll(".move");

export function renderGame() {
  if (app) {
    renderBoard(app);

    pieces.forEach((piece) => {
      renderPiece(piece);
    });

    piecesHTML = document.querySelectorAll(".piece");
    // movesHTML = document.querySelectorAll(".move");
    makeMove();
  }
}

export function renderBoard(element: HTMLElement): string | undefined {
  try {
    let html = '<table class="chessBoard">';
    for (let i = 0; i < 8; i++) {
      html += "<tr>";
      for (let j = 0; j < 8; j++) {
        // const letter = numberToColumn(j);
        // if (!letter) throw new Error("No letter")
        html += `<td id="pos-${i}${j}" class=${
          isEven(i)
            ? isEven(j)
              ? "black"
              : "white"
            : isEven(j)
            ? "white"
            : "black"
        }></td>`;
      }
      html += "</tr>";
    }
    html += "</table>";

    element.innerHTML = html;

    const tds = document.querySelectorAll("td");

    tds.forEach((td) =>
      td.addEventListener("click", (ev: any) => {
        if (ev && ev.target && ev.target.id) {
          //get the id, and convert it to Position
          //get pieces[0]
          //activate piece[0].changePosition(id) (change in data)
          //render the board again
        }
      })
    );
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

function makeMove() {
  piecesHTML.forEach((piece) => {
    piece.addEventListener("click", (event) => {
      var currantPiece = pieces.find(
        (piece) => piece.id === (event.target as HTMLElement).id
      );
      const allowedMoves2 = allowedMoves((event.target as HTMLElement).id);
      console.log((event.target as HTMLElement).id);
      renderAllowedMoves(allowedMoves2);

      document.addEventListener("click", (event) => {
        var re = /pos-*/;
        if (
          event.target &&
          // !(event.target as HTMLElement).classList.contains("move") &&
          // !(event.target as HTMLElement).classList.contains("piece") &&
          re.test((event.target as HTMLElement).id)
        ) {
          console.log("here");
          renderGame();
        }
      });

      let movesHTML = document.querySelectorAll(".move");
      console.log(piecesHTML);

      movesHTML.forEach((move) => {
        move.addEventListener("click", () => {
          const elementId = move.parentElement?.id;
          currantPiece?.setNewPostion(elementId!);

          console.log(pieces);

          renderGame();
          // piecesHTML = document.querySelectorAll(".piece");

          console.log(piecesHTML, currantPiece);
        });
      });
    });
  });
}

function isEven(num: number): boolean {
  return num % 2 === 0;
}

