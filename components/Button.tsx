export default function Button({
  text,
  disabled = false,
}: {
  text: string;
  disabled?: boolean;
}) {
  return (
    <button disabled={disabled}>
      {text}
    </button>
  );
}