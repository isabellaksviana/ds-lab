import type { ColorToken } from './colorTokens';
import { contrast } from './contrast';

type TokenTableProps = {
  tokens: ColorToken[];
};

export default function TokenTable({ tokens }: TokenTableProps) {
  return (
    <ul className="token-table">
      {tokens.map((token) => {
        const value = getComputedStyle(
          document.documentElement,
        ).getPropertyValue(token.name);

        return (
          <li className="token-row" key={token.name}>
            <div
              className="token-swatch"
              style={{ background: `var(${token.name})` }}
            />
            <div>
              <code className="token-name">{token.name}</code>
              <span className="token-value">{value}</span>
            </div>
            <p className="token-use">{token.use}</p>
            {token.contrast && (
              <span className="token-ratio">
                {contrast(token.contrast[0], token.contrast[1])}
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
