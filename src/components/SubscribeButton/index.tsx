import styles from "./styles.module.scss";

type SubscribeButtonProps = {
  priceId: string;
};
export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  //const {data: session} = useSession();

  return (
    <button type="button" className={styles.subscribeButton}>
      Subscribe Now
    </button>
  );
}
