import { ButtonCustom } from "@/components/ButtonCustom/ButtonCustom.styled"
import { Meta } from "@storybook/react"

export default {
  title: 'ui/Button',
  component: ButtonCustom,
  args: {
    children: 'I am a Button',
  }
} as Meta<typeof ButtonCustom>

export const Text =
{
  args: {
    variant: 'text',
  }
}

export const Contained =
{
  args: {
    variant: 'contained',
  }
}

export const Outlined =
{
  args: {
    variant: 'outlined',
  }
}