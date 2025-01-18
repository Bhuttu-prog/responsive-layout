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
        p: 2,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid green",
          pb: 1,
          mb: 2,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Brand Name
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <TextField
            size="small"
            variant="outlined"
            placeholder="Search..."
            sx={{ width: "200px" }}
          />
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Avatar sx={{ bgcolor: "blue" }}>J</Avatar>
          <Typography>John</Typography>
        </Box>
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          display: "flex",
          flex: 1,
          gap: 2,
          flexDirection: { xs: "column", md: "row" }, // Responsive layout
        }}
      >
        <Box
          sx={{
            flex: 1,
            border: "1px solid lightgray",
            bgcolor: "whitesmoke",
            minHeight: "200px",
          }}
        />
        <Box
          sx={{
            flex: 1,
            border: "1px solid lightgray",
            bgcolor: "whitesmoke",
            minHeight: "200px",
          }}
        />
      </Box>
    </Box>
  );
}
