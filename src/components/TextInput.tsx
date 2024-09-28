import { memo, useRef } from "react";
import { Layout } from "./Layout";
import Typography from "./Typography";

interface InputProps {
  title?: string;
  placeholder?: string;
  width?: number;
  value: string;
  update: (newValue: string) => void;
  focus: () => void;
  blur: () => void;
  istate: "clean" | "dirty" | "editing";
  error?: string;
}

const TextInput = memo(
  ({
    title,
    value,
    width,
    update,
    focus,
    blur,
    error,
    placeholder,
    istate,
  }: InputProps) => {
    const renderCountRef = useRef(0);
    renderCountRef.current += 1;

    return (
      <Layout.VStack gap={8}>
        {title && <Typography variant="label">{title}</Typography>}
        <Layout.VStack gap={2}>
          <Layout.Stack gap={4} center>
            <Typography variant="label">
              {String(renderCountRef.current)}
            </Typography>
            <input
              style={{ maxWidth: width ?? 220 }}
              value={value}
              onChange={(e) => update(e.target.value)}
              onFocus={focus}
              onBlur={blur}
              placeholder={placeholder}
            />
          </Layout.Stack>
          {error && istate === "dirty" && (
            <span style={{ color: "#FF5733" }}>
              <Typography variant="label">{error}</Typography>
            </span>
          )}
        </Layout.VStack>
      </Layout.VStack>
    );
  },
);

export default TextInput;
