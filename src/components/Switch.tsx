import React from 'react';
import '@components/Switch.css';

interface SwitchProps
{
  checked: boolean;
  onChange: () => void;
  label?: string;
}

const Switch: React.FC<SwitchProps> = ({ checked, onChange, label }) =>
{
  return (
    <label className="switch">
      {label && <span className="switch-label">{label}</span>}
      <input type="checkbox" onChange={onChange} checked={checked} />
      <span className="slider" />
    </label>
  );
};

export default Switch;