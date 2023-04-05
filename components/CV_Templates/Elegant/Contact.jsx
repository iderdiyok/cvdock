import { Icon } from '@iconify/react'

export default function Contact({personal}) {
  return (
    <div className="contact">
          <h4>KONTAKT</h4>
          <hr />
          <div className="label">
            <Icon icon="fa6-solid:square-phone" style={{ fontSize: "24px" }} />
            <span>{personal.phone}</span>
          </div>
          <div className="label">
            <Icon
              icon="fa6-solid:square-envelope"
              style={{ fontSize: "24px" }}
            />
            <span>{personal.email}</span>
          </div>
          <div className="label">
            <Icon icon="fa-brands:github-square" style={{ fontSize: "24px" }} />
            <span>{personal.website}</span>
          </div>
          <div className="label">
            <Icon icon="fa-brands:linkedin" style={{ fontSize: "24px" }} />
            <span>{personal.linkedin}</span>
          </div>
        </div>
  )
}
