import React from 'react'
import { IoMdAdd } from "react-icons/io";


interface MyButtonProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement> ) => void;
}

const AddButton: React.FC<MyButtonProps> = ({ onClick }) => {
  return (
    <div className="tasks_form w-[20%] h-full mx-4">
        <div onClick={onClick} className="add_task mb-4 py-4 rounded-2xl h-[7rem] flex justify-center items-center add_task border text-left px-4 border-zinc-300 transition ease-in-out w-full shadow-md hover:shadow-xl hover:cursor-pointer">
            <IoMdAdd />
        </div>
    </div>
  )
}

export default AddButton;
