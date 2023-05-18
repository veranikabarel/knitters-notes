import { ButtonCustom } from '@/components/ButtonCustom/ButtonCustom.styled';
import { ButtonProps } from '@mui/material';

export default {
  title: 'ui/ButtonCustom',
  component: ButtonCustom,
  args: {
    children: 'I am a button!',
  },
  argTypes: {
    children: {
      control: { type: 'text' },
    },
    variant: {
      control: { type: 'radio' },
      options: ['text', 'outlined', 'contained'],
      description: 'Variant of the button',
    },
    onClick: { action: 'The button was clicked' },
    disable: {
      control: { type: 'boolean' },
    }

  }
}

const Template = (args: ButtonProps) => <ButtonCustom {...args} />

export const Button = Template.bind({
  parameters: {
    docs: {
      source: {
        code: `<ButtonCustom variant="text">Text</ButtonCustom>`,
        language: 'jsx',
      }
    }

  },
}) as ButtonProps




