"use client";
import React, {
  FormEvent,
  useState,
  FC,
  ChangeEvent,
  useEffect,
  MouseEvent,
} from "react";
import { Navbar } from "../Navbar";
import MaxWidthWrapper from "@/components/MaxWIdthWrapper";
import AddButton from "./AddButton";
import "./style.css";
import { ITask } from "../../interfaces";
import NewTaskDialog from "./taskDialog";
import TodoTask from "./TodoTask";

const Tasks: FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [todoList, setTodoList] = useState<ITask[] | null>([]);
  const [task, setTask] = useState<string>("");
  const [taskDescription, setTaskDescription] = useState<string>("");
  const [taskColor, setTaskColor] = useState<string | null>(null);
  const [selectedDiv, setSelectedDiv] = useState<number | null>(null);

  const handleTaskChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (task !== null) {
      setTask(e.target.value);
    }
  };

  const handleDescriptionChange = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    if (taskDescription !== null) {
      setTaskDescription(e.target.value);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (task !== "") {
      setTodoList([
        ...todoList,
        { taskName: task, description: taskDescription, color: taskColor },
      ]);
      setIsDialogOpen(false);
    }
  };

  const handleColorClick = (e: MouseEvent<HTMLDivElement>, index: number): void => {
    const color = window.getComputedStyle(e.target as HTMLDivElement).backgroundColor;
    setTaskColor(color);
    setSelectedDiv(index);
  };

  const handleDeleteTask = (taskName: string): void => {
    setTodoList(todoList.filter((task) => task.taskName !== taskName));
  };

  const handleEdit = (taskId: number): void => {
    const tmpList = todoList;
    const selItem = tmpList.filter((t) => t.id === taskId);
  }

  useEffect(() => {
    console.log(todoList);
    setTask("");
    setTaskDescription("");
    setTaskColor("");
  }, [todoList]);

  return (
    <>
      <Navbar />
      <MaxWidthWrapper className="px-8 mb-12 text-center min-h-screen pt-12">
        <div className="tasks-container border border-zinc-300 w-[85%] mx-auto shadow-lg rounded-lg">
          <h1 className="text-left ml-4 mt-6 text-xl font-medium w-[80%]">
            My Tasks
          </h1>
          <div className="todos-wrapper flex flex-wrap mx-auto mt-12 w-[100%]">
            {todoList.map((task: ITask, key: number) => {
              return (
                <TodoTask
                  key={key}
                  task={task}
                  onDelete={handleDeleteTask}
                />
              );
            })}
            <AddButton onClick={() => setIsDialogOpen(true)} />
          </div>
        </div>
        <div className="tasks-container border border-zinc-300 w-[85%] mx-auto shadow-lg mt-12 rounded-lg">
          <h1 className="text-left ml-4 mt-6 text-xl font-medium w-[80%]">
            Completed
          </h1>
          <div className="todos-wrapper flex flex-wrap justify-stretch mx-auto mt-12 w-[100%]"></div>
        </div>
        <NewTaskDialog
          isOpen={isDialogOpen}
          onOpenChange={setIsDialogOpen}
          onSubmit={handleSubmit}
          onTaskChange={handleTaskChange}
          onDescriptionChange={handleDescriptionChange}
          onColorClick={handleColorClick}
          selectedDiv={selectedDiv}
        />
      </MaxWidthWrapper>
    </>
  );
};

export default Tasks;
