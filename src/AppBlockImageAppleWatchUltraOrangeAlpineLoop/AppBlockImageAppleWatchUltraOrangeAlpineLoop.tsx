import "./AppBlockImageAppleWatchUltraOrangeAlpineLoop.css";

export interface IAppBlockImageAppleWatchUltraOrangeAlpineLoopProps {
  className?: string;
}

export const AppBlockImageAppleWatchUltraOrangeAlpineLoop = ({
  className,
  ...props
}: IAppBlockImageAppleWatchUltraOrangeAlpineLoopProps): JSX.Element => {
  return (
    <div
      className={
        "app-block-image-apple-watch-ultra-orange-alpine-loop " + className
      }
    >
      <img className="image-69" src="https://filebrowser-dapp-uficon.coolify.pve01.prod.uficon.com/api/public/dl/FH-wjIaJ/DAPP/TH_Macbook_Pro_M3_Space_Gray_PDP_Image_Position-1.jpg?inline=true"  alt="" />
    </div>
  );
};
