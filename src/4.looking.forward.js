import React, { Fragment, useState } from "react";
import { RadioGroup, Checkbox, Button, Intent } from "@blueprintjs/core";
import { connectToJobStore } from "./connector";
import { School } from "./5.school";

export const skillOptions = [
  { label: "Good experience", value: "time1" },
  { label: "Work Cuture", value: "time2" },
  { label: "Higher payscale", value: "time3" },
  { label: "High amount of learning", value: "time4" },
  { label: "Problem solving", value: "time5" },
  { label: "Low-stress", value: "time6" },
  { label: "Impactful", value: "time7" },
  { label: "Data-entry", value: "time8" }
];

export const LookingForInternal = props => {
  const { lookingFor, selectLookingFor } = props;
  return (
    <Fragment>
      <div className="p-2">
        <h3>What are you looking for in your future role?</h3>
        <div className="p-2">
          {skillOptions.map(s => {
            return (
              <Checkbox
                checked={lookingFor.indexOf(s.value) > -1}
                onChange={e => selectLookingFor(e.target.value)}
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
                component: School, // <- class or stateless function type
                props: { enabled: true }, // <- SettingsPanel props without IPanelProps
                title: "School" // <- appears in header and back button
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

export const LookingFor = connectToJobStore(LookingForInternal);
