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
  selectedDiv,
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
              </div>

              <div className="color_pick w-[55%] flex justify-between mt-2">
                {["#AB9FB9", "#89A3A4", "#FDA581", "#E4C6CE", "#7A6B8C"].map(
                  (color: string, index: number) => (
                    <div
                      key={index}
                      className={`w-10 h-10 ${
                        selectedDiv === index ? "border-2 border-black " : null
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={(e) => onColorClick(e, index)}
                    ></div>
                  )
                )}
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
