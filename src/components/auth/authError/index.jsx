import styles from "./auth.module.css";

const AuthError = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className={styles.errorMessage}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        width="18"
        height="18"
      >
        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm0-8v6h2V7h-2z" />
      </svg>
      <span>{message}</span>
      {onClose && (
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Fechar"
        >
          ×
        </button>
      )}
    </div>
  );
};

export default AuthError;