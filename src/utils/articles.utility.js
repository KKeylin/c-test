/**
 * Function what give optimal font size depend from cell size and length of article title, but no bigger size than 4
 * @param {number} length - length of title text
 * @param {number} width - container in the row
 * @returns {number}
 */
export const fontSizer = (length, width) => {
    const result = (44 / length) * (width / 5);
    return result < 4 ? result : 4;
}