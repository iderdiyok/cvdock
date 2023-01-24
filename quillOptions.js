const theme = "snow";

const modules = {
  toolbar: [
    [{header: [1,2,3,4,5,6, false]}],
    [{font: []}],
    ["bold", "italic", "underline"],
    [{ align: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link"],
  ]
};

const formats = ["bold", "italic", "underline", "align", "list", "link"];

export { theme, modules, formats };
