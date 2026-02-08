import { useState } from "react";
import DynamicForm from "../components/DynamicForm";
import UserTable from "../components/UserTable";
import { useUsers } from "../hooks/useUsers";
import * as api from "../api/userApi";
import type { User } from "../types/user";
import { Box, Typography } from "@mui/material";

export default function UsersPage() {
  const { users, loadUsers } = useUsers();
  const [editingUser, setEditingUser] = useState<User | undefined>(undefined);

  const handleSubmit = async (data: User) => {
    if (data.id) {
      await api.updateUser(data.id, data);
    } else {
      await api.createUser(data);
    }

    await loadUsers();
    setEditingUser(undefined);
  };

  const handleDelete = async (id: number) => {
    await api.deleteUser(id);
    await loadUsers();
  };

  const handleEditStart = (user: User) => {
    setEditingUser(user);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        py: 4,
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 900 }}>
        {/* 🔷 PAGE HEADING */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            mb: 2,
            textAlign: "center",
          }}
        >
          User Management
        </Typography>

        <DynamicForm
          key={editingUser?.id ?? "create"}
          initialData={editingUser}
          onSubmit={handleSubmit}
        />

        <UserTable
          users={users}
          onDelete={handleDelete}
          onEditStart={handleEditStart}
        />
      </Box>
    </Box>
  );
}
