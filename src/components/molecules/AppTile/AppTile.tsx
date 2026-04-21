import "./AppTile.css";

const BADGE_COLORS: Record<string, string> = {
  NEW: "var(--badging-new, #bf4800)",
  ใหม่: "var(--badging-new, #bf4800)",
  SALE: "var(--badging-sale, #cc0000)",
  "CYBER MONDAY": "var(--badging-cyber-monday, #6e2b8a)",
};

export interface IAppTileProps {
  image: string;
  imageAlt?: string;
  badge?: string;
  title: string;
  cta: string;
  description: string;
  className?: string;
}

export const AppTile = ({
  image,
  imageAlt = "",
  badge,
  title,
  cta,
  description,
  className,
}: IAppTileProps): JSX.Element => {
  const badgeColor = badge
    ? (BADGE_COLORS[badge] ?? "var(--badging-store-related, #707070)")
    : undefined;

  return (
    <div className={`app-tile ${className ?? ""}`}>
      <div className="app-tile__card">
        <div className="app-tile__img-wrap">
          <img src={image} alt={imageAlt} />
        </div>
        <div className="app-tile__text">
          <div className="app-tile__header">
            {badge && (
              <span className="app-tile__badge" style={{ color: badgeColor }}>
                {badge}
              </span>
            )}
            <h3 className="app-tile__title">{title}</h3>
            <p className="app-tile__cta">{cta}</p>
          </div>
          <p className="app-tile__description">{description}</p>
        </div>
      </div>
    </div>
  );
};
