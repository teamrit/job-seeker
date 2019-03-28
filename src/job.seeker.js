import React, { Fragment, useState } from "react";
import { PanelStack } from "@blueprintjs/core";
import { Checkbox, RadioGroup, Radio, Button, Intent } from "@blueprintjs/core";
import AreaOfStudy from "./1.study.area";

export class JobSeeker extends React.Component {
  render() {
    return (
      <div className="container mt-5 w-100">
        <div className="p-2">
          <PanelStack
            className="main-panel border p-2 rounded-2"
            initialPanel={{ component: AreaOfStudy, title: "Area of Study" }}
          />
        </div>
      </div>
    );
  }
}
