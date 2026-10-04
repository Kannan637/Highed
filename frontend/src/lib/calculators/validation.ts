import type { z } from "zod";

export type FieldErrors<T> = Partial<Record<keyof T, string>>;

export type ValidationResult<T> =
  | { success: true; data: T; errors: FieldErrors<T> }
  | { success: false; data: null; errors: FieldErrors<T> };

/** Runs a Zod schema and flattens issues to the first message per top-level field. */
export function validate<S extends z.ZodType>(schema: S, input: unknown): ValidationResult<z.infer<S>> {
  const result = schema.safeParse(input);
  if (result.success) return { success: true, data: result.data, errors: {} };
  const errors: FieldErrors<z.infer<S>> = {};
  for (const issue of result.error.issues) {
    const key = issue.path[0] as keyof z.infer<S> | undefined;
    if (key !== undefined && !errors[key]) errors[key] = issue.message;
  }
  return { success: false, data: null, errors };
}
