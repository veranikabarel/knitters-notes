import type { Meta, StoryObj } from '@storybook/react';
import { ButtonCustom } from './ButtonCustom.styled';

const meta: Meta<typeof ButtonCustom> = {
  title: 'UI/Button',
  component: ButtonCustom,
  tags: ['autodocs'],
  args: {
    children: 'I am a button',
  },

  argTypes: {
    children: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'I am a button' },
      },
    },
    variant: {
      control: { type: 'radio' },
      options: ['contained', 'outlined', 'text'],
      description: 'Variant of the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the button',
      table: {
        type: { summary: 'small | medium | large' },
        defaultValue: { summary: 'medium' },
      },
    },
    onClick: {
      action: 'The button was clicked',
      description: 'Optional click handler',
      table: {
        type: { summary: '() => void' },
        category: 'Events',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonCustom>;

export const Primary: Story = {
  args: {
    variant: 'contained',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'outlined',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
  },
};
