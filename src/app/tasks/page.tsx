"use client";
import React, { FormEvent, useState } from "react";
import { Navbar } from "../Navbar";
import MaxWidthWrapper from "@/components/MaxWIdthWrapper";
import AddButton from './AddButton';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import { Description } from "@radix-ui/react-dialog";

interface Todo {
  taskName: string;
  description?: string;
  priorety?: string;
}

const Tasks = () => {
  const userTasks: Todo = {
    taskName: "Grocerries",
    description: "Buy milk",
  }

  const [isDialogOpen, setIsDialogOpen] = useState<Boolean>(false);
  const [todoList, setTodoList] = useState<Array<Todo>>([]);
  const [task, setTask] = useState<String>();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodoList(prev => [...prev, {taskName: "Buy Milk (I'm dad)", description: "never return back home"}])
  }

  const handleAddTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTask(e.target.value);
  }
  return (
    <>
      <Navbar />
      <MaxWidthWrapper className="px-8 mb-12 text-center min-h-screen">
        <h1 className="text-left ml-40 text-xl font-medium pt-12">My Tasks</h1>
        <div className="todos-wrapper flex flex-wrap justify-stretch mx-auto mt-12 w-[80%]">
        {
          todoList.map((todo: Todo, index: number) => {
            return(
              <div className="tasks_form w-[20%] h-full mx-4 ">
                <div className="bg-[#9BEBEC]/50 h-fit mb-4 py-4 rounded-2xl add_task border text-left px-4 border-zinc-300 transition ease-in-out w-full shadow-md hover:shadow-xl">
                  <h1 className="font-bold text-lg">#24 groceries</h1>
                  <h3 className="text-md pt-2">Buy: Milk, Bread, Yogurt, Vegtables, Fruits, Chicken </h3>
                  <p className="text-right text-zinc-600 text-sm pt-4">12hrs ago</p>
                </div>
              </div>
            )
          })
        }
        <AddButton onClick={() => setIsDialogOpen(true)}/>
        </div>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>New Task</DialogTitle>
              <DialogDescription>
                <form onSubmit={handleSubmit}>
                  <h3 className="pt-6 pb-2 font-medium">Task Name</h3>
                  <input type='text' className="w-full border border-zinc-300 shadow-lg" onChange={handleAddTask}/>
                  <h3 className="pt-6 pb-2 font-medium">Description</h3>
                  <textarea className="w-full border border-zinc-300 h-24 shadow-lg" style={{resize: "none"}} />
                  <DialogClose>
                    <Button variant='black' className="mt-6">Submit</Button>
                  </DialogClose>
                </form>
              </DialogDescription>
            </DialogHeader>
            
          </DialogContent>
        </Dialog>
      </MaxWidthWrapper>
    </>
  );
};

export default Tasks;
