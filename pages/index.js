import React from "react";
import { Box, Typography, TextField, IconButton, Avatar, useMediaQuery } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function Home() {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

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

        {/* Avatar and Name for larger screens */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Avatar sx={{ bgcolor: "blue" }}>J</Avatar>
          {!isSmallScreen && (
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              John
            </Typography>
          )}
        </Box>
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
