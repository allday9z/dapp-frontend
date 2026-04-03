import { LobStripeTile } from "./LobStripeTile";
import { lobStripeTiles, type LobStripeTileItem } from "./lobStripeTiles";

export interface ILobStripeTileListProps {
  items?: LobStripeTileItem[];
  className?: string;
}

export const LobStripeTileList = ({
  items = lobStripeTiles,
  className = "",
}: ILobStripeTileListProps): JSX.Element => {
  return (
    <>
      {items.map((item) => (
        <LobStripeTile key={item.id} item={item} className={className} />
      ))}
    </>
  );
};
