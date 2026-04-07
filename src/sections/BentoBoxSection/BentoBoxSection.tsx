import { BentoBoxTileBig } from '../../BentoBoxTileBig/BentoBoxTileBig';
import { BentoBoxTileSmallAirPods } from '../../BentoBoxTileSmallAirPods/BentoBoxTileSmallAirPods';
import { BentoBoxTileSmallWatchBand } from '../../BentoBoxTileSmallWatchBand/BentoBoxTileSmallWatchBand';

export const BentoBoxSection = () => (
  <section aria-label="โปรโมชันพิเศษ">
    <div className="hp-bento">
      <div className="hp-bento__grid">
        <BentoBoxTileBig
          lob="apple-watch-fathers"
          text="Shop models"
          className="bento-box-tile-instance"
        />
        <div className="hp-bento__col">
          <BentoBoxTileSmallAirPods
            device="desktop-small"
            text="Shop models"
            className="bento-col-tile"
          />
          <BentoBoxTileSmallWatchBand
            device="desktop-small"
            lob="apple-watch-band"
            text="Shop models"
            className="bento-col-tile"
          />
        </div>
      </div>
    </div>
  </section>
);
