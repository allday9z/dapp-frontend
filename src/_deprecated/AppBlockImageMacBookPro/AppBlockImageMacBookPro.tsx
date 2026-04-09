import "./AppBlockImageMacBookPro.css";

export interface IAppBlockImageMacBookProProps {
  className?: string;
}

export const AppBlockImageMacBookPro = ({
  className,
  ...props
}: IAppBlockImageMacBookProProps): JSX.Element => {
  return (
    <div className={"app-block-image-property-1-mac-book-pro " + className}>
      <img className="image-58" src="https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/iPhone_Air_Sky_Blue_PDP_Image_Position_1_Sky_Blue_Color__TH-TH-square_medium.jpg?inline=true"  alt="" />
    </div>
  );
};

