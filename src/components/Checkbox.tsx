import { memo, useRef } from "react";
import { Layout } from "./Layout";
import Typography from "./Typography";

interface InputProps {
  title?: string;
  value: boolean;
  update: (newValue: boolean) => void;
  focus: () => void;
  blur: () => void;
  istate: "clean" | "dirty" | "editing";
  error?: string;
}

const Checkbox = memo(
  ({ title, value, update, focus, blur, error, istate }: InputProps) => {
    const renderCountRef = useRef(0);
    renderCountRef.current += 1;

    return (
      <Layout.Stack gap={4} center>
        <Layout.VStack gap={2}>
          <Layout.Stack gap={4} center>
            <Typography variant="label">
              {String(renderCountRef.current)}
            </Typography>
            <input
              type="checkbox"
              checked={value}
              onChange={(e) => update(e.target.checked)}
              onFocus={focus}
              onBlur={blur}
            />
          </Layout.Stack>
          {error && istate === "dirty" && (
            <span style={{ color: "#FF5733", paddingLeft: 12 }}>
              <Typography variant="label">{error}</Typography>
            </span>
          )}
        </Layout.VStack>
        {title && <Typography variant="label">{title}</Typography>}
      </Layout.Stack>
    );
  },
);

export default Checkbox;
