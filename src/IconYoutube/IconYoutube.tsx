import "./IconYoutube.css";

export interface IIconYoutubeProps {
  className?: string;
}

export const IconYoutube = ({
  className,
  ...props
}: IIconYoutubeProps): JSX.Element => {
  return <img className={"icon-youtube " + className} src="icon-youtube.svg" />;
};
