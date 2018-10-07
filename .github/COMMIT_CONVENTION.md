## Git Commit Message Convention

> Adapted from the [Angular's commit convention](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular) and the [Vue's commit convention](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md).

### Commit message format

All commit messages must match the following format: 

```
[revert: ] <TYPE>[(<SCOPE>)]: <MESSAGE>
```

Examples: 

```
docs: update changelog to beta.5
```

### Revert

If the commit reverts a previous commit, it should begin with `revert: `, followed by the header of the reverted commit.

### Type

Must be one of the following:

- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm).
- **docs**: Documentation only changes.
- **feat**: A new feature.
- **fix**: A bug fix.
- **breaking**: A breaking change.
- **perf**: A code change that improves performance.
- **refactor**: A code change that neither fixes a bug nor adds a feature.
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc).
- **test**: Adding missing tests or correcting existing tests.
- **release**: A new release. 

### Scope

At this moment we only have one npm package on each repository, so this part of the commit must be ignored.

### Message

The subject contains succinct description of the change. Please follow the next rules:

- Use the imperative, present tense: "change" not "changed" nor "changes".
- Don't capitalize first letter.
- No dot (.) at the end.



