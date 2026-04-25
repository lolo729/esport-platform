const ErrorMessage = ({ message, onRetry, variant = "default" }) => {
  const variants = {
    default: "bg-red-400/10 border-red-400/20 text-red-400",
    warning: "bg-yellow-400/10 border-yellow-400/20 text-yellow-400",
    info: "bg-blue-400/10 border-blue-400/20 text-blue-400"
  };

  return (
    <div className={`${variants[variant]} border rounded-lg p-4 text-center`}>
      <p className="text-sm">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-2 text-xs underline hover:no-underline"
        >
          Réessayer
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;