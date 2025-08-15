import { Link } from "./ui/button";

interface BannerProps {
  message: string;
  link: {
    href: string;
    text: string;
  };
}

export function Banner({ message, link }: BannerProps) {
  return (
    <div className="flex w-fit items-center gap-x-3 rounded-lg bg-teal-4 p-3 align-middle shadow-xl shadow-teal-3">
      <span className="font-bold text-teal-12">{message}</span>
      <Link variant={"teal"} href={link.href}>
        {link.text}
      </Link>
    </div>
  );
}
