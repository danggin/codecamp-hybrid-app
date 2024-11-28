export function Footer({ children }) {
  return (
    <>
      <div style={{ flex: 1 }}></div>
      <footer
        style={{
          width: "100vw",
          height: "3.125rem",
          backgroundColor: "skyblue",
        }}
      >
        {children}
      </footer>
    </>
  );
}
