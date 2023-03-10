import { useToggle } from "@/hooks/useToggle";
import { Icon } from "@iconify/react";
import SkillList from "./SkillList";

const angleUpIcon = <Icon icon="fa6-solid:angle-up" />;
const angleDownIcon = <Icon icon="fa6-solid:angle-down" />;

export default function FormSectionSkills({ skillList, setSkillList }) {
  const [skillsVisible, toggleSkillsVisible] = useToggle(false);

  const handleSkillRemove = (index) => {
    const list = [...skillList];
    list.splice(index, 1);
    setSkillList(list);
  };

  const handleSkillAdd = () => {
    setSkillList([...skillList, []]);
  };

  return (
    <div className="skills">
      <h3 onClick={toggleSkillsVisible}>
        Skills{" "}
        <span className="angleIcon">
          {skillsVisible ? angleUpIcon : angleDownIcon}
        </span>
      </h3>
      {skillsVisible && (
        <div className="skill-list">
          {skillList.map((singleSkill, index) => (
            <div className="skill" key={index}>
              <SkillList
                index={index}
                skillList={skillList}
                setSkillList={setSkillList}
                singleSkillData={singleSkill}
              />
              {skillList.length !== 1 && (
                <>
                  <div className="form-editor__content__function-buttons--end">
                    <button
                      onClick={handleSkillRemove}
                      id="remove-button"
                      className="remove-button"
                    >
                      <Icon icon="fa6-solid:trash" />
                      <span>Löschen</span>
                    </button>
                  </div>
                  <hr />
                </>
              )}
              {skillList.length - 1 === index && (
                <div className="form-editor__content__function-buttons--w-100">
                  <button
                    className="add-new-item-button"
                    onClick={handleSkillAdd}
                  >
                    <Icon icon="fa6-solid:square-plus" />
                    <span>Weitere Skills hinzufügen</span>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
