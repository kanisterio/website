
# Kanister.io web site
[![NodeJS with Gulp](https://github.com/kanisterio/website/actions/workflows/npm-gulp.yml/badge.svg)](https://github.com/kanisterio/website/actions/workflows/npm-gulp.yml)

## Getting started
### Make sure you have node/npm installed
Node is the Javascript runtime and includes NPM, the Node Package Manager, which installs all the JS dependencies.

If you have a Mac and use Homebrew, you can install with `brew install node`. Otherwise, see these instructions: https://docs.npmjs.com/getting-started/installing-node.

#### OPTIONAL: [anyenv](https://anyenv.github.io/) and nodenv for virtual node environments

Visit https://nodejs.org/en and find the LTS release, at the time of this writing it was: 18.17.0, the latest was: 20.11.0, but it did not seem to be available via `nodenv` for Mac Silicon.

```bash
# the following are directory independent
brew install anyenv
# add to your shell startup file: ~/.*rc: eval "$(anyenv init -)"
exec $SHELL -l # reload your shell

yes | anyenv install --init \
  && anyenv install --list

anyenv install nodenv && exec $SHELL -l
nodenv install --list | grep ^18 # 18.16.1
nodenv install 18.16.1 && nodenv local $_ && nodenv local # confirm version

# OPTIONAL: update npm and dependencies to latest (9.8.0 last known good)
npm --version && npm install -g npm@latest && npm --version
npm outdated -g --depth=0 && npm update -g corepack
node --version && npm --version && npx --version # confirm versions

# OPTIONAL: to reset to a clean environment
npm cache clean --force && rm -rf node_modules package-lock.json kanister.io
```

### Install Node package dependencies
```shell
npm install
```

## Making changes to the web site
The website is built from source by a build process called [Gulp](https://gulpjs.com/docs/en/getting-started/quick-start). The default build target is `build-kanister`.

```bash
npx gulp # executes default target in gulpfile.js

# OPTIONAL: to allow `gulp build`
npm install gulp-cli

# OPTIONAL: browse the website
pushd kanister.io && python3 -m http.server &
```
