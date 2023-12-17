"use client";

import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import NewCategoryDialog from "./NewCategoryDialog";

import { ICategory } from "@/lib/database/models/Category.model";

type DropdownProps = {
  value: string;
  onChangeHandler?: () => void;
};

const Dropdown = ({ value, onChangeHandler }: DropdownProps) => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
      <SelectTrigger className="select-field">
        <SelectValue placeholder="Category" />
      </SelectTrigger>

      <SelectContent>
        {categories.length > 0 &&
          categories.map((cat) => (
            <SelectItem
              key={cat._id}
              value={cat._id}
              className="select-item p-regular-14"
            >
              {cat.name}
            </SelectItem>
          ))}

        <NewCategoryDialog />
      </SelectContent>
    </Select>
  );
};

export default Dropdown;
