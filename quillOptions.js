const theme = "snow";

const modules = {
  toolbar: [
    ["bold", "italic", "underline"],
    [{ align: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link"],
  ],
  clipboard: {
    matchVisual: false,
}
};

const formats = ["bold", "italic", "underline", "align", "list", "link"];

export { theme, modules, formats };
