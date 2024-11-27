import HeaderGlobal from "./header";

export default function Layout({
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
