import { HTMLAttributeAnchorTarget } from "react";
import { IconType } from "react-icons/lib";

interface iconButtonProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  icon: IconType;
  href?: string;
  className?: string;
  target?: HTMLAttributeAnchorTarget;
}

export const IconButton = ({
  icon: Icon,
  href,
  target = "_blank",
  className,
  ...rest
}: iconButtonProps) => {
  return (
    <a
      href={href}
      className={`p-2 rounded-full bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground ${className}`}
      target={target}
      {...rest}
    >
      <Icon className="w-6 h-6" />
    </a>
  );
};
