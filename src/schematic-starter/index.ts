import {
  Rule,
  SchematicContext,
  Tree,
  chain,
  SchematicsException,
  apply,
  url,
  template,
  move,
  mergeWith
} from "@angular-devkit/schematics";
import { strings } from "@angular-devkit/core";
import { getBase64Image } from "./utils";
import { dasherize } from "@angular-devkit/core/src/utils/strings";

interface AddFilesInterface {
  name: string;
  browserType: string;
  selector: string;
  style: string;
}

export function schematicStarter(_options: AddFilesInterface): Rule {
  _options.selector = `app-${dasherize(_options.name)}`;
  _options.style = "css";

  return (tree: Tree, context: SchematicContext) => {
    // todo: add a check for a missing name property

    const path = `./src/app/components`;

    // todo: add debug statement

    // todo: use the getBase64Image function and override the browserType property on the _options object

    // todo: apply template and move rules to the source files
  };
}
