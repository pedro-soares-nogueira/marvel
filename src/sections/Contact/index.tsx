import { ContactButton, ContactContainer } from "./index.styles";
import contactBg from "../../assets/spider_man_contact.png";

export const Contact = () => {
  return (
    <ContactContainer>
      <span>
        "Let's do this <strong>one last</strong> time"
      </span>
      <ContactButton>Me mande uma mensagem!</ContactButton>
      <img src={contactBg} alt="" />
    </ContactContainer>
  );
};
