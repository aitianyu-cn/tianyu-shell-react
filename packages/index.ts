/**@format */

import * as TypesImport from "./src/interface/Types";
import * as ModelImport from "./src/interface/Model";

import * as MessageLoaderImport from "infra/message/MessageLoader";

import * as StoreElementImport from "model/StoreElement";
import * as StatefullElementImport from "model/StatefullElement";
import * as ControlledElementImport from "model/ControlledElement";

import * as ComponentsImport from "./src/interface/Components";
import * as TemplateImport from "./src/interface/Templates";

export namespace TianyuReact {
    export import StoreElement = StoreElementImport.StoreElement;
    export import StatefullElement = StatefullElementImport.StatefullElement;
    export import ControlledElement = ControlledElementImport.ControlledElement;

    export import Components = ComponentsImport;
    export import Template = TemplateImport;
    export import State = ModelImport;
    export import Types = TypesImport;

    export namespace Infra {
        export import loadI18n = MessageLoaderImport.loadI18n;
        export import loadI18nWithDefault = MessageLoaderImport.loadI18nWithDefault;
    }
}
