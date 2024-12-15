export const getColRows = (number) => {
  const columns = parseInt(Math.sqrt(number));
  const rows = parseInt(Math.ceil(number / columns));
  return { columns, rows };
};
const getCellHeight = (rows) => {
  console.log("rows", rows);
  if (rows <= 4) {
    return 50;
  } else if (rows > 4 && rows <= 6) {
    return 45;
  } else if (rows > 6 && rows <= 10) {
    return 30;
  } else {
    return 30;
  }
};
export const getLettersStack = (words) => {
  if (words && words.length > 0) {
    const letters = [];
    words.map((word) => {
      [...word].forEach((char) => {
        letters.push(char.toUpperCase());
      });
    });
    const { columns, rows } = getColRows(letters.length);
    console.log("columns, rows", columns, rows);
    for (let i = letters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = letters[i];
      letters[i] = letters[j];
      letters[j] = tmp;
    }
    let l = letters.length - 1;
    const lettersMatrix = [];
    for (let n = rows; n > 0; n--) {
      const stack = [];
      for (let j = columns; j > 0; j--) {
        stack.push(letters[l]);
        l--;
      }
      lettersMatrix.push(stack);
    }

    return {
      data: lettersMatrix,
      cellWidth: parseFloat(90 / columns),
      cellHeight: getCellHeight(rows),
    };
  }
  return { data: [], cellWidth: null };
};

export function getRandomColor() {
  return "hsl(" + Math.random() * 360 + ", 100%, 75%)";
}
