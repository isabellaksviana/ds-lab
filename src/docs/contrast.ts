// Contraste entre dois tokens de cor, calculado na hora (fórmula da WCAG 2).
// Lê o valor do token no tema que estiver ativo, então o número acompanha
// a troca de tema. Os tokens de cor do ds-lab são todos hex.

function luminance(color: string): number {
  // o navegador pode encurtar o hex (#ffffff vira #fff): aqui ele volta pros 6 dígitos
  const hex =
    color.length === 4 ? `#${[...color.slice(1)].map((c) => c + c).join('')}` : color;
  const [r, g, b] = [1, 3, 5].map((start) => {
    const channel = parseInt(hex.slice(start, start + 2), 16) / 255;
    return channel <= 0.03928
      ? channel / 12.92
      : ((channel + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/** Ex.: `contrast('--text', '--bg')` → `"13,7:1"` */
export function contrast(foreground: string, background: string): string {
  const styles = getComputedStyle(document.documentElement);
  const [lighter, darker] = [foreground, background]
    .map((token) => luminance(styles.getPropertyValue(token).trim()))
    .sort((a, b) => b - a);
  const ratio = (lighter + 0.05) / (darker + 0.05);
  // arredonda pra baixo: 6,96 não pode aparecer como 7,0
  return `${(Math.floor(ratio * 10) / 10).toFixed(1).replace('.', ',')}:1`;
}
