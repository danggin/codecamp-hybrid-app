import { HeaderGlobal } from "./header";

export default function LayoutGlobalAndLocalTransparent({
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
