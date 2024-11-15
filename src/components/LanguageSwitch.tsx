import React from 'react';
import '@components/Switch.css';

interface LanguageSwitchProps
{
  checked: boolean;
  onChange: () => void;
  label?: string;
}

const LanguageSwitch: React.FC<LanguageSwitchProps> = ({ checked, onChange, label }) =>
{
  return (
    <label className="switch">
      {label && <span className="switch-label">{label}</span>}
      <input type="checkbox" onChange={onChange} checked={checked} />
      <span className={`slider slider-lang ${checked ? "switch-es" : "switch-en"}`}>
      </span>
    </label>
  );
};

export default LanguageSwitch;