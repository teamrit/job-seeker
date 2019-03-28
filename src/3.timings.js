import React, { Fragment, useState } from "react";
import { RadioGroup, Checkbox, Button, Intent } from "@blueprintjs/core";
import { connectToJobStore } from "./connector";
import { LookingFor } from "./4.looking.forward";

export const skillOptions = [
  { label: "0700-1500", value: "time1" },
  { label: "1500-2300", value: "time2" },
  { label: "2300-0700", value: "time3" },
  { label: "0900-1700", value: "time4" },
  { label: "Weekends", value: "time5" }
];

export const TimingsInternal = props => {
  const { timings, selectTimings } = props;
  return (
    <Fragment>
      <div className="p-2">
        <h3>When are you most comfortable working?</h3>
        <div className="p-2">
          {skillOptions.map(s => {
            return (
              <Checkbox
                checked={timings.indexOf(s.value) > -1}
                onChange={e => selectTimings(e.target.value)}
                value={s.value}
                key={s.label}
                large={true}
              >
                {s.label}
              </Checkbox>
            );
          })}

          <Button
            large={true}
            intent={Intent.SUCCESS}
            style={{ float: "right" }}
            onClick={() => {
              props.openPanel({
                component: LookingFor, // <- class or stateless function type
                props: { enabled: true }, // <- SettingsPanel props without IPanelProps
                title: "Settings" // <- appears in header and back button
              });
            }}
          >
            Next
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export const Timings = connectToJobStore(TimingsInternal);
