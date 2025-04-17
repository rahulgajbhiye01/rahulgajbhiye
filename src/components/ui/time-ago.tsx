"use client";

import { useTimeAgo } from "next-timeago";
import { dateFormat } from "@/lib/utils";

type Props = {
  date: string;
};

const TimeAgo = ({ date }: Props) => {
  const { TimeAgo } = useTimeAgo();

  // Format date July 9, 2024
  const formattedDate = dateFormat(date);
  // Current Date
  const currentTime = new Date();
  // Date of blog
  const givenTime = new Date(date);

  // Calculate the difference in hours
  const timeDifferenceInHours =
    (currentTime.getTime() - givenTime.getTime()) / (1000 * 60 * 60);

  return (
    <>
      {timeDifferenceInHours < 24 ? (
        <TimeAgo date={givenTime} />
      ) : (
        <span>{formattedDate}</span>
      )}
    </>
  );
};

export default TimeAgo;
