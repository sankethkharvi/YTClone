import React from "react";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const NavBar = () => (
  <Stack
    direction="row"
    alignItems="center"
    justifyContent="space-between"
    sx={{
      background: "black",
      position: "sticky",
    }}
  >
    <Link to="/" style={{ alignItems: "center", display: "flex" }}>
      <img src={logo} alt="logo" height="45" />
    </Link>

    <SearchBar></SearchBar>
  </Stack>
);

export default NavBar;
