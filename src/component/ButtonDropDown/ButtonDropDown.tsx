import { useState, useEffect, useRef } from "react";
import { IconArrowDown } from "../../assets/Icon";
import { Option, useClickOutSide } from "../../types/general";
import Button from "../Button/Button";
import "./ButtonDropDown.scss";

interface IButtonDropDownProps {
  name: string;
  options: Option[];
  onClick: (value: any) => void;
  color?: string;
  values?: string | number;
}

function ButtonDropDown(props: IButtonDropDownProps) {
  const ref = useRef(null);
  const { name = "Chọn", options, onClick, color, values } = props;
  const [value, setValue] = useState<Option>();
  const [title, setTitle] = useState<string>();
  const [show, setShow] = useState<boolean>(false);

  useClickOutSide(ref, () => setShow(false));

  useEffect(() => {
    onClick(value);
  }, [value]);
  return (
    <div className="ButtonDropDown__warpper" ref={ref}>
      <Button color={color} onClick={(e) => setShow((prev: boolean) => !prev)}>
        {options.find((o) => o.value === values)?.label ?? name}
        <IconArrowDown />
      </Button>
      {options && show && (
        <ul>
          {options.map((option, index) => (
            <li
              key={`popover-${index}`}
              onClick={() => {
                setValue(option);
                setTitle(option.label);
                setShow(false);
              }}
              className={title ? title : ""}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ButtonDropDown;
