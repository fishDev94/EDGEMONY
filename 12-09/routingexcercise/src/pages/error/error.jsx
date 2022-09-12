import styles from "./index.module.scss";

export default function Error() {
  return (
    <div className={styles.Error}>
      <img
        className={styles.Errorbg}
        src="https://external-preview.redd.it/yieNeNlpow2IOb2bMaVCcIihN_JDfgCwA_vZWX2zaMU.png?width=960&crop=smart&auto=webp&s=c60bc59f19c0a702d871da2b1662e60c05f2ef69"
        alt="error"
      />
    </div>
  );
}
