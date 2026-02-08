import type{ User } from "../types/user";

const BASE_URL = "http://localhost:3000/users";

export const getUsers = async (): Promise<User[]> => {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
};

export const createUser = async (user: User) => {
  await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
};

export const updateUser = async (id: number, user: User) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
};

export const deleteUser = async (id: number) => {
  await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
};
