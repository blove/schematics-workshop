import {
  Rule,
  SchematicContext,
  Tree,
  apply,
  url,
  template,
  move
} from "@angular-devkit/schematics";
import { strings } from "@angular-devkit/core";

// declare AddFilesInterface

export function schematicStarter(_options: any): Rule {
  return (tree: Tree, context: SchematicContext) => {
    // todo: use the template() function and provide the strings and _options members
    const rules: Rule[] = [];

    const source = url("./files");
    return apply(source, rules)(context);
  };
}
