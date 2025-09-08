import { Button } from "#components/Button";
import Image from "next/image";
import windowIcon from "#assets/window.svg?url";
import Window from "#assets/window.svg";

export const Header: React.FC = () => {
  return (
    <header>
      <h1>My Application</h1>
      <Image src={windowIcon} width={20} height={20} alt="window" />
      <Button>ログイン</Button>
      <Window width={20} />
    </header>
  );
};
