import React, { Fragment, useState } from "react";
import { RadioGroup, Checkbox, Button, Intent } from "@blueprintjs/core";
import { connectToJobStore } from "./connector";
import { Timings } from "./3.timings";

export const skillOptions = [
  { label: "Excel basic", value: "skill1" },
  { label: "Excel basic/advanced", value: "skill2" },
  { label: "PPT basic/advanced", value: "skill3" },
  { label: "ServiceNow", value: "skill4" },
  { label: "Sharepoint", value: "skill5" },
  { label: "Clarity", value: "skill6" },
  { label: "Visio basic/advanced", value: "skill7" },
  { label: "Word basic/advanced", value: "skill8" },
  { label: "Microsoft Office basic/advanced", value: "skill9" },
  { label: "Front-end Web Development", value: "skill10" },
  { label: "Data Analysis", value: "skill11" },
  { label: "Back-end Web Development", value: "skill12" },
  { label: "Machine learning", value: "skill13" }
];

export const SkillsInternal = props => {
  const { skills, selectSkills } = props;
  return (
    <Fragment>
      <div className="p-2">
        <h3>What are your skills?</h3>
        <div className="p-2">
          {skillOptions.map(s => {
            return (
              <Checkbox
                checked={skills.indexOf(s.value) > -1}
                onChange={e => selectSkills(e.target.value)}
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
                component: Timings, // <- class or stateless function type
                props: { enabled: true }, // <- SettingsPanel props without IPanelProps
                title: "Timings" // <- appears in header and back button
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

export const Skills = connectToJobStore(SkillsInternal);
