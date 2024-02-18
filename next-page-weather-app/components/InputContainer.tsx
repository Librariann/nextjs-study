import Image from "next/image";
import React from "react";

type Props = {
  type: string;
  value?: string;
  placeholder?: string;
  iconAlt: string;
  iconSrc?: string;
  className?: string;
  onChangedHandler: (value: string) => void;
  onBlurHandler?: () => void;
};

const InputContainer = ({
  type,
  value,
  onChangedHandler,
  placeholder,
  iconAlt,
  iconSrc,
  onBlurHandler,
  className,
}: Props) => {
  return (
    <div>
      {iconSrc && <Image width={25} height={25} src={iconSrc} alt={iconAlt} />}
      <input
        type={type}
        value={value}
        className={`auth_input ${className}`}
        placeholder={placeholder}
        onBlur={onBlurHandler}
        onChange={(e) => onChangedHandler(e.target?.value)}
      />
    </div>
  );
};

export default InputContainer;
