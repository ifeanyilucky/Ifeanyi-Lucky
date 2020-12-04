import { Icon, Moon } from "../Icons";
import Link from "next/link";

const Toggle = ({ theme, toggleTheme }) => {
  console.log(theme);
  return (
    <div>
      <Link href="#0">
        <a onClick={toggleTheme}>
          <Moon />
        </a>
      </Link>
    </div>
  );
};

export default Toggle;
