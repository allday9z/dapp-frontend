import "./AppBlockImageIPadPro.css";

export interface IAppBlockImageIPadProProps {
  className?: string;
}

export const AppBlockImageIPadPro = ({
  className,
  ...props
}: IAppBlockImageIPadProProps): JSX.Element => {
  return (
    <div className={"app-block-image-i-pad-pro " + className}>
      <img className="image-71" src="https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/MacBook_Air_13-inch_M4_Non-AI_Mar25_Sky_Blue_PDP_Image_Position_1__TH-TH.jpg?inline=true"  alt="" />
    </div>
  );
};
