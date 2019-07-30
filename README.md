# Testify

Testify-Ruby is a Ruby test runner extension for VSCode. It adds codelenses near `describe`, and `it` keywords enabling VSCode to run associated tests and output the results in the integrated terminal.

Currently it works **out of the box** for the  **TODO** test runners.

## Configuration

The following configuration properties are available:

| Property                 | Description                                        | Example                |
| ------------------------ | -------------------------------------------------- | ---------------------- |
| `testify-ruby.additionalArgs` | CLI args to pass to test runner                    | "--watch"              |
| `testify-ruby.envVars`        | Environment variables to set before running a test | { "NODE_ENV": "test" } |

## Compatibility

This extension currently works with:

- TODO (hopefully MiniTest)

## Versioning

We use [Semantic Versioning](https://semver.org/spec/v2.0.0.html) for versioning. For the versions available, see the [tags on this repository](https://github.com/Ada-Developers-Academy/testify-ruby).
Also, this project adheres to [Keep a Changelog](http://keepachangelog.com/).

## Contributing

Please read the [CONTRIBUTING](https://gist.github.com/felixjb/f06bd4b0888ccb9aace87c6ae2a3cd2d) document for details on our code of conduct, and the process for submitting pull requests to us.

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars2.githubusercontent.com/u/16679401?s=460&v=4" width="100px;" alt="Felix J. Batista"/><br /><sub><b>Felix J. Batista</b></sub>](https://github.com/felixjb)<br />[💻](https://github.com/felixjb/Testify/commits?author=felixjb "Code") [🤔](#ideas-felixjb "Ideas, Planning, & Feedback") | [<img src="https://avatars0.githubusercontent.com/u/11415256?v=4" width="100px;" alt="Willian Silva"/><br /><sub><b>Willian Silva</b></sub>](https://github.com/silvawillian)<br />[💻](https://github.com/felixjb/Testify/commits?author=silvawillian "Code") | [<img src="https://avatars1.githubusercontent.com/u/11151445?v=4" width="100px;" alt="Geoffrey"/><br /><sub><b>Geoffrey</b></sub>](https://github.com/g3offrey)<br />[💻](https://github.com/felixjb/Testify/commits?author=g3offrey "Code") [🤔](#ideas-g3offrey "Ideas, Planning, & Feedback") | [<img src="https://avatars0.githubusercontent.com/u/3911114?v=4" width="100px;" alt="Johan Rouve"/><br /><sub><b>Johan Rouve</b></sub>](https://github.com/ooga)<br />[🐛](https://github.com/felixjb/Testify/issues?q=author%3Aooga "Bug reports") [💻](https://github.com/felixjb/Testify/commits?author=ooga "Code") | [<img src="https://avatars0.githubusercontent.com/u/26111050?v=4" width="100px;" alt="Kreshchenko Nickolay"/><br /><sub><b>Kreshchenko Nickolay</b></sub>](https://github.com/nkreshchenko)<br />[💻](https://github.com/felixjb/Testify/commits?author=nkreshchenko "Code") [🤔](#ideas-nkreshchenko "Ideas, Planning, & Feedback") | [<img src="https://avatars1.githubusercontent.com/u/41467575?v=4" width="100px;" alt="Sascha Dais"/><br /><sub><b>Sascha Dais</b></sub>](https://github.com/roggenbrot)<br />[🐛](https://github.com/felixjb/Testify/issues?q=author%3Aroggenbrot "Bug reports") [💻](https://github.com/felixjb/Testify/commits?author=roggenbrot "Code") [🤔](#ideas-roggenbrot "Ideas, Planning, & Feedback") |
| :---: | :---: | :---: | :---: | :---: | :---: |

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## Authors

-   **Geoffrey** - _Initial work_ - Github: [@g3offrey](https://github.com/g3offrey)
-   **Felix J. Batista** - _Forked project_ - Github: [@felixjb](https://github.com/felixjb)
-   **TODO** - _Forked Project_ - Github: [@Ada-Devleopers-Academy](https://github.com/Ada-Developers-Academy/)

_based on [Testify](https://github.com/felixjb/testify) by_ **Felix J. Batista**

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/Ada-Developers-Academy/testify-ruby/blob/master/LICENSE) file for details.
