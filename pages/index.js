import React from "react";
import { Box, Typography, TextField, IconButton, Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid green",
          p: 2,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Brand Name
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search..."
            sx={{
              width: { xs: "150px", sm: "200px", md: "300px" },
            }}
          />
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Box>
        <Avatar sx={{ bgcolor: "blue" }}>J</Avatar>
      </Box>

      {/* Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          flex: 1,
          gap: 2,
          p: 2,
        }}
      >
        {/* Left Content */}
        <Box
          sx={{
            flex: 1,
            bgcolor: "lightgray",
            border: "1px solid gray",
            borderRadius: "4px",
            height: { xs: "200px", md: "auto" },
          }}
        ></Box>

        {/* Right Content */}
        <Box
          sx={{
            flex: 1,
            bgcolor: "lightgray",
            border: "1px solid gray",
            borderRadius: "4px",
            height: { xs: "200px", md: "auto" },
          }}
        ></Box>
      </Box>
    </Box>
  );
}
