import R from "/common/ramda.js";

const grid_columns = 7;
const grid_rows = 6;

document.documentElement.style.setProperty("--grid-rows", grid_rows);
document.documentElement.style.setProperty("--grid-columns", grid_columns);

const grid = document.getElementById("grid");

// const range = (n) => Array.from({"length": n}, (ignore, k) => k);

R.range(0, grid_rows).forEach(function (row_index) {
    const row = document.createElement("div");
    row.className = "row";

    R.range(0, grid_columns).forEach(function (column_index) {
        const cell = document.createElement("div");
        cell.className = "cell";

        cell.textContent = `(${row_index}, ${column_index})`;

        row.append(cell);
    });

    grid.append(row);
});
