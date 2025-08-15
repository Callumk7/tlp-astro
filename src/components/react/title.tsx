interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export function Title({ children, ...props }: TitleProps) {
  return (
    <h1
      className="font-yrsa mt-8 mb-10 w-4/5 text-6xl font-bold md:text-8xl"
      {...props}
    >
      {children}
    </h1>
  );
}
