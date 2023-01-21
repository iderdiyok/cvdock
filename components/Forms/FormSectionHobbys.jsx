import { useEffect } from "react";
import { useToggle } from "@/hooks/useToggle";
import { Icon } from "@iconify/react";

import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { theme, modules, formats } from "quillOptions";

const angleUpIcon = <Icon icon="fa6-solid:angle-up" />;
const angleDownIcon = <Icon icon="fa6-solid:angle-down" />;

export default function FormSectionHobbys() {
  const [hobbysVisible, toggleHobbysVisible] = useToggle(false);
  
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
    <div className="hobbys">
      <h3 onClick={toggleHobbysVisible}>
        Hobbys {hobbysVisible ? angleUpIcon : angleDownIcon}
      </h3>
      {hobbysVisible && 
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
      }
    </div>
  );
}
