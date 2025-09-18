import { test, expect, vi } from "vitest";
import * as notificationService from "../src/services/notificationService";

test("sendEmail is called correctly", async () => {
  const spy = vi.spyOn(notificationService, "sendEmail")
    .mockResolvedValue({ success: true });

  const result = await notificationService.sendEmail("test@mail.com", "Hello!");

  expect(spy).toHaveBeenCalledWith("test@mail.com", "Hello!");
  expect(result.success).toBe(true);

  spy.mockRestore();
});
