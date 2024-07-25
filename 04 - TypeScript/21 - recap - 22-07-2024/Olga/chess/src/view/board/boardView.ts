import { pieces, Piece } from "../../model/pieces/piecesModel.ts";
import { renderPiece } from "../piece/pieceView.ts";
import { allowedMoves } from "../../controller/pieceCont.ts";
import { renderAllowedMoves } from "../piece/pieceView.ts";

const app = document.querySelector<HTMLDivElement>("#app");
let piecesHTML = document.querySelectorAll(".piece");

export function renderGame() {
  if (app) {
    renderBoard(app);

    pieces.forEach((piece) => {
      renderPiece(piece);
    });

    piecesHTML = document.querySelectorAll(".piece");
    makeMove();
  }
}

export function renderBoard(element: HTMLElement): string | undefined {
  try {
    let html = '<table class="chessBoard">';
    for (let i = 0; i < 8; i++) {
      html += "<tr>";
      for (let j = 0; j < 8; j++) {
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
let flag = true;
let color = "white";
function makeMove() {
  console.log(color, flag, "starting");
  let currantPiece: Piece | undefined;
  piecesHTML.forEach((piece) => {
    piece.addEventListener("click", (event) => {
      if (currantPiece === undefined) {
        currantPiece = pieces.find(
          (piece) => piece.id === (event.target as HTMLElement).id
        );
        if (!currantPiece) throw new Error("no piece");
        // if (currantPiece.color !== color) throw new Error("wrong color");
        // if (currantPiece.color === color) {
        const allowedMoves2 = allowedMoves((event.target as HTMLElement).id);
        renderAllowedMoves(allowedMoves2);
        // }
      } else if (currantPiece.id === (event.target as HTMLElement).id) {
        currantPiece = undefined;
        console.log("a place is not free");
        renderGame();
        currantPiece = pieces.find(
          (piece) => piece.id === (event.target as HTMLElement).id
        );
        const allowedMoves2 = allowedMoves((event.target as HTMLElement).id);
        console.log((event.target as HTMLElement).id);
        renderAllowedMoves(allowedMoves2);
      }

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
          if (move.parentElement?.children[0].className === "piece") {
            console.log("QQQQQ");
            const piece2 = pieces.find((piece) => {
              piece.id === move.parentElement?.children[0].id;
            });
            console.log("piece is ", piece2, pieces.indexOf(piece2!), move.parentElement?.children[0]);
            // pieces.slice(pieces.indexOf(piece2!), 1);
            piece2?.deletePiece();
          }
          currantPiece?.setNewPostion(elementId!);

          console.log(pieces);

          renderGame();
          flag = !flag;
          if (flag) {
            color = "white";
          } else {
            color = "black";
          }
          //   console.log(color, flag, "finished");
          // piecesHTML = document.querySelectorAll(".piece");

          //   console.log(piecesHTML, currantPiece);
        });
      });
    });
  });
}

function isEven(num: number): boolean {
  return num % 2 === 0;
}
