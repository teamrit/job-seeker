import React, { Fragment, useState } from "react";
import { RadioGroup, Radio, Button, Intent } from "@blueprintjs/core";
import { TermLength } from "./6.term.length";
import { connectToJobStore } from "./connector";

export const SchoolInternal = props => {
  const { school, selectSchool } = props;
  return (
    <Fragment>
      <div className="p-2">
        <h3>Select your educational institute (college, University etc)?</h3>
        <div className="p-2">
          <RadioGroup
            onChange={o => selectSchool(o.target.value)}
            selectedValue={school}
            large={true}
          >
            <Radio label="University of Waterloo" value="uow" large={true} />
            <Radio label="University of Toronto" value="uot" large={true} />
            <Radio label="Ryerson University" value="ru" large={true} />
            <Radio label="Georgian College" value="gc" large={true} />
            <Radio label="Seneca College" value="sc" large={true} />
            <Radio label="York University" value="yu" large={true} />
            <Radio label="Other" value="ot" large={true} />
          </RadioGroup>
          <Button
            large={true}
            intent={Intent.SUCCESS}
            style={{ float: "right" }}
            onClick={() => {
              props.openPanel({
                component: TermLength, // <- class or stateless function type
                props: { enabled: true }, // <- SettingsPanel props without IPanelProps
                title: "Work Term" // <- appears in header and back button
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

export const School = connectToJobStore(SchoolInternal);
