import { Contrast } from "@mui/icons-material";

export const base64ToFile = (base64String, fileName) => {
  // First, we need to decode the Base64 string into a binary buffer.
  const binaryBuffer = atob(base64String);

  // Next, we need to create a Blob object from the binary buffer.
  const blob = new Blob([binaryBuffer], { type: "application/octet-stream" });

  // Finally, we can create a File object from the Blob object.
  const file = new File([blob], fileName);
  return file;
};
