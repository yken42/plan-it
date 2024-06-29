import React, { FC, FormEvent, ChangeEvent } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { INewTaskDialogProps } from "../../interfaces";

const NewTaskDialog: FC<INewTaskDialogProps> = ({
  isOpen,
  onOpenChange,
  onSubmit,
  onTaskChange,
  onDescriptionChange,
  onColorClick,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Task</DialogTitle>
          <DialogDescription>
            <form onSubmit={onSubmit}>
              <h3 className="pt-6 pb-2 font-medium">Task Name</h3>
              <input
                type="text"
                className="w-full border border-zinc-300 shadow-lg"
                onChange={onTaskChange}
              />
              <h3 className="pt-6 pb-2 font-medium">Description</h3>
              <input
                type="text"
                className="w-full border pb-24 border-zinc-300 shadow-lg"
                style={{ resize: "none" }}
                onChange={onDescriptionChange}
              />
              <div className="picker flex">
                <h3 className="pt-6 font-medium">Pick Color</h3>
                <div className="w-12 h-12 border border-zinc-300 mt-3 ml-4"></div>
              </div>

              <div
                className="color_pick w-[50%] flex justify-between mt-2"
                onClick={onColorClick}
              >
                <div className="w-10 h-10 border border-zinc-300 bg-[#9BEBEC]"></div>
                <div className="w-10 h-10 border border-zinc-300 bg-[#ECB6F6]"></div>
                <div className="w-10 h-10 border border-zinc-300 bg-[#934BFC]"></div>
                <div className="w-10 h-10 border border-zinc-300 bg-yellow-300"></div>
                <div className="w-10 h-10 border border-zinc-300 bg-[deeppink]"></div>
              </div>
              <DialogClose>
                <Button variant="black" className="mt-6">
                  Submit
                </Button>
              </DialogClose>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default NewTaskDialog;
