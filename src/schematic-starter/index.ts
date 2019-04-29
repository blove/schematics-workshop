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
}

export function schematicStarter(_options: AddFilesInterface): Rule {
  _options = {
    ..._options,
    ...{ selector: `app-${dasherize(_options.name)}`, style: "css" }
  };

  return (tree: Tree, _context: SchematicContext) => {
    // todo: chain multiple rules into a single rule. Invoke with the tree and context to return a Tree.
  };
}

function addFiles(_options: AddFilesInterface): Rule {
  return (tree: Tree, context: SchematicContext) => {
    if (!_options.name) {
      throw new SchematicsException("Entity name is required");
    }
    const path = `./src/app/components`;

    context.logger.debug(`adding files to ${path} dir`);
    _options.browserType = getBase64Image(_options.browserType);

    // todo: refactor return type to use mergeWith
  };
}
