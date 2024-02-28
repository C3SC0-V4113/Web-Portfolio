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
      className={`${className} gap-3 px-4 py-5 md:grid-cols-2 md:py-8 md:px-6 lg:py-16 lg:px-12 xl:px-20 2xl:px-60`}
    >
      {children}
    </div>
  );
};
