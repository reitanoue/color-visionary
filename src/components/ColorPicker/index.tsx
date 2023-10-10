import React from 'react'

export interface ColorPickerProps {
  color: string
  onChange: () => void
}

export const ColorPicker: React.FC<ColorPickerProps> = ({
  color = '#4abaab',
  onChange,
}) => {
  return (
    <input
      type="color"
      value={color}
      onChange={onChange}
      className="w-24 h-24"
    />
  )
}
