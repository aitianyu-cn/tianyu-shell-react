/** @format */

import * as RadioButtonImport from "./radio-button/RadioButton";
import * as MultiSelectionButtonImport from "./radio-button/MultiSelectionButton";
import * as RadioButtonBaseImport from "./radio-button/RadioButtonBase";

import * as ToggleImport from "./toggle/ReactToggle";

import * as RadioButtonHelper from "./radio-button/Helper";

export namespace Control {
    export import RadioButtonBase = RadioButtonBaseImport.ReactRadioButtonBase;
    export import RadioButton = RadioButtonImport.ReactRadioButton;
    export import MultiSelectionButton = MultiSelectionButtonImport.MultiSelectionButton;

    export import ToggleButton = ToggleImport.ReactToggle;

    export namespace InstanceId {
        export import createRadioButton = RadioButtonHelper.generateInstanceId;
    }
}
