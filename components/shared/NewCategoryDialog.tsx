"use client";

import { startTransition, useState } from "react";

import { Input } from "../ui/input";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const NewCategoryDialog = () => {
  const [newCategory, setNewCategory] = useState("");

  const handleAddCategory = () => {};

  return (
    <AlertDialog>
      <AlertDialogTrigger className="p-medium-14 flex w-full rounded-sm py-3 pl-8 hover:text-primary-500 hover:bg-primary-50 focus:text-primary-500">
        Open
      </AlertDialogTrigger>

      <AlertDialogContent className="bg-white">
        <AlertDialogHeader>
          <AlertDialogTitle>New Category</AlertDialogTitle>

          <AlertDialogDescription>
            <Input
              type="text"
              placeholder="Category Name"
              className="input-field mt-3"
              onChange={(e) => setNewCategory(e.target.value)}
            />
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => startTransition(handleAddCategory)}>
            Add
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default NewCategoryDialog;
