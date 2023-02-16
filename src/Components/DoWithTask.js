import styled from "styled-components";

const Button = styled.img`
  background: ${({ theme }) => theme.c2};
  width: 23px;
  height: 23px;
  border-radius: 100%;
  padding: 4px;
  margin-right: 8px;
  outline: none;
  align-self: center;
  position: relative;

  background: linear-gradient(to right, #c058f3, #c779d0, #4bc0c8);
  border: 1px solid ${({ theme }) => theme.c5};
`;

const TaskBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px auto;
  width: 100%;
  padding: 14px 20px;
  background: ${({ theme }) => theme.c5};
  border-radius: 7px;
  font-size: 0.9rem;
  letter-spacing: 2px;
  line-height: 1.5;
  color: ${({ theme }) => theme.c1};

  img:last-of-type {
    width: 17px;
    height: 17px;
  }

  div {
    display: flex;
  }
`;



const TaskAble = ({ task, onSubmit, theme, setTask }) => {
  const handleDelete = (index) => {
    const tasking = [...task];

    const newTask = tasking.filter((id) => index !== tasking.indexOf(id));
    setTask(newTask);
  };

  return (
    <div>
      {task.map((data, i) => {
        return (
          <TaskBody theme={theme} key={i}>
            <div>
              <Button
                onClick={onSubmit}
                theme={theme}
                src="./img/icon-check.svg"
                alt=""
              />
              {data}
            </div>
            <img
              src="./img/icon-cross.svg"
              alt=""
              onClick={() => handleDelete(i)}
            />
          </TaskBody>
        );
      })}
    </div>
  );
};

export default TaskAble;
