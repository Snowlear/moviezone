import { getCurrentYear } from "../../helpers/DateHelper";
import footerTextStyles from "./FooterText.module.css";

export default function FooterText({ text, link }: FooterTextProps) {
  return (
    <footer className={footerTextStyles.footer}>
      {link != undefined ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {text} ©{getCurrentYear()}
        </a>
      ) : (
        text + " ©" + getCurrentYear()
      )}
    </footer>
  );
}

interface FooterTextProps {
  text: string;
  link?: string;
}
