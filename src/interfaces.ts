import { FormEvent, ChangeEvent } from "react";

export interface ITask {
    taskName: string;
    description: string;
    color: string;
}

export interface INewTaskDialogProps {
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
    onTaskChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onDescriptionChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    onColorClick: (e) => void;
    selectedDiv: number;
  }