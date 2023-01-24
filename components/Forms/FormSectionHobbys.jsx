import { useToggle } from "@/hooks/useToggle";
import { Icon } from "@iconify/react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { theme, modules, formats } from "quillOptions";

const angleUpIcon = <Icon icon="fa6-solid:angle-up" />;
const angleDownIcon = <Icon icon="fa6-solid:angle-down" />;

export default function FormSectionHobbys({hobbys, setHobbys}) {
  const [hobbysVisible, toggleHobbysVisible] = useToggle(false);

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
                <div id="description">
                  <ReactQuill 
                    theme={theme}
                    modules={modules}
                    value={hobbys} 
                    onChange={setHobbys}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      }
    </div>
  );
}