import React, { useState } from "react";
import { Box, Typography, TextField, IconButton, Avatar, useMediaQuery } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function Home() {
  const [searchVisible, setSearchVisible] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  // Toggle search visibility on smaller screens
  const toggleSearchVisibility = () => {
    setSearchVisible(!searchVisible);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        bgcolor: "#f9f9f9", // Light background for the entire page
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "2px solid #4caf50", // Green border
          bgcolor: "#ffffff", // White header background
          p: 2,
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)", // Subtle shadow for the header
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", color: "#4caf50" }} // Green brand name
        >
          Brand Name
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {/* Search Box and Icon for Small Screens */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search..."
              sx={{
                width: { xs: "150px", sm: "200px", md: "300px" },
                bgcolor: "#f1f8e9", // Light greenish background
                borderRadius: "4px",
              }}
              InputProps={{
                style: {
                  color: "#4caf50", // Green text
                },
              }}
            />
            <IconButton>
              <SearchIcon sx={{ color: "#4caf50" }} />
            </IconButton>
          </Box>

          {/* Toggle Search Box for Small Screens */}
          <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}>
            <IconButton onClick={toggleSearchVisibility}>
              <SearchIcon sx={{ color: "#4caf50" }} />
            </IconButton>

            {searchVisible && (
              <TextField
                variant="outlined"
                size="small"
                placeholder="Search..."
                sx={{
                  width: "200px",
                  bgcolor: "#f1f8e9", // Light greenish background
                  ml: 1,
                  borderRadius: "4px",
                }}
                InputProps={{
                  style: {
                    color: "#4caf50", // Green text
                  },
                }}
              />
            )}
          </Box>

          {/* Avatar and Name for larger screens */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Avatar sx={{ bgcolor: "#4caf50", color: "#ffffff" }}>J</Avatar>
          {!isSmallScreen && (
            <Typography variant="body1" sx={{ fontWeight: "bold", color: "#4caf50" }}>
              John
            </Typography>
          )}
        </Box>
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
            bgcolor: "#e0f7fa", // Light cyan background
            border: "1px solid #b2ebf2", // Light blue border
            borderRadius: "4px",
            height: { xs: "200px", md: "auto" },
          }}
        ></Box>

        {/* Right Content */}
        <Box
          sx={{
            flex: 1,
            bgcolor: "#e0f7fa", // Light cyan background
            border: "1px solid #b2ebf2", // Light blue border
            borderRadius: "4px",
            height: { xs: "200px", md: "auto" },
          }}
        ></Box>
      </Box>
    </Box>
  );
}
