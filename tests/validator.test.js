const ValidationService = require("../lib/validate.js");
const customPatterns = ['^(fut|fax|tost|duc)\\/[A-Z0-9\\#-]{2,25}\\/([a-z0-9_\\.-]){3,40}$', '^releose\\/v[a-z0-9\\+\\.-]{3,25}$'];


// // default pattern
// // true

test("feat/#124/toto", () => {
  expect(ValidationService.checkBranchName("feat/#124/toto", '', '')).toBe(true);
});

test("feat/NEO-23/toto", () => {
  expect(ValidationService.checkBranchName("feat/NEO-23/toto", '', '')).toBe(true);
});

test("fix/#344/toto", () => {
  expect(ValidationService.checkBranchName("fix/#344/toto", '', '')).toBe(true);
});

test("release/v0.1.1", () => {
  expect(ValidationService.checkBranchName("release/v0.1.1", '', '')).toBe(true);
});

test("release/v0.1.1-beta", () => {
  expect(ValidationService.checkBranchName("release/v0.1.1-beta", '', '')).toBe(true);
});

test("test/#112/toto", () => {
  expect(ValidationService.checkBranchName("test/#112/toto", '', '')).toBe(true);
});

test("doc/#897/toto", () => {
  expect(ValidationService.checkBranchName("doc/#897/toto", '', '')).toBe(true);
});

test("fut/#124/toto", () => {
  expect(ValidationService.checkBranchName("fut/#124/toto", customPatterns, '')).toBe(true);
});

test("fax/#124/toto", () => {
  expect(ValidationService.checkBranchName("fax/#124/toto", customPatterns, '')).toBe(true);
});

test("releose/v0.1.1-beta", () => {
  expect(ValidationService.checkBranchName("releose/v0.1.1-beta", customPatterns, '')).toBe(true);
});

// //false

test("release/0.1.1", () => {
  expect(ValidationService.checkBranchName("release/0.1.1", '', '')).toBe(false);
});

test("release/#0.1.1", () => {
  expect(ValidationService.checkBranchName("release/#0.1.1", '', '')).toBe(false);
});

test("release/v0.1.1/toto", () => {
  expect(ValidationService.checkBranchName("release/v0.1.1/toto", '', '')).toBe(false);
});

test("release/#124/toto", () => {
  expect(ValidationService.checkBranchName("release/#124/toto", '', '')).toBe(false);
});

test("feat/#124/toto/titi", () => {
  expect(ValidationService.checkBranchName("feat/#124/toto/titi", '', '')).toBe(false);
});

test("feature/#124/toto", () => {
  expect(ValidationService.checkBranchName("feature/#124/toto", '', '')).toBe(false);
});

test("bugfix/#344/toto", () => {
  expect(ValidationService.checkBranchName("bugfix/#344/toto", '', '')).toBe(false);
});

test("hotfix/#4561/toto", () => {
  expect(ValidationService.checkBranchName("hotfix/#4561/toto", '', '')).toBe(false);
});

test("feature/toto", () => {
  expect(ValidationService.checkBranchName("feature/toto", '', '')).toBe(false);
});

test("refactor/#765/toto", () => {
  expect(ValidationService.checkBranchName("refactor/#765/toto", '', '')).toBe(false);
});

test("refactor/toto", () => {
  expect(ValidationService.checkBranchName("refactor/toto", '', '')).toBe(false);
});

test("test/toto", () => {
  expect(ValidationService.checkBranchName("test/toto", '', '')).toBe(false);
});

test("doc/toto", () => {
  expect(ValidationService.checkBranchName("doc/toto", '', '')).toBe(false);
});

test("build/#897/toto", () => {
  expect(ValidationService.checkBranchName("build/#897/toto", '', '')).toBe(false);
});

test("feature\toto", () => {
  expect(ValidationService.checkBranchName("feature\toto", '', '')).toBe(false);
});

test("documentation/toto", () => {
  expect(ValidationService.checkBranchName("documentation/toto", '', '')).toBe(false);
});

test("feat/toto", () => {
  expect(ValidationService.checkBranchName("feat/toto", '', '')).toBe(false);
});

test("DOC/toto", () => {
  expect(ValidationService.checkBranchName("DOC/toto", '', '')).toBe(false);
});

test("DOC/#567/toto", () => {
  expect(ValidationService.checkBranchName("DOC/#567/toto", '', '')).toBe(false);
});


// // custom patterns

test("feat/#124/toto", () => {
  expect(ValidationService.checkBranchName("feat/#124/toto", customPatterns, '')).toBe(false);
});

test("feat/NEO-23/toto", () => {
  expect(ValidationService.checkBranchName("feat/NEO-23/toto", customPatterns, '')).toBe(false);
});

test("fix/#344/toto", () => {
  expect(ValidationService.checkBranchName("fix/#344/toto", customPatterns, '')).toBe(false);
});

test("release/v0.1.1", () => {
  expect(ValidationService.checkBranchName("release/v0.1.1", customPatterns, '')).toBe(false);
});

test("release/v0.1.1-beta", () => {
  expect(ValidationService.checkBranchName("release/v0.1.1-beta", customPatterns, '')).toBe(false);
});

test("test/#112/toto", () => {
  expect(ValidationService.checkBranchName("test/#112/toto", customPatterns, '')).toBe(false);
});

test("doc/#897/toto", () => {
  expect(ValidationService.checkBranchName("doc/#897/toto", customPatterns, '')).toBe(false);
});