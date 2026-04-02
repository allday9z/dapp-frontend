import "./OrganismValuePropSectionDeviceDesktop.css";
import { ValuePropProperty1ValueProp1 } from "../ValuePropProperty1ValueProp1/ValuePropProperty1ValueProp1";
import { ValuePropProperty1ValueProp2 } from "../ValuePropProperty1ValueProp2/ValuePropProperty1ValueProp2";
import { ValuePropProperty1ValueProp3 } from "../ValuePropProperty1ValueProp3/ValuePropProperty1ValueProp3";

export interface IOrganismValuePropSectionDeviceDesktopProps {
  device?: "desktop" | "mobile";
  className?: string;
}

export const OrganismValuePropSectionDeviceDesktop = ({
  device = "desktop",
  className,
  ...props
}: IOrganismValuePropSectionDeviceDesktopProps): JSX.Element => {
  const variantsClassName = "device-" + device;

  return (
    <div
      className={
        "organism-value-prop-section-device-desktop " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="frame-1790">
        <ValuePropProperty1ValueProp1 className="value-2-instance"></ValuePropProperty1ValueProp1>
        <ValuePropProperty1ValueProp2
          property1="value-prop-2"
          className="value-3-instance"
        ></ValuePropProperty1ValueProp2>
        <ValuePropProperty1ValueProp3
          property1="value-prop-3"
          className="value-prop-instance"
        ></ValuePropProperty1ValueProp3>
      </div>
      <div className="line-24"></div>
    </div>
  );
};
