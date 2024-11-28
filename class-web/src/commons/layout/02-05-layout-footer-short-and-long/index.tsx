import { HeaderGlobal } from "./header";

export default function LayoutShortAndLong({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <HeaderGlobal />
      <>{children}</>
    </div>
  );
}
