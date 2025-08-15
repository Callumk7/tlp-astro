import { Button } from "./ui/button";

interface InfoBoxesProps {
  data: InfoBoxData[];
}

interface InfoBoxProps {
  data: InfoBoxData;
}

type InfoBoxData = {
  title: string;
  link: string;
  body: string;
  cta: {
    href: string;
    text: string;
  };
};

export function InfoBoxes({ data }: InfoBoxesProps) {
  return (
    <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
      {data.map((data, i) => (
        <InfoBox key={i} data={data} />
      ))}
    </div>
  );
}

export function InfoBox({ data }: InfoBoxProps) {
  const { title, link, body, cta } = data;
  return (
    <div className="relative flex flex-col gap-y-4 rounded-md border-2 border-sage-12 bg-sage-1 p-6 transition-colors ease-in-out hover:bg-plum-2">
      <a
        href={link}
        className="font-yrsa pb-4 text-2xl font-bold text-sage-12 underline decoration-plum-9 decoration-2"
      >
        {title}
      </a>
      <p className="mb-16">{body}</p>
      <Button className="absolute bottom-5 left-5">
        <a href={cta.href}>{cta.text}</a>
      </Button>
    </div>
  );
}
