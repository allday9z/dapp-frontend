import { BentoBoxTileDeviceDesktopBigLobAppleWatchFathers } from '../../BentoBoxTileDeviceDesktopBigLobAppleWatchFathers/BentoBoxTileDeviceDesktopBigLobAppleWatchFathers';
import { BentoBoxTileDeviceDesktopSmallLobAirPods } from '../../BentoBoxTileDeviceDesktopSmallLobAirPods/BentoBoxTileDeviceDesktopSmallLobAirPods';
import { BentoBoxTileDeviceDesktopSmallLobAppleWatchBand } from '../../BentoBoxTileDeviceDesktopSmallLobAppleWatchBand/BentoBoxTileDeviceDesktopSmallLobAppleWatchBand';

export const BentoBoxSection = () => (
  <section aria-label="โปรโมชันพิเศษ">
    <div className="hp-bento">
      <div className="hp-bento__grid">
        <BentoBoxTileDeviceDesktopBigLobAppleWatchFathers
          lob="apple-watch-fathers"
          text="Shop models"
          className="bento-box-tile-instance"
        />
        <div className="hp-bento__col">
          <BentoBoxTileDeviceDesktopSmallLobAirPods
            device="desktop-small"
            text="Shop models"
            className="bento-col-tile"
          />
          <BentoBoxTileDeviceDesktopSmallLobAppleWatchBand
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
