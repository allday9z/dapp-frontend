import { AppStripeTextTile } from "./AppStripeTextTile";
import { appStripeTextTiles, type AppStripeTextTileItem } from "./appStripeTextTiles";

export interface IAppStripeTextTileListProps {
  items?: AppStripeTextTileItem[];
  className?: string;
}

export const AppStripeTextTileList = ({
  items = appStripeTextTiles,
  className = "",
}: IAppStripeTextTileListProps): JSX.Element => {
  return (
    <>
      {items.map((item) => (
        <AppStripeTextTile key={item.id} item={item} className={className} />
      ))}
    </>
  );
};
