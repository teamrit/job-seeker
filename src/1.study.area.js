import React, { Fragment, useState } from "react";
import { RadioGroup, Radio, Button, Intent } from "@blueprintjs/core";
import { Skills } from "./2.skills";
import { connectToJobStore } from "./connector";

export const AreaOfStudyInternal = props => {
  const { areaOfStudy, selectAreaOfStudy } = props;
  const [selectedArea, changeSelectedArea] = useState(false);
  return (
    <Fragment>
      <div className="p-2">
        <h3>What is your area of study?</h3>
        <div className="p-2">
          <RadioGroup
            onChange={o => selectAreaOfStudy(o.target.value)}
            selectedValue={areaOfStudy}
            large={true}
          >
            <Radio label="Engineering" value="engi" large={true} />
            <Radio label="Marketing" value="mark" large={true} />
            <Radio label="Business" value="busi" large={true} />
            <Radio label="Accounting" value="acco" large={true} />
            <Radio label="Arts" value="arts" large={true} />
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

export default connectToJobStore(AreaOfStudyInternal);
