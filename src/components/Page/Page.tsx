import React, { PropsWithChildren } from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  header: {
    display: "flex",
    margin: theme.spacing(4, 0)
  },
  title: {
    fontSize: 22,
    textTransform: "uppercase",
    flexGrow: 1
  }
}));

type PropsType = PropsWithChildren<{
  title: string;
  isLoading?: boolean;
  error?: string;
  action?: React.ReactNode;
}>;

export default function Page(props: PropsType) {
  const {
    title,
    isLoading = false,
    error = "",
    action = React.Fragment,
    children
  } = props;
  const classes = useStyles();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <header className={classes.header}>
        <Typography variant="subtitle2" className={classes.title}>
          {title}
        </Typography>
        {action}
      </header>
      {children}
    </div>
  );
}
