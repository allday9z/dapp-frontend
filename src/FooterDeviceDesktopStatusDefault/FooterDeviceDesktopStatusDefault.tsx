import "./FooterDeviceDesktopStatusDefault.css";
import { DawnDivider } from "../DawnDivider/DawnDivider";
import { LogoWipApp } from "../LogoWipApp/LogoWipApp";
import { TextFieldStatusDefault } from "../TextFieldStatusDefault/TextFieldStatusDefault";
import { SocialIcons } from "../SocialIcons/SocialIcons";
import { DropdownProperty1Default } from "../DropdownProperty1Default/DropdownProperty1Default";

export interface IFooterDeviceDesktopStatusDefaultProps {
  device?: "desktop" | "mobile-expanded" | "mobile";
  status?: "default" | "expanded";
  className?: string;
}

export const FooterDeviceDesktopStatusDefault = ({
  device = "desktop",
  status = "default",
  className,
  ...props
}: IFooterDeviceDesktopStatusDefaultProps): JSX.Element => {
  const variantsClassName = "device-" + device + " status-" + status;

  return (
    <div
      className={
        "footer-device-desktop-status-default " +
        className +
        " " +
        variantsClassName
      }
    >
      <DawnDivider className="dawn-divider-instance"></DawnDivider>
      <div className="group-6">
        <div className="frame-1470">
          <div className="group-68">
            <div className="frame-1465">
              <div className="apple-premium-partner">
                Apple Premium Partner{" "}
              </div>
            </div>
          </div>
          <div className="frame-1469">
            <LogoWipApp className="logo-wip-app-instance"></LogoWipApp>
            <div className="group">
              <img className="vector" src="vector0.svg" />
              <img className="vector2" src="vector1.svg" />
              <div className="authorized-education-specialist">
                Authorized Education Specialist{" "}
              </div>
            </div>
            <div className="group">
              <img className="vector3" src="vector2.svg" />
              <img className="vector4" src="vector3.svg" />
              <div className="authorized-service-provider">
                Authorized Service Provider{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="group-60">
          <div className="frame-1463">
            <div className="frame-1467">
              <div className="app-name">APP Name </div>
              <div className="frame-75">
                <div className="about">About </div>
                <div className="contact-us">Contact us </div>
                <div className="find-a-store">Find a Store </div>
                <div className="careers">Careers </div>
                <div className="blog">Blog </div>
              </div>
            </div>
          </div>
        </div>
        <div className="group-62">
          <div className="frame-1464">
            <div className="frame-1468">
              <div className="information">Information </div>
              <div className="frame-75">
                <div className="shipping-policy">Shipping policy </div>
                <div className="return-policy">Return policy </div>
                <div className="privacy">Privacy </div>
                <div className="warranty">Warranty </div>
                <div className="cookie-policy">Cookie policy </div>
                <div className="site-map">Site map </div>
                <div className="services">Services </div>
                <div className="my-account">My Account </div>
              </div>
            </div>
          </div>
        </div>
        <div className="group-61">
          <div className="group-622">
            <div className="frame-1462">
              <div className="frame-1466">
                <div className="services2">Services </div>
                <div className="frame-77">
                  <div className="customer-support">Customer Support </div>
                  <div className="financing">Financing </div>
                  <div className="click-collect">Click + Collect </div>
                  <div className="trade-in">Trade-In </div>
                  <div className="apple-classes">Apple Classes </div>
                  <div className="i-phone-for-life">iPhone for Life </div>
                  <div className="apple-care">AppleCare+ </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="group-59">
          <div className="frame-1461">
            <div className="shop">Shop </div>
            <div className="frame-76">
              <div className="mac">Mac </div>
              <div className="i-pad">iPad </div>
              <div className="i-phone">iPhone </div>
              <div className="apple-watch">Apple Watch </div>
              <div className="tv">TV </div>
              <div className="air-pods">AirPods </div>
              <div className="home-pod-mini">HomePod Mini </div>
              <div className="accessories">Accessories </div>
            </div>
          </div>
        </div>
      </div>
      <div className="group-7">
        <div className="frame-1519">
          <div className="subscribe-to-our-emails">
            Subscribe to our emails{" "}
          </div>
          <TextFieldStatusDefault
            visibleComponent={true}
            className="text-field-instance"
          ></TextFieldStatusDefault>
        </div>
        <SocialIcons
          visibleIconTwitter={false}
          className="social-icons-instance"
        ></SocialIcons>
        <div className="frame-387">
          <img className="frame-36" src="frame-360.svg" />
          <img className="image-6" src="image-60.png" />
        </div>
      </div>
      <DawnDivider className="dawn-divider-instance"></DawnDivider>
      <div className="frame-8">
        <div className="frame-1520">
          <div className="language">Language </div>
          <DropdownProperty1Default
            text="English"
            className="dropdown-instance"
          ></DropdownProperty1Default>
        </div>
        <div className="copyright-2022-apr-business-name-here-inc-all-rights-reserved">
          Copyright © 2022 APR Business Name Here Inc. All rights reserved.{" "}
        </div>
      </div>
    </div>
  );
};
