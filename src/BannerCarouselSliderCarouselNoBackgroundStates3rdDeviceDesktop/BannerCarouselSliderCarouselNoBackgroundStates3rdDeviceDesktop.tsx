import "./BannerCarouselSliderCarouselNoBackgroundStates3rdDeviceDesktop.css";

export interface IBannerCarouselSliderCarouselNoBackgroundStates3rdDeviceDesktopProps {
  carousel?: "background" | "no-background";
  states?: "default" | "2nd" | "3rd";
  device?: "desktop" | "mobile";
  className?: string;
}

export const BannerCarouselSliderCarouselNoBackgroundStates3rdDeviceDesktop = ({
  carousel = "background",
  states = "default",
  device = "desktop",
  className,
  ...props
}: IBannerCarouselSliderCarouselNoBackgroundStates3rdDeviceDesktopProps): JSX.Element => {
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
