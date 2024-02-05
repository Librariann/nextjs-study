import React from "react";
import styled from "styled-components";
import CreatableSelect from "react-select/creatable";
import { ActionMeta, OnChangeValue } from "react-select";
import { useNavigate } from "react-router-dom";

const CitySelect = () => {
  const navigate = useNavigate();
  const handleChange = (
    newValue: OnChangeValue<CityOption, false>,
    actionMeta: ActionMeta<CityOption>
  ) => {
    navigate(`{/${newValue?.value}`);
  };
  return (
    <SelectWrapper>
      <CreatableSelect
        onChange={handleChange}
        options={cityOptions}
        defaultValue={null}
        className="react-select-container"
        classNamePrefix="react-select"
      />
    </SelectWrapper>
  );
};

export default CitySelect;

const SelectWrapper = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex;end;
    align-items: center;
    gap: 20px;

    .react-select-container {
        width: 200px;
    }

    .react-select__control {
        border-radius: 20px;
    }

    .react-select__placeholder {
        color: #939cb0;
        font-weight:300;
        font-size: 18px;
    }

    .react-select__value-container {
        padding: 4px 12px;
    }

    @media (max-width: 980px) {
        .react-select-container {
            width: 350px;
        }
    }
`;
