import { Header } from "../header";

export function Layout({ children }) {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Header color="black" />
      <div style={{ border: "1px solid #eef0f3" }}></div>
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          flex: 1,
        }}
      >
        {children}
      </main>
    </div>
  );
}
