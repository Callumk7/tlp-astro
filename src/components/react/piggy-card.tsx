import type { PiggyProperties } from "../../lib/notion/get-entries";

interface PiggyCardProps {
  piggy: PiggyProperties;
}
export function PiggyCard({ piggy }: PiggyCardProps) {
  const pig = {
    id: piggy.id.unique_id.number,
    image: piggy.Picture.files[0].file.url,
    name: piggy.Name.title[0].plain_text,
    description: piggy.Description.rich_text[0].plain_text,
    gender: piggy.Sex.select.name,
    age: piggy.Age.rich_text[0]?.plain_text,
    companionship: piggy.Companionship.select.name,
    neutered: piggy.Neutered.select.name,
  };

  return (
    <div
      key={pig.id}
      className="bg-sage1 shadow-sage3 flex h-[500px] flex-auto flex-col gap-4 rounded-lg shadow-xl"
    >
      <div className="h-1/2 w-full overflow-hidden p-3">
        {pig.image && (
          <img
            src={pig.image}
            alt={`Picture of ${pig.name} the guinea pig`}
            className="h-full w-full overflow-hidden rounded-md object-cover object-center"
          />
        )}
      </div>
      <div className="flex flex-auto flex-col gap-4 p-4">
        <div>
          {pig.name && (
            <h2 className="text-foreground decoration-plum9 font-yrsa text-2xl font-bold underline decoration-2">
              {pig.name}
            </h2>
          )}
          {pig.age && (
            <p className="text-sage11 text-sm">
              <strong>Age:</strong> <em>{pig.age}</em>
            </p>
          )}
        </div>
        <div className="flex flex-wrap gap-3">
          {pig.gender && (
            <span className="text-background bg-sage3 rounded-lg px-[4px] py-1 text-sm">
              {pig.gender}
            </span>
          )}
          {pig.companionship && (
            <span className="text-background bg-sage3 rounded-lg px-[4px] py-1 text-sm">
              {pig.companionship}
            </span>
          )}
          {pig.neutered && (
            <span className="text-background bg-sage3 rounded-lg px-[4px] py-1 text-sm">
              {pig.neutered}
            </span>
          )}
        </div>
        {pig.description && (
          <p className="rounded-md text-sm">{pig.description}</p>
        )}
      </div>
    </div>
  );
}
