import { VEHICLE_CONDITION, BLANK, VEHICLE_STATUS } from "../../constants";
import Tag from "../Tag";
import styles from "./index.module.scss";

type Media = {
  src: string;
  alt: string;
  placement: "featured" | "gallery";
};

type Props = {
  media: Array<Media>;
  name: string;
  code: string;
  condition: "new" | "used" | "demo";
  is_sold: boolean;
};

export default function Vehicle(props: Props) {
  const { media, name, condition, is_sold } = props;

  // TODO done
  // `props.media` is an array. Find the media item with placement='featured'
  const featuredMedia = media.find((media) => media.placement === "featured");

  return (
    <div className={styles.vehicle}>
      <img
        className={styles.media}
        src={featuredMedia?.src}
        alt={featuredMedia?.alt}
      />
      <h2 className={styles.name}>{name ?? BLANK}</h2>

      <div className={styles.tags}>
        {/* 
        TODO done
        - The `condition` is in lowercase and not friendly. Map the condition as follows and display the friendly version:

        - new -> "New"
        - used -> "Second hand"
        - demo -> "Dealer demo"
      */}
        <Tag>{VEHICLE_CONDITION[condition]}</Tag>

        {/* TODO done
      - Add another <Tag/> component which shows "Sold" or "Available now", depending on whether the vehicle's is_sold property is true/false (respectively) */}
        <Tag>{is_sold ? VEHICLE_STATUS.sold : VEHICLE_STATUS.available}</Tag>
      </div>
    </div>
  );
}
