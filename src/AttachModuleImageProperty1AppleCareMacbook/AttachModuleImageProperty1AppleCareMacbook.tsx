import "./AttachModuleImageProperty1AppleCareMacbook.css";
import { LogoAppleCare } from "../LogoAppleCare/LogoAppleCare";

export interface IAttachModuleImageProperty1AppleCareMacbookProps {
  className?: string;
}

export const AttachModuleImageProperty1AppleCareMacbook = ({
  className,
  ...props
}: IAttachModuleImageProperty1AppleCareMacbookProps): JSX.Element => {
  return (
    <div
      className={
        "attach-module-image-property-1-apple-care-macbook " + className
      }
    >
      <img
        className="mac-book-air-15-in-m-2-chip-starlight-pure-front-mac-book-air-13-in-m-2-chip-starlight-pure-back-screen-usen-1"
        src="mac-book-air-15-in-m-2-chip-starlight-pure-front-mac-book-air-13-in-m-2-chip-starlight-pure-back-screen-usen-10.png"
      />
      <LogoAppleCare className="logo-apple-care-instance"></LogoAppleCare>
    </div>
  );
};
