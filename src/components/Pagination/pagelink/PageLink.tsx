import { HTMLProps } from "react";

import pagelinkStyle from "./pagelink.module.scss";

export type Props = HTMLProps<HTMLAnchorElement> & { active?: boolean };

export default function PageLink({
  className,
  active,
  disabled,
  children,
  ...otherProps
}: Props) {
  let classname = pagelinkStyle.pagelink;

  if (disabled) {
    return (
      <span className={classname}>
        {children}
      </span>
    );
  }

  if (active) classname = pagelinkStyle.pagelink_active;

  return (
    <a
      className={classname + " " + pagelinkStyle.pagelink}
      aria-current={active ? "page" : undefined}
      {...otherProps}
    >
      {children}
    </a>
  );
}
