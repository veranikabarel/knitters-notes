import { ButtonCustom } from '@/components/ButtonCustom/ButtonCustom.styled';
import type { Meta, StoryObj } from '@storybook/react';


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
      options: ['text', 'outlined', 'contained'],
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

export const Text: Story = {
  args: {
    variant: 'text',
  },
};

export const Contained: Story = {
  args: {
    variant: 'contained',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
  },
};


