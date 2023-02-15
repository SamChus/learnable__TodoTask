import { useState, useContext } from "react";
import styled from "styled-components";
import TaskAble from "../Components/DoWithTask";
import TaskInput from "../Components/TaskInput";
import ThemeToggle from "../Components/ThemeToggle";
import { ThemeContext } from "../Contexts/ThemeContext";

const Container = styled.div`
  padding: 40px 28px;

  h1 {
    font-size: 2rem;
    color: #fff;
    letter-spacing: 6px;
    font-weight: 600;
  }
`;
const Header = styled.header`
  background: ${({ isLight }) =>
    isLight
      ? "url(./img/bg-mobile-light.jpg)"
      : "url(./img/bg-mobile-dark.jpg)"};
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  height: 200px;
`;

const Body = styled.div`
  background: ${({ theme }) => theme.c2};
  width: 100%;
  height: 100vh;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Home = () => {
  const { isLight, light, dark } = useContext(ThemeContext);
  let mode = isLight ? "-sun" : "-moon";
  const theme = isLight ? light : dark;

  const [task, setTask] = useState([]);
  const [input, setInput] = useState("");

  const habdleChange = (event) => {
    const { value } = event.target;
    setInput(value);
  };

  const handleSubmit = (event) => {
      event.preventDefault();
      setTask((value) => {
        return [...value, input];
      });
      setInput("");
  };

  return (
    <>
      <Header isLight={isLight}>
        <Container>
          <Flex>
            <h1>TODO</h1>
            <ThemeToggle mode={mode} />
          </Flex>
          <TaskInput
            onChange={habdleChange}
            onSubmit={handleSubmit}
            input={input}
          />
        </Container>
      </Header>
      <Body theme={theme}>
        <Container>
          <TaskAble
            task={task}
            setTask={setTask}
            onClick={habdleChange}
            theme={theme}
          />
        </Container>
      </Body>
    </>
  );
};

export default Home;
