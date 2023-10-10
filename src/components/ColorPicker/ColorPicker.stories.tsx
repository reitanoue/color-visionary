import type { Meta, StoryObj } from '@storybook/react'
import { ColorPicker } from '.'

const meta: Meta = {
  title: 'Example/ColorPicker',
  component: ColorPicker,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: { control: 'color' },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    color: '#aff32a',
    onChange: () => console.log('onChange'),
  },
}
