import { HeaderGlobal } from "./header";

export default function LayoutGlobalAndLocal({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HeaderGlobal />
      <div>{children}</div>
    </>
  );
}
