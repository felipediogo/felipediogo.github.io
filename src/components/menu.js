import React from "react";
import theme from "#/styles/theme";
import TwitterIcon from "#/icons/twitter.svg";
import AboutIcon from "#/icons/about.svg";
import ResumeIcon from "#/icons/resume.svg";
import LinkedinIcon from "#/icons/linkedin.svg";
import GithubIcon from "#/icons/github.svg";
import InstagramIcon from "#/icons/instagram.svg";

const MenuItem = ({ href, icon: Icon, openInNewTab = true }) => (
  <li>
    <a
      href={href}
      {...(openInNewTab ? { target: "_blank", rel: "noopener noreferrer" } : undefined)}>
      <Icon color={theme.colors.tacha} />
    </a>
  </li>
);

const Menu = () => (
  <nav class="navigation">
    <ul>
      <MenuItem href="#about-container" icon={AboutIcon} openInNewTab={false} />
      <MenuItem href="/resume.pdf" icon={ResumeIcon} />
      <MenuItem href="https://www.linkedin.com/in/felipe-diogo-28a61825/" icon={LinkedinIcon} />
      <MenuItem href="https://github.com/felipediogo" icon={GithubIcon} />
      <MenuItem href="https://twitter.com/felipefdiogo" icon={TwitterIcon} />
      <MenuItem href="https://www.instagram.com/felipefdiogo/" icon={InstagramIcon} />
    </ul>
  </nav>
);

export default Menu;
