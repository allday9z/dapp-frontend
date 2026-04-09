import "./AppBlockImageIMac.css";

export interface IAppBlockImageIMacProps {
  className?: string;
}

export const AppBlockImageIMac = ({
  className,
  ...props
}: IAppBlockImageIMacProps): JSX.Element => {
  return (
    <div className={"app-block-image-i-mac " + className}>
      <img className="image-60" src="https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/iPhone_16_Ultramarine_PDP_Image_Position_1a_Ultramarine_Color__TH-TH.jpg?inline=true"  alt="" />
    </div>
  );
};
