import { useToggle } from "@/hooks/useToggle";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { theme, modules, formats } from "quillOptions";

const angleUpIcon = <Icon icon="fa6-solid:angle-up" />;
const angleDownIcon = <Icon icon="fa6-solid:angle-down" />;

export default function FormSectionHobbys({ hobbys, setHobbys }) {
  const [hobbysVisible, toggleHobbysVisible] = useToggle(false);

  return (
    <div className="hobbys">
      <h3 onClick={toggleHobbysVisible}>
        Hobbys{" "}
        <span className="angleIcon">
          {hobbysVisible ? angleUpIcon : angleDownIcon}
        </span>
      </h3>
      {hobbysVisible && (
        <motion.div 
          className="hobbyEditor"
          key="content"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { opacity: 1, height: "auto" },
            collapsed: { opacity: 0, height: 0 }
          }}
          transition = {{ duration: .3 }}
        >
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
        </motion.div>
      )}
    </div>
  );
}
