import "./HomepageBannerDeviceDesktop.css";

export interface IHomepageBannerDeviceDesktopProps {
  device?: "desktop" | "mobile";
  className?: string;
}

export const HomepageBannerDeviceDesktop = ({
  device = "desktop",
  className,
  ...props
}: IHomepageBannerDeviceDesktopProps): JSX.Element => {
  const variantsClassName = "device-" + device;

  return (
    <div
      className={
        "homepage-banner-device-desktop " + className + " " + variantsClassName
      }
    >
      <img className="image-119" src="image-1190.png" />
      <div className="frame-1757">
        <div className="available-3-18-from-799-or-133-16-mo-for-6-mo-before-trade-in">
          Available 3.18 from $799 or $133.16/mo. for 6 mo.* before trade-in{" "}
        </div>
        <img className="image-121" src="image-1210.png" />
      </div>
    </div>
  );
};
