export const uploadNotes = (data) => {
  return {
    type: "UPLOAD_NOTE",
    payload: data,
  };
};
