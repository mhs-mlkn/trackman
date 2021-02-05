import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Facility } from "./facility.types";

const useStyles = makeStyles(theme => ({
  root: {
    display: "inline-block",
    width: 350,
    margin: theme.spacing(0, 4, 4, 0)
  },
  title: {
    textTransform: "uppercase",
    fontSize: 25
  },
  type: {
    textTransform: "capitalize"
  },
  caption: {
    marginTop: theme.spacing(4)
  },
  truncate: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
  }
}));

export function FacilityCard(props: { facility: Facility }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          color="textPrimary"
          className={clsx(classes.title, classes.truncate)}
          title="Facility Name"
        >
          {props.facility.name}
        </Typography>
        <Typography variant="body2" color="secondary" className={classes.type}>
          {props.facility.type} facility
        </Typography>
        <Typography
          color="textSecondary"
          variant="caption"
          className={clsx(classes.caption, classes.truncate)}
          component="p"
        >
          {props.facility.address}
        </Typography>
      </CardContent>
    </Card>
  );
}
