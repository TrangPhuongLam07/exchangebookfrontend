export const base64ToFile = (base64String, fileName) => {
  // First, we need to decode the Base64 string into a binary buffer.
  const byteArray = atob(base64String);
  // Next, we need to create a Blob object from the binary buffer.

  // Finally, we can create a File object from the Blob object.
  const file = new File();
  file.data = byteArray;
  file.name = fileName;
  return file;
};
