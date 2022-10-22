const ValidationService = require("../lib/validate.js");
const customPatterns = ['^(build|ci|doc|fut|fix|perf|refactor|style|test|chore|revert)\\([a-z0-9]{2,16}\\): \\[[A-Za-z0-9\\#-]{2,12}\\] [A-Za-z0-9 !-_]{5,140}$'];

// git commit -m "feat(lang): [#346] add polish language"
// git commit -m "feat(parser): [#546] add ability to parse arrays"
// git commit -m 'feat(config): [neo-118] BREAKING! allow provided config object to extend other configs'

// // default pattern
// // true

test("feat(lang): [#346] add polish language", () => {
  expect(ValidationService.checkCommitMsg("feat(lang): [#346] add polish language", '', '')).toBe(true);
});

test("feat(parser): [#546] add ability to parse arrays", () => {
  expect(ValidationService.checkCommitMsg("feat(parser): [#546] add ability to parse arrays", '', '')).toBe(true);
});

test("feat(config): [neo-118] BREAKING! allow provided config object to extend other configs", () => {
  expect(ValidationService.checkCommitMsg("feat(config): [neo-118] BREAKING! allow provided config object to extend other configs", '', '')).toBe(true);
});

test("fut(lang): [#346] add polish language", () => {
  expect(ValidationService.checkCommitMsg("fut(lang): [#346] add polish language", customPatterns, '')).toBe(true);
});



// //false


test("feature(lang): [#346] add polish language", () => {
  expect(ValidationService.checkCommitMsg("feature(lang): [#346] add polish language", '', '')).toBe(false);
});

test("feat lang: [#346] add polish language", () => {
  expect(ValidationService.checkCommitMsg("feat lang: [#346] add polish language", '', '')).toBe(false);
});

test("feat(lang): #346 add polish language", () => {
  expect(ValidationService.checkCommitMsg("feat(lang): #346 add polish language", '', '')).toBe(false);
});

test("feat(lang): (#346) add polish language", () => {
  expect(ValidationService.checkCommitMsg("feat(lang): (#346) add polish language", '', '')).toBe(false);
});

test("feat(lang): [#346] ", () => {
  expect(ValidationService.checkCommitMsg("feat(lang): [#346] ", '', '')).toBe(false);
});




// // custom patterns

test("feat(lang): [#346] add polish language", () => {
  expect(ValidationService.checkCommitMsg("feat(lang): [#346] add polish language", customPatterns, '')).toBe(false);
});
