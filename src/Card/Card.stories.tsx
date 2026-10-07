import type { Meta, StoryObj } from '@storybook/react-vite';
import Card from './Card';
import { Rose } from 'lucide-react';
import IconBox from '../IconBox/IconBox';
import Tag from '../Tag/Tag';

const meta = {
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <h3>O pequeno príncipe</h3>
        <p>
          "Um passante qualquer sem dúvida pensaria que a minha rosa se parece
          convosco. Ela sozinha é, porém, mais importante que todas vós, pois
          foi ela quem eu reguei. Foi ela quem pus sob a redoma. Foi ela quem
          abriguei com o para-vento. Foi ela que eu matei as larvas (exceto duas
          ou três por causa das borboletas). Foi ela quem eu escutei queixar-se
          ou gabar-se, ou mesmo calar-se algumas vezes. Já que ela é a minha
          rosa."
        </p>
      </>
    ),
  },
};

export const WithComponents: Story = {
  args: {
    children: (
      <>
        <IconBox icon={<Rose aria-hidden="true" />} />
        <h3>O pequeno príncipe</h3>
        <p>
          "Um passante qualquer sem dúvida pensaria que a minha rosa se parece
          convosco. Ela sozinha é, porém, mais importante que todas vós, pois
          foi ela quem eu reguei. Foi ela quem pus sob a redoma. Foi ela quem
          abriguei com o para-vento. Foi ela que eu matei as larvas (exceto duas
          ou três por causa das borboletas). Foi ela quem eu escutei queixar-se
          ou gabar-se, ou mesmo calar-se algumas vezes. Já que ela é a minha
          rosa."
        </p>
        <Tag label="antoine de saint-exupéry" />
        <Tag label="o pequeno príncipe" />
        <Tag label="lendo agora" variant="secondary" />
      </>
    ),
  },
};
