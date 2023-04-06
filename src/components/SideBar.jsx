import { Stack } from "@mui/material";
import { categories } from "../utils/constants";
import React from "react";

const SideBar = ({ setSelectedCategory }) => (
  <Stack direction="column" sx={{ height: "95%" }}>
    {categories.map((category) => {
      return (
        <button
          key={category.name}
          onClick={() => setSelectedCategory(category.name)}
        >
          <span>{category.icon} </span>
          <span>{category.name}</span>
        </button>
      );
    })}
  </Stack>
);

export default SideBar;
