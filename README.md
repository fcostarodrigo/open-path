# OPEN-PATH

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/dad031acb18b47e591a1656913e0f8cc)](https://app.codacy.com/app/fcostarodrigo/open-path?utm_source=github.com&utm_medium=referral&utm_content=fcostarodrigo/open-path&utm_campaign=Badge_Grade_Dashboard)
[![Build Status](https://travis-ci.org/fcostarodrigo/open-path.svg?branch=master)](https://travis-ci.org/fcostarodrigo/open-path)
[![codecov](https://codecov.io/gh/fcostarodrigo/open-path/branch/master/graph/badge.svg)](https://codecov.io/gh/fcostarodrigo/open-path)

Node module that creates missing folders in the middle of a path, like `mkdir -p`.

## Setup

```bash
npm install @fcostarodrigo/open-path
```

## Usage

### CLI

```bash
npm install -g @fcostarodrigo/open-path
openPath --help
```

```
openPath <pathToOpen>

Positionals:
  pathToOpen  String with the path                                      [string]

Options:
  --help            Show help                                          [boolean]
  --version         Show version number                                [boolean]
  --fileInPath, -f  Indicates if the last item of the path is a file   [boolean]
```

### Lib

```js
const openPath = require("@fcostarodrigo/open-path");

async function main() {
  await openPath("docs/UI");
  fs.writeFileSync("docs/UI/button.txt", "test");
}

main();
```

## Documentation

```js
openPath(pathToOpen, fileInPath);
```

`pathToOpen`: String with the path.

`fileInPath`: Indicates if the last item of the path is a file.

Returns a promise.

## License

[MIT License](http://www.opensource.org/licenses/mit-license.php)
