export const getFileExtension = (filename) => {
  return filename.slice(filename.lastIndexOf('.') + 1);
};
