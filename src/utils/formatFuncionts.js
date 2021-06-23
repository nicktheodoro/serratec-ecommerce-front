export default function formatForReal(value) {
  return Number(value).toLocaleString("pt-BR", {style:'currency', currency:"BRL"});
}


