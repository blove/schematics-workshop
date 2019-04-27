import {
  Rule,
  SchematicContext,
  Tree,
  apply,
  url
} from "@angular-devkit/schematics";

export function schematicStarter(_options: any): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const rules: Rule[] = [];

    // todo: use the url() function to retrieve the source from the './files' directory

    // todo: use the apply() function to apply rules (empty for now)
  };
}
