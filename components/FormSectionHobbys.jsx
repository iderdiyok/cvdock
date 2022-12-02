import { useEffect } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { theme, modules, formats } from "quillOptions";

export default function FormSectionHobbys() {
  const { quill, quillRef } = useQuill({
    theme,
    modules,
    formats,
  });

  useEffect(() => {
    if (quill) {
      quill.on("text-change", (delta, oldDelta, source) => {
        console.log("Text change!");
        console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
      });
    }
  }, [quill]);

  return (
    <section className="form-editor__content">
      <div className="form-editor__content__hobbys">
        <div className="form-editor__content__text-area">
          <div className="form-editor__content__input-label-flex">
            <label htmlFor="description">Beschreibung</label>
            <div style={{ width: "100%", height: 200 }} id="description">
              <div ref={quillRef} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
