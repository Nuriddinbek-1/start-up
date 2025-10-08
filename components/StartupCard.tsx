import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
  const {
    _createdAt,
    views,
    author: { _id: authorID, name },
    _id,
    description,
    image,
    category,
    title,
  } = post;

  return (
    <li className="group startup-card">
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(_createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>

      <div className="flex-between gap-5 mt-5">
        <div className="flex-1">
          <Link href={`/user/${authorID}`}>
            <p className="text-16-medium line-clamp-1">{name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>
        <Link href={`/user/${authorID}`}>
          <img
            src="https://placehold.co/48x48"
            width={48}
            height={48}
            alt="placeholder"
            className="rounded-full"
          />
        </Link>
      </div>
    </li>
  );
};

export default StartupCard;
