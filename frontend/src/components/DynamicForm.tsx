import { useForm } from "react-hook-form";
import { TextField, Button, Stack, Box, Typography } from "@mui/material";
import { userFormSchema } from "../config/userFormSchema";
import type { User } from "../types/user";
import { useEffect } from "react";

interface Props {
  initialData?: User;
  onSubmit: (data: User) => void;
}

export default function DynamicForm({ initialData, onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<User>({
    defaultValues: {},
    shouldUnregister: true,
  });

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);

  const submit = (data: User) => {
    onSubmit(
      initialData?.id ? { ...initialData, ...data } : data
    );

    reset();
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 700, mx: "auto", mb: 4 }}>
      <Box
        component="form"
        onSubmit={handleSubmit(submit)}
        sx={{
          bgcolor: "#fff",
          p: 4,
          borderRadius: 3,
          boxShadow: 6,
        }}
      >
        <Stack spacing={3}>
          {userFormSchema.map((field) => {
            const name = field.name as keyof User;

            return (
              <Box key={field.name}>
                <Typography sx={{ fontSize: 14, fontWeight: 500, mb: 0.5 }}>
                  {field.label}
                </Typography>

                <TextField
                  fullWidth
                  type={field.type}
                  {...register(name, {
                    required: field.required
                      ? field.requiredMessage
                      : false,
                    pattern: field.pattern
                      ? {
                          value: field.pattern,
                          message: field.patternMessage,
                        }
                      : undefined,
                  })}
                  error={!!errors[name]}
                />

                {errors[name] && (
                  <Typography
                    sx={{ color: "error.main", fontSize: 12, mt: 0.5 }}
                  >
                    {errors[name]?.message as string}
                  </Typography>
                )}
              </Box>
            );
          })}

          <Button type="submit" variant="contained" size="large" fullWidth>
            {initialData ? "Update" : "Save"}
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
