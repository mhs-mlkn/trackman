import { Container, CssBaseline } from "@material-ui/core";
import { PropsWithChildren } from "react";
import AppBar from "./AppBar/AppBar";

export default function AppLayout({ children }: PropsWithChildren<any>) {
  return (
    <>
      <CssBaseline />
      <AppBar />
      <Container component="main" style={{ padding: 8 }}>
        {children}
      </Container>
    </>
  );
}
