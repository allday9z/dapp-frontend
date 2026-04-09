import "./AppBlockImageIPadAir.css";

export interface IAppBlockImageIPadAirProps {
  className?: string;
}

export const AppBlockImageIPadAir = ({
  className,
  ...props
}: IAppBlockImageIPadAirProps): JSX.Element => {
  return (
    <div className={"app-block-image-i-pad-air " + className}>
      <img className="image-70" src="https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/TH_MacBook_Air_15_in_M3_Midnight_PDP_Image_Position_1.jpg?inline=true"  alt="" />
    </div>
  );
};
