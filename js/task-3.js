function getElementWidth(content, padding, border) {
        function parsePx(value) {
            return parseFloat(value.replace('px', ''));
        }
        const contentWidth = parsePx(content);
        const paddingWidth = 2 * parsePx(padding);
        const borderWidth = 2 * parsePx(border);
        const totalWidth = contentWidth;
        return totalWidth;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200