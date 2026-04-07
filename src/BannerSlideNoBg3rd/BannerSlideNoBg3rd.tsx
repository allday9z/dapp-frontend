import "./BannerSlideNoBg3rd.css";

export interface IBannerSlideNoBg3rdProps {
  carousel?: "background" | "no-background";
  states?: "default" | "2nd" | "3rd";
  device?: "desktop" | "mobile";
  className?: string;
}

export const BannerSlideNoBg3rd = ({
  carousel = "background",
  states = "default",
  device = "desktop",
  className,
  ...props
}: IBannerSlideNoBg3rdProps): JSX.Element => {
  const variantsClassName =
    "carousel-" + carousel + " states-" + states + " device-" + device;

  return (
    <div
      className={
        "banner-carousel-slider-carousel-no-background-states-3rd-device-desktop " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="c-controller">
        <div className="_1"></div>
        <div className="_2"></div>
        <div className="_3"></div>
      </div>
    </div>
  );
};
