const RELEASE_LINK_FORMAT = 'https://github.com/howettl/release-notes-test/releases/tag'

module.exports = {
    "dataSource": "prs",
    "prefix": "",
    "ignoreLabels": ["duplicate", "good first issue", "help wanted", "invalid", "question", "ready for release", "wontfix"],
    "onlyMilestones": false,
    "groupBy": {
        "New Features": ["enhancement"],
        "Bug Fixes and Other Changes": ["bug"]
    },
    template: {
        label: function () { return "" },
        release: function (placeholders) {
          return `## ☁️⛅🔥[${placeholders.release.replace('cloud-', '')}](${RELEASE_LINK_FORMAT}/${placeholders.release})\n${placeholders.body}`
        },
        group: function(placeholders) { return `## ${placeholders.heading}\n` }
    },
    "changelogFilename": "CHANGELOG.md"
}
