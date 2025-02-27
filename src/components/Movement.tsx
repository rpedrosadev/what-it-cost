import { Avatar, AvatarFallback, AvatarImage } from "./Avatar";
import { Badge } from "./Badge";
import { clsx } from "clsx";

type Props = {
  imgSrc: string;
  type: "income" | "cost";
  name: string;
  date: string;
  monetaryTotal: string;
  monetaryUpdate?: string;
};

export const Movement = (props: Props) => {
  const { date, imgSrc, monetaryTotal, monetaryUpdate, name, type } = props;

  const bgColor = {
    income: "shadow-green-500/40",
    cost:  "shadow-red-500/40",
  };

  const updateColor = {
    income: "text-green-500",
    cost: "text-red-500",
  };

  return (
    <div
      className={clsx(
        `p-[16px] border flex justify-between items-center ${bgColor[type]} rounded-md shadow-[0_0_15px_5px]`
      )}
    >
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src={imgSrc} />
          <AvatarFallback>{name}</AvatarFallback>
        </Avatar>
        <div className="">
          <p className="font-bold">{name}</p>
          <Badge variant="outline">{date}</Badge>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="items-center flex flex-col font-semibold">
          {monetaryUpdate && (
            <span className={`${updateColor[type]}`}>{monetaryUpdate}</span>
          )}
          <p className="text-[14px]">{monetaryTotal}</p>
        </div>
      </div>
    </div>
  );
};
