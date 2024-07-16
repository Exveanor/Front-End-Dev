function characters(firstChar, lastChar) {

  let result = "";
  let start = Math.min(firstChar.charCodeAt(), lastChar.charCodeAt());
  let end = Math.max(firstChar.charCodeAt(), lastChar.charCodeAt());
  for (let currentCode = start + 1; currentCode < end; currentCode++) {
    const currentChar = String.fromCharCode(currentCode);

    result += `${currentChar} `;
  }

  console.log (result.trimEnd());
}

characters("C", "#");
