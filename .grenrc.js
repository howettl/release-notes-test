const RELEASE_LINK_FORMAT = 'https://github.com/howettl/release-notes-test/releases/tag'

module.exports = {
    "dataSource": "prs",
    "prefix": "v",
    "ignoreLabels": ["duplicate", "good first issue", "help wanted", "invalid", "question", "ready for release", "wontfix"],
    "onlyMilestones": false,
    "groupBy": {
        "Features": ["enhancement"],
        "Bug Fixes": ["bug"]
    },
    template: {
        label: function () { return "" },
        release: function (placeholders) {
          return `## ⛅[${placeholders.release.replace('cloud-', '')}](${RELEASE_LINK_FORMAT}/${placeholders.release.replace('vcloud', 'cloud')})\n${placeholders.body}`
        }
    },
    "changelogFilename": "CHANGELOG.md"
}
