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

export function schematicStarter(_options: any): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const rules: Rule[] = [];

    // todo: use the url() function to retrieve the source from the './files' directory

    // todo: use the apply() function to apply rules (empty for now)
  };
}
