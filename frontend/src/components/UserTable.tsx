import type { User } from "../types/user";
import {
  Box,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Stack,
} from "@mui/material";

interface Props {
  users: User[];
  onDelete: (id: number) => void;
  onEditStart?: (user: User) => void;
}

export default function UserTable({ users, onDelete, onEditStart }: Props) {
  return (
    <Box sx={{ width: "100%" }}>
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          borderRadius: 2,
          p: 1,
        }}
      >
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>First</TableCell>
                <TableCell>Last</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Email</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {users.map((u) => (
                <TableRow key={u.id} hover>
                  <TableCell>{u.firstName}</TableCell>
                  <TableCell>{u.lastName}</TableCell>
                  <TableCell>{u.phone}</TableCell>
                  <TableCell>{u.email}</TableCell>
                  <TableCell align="right">
                    <Stack direction="row" spacing={1} justifyContent="flex-end">
                      <Button
                        size="small"
                        variant="contained"
                        onClick={() => onEditStart?.(u)}
                      >
                        Edit
                      </Button>
                      <Button
                        size="small"
                        color="error"
                        variant="outlined"
                        onClick={() => onDelete(u.id!)}
                      >
                        Delete
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
