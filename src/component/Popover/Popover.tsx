import React from "react";
import "./Popover.scss";
import { Option } from "../../types/general";
interface IpopoverProps {
  options?: Option[];
  children?: any;
  action?: (value: Option) => void;
}

function Popover(props: IpopoverProps) {
  const { options, children, action } = props;
  return (
    <div className="popover__wrapper">
      {options && (
        <ul>
          {options.map((option, index) => (
            <li
              key={`popover-${index}`}
              onClick={() => {
                action && action(option);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
      {children}
    </div>
  );
}

export default Popover;
