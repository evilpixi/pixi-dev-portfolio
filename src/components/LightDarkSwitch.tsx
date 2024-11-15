import React from 'react';
import '@components/Switch.css';

interface LightDarkSwitchProps
{
  checked: boolean;
  onChange: () => void;
  label?: string;
}

const LightDarkSwitch: React.FC<LightDarkSwitchProps> = ({ checked, onChange, label }) =>
{
  return (
    <label className="switch">
      {label && <span className="switch-label">{label}</span>}
      <input type="checkbox" onChange={onChange} checked={checked} />
      <span className={`slider slider-theme ${checked ? 'switch-light' : 'switch-dark'}`} />
    </label>
  );
};

export default LightDarkSwitch;