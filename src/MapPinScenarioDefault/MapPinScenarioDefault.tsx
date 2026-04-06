import "./MapPinScenarioDefault.css";

export interface IMapPinScenarioDefaultProps {
  className?: string;
}

export const MapPinScenarioDefault = ({
  className,
  ...props
}: IMapPinScenarioDefaultProps): JSX.Element => {
  return (
    <div className={"map-pin-scenario-default " + className}>
      <img className="frame-1529" src="/frame-15290.svg"  alt="" />
    </div>
  );
};
