# Google Analytics Managed Component

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![Released under the Apache license.](https://img.shields.io/badge/license-apache-blue.svg)](./LICENSE)
[![PRs welcome!](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Find out more about Managed Components [here](https://blog.cloudflare.com/zaraz-open-source-managed-components-and-webcm/) for inspiration and motivation details.

## 🚀 Quickstart local dev environment

1. Make sure you're running node version >=17.
2. Install dependencies with `npm i`
3. Run unit test watcher with `npm run test:dev`

## ⚙️ Tool Settings

> Settings are used to configure the tool in a Component Manager config file

### Tracking ID `string` _required_

`tid` is the unique identifier of your Google Analytics account. [Learn more](https://support.google.com/analytics/thread/13109681?hl=en)"

## 🧱 Fields Description

### Hit Type `string` _required_

`t` the type of hit can be `Event` or `Page view` and its value will determine how Google Analytics will process it. [Learn more](https://support.google.com/analytics/answer/6086082?hl=en)

### Event Action `string` _required_

`ea` will be sent as Event Action to Google Analytics. [Learn more](https://support.google.com/analytics/answer/1033068?hl=en)

### Google Optimize Experiment `string`

`exp` is used to run Google Optimize server-side experiments. It does precisely what ga(\"set\", \"exp\", \"$experimentId.$variationId\") would do. [Learn more](https://developers.google.com/optimize/devguides/experiments)

### Document Path `string`

`dp` is the path portion of the page URL. Should begin with `/` [Learn more](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#dp)

### Document Location `string`

`dl` is used send the full URL of the page on which content resides. Defaults to current full URL. [Learn more](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#dl)

### Document Host Name `string`

`dh` specifies the hostname from which content was hosted. [Learn more](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#dh)

### Event Category `string`

`ec` will be sent as Event Category to Google Analytics. [Learn more](https://support.google.com/analytics/answer/1033068?hl=en)

### Event Label `string`

`el` will be sent as Event Label to Google Analytics. [Learn more](https://support.google.com/analytics/answer/1033068?hl=en)

### Event Value `string`

`ev` will be sent as Event Value to Google Analytics. [Learn more](https://support.google.com/analytics/answer/1033068?hl=en)

### User ID `string`

`uid` is intended to be a known identifier for a user provided by the site owner/library user. It must not itself be PII (personally identifiable information). [Learn more](https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#uid)

### Non-interaction `boolean`

`ni` Non-interaction events are not taken into account when Google Analytics calculates bounces and session duration. [Learn more](https://support.google.com/analytics/answer/1033068?hl=en#NonInteractionEvents).

### Anonymize Originating IP Address `boolean`

`aip` will anonymize the visitor IP address in your Google Analytics UI. [Learn more](https://support.google.com/analytics/answer/2763052?hl=en)

### Content Groups `string`

`cg{1..10}` is used to collect pages into common themes in Google Analytics. [Learn more](https://support.google.com/analytics/answer/2853423?hl=en)

### Custom Dimensions `string`

`cd{1..100}` is used to send non-standard types of information to Google Analytics. [Learn more](https://support.google.com/analytics/answer/2709828?hl=en)

## 📝 License

Licensed under the [Apache License](./LICENSE).

## 💜 Thanks

Thanks to everyone contributing in any manner for this repo and to everyone working on Open Source in general.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/simonabadoiu"><img src="https://avatars.githubusercontent.com/u/1610123?v=4?s=75" width="75px;" alt=""/><br /><sub><b>Simona Badoiu</b></sub></a><br /><a href="https://github.com/managed-components/@managed-components/google-analytics/commits?author=simonabadoiu" title="Code">💻</a></td>
    <td align="center"><a href="https://yoavmoshe.com/about"><img src="https://avatars.githubusercontent.com/u/55081?v=4?s=75" width="75px;" alt=""/><br /><sub><b>Yo'av Moshe</b></sub></a><br /><a href="https://github.com/managed-components/@managed-components/google-analytics/commits?author=bjesus" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/jonnyparris"><img src="https://avatars.githubusercontent.com/u/6400000?v=4?s=75" width="75px;" alt=""/><br /><sub><b>Ruskin</b></sub></a><br /><a href="https://github.com/managed-components/@managed-components/google-analytics/commits?author=jonnyparris" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
