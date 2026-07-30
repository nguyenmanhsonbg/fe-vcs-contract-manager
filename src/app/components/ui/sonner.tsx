import { Toaster as Sonner, ToasterProps } from "sonner";

// ponytail: no dark-mode support needed, skipped next-themes dependency
const Toaster = (props: ToasterProps) => (
  <Sonner
    theme="light"
    className="toaster group"
    style={
      {
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)",
      } as React.CSSProperties
    }
    {...props}
  />
);

export { Toaster };
