import React, { Fragment, useState } from "react";
import { RadioGroup, Radio, Button, Intent } from "@blueprintjs/core";
import { Skills } from "./2.skills";
import { connectToJobStore } from "./connector";

export const TermLengthInternal = props => {
  const { termLength, selectTermLength } = props;
  return (
    <Fragment>
      <div className="p-2">
        <h3>Select your work term length.</h3>
        <div className="p-2">
          <RadioGroup
            onChange={o => selectTermLength(o.target.value)}
            selectedValue={termLength}
            large={true}
          >
            <Radio label="4 months" value="4m" large={true} />
            <Radio label="8 months" value="8m" large={true} />
            <Radio label="12 months" value="12m" large={true} />
          </RadioGroup>
          <Button
            large={true}
            intent={Intent.SUCCESS}
            style={{ float: "right" }}
            onClick={() => {
              props.openPanel({
                component: Skills, // <- class or stateless function type
                props: { enabled: true }, // <- SettingsPanel props without IPanelProps
                title: "Skills" // <- appears in header and back button
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

export const TermLength = connectToJobStore(TermLengthInternal);
