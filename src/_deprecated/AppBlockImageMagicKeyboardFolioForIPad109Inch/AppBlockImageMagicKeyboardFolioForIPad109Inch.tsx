import "./AppBlockImageMagicKeyboardFolioForIPad109Inch.css";

export interface IAppBlockImageMagicKeyboardFolioForIPad109InchProps {
  className?: string;
}

export const AppBlockImageMagicKeyboardFolioForIPad109Inch = ({
  className,
  ...props
}: IAppBlockImageMagicKeyboardFolioForIPad109InchProps): JSX.Element => {
  return (
    <div
      className={
        "app-block-image-magic-keyboard-folio-for-i-pad-109-inch " + className
      }
    >
      <img className="image-72" src="/image-720.png"  alt="" />
    </div>
  );
};
