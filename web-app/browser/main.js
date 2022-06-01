

// import R from "/common/ramda.js";
import Connect4 from "/common/Connect4.js";

const grid_columns = 7;
const grid_rows = 6;

let board = Connect4.empty_board(grid_columns, grid_rows);

document.documentElement.style.setProperty("--grid-rows", grid_rows);
document.documentElement.style.setProperty("--grid-columns", grid_columns);

const grid = document.getElementById("grid");
const footer = document.getElementById("footer");

const range = (n) => Array.from({"length": n}, (ignore, k) => k);

const cells = range(grid_rows).map(function (row_index) {
    const row = document.createElement("div");
    row.className = "row";

    const rows = range(grid_columns).map(function (column_index) {
        const cell = document.createElement("div");
        cell.className = "cell";

        cell.textContent = `(${row_index}, ${column_index})`;
        // cell.textContent = "(" + row_index + ", " + column_index + ")";

        cell.onclick = function () {
            footer.textContent = `(${row_index}, ${column_index})`;
            const cell_below = cells[row_index][column_index + 1];
            cell_below.classList.add("on");
        };

        row.append(cell);

        return cell;
    });

    grid.append(row);
    return rows;
});


const update_board = function () {
    board.forEach(function (column, column_index) {
        column.forEach(function (slot, row_index) {
            const cell_element = cells[row_index][column_index];
            if (slot === 0) {
                cell_element.classList.add("empty");
            }
            if (slot === 1) {
            }
            if (slot === 2) {
            }
        });        
    });
};
