import "./SocialIcons.css";
import { IconTwitter } from "../IconTwitter/IconTwitter";
import { IconFacebook } from "../IconFacebook/IconFacebook";
import { IconInstagram } from "../IconInstagram/IconInstagram";
import { IconTiktok } from "../IconTiktok/IconTiktok";
import { IconYoutube } from "../IconYoutube/IconYoutube";

export interface ISocialIconsProps {
  visibleIconTwitter?: boolean;
  className?: string;
}

export const SocialIcons = ({
  visibleIconTwitter = true,
  className,
  ...props
}: ISocialIconsProps): JSX.Element => {
  return (
    <div className={"social-icons " + className}>
      {visibleIconTwitter && (
        <>
          <IconTwitter className="icon-twitter-instance"></IconTwitter>
        </>
      )}
      <IconFacebook className="icon-facebook-instance"></IconFacebook>
      <IconInstagram className="icon-instagram-instance"></IconInstagram>
      <IconTiktok className="icon-tiktok-instance"></IconTiktok>
      <IconYoutube className="icon-youtube-instance"></IconYoutube>
    </div>
  );
};
