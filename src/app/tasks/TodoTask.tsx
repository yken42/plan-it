import React from "react";
import { ITask } from "@/interfaces";
import "./style.css";
import { FaTrashCan } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";

interface Props {
  task: ITask;
  onDelete: (taskName: string) => void;
}

const TodoTask: React.FC<Props> = ({ task, onDelete }: Props) => {
  return (
    <>
      <div className="tasks_form h-full mx-4 mb-6 sm:1/2 md:w-1/5">
        <div
          className={
            "relative min-h-40 mb-4 py-4 rounded-2xl add_task border text-left px-4 border-zinc-300 transition ease-in-out w-full shadow-md hover:shadow-xl"
          }style={{ backgroundColor: task.color }}>
          <h1 className="font-bold text-lg break-words">{task.taskName}</h1>
          <h3 className="text-md pt-2">{task.description}</h3>
          <div className="task-buttons absolute bottom-2 right-4 flex gap-2">
            <FaEdit className="md:hover:cursor-pointer hover:text-zinc-700" />
            <FaTrashCan
              className="md:hover:cursor-pointer hover:text-zinc-700"
              onClick={() => onDelete(task.taskName)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoTask;
