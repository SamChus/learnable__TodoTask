import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";

const Input = styled.input`
  outline: none;
  border: none;
  background: transparent;
  margin-left: 9px;
  padding: 0;
  width: 100%;
  color: ${({ theme }) => theme.c5};

  &::placeholder {
    color: ${({ theme }) => theme.c4};
    opacity: 0.6;
    font-size: 0.8rem;
    letter-spacing: 3px;
  }
`;

const Field = styled.div`
  display: flex;
  align-content: center;
  width: 100%;
  padding: 14px 20px;
  background: ${({ theme }) => theme.c2};
  border-radius: 7px;
  font-size: 0.9rem;
  letter-spacing: 2px;
  line-height: 1.5;

  & > button {
    background: transparent;
    border: none;
    outline: none;
  }
`;

const Button = styled.img`
  background: ${({ theme }) => theme.c2};
  width: 23px;
  height: 23px;
  border-radius: 100%;
  padding: 6px;
  outline: none;
  align-self: center;

  background: linear-gradient(to right, #c058f3, #c779d0, #4bc0c8);
  border: 1px solid ${({ theme }) => theme.c5};
`;

const TaskInput = ({ onChange, onSubmit, input }) => {
  const { isLight, light, dark } = useContext(ThemeContext);
  const theme = isLight ? light : dark;

  const disable = () => {
    if (input.trim() === "") {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <Field theme={theme}>
        <Input
          autoFocus={true}
          placeholder={"Create a new todo.."}
          theme={theme}
          type="text"
          name="input"
          required
          value={input}
          onChange={onChange}
        />
        <button disabled={disable()} onClick={onSubmit}>
          <Button theme={theme} src="./img/icon-check.svg" alt="" />
        </button>
      </Field>
    </>
  );
};

export default TaskInput;
