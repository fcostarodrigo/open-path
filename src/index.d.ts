export = openPath;

declare function openPath(
  pathToOpen: string,
  fileInPath?: boolean,
  callback?: (error?: Error) => void
): Promise<void>;
