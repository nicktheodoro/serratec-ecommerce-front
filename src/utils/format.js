function formatForReal(value) {
  return Number(value).toLocaleString("pt-BR", {style:'currency', currency:"BRL"});
}

function formatWords(text) {
  let words = text.split(" ");
  for (let a = 0; a < words.length; a++) {
      let w = words[a];
      words[a] = w[0].toUpperCase() + w.slice(1);
  }
  return words.join(" ");
}

export default {
  formatForReal,
  formatWords
}
