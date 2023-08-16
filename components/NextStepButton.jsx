import { Icon } from "@iconify/react";

export default function NextStepButton({handleSubmit, text, icon}) {
  return (
    <div className="next-step">
        <div
          className="button-box"
          onClick={(e) => handleSubmit(e, true)}
          style={{ color: "white" }}
        >
          {text}
          <Icon icon={icon} style={{marginLeft: ".5em"}} />
        </div>
      </div>
  )
}
