import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import "./Input.scss";
import { IconSearch } from "../../assets/Icon";

type InputProps = {
  label?: string;
  inputProps?: any;
  setQuerySearch: (value: string) => void;
  placehoder?: string;
  type?: string;
  value?: string;
};

function Input(props: InputProps) {
  const { label, inputProps, setQuerySearch, placehoder, type, value } = props;
  const timeoutRef = useRef<any>(null);
  const [currentValue, setCurrentValue] = useState<string>("");

  const handleSetQuery = () => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCurrentValue(value);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setQuerySearch(value);
    }, 300);
  };
  return (
    <div className="input__wrapper">
      {label && <label>{label}</label>}
      <span className="icon">
        <IconSearch />
      </span>
      <input
        onChange={handleSetQuery()}
        placeholder={placehoder}
        {...inputProps}
        type={type}
        value={currentValue ?? ""}
      />
    </div>
  );
}

export default Input;
