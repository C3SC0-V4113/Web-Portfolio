export const Container = ({
  children,
  className,
  ...rest
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) => {
  return (
    <div
      {...rest}
      className={`gap-5 md:gap-7 px-4 py-8 md:grid-cols-2 md:py-10 md:px-6 lg:py-16 lg:px-12 xl:px-20 2xl:px-60 ${className}`}
    >
      {children}
    </div>
  );
};
