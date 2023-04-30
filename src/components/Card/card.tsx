import { FC } from "react";
import cardStyle from "./card.module.scss";
export interface cardProps {
  icon: string;
  title: string;
  value: string;
}

const Card: FC<cardProps> = (stat): JSX.Element => {
  return (
    <div className={cardStyle.card}>
      <img
        className={cardStyle.card_icon}
        src={stat.icon}
        alt={stat.title + "-icon"}
      />
      <p  className={cardStyle.card_title}>{stat.title}</p>
      <p  className={cardStyle.card_value}>{stat.value}</p>
    </div>
  );
};

export default Card;
