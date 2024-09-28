interface Props {
  title: string;
  onClick: () => void;
}

export default function Button({ title, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "min-content",
        height: "min-content",
        textWrap: "nowrap",
      }}
    >
      {title}
    </button>
  );
}
