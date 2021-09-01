require('./sourcemap-register.js')
/******/ ;(() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ 7351: /***/ function (
      __unused_webpack_module,
      exports,
      __nccwpck_require__
    ) {
      'use strict'

      var __createBinding =
        (this && this.__createBinding) ||
        (Object.create
          ? function (o, m, k, k2) {
              if (k2 === undefined) k2 = k
              Object.defineProperty(o, k2, {
                enumerable: true,
                get: function () {
                  return m[k]
                }
              })
            }
          : function (o, m, k, k2) {
              if (k2 === undefined) k2 = k
              o[k2] = m[k]
            })
      var __setModuleDefault =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (o, v) {
              Object.defineProperty(o, 'default', {
                enumerable: true,
                value: v
              })
            }
          : function (o, v) {
              o['default'] = v
            })
      var __importStar =
        (this && this.__importStar) ||
        function (mod) {
          if (mod && mod.__esModule) return mod
          var result = {}
          if (mod != null)
            for (var k in mod)
              if (k !== 'default' && Object.hasOwnProperty.call(mod, k))
                __createBinding(result, mod, k)
          __setModuleDefault(result, mod)
          return result
        }
      Object.defineProperty(exports, '__esModule', { value: true })
      exports.issue = exports.issueCommand = void 0
      const os = __importStar(__nccwpck_require__(2087))
      const utils_1 = __nccwpck_require__(5278)
      /**
       * Commands
       *
       * Command Format:
       *   ::name key=value,key=value::message
       *
       * Examples:
       *   ::warning::This is the message
       *   ::set-env name=MY_VAR::some value
       */
      function issueCommand(command, properties, message) {
        const cmd = new Command(command, properties, message)
        process.stdout.write(cmd.toString() + os.EOL)
      }
      exports.issueCommand = issueCommand
      function issue(name, message = '') {
        issueCommand(name, {}, message)
      }
      exports.issue = issue
      const CMD_STRING = '::'
      class Command {
        constructor(command, properties, message) {
          if (!command) {
            command = 'missing.command'
          }
          this.command = command
          this.properties = properties
          this.message = message
        }
        toString() {
          let cmdStr = CMD_STRING + this.command
          if (this.properties && Object.keys(this.properties).length > 0) {
            cmdStr += ' '
            let first = true
            for (const key in this.properties) {
              if (this.properties.hasOwnProperty(key)) {
                const val = this.properties[key]
                if (val) {
                  if (first) {
                    first = false
                  } else {
                    cmdStr += ','
                  }
                  cmdStr += `${key}=${escapeProperty(val)}`
                }
              }
            }
          }
          cmdStr += `${CMD_STRING}${escapeData(this.message)}`
          return cmdStr
        }
      }
      function escapeData(s) {
        return utils_1
          .toCommandValue(s)
          .replace(/%/g, '%25')
          .replace(/\r/g, '%0D')
          .replace(/\n/g, '%0A')
      }
      function escapeProperty(s) {
        return utils_1
          .toCommandValue(s)
          .replace(/%/g, '%25')
          .replace(/\r/g, '%0D')
          .replace(/\n/g, '%0A')
          .replace(/:/g, '%3A')
          .replace(/,/g, '%2C')
      }
      //# sourceMappingURL=command.js.map

      /***/
    },

    /***/ 2186: /***/ function (
      __unused_webpack_module,
      exports,
      __nccwpck_require__
    ) {
      'use strict'

      var __createBinding =
        (this && this.__createBinding) ||
        (Object.create
          ? function (o, m, k, k2) {
              if (k2 === undefined) k2 = k
              Object.defineProperty(o, k2, {
                enumerable: true,
                get: function () {
                  return m[k]
                }
              })
            }
          : function (o, m, k, k2) {
              if (k2 === undefined) k2 = k
              o[k2] = m[k]
            })
      var __setModuleDefault =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (o, v) {
              Object.defineProperty(o, 'default', {
                enumerable: true,
                value: v
              })
            }
          : function (o, v) {
              o['default'] = v
            })
      var __importStar =
        (this && this.__importStar) ||
        function (mod) {
          if (mod && mod.__esModule) return mod
          var result = {}
          if (mod != null)
            for (var k in mod)
              if (k !== 'default' && Object.hasOwnProperty.call(mod, k))
                __createBinding(result, mod, k)
          __setModuleDefault(result, mod)
          return result
        }
      var __awaiter =
        (this && this.__awaiter) ||
        function (thisArg, _arguments, P, generator) {
          function adopt(value) {
            return value instanceof P
              ? value
              : new P(function (resolve) {
                  resolve(value)
                })
          }
          return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value))
              } catch (e) {
                reject(e)
              }
            }
            function rejected(value) {
              try {
                step(generator['throw'](value))
              } catch (e) {
                reject(e)
              }
            }
            function step(result) {
              result.done
                ? resolve(result.value)
                : adopt(result.value).then(fulfilled, rejected)
            }
            step(
              (generator = generator.apply(thisArg, _arguments || [])).next()
            )
          })
        }
      Object.defineProperty(exports, '__esModule', { value: true })
      exports.getState =
        exports.saveState =
        exports.group =
        exports.endGroup =
        exports.startGroup =
        exports.info =
        exports.notice =
        exports.warning =
        exports.error =
        exports.debug =
        exports.isDebug =
        exports.setFailed =
        exports.setCommandEcho =
        exports.setOutput =
        exports.getBooleanInput =
        exports.getMultilineInput =
        exports.getInput =
        exports.addPath =
        exports.setSecret =
        exports.exportVariable =
        exports.ExitCode =
          void 0
      const command_1 = __nccwpck_require__(7351)
      const file_command_1 = __nccwpck_require__(717)
      const utils_1 = __nccwpck_require__(5278)
      const os = __importStar(__nccwpck_require__(2087))
      const path = __importStar(__nccwpck_require__(5622))
      /**
       * The code to exit an action
       */
      var ExitCode
      ;(function (ExitCode) {
        /**
         * A code indicating that the action was successful
         */
        ExitCode[(ExitCode['Success'] = 0)] = 'Success'
        /**
         * A code indicating that the action was a failure
         */
        ExitCode[(ExitCode['Failure'] = 1)] = 'Failure'
      })((ExitCode = exports.ExitCode || (exports.ExitCode = {})))
      //-----------------------------------------------------------------------
      // Variables
      //-----------------------------------------------------------------------
      /**
       * Sets env variable for this action and future actions in the job
       * @param name the name of the variable to set
       * @param val the value of the variable. Non-string values will be converted to a string via JSON.stringify
       */
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      function exportVariable(name, val) {
        const convertedVal = utils_1.toCommandValue(val)
        process.env[name] = convertedVal
        const filePath = process.env['GITHUB_ENV'] || ''
        if (filePath) {
          const delimiter = '_GitHubActionsFileCommandDelimeter_'
          const commandValue = `${name}<<${delimiter}${os.EOL}${convertedVal}${os.EOL}${delimiter}`
          file_command_1.issueCommand('ENV', commandValue)
        } else {
          command_1.issueCommand('set-env', { name }, convertedVal)
        }
      }
      exports.exportVariable = exportVariable
      /**
       * Registers a secret which will get masked from logs
       * @param secret value of the secret
       */
      function setSecret(secret) {
        command_1.issueCommand('add-mask', {}, secret)
      }
      exports.setSecret = setSecret
      /**
       * Prepends inputPath to the PATH (for this action and future actions)
       * @param inputPath
       */
      function addPath(inputPath) {
        const filePath = process.env['GITHUB_PATH'] || ''
        if (filePath) {
          file_command_1.issueCommand('PATH', inputPath)
        } else {
          command_1.issueCommand('add-path', {}, inputPath)
        }
        process.env[
          'PATH'
        ] = `${inputPath}${path.delimiter}${process.env['PATH']}`
      }
      exports.addPath = addPath
      /**
       * Gets the value of an input.
       * Unless trimWhitespace is set to false in InputOptions, the value is also trimmed.
       * Returns an empty string if the value is not defined.
       *
       * @param     name     name of the input to get
       * @param     options  optional. See InputOptions.
       * @returns   string
       */
      function getInput(name, options) {
        const val =
          process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`] || ''
        if (options && options.required && !val) {
          throw new Error(`Input required and not supplied: ${name}`)
        }
        if (options && options.trimWhitespace === false) {
          return val
        }
        return val.trim()
      }
      exports.getInput = getInput
      /**
       * Gets the values of an multiline input.  Each value is also trimmed.
       *
       * @param     name     name of the input to get
       * @param     options  optional. See InputOptions.
       * @returns   string[]
       *
       */
      function getMultilineInput(name, options) {
        const inputs = getInput(name, options)
          .split('\n')
          .filter((x) => x !== '')
        return inputs
      }
      exports.getMultilineInput = getMultilineInput
      /**
       * Gets the input value of the boolean type in the YAML 1.2 "core schema" specification.
       * Support boolean input list: `true | True | TRUE | false | False | FALSE` .
       * The return value is also in boolean type.
       * ref: https://yaml.org/spec/1.2/spec.html#id2804923
       *
       * @param     name     name of the input to get
       * @param     options  optional. See InputOptions.
       * @returns   boolean
       */
      function getBooleanInput(name, options) {
        const trueValue = ['true', 'True', 'TRUE']
        const falseValue = ['false', 'False', 'FALSE']
        const val = getInput(name, options)
        if (trueValue.includes(val)) return true
        if (falseValue.includes(val)) return false
        throw new TypeError(
          `Input does not meet YAML 1.2 "Core Schema" specification: ${name}\n` +
            `Support boolean input list: \`true | True | TRUE | false | False | FALSE\``
        )
      }
      exports.getBooleanInput = getBooleanInput
      /**
       * Sets the value of an output.
       *
       * @param     name     name of the output to set
       * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
       */
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      function setOutput(name, value) {
        process.stdout.write(os.EOL)
        command_1.issueCommand('set-output', { name }, value)
      }
      exports.setOutput = setOutput
      /**
       * Enables or disables the echoing of commands into stdout for the rest of the step.
       * Echoing is disabled by default if ACTIONS_STEP_DEBUG is not set.
       *
       */
      function setCommandEcho(enabled) {
        command_1.issue('echo', enabled ? 'on' : 'off')
      }
      exports.setCommandEcho = setCommandEcho
      //-----------------------------------------------------------------------
      // Results
      //-----------------------------------------------------------------------
      /**
       * Sets the action status to failed.
       * When the action exits it will be with an exit code of 1
       * @param message add error issue message
       */
      function setFailed(message) {
        process.exitCode = ExitCode.Failure
        error(message)
      }
      exports.setFailed = setFailed
      //-----------------------------------------------------------------------
      // Logging Commands
      //-----------------------------------------------------------------------
      /**
       * Gets whether Actions Step Debug is on or not
       */
      function isDebug() {
        return process.env['RUNNER_DEBUG'] === '1'
      }
      exports.isDebug = isDebug
      /**
       * Writes debug message to user log
       * @param message debug message
       */
      function debug(message) {
        command_1.issueCommand('debug', {}, message)
      }
      exports.debug = debug
      /**
       * Adds an error issue
       * @param message error issue message. Errors will be converted to string via toString()
       * @param properties optional properties to add to the annotation.
       */
      function error(message, properties = {}) {
        command_1.issueCommand(
          'error',
          utils_1.toCommandProperties(properties),
          message instanceof Error ? message.toString() : message
        )
      }
      exports.error = error
      /**
       * Adds a warning issue
       * @param message warning issue message. Errors will be converted to string via toString()
       * @param properties optional properties to add to the annotation.
       */
      function warning(message, properties = {}) {
        command_1.issueCommand(
          'warning',
          utils_1.toCommandProperties(properties),
          message instanceof Error ? message.toString() : message
        )
      }
      exports.warning = warning
      /**
       * Adds a notice issue
       * @param message notice issue message. Errors will be converted to string via toString()
       * @param properties optional properties to add to the annotation.
       */
      function notice(message, properties = {}) {
        command_1.issueCommand(
          'notice',
          utils_1.toCommandProperties(properties),
          message instanceof Error ? message.toString() : message
        )
      }
      exports.notice = notice
      /**
       * Writes info to log with console.log.
       * @param message info message
       */
      function info(message) {
        process.stdout.write(message + os.EOL)
      }
      exports.info = info
      /**
       * Begin an output group.
       *
       * Output until the next `groupEnd` will be foldable in this group
       *
       * @param name The name of the output group
       */
      function startGroup(name) {
        command_1.issue('group', name)
      }
      exports.startGroup = startGroup
      /**
       * End an output group.
       */
      function endGroup() {
        command_1.issue('endgroup')
      }
      exports.endGroup = endGroup
      /**
       * Wrap an asynchronous function call in a group.
       *
       * Returns the same type as the function itself.
       *
       * @param name The name of the group
       * @param fn The function to wrap in the group
       */
      function group(name, fn) {
        return __awaiter(this, void 0, void 0, function* () {
          startGroup(name)
          let result
          try {
            result = yield fn()
          } finally {
            endGroup()
          }
          return result
        })
      }
      exports.group = group
      //-----------------------------------------------------------------------
      // Wrapper action state
      //-----------------------------------------------------------------------
      /**
       * Saves state for current action, the state can only be retrieved by this action's post job execution.
       *
       * @param     name     name of the state to store
       * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
       */
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      function saveState(name, value) {
        command_1.issueCommand('save-state', { name }, value)
      }
      exports.saveState = saveState
      /**
       * Gets the value of an state set by this action's main execution.
       *
       * @param     name     name of the state to get
       * @returns   string
       */
      function getState(name) {
        return process.env[`STATE_${name}`] || ''
      }
      exports.getState = getState
      //# sourceMappingURL=core.js.map

      /***/
    },

    /***/ 717: /***/ function (
      __unused_webpack_module,
      exports,
      __nccwpck_require__
    ) {
      'use strict'

      // For internal use, subject to change.
      var __createBinding =
        (this && this.__createBinding) ||
        (Object.create
          ? function (o, m, k, k2) {
              if (k2 === undefined) k2 = k
              Object.defineProperty(o, k2, {
                enumerable: true,
                get: function () {
                  return m[k]
                }
              })
            }
          : function (o, m, k, k2) {
              if (k2 === undefined) k2 = k
              o[k2] = m[k]
            })
      var __setModuleDefault =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (o, v) {
              Object.defineProperty(o, 'default', {
                enumerable: true,
                value: v
              })
            }
          : function (o, v) {
              o['default'] = v
            })
      var __importStar =
        (this && this.__importStar) ||
        function (mod) {
          if (mod && mod.__esModule) return mod
          var result = {}
          if (mod != null)
            for (var k in mod)
              if (k !== 'default' && Object.hasOwnProperty.call(mod, k))
                __createBinding(result, mod, k)
          __setModuleDefault(result, mod)
          return result
        }
      Object.defineProperty(exports, '__esModule', { value: true })
      exports.issueCommand = void 0
      // We use any as a valid input type
      /* eslint-disable @typescript-eslint/no-explicit-any */
      const fs = __importStar(__nccwpck_require__(5747))
      const os = __importStar(__nccwpck_require__(2087))
      const utils_1 = __nccwpck_require__(5278)
      function issueCommand(command, message) {
        const filePath = process.env[`GITHUB_${command}`]
        if (!filePath) {
          throw new Error(
            `Unable to find environment variable for file command ${command}`
          )
        }
        if (!fs.existsSync(filePath)) {
          throw new Error(`Missing file at path: ${filePath}`)
        }
        fs.appendFileSync(
          filePath,
          `${utils_1.toCommandValue(message)}${os.EOL}`,
          {
            encoding: 'utf8'
          }
        )
      }
      exports.issueCommand = issueCommand
      //# sourceMappingURL=file-command.js.map

      /***/
    },

    /***/ 5278: /***/ (__unused_webpack_module, exports) => {
      'use strict'

      // We use any as a valid input type
      /* eslint-disable @typescript-eslint/no-explicit-any */
      Object.defineProperty(exports, '__esModule', { value: true })
      exports.toCommandProperties = exports.toCommandValue = void 0
      /**
       * Sanitizes an input into a string so it can be passed into issueCommand safely
       * @param input input to sanitize into a string
       */
      function toCommandValue(input) {
        if (input === null || input === undefined) {
          return ''
        } else if (typeof input === 'string' || input instanceof String) {
          return input
        }
        return JSON.stringify(input)
      }
      exports.toCommandValue = toCommandValue
      /**
       *
       * @param annotationProperties
       * @returns The command properties to send with the actual annotation command
       * See IssueCommandProperties: https://github.com/actions/runner/blob/main/src/Runner.Worker/ActionCommandManager.cs#L646
       */
      function toCommandProperties(annotationProperties) {
        if (!Object.keys(annotationProperties).length) {
          return {}
        }
        return {
          title: annotationProperties.title,
          line: annotationProperties.startLine,
          endLine: annotationProperties.endLine,
          col: annotationProperties.startColumn,
          endColumn: annotationProperties.endColumn
        }
      }
      exports.toCommandProperties = toCommandProperties
      //# sourceMappingURL=utils.js.map

      /***/
    },

    /***/ 4087: /***/ (
      __unused_webpack_module,
      exports,
      __nccwpck_require__
    ) => {
      'use strict'

      Object.defineProperty(exports, '__esModule', { value: true })
      exports.Context = void 0
      const fs_1 = __nccwpck_require__(5747)
      const os_1 = __nccwpck_require__(2087)
      class Context {
        /**
         * Hydrate the context from the environment
         */
        constructor() {
          var _a, _b, _c
          this.payload = {}
          if (process.env.GITHUB_EVENT_PATH) {
            if (fs_1.existsSync(process.env.GITHUB_EVENT_PATH)) {
              this.payload = JSON.parse(
                fs_1.readFileSync(process.env.GITHUB_EVENT_PATH, {
                  encoding: 'utf8'
                })
              )
            } else {
              const path = process.env.GITHUB_EVENT_PATH
              process.stdout.write(
                `GITHUB_EVENT_PATH ${path} does not exist${os_1.EOL}`
              )
            }
          }
          this.eventName = process.env.GITHUB_EVENT_NAME
          this.sha = process.env.GITHUB_SHA
          this.ref = process.env.GITHUB_REF
          this.workflow = process.env.GITHUB_WORKFLOW
          this.action = process.env.GITHUB_ACTION
          this.actor = process.env.GITHUB_ACTOR
          this.job = process.env.GITHUB_JOB
          this.runNumber = parseInt(process.env.GITHUB_RUN_NUMBER, 10)
          this.runId = parseInt(process.env.GITHUB_RUN_ID, 10)
          this.apiUrl =
            (_a = process.env.GITHUB_API_URL) !== null && _a !== void 0
              ? _a
              : `https://api.github.com`
          this.serverUrl =
            (_b = process.env.GITHUB_SERVER_URL) !== null && _b !== void 0
              ? _b
              : `https://github.com`
          this.graphqlUrl =
            (_c = process.env.GITHUB_GRAPHQL_URL) !== null && _c !== void 0
              ? _c
              : `https://api.github.com/graphql`
        }
        get issue() {
          const payload = this.payload
          return Object.assign(Object.assign({}, this.repo), {
            number: (payload.issue || payload.pull_request || payload).number
          })
        }
        get repo() {
          if (process.env.GITHUB_REPOSITORY) {
            const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/')
            return { owner, repo }
          }
          if (this.payload.repository) {
            return {
              owner: this.payload.repository.owner.login,
              repo: this.payload.repository.name
            }
          }
          throw new Error(
            "context.repo requires a GITHUB_REPOSITORY environment variable like 'owner/repo'"
          )
        }
      }
      exports.Context = Context
      //# sourceMappingURL=context.js.map

      /***/
    },

    /***/ 5438: /***/ function (
      __unused_webpack_module,
      exports,
      __nccwpck_require__
    ) {
      'use strict'

      var __createBinding =
        (this && this.__createBinding) ||
        (Object.create
          ? function (o, m, k, k2) {
              if (k2 === undefined) k2 = k
              Object.defineProperty(o, k2, {
                enumerable: true,
                get: function () {
                  return m[k]
                }
              })
            }
          : function (o, m, k, k2) {
              if (k2 === undefined) k2 = k
              o[k2] = m[k]
            })
      var __setModuleDefault =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (o, v) {
              Object.defineProperty(o, 'default', {
                enumerable: true,
                value: v
              })
            }
          : function (o, v) {
              o['default'] = v
            })
      var __importStar =
        (this && this.__importStar) ||
        function (mod) {
          if (mod && mod.__esModule) return mod
          var result = {}
          if (mod != null)
            for (var k in mod)
              if (k !== 'default' && Object.hasOwnProperty.call(mod, k))
                __createBinding(result, mod, k)
          __setModuleDefault(result, mod)
          return result
        }
      Object.defineProperty(exports, '__esModule', { value: true })
      exports.getOctokit = exports.context = void 0
      const Context = __importStar(__nccwpck_require__(4087))
      const utils_1 = __nccwpck_require__(3030)
      exports.context = new Context.Context()
      /**
       * Returns a hydrated octokit ready to use for GitHub Actions
       *
       * @param     token    the repo PAT or GITHUB_TOKEN
       * @param     options  other options to set
       */
      function getOctokit(token, options) {
        return new utils_1.GitHub(utils_1.getOctokitOptions(token, options))
      }
      exports.getOctokit = getOctokit
      //# sourceMappingURL=github.js.map

      /***/
    },

    /***/ 7914: /***/ function (
      __unused_webpack_module,
      exports,
      __nccwpck_require__
    ) {
      'use strict'

      var __createBinding =
        (this && this.__createBinding) ||
        (Object.create
          ? function (o, m, k, k2) {
              if (k2 === undefined) k2 = k
              Object.defineProperty(o, k2, {
                enumerable: true,
                get: function () {
                  return m[k]
                }
              })
            }
          : function (o, m, k, k2) {
              if (k2 === undefined) k2 = k
              o[k2] = m[k]
            })
      var __setModuleDefault =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (o, v) {
              Object.defineProperty(o, 'default', {
                enumerable: true,
                value: v
              })
            }
          : function (o, v) {
              o['default'] = v
            })
      var __importStar =
        (this && this.__importStar) ||
        function (mod) {
          if (mod && mod.__esModule) return mod
          var result = {}
          if (mod != null)
            for (var k in mod)
              if (k !== 'default' && Object.hasOwnProperty.call(mod, k))
                __createBinding(result, mod, k)
          __setModuleDefault(result, mod)
          return result
        }
      Object.defineProperty(exports, '__esModule', { value: true })
      exports.getApiBaseUrl =
        exports.getProxyAgent =
        exports.getAuthString =
          void 0
      const httpClient = __importStar(__nccwpck_require__(9925))
      function getAuthString(token, options) {
        if (!token && !options.auth) {
          throw new Error('Parameter token or opts.auth is required')
        } else if (token && options.auth) {
          throw new Error(
            'Parameters token and opts.auth may not both be specified'
          )
        }
        return typeof options.auth === 'string'
          ? options.auth
          : `token ${token}`
      }
      exports.getAuthString = getAuthString
      function getProxyAgent(destinationUrl) {
        const hc = new httpClient.HttpClient()
        return hc.getAgent(destinationUrl)
      }
      exports.getProxyAgent = getProxyAgent
      function getApiBaseUrl() {
        return process.env['GITHUB_API_URL'] || 'https://api.github.com'
      }
      exports.getApiBaseUrl = getApiBaseUrl
      //# sourceMappingURL=utils.js.map

      /***/
    },

    /***/ 3030: /***/ function (
      __unused_webpack_module,
      exports,
      __nccwpck_require__
    ) {
      'use strict'

      var __createBinding =
        (this && this.__createBinding) ||
        (Object.create
          ? function (o, m, k, k2) {
              if (k2 === undefined) k2 = k
              Object.defineProperty(o, k2, {
                enumerable: true,
                get: function () {
                  return m[k]
                }
              })
            }
          : function (o, m, k, k2) {
              if (k2 === undefined) k2 = k
              o[k2] = m[k]
            })
      var __setModuleDefault =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function (o, v) {
              Object.defineProperty(o, 'default', {
                enumerable: true,
                value: v
              })
            }
          : function (o, v) {
              o['default'] = v
            })
      var __importStar =
        (this && this.__importStar) ||
        function (mod) {
          if (mod && mod.__esModule) return mod
          var result = {}
          if (mod != null)
            for (var k in mod)
              if (k !== 'default' && Object.hasOwnProperty.call(mod, k))
                __createBinding(result, mod, k)
          __setModuleDefault(result, mod)
          return result
        }
      Object.defineProperty(exports, '__esModule', { value: true })
      exports.getOctokitOptions = exports.GitHub = exports.context = void 0
      const Context = __importStar(__nccwpck_require__(4087))
      const Utils = __importStar(__nccwpck_require__(7914))
      // octokit + plugins
      const core_1 = __nccwpck_require__(8525)
      const plugin_rest_endpoint_methods_1 = __nccwpck_require__(3044)
      const plugin_paginate_rest_1 = __nccwpck_require__(8945)
      exports.context = new Context.Context()
      const baseUrl = Utils.getApiBaseUrl()
      const defaults = {
        baseUrl,
        request: {
          agent: Utils.getProxyAgent(baseUrl)
        }
      }
      exports.GitHub = core_1.Octokit.plugin(
        plugin_rest_endpoint_methods_1.restEndpointMethods,
        plugin_paginate_rest_1.paginateRest
      ).defaults(defaults)
      /**
       * Convience function to correctly format Octokit Options to pass into the constructor.
       *
       * @param     token    the repo PAT or GITHUB_TOKEN
       * @param     options  other options to set
       */
      function getOctokitOptions(token, options) {
        const opts = Object.assign({}, options || {}) // Shallow clone - don't mutate the object provided by the caller
        // Auth
        const auth = Utils.getAuthString(token, opts)
        if (auth) {
          opts.auth = auth
        }
        return opts
      }
      exports.getOctokitOptions = getOctokitOptions
      //# sourceMappingURL=utils.js.map

      /***/
    },

    /***/ 8525: /***/ (
      __unused_webpack_module,
      exports,
      __nccwpck_require__
    ) => {
      'use strict'

      Object.defineProperty(exports, '__esModule', { value: true })

      var universalUserAgent = __nccwpck_require__(5030)
      var beforeAfterHook = __nccwpck_require__(7041)
      var request = __nccwpck_require__(6234)
      var graphql = __nccwpck_require__(8467)
      var authToken = __nccwpck_require__(334)

      function _objectWithoutPropertiesLoose(source, excluded) {
        if (source == null) return {}
        var target = {}
        var sourceKeys = Object.keys(source)
        var key, i

        for (i = 0; i < sourceKeys.length; i++) {
          key = sourceKeys[i]
          if (excluded.indexOf(key) >= 0) continue
          target[key] = source[key]
        }

        return target
      }

      function _objectWithoutProperties(source, excluded) {
        if (source == null) return {}

        var target = _objectWithoutPropertiesLoose(source, excluded)

        var key, i

        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source)

          for (i = 0; i < sourceSymbolKeys.length; i++) {
            key = sourceSymbolKeys[i]
            if (excluded.indexOf(key) >= 0) continue
            if (!Object.prototype.propertyIsEnumerable.call(source, key))
              continue
            target[key] = source[key]
          }
        }

        return target
      }

      const VERSION = '3.4.0'

      class Octokit {
        constructor(options = {}) {
          const hook = new beforeAfterHook.Collection()
          const requestDefaults = {
            baseUrl: request.request.endpoint.DEFAULTS.baseUrl,
            headers: {},
            request: Object.assign({}, options.request, {
              // @ts-ignore internal usage only, no need to type
              hook: hook.bind(null, 'request')
            }),
            mediaType: {
              previews: [],
              format: ''
            }
          } // prepend default user agent with `options.userAgent` if set

          requestDefaults.headers['user-agent'] = [
            options.userAgent,
            `octokit-core.js/${VERSION} ${universalUserAgent.getUserAgent()}`
          ]
            .filter(Boolean)
            .join(' ')

          if (options.baseUrl) {
            requestDefaults.baseUrl = options.baseUrl
          }

          if (options.previews) {
            requestDefaults.mediaType.previews = options.previews
          }

          if (options.timeZone) {
            requestDefaults.headers['time-zone'] = options.timeZone
          }

          this.request = request.request.defaults(requestDefaults)
          this.graphql = graphql
            .withCustomRequest(this.request)
            .defaults(requestDefaults)
          this.log = Object.assign(
            {
              debug: () => {},
              info: () => {},
              warn: console.warn.bind(console),
              error: console.error.bind(console)
            },
            options.log
          )
          this.hook = hook // (1) If neither `options.authStrategy` nor `options.auth` are set, the `octokit` instance
          //     is unauthenticated. The `this.auth()` method is a no-op and no request hook is registered.
          // (2) If only `options.auth` is set, use the default token authentication strategy.
          // (3) If `options.authStrategy` is set then use it and pass in `options.auth`. Always pass own request as many strategies accept a custom request instance.
          // TODO: type `options.auth` based on `options.authStrategy`.

          if (!options.authStrategy) {
            if (!options.auth) {
              // (1)
              this.auth = async () => ({
                type: 'unauthenticated'
              })
            } else {
              // (2)
              const auth = authToken.createTokenAuth(options.auth) // @ts-ignore  ¯\_(ツ)_/¯

              hook.wrap('request', auth.hook)
              this.auth = auth
            }
          } else {
            const { authStrategy } = options,
              otherOptions = _objectWithoutProperties(options, ['authStrategy'])

            const auth = authStrategy(
              Object.assign(
                {
                  request: this.request,
                  log: this.log,
                  // we pass the current octokit instance as well as its constructor options
                  // to allow for authentication strategies that return a new octokit instance
                  // that shares the same internal state as the current one. The original
                  // requirement for this was the "event-octokit" authentication strategy
                  // of https://github.com/probot/octokit-auth-probot.
                  octokit: this,
                  octokitOptions: otherOptions
                },
                options.auth
              )
            ) // @ts-ignore  ¯\_(ツ)_/¯

            hook.wrap('request', auth.hook)
            this.auth = auth
          } // apply plugins
          // https://stackoverflow.com/a/16345172

          const classConstructor = this.constructor
          classConstructor.plugins.forEach((plugin) => {
            Object.assign(this, plugin(this, options))
          })
        }

        static defaults(defaults) {
          const OctokitWithDefaults = class extends this {
            constructor(...args) {
              const options = args[0] || {}

              if (typeof defaults === 'function') {
                super(defaults(options))
                return
              }

              super(
                Object.assign(
                  {},
                  defaults,
                  options,
                  options.userAgent && defaults.userAgent
                    ? {
                        userAgent: `${options.userAgent} ${defaults.userAgent}`
                      }
                    : null
                )
              )
            }
          }
          return OctokitWithDefaults
        }
        /**
         * Attach a plugin (or many) to your Octokit instance.
         *
         * @example
         * const API = Octokit.plugin(plugin1, plugin2, plugin3, ...)
         */

        static plugin(...newPlugins) {
          var _a

          const currentPlugins = this.plugins
          const NewOctokit =
            ((_a = class extends this {}),
            (_a.plugins = currentPlugins.concat(
              newPlugins.filter((plugin) => !currentPlugins.includes(plugin))
            )),
            _a)
          return NewOctokit
        }
      }
      Octokit.VERSION = VERSION
      Octokit.plugins = []

      exports.Octokit = Octokit
      //# sourceMappingURL=index.js.map

      /***/
    },

    /***/ 8945: /***/ (__unused_webpack_module, exports) => {
      'use strict'

      Object.defineProperty(exports, '__esModule', { value: true })

      const VERSION = '2.13.3'

      /**
       * Some “list” response that can be paginated have a different response structure
       *
       * They have a `total_count` key in the response (search also has `incomplete_results`,
       * /installation/repositories also has `repository_selection`), as well as a key with
       * the list of the items which name varies from endpoint to endpoint.
       *
       * Octokit normalizes these responses so that paginated results are always returned following
       * the same structure. One challenge is that if the list response has only one page, no Link
       * header is provided, so this header alone is not sufficient to check wether a response is
       * paginated or not.
       *
       * We check if a "total_count" key is present in the response data, but also make sure that
       * a "url" property is not, as the "Get the combined status for a specific ref" endpoint would
       * otherwise match: https://developer.github.com/v3/repos/statuses/#get-the-combined-status-for-a-specific-ref
       */
      function normalizePaginatedListResponse(response) {
        const responseNeedsNormalization =
          'total_count' in response.data && !('url' in response.data)
        if (!responseNeedsNormalization) return response // keep the additional properties intact as there is currently no other way
        // to retrieve the same information.

        const incompleteResults = response.data.incomplete_results
        const repositorySelection = response.data.repository_selection
        const totalCount = response.data.total_count
        delete response.data.incomplete_results
        delete response.data.repository_selection
        delete response.data.total_count
        const namespaceKey = Object.keys(response.data)[0]
        const data = response.data[namespaceKey]
        response.data = data

        if (typeof incompleteResults !== 'undefined') {
          response.data.incomplete_results = incompleteResults
        }

        if (typeof repositorySelection !== 'undefined') {
          response.data.repository_selection = repositorySelection
        }

        response.data.total_count = totalCount
        return response
      }

      function iterator(octokit, route, parameters) {
        const options =
          typeof route === 'function'
            ? route.endpoint(parameters)
            : octokit.request.endpoint(route, parameters)
        const requestMethod =
          typeof route === 'function' ? route : octokit.request
        const method = options.method
        const headers = options.headers
        let url = options.url
        return {
          [Symbol.asyncIterator]: () => ({
            async next() {
              if (!url)
                return {
                  done: true
                }
              const response = await requestMethod({
                method,
                url,
                headers
              })
              const normalizedResponse =
                normalizePaginatedListResponse(response) // `response.headers.link` format:
              // '<https://api.github.com/users/aseemk/followers?page=2>; rel="next", <https://api.github.com/users/aseemk/followers?page=2>; rel="last"'
              // sets `url` to undefined if "next" URL is not present or `link` header is not set

              url = ((normalizedResponse.headers.link || '').match(
                /<([^>]+)>;\s*rel="next"/
              ) || [])[1]
              return {
                value: normalizedResponse
              }
            }
          })
        }
      }

      function paginate(octokit, route, parameters, mapFn) {
        if (typeof parameters === 'function') {
          mapFn = parameters
          parameters = undefined
        }

        return gather(
          octokit,
          [],
          iterator(octokit, route, parameters)[Symbol.asyncIterator](),
          mapFn
        )
      }

      function gather(octokit, results, iterator, mapFn) {
        return iterator.next().then((result) => {
          if (result.done) {
            return results
          }

          let earlyExit = false

          function done() {
            earlyExit = true
          }

          results = results.concat(
            mapFn ? mapFn(result.value, done) : result.value.data
          )

          if (earlyExit) {
            return results
          }

          return gather(octokit, results, iterator, mapFn)
        })
      }

      const composePaginateRest = Object.assign(paginate, {
        iterator
      })

      const paginatingEndpoints = [
        'GET /app/installations',
        'GET /applications/grants',
        'GET /authorizations',
        'GET /enterprises/{enterprise}/actions/permissions/organizations',
        'GET /enterprises/{enterprise}/actions/runner-groups',
        'GET /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations',
        'GET /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners',
        'GET /enterprises/{enterprise}/actions/runners',
        'GET /enterprises/{enterprise}/actions/runners/downloads',
        'GET /events',
        'GET /gists',
        'GET /gists/public',
        'GET /gists/starred',
        'GET /gists/{gist_id}/comments',
        'GET /gists/{gist_id}/commits',
        'GET /gists/{gist_id}/forks',
        'GET /installation/repositories',
        'GET /issues',
        'GET /marketplace_listing/plans',
        'GET /marketplace_listing/plans/{plan_id}/accounts',
        'GET /marketplace_listing/stubbed/plans',
        'GET /marketplace_listing/stubbed/plans/{plan_id}/accounts',
        'GET /networks/{owner}/{repo}/events',
        'GET /notifications',
        'GET /organizations',
        'GET /orgs/{org}/actions/permissions/repositories',
        'GET /orgs/{org}/actions/runner-groups',
        'GET /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories',
        'GET /orgs/{org}/actions/runner-groups/{runner_group_id}/runners',
        'GET /orgs/{org}/actions/runners',
        'GET /orgs/{org}/actions/runners/downloads',
        'GET /orgs/{org}/actions/secrets',
        'GET /orgs/{org}/actions/secrets/{secret_name}/repositories',
        'GET /orgs/{org}/blocks',
        'GET /orgs/{org}/credential-authorizations',
        'GET /orgs/{org}/events',
        'GET /orgs/{org}/failed_invitations',
        'GET /orgs/{org}/hooks',
        'GET /orgs/{org}/installations',
        'GET /orgs/{org}/invitations',
        'GET /orgs/{org}/invitations/{invitation_id}/teams',
        'GET /orgs/{org}/issues',
        'GET /orgs/{org}/members',
        'GET /orgs/{org}/migrations',
        'GET /orgs/{org}/migrations/{migration_id}/repositories',
        'GET /orgs/{org}/outside_collaborators',
        'GET /orgs/{org}/projects',
        'GET /orgs/{org}/public_members',
        'GET /orgs/{org}/repos',
        'GET /orgs/{org}/team-sync/groups',
        'GET /orgs/{org}/teams',
        'GET /orgs/{org}/teams/{team_slug}/discussions',
        'GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments',
        'GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions',
        'GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions',
        'GET /orgs/{org}/teams/{team_slug}/invitations',
        'GET /orgs/{org}/teams/{team_slug}/members',
        'GET /orgs/{org}/teams/{team_slug}/projects',
        'GET /orgs/{org}/teams/{team_slug}/repos',
        'GET /orgs/{org}/teams/{team_slug}/team-sync/group-mappings',
        'GET /orgs/{org}/teams/{team_slug}/teams',
        'GET /projects/columns/{column_id}/cards',
        'GET /projects/{project_id}/collaborators',
        'GET /projects/{project_id}/columns',
        'GET /repos/{owner}/{repo}/actions/artifacts',
        'GET /repos/{owner}/{repo}/actions/runners',
        'GET /repos/{owner}/{repo}/actions/runners/downloads',
        'GET /repos/{owner}/{repo}/actions/runs',
        'GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts',
        'GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs',
        'GET /repos/{owner}/{repo}/actions/secrets',
        'GET /repos/{owner}/{repo}/actions/workflows',
        'GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs',
        'GET /repos/{owner}/{repo}/assignees',
        'GET /repos/{owner}/{repo}/branches',
        'GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations',
        'GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs',
        'GET /repos/{owner}/{repo}/code-scanning/alerts',
        'GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances',
        'GET /repos/{owner}/{repo}/code-scanning/analyses',
        'GET /repos/{owner}/{repo}/collaborators',
        'GET /repos/{owner}/{repo}/comments',
        'GET /repos/{owner}/{repo}/comments/{comment_id}/reactions',
        'GET /repos/{owner}/{repo}/commits',
        'GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head',
        'GET /repos/{owner}/{repo}/commits/{commit_sha}/comments',
        'GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls',
        'GET /repos/{owner}/{repo}/commits/{ref}/check-runs',
        'GET /repos/{owner}/{repo}/commits/{ref}/check-suites',
        'GET /repos/{owner}/{repo}/commits/{ref}/statuses',
        'GET /repos/{owner}/{repo}/contributors',
        'GET /repos/{owner}/{repo}/deployments',
        'GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses',
        'GET /repos/{owner}/{repo}/events',
        'GET /repos/{owner}/{repo}/forks',
        'GET /repos/{owner}/{repo}/git/matching-refs/{ref}',
        'GET /repos/{owner}/{repo}/hooks',
        'GET /repos/{owner}/{repo}/invitations',
        'GET /repos/{owner}/{repo}/issues',
        'GET /repos/{owner}/{repo}/issues/comments',
        'GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions',
        'GET /repos/{owner}/{repo}/issues/events',
        'GET /repos/{owner}/{repo}/issues/{issue_number}/comments',
        'GET /repos/{owner}/{repo}/issues/{issue_number}/events',
        'GET /repos/{owner}/{repo}/issues/{issue_number}/labels',
        'GET /repos/{owner}/{repo}/issues/{issue_number}/reactions',
        'GET /repos/{owner}/{repo}/issues/{issue_number}/timeline',
        'GET /repos/{owner}/{repo}/keys',
        'GET /repos/{owner}/{repo}/labels',
        'GET /repos/{owner}/{repo}/milestones',
        'GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels',
        'GET /repos/{owner}/{repo}/notifications',
        'GET /repos/{owner}/{repo}/pages/builds',
        'GET /repos/{owner}/{repo}/projects',
        'GET /repos/{owner}/{repo}/pulls',
        'GET /repos/{owner}/{repo}/pulls/comments',
        'GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions',
        'GET /repos/{owner}/{repo}/pulls/{pull_number}/comments',
        'GET /repos/{owner}/{repo}/pulls/{pull_number}/commits',
        'GET /repos/{owner}/{repo}/pulls/{pull_number}/files',
        'GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers',
        'GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews',
        'GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments',
        'GET /repos/{owner}/{repo}/releases',
        'GET /repos/{owner}/{repo}/releases/{release_id}/assets',
        'GET /repos/{owner}/{repo}/secret-scanning/alerts',
        'GET /repos/{owner}/{repo}/stargazers',
        'GET /repos/{owner}/{repo}/subscribers',
        'GET /repos/{owner}/{repo}/tags',
        'GET /repos/{owner}/{repo}/teams',
        'GET /repositories',
        'GET /repositories/{repository_id}/environments/{environment_name}/secrets',
        'GET /scim/v2/enterprises/{enterprise}/Groups',
        'GET /scim/v2/enterprises/{enterprise}/Users',
        'GET /scim/v2/organizations/{org}/Users',
        'GET /search/code',
        'GET /search/commits',
        'GET /search/issues',
        'GET /search/labels',
        'GET /search/repositories',
        'GET /search/topics',
        'GET /search/users',
        'GET /teams/{team_id}/discussions',
        'GET /teams/{team_id}/discussions/{discussion_number}/comments',
        'GET /teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}/reactions',
        'GET /teams/{team_id}/discussions/{discussion_number}/reactions',
        'GET /teams/{team_id}/invitations',
        'GET /teams/{team_id}/members',
        'GET /teams/{team_id}/projects',
        'GET /teams/{team_id}/repos',
        'GET /teams/{team_id}/team-sync/group-mappings',
        'GET /teams/{team_id}/teams',
        'GET /user/blocks',
        'GET /user/emails',
        'GET /user/followers',
        'GET /user/following',
        'GET /user/gpg_keys',
        'GET /user/installations',
        'GET /user/installations/{installation_id}/repositories',
        'GET /user/issues',
        'GET /user/keys',
        'GET /user/marketplace_purchases',
        'GET /user/marketplace_purchases/stubbed',
        'GET /user/memberships/orgs',
        'GET /user/migrations',
        'GET /user/migrations/{migration_id}/repositories',
        'GET /user/orgs',
        'GET /user/public_emails',
        'GET /user/repos',
        'GET /user/repository_invitations',
        'GET /user/starred',
        'GET /user/subscriptions',
        'GET /user/teams',
        'GET /users',
        'GET /users/{username}/events',
        'GET /users/{username}/events/orgs/{org}',
        'GET /users/{username}/events/public',
        'GET /users/{username}/followers',
        'GET /users/{username}/following',
        'GET /users/{username}/gists',
        'GET /users/{username}/gpg_keys',
        'GET /users/{username}/keys',
        'GET /users/{username}/orgs',
        'GET /users/{username}/projects',
        'GET /users/{username}/received_events',
        'GET /users/{username}/received_events/public',
        'GET /users/{username}/repos',
        'GET /users/{username}/starred',
        'GET /users/{username}/subscriptions'
      ]

      function isPaginatingEndpoint(arg) {
        if (typeof arg === 'string') {
          return paginatingEndpoints.includes(arg)
        } else {
          return false
        }
      }

      /**
       * @param octokit Octokit instance
       * @param options Options passed to Octokit constructor
       */

      function paginateRest(octokit) {
        return {
          paginate: Object.assign(paginate.bind(null, octokit), {
            iterator: iterator.bind(null, octokit)
          })
        }
      }
      paginateRest.VERSION = VERSION

      exports.composePaginateRest = composePaginateRest
      exports.isPaginatingEndpoint = isPaginatingEndpoint
      exports.paginateRest = paginateRest
      exports.paginatingEndpoints = paginatingEndpoints
      //# sourceMappingURL=index.js.map

      /***/
    },

    /***/ 7041: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      var register = __nccwpck_require__(4280)
      var addHook = __nccwpck_require__(3779)
      var removeHook = __nccwpck_require__(5133)

      // bind with array of arguments: https://stackoverflow.com/a/21792913
      var bind = Function.bind
      var bindable = bind.bind(bind)

      function bindApi(hook, state, name) {
        var removeHookRef = bindable(removeHook, null).apply(
          null,
          name ? [state, name] : [state]
        )
        hook.api = { remove: removeHookRef }
        hook.remove = removeHookRef
        ;['before', 'error', 'after', 'wrap'].forEach(function (kind) {
          var args = name ? [state, kind, name] : [state, kind]
          hook[kind] = hook.api[kind] = bindable(addHook, null).apply(
            null,
            args
          )
        })
      }

      function HookSingular() {
        var singularHookName = 'h'
        var singularHookState = {
          registry: {}
        }
        var singularHook = register.bind(
          null,
          singularHookState,
          singularHookName
        )
        bindApi(singularHook, singularHookState, singularHookName)
        return singularHook
      }

      function HookCollection() {
        var state = {
          registry: {}
        }

        var hook = register.bind(null, state)
        bindApi(hook, state)

        return hook
      }

      var collectionHookDeprecationMessageDisplayed = false
      function Hook() {
        if (!collectionHookDeprecationMessageDisplayed) {
          console.warn(
            '[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4'
          )
          collectionHookDeprecationMessageDisplayed = true
        }
        return HookCollection()
      }

      Hook.Singular = HookSingular.bind()
      Hook.Collection = HookCollection.bind()

      module.exports = Hook
      // expose constructors as a named property for TypeScript
      module.exports.Hook = Hook
      module.exports.Singular = Hook.Singular
      module.exports.Collection = Hook.Collection

      /***/
    },

    /***/ 3779: /***/ (module) => {
      module.exports = addHook

      function addHook(state, kind, name, hook) {
        var orig = hook
        if (!state.registry[name]) {
          state.registry[name] = []
        }

        if (kind === 'before') {
          hook = function (method, options) {
            return Promise.resolve()
              .then(orig.bind(null, options))
              .then(method.bind(null, options))
          }
        }

        if (kind === 'after') {
          hook = function (method, options) {
            var result
            return Promise.resolve()
              .then(method.bind(null, options))
              .then(function (result_) {
                result = result_
                return orig(result, options)
              })
              .then(function () {
                return result
              })
          }
        }

        if (kind === 'error') {
          hook = function (method, options) {
            return Promise.resolve()
              .then(method.bind(null, options))
              .catch(function (error) {
                return orig(error, options)
              })
          }
        }

        state.registry[name].push({
          hook: hook,
          orig: orig
        })
      }

      /***/
    },

    /***/ 4280: /***/ (module) => {
      module.exports = register

      function register(state, name, method, options) {
        if (typeof method !== 'function') {
          throw new Error('method for before hook must be a function')
        }

        if (!options) {
          options = {}
        }

        if (Array.isArray(name)) {
          return name.reverse().reduce(function (callback, name) {
            return register.bind(null, state, name, callback, options)
          }, method)()
        }

        return Promise.resolve().then(function () {
          if (!state.registry[name]) {
            return method(options)
          }

          return state.registry[name].reduce(function (method, registered) {
            return registered.hook.bind(null, method, options)
          }, method)()
        })
      }

      /***/
    },

    /***/ 5133: /***/ (module) => {
      module.exports = removeHook

      function removeHook(state, name, method) {
        if (!state.registry[name]) {
          return
        }

        var index = state.registry[name]
          .map(function (registered) {
            return registered.orig
          })
          .indexOf(method)

        if (index === -1) {
          return
        }

        state.registry[name].splice(index, 1)
      }

      /***/
    },

    /***/ 9925: /***/ (
      __unused_webpack_module,
      exports,
      __nccwpck_require__
    ) => {
      'use strict'

      Object.defineProperty(exports, '__esModule', { value: true })
      const http = __nccwpck_require__(8605)
      const https = __nccwpck_require__(7211)
      const pm = __nccwpck_require__(6443)
      let tunnel
      var HttpCodes
      ;(function (HttpCodes) {
        HttpCodes[(HttpCodes['OK'] = 200)] = 'OK'
        HttpCodes[(HttpCodes['MultipleChoices'] = 300)] = 'MultipleChoices'
        HttpCodes[(HttpCodes['MovedPermanently'] = 301)] = 'MovedPermanently'
        HttpCodes[(HttpCodes['ResourceMoved'] = 302)] = 'ResourceMoved'
        HttpCodes[(HttpCodes['SeeOther'] = 303)] = 'SeeOther'
        HttpCodes[(HttpCodes['NotModified'] = 304)] = 'NotModified'
        HttpCodes[(HttpCodes['UseProxy'] = 305)] = 'UseProxy'
        HttpCodes[(HttpCodes['SwitchProxy'] = 306)] = 'SwitchProxy'
        HttpCodes[(HttpCodes['TemporaryRedirect'] = 307)] = 'TemporaryRedirect'
        HttpCodes[(HttpCodes['PermanentRedirect'] = 308)] = 'PermanentRedirect'
        HttpCodes[(HttpCodes['BadRequest'] = 400)] = 'BadRequest'
        HttpCodes[(HttpCodes['Unauthorized'] = 401)] = 'Unauthorized'
        HttpCodes[(HttpCodes['PaymentRequired'] = 402)] = 'PaymentRequired'
        HttpCodes[(HttpCodes['Forbidden'] = 403)] = 'Forbidden'
        HttpCodes[(HttpCodes['NotFound'] = 404)] = 'NotFound'
        HttpCodes[(HttpCodes['MethodNotAllowed'] = 405)] = 'MethodNotAllowed'
        HttpCodes[(HttpCodes['NotAcceptable'] = 406)] = 'NotAcceptable'
        HttpCodes[(HttpCodes['ProxyAuthenticationRequired'] = 407)] =
          'ProxyAuthenticationRequired'
        HttpCodes[(HttpCodes['RequestTimeout'] = 408)] = 'RequestTimeout'
        HttpCodes[(HttpCodes['Conflict'] = 409)] = 'Conflict'
        HttpCodes[(HttpCodes['Gone'] = 410)] = 'Gone'
        HttpCodes[(HttpCodes['TooManyRequests'] = 429)] = 'TooManyRequests'
        HttpCodes[(HttpCodes['InternalServerError'] = 500)] =
          'InternalServerError'
        HttpCodes[(HttpCodes['NotImplemented'] = 501)] = 'NotImplemented'
        HttpCodes[(HttpCodes['BadGateway'] = 502)] = 'BadGateway'
        HttpCodes[(HttpCodes['ServiceUnavailable'] = 503)] =
          'ServiceUnavailable'
        HttpCodes[(HttpCodes['GatewayTimeout'] = 504)] = 'GatewayTimeout'
      })((HttpCodes = exports.HttpCodes || (exports.HttpCodes = {})))
      var Headers
      ;(function (Headers) {
        Headers['Accept'] = 'accept'
        Headers['ContentType'] = 'content-type'
      })((Headers = exports.Headers || (exports.Headers = {})))
      var MediaTypes
      ;(function (MediaTypes) {
        MediaTypes['ApplicationJson'] = 'application/json'
      })((MediaTypes = exports.MediaTypes || (exports.MediaTypes = {})))
      /**
       * Returns the proxy URL, depending upon the supplied url and proxy environment variables.
       * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
       */
      function getProxyUrl(serverUrl) {
        let proxyUrl = pm.getProxyUrl(new URL(serverUrl))
        return proxyUrl ? proxyUrl.href : ''
      }
      exports.getProxyUrl = getProxyUrl
      const HttpRedirectCodes = [
        HttpCodes.MovedPermanently,
        HttpCodes.ResourceMoved,
        HttpCodes.SeeOther,
        HttpCodes.TemporaryRedirect,
        HttpCodes.PermanentRedirect
      ]
      const HttpResponseRetryCodes = [
        HttpCodes.BadGateway,
        HttpCodes.ServiceUnavailable,
        HttpCodes.GatewayTimeout
      ]
      const RetryableHttpVerbs = ['OPTIONS', 'GET', 'DELETE', 'HEAD']
      const ExponentialBackoffCeiling = 10
      const ExponentialBackoffTimeSlice = 5
      class HttpClientError extends Error {
        constructor(message, statusCode) {
          super(message)
          this.name = 'HttpClientError'
          this.statusCode = statusCode
          Object.setPrototypeOf(this, HttpClientError.prototype)
        }
      }
      exports.HttpClientError = HttpClientError
      class HttpClientResponse {
        constructor(message) {
          this.message = message
        }
        readBody() {
          return new Promise(async (resolve, reject) => {
            let output = Buffer.alloc(0)
            this.message.on('data', (chunk) => {
              output = Buffer.concat([output, chunk])
            })
            this.message.on('end', () => {
              resolve(output.toString())
            })
          })
        }
      }
      exports.HttpClientResponse = HttpClientResponse
      function isHttps(requestUrl) {
        let parsedUrl = new URL(requestUrl)
        return parsedUrl.protocol === 'https:'
      }
      exports.isHttps = isHttps
      class HttpClient {
        constructor(userAgent, handlers, requestOptions) {
          this._ignoreSslError = false
          this._allowRedirects = true
          this._allowRedirectDowngrade = false
          this._maxRedirects = 50
          this._allowRetries = false
          this._maxRetries = 1
          this._keepAlive = false
          this._disposed = false
          this.userAgent = userAgent
          this.handlers = handlers || []
          this.requestOptions = requestOptions
          if (requestOptions) {
            if (requestOptions.ignoreSslError != null) {
              this._ignoreSslError = requestOptions.ignoreSslError
            }
            this._socketTimeout = requestOptions.socketTimeout
            if (requestOptions.allowRedirects != null) {
              this._allowRedirects = requestOptions.allowRedirects
            }
            if (requestOptions.allowRedirectDowngrade != null) {
              this._allowRedirectDowngrade =
                requestOptions.allowRedirectDowngrade
            }
            if (requestOptions.maxRedirects != null) {
              this._maxRedirects = Math.max(requestOptions.maxRedirects, 0)
            }
            if (requestOptions.keepAlive != null) {
              this._keepAlive = requestOptions.keepAlive
            }
            if (requestOptions.allowRetries != null) {
              this._allowRetries = requestOptions.allowRetries
            }
            if (requestOptions.maxRetries != null) {
              this._maxRetries = requestOptions.maxRetries
            }
          }
        }
        options(requestUrl, additionalHeaders) {
          return this.request(
            'OPTIONS',
            requestUrl,
            null,
            additionalHeaders || {}
          )
        }
        get(requestUrl, additionalHeaders) {
          return this.request('GET', requestUrl, null, additionalHeaders || {})
        }
        del(requestUrl, additionalHeaders) {
          return this.request(
            'DELETE',
            requestUrl,
            null,
            additionalHeaders || {}
          )
        }
        post(requestUrl, data, additionalHeaders) {
          return this.request('POST', requestUrl, data, additionalHeaders || {})
        }
        patch(requestUrl, data, additionalHeaders) {
          return this.request(
            'PATCH',
            requestUrl,
            data,
            additionalHeaders || {}
          )
        }
        put(requestUrl, data, additionalHeaders) {
          return this.request('PUT', requestUrl, data, additionalHeaders || {})
        }
        head(requestUrl, additionalHeaders) {
          return this.request('HEAD', requestUrl, null, additionalHeaders || {})
        }
        sendStream(verb, requestUrl, stream, additionalHeaders) {
          return this.request(verb, requestUrl, stream, additionalHeaders)
        }
        /**
         * Gets a typed object from an endpoint
         * Be aware that not found returns a null.  Other errors (4xx, 5xx) reject the promise
         */
        async getJson(requestUrl, additionalHeaders = {}) {
          additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(
            additionalHeaders,
            Headers.Accept,
            MediaTypes.ApplicationJson
          )
          let res = await this.get(requestUrl, additionalHeaders)
          return this._processResponse(res, this.requestOptions)
        }
        async postJson(requestUrl, obj, additionalHeaders = {}) {
          let data = JSON.stringify(obj, null, 2)
          additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(
            additionalHeaders,
            Headers.Accept,
            MediaTypes.ApplicationJson
          )
          additionalHeaders[Headers.ContentType] =
            this._getExistingOrDefaultHeader(
              additionalHeaders,
              Headers.ContentType,
              MediaTypes.ApplicationJson
            )
          let res = await this.post(requestUrl, data, additionalHeaders)
          return this._processResponse(res, this.requestOptions)
        }
        async putJson(requestUrl, obj, additionalHeaders = {}) {
          let data = JSON.stringify(obj, null, 2)
          additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(
            additionalHeaders,
            Headers.Accept,
            MediaTypes.ApplicationJson
          )
          additionalHeaders[Headers.ContentType] =
            this._getExistingOrDefaultHeader(
              additionalHeaders,
              Headers.ContentType,
              MediaTypes.ApplicationJson
            )
          let res = await this.put(requestUrl, data, additionalHeaders)
          return this._processResponse(res, this.requestOptions)
        }
        async patchJson(requestUrl, obj, additionalHeaders = {}) {
          let data = JSON.stringify(obj, null, 2)
          additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(
            additionalHeaders,
            Headers.Accept,
            MediaTypes.ApplicationJson
          )
          additionalHeaders[Headers.ContentType] =
            this._getExistingOrDefaultHeader(
              additionalHeaders,
              Headers.ContentType,
              MediaTypes.ApplicationJson
            )
          let res = await this.patch(requestUrl, data, additionalHeaders)
          return this._processResponse(res, this.requestOptions)
        }
        /**
         * Makes a raw http request.
         * All other methods such as get, post, patch, and request ultimately call this.
         * Prefer get, del, post and patch
         */
        async request(verb, requestUrl, data, headers) {
          if (this._disposed) {
            throw new Error('Client has already been disposed.')
          }
          let parsedUrl = new URL(requestUrl)
          let info = this._prepareRequest(verb, parsedUrl, headers)
          // Only perform retries on reads since writes may not be idempotent.
          let maxTries =
            this._allowRetries && RetryableHttpVerbs.indexOf(verb) != -1
              ? this._maxRetries + 1
              : 1
          let numTries = 0
          let response
          while (numTries < maxTries) {
            response = await this.requestRaw(info, data)
            // Check if it's an authentication challenge
            if (
              response &&
              response.message &&
              response.message.statusCode === HttpCodes.Unauthorized
            ) {
              let authenticationHandler
              for (let i = 0; i < this.handlers.length; i++) {
                if (this.handlers[i].canHandleAuthentication(response)) {
                  authenticationHandler = this.handlers[i]
                  break
                }
              }
              if (authenticationHandler) {
                return authenticationHandler.handleAuthentication(
                  this,
                  info,
                  data
                )
              } else {
                // We have received an unauthorized response but have no handlers to handle it.
                // Let the response return to the caller.
                return response
              }
            }
            let redirectsRemaining = this._maxRedirects
            while (
              HttpRedirectCodes.indexOf(response.message.statusCode) != -1 &&
              this._allowRedirects &&
              redirectsRemaining > 0
            ) {
              const redirectUrl = response.message.headers['location']
              if (!redirectUrl) {
                // if there's no location to redirect to, we won't
                break
              }
              let parsedRedirectUrl = new URL(redirectUrl)
              if (
                parsedUrl.protocol == 'https:' &&
                parsedUrl.protocol != parsedRedirectUrl.protocol &&
                !this._allowRedirectDowngrade
              ) {
                throw new Error(
                  'Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.'
                )
              }
              // we need to finish reading the response before reassigning response
              // which will leak the open socket.
              await response.readBody()
              // strip authorization header if redirected to a different hostname
              if (parsedRedirectUrl.hostname !== parsedUrl.hostname) {
                for (let header in headers) {
                  // header names are case insensitive
                  if (header.toLowerCase() === 'authorization') {
                    delete headers[header]
                  }
                }
              }
              // let's make the request with the new redirectUrl
              info = this._prepareRequest(verb, parsedRedirectUrl, headers)
              response = await this.requestRaw(info, data)
              redirectsRemaining--
            }
            if (
              HttpResponseRetryCodes.indexOf(response.message.statusCode) == -1
            ) {
              // If not a retry code, return immediately instead of retrying
              return response
            }
            numTries += 1
            if (numTries < maxTries) {
              await response.readBody()
              await this._performExponentialBackoff(numTries)
            }
          }
          return response
        }
        /**
         * Needs to be called if keepAlive is set to true in request options.
         */
        dispose() {
          if (this._agent) {
            this._agent.destroy()
          }
          this._disposed = true
        }
        /**
         * Raw request.
         * @param info
         * @param data
         */
        requestRaw(info, data) {
          return new Promise((resolve, reject) => {
            let callbackForResult = function (err, res) {
              if (err) {
                reject(err)
              }
              resolve(res)
            }
            this.requestRawWithCallback(info, data, callbackForResult)
          })
        }
        /**
         * Raw request with callback.
         * @param info
         * @param data
         * @param onResult
         */
        requestRawWithCallback(info, data, onResult) {
          let socket
          if (typeof data === 'string') {
            info.options.headers['Content-Length'] = Buffer.byteLength(
              data,
              'utf8'
            )
          }
          let callbackCalled = false
          let handleResult = (err, res) => {
            if (!callbackCalled) {
              callbackCalled = true
              onResult(err, res)
            }
          }
          let req = info.httpModule.request(info.options, (msg) => {
            let res = new HttpClientResponse(msg)
            handleResult(null, res)
          })
          req.on('socket', (sock) => {
            socket = sock
          })
          // If we ever get disconnected, we want the socket to timeout eventually
          req.setTimeout(this._socketTimeout || 3 * 60000, () => {
            if (socket) {
              socket.end()
            }
            handleResult(
              new Error('Request timeout: ' + info.options.path),
              null
            )
          })
          req.on('error', function (err) {
            // err has statusCode property
            // res should have headers
            handleResult(err, null)
          })
          if (data && typeof data === 'string') {
            req.write(data, 'utf8')
          }
          if (data && typeof data !== 'string') {
            data.on('close', function () {
              req.end()
            })
            data.pipe(req)
          } else {
            req.end()
          }
        }
        /**
         * Gets an http agent. This function is useful when you need an http agent that handles
         * routing through a proxy server - depending upon the url and proxy environment variables.
         * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
         */
        getAgent(serverUrl) {
          let parsedUrl = new URL(serverUrl)
          return this._getAgent(parsedUrl)
        }
        _prepareRequest(method, requestUrl, headers) {
          const info = {}
          info.parsedUrl = requestUrl
          const usingSsl = info.parsedUrl.protocol === 'https:'
          info.httpModule = usingSsl ? https : http
          const defaultPort = usingSsl ? 443 : 80
          info.options = {}
          info.options.host = info.parsedUrl.hostname
          info.options.port = info.parsedUrl.port
            ? parseInt(info.parsedUrl.port)
            : defaultPort
          info.options.path =
            (info.parsedUrl.pathname || '') + (info.parsedUrl.search || '')
          info.options.method = method
          info.options.headers = this._mergeHeaders(headers)
          if (this.userAgent != null) {
            info.options.headers['user-agent'] = this.userAgent
          }
          info.options.agent = this._getAgent(info.parsedUrl)
          // gives handlers an opportunity to participate
          if (this.handlers) {
            this.handlers.forEach((handler) => {
              handler.prepareRequest(info.options)
            })
          }
          return info
        }
        _mergeHeaders(headers) {
          const lowercaseKeys = (obj) =>
            Object.keys(obj).reduce(
              (c, k) => ((c[k.toLowerCase()] = obj[k]), c),
              {}
            )
          if (this.requestOptions && this.requestOptions.headers) {
            return Object.assign(
              {},
              lowercaseKeys(this.requestOptions.headers),
              lowercaseKeys(headers)
            )
          }
          return lowercaseKeys(headers || {})
        }
        _getExistingOrDefaultHeader(additionalHeaders, header, _default) {
          const lowercaseKeys = (obj) =>
            Object.keys(obj).reduce(
              (c, k) => ((c[k.toLowerCase()] = obj[k]), c),
              {}
            )
          let clientHeader
          if (this.requestOptions && this.requestOptions.headers) {
            clientHeader = lowercaseKeys(this.requestOptions.headers)[header]
          }
          return additionalHeaders[header] || clientHeader || _default
        }
        _getAgent(parsedUrl) {
          let agent
          let proxyUrl = pm.getProxyUrl(parsedUrl)
          let useProxy = proxyUrl && proxyUrl.hostname
          if (this._keepAlive && useProxy) {
            agent = this._proxyAgent
          }
          if (this._keepAlive && !useProxy) {
            agent = this._agent
          }
          // if agent is already assigned use that agent.
          if (!!agent) {
            return agent
          }
          const usingSsl = parsedUrl.protocol === 'https:'
          let maxSockets = 100
          if (!!this.requestOptions) {
            maxSockets =
              this.requestOptions.maxSockets || http.globalAgent.maxSockets
          }
          if (useProxy) {
            // If using proxy, need tunnel
            if (!tunnel) {
              tunnel = __nccwpck_require__(4294)
            }
            const agentOptions = {
              maxSockets: maxSockets,
              keepAlive: this._keepAlive,
              proxy: {
                ...((proxyUrl.username || proxyUrl.password) && {
                  proxyAuth: `${proxyUrl.username}:${proxyUrl.password}`
                }),
                host: proxyUrl.hostname,
                port: proxyUrl.port
              }
            }
            let tunnelAgent
            const overHttps = proxyUrl.protocol === 'https:'
            if (usingSsl) {
              tunnelAgent = overHttps
                ? tunnel.httpsOverHttps
                : tunnel.httpsOverHttp
            } else {
              tunnelAgent = overHttps
                ? tunnel.httpOverHttps
                : tunnel.httpOverHttp
            }
            agent = tunnelAgent(agentOptions)
            this._proxyAgent = agent
          }
          // if reusing agent across request and tunneling agent isn't assigned create a new agent
          if (this._keepAlive && !agent) {
            const options = {
              keepAlive: this._keepAlive,
              maxSockets: maxSockets
            }
            agent = usingSsl
              ? new https.Agent(options)
              : new http.Agent(options)
            this._agent = agent
          }
          // if not using private agent and tunnel agent isn't setup then use global agent
          if (!agent) {
            agent = usingSsl ? https.globalAgent : http.globalAgent
          }
          if (usingSsl && this._ignoreSslError) {
            // we don't want to set NODE_TLS_REJECT_UNAUTHORIZED=0 since that will affect request for entire process
            // http.RequestOptions doesn't expose a way to modify RequestOptions.agent.options
            // we have to cast it to any and change it directly
            agent.options = Object.assign(agent.options || {}, {
              rejectUnauthorized: false
            })
          }
          return agent
        }
        _performExponentialBackoff(retryNumber) {
          retryNumber = Math.min(ExponentialBackoffCeiling, retryNumber)
          const ms = ExponentialBackoffTimeSlice * Math.pow(2, retryNumber)
          return new Promise((resolve) => setTimeout(() => resolve(), ms))
        }
        static dateTimeDeserializer(key, value) {
          if (typeof value === 'string') {
            let a = new Date(value)
            if (!isNaN(a.valueOf())) {
              return a
            }
          }
          return value
        }
        async _processResponse(res, options) {
          return new Promise(async (resolve, reject) => {
            const statusCode = res.message.statusCode
            const response = {
              statusCode: statusCode,
              result: null,
              headers: {}
            }
            // not found leads to null obj returned
            if (statusCode == HttpCodes.NotFound) {
              resolve(response)
            }
            let obj
            let contents
            // get the result from the body
            try {
              contents = await res.readBody()
              if (contents && contents.length > 0) {
                if (options && options.deserializeDates) {
                  obj = JSON.parse(contents, HttpClient.dateTimeDeserializer)
                } else {
                  obj = JSON.parse(contents)
                }
                response.result = obj
              }
              response.headers = res.message.headers
            } catch (err) {
              // Invalid resource (contents not json);  leaving result obj null
            }
            // note that 3xx redirects are handled by the http layer.
            if (statusCode > 299) {
              let msg
              // if exception/error in body, attempt to get better error
              if (obj && obj.message) {
                msg = obj.message
              } else if (contents && contents.length > 0) {
                // it may be the case that the exception is in the body message as string
                msg = contents
              } else {
                msg = 'Failed request: (' + statusCode + ')'
              }
              let err = new HttpClientError(msg, statusCode)
              err.result = response.result
              reject(err)
            } else {
              resolve(response)
            }
          })
        }
      }
      exports.HttpClient = HttpClient

      /***/
    },

    /***/ 6443: /***/ (__unused_webpack_module, exports) => {
      'use strict'

      Object.defineProperty(exports, '__esModule', { value: true })
      function getProxyUrl(reqUrl) {
        let usingSsl = reqUrl.protocol === 'https:'
        let proxyUrl
        if (checkBypass(reqUrl)) {
          return proxyUrl
        }
        let proxyVar
        if (usingSsl) {
          proxyVar = process.env['https_proxy'] || process.env['HTTPS_PROXY']
        } else {
          proxyVar = process.env['http_proxy'] || process.env['HTTP_PROXY']
        }
        if (proxyVar) {
          proxyUrl = new URL(proxyVar)
        }
        return proxyUrl
      }
      exports.getProxyUrl = getProxyUrl
      function checkBypass(reqUrl) {
        if (!reqUrl.hostname) {
          return false
        }
        let noProxy = process.env['no_proxy'] || process.env['NO_PROXY'] || ''
        if (!noProxy) {
          return false
        }
        // Determine the request port
        let reqPort
        if (reqUrl.port) {
          reqPort = Number(reqUrl.port)
        } else if (reqUrl.protocol === 'http:') {
          reqPort = 80
        } else if (reqUrl.protocol === 'https:') {
          reqPort = 443
        }
        // Format the request hostname and hostname with port
        let upperReqHosts = [reqUrl.hostname.toUpperCase()]
        if (typeof reqPort === 'number') {
          upperReqHosts.push(`${upperReqHosts[0]}:${reqPort}`)
        }
        // Compare request host against noproxy
        for (let upperNoProxyItem of noProxy
          .split(',')
          .map((x) => x.trim().toUpperCase())
          .filter((x) => x)) {
          if (upperReqHosts.some((x) => x === upperNoProxyItem)) {
            return true
          }
        }
        return false
      }
      exports.checkBypass = checkBypass

      /***/
    },

    /***/ 334: /***/ (__unused_webpack_module, exports) => {
      'use strict'

      Object.defineProperty(exports, '__esModule', { value: true })

      async function auth(token) {
        const tokenType =
          token.split(/\./).length === 3
            ? 'app'
            : /^v\d+\./.test(token)
            ? 'installation'
            : 'oauth'
        return {
          type: 'token',
          token: token,
          tokenType
        }
      }

      /**
       * Prefix token for usage in the Authorization header
       *
       * @param token OAuth token or JSON Web Token
       */
      function withAuthorizationPrefix(token) {
        if (token.split(/\./).length === 3) {
          return `bearer ${token}`
        }

        return `token ${token}`
      }

      async function hook(token, request, route, parameters) {
        const endpoint = request.endpoint.merge(route, parameters)
        endpoint.headers.authorization = withAuthorizationPrefix(token)
        return request(endpoint)
      }

      const createTokenAuth = function createTokenAuth(token) {
        if (!token) {
          throw new Error(
            '[@octokit/auth-token] No token passed to createTokenAuth'
          )
        }

        if (typeof token !== 'string') {
          throw new Error(
            '[@octokit/auth-token] Token passed to createTokenAuth is not a string'
          )
        }

        token = token.replace(/^(token|bearer) +/i, '')
        return Object.assign(auth.bind(null, token), {
          hook: hook.bind(null, token)
        })
      }

      exports.createTokenAuth = createTokenAuth
      //# sourceMappingURL=index.js.map

      /***/
    },

    /***/ 9440: /***/ (
      __unused_webpack_module,
      exports,
      __nccwpck_require__
    ) => {
      'use strict'

      Object.defineProperty(exports, '__esModule', { value: true })

      var isPlainObject = __nccwpck_require__(3287)
      var universalUserAgent = __nccwpck_require__(5030)

      function lowercaseKeys(object) {
        if (!object) {
          return {}
        }

        return Object.keys(object).reduce((newObj, key) => {
          newObj[key.toLowerCase()] = object[key]
          return newObj
        }, {})
      }

      function mergeDeep(defaults, options) {
        const result = Object.assign({}, defaults)
        Object.keys(options).forEach((key) => {
          if (isPlainObject.isPlainObject(options[key])) {
            if (!(key in defaults))
              Object.assign(result, {
                [key]: options[key]
              })
            else result[key] = mergeDeep(defaults[key], options[key])
          } else {
            Object.assign(result, {
              [key]: options[key]
            })
          }
        })
        return result
      }

      function removeUndefinedProperties(obj) {
        for (const key in obj) {
          if (obj[key] === undefined) {
            delete obj[key]
          }
        }

        return obj
      }

      function merge(defaults, route, options) {
        if (typeof route === 'string') {
          let [method, url] = route.split(' ')
          options = Object.assign(
            url
              ? {
                  method,
                  url
                }
              : {
                  url: method
                },
            options
          )
        } else {
          options = Object.assign({}, route)
        } // lowercase header names before merging with defaults to avoid duplicates

        options.headers = lowercaseKeys(options.headers) // remove properties with undefined values before merging

        removeUndefinedProperties(options)
        removeUndefinedProperties(options.headers)
        const mergedOptions = mergeDeep(defaults || {}, options) // mediaType.previews arrays are merged, instead of overwritten

        if (defaults && defaults.mediaType.previews.length) {
          mergedOptions.mediaType.previews = defaults.mediaType.previews
            .filter(
              (preview) => !mergedOptions.mediaType.previews.includes(preview)
            )
            .concat(mergedOptions.mediaType.previews)
        }

        mergedOptions.mediaType.previews = mergedOptions.mediaType.previews.map(
          (preview) => preview.replace(/-preview/, '')
        )
        return mergedOptions
      }

      function addQueryParameters(url, parameters) {
        const separator = /\?/.test(url) ? '&' : '?'
        const names = Object.keys(parameters)

        if (names.length === 0) {
          return url
        }

        return (
          url +
          separator +
          names
            .map((name) => {
              if (name === 'q') {
                return (
                  'q=' +
                  parameters.q.split('+').map(encodeURIComponent).join('+')
                )
              }

              return `${name}=${encodeURIComponent(parameters[name])}`
            })
            .join('&')
        )
      }

      const urlVariableRegex = /\{[^}]+\}/g

      function removeNonChars(variableName) {
        return variableName.replace(/^\W+|\W+$/g, '').split(/,/)
      }

      function extractUrlVariableNames(url) {
        const matches = url.match(urlVariableRegex)

        if (!matches) {
          return []
        }

        return matches.map(removeNonChars).reduce((a, b) => a.concat(b), [])
      }

      function omit(object, keysToOmit) {
        return Object.keys(object)
          .filter((option) => !keysToOmit.includes(option))
          .reduce((obj, key) => {
            obj[key] = object[key]
            return obj
          }, {})
      }

      // Based on https://github.com/bramstein/url-template, licensed under BSD
      // TODO: create separate package.
      //
      // Copyright (c) 2012-2014, Bram Stein
      // All rights reserved.
      // Redistribution and use in source and binary forms, with or without
      // modification, are permitted provided that the following conditions
      // are met:
      //  1. Redistributions of source code must retain the above copyright
      //     notice, this list of conditions and the following disclaimer.
      //  2. Redistributions in binary form must reproduce the above copyright
      //     notice, this list of conditions and the following disclaimer in the
      //     documentation and/or other materials provided with the distribution.
      //  3. The name of the author may not be used to endorse or promote products
      //     derived from this software without specific prior written permission.
      // THIS SOFTWARE IS PROVIDED BY THE AUTHOR "AS IS" AND ANY EXPRESS OR IMPLIED
      // WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
      // MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO
      // EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
      // INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
      // BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
      // DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
      // OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
      // NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
      // EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

      /* istanbul ignore file */
      function encodeReserved(str) {
        return str
          .split(/(%[0-9A-Fa-f]{2})/g)
          .map(function (part) {
            if (!/%[0-9A-Fa-f]/.test(part)) {
              part = encodeURI(part).replace(/%5B/g, '[').replace(/%5D/g, ']')
            }

            return part
          })
          .join('')
      }

      function encodeUnreserved(str) {
        return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
          return '%' + c.charCodeAt(0).toString(16).toUpperCase()
        })
      }

      function encodeValue(operator, value, key) {
        value =
          operator === '+' || operator === '#'
            ? encodeReserved(value)
            : encodeUnreserved(value)

        if (key) {
          return encodeUnreserved(key) + '=' + value
        } else {
          return value
        }
      }

      function isDefined(value) {
        return value !== undefined && value !== null
      }

      function isKeyOperator(operator) {
        return operator === ';' || operator === '&' || operator === '?'
      }

      function getValues(context, operator, key, modifier) {
        var value = context[key],
          result = []

        if (isDefined(value) && value !== '') {
          if (
            typeof value === 'string' ||
            typeof value === 'number' ||
            typeof value === 'boolean'
          ) {
            value = value.toString()

            if (modifier && modifier !== '*') {
              value = value.substring(0, parseInt(modifier, 10))
            }

            result.push(
              encodeValue(operator, value, isKeyOperator(operator) ? key : '')
            )
          } else {
            if (modifier === '*') {
              if (Array.isArray(value)) {
                value.filter(isDefined).forEach(function (value) {
                  result.push(
                    encodeValue(
                      operator,
                      value,
                      isKeyOperator(operator) ? key : ''
                    )
                  )
                })
              } else {
                Object.keys(value).forEach(function (k) {
                  if (isDefined(value[k])) {
                    result.push(encodeValue(operator, value[k], k))
                  }
                })
              }
            } else {
              const tmp = []

              if (Array.isArray(value)) {
                value.filter(isDefined).forEach(function (value) {
                  tmp.push(encodeValue(operator, value))
                })
              } else {
                Object.keys(value).forEach(function (k) {
                  if (isDefined(value[k])) {
                    tmp.push(encodeUnreserved(k))
                    tmp.push(encodeValue(operator, value[k].toString()))
                  }
                })
              }

              if (isKeyOperator(operator)) {
                result.push(encodeUnreserved(key) + '=' + tmp.join(','))
              } else if (tmp.length !== 0) {
                result.push(tmp.join(','))
              }
            }
          }
        } else {
          if (operator === ';') {
            if (isDefined(value)) {
              result.push(encodeUnreserved(key))
            }
          } else if (value === '' && (operator === '&' || operator === '?')) {
            result.push(encodeUnreserved(key) + '=')
          } else if (value === '') {
            result.push('')
          }
        }

        return result
      }

      function parseUrl(template) {
        return {
          expand: expand.bind(null, template)
        }
      }

      function expand(template, context) {
        var operators = ['+', '#', '.', '/', ';', '?', '&']
        return template.replace(
          /\{([^\{\}]+)\}|([^\{\}]+)/g,
          function (_, expression, literal) {
            if (expression) {
              let operator = ''
              const values = []

              if (operators.indexOf(expression.charAt(0)) !== -1) {
                operator = expression.charAt(0)
                expression = expression.substr(1)
              }

              expression.split(/,/g).forEach(function (variable) {
                var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable)
                values.push(
                  getValues(context, operator, tmp[1], tmp[2] || tmp[3])
                )
              })

              if (operator && operator !== '+') {
                var separator = ','

                if (operator === '?') {
                  separator = '&'
                } else if (operator !== '#') {
                  separator = operator
                }

                return (
                  (values.length !== 0 ? operator : '') + values.join(separator)
                )
              } else {
                return values.join(',')
              }
            } else {
              return encodeReserved(literal)
            }
          }
        )
      }

      function parse(options) {
        // https://fetch.spec.whatwg.org/#methods
        let method = options.method.toUpperCase() // replace :varname with {varname} to make it RFC 6570 compatible

        let url = (options.url || '/').replace(/:([a-z]\w+)/g, '{$1}')
        let headers = Object.assign({}, options.headers)
        let body
        let parameters = omit(options, [
          'method',
          'baseUrl',
          'url',
          'headers',
          'request',
          'mediaType'
        ]) // extract variable names from URL to calculate remaining variables later

        const urlVariableNames = extractUrlVariableNames(url)
        url = parseUrl(url).expand(parameters)

        if (!/^http/.test(url)) {
          url = options.baseUrl + url
        }

        const omittedParameters = Object.keys(options)
          .filter((option) => urlVariableNames.includes(option))
          .concat('baseUrl')
        const remainingParameters = omit(parameters, omittedParameters)
        const isBinaryRequest = /application\/octet-stream/i.test(
          headers.accept
        )

        if (!isBinaryRequest) {
          if (options.mediaType.format) {
            // e.g. application/vnd.github.v3+json => application/vnd.github.v3.raw
            headers.accept = headers.accept
              .split(/,/)
              .map((preview) =>
                preview.replace(
                  /application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/,
                  `application/vnd$1$2.${options.mediaType.format}`
                )
              )
              .join(',')
          }

          if (options.mediaType.previews.length) {
            const previewsFromAcceptHeader =
              headers.accept.match(/[\w-]+(?=-preview)/g) || []
            headers.accept = previewsFromAcceptHeader
              .concat(options.mediaType.previews)
              .map((preview) => {
                const format = options.mediaType.format
                  ? `.${options.mediaType.format}`
                  : '+json'
                return `application/vnd.github.${preview}-preview${format}`
              })
              .join(',')
          }
        } // for GET/HEAD requests, set URL query parameters from remaining parameters
        // for PATCH/POST/PUT/DELETE requests, set request body from remaining parameters

        if (['GET', 'HEAD'].includes(method)) {
          url = addQueryParameters(url, remainingParameters)
        } else {
          if ('data' in remainingParameters) {
            body = remainingParameters.data
          } else {
            if (Object.keys(remainingParameters).length) {
              body = remainingParameters
            } else {
              headers['content-length'] = 0
            }
          }
        } // default content-type for JSON if body is set

        if (!headers['content-type'] && typeof body !== 'undefined') {
          headers['content-type'] = 'application/json; charset=utf-8'
        } // GitHub expects 'content-length: 0' header for PUT/PATCH requests without body.
        // fetch does not allow to set `content-length` header, but we can set body to an empty string

        if (['PATCH', 'PUT'].includes(method) && typeof body === 'undefined') {
          body = ''
        } // Only return body/request keys if present

        return Object.assign(
          {
            method,
            url,
            headers
          },
          typeof body !== 'undefined'
            ? {
                body
              }
            : null,
          options.request
            ? {
                request: options.request
              }
            : null
        )
      }

      function endpointWithDefaults(defaults, route, options) {
        return parse(merge(defaults, route, options))
      }

      function withDefaults(oldDefaults, newDefaults) {
        const DEFAULTS = merge(oldDefaults, newDefaults)
        const endpoint = endpointWithDefaults.bind(null, DEFAULTS)
        return Object.assign(endpoint, {
          DEFAULTS,
          defaults: withDefaults.bind(null, DEFAULTS),
          merge: merge.bind(null, DEFAULTS),
          parse
        })
      }

      const VERSION = '6.0.11'

      const userAgent = `octokit-endpoint.js/${VERSION} ${universalUserAgent.getUserAgent()}` // DEFAULTS has all properties set that EndpointOptions has, except url.
      // So we use RequestParameters and add method as additional required property.

      const DEFAULTS = {
        method: 'GET',
        baseUrl: 'https://api.github.com',
        headers: {
          accept: 'application/vnd.github.v3+json',
          'user-agent': userAgent
        },
        mediaType: {
          format: '',
          previews: []
        }
      }

      const endpoint = withDefaults(null, DEFAULTS)

      exports.endpoint = endpoint
      //# sourceMappingURL=index.js.map

      /***/
    },

    /***/ 8467: /***/ (
      __unused_webpack_module,
      exports,
      __nccwpck_require__
    ) => {
      'use strict'

      Object.defineProperty(exports, '__esModule', { value: true })

      var request = __nccwpck_require__(6234)
      var universalUserAgent = __nccwpck_require__(5030)

      const VERSION = '4.6.0'

      class GraphqlError extends Error {
        constructor(request, response) {
          const message = response.data.errors[0].message
          super(message)
          Object.assign(this, response.data)
          Object.assign(this, {
            headers: response.headers
          })
          this.name = 'GraphqlError'
          this.request = request // Maintains proper stack trace (only available on V8)

          /* istanbul ignore next */

          if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor)
          }
        }
      }

      const NON_VARIABLE_OPTIONS = [
        'method',
        'baseUrl',
        'url',
        'headers',
        'request',
        'query',
        'mediaType'
      ]
      const GHES_V3_SUFFIX_REGEX = /\/api\/v3\/?$/
      function graphql(request, query, options) {
        if (typeof query === 'string' && options && 'query' in options) {
          return Promise.reject(
            new Error(
              `[@octokit/graphql] "query" cannot be used as variable name`
            )
          )
        }

        const parsedOptions =
          typeof query === 'string'
            ? Object.assign(
                {
                  query
                },
                options
              )
            : query
        const requestOptions = Object.keys(parsedOptions).reduce(
          (result, key) => {
            if (NON_VARIABLE_OPTIONS.includes(key)) {
              result[key] = parsedOptions[key]
              return result
            }

            if (!result.variables) {
              result.variables = {}
            }

            result.variables[key] = parsedOptions[key]
            return result
          },
          {}
        ) // workaround for GitHub Enterprise baseUrl set with /api/v3 suffix
        // https://github.com/octokit/auth-app.js/issues/111#issuecomment-657610451

        const baseUrl =
          parsedOptions.baseUrl || request.endpoint.DEFAULTS.baseUrl

        if (GHES_V3_SUFFIX_REGEX.test(baseUrl)) {
          requestOptions.url = baseUrl.replace(
            GHES_V3_SUFFIX_REGEX,
            '/api/graphql'
          )
        }

        return request(requestOptions).then((response) => {
          if (response.data.errors) {
            const headers = {}

            for (const key of Object.keys(response.headers)) {
              headers[key] = response.headers[key]
            }

            throw new GraphqlError(requestOptions, {
              headers,
              data: response.data
            })
          }

          return response.data.data
        })
      }

      function withDefaults(request$1, newDefaults) {
        const newRequest = request$1.defaults(newDefaults)

        const newApi = (query, options) => {
          return graphql(newRequest, query, options)
        }

        return Object.assign(newApi, {
          defaults: withDefaults.bind(null, newRequest),
          endpoint: request.request.endpoint
        })
      }

      const graphql$1 = withDefaults(request.request, {
        headers: {
          'user-agent': `octokit-graphql.js/${VERSION} ${universalUserAgent.getUserAgent()}`
        },
        method: 'POST',
        url: '/graphql'
      })
      function withCustomRequest(customRequest) {
        return withDefaults(customRequest, {
          method: 'POST',
          url: '/graphql'
        })
      }

      exports.graphql = graphql$1
      exports.withCustomRequest = withCustomRequest
      //# sourceMappingURL=index.js.map

      /***/
    },

    /***/ 3044: /***/ (__unused_webpack_module, exports) => {
      'use strict'

      Object.defineProperty(exports, '__esModule', { value: true })

      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object)

        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object)

          if (enumerableOnly) {
            symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable
            })
          }

          keys.push.apply(keys, symbols)
        }

        return keys
      }

      function _objectSpread2(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {}

          if (i % 2) {
            ownKeys(Object(source), true).forEach(function (key) {
              _defineProperty(target, key, source[key])
            })
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(
              target,
              Object.getOwnPropertyDescriptors(source)
            )
          } else {
            ownKeys(Object(source)).forEach(function (key) {
              Object.defineProperty(
                target,
                key,
                Object.getOwnPropertyDescriptor(source, key)
              )
            })
          }
        }

        return target
      }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          })
        } else {
          obj[key] = value
        }

        return obj
      }

      const Endpoints = {
        actions: {
          addSelectedRepoToOrgSecret: [
            'PUT /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}'
          ],
          approveWorkflowRun: [
            'POST /repos/{owner}/{repo}/actions/runs/{run_id}/approve'
          ],
          cancelWorkflowRun: [
            'POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel'
          ],
          createOrUpdateEnvironmentSecret: [
            'PUT /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}'
          ],
          createOrUpdateOrgSecret: [
            'PUT /orgs/{org}/actions/secrets/{secret_name}'
          ],
          createOrUpdateRepoSecret: [
            'PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}'
          ],
          createRegistrationTokenForOrg: [
            'POST /orgs/{org}/actions/runners/registration-token'
          ],
          createRegistrationTokenForRepo: [
            'POST /repos/{owner}/{repo}/actions/runners/registration-token'
          ],
          createRemoveTokenForOrg: [
            'POST /orgs/{org}/actions/runners/remove-token'
          ],
          createRemoveTokenForRepo: [
            'POST /repos/{owner}/{repo}/actions/runners/remove-token'
          ],
          createWorkflowDispatch: [
            'POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches'
          ],
          deleteArtifact: [
            'DELETE /repos/{owner}/{repo}/actions/artifacts/{artifact_id}'
          ],
          deleteEnvironmentSecret: [
            'DELETE /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}'
          ],
          deleteOrgSecret: ['DELETE /orgs/{org}/actions/secrets/{secret_name}'],
          deleteRepoSecret: [
            'DELETE /repos/{owner}/{repo}/actions/secrets/{secret_name}'
          ],
          deleteSelfHostedRunnerFromOrg: [
            'DELETE /orgs/{org}/actions/runners/{runner_id}'
          ],
          deleteSelfHostedRunnerFromRepo: [
            'DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}'
          ],
          deleteWorkflowRun: [
            'DELETE /repos/{owner}/{repo}/actions/runs/{run_id}'
          ],
          deleteWorkflowRunLogs: [
            'DELETE /repos/{owner}/{repo}/actions/runs/{run_id}/logs'
          ],
          disableSelectedRepositoryGithubActionsOrganization: [
            'DELETE /orgs/{org}/actions/permissions/repositories/{repository_id}'
          ],
          disableWorkflow: [
            'PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable'
          ],
          downloadArtifact: [
            'GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}'
          ],
          downloadJobLogsForWorkflowRun: [
            'GET /repos/{owner}/{repo}/actions/jobs/{job_id}/logs'
          ],
          downloadWorkflowRunLogs: [
            'GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs'
          ],
          enableSelectedRepositoryGithubActionsOrganization: [
            'PUT /orgs/{org}/actions/permissions/repositories/{repository_id}'
          ],
          enableWorkflow: [
            'PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable'
          ],
          getAllowedActionsOrganization: [
            'GET /orgs/{org}/actions/permissions/selected-actions'
          ],
          getAllowedActionsRepository: [
            'GET /repos/{owner}/{repo}/actions/permissions/selected-actions'
          ],
          getArtifact: [
            'GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}'
          ],
          getEnvironmentPublicKey: [
            'GET /repositories/{repository_id}/environments/{environment_name}/secrets/public-key'
          ],
          getEnvironmentSecret: [
            'GET /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}'
          ],
          getGithubActionsPermissionsOrganization: [
            'GET /orgs/{org}/actions/permissions'
          ],
          getGithubActionsPermissionsRepository: [
            'GET /repos/{owner}/{repo}/actions/permissions'
          ],
          getJobForWorkflowRun: [
            'GET /repos/{owner}/{repo}/actions/jobs/{job_id}'
          ],
          getOrgPublicKey: ['GET /orgs/{org}/actions/secrets/public-key'],
          getOrgSecret: ['GET /orgs/{org}/actions/secrets/{secret_name}'],
          getPendingDeploymentsForRun: [
            'GET /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments'
          ],
          getRepoPermissions: [
            'GET /repos/{owner}/{repo}/actions/permissions',
            {},
            {
              renamed: ['actions', 'getGithubActionsPermissionsRepository']
            }
          ],
          getRepoPublicKey: [
            'GET /repos/{owner}/{repo}/actions/secrets/public-key'
          ],
          getRepoSecret: [
            'GET /repos/{owner}/{repo}/actions/secrets/{secret_name}'
          ],
          getReviewsForRun: [
            'GET /repos/{owner}/{repo}/actions/runs/{run_id}/approvals'
          ],
          getSelfHostedRunnerForOrg: [
            'GET /orgs/{org}/actions/runners/{runner_id}'
          ],
          getSelfHostedRunnerForRepo: [
            'GET /repos/{owner}/{repo}/actions/runners/{runner_id}'
          ],
          getWorkflow: [
            'GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}'
          ],
          getWorkflowRun: ['GET /repos/{owner}/{repo}/actions/runs/{run_id}'],
          getWorkflowRunUsage: [
            'GET /repos/{owner}/{repo}/actions/runs/{run_id}/timing'
          ],
          getWorkflowUsage: [
            'GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing'
          ],
          listArtifactsForRepo: ['GET /repos/{owner}/{repo}/actions/artifacts'],
          listEnvironmentSecrets: [
            'GET /repositories/{repository_id}/environments/{environment_name}/secrets'
          ],
          listJobsForWorkflowRun: [
            'GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs'
          ],
          listOrgSecrets: ['GET /orgs/{org}/actions/secrets'],
          listRepoSecrets: ['GET /repos/{owner}/{repo}/actions/secrets'],
          listRepoWorkflows: ['GET /repos/{owner}/{repo}/actions/workflows'],
          listRunnerApplicationsForOrg: [
            'GET /orgs/{org}/actions/runners/downloads'
          ],
          listRunnerApplicationsForRepo: [
            'GET /repos/{owner}/{repo}/actions/runners/downloads'
          ],
          listSelectedReposForOrgSecret: [
            'GET /orgs/{org}/actions/secrets/{secret_name}/repositories'
          ],
          listSelectedRepositoriesEnabledGithubActionsOrganization: [
            'GET /orgs/{org}/actions/permissions/repositories'
          ],
          listSelfHostedRunnersForOrg: ['GET /orgs/{org}/actions/runners'],
          listSelfHostedRunnersForRepo: [
            'GET /repos/{owner}/{repo}/actions/runners'
          ],
          listWorkflowRunArtifacts: [
            'GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts'
          ],
          listWorkflowRuns: [
            'GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs'
          ],
          listWorkflowRunsForRepo: ['GET /repos/{owner}/{repo}/actions/runs'],
          reRunWorkflow: [
            'POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun'
          ],
          removeSelectedRepoFromOrgSecret: [
            'DELETE /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}'
          ],
          reviewPendingDeploymentsForRun: [
            'POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments'
          ],
          setAllowedActionsOrganization: [
            'PUT /orgs/{org}/actions/permissions/selected-actions'
          ],
          setAllowedActionsRepository: [
            'PUT /repos/{owner}/{repo}/actions/permissions/selected-actions'
          ],
          setGithubActionsPermissionsOrganization: [
            'PUT /orgs/{org}/actions/permissions'
          ],
          setGithubActionsPermissionsRepository: [
            'PUT /repos/{owner}/{repo}/actions/permissions'
          ],
          setSelectedReposForOrgSecret: [
            'PUT /orgs/{org}/actions/secrets/{secret_name}/repositories'
          ],
          setSelectedRepositoriesEnabledGithubActionsOrganization: [
            'PUT /orgs/{org}/actions/permissions/repositories'
          ]
        },
        activity: {
          checkRepoIsStarredByAuthenticatedUser: [
            'GET /user/starred/{owner}/{repo}'
          ],
          deleteRepoSubscription: ['DELETE /repos/{owner}/{repo}/subscription'],
          deleteThreadSubscription: [
            'DELETE /notifications/threads/{thread_id}/subscription'
          ],
          getFeeds: ['GET /feeds'],
          getRepoSubscription: ['GET /repos/{owner}/{repo}/subscription'],
          getThread: ['GET /notifications/threads/{thread_id}'],
          getThreadSubscriptionForAuthenticatedUser: [
            'GET /notifications/threads/{thread_id}/subscription'
          ],
          listEventsForAuthenticatedUser: ['GET /users/{username}/events'],
          listNotificationsForAuthenticatedUser: ['GET /notifications'],
          listOrgEventsForAuthenticatedUser: [
            'GET /users/{username}/events/orgs/{org}'
          ],
          listPublicEvents: ['GET /events'],
          listPublicEventsForRepoNetwork: [
            'GET /networks/{owner}/{repo}/events'
          ],
          listPublicEventsForUser: ['GET /users/{username}/events/public'],
          listPublicOrgEvents: ['GET /orgs/{org}/events'],
          listReceivedEventsForUser: ['GET /users/{username}/received_events'],
          listReceivedPublicEventsForUser: [
            'GET /users/{username}/received_events/public'
          ],
          listRepoEvents: ['GET /repos/{owner}/{repo}/events'],
          listRepoNotificationsForAuthenticatedUser: [
            'GET /repos/{owner}/{repo}/notifications'
          ],
          listReposStarredByAuthenticatedUser: ['GET /user/starred'],
          listReposStarredByUser: ['GET /users/{username}/starred'],
          listReposWatchedByUser: ['GET /users/{username}/subscriptions'],
          listStargazersForRepo: ['GET /repos/{owner}/{repo}/stargazers'],
          listWatchedReposForAuthenticatedUser: ['GET /user/subscriptions'],
          listWatchersForRepo: ['GET /repos/{owner}/{repo}/subscribers'],
          markNotificationsAsRead: ['PUT /notifications'],
          markRepoNotificationsAsRead: [
            'PUT /repos/{owner}/{repo}/notifications'
          ],
          markThreadAsRead: ['PATCH /notifications/threads/{thread_id}'],
          setRepoSubscription: ['PUT /repos/{owner}/{repo}/subscription'],
          setThreadSubscription: [
            'PUT /notifications/threads/{thread_id}/subscription'
          ],
          starRepoForAuthenticatedUser: ['PUT /user/starred/{owner}/{repo}'],
          unstarRepoForAuthenticatedUser: [
            'DELETE /user/starred/{owner}/{repo}'
          ]
        },
        apps: {
          addRepoToInstallation: [
            'PUT /user/installations/{installation_id}/repositories/{repository_id}'
          ],
          checkToken: ['POST /applications/{client_id}/token'],
          createContentAttachment: [
            'POST /content_references/{content_reference_id}/attachments',
            {
              mediaType: {
                previews: ['corsair']
              }
            }
          ],
          createContentAttachmentForRepo: [
            'POST /repos/{owner}/{repo}/content_references/{content_reference_id}/attachments',
            {
              mediaType: {
                previews: ['corsair']
              }
            }
          ],
          createFromManifest: ['POST /app-manifests/{code}/conversions'],
          createInstallationAccessToken: [
            'POST /app/installations/{installation_id}/access_tokens'
          ],
          deleteAuthorization: ['DELETE /applications/{client_id}/grant'],
          deleteInstallation: ['DELETE /app/installations/{installation_id}'],
          deleteToken: ['DELETE /applications/{client_id}/token'],
          getAuthenticated: ['GET /app'],
          getBySlug: ['GET /apps/{app_slug}'],
          getInstallation: ['GET /app/installations/{installation_id}'],
          getOrgInstallation: ['GET /orgs/{org}/installation'],
          getRepoInstallation: ['GET /repos/{owner}/{repo}/installation'],
          getSubscriptionPlanForAccount: [
            'GET /marketplace_listing/accounts/{account_id}'
          ],
          getSubscriptionPlanForAccountStubbed: [
            'GET /marketplace_listing/stubbed/accounts/{account_id}'
          ],
          getUserInstallation: ['GET /users/{username}/installation'],
          getWebhookConfigForApp: ['GET /app/hook/config'],
          getWebhookDelivery: ['GET /app/hook/deliveries/{delivery_id}'],
          listAccountsForPlan: [
            'GET /marketplace_listing/plans/{plan_id}/accounts'
          ],
          listAccountsForPlanStubbed: [
            'GET /marketplace_listing/stubbed/plans/{plan_id}/accounts'
          ],
          listInstallationReposForAuthenticatedUser: [
            'GET /user/installations/{installation_id}/repositories'
          ],
          listInstallations: ['GET /app/installations'],
          listInstallationsForAuthenticatedUser: ['GET /user/installations'],
          listPlans: ['GET /marketplace_listing/plans'],
          listPlansStubbed: ['GET /marketplace_listing/stubbed/plans'],
          listReposAccessibleToInstallation: ['GET /installation/repositories'],
          listSubscriptionsForAuthenticatedUser: [
            'GET /user/marketplace_purchases'
          ],
          listSubscriptionsForAuthenticatedUserStubbed: [
            'GET /user/marketplace_purchases/stubbed'
          ],
          listWebhookDeliveries: ['GET /app/hook/deliveries'],
          redeliverWebhookDelivery: [
            'POST /app/hook/deliveries/{delivery_id}/attempts'
          ],
          removeRepoFromInstallation: [
            'DELETE /user/installations/{installation_id}/repositories/{repository_id}'
          ],
          resetToken: ['PATCH /applications/{client_id}/token'],
          revokeInstallationAccessToken: ['DELETE /installation/token'],
          scopeToken: ['POST /applications/{client_id}/token/scoped'],
          suspendInstallation: [
            'PUT /app/installations/{installation_id}/suspended'
          ],
          unsuspendInstallation: [
            'DELETE /app/installations/{installation_id}/suspended'
          ],
          updateWebhookConfigForApp: ['PATCH /app/hook/config']
        },
        billing: {
          getGithubActionsBillingOrg: [
            'GET /orgs/{org}/settings/billing/actions'
          ],
          getGithubActionsBillingUser: [
            'GET /users/{username}/settings/billing/actions'
          ],
          getGithubPackagesBillingOrg: [
            'GET /orgs/{org}/settings/billing/packages'
          ],
          getGithubPackagesBillingUser: [
            'GET /users/{username}/settings/billing/packages'
          ],
          getSharedStorageBillingOrg: [
            'GET /orgs/{org}/settings/billing/shared-storage'
          ],
          getSharedStorageBillingUser: [
            'GET /users/{username}/settings/billing/shared-storage'
          ]
        },
        checks: {
          create: ['POST /repos/{owner}/{repo}/check-runs'],
          createSuite: ['POST /repos/{owner}/{repo}/check-suites'],
          get: ['GET /repos/{owner}/{repo}/check-runs/{check_run_id}'],
          getSuite: ['GET /repos/{owner}/{repo}/check-suites/{check_suite_id}'],
          listAnnotations: [
            'GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations'
          ],
          listForRef: ['GET /repos/{owner}/{repo}/commits/{ref}/check-runs'],
          listForSuite: [
            'GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs'
          ],
          listSuitesForRef: [
            'GET /repos/{owner}/{repo}/commits/{ref}/check-suites'
          ],
          rerequestSuite: [
            'POST /repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest'
          ],
          setSuitesPreferences: [
            'PATCH /repos/{owner}/{repo}/check-suites/preferences'
          ],
          update: ['PATCH /repos/{owner}/{repo}/check-runs/{check_run_id}']
        },
        codeScanning: {
          deleteAnalysis: [
            'DELETE /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}{?confirm_delete}'
          ],
          getAlert: [
            'GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}',
            {},
            {
              renamedParameters: {
                alert_id: 'alert_number'
              }
            }
          ],
          getAnalysis: [
            'GET /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}'
          ],
          getSarif: [
            'GET /repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}'
          ],
          listAlertInstances: [
            'GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances'
          ],
          listAlertsForRepo: ['GET /repos/{owner}/{repo}/code-scanning/alerts'],
          listAlertsInstances: [
            'GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances',
            {},
            {
              renamed: ['codeScanning', 'listAlertInstances']
            }
          ],
          listRecentAnalyses: [
            'GET /repos/{owner}/{repo}/code-scanning/analyses'
          ],
          updateAlert: [
            'PATCH /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}'
          ],
          uploadSarif: ['POST /repos/{owner}/{repo}/code-scanning/sarifs']
        },
        codesOfConduct: {
          getAllCodesOfConduct: ['GET /codes_of_conduct'],
          getConductCode: ['GET /codes_of_conduct/{key}'],
          getForRepo: [
            'GET /repos/{owner}/{repo}/community/code_of_conduct',
            {
              mediaType: {
                previews: ['scarlet-witch']
              }
            }
          ]
        },
        emojis: {
          get: ['GET /emojis']
        },
        enterpriseAdmin: {
          disableSelectedOrganizationGithubActionsEnterprise: [
            'DELETE /enterprises/{enterprise}/actions/permissions/organizations/{org_id}'
          ],
          enableSelectedOrganizationGithubActionsEnterprise: [
            'PUT /enterprises/{enterprise}/actions/permissions/organizations/{org_id}'
          ],
          getAllowedActionsEnterprise: [
            'GET /enterprises/{enterprise}/actions/permissions/selected-actions'
          ],
          getGithubActionsPermissionsEnterprise: [
            'GET /enterprises/{enterprise}/actions/permissions'
          ],
          listSelectedOrganizationsEnabledGithubActionsEnterprise: [
            'GET /enterprises/{enterprise}/actions/permissions/organizations'
          ],
          setAllowedActionsEnterprise: [
            'PUT /enterprises/{enterprise}/actions/permissions/selected-actions'
          ],
          setGithubActionsPermissionsEnterprise: [
            'PUT /enterprises/{enterprise}/actions/permissions'
          ],
          setSelectedOrganizationsEnabledGithubActionsEnterprise: [
            'PUT /enterprises/{enterprise}/actions/permissions/organizations'
          ]
        },
        gists: {
          checkIsStarred: ['GET /gists/{gist_id}/star'],
          create: ['POST /gists'],
          createComment: ['POST /gists/{gist_id}/comments'],
          delete: ['DELETE /gists/{gist_id}'],
          deleteComment: ['DELETE /gists/{gist_id}/comments/{comment_id}'],
          fork: ['POST /gists/{gist_id}/forks'],
          get: ['GET /gists/{gist_id}'],
          getComment: ['GET /gists/{gist_id}/comments/{comment_id}'],
          getRevision: ['GET /gists/{gist_id}/{sha}'],
          list: ['GET /gists'],
          listComments: ['GET /gists/{gist_id}/comments'],
          listCommits: ['GET /gists/{gist_id}/commits'],
          listForUser: ['GET /users/{username}/gists'],
          listForks: ['GET /gists/{gist_id}/forks'],
          listPublic: ['GET /gists/public'],
          listStarred: ['GET /gists/starred'],
          star: ['PUT /gists/{gist_id}/star'],
          unstar: ['DELETE /gists/{gist_id}/star'],
          update: ['PATCH /gists/{gist_id}'],
          updateComment: ['PATCH /gists/{gist_id}/comments/{comment_id}']
        },
        git: {
          createBlob: ['POST /repos/{owner}/{repo}/git/blobs'],
          createCommit: ['POST /repos/{owner}/{repo}/git/commits'],
          createRef: ['POST /repos/{owner}/{repo}/git/refs'],
          createTag: ['POST /repos/{owner}/{repo}/git/tags'],
          createTree: ['POST /repos/{owner}/{repo}/git/trees'],
          deleteRef: ['DELETE /repos/{owner}/{repo}/git/refs/{ref}'],
          getBlob: ['GET /repos/{owner}/{repo}/git/blobs/{file_sha}'],
          getCommit: ['GET /repos/{owner}/{repo}/git/commits/{commit_sha}'],
          getRef: ['GET /repos/{owner}/{repo}/git/ref/{ref}'],
          getTag: ['GET /repos/{owner}/{repo}/git/tags/{tag_sha}'],
          getTree: ['GET /repos/{owner}/{repo}/git/trees/{tree_sha}'],
          listMatchingRefs: [
            'GET /repos/{owner}/{repo}/git/matching-refs/{ref}'
          ],
          updateRef: ['PATCH /repos/{owner}/{repo}/git/refs/{ref}']
        },
        gitignore: {
          getAllTemplates: ['GET /gitignore/templates'],
          getTemplate: ['GET /gitignore/templates/{name}']
        },
        interactions: {
          getRestrictionsForAuthenticatedUser: ['GET /user/interaction-limits'],
          getRestrictionsForOrg: ['GET /orgs/{org}/interaction-limits'],
          getRestrictionsForRepo: [
            'GET /repos/{owner}/{repo}/interaction-limits'
          ],
          getRestrictionsForYourPublicRepos: [
            'GET /user/interaction-limits',
            {},
            {
              renamed: ['interactions', 'getRestrictionsForAuthenticatedUser']
            }
          ],
          removeRestrictionsForAuthenticatedUser: [
            'DELETE /user/interaction-limits'
          ],
          removeRestrictionsForOrg: ['DELETE /orgs/{org}/interaction-limits'],
          removeRestrictionsForRepo: [
            'DELETE /repos/{owner}/{repo}/interaction-limits'
          ],
          removeRestrictionsForYourPublicRepos: [
            'DELETE /user/interaction-limits',
            {},
            {
              renamed: [
                'interactions',
                'removeRestrictionsForAuthenticatedUser'
              ]
            }
          ],
          setRestrictionsForAuthenticatedUser: ['PUT /user/interaction-limits'],
          setRestrictionsForOrg: ['PUT /orgs/{org}/interaction-limits'],
          setRestrictionsForRepo: [
            'PUT /repos/{owner}/{repo}/interaction-limits'
          ],
          setRestrictionsForYourPublicRepos: [
            'PUT /user/interaction-limits',
            {},
            {
              renamed: ['interactions', 'setRestrictionsForAuthenticatedUser']
            }
          ]
        },
        issues: {
          addAssignees: [
            'POST /repos/{owner}/{repo}/issues/{issue_number}/assignees'
          ],
          addLabels: [
            'POST /repos/{owner}/{repo}/issues/{issue_number}/labels'
          ],
          checkUserCanBeAssigned: [
            'GET /repos/{owner}/{repo}/assignees/{assignee}'
          ],
          create: ['POST /repos/{owner}/{repo}/issues'],
          createComment: [
            'POST /repos/{owner}/{repo}/issues/{issue_number}/comments'
          ],
          createLabel: ['POST /repos/{owner}/{repo}/labels'],
          createMilestone: ['POST /repos/{owner}/{repo}/milestones'],
          deleteComment: [
            'DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}'
          ],
          deleteLabel: ['DELETE /repos/{owner}/{repo}/labels/{name}'],
          deleteMilestone: [
            'DELETE /repos/{owner}/{repo}/milestones/{milestone_number}'
          ],
          get: ['GET /repos/{owner}/{repo}/issues/{issue_number}'],
          getComment: [
            'GET /repos/{owner}/{repo}/issues/comments/{comment_id}'
          ],
          getEvent: ['GET /repos/{owner}/{repo}/issues/events/{event_id}'],
          getLabel: ['GET /repos/{owner}/{repo}/labels/{name}'],
          getMilestone: [
            'GET /repos/{owner}/{repo}/milestones/{milestone_number}'
          ],
          list: ['GET /issues'],
          listAssignees: ['GET /repos/{owner}/{repo}/assignees'],
          listComments: [
            'GET /repos/{owner}/{repo}/issues/{issue_number}/comments'
          ],
          listCommentsForRepo: ['GET /repos/{owner}/{repo}/issues/comments'],
          listEvents: [
            'GET /repos/{owner}/{repo}/issues/{issue_number}/events'
          ],
          listEventsForRepo: ['GET /repos/{owner}/{repo}/issues/events'],
          listEventsForTimeline: [
            'GET /repos/{owner}/{repo}/issues/{issue_number}/timeline',
            {
              mediaType: {
                previews: ['mockingbird']
              }
            }
          ],
          listForAuthenticatedUser: ['GET /user/issues'],
          listForOrg: ['GET /orgs/{org}/issues'],
          listForRepo: ['GET /repos/{owner}/{repo}/issues'],
          listLabelsForMilestone: [
            'GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels'
          ],
          listLabelsForRepo: ['GET /repos/{owner}/{repo}/labels'],
          listLabelsOnIssue: [
            'GET /repos/{owner}/{repo}/issues/{issue_number}/labels'
          ],
          listMilestones: ['GET /repos/{owner}/{repo}/milestones'],
          lock: ['PUT /repos/{owner}/{repo}/issues/{issue_number}/lock'],
          removeAllLabels: [
            'DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels'
          ],
          removeAssignees: [
            'DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees'
          ],
          removeLabel: [
            'DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels/{name}'
          ],
          setLabels: ['PUT /repos/{owner}/{repo}/issues/{issue_number}/labels'],
          unlock: ['DELETE /repos/{owner}/{repo}/issues/{issue_number}/lock'],
          update: ['PATCH /repos/{owner}/{repo}/issues/{issue_number}'],
          updateComment: [
            'PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}'
          ],
          updateLabel: ['PATCH /repos/{owner}/{repo}/labels/{name}'],
          updateMilestone: [
            'PATCH /repos/{owner}/{repo}/milestones/{milestone_number}'
          ]
        },
        licenses: {
          get: ['GET /licenses/{license}'],
          getAllCommonlyUsed: ['GET /licenses'],
          getForRepo: ['GET /repos/{owner}/{repo}/license']
        },
        markdown: {
          render: ['POST /markdown'],
          renderRaw: [
            'POST /markdown/raw',
            {
              headers: {
                'content-type': 'text/plain; charset=utf-8'
              }
            }
          ]
        },
        meta: {
          get: ['GET /meta'],
          getOctocat: ['GET /octocat'],
          getZen: ['GET /zen'],
          root: ['GET /']
        },
        migrations: {
          cancelImport: ['DELETE /repos/{owner}/{repo}/import'],
          deleteArchiveForAuthenticatedUser: [
            'DELETE /user/migrations/{migration_id}/archive',
            {
              mediaType: {
                previews: ['wyandotte']
              }
            }
          ],
          deleteArchiveForOrg: [
            'DELETE /orgs/{org}/migrations/{migration_id}/archive',
            {
              mediaType: {
                previews: ['wyandotte']
              }
            }
          ],
          downloadArchiveForOrg: [
            'GET /orgs/{org}/migrations/{migration_id}/archive',
            {
              mediaType: {
                previews: ['wyandotte']
              }
            }
          ],
          getArchiveForAuthenticatedUser: [
            'GET /user/migrations/{migration_id}/archive',
            {
              mediaType: {
                previews: ['wyandotte']
              }
            }
          ],
          getCommitAuthors: ['GET /repos/{owner}/{repo}/import/authors'],
          getImportStatus: ['GET /repos/{owner}/{repo}/import'],
          getLargeFiles: ['GET /repos/{owner}/{repo}/import/large_files'],
          getStatusForAuthenticatedUser: [
            'GET /user/migrations/{migration_id}',
            {
              mediaType: {
                previews: ['wyandotte']
              }
            }
          ],
          getStatusForOrg: [
            'GET /orgs/{org}/migrations/{migration_id}',
            {
              mediaType: {
                previews: ['wyandotte']
              }
            }
          ],
          listForAuthenticatedUser: [
            'GET /user/migrations',
            {
              mediaType: {
                previews: ['wyandotte']
              }
            }
          ],
          listForOrg: [
            'GET /orgs/{org}/migrations',
            {
              mediaType: {
                previews: ['wyandotte']
              }
            }
          ],
          listReposForOrg: [
            'GET /orgs/{org}/migrations/{migration_id}/repositories',
            {
              mediaType: {
                previews: ['wyandotte']
              }
            }
          ],
          listReposForUser: [
            'GET /user/migrations/{migration_id}/repositories',
            {
              mediaType: {
                previews: ['wyandotte']
              }
            }
          ],
          mapCommitAuthor: [
            'PATCH /repos/{owner}/{repo}/import/authors/{author_id}'
          ],
          setLfsPreference: ['PATCH /repos/{owner}/{repo}/import/lfs'],
          startForAuthenticatedUser: ['POST /user/migrations'],
          startForOrg: ['POST /orgs/{org}/migrations'],
          startImport: ['PUT /repos/{owner}/{repo}/import'],
          unlockRepoForAuthenticatedUser: [
            'DELETE /user/migrations/{migration_id}/repos/{repo_name}/lock',
            {
              mediaType: {
                previews: ['wyandotte']
              }
            }
          ],
          unlockRepoForOrg: [
            'DELETE /orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock',
            {
              mediaType: {
                previews: ['wyandotte']
              }
            }
          ],
          updateImport: ['PATCH /repos/{owner}/{repo}/import']
        },
        orgs: {
          blockUser: ['PUT /orgs/{org}/blocks/{username}'],
          cancelInvitation: ['DELETE /orgs/{org}/invitations/{invitation_id}'],
          checkBlockedUser: ['GET /orgs/{org}/blocks/{username}'],
          checkMembershipForUser: ['GET /orgs/{org}/members/{username}'],
          checkPublicMembershipForUser: [
            'GET /orgs/{org}/public_members/{username}'
          ],
          convertMemberToOutsideCollaborator: [
            'PUT /orgs/{org}/outside_collaborators/{username}'
          ],
          createInvitation: ['POST /orgs/{org}/invitations'],
          createWebhook: ['POST /orgs/{org}/hooks'],
          deleteWebhook: ['DELETE /orgs/{org}/hooks/{hook_id}'],
          get: ['GET /orgs/{org}'],
          getMembershipForAuthenticatedUser: [
            'GET /user/memberships/orgs/{org}'
          ],
          getMembershipForUser: ['GET /orgs/{org}/memberships/{username}'],
          getWebhook: ['GET /orgs/{org}/hooks/{hook_id}'],
          getWebhookConfigForOrg: ['GET /orgs/{org}/hooks/{hook_id}/config'],
          getWebhookDelivery: [
            'GET /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}'
          ],
          list: ['GET /organizations'],
          listAppInstallations: ['GET /orgs/{org}/installations'],
          listBlockedUsers: ['GET /orgs/{org}/blocks'],
          listFailedInvitations: ['GET /orgs/{org}/failed_invitations'],
          listForAuthenticatedUser: ['GET /user/orgs'],
          listForUser: ['GET /users/{username}/orgs'],
          listInvitationTeams: [
            'GET /orgs/{org}/invitations/{invitation_id}/teams'
          ],
          listMembers: ['GET /orgs/{org}/members'],
          listMembershipsForAuthenticatedUser: ['GET /user/memberships/orgs'],
          listOutsideCollaborators: ['GET /orgs/{org}/outside_collaborators'],
          listPendingInvitations: ['GET /orgs/{org}/invitations'],
          listPublicMembers: ['GET /orgs/{org}/public_members'],
          listWebhookDeliveries: ['GET /orgs/{org}/hooks/{hook_id}/deliveries'],
          listWebhooks: ['GET /orgs/{org}/hooks'],
          pingWebhook: ['POST /orgs/{org}/hooks/{hook_id}/pings'],
          redeliverWebhookDelivery: [
            'POST /orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}/attempts'
          ],
          removeMember: ['DELETE /orgs/{org}/members/{username}'],
          removeMembershipForUser: [
            'DELETE /orgs/{org}/memberships/{username}'
          ],
          removeOutsideCollaborator: [
            'DELETE /orgs/{org}/outside_collaborators/{username}'
          ],
          removePublicMembershipForAuthenticatedUser: [
            'DELETE /orgs/{org}/public_members/{username}'
          ],
          setMembershipForUser: ['PUT /orgs/{org}/memberships/{username}'],
          setPublicMembershipForAuthenticatedUser: [
            'PUT /orgs/{org}/public_members/{username}'
          ],
          unblockUser: ['DELETE /orgs/{org}/blocks/{username}'],
          update: ['PATCH /orgs/{org}'],
          updateMembershipForAuthenticatedUser: [
            'PATCH /user/memberships/orgs/{org}'
          ],
          updateWebhook: ['PATCH /orgs/{org}/hooks/{hook_id}'],
          updateWebhookConfigForOrg: [
            'PATCH /orgs/{org}/hooks/{hook_id}/config'
          ]
        },
        packages: {
          deletePackageForAuthenticatedUser: [
            'DELETE /user/packages/{package_type}/{package_name}'
          ],
          deletePackageForOrg: [
            'DELETE /orgs/{org}/packages/{package_type}/{package_name}'
          ],
          deletePackageVersionForAuthenticatedUser: [
            'DELETE /user/packages/{package_type}/{package_name}/versions/{package_version_id}'
          ],
          deletePackageVersionForOrg: [
            'DELETE /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}'
          ],
          getAllPackageVersionsForAPackageOwnedByAnOrg: [
            'GET /orgs/{org}/packages/{package_type}/{package_name}/versions',
            {},
            {
              renamed: ['packages', 'getAllPackageVersionsForPackageOwnedByOrg']
            }
          ],
          getAllPackageVersionsForAPackageOwnedByTheAuthenticatedUser: [
            'GET /user/packages/{package_type}/{package_name}/versions',
            {},
            {
              renamed: [
                'packages',
                'getAllPackageVersionsForPackageOwnedByAuthenticatedUser'
              ]
            }
          ],
          getAllPackageVersionsForPackageOwnedByAuthenticatedUser: [
            'GET /user/packages/{package_type}/{package_name}/versions'
          ],
          getAllPackageVersionsForPackageOwnedByOrg: [
            'GET /orgs/{org}/packages/{package_type}/{package_name}/versions'
          ],
          getAllPackageVersionsForPackageOwnedByUser: [
            'GET /users/{username}/packages/{package_type}/{package_name}/versions'
          ],
          getPackageForAuthenticatedUser: [
            'GET /user/packages/{package_type}/{package_name}'
          ],
          getPackageForOrganization: [
            'GET /orgs/{org}/packages/{package_type}/{package_name}'
          ],
          getPackageForUser: [
            'GET /users/{username}/packages/{package_type}/{package_name}'
          ],
          getPackageVersionForAuthenticatedUser: [
            'GET /user/packages/{package_type}/{package_name}/versions/{package_version_id}'
          ],
          getPackageVersionForOrganization: [
            'GET /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}'
          ],
          getPackageVersionForUser: [
            'GET /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}'
          ],
          restorePackageForAuthenticatedUser: [
            'POST /user/packages/{package_type}/{package_name}/restore{?token}'
          ],
          restorePackageForOrg: [
            'POST /orgs/{org}/packages/{package_type}/{package_name}/restore{?token}'
          ],
          restorePackageVersionForAuthenticatedUser: [
            'POST /user/packages/{package_type}/{package_name}/versions/{package_version_id}/restore'
          ],
          restorePackageVersionForOrg: [
            'POST /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore'
          ]
        },
        projects: {
          addCollaborator: [
            'PUT /projects/{project_id}/collaborators/{username}',
            {
              mediaType: {
                previews: ['inertia']
              }
            }
          ],
          createCard: [
            'POST /projects/columns/{column_id}/cards',
            {
              mediaType: {
                previews: ['inertia']
              }
            }
          ],
          createColumn: [
            'POST /projects/{project_id}/columns',
            {
              mediaType: {
                previews: ['inertia']
              }
            }
          ],
          createForAuthenticatedUser: [
            'POST /user/projects',
            {
              mediaType: {
                previews: ['inertia']
              }
            }
          ],
          createForOrg: [
            'POST /orgs/{org}/projects',
            {
              mediaType: {
                previews: ['inertia']
              }
            }
          ],
          createForRepo: [
            'POST /repos/{owner}/{repo}/projects',
            {
              mediaType: {
                previews: ['inertia']
              }
            }
          ],
          delete: [
            'DELETE /projects/{project_id}',
            {
              mediaType: {
                previews: ['inertia']
              }
            }
          ],
          deleteCard: [
            'DELETE /projects/columns/cards/{card_id}',
            {
              mediaType: {
                previews: ['inertia']
              }
            }
          ],
          deleteColumn: [
            'DELETE /projects/columns/{column_id}',
            {
              mediaType: {
                previews: ['inertia']
              }
            }
          ],
          get: [
            'GET /projects/{project_id}',
            {
              mediaType: {
                previews: ['inertia']
              }
            }
          ],
          getCard: [
            'GET /projects/columns/cards/{card_id}',
            {
              mediaType: {
                previews: ['inertia']
              }
            }
          ],
          getColumn: [
            'GET /projects/columns/{column_id}',
            {
              mediaType: {
                previews: ['inertia']
              }
            }
          ],
          getPermissionForUser: [
            'GET /projects/{project_id}/collaborators/{username}/permission',
            {
              mediaType: {
                previews: ['inertia']
              }
            }
          ],
          listCards: [
            'GET /projects/columns/{column_id}/cards',
            {
              mediaType: {
                previews: ['inertia']
              }
            }
          ],
          listCollaborators: [
            'GET /projects/{project_id}/collaborators',
            {
              mediaType: {
                previews: ['inertia']
              }
            }
          ],
          listColumns: [
            'GET /projects/{project_id}/columns',
            {
              mediaType: {
                previews: ['inertia']
              }
            }
          ],
          listForOrg: [
            'GET /orgs/{org}/projects',
            {
              mediaType: {
                previews: ['inertia']
              }
            }
          ],
          listForRepo: [
            'GET /repos/{owner}/{repo}/projects',
            {
              mediaType: {
                previews: ['inertia']
              }
            }
          ],
          listForUser: [
            'GET /users/{username}/projects',
            {
              mediaType: {
                previews: ['inertia']
              }
            }
          ],
          moveCard: [
            'POST /projects/columns/cards/{card_id}/moves',
            {
              mediaType: {
                previews: ['inertia']
              }
            }
          ],
          moveColumn: [
            'POST /projects/columns/{column_id}/moves',
            {
              mediaType: {
                previews: ['inertia']
              }
            }
          ],
          removeCollaborator: [
            'DELETE /projects/{project_id}/collaborators/{username}',
            {
              mediaType: {
                previews: ['inertia']
              }
            }
          ],
          update: [
            'PATCH /projects/{project_id}',
            {
              mediaType: {
                previews: ['inertia']
              }
            }
          ],
          updateCard: [
            'PATCH /projects/columns/cards/{card_id}',
            {
              mediaType: {
                previews: ['inertia']
              }
            }
          ],
          updateColumn: [
            'PATCH /projects/columns/{column_id}',
            {
              mediaType: {
                previews: ['inertia']
              }
            }
          ]
        },
        pulls: {
          checkIfMerged: [
            'GET /repos/{owner}/{repo}/pulls/{pull_number}/merge'
          ],
          create: ['POST /repos/{owner}/{repo}/pulls'],
          createReplyForReviewComment: [
            'POST /repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies'
          ],
          createReview: [
            'POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews'
          ],
          createReviewComment: [
            'POST /repos/{owner}/{repo}/pulls/{pull_number}/comments'
          ],
          deletePendingReview: [
            'DELETE /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}'
          ],
          deleteReviewComment: [
            'DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}'
          ],
          dismissReview: [
            'PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals'
          ],
          get: ['GET /repos/{owner}/{repo}/pulls/{pull_number}'],
          getReview: [
            'GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}'
          ],
          getReviewComment: [
            'GET /repos/{owner}/{repo}/pulls/comments/{comment_id}'
          ],
          list: ['GET /repos/{owner}/{repo}/pulls'],
          listCommentsForReview: [
            'GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments'
          ],
          listCommits: [
            'GET /repos/{owner}/{repo}/pulls/{pull_number}/commits'
          ],
          listFiles: ['GET /repos/{owner}/{repo}/pulls/{pull_number}/files'],
          listRequestedReviewers: [
            'GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers'
          ],
          listReviewComments: [
            'GET /repos/{owner}/{repo}/pulls/{pull_number}/comments'
          ],
          listReviewCommentsForRepo: [
            'GET /repos/{owner}/{repo}/pulls/comments'
          ],
          listReviews: [
            'GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews'
          ],
          merge: ['PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge'],
          removeRequestedReviewers: [
            'DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers'
          ],
          requestReviewers: [
            'POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers'
          ],
          submitReview: [
            'POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events'
          ],
          update: ['PATCH /repos/{owner}/{repo}/pulls/{pull_number}'],
          updateBranch: [
            'PUT /repos/{owner}/{repo}/pulls/{pull_number}/update-branch',
            {
              mediaType: {
                previews: ['lydian']
              }
            }
          ],
          updateReview: [
            'PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}'
          ],
          updateReviewComment: [
            'PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}'
          ]
        },
        rateLimit: {
          get: ['GET /rate_limit']
        },
        reactions: {
          createForCommitComment: [
            'POST /repos/{owner}/{repo}/comments/{comment_id}/reactions',
            {
              mediaType: {
                previews: ['squirrel-girl']
              }
            }
          ],
          createForIssue: [
            'POST /repos/{owner}/{repo}/issues/{issue_number}/reactions',
            {
              mediaType: {
                previews: ['squirrel-girl']
              }
            }
          ],
          createForIssueComment: [
            'POST /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions',
            {
              mediaType: {
                previews: ['squirrel-girl']
              }
            }
          ],
          createForPullRequestReviewComment: [
            'POST /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions',
            {
              mediaType: {
                previews: ['squirrel-girl']
              }
            }
          ],
          createForRelease: [
            'POST /repos/{owner}/{repo}/releases/{release_id}/reactions',
            {
              mediaType: {
                previews: ['squirrel-girl']
              }
            }
          ],
          createForTeamDiscussionCommentInOrg: [
            'POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions',
            {
              mediaType: {
                previews: ['squirrel-girl']
              }
            }
          ],
          createForTeamDiscussionInOrg: [
            'POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions',
            {
              mediaType: {
                previews: ['squirrel-girl']
              }
            }
          ],
          deleteForCommitComment: [
            'DELETE /repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}',
            {
              mediaType: {
                previews: ['squirrel-girl']
              }
            }
          ],
          deleteForIssue: [
            'DELETE /repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}',
            {
              mediaType: {
                previews: ['squirrel-girl']
              }
            }
          ],
          deleteForIssueComment: [
            'DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}',
            {
              mediaType: {
                previews: ['squirrel-girl']
              }
            }
          ],
          deleteForPullRequestComment: [
            'DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}',
            {
              mediaType: {
                previews: ['squirrel-girl']
              }
            }
          ],
          deleteForTeamDiscussion: [
            'DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}',
            {
              mediaType: {
                previews: ['squirrel-girl']
              }
            }
          ],
          deleteForTeamDiscussionComment: [
            'DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}',
            {
              mediaType: {
                previews: ['squirrel-girl']
              }
            }
          ],
          deleteLegacy: [
            'DELETE /reactions/{reaction_id}',
            {
              mediaType: {
                previews: ['squirrel-girl']
              }
            },
            {
              deprecated:
                'octokit.rest.reactions.deleteLegacy() is deprecated, see https://docs.github.com/rest/reference/reactions/#delete-a-reaction-legacy'
            }
          ],
          listForCommitComment: [
            'GET /repos/{owner}/{repo}/comments/{comment_id}/reactions',
            {
              mediaType: {
                previews: ['squirrel-girl']
              }
            }
          ],
          listForIssue: [
            'GET /repos/{owner}/{repo}/issues/{issue_number}/reactions',
            {
              mediaType: {
                previews: ['squirrel-girl']
              }
            }
          ],
          listForIssueComment: [
            'GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions',
            {
              mediaType: {
                previews: ['squirrel-girl']
              }
            }
          ],
          listForPullRequestReviewComment: [
            'GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions',
            {
              mediaType: {
                previews: ['squirrel-girl']
              }
            }
          ],
          listForTeamDiscussionCommentInOrg: [
            'GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions',
            {
              mediaType: {
                previews: ['squirrel-girl']
              }
            }
          ],
          listForTeamDiscussionInOrg: [
            'GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions',
            {
              mediaType: {
                previews: ['squirrel-girl']
              }
            }
          ]
        },
        repos: {
          acceptInvitation: [
            'PATCH /user/repository_invitations/{invitation_id}'
          ],
          addAppAccessRestrictions: [
            'POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps',
            {},
            {
              mapToData: 'apps'
            }
          ],
          addCollaborator: [
            'PUT /repos/{owner}/{repo}/collaborators/{username}'
          ],
          addStatusCheckContexts: [
            'POST /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts',
            {},
            {
              mapToData: 'contexts'
            }
          ],
          addTeamAccessRestrictions: [
            'POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams',
            {},
            {
              mapToData: 'teams'
            }
          ],
          addUserAccessRestrictions: [
            'POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users',
            {},
            {
              mapToData: 'users'
            }
          ],
          checkCollaborator: [
            'GET /repos/{owner}/{repo}/collaborators/{username}'
          ],
          checkVulnerabilityAlerts: [
            'GET /repos/{owner}/{repo}/vulnerability-alerts',
            {
              mediaType: {
                previews: ['dorian']
              }
            }
          ],
          compareCommits: ['GET /repos/{owner}/{repo}/compare/{base}...{head}'],
          compareCommitsWithBasehead: [
            'GET /repos/{owner}/{repo}/compare/{basehead}'
          ],
          createCommitComment: [
            'POST /repos/{owner}/{repo}/commits/{commit_sha}/comments'
          ],
          createCommitSignatureProtection: [
            'POST /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures',
            {
              mediaType: {
                previews: ['zzzax']
              }
            }
          ],
          createCommitStatus: ['POST /repos/{owner}/{repo}/statuses/{sha}'],
          createDeployKey: ['POST /repos/{owner}/{repo}/keys'],
          createDeployment: ['POST /repos/{owner}/{repo}/deployments'],
          createDeploymentStatus: [
            'POST /repos/{owner}/{repo}/deployments/{deployment_id}/statuses'
          ],
          createDispatchEvent: ['POST /repos/{owner}/{repo}/dispatches'],
          createForAuthenticatedUser: ['POST /user/repos'],
          createFork: ['POST /repos/{owner}/{repo}/forks'],
          createInOrg: ['POST /orgs/{org}/repos'],
          createOrUpdateEnvironment: [
            'PUT /repos/{owner}/{repo}/environments/{environment_name}'
          ],
          createOrUpdateFileContents: [
            'PUT /repos/{owner}/{repo}/contents/{path}'
          ],
          createPagesSite: [
            'POST /repos/{owner}/{repo}/pages',
            {
              mediaType: {
                previews: ['switcheroo']
              }
            }
          ],
          createRelease: ['POST /repos/{owner}/{repo}/releases'],
          createUsingTemplate: [
            'POST /repos/{template_owner}/{template_repo}/generate',
            {
              mediaType: {
                previews: ['baptiste']
              }
            }
          ],
          createWebhook: ['POST /repos/{owner}/{repo}/hooks'],
          declineInvitation: [
            'DELETE /user/repository_invitations/{invitation_id}'
          ],
          delete: ['DELETE /repos/{owner}/{repo}'],
          deleteAccessRestrictions: [
            'DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions'
          ],
          deleteAdminBranchProtection: [
            'DELETE /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins'
          ],
          deleteAnEnvironment: [
            'DELETE /repos/{owner}/{repo}/environments/{environment_name}'
          ],
          deleteBranchProtection: [
            'DELETE /repos/{owner}/{repo}/branches/{branch}/protection'
          ],
          deleteCommitComment: [
            'DELETE /repos/{owner}/{repo}/comments/{comment_id}'
          ],
          deleteCommitSignatureProtection: [
            'DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures',
            {
              mediaType: {
                previews: ['zzzax']
              }
            }
          ],
          deleteDeployKey: ['DELETE /repos/{owner}/{repo}/keys/{key_id}'],
          deleteDeployment: [
            'DELETE /repos/{owner}/{repo}/deployments/{deployment_id}'
          ],
          deleteFile: ['DELETE /repos/{owner}/{repo}/contents/{path}'],
          deleteInvitation: [
            'DELETE /repos/{owner}/{repo}/invitations/{invitation_id}'
          ],
          deletePagesSite: [
            'DELETE /repos/{owner}/{repo}/pages',
            {
              mediaType: {
                previews: ['switcheroo']
              }
            }
          ],
          deletePullRequestReviewProtection: [
            'DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews'
          ],
          deleteRelease: ['DELETE /repos/{owner}/{repo}/releases/{release_id}'],
          deleteReleaseAsset: [
            'DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}'
          ],
          deleteWebhook: ['DELETE /repos/{owner}/{repo}/hooks/{hook_id}'],
          disableAutomatedSecurityFixes: [
            'DELETE /repos/{owner}/{repo}/automated-security-fixes',
            {
              mediaType: {
                previews: ['london']
              }
            }
          ],
          disableVulnerabilityAlerts: [
            'DELETE /repos/{owner}/{repo}/vulnerability-alerts',
            {
              mediaType: {
                previews: ['dorian']
              }
            }
          ],
          downloadArchive: [
            'GET /repos/{owner}/{repo}/zipball/{ref}',
            {},
            {
              renamed: ['repos', 'downloadZipballArchive']
            }
          ],
          downloadTarballArchive: ['GET /repos/{owner}/{repo}/tarball/{ref}'],
          downloadZipballArchive: ['GET /repos/{owner}/{repo}/zipball/{ref}'],
          enableAutomatedSecurityFixes: [
            'PUT /repos/{owner}/{repo}/automated-security-fixes',
            {
              mediaType: {
                previews: ['london']
              }
            }
          ],
          enableVulnerabilityAlerts: [
            'PUT /repos/{owner}/{repo}/vulnerability-alerts',
            {
              mediaType: {
                previews: ['dorian']
              }
            }
          ],
          get: ['GET /repos/{owner}/{repo}'],
          getAccessRestrictions: [
            'GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions'
          ],
          getAdminBranchProtection: [
            'GET /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins'
          ],
          getAllEnvironments: ['GET /repos/{owner}/{repo}/environments'],
          getAllStatusCheckContexts: [
            'GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts'
          ],
          getAllTopics: [
            'GET /repos/{owner}/{repo}/topics',
            {
              mediaType: {
                previews: ['mercy']
              }
            }
          ],
          getAppsWithAccessToProtectedBranch: [
            'GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps'
          ],
          getBranch: ['GET /repos/{owner}/{repo}/branches/{branch}'],
          getBranchProtection: [
            'GET /repos/{owner}/{repo}/branches/{branch}/protection'
          ],
          getClones: ['GET /repos/{owner}/{repo}/traffic/clones'],
          getCodeFrequencyStats: [
            'GET /repos/{owner}/{repo}/stats/code_frequency'
          ],
          getCollaboratorPermissionLevel: [
            'GET /repos/{owner}/{repo}/collaborators/{username}/permission'
          ],
          getCombinedStatusForRef: [
            'GET /repos/{owner}/{repo}/commits/{ref}/status'
          ],
          getCommit: ['GET /repos/{owner}/{repo}/commits/{ref}'],
          getCommitActivityStats: [
            'GET /repos/{owner}/{repo}/stats/commit_activity'
          ],
          getCommitComment: ['GET /repos/{owner}/{repo}/comments/{comment_id}'],
          getCommitSignatureProtection: [
            'GET /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures',
            {
              mediaType: {
                previews: ['zzzax']
              }
            }
          ],
          getCommunityProfileMetrics: [
            'GET /repos/{owner}/{repo}/community/profile'
          ],
          getContent: ['GET /repos/{owner}/{repo}/contents/{path}'],
          getContributorsStats: [
            'GET /repos/{owner}/{repo}/stats/contributors'
          ],
          getDeployKey: ['GET /repos/{owner}/{repo}/keys/{key_id}'],
          getDeployment: [
            'GET /repos/{owner}/{repo}/deployments/{deployment_id}'
          ],
          getDeploymentStatus: [
            'GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}'
          ],
          getEnvironment: [
            'GET /repos/{owner}/{repo}/environments/{environment_name}'
          ],
          getLatestPagesBuild: [
            'GET /repos/{owner}/{repo}/pages/builds/latest'
          ],
          getLatestRelease: ['GET /repos/{owner}/{repo}/releases/latest'],
          getPages: ['GET /repos/{owner}/{repo}/pages'],
          getPagesBuild: ['GET /repos/{owner}/{repo}/pages/builds/{build_id}'],
          getPagesHealthCheck: ['GET /repos/{owner}/{repo}/pages/health'],
          getParticipationStats: [
            'GET /repos/{owner}/{repo}/stats/participation'
          ],
          getPullRequestReviewProtection: [
            'GET /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews'
          ],
          getPunchCardStats: ['GET /repos/{owner}/{repo}/stats/punch_card'],
          getReadme: ['GET /repos/{owner}/{repo}/readme'],
          getReadmeInDirectory: ['GET /repos/{owner}/{repo}/readme/{dir}'],
          getRelease: ['GET /repos/{owner}/{repo}/releases/{release_id}'],
          getReleaseAsset: [
            'GET /repos/{owner}/{repo}/releases/assets/{asset_id}'
          ],
          getReleaseByTag: ['GET /repos/{owner}/{repo}/releases/tags/{tag}'],
          getStatusChecksProtection: [
            'GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks'
          ],
          getTeamsWithAccessToProtectedBranch: [
            'GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams'
          ],
          getTopPaths: ['GET /repos/{owner}/{repo}/traffic/popular/paths'],
          getTopReferrers: [
            'GET /repos/{owner}/{repo}/traffic/popular/referrers'
          ],
          getUsersWithAccessToProtectedBranch: [
            'GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users'
          ],
          getViews: ['GET /repos/{owner}/{repo}/traffic/views'],
          getWebhook: ['GET /repos/{owner}/{repo}/hooks/{hook_id}'],
          getWebhookConfigForRepo: [
            'GET /repos/{owner}/{repo}/hooks/{hook_id}/config'
          ],
          getWebhookDelivery: [
            'GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}'
          ],
          listBranches: ['GET /repos/{owner}/{repo}/branches'],
          listBranchesForHeadCommit: [
            'GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head',
            {
              mediaType: {
                previews: ['groot']
              }
            }
          ],
          listCollaborators: ['GET /repos/{owner}/{repo}/collaborators'],
          listCommentsForCommit: [
            'GET /repos/{owner}/{repo}/commits/{commit_sha}/comments'
          ],
          listCommitCommentsForRepo: ['GET /repos/{owner}/{repo}/comments'],
          listCommitStatusesForRef: [
            'GET /repos/{owner}/{repo}/commits/{ref}/statuses'
          ],
          listCommits: ['GET /repos/{owner}/{repo}/commits'],
          listContributors: ['GET /repos/{owner}/{repo}/contributors'],
          listDeployKeys: ['GET /repos/{owner}/{repo}/keys'],
          listDeploymentStatuses: [
            'GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses'
          ],
          listDeployments: ['GET /repos/{owner}/{repo}/deployments'],
          listForAuthenticatedUser: ['GET /user/repos'],
          listForOrg: ['GET /orgs/{org}/repos'],
          listForUser: ['GET /users/{username}/repos'],
          listForks: ['GET /repos/{owner}/{repo}/forks'],
          listInvitations: ['GET /repos/{owner}/{repo}/invitations'],
          listInvitationsForAuthenticatedUser: [
            'GET /user/repository_invitations'
          ],
          listLanguages: ['GET /repos/{owner}/{repo}/languages'],
          listPagesBuilds: ['GET /repos/{owner}/{repo}/pages/builds'],
          listPublic: ['GET /repositories'],
          listPullRequestsAssociatedWithCommit: [
            'GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls',
            {
              mediaType: {
                previews: ['groot']
              }
            }
          ],
          listReleaseAssets: [
            'GET /repos/{owner}/{repo}/releases/{release_id}/assets'
          ],
          listReleases: ['GET /repos/{owner}/{repo}/releases'],
          listTags: ['GET /repos/{owner}/{repo}/tags'],
          listTeams: ['GET /repos/{owner}/{repo}/teams'],
          listWebhookDeliveries: [
            'GET /repos/{owner}/{repo}/hooks/{hook_id}/deliveries'
          ],
          listWebhooks: ['GET /repos/{owner}/{repo}/hooks'],
          merge: ['POST /repos/{owner}/{repo}/merges'],
          pingWebhook: ['POST /repos/{owner}/{repo}/hooks/{hook_id}/pings'],
          redeliverWebhookDelivery: [
            'POST /repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}/attempts'
          ],
          removeAppAccessRestrictions: [
            'DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps',
            {},
            {
              mapToData: 'apps'
            }
          ],
          removeCollaborator: [
            'DELETE /repos/{owner}/{repo}/collaborators/{username}'
          ],
          removeStatusCheckContexts: [
            'DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts',
            {},
            {
              mapToData: 'contexts'
            }
          ],
          removeStatusCheckProtection: [
            'DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks'
          ],
          removeTeamAccessRestrictions: [
            'DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams',
            {},
            {
              mapToData: 'teams'
            }
          ],
          removeUserAccessRestrictions: [
            'DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users',
            {},
            {
              mapToData: 'users'
            }
          ],
          renameBranch: ['POST /repos/{owner}/{repo}/branches/{branch}/rename'],
          replaceAllTopics: [
            'PUT /repos/{owner}/{repo}/topics',
            {
              mediaType: {
                previews: ['mercy']
              }
            }
          ],
          requestPagesBuild: ['POST /repos/{owner}/{repo}/pages/builds'],
          setAdminBranchProtection: [
            'POST /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins'
          ],
          setAppAccessRestrictions: [
            'PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps',
            {},
            {
              mapToData: 'apps'
            }
          ],
          setStatusCheckContexts: [
            'PUT /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts',
            {},
            {
              mapToData: 'contexts'
            }
          ],
          setTeamAccessRestrictions: [
            'PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams',
            {},
            {
              mapToData: 'teams'
            }
          ],
          setUserAccessRestrictions: [
            'PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users',
            {},
            {
              mapToData: 'users'
            }
          ],
          testPushWebhook: ['POST /repos/{owner}/{repo}/hooks/{hook_id}/tests'],
          transfer: ['POST /repos/{owner}/{repo}/transfer'],
          update: ['PATCH /repos/{owner}/{repo}'],
          updateBranchProtection: [
            'PUT /repos/{owner}/{repo}/branches/{branch}/protection'
          ],
          updateCommitComment: [
            'PATCH /repos/{owner}/{repo}/comments/{comment_id}'
          ],
          updateInformationAboutPagesSite: ['PUT /repos/{owner}/{repo}/pages'],
          updateInvitation: [
            'PATCH /repos/{owner}/{repo}/invitations/{invitation_id}'
          ],
          updatePullRequestReviewProtection: [
            'PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews'
          ],
          updateRelease: ['PATCH /repos/{owner}/{repo}/releases/{release_id}'],
          updateReleaseAsset: [
            'PATCH /repos/{owner}/{repo}/releases/assets/{asset_id}'
          ],
          updateStatusCheckPotection: [
            'PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks',
            {},
            {
              renamed: ['repos', 'updateStatusCheckProtection']
            }
          ],
          updateStatusCheckProtection: [
            'PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks'
          ],
          updateWebhook: ['PATCH /repos/{owner}/{repo}/hooks/{hook_id}'],
          updateWebhookConfigForRepo: [
            'PATCH /repos/{owner}/{repo}/hooks/{hook_id}/config'
          ],
          uploadReleaseAsset: [
            'POST /repos/{owner}/{repo}/releases/{release_id}/assets{?name,label}',
            {
              baseUrl: 'https://uploads.github.com'
            }
          ]
        },
        search: {
          code: ['GET /search/code'],
          commits: [
            'GET /search/commits',
            {
              mediaType: {
                previews: ['cloak']
              }
            }
          ],
          issuesAndPullRequests: ['GET /search/issues'],
          labels: ['GET /search/labels'],
          repos: ['GET /search/repositories'],
          topics: [
            'GET /search/topics',
            {
              mediaType: {
                previews: ['mercy']
              }
            }
          ],
          users: ['GET /search/users']
        },
        secretScanning: {
          getAlert: [
            'GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}'
          ],
          listAlertsForRepo: [
            'GET /repos/{owner}/{repo}/secret-scanning/alerts'
          ],
          updateAlert: [
            'PATCH /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}'
          ]
        },
        teams: {
          addOrUpdateMembershipForUserInOrg: [
            'PUT /orgs/{org}/teams/{team_slug}/memberships/{username}'
          ],
          addOrUpdateProjectPermissionsInOrg: [
            'PUT /orgs/{org}/teams/{team_slug}/projects/{project_id}',
            {
              mediaType: {
                previews: ['inertia']
              }
            }
          ],
          addOrUpdateRepoPermissionsInOrg: [
            'PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}'
          ],
          checkPermissionsForProjectInOrg: [
            'GET /orgs/{org}/teams/{team_slug}/projects/{project_id}',
            {
              mediaType: {
                previews: ['inertia']
              }
            }
          ],
          checkPermissionsForRepoInOrg: [
            'GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}'
          ],
          create: ['POST /orgs/{org}/teams'],
          createDiscussionCommentInOrg: [
            'POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments'
          ],
          createDiscussionInOrg: [
            'POST /orgs/{org}/teams/{team_slug}/discussions'
          ],
          deleteDiscussionCommentInOrg: [
            'DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}'
          ],
          deleteDiscussionInOrg: [
            'DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}'
          ],
          deleteInOrg: ['DELETE /orgs/{org}/teams/{team_slug}'],
          getByName: ['GET /orgs/{org}/teams/{team_slug}'],
          getDiscussionCommentInOrg: [
            'GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}'
          ],
          getDiscussionInOrg: [
            'GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}'
          ],
          getMembershipForUserInOrg: [
            'GET /orgs/{org}/teams/{team_slug}/memberships/{username}'
          ],
          list: ['GET /orgs/{org}/teams'],
          listChildInOrg: ['GET /orgs/{org}/teams/{team_slug}/teams'],
          listDiscussionCommentsInOrg: [
            'GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments'
          ],
          listDiscussionsInOrg: [
            'GET /orgs/{org}/teams/{team_slug}/discussions'
          ],
          listForAuthenticatedUser: ['GET /user/teams'],
          listMembersInOrg: ['GET /orgs/{org}/teams/{team_slug}/members'],
          listPendingInvitationsInOrg: [
            'GET /orgs/{org}/teams/{team_slug}/invitations'
          ],
          listProjectsInOrg: [
            'GET /orgs/{org}/teams/{team_slug}/projects',
            {
              mediaType: {
                previews: ['inertia']
              }
            }
          ],
          listReposInOrg: ['GET /orgs/{org}/teams/{team_slug}/repos'],
          removeMembershipForUserInOrg: [
            'DELETE /orgs/{org}/teams/{team_slug}/memberships/{username}'
          ],
          removeProjectInOrg: [
            'DELETE /orgs/{org}/teams/{team_slug}/projects/{project_id}'
          ],
          removeRepoInOrg: [
            'DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}'
          ],
          updateDiscussionCommentInOrg: [
            'PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}'
          ],
          updateDiscussionInOrg: [
            'PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}'
          ],
          updateInOrg: ['PATCH /orgs/{org}/teams/{team_slug}']
        },
        users: {
          addEmailForAuthenticated: ['POST /user/emails'],
          block: ['PUT /user/blocks/{username}'],
          checkBlocked: ['GET /user/blocks/{username}'],
          checkFollowingForUser: [
            'GET /users/{username}/following/{target_user}'
          ],
          checkPersonIsFollowedByAuthenticated: [
            'GET /user/following/{username}'
          ],
          createGpgKeyForAuthenticated: ['POST /user/gpg_keys'],
          createPublicSshKeyForAuthenticated: ['POST /user/keys'],
          deleteEmailForAuthenticated: ['DELETE /user/emails'],
          deleteGpgKeyForAuthenticated: ['DELETE /user/gpg_keys/{gpg_key_id}'],
          deletePublicSshKeyForAuthenticated: ['DELETE /user/keys/{key_id}'],
          follow: ['PUT /user/following/{username}'],
          getAuthenticated: ['GET /user'],
          getByUsername: ['GET /users/{username}'],
          getContextForUser: ['GET /users/{username}/hovercard'],
          getGpgKeyForAuthenticated: ['GET /user/gpg_keys/{gpg_key_id}'],
          getPublicSshKeyForAuthenticated: ['GET /user/keys/{key_id}'],
          list: ['GET /users'],
          listBlockedByAuthenticated: ['GET /user/blocks'],
          listEmailsForAuthenticated: ['GET /user/emails'],
          listFollowedByAuthenticated: ['GET /user/following'],
          listFollowersForAuthenticatedUser: ['GET /user/followers'],
          listFollowersForUser: ['GET /users/{username}/followers'],
          listFollowingForUser: ['GET /users/{username}/following'],
          listGpgKeysForAuthenticated: ['GET /user/gpg_keys'],
          listGpgKeysForUser: ['GET /users/{username}/gpg_keys'],
          listPublicEmailsForAuthenticated: ['GET /user/public_emails'],
          listPublicKeysForUser: ['GET /users/{username}/keys'],
          listPublicSshKeysForAuthenticated: ['GET /user/keys'],
          setPrimaryEmailVisibilityForAuthenticated: [
            'PATCH /user/email/visibility'
          ],
          unblock: ['DELETE /user/blocks/{username}'],
          unfollow: ['DELETE /user/following/{username}'],
          updateAuthenticated: ['PATCH /user']
        }
      }

      const VERSION = '5.5.2'

      function endpointsToMethods(octokit, endpointsMap) {
        const newMethods = {}

        for (const [scope, endpoints] of Object.entries(endpointsMap)) {
          for (const [methodName, endpoint] of Object.entries(endpoints)) {
            const [route, defaults, decorations] = endpoint
            const [method, url] = route.split(/ /)
            const endpointDefaults = Object.assign(
              {
                method,
                url
              },
              defaults
            )

            if (!newMethods[scope]) {
              newMethods[scope] = {}
            }

            const scopeMethods = newMethods[scope]

            if (decorations) {
              scopeMethods[methodName] = decorate(
                octokit,
                scope,
                methodName,
                endpointDefaults,
                decorations
              )
              continue
            }

            scopeMethods[methodName] =
              octokit.request.defaults(endpointDefaults)
          }
        }

        return newMethods
      }

      function decorate(octokit, scope, methodName, defaults, decorations) {
        const requestWithDefaults = octokit.request.defaults(defaults)
        /* istanbul ignore next */

        function withDecorations(...args) {
          // @ts-ignore https://github.com/microsoft/TypeScript/issues/25488
          let options = requestWithDefaults.endpoint.merge(...args) // There are currently no other decorations than `.mapToData`

          if (decorations.mapToData) {
            options = Object.assign({}, options, {
              data: options[decorations.mapToData],
              [decorations.mapToData]: undefined
            })
            return requestWithDefaults(options)
          }

          if (decorations.renamed) {
            const [newScope, newMethodName] = decorations.renamed
            octokit.log.warn(
              `octokit.${scope}.${methodName}() has been renamed to octokit.${newScope}.${newMethodName}()`
            )
          }

          if (decorations.deprecated) {
            octokit.log.warn(decorations.deprecated)
          }

          if (decorations.renamedParameters) {
            // @ts-ignore https://github.com/microsoft/TypeScript/issues/25488
            const options = requestWithDefaults.endpoint.merge(...args)

            for (const [name, alias] of Object.entries(
              decorations.renamedParameters
            )) {
              if (name in options) {
                octokit.log.warn(
                  `"${name}" parameter is deprecated for "octokit.${scope}.${methodName}()". Use "${alias}" instead`
                )

                if (!(alias in options)) {
                  options[alias] = options[name]
                }

                delete options[name]
              }
            }

            return requestWithDefaults(options)
          } // @ts-ignore https://github.com/microsoft/TypeScript/issues/25488

          return requestWithDefaults(...args)
        }

        return Object.assign(withDecorations, requestWithDefaults)
      }

      function restEndpointMethods(octokit) {
        const api = endpointsToMethods(octokit, Endpoints)
        return {
          rest: api
        }
      }
      restEndpointMethods.VERSION = VERSION
      function legacyRestEndpointMethods(octokit) {
        const api = endpointsToMethods(octokit, Endpoints)
        return _objectSpread2(
          _objectSpread2({}, api),
          {},
          {
            rest: api
          }
        )
      }
      legacyRestEndpointMethods.VERSION = VERSION

      exports.legacyRestEndpointMethods = legacyRestEndpointMethods
      exports.restEndpointMethods = restEndpointMethods
      //# sourceMappingURL=index.js.map

      /***/
    },

    /***/ 537: /***/ (
      __unused_webpack_module,
      exports,
      __nccwpck_require__
    ) => {
      'use strict'

      Object.defineProperty(exports, '__esModule', { value: true })

      function _interopDefault(ex) {
        return ex && typeof ex === 'object' && 'default' in ex
          ? ex['default']
          : ex
      }

      var deprecation = __nccwpck_require__(8932)
      var once = _interopDefault(__nccwpck_require__(1223))

      const logOnce = once((deprecation) => console.warn(deprecation))
      /**
       * Error with extra properties to help with debugging
       */

      class RequestError extends Error {
        constructor(message, statusCode, options) {
          super(message) // Maintains proper stack trace (only available on V8)

          /* istanbul ignore next */

          if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor)
          }

          this.name = 'HttpError'
          this.status = statusCode
          Object.defineProperty(this, 'code', {
            get() {
              logOnce(
                new deprecation.Deprecation(
                  '[@octokit/request-error] `error.code` is deprecated, use `error.status`.'
                )
              )
              return statusCode
            }
          })
          this.headers = options.headers || {} // redact request credentials without mutating original request options

          const requestCopy = Object.assign({}, options.request)

          if (options.request.headers.authorization) {
            requestCopy.headers = Object.assign({}, options.request.headers, {
              authorization: options.request.headers.authorization.replace(
                / .*$/,
                ' [REDACTED]'
              )
            })
          }

          requestCopy.url = requestCopy.url // client_id & client_secret can be passed as URL query parameters to increase rate limit
            // see https://developer.github.com/v3/#increasing-the-unauthenticated-rate-limit-for-oauth-applications
            .replace(/\bclient_secret=\w+/g, 'client_secret=[REDACTED]') // OAuth tokens can be passed as URL query parameters, although it is not recommended
            // see https://developer.github.com/v3/#oauth2-token-sent-in-a-header
            .replace(/\baccess_token=\w+/g, 'access_token=[REDACTED]')
          this.request = requestCopy
        }
      }

      exports.RequestError = RequestError
      //# sourceMappingURL=index.js.map

      /***/
    },

    /***/ 6234: /***/ (
      __unused_webpack_module,
      exports,
      __nccwpck_require__
    ) => {
      'use strict'

      Object.defineProperty(exports, '__esModule', { value: true })

      function _interopDefault(ex) {
        return ex && typeof ex === 'object' && 'default' in ex
          ? ex['default']
          : ex
      }

      var endpoint = __nccwpck_require__(9440)
      var universalUserAgent = __nccwpck_require__(5030)
      var isPlainObject = __nccwpck_require__(3287)
      var nodeFetch = _interopDefault(__nccwpck_require__(1768))
      var requestError = __nccwpck_require__(537)

      const VERSION = '5.4.14'

      function getBufferResponse(response) {
        return response.arrayBuffer()
      }

      function fetchWrapper(requestOptions) {
        if (
          isPlainObject.isPlainObject(requestOptions.body) ||
          Array.isArray(requestOptions.body)
        ) {
          requestOptions.body = JSON.stringify(requestOptions.body)
        }

        let headers = {}
        let status
        let url
        const fetch =
          (requestOptions.request && requestOptions.request.fetch) || nodeFetch
        return fetch(
          requestOptions.url,
          Object.assign(
            {
              method: requestOptions.method,
              body: requestOptions.body,
              headers: requestOptions.headers,
              redirect: requestOptions.redirect
            },
            requestOptions.request
          )
        )
          .then((response) => {
            url = response.url
            status = response.status

            for (const keyAndValue of response.headers) {
              headers[keyAndValue[0]] = keyAndValue[1]
            }

            if (status === 204 || status === 205) {
              return
            } // GitHub API returns 200 for HEAD requests

            if (requestOptions.method === 'HEAD') {
              if (status < 400) {
                return
              }

              throw new requestError.RequestError(response.statusText, status, {
                headers,
                request: requestOptions
              })
            }

            if (status === 304) {
              throw new requestError.RequestError('Not modified', status, {
                headers,
                request: requestOptions
              })
            }

            if (status >= 400) {
              return response.text().then((message) => {
                const error = new requestError.RequestError(message, status, {
                  headers,
                  request: requestOptions
                })

                try {
                  let responseBody = JSON.parse(error.message)
                  Object.assign(error, responseBody)
                  let errors = responseBody.errors // Assumption `errors` would always be in Array format

                  error.message =
                    error.message + ': ' + errors.map(JSON.stringify).join(', ')
                } catch (e) {
                  // ignore, see octokit/rest.js#684
                }

                throw error
              })
            }

            const contentType = response.headers.get('content-type')

            if (/application\/json/.test(contentType)) {
              return response.json()
            }

            if (!contentType || /^text\/|charset=utf-8$/.test(contentType)) {
              return response.text()
            }

            return getBufferResponse(response)
          })
          .then((data) => {
            return {
              status,
              url,
              headers,
              data
            }
          })
          .catch((error) => {
            if (error instanceof requestError.RequestError) {
              throw error
            }

            throw new requestError.RequestError(error.message, 500, {
              headers,
              request: requestOptions
            })
          })
      }

      function withDefaults(oldEndpoint, newDefaults) {
        const endpoint = oldEndpoint.defaults(newDefaults)

        const newApi = function (route, parameters) {
          const endpointOptions = endpoint.merge(route, parameters)

          if (!endpointOptions.request || !endpointOptions.request.hook) {
            return fetchWrapper(endpoint.parse(endpointOptions))
          }

          const request = (route, parameters) => {
            return fetchWrapper(
              endpoint.parse(endpoint.merge(route, parameters))
            )
          }

          Object.assign(request, {
            endpoint,
            defaults: withDefaults.bind(null, endpoint)
          })
          return endpointOptions.request.hook(request, endpointOptions)
        }

        return Object.assign(newApi, {
          endpoint,
          defaults: withDefaults.bind(null, endpoint)
        })
      }

      const request = withDefaults(endpoint.endpoint, {
        headers: {
          'user-agent': `octokit-request.js/${VERSION} ${universalUserAgent.getUserAgent()}`
        }
      })

      exports.request = request
      //# sourceMappingURL=index.js.map

      /***/
    },

    /***/ 1768: /***/ (module, exports, __nccwpck_require__) => {
      'use strict'

      Object.defineProperty(exports, '__esModule', { value: true })

      function _interopDefault(ex) {
        return ex && typeof ex === 'object' && 'default' in ex
          ? ex['default']
          : ex
      }

      var Stream = _interopDefault(__nccwpck_require__(2413))
      var http = _interopDefault(__nccwpck_require__(8605))
      var Url = _interopDefault(__nccwpck_require__(8835))
      var https = _interopDefault(__nccwpck_require__(7211))
      var zlib = _interopDefault(__nccwpck_require__(8761))

      // Based on https://github.com/tmpvar/jsdom/blob/aa85b2abf07766ff7bf5c1f6daafb3726f2f2db5/lib/jsdom/living/blob.js

      // fix for "Readable" isn't a named export issue
      const Readable = Stream.Readable

      const BUFFER = Symbol('buffer')
      const TYPE = Symbol('type')

      class Blob {
        constructor() {
          this[TYPE] = ''

          const blobParts = arguments[0]
          const options = arguments[1]

          const buffers = []
          let size = 0

          if (blobParts) {
            const a = blobParts
            const length = Number(a.length)
            for (let i = 0; i < length; i++) {
              const element = a[i]
              let buffer
              if (element instanceof Buffer) {
                buffer = element
              } else if (ArrayBuffer.isView(element)) {
                buffer = Buffer.from(
                  element.buffer,
                  element.byteOffset,
                  element.byteLength
                )
              } else if (element instanceof ArrayBuffer) {
                buffer = Buffer.from(element)
              } else if (element instanceof Blob) {
                buffer = element[BUFFER]
              } else {
                buffer = Buffer.from(
                  typeof element === 'string' ? element : String(element)
                )
              }
              size += buffer.length
              buffers.push(buffer)
            }
          }

          this[BUFFER] = Buffer.concat(buffers)

          let type =
            options &&
            options.type !== undefined &&
            String(options.type).toLowerCase()
          if (type && !/[^\u0020-\u007E]/.test(type)) {
            this[TYPE] = type
          }
        }
        get size() {
          return this[BUFFER].length
        }
        get type() {
          return this[TYPE]
        }
        text() {
          return Promise.resolve(this[BUFFER].toString())
        }
        arrayBuffer() {
          const buf = this[BUFFER]
          const ab = buf.buffer.slice(
            buf.byteOffset,
            buf.byteOffset + buf.byteLength
          )
          return Promise.resolve(ab)
        }
        stream() {
          const readable = new Readable()
          readable._read = function () {}
          readable.push(this[BUFFER])
          readable.push(null)
          return readable
        }
        toString() {
          return '[object Blob]'
        }
        slice() {
          const size = this.size

          const start = arguments[0]
          const end = arguments[1]
          let relativeStart, relativeEnd
          if (start === undefined) {
            relativeStart = 0
          } else if (start < 0) {
            relativeStart = Math.max(size + start, 0)
          } else {
            relativeStart = Math.min(start, size)
          }
          if (end === undefined) {
            relativeEnd = size
          } else if (end < 0) {
            relativeEnd = Math.max(size + end, 0)
          } else {
            relativeEnd = Math.min(end, size)
          }
          const span = Math.max(relativeEnd - relativeStart, 0)

          const buffer = this[BUFFER]
          const slicedBuffer = buffer.slice(relativeStart, relativeStart + span)
          const blob = new Blob([], { type: arguments[2] })
          blob[BUFFER] = slicedBuffer
          return blob
        }
      }

      Object.defineProperties(Blob.prototype, {
        size: { enumerable: true },
        type: { enumerable: true },
        slice: { enumerable: true }
      })

      Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
        value: 'Blob',
        writable: false,
        enumerable: false,
        configurable: true
      })

      /**
       * fetch-error.js
       *
       * FetchError interface for operational errors
       */

      /**
       * Create FetchError instance
       *
       * @param   String      message      Error message for human
       * @param   String      type         Error type for machine
       * @param   String      systemError  For Node.js system error
       * @return  FetchError
       */
      function FetchError(message, type, systemError) {
        Error.call(this, message)

        this.message = message
        this.type = type

        // when err.type is `system`, err.code contains system error code
        if (systemError) {
          this.code = this.errno = systemError.code
        }

        // hide custom error implementation details from end-users
        Error.captureStackTrace(this, this.constructor)
      }

      FetchError.prototype = Object.create(Error.prototype)
      FetchError.prototype.constructor = FetchError
      FetchError.prototype.name = 'FetchError'

      let convert
      try {
        convert = __nccwpck_require__(2877).convert
      } catch (e) {}

      const INTERNALS = Symbol('Body internals')

      // fix an issue where "PassThrough" isn't a named export for node <10
      const PassThrough = Stream.PassThrough

      /**
       * Body mixin
       *
       * Ref: https://fetch.spec.whatwg.org/#body
       *
       * @param   Stream  body  Readable stream
       * @param   Object  opts  Response options
       * @return  Void
       */
      function Body(body) {
        var _this = this

        var _ref =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : {},
          _ref$size = _ref.size

        let size = _ref$size === undefined ? 0 : _ref$size
        var _ref$timeout = _ref.timeout
        let timeout = _ref$timeout === undefined ? 0 : _ref$timeout

        if (body == null) {
          // body is undefined or null
          body = null
        } else if (isURLSearchParams(body)) {
          // body is a URLSearchParams
          body = Buffer.from(body.toString())
        } else if (isBlob(body));
        else if (Buffer.isBuffer(body));
        else if (
          Object.prototype.toString.call(body) === '[object ArrayBuffer]'
        ) {
          // body is ArrayBuffer
          body = Buffer.from(body)
        } else if (ArrayBuffer.isView(body)) {
          // body is ArrayBufferView
          body = Buffer.from(body.buffer, body.byteOffset, body.byteLength)
        } else if (body instanceof Stream);
        else {
          // none of the above
          // coerce to string then buffer
          body = Buffer.from(String(body))
        }
        this[INTERNALS] = {
          body,
          disturbed: false,
          error: null
        }
        this.size = size
        this.timeout = timeout

        if (body instanceof Stream) {
          body.on('error', function (err) {
            const error =
              err.name === 'AbortError'
                ? err
                : new FetchError(
                    `Invalid response body while trying to fetch ${_this.url}: ${err.message}`,
                    'system',
                    err
                  )
            _this[INTERNALS].error = error
          })
        }
      }

      Body.prototype = {
        get body() {
          return this[INTERNALS].body
        },

        get bodyUsed() {
          return this[INTERNALS].disturbed
        },

        /**
         * Decode response as ArrayBuffer
         *
         * @return  Promise
         */
        arrayBuffer() {
          return consumeBody.call(this).then(function (buf) {
            return buf.buffer.slice(
              buf.byteOffset,
              buf.byteOffset + buf.byteLength
            )
          })
        },

        /**
         * Return raw response as Blob
         *
         * @return Promise
         */
        blob() {
          let ct = (this.headers && this.headers.get('content-type')) || ''
          return consumeBody.call(this).then(function (buf) {
            return Object.assign(
              // Prevent copying
              new Blob([], {
                type: ct.toLowerCase()
              }),
              {
                [BUFFER]: buf
              }
            )
          })
        },

        /**
         * Decode response as json
         *
         * @return  Promise
         */
        json() {
          var _this2 = this

          return consumeBody.call(this).then(function (buffer) {
            try {
              return JSON.parse(buffer.toString())
            } catch (err) {
              return Body.Promise.reject(
                new FetchError(
                  `invalid json response body at ${_this2.url} reason: ${err.message}`,
                  'invalid-json'
                )
              )
            }
          })
        },

        /**
         * Decode response as text
         *
         * @return  Promise
         */
        text() {
          return consumeBody.call(this).then(function (buffer) {
            return buffer.toString()
          })
        },

        /**
         * Decode response as buffer (non-spec api)
         *
         * @return  Promise
         */
        buffer() {
          return consumeBody.call(this)
        },

        /**
         * Decode response as text, while automatically detecting the encoding and
         * trying to decode to UTF-8 (non-spec api)
         *
         * @return  Promise
         */
        textConverted() {
          var _this3 = this

          return consumeBody.call(this).then(function (buffer) {
            return convertBody(buffer, _this3.headers)
          })
        }
      }

      // In browsers, all properties are enumerable.
      Object.defineProperties(Body.prototype, {
        body: { enumerable: true },
        bodyUsed: { enumerable: true },
        arrayBuffer: { enumerable: true },
        blob: { enumerable: true },
        json: { enumerable: true },
        text: { enumerable: true }
      })

      Body.mixIn = function (proto) {
        for (const name of Object.getOwnPropertyNames(Body.prototype)) {
          // istanbul ignore else: future proof
          if (!(name in proto)) {
            const desc = Object.getOwnPropertyDescriptor(Body.prototype, name)
            Object.defineProperty(proto, name, desc)
          }
        }
      }

      /**
       * Consume and convert an entire Body to a Buffer.
       *
       * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
       *
       * @return  Promise
       */
      function consumeBody() {
        var _this4 = this

        if (this[INTERNALS].disturbed) {
          return Body.Promise.reject(
            new TypeError(`body used already for: ${this.url}`)
          )
        }

        this[INTERNALS].disturbed = true

        if (this[INTERNALS].error) {
          return Body.Promise.reject(this[INTERNALS].error)
        }

        let body = this.body

        // body is null
        if (body === null) {
          return Body.Promise.resolve(Buffer.alloc(0))
        }

        // body is blob
        if (isBlob(body)) {
          body = body.stream()
        }

        // body is buffer
        if (Buffer.isBuffer(body)) {
          return Body.Promise.resolve(body)
        }

        // istanbul ignore if: should never happen
        if (!(body instanceof Stream)) {
          return Body.Promise.resolve(Buffer.alloc(0))
        }

        // body is stream
        // get ready to actually consume the body
        let accum = []
        let accumBytes = 0
        let abort = false

        return new Body.Promise(function (resolve, reject) {
          let resTimeout

          // allow timeout on slow response body
          if (_this4.timeout) {
            resTimeout = setTimeout(function () {
              abort = true
              reject(
                new FetchError(
                  `Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`,
                  'body-timeout'
                )
              )
            }, _this4.timeout)
          }

          // handle stream errors
          body.on('error', function (err) {
            if (err.name === 'AbortError') {
              // if the request was aborted, reject with this Error
              abort = true
              reject(err)
            } else {
              // other errors, such as incorrect content-encoding
              reject(
                new FetchError(
                  `Invalid response body while trying to fetch ${_this4.url}: ${err.message}`,
                  'system',
                  err
                )
              )
            }
          })

          body.on('data', function (chunk) {
            if (abort || chunk === null) {
              return
            }

            if (_this4.size && accumBytes + chunk.length > _this4.size) {
              abort = true
              reject(
                new FetchError(
                  `content size at ${_this4.url} over limit: ${_this4.size}`,
                  'max-size'
                )
              )
              return
            }

            accumBytes += chunk.length
            accum.push(chunk)
          })

          body.on('end', function () {
            if (abort) {
              return
            }

            clearTimeout(resTimeout)

            try {
              resolve(Buffer.concat(accum, accumBytes))
            } catch (err) {
              // handle streams that have accumulated too much data (issue #414)
              reject(
                new FetchError(
                  `Could not create Buffer from response body for ${_this4.url}: ${err.message}`,
                  'system',
                  err
                )
              )
            }
          })
        })
      }

      /**
       * Detect buffer encoding and convert to target encoding
       * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
       *
       * @param   Buffer  buffer    Incoming buffer
       * @param   String  encoding  Target encoding
       * @return  String
       */
      function convertBody(buffer, headers) {
        if (typeof convert !== 'function') {
          throw new Error(
            'The package `encoding` must be installed to use the textConverted() function'
          )
        }

        const ct = headers.get('content-type')
        let charset = 'utf-8'
        let res, str

        // header
        if (ct) {
          res = /charset=([^;]*)/i.exec(ct)
        }

        // no charset in content type, peek at response body for at most 1024 bytes
        str = buffer.slice(0, 1024).toString()

        // html5
        if (!res && str) {
          res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str)
        }

        // html4
        if (!res && str) {
          res =
            /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(
              str
            )
          if (!res) {
            res =
              /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(
                str
              )
            if (res) {
              res.pop() // drop last quote
            }
          }

          if (res) {
            res = /charset=(.*)/i.exec(res.pop())
          }
        }

        // xml
        if (!res && str) {
          res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str)
        }

        // found charset
        if (res) {
          charset = res.pop()

          // prevent decode issues when sites use incorrect encoding
          // ref: https://hsivonen.fi/encoding-menu/
          if (charset === 'gb2312' || charset === 'gbk') {
            charset = 'gb18030'
          }
        }

        // turn raw buffers into a single utf-8 buffer
        return convert(buffer, 'UTF-8', charset).toString()
      }

      /**
       * Detect a URLSearchParams object
       * ref: https://github.com/bitinn/node-fetch/issues/296#issuecomment-307598143
       *
       * @param   Object  obj     Object to detect by type or brand
       * @return  String
       */
      function isURLSearchParams(obj) {
        // Duck-typing as a necessary condition.
        if (
          typeof obj !== 'object' ||
          typeof obj.append !== 'function' ||
          typeof obj.delete !== 'function' ||
          typeof obj.get !== 'function' ||
          typeof obj.getAll !== 'function' ||
          typeof obj.has !== 'function' ||
          typeof obj.set !== 'function'
        ) {
          return false
        }

        // Brand-checking and more duck-typing as optional condition.
        return (
          obj.constructor.name === 'URLSearchParams' ||
          Object.prototype.toString.call(obj) === '[object URLSearchParams]' ||
          typeof obj.sort === 'function'
        )
      }

      /**
       * Check if `obj` is a W3C `Blob` object (which `File` inherits from)
       * @param  {*} obj
       * @return {boolean}
       */
      function isBlob(obj) {
        return (
          typeof obj === 'object' &&
          typeof obj.arrayBuffer === 'function' &&
          typeof obj.type === 'string' &&
          typeof obj.stream === 'function' &&
          typeof obj.constructor === 'function' &&
          typeof obj.constructor.name === 'string' &&
          /^(Blob|File)$/.test(obj.constructor.name) &&
          /^(Blob|File)$/.test(obj[Symbol.toStringTag])
        )
      }

      /**
       * Clone body given Res/Req instance
       *
       * @param   Mixed  instance  Response or Request instance
       * @return  Mixed
       */
      function clone(instance) {
        let p1, p2
        let body = instance.body

        // don't allow cloning a used body
        if (instance.bodyUsed) {
          throw new Error('cannot clone body after it is used')
        }

        // check that body is a stream and not form-data object
        // note: we can't clone the form-data object without having it as a dependency
        if (body instanceof Stream && typeof body.getBoundary !== 'function') {
          // tee instance body
          p1 = new PassThrough()
          p2 = new PassThrough()
          body.pipe(p1)
          body.pipe(p2)
          // set instance body to teed body and return the other teed body
          instance[INTERNALS].body = p1
          body = p2
        }

        return body
      }

      /**
       * Performs the operation "extract a `Content-Type` value from |object|" as
       * specified in the specification:
       * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
       *
       * This function assumes that instance.body is present.
       *
       * @param   Mixed  instance  Any options.body input
       */
      function extractContentType(body) {
        if (body === null) {
          // body is null
          return null
        } else if (typeof body === 'string') {
          // body is string
          return 'text/plain;charset=UTF-8'
        } else if (isURLSearchParams(body)) {
          // body is a URLSearchParams
          return 'application/x-www-form-urlencoded;charset=UTF-8'
        } else if (isBlob(body)) {
          // body is blob
          return body.type || null
        } else if (Buffer.isBuffer(body)) {
          // body is buffer
          return null
        } else if (
          Object.prototype.toString.call(body) === '[object ArrayBuffer]'
        ) {
          // body is ArrayBuffer
          return null
        } else if (ArrayBuffer.isView(body)) {
          // body is ArrayBufferView
          return null
        } else if (typeof body.getBoundary === 'function') {
          // detect form data input from form-data module
          return `multipart/form-data;boundary=${body.getBoundary()}`
        } else if (body instanceof Stream) {
          // body is stream
          // can't really do much about this
          return null
        } else {
          // Body constructor defaults other things to string
          return 'text/plain;charset=UTF-8'
        }
      }

      /**
       * The Fetch Standard treats this as if "total bytes" is a property on the body.
       * For us, we have to explicitly get it with a function.
       *
       * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
       *
       * @param   Body    instance   Instance of Body
       * @return  Number?            Number of bytes, or null if not possible
       */
      function getTotalBytes(instance) {
        const body = instance.body

        if (body === null) {
          // body is null
          return 0
        } else if (isBlob(body)) {
          return body.size
        } else if (Buffer.isBuffer(body)) {
          // body is buffer
          return body.length
        } else if (body && typeof body.getLengthSync === 'function') {
          // detect form data input from form-data module
          if (
            (body._lengthRetrievers && body._lengthRetrievers.length == 0) || // 1.x
            (body.hasKnownLength && body.hasKnownLength())
          ) {
            // 2.x
            return body.getLengthSync()
          }
          return null
        } else {
          // body is stream
          return null
        }
      }

      /**
       * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
       *
       * @param   Body    instance   Instance of Body
       * @return  Void
       */
      function writeToStream(dest, instance) {
        const body = instance.body

        if (body === null) {
          // body is null
          dest.end()
        } else if (isBlob(body)) {
          body.stream().pipe(dest)
        } else if (Buffer.isBuffer(body)) {
          // body is buffer
          dest.write(body)
          dest.end()
        } else {
          // body is stream
          body.pipe(dest)
        }
      }

      // expose Promise
      Body.Promise = global.Promise

      /**
       * headers.js
       *
       * Headers class offers convenient helpers
       */

      const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/
      const invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/

      function validateName(name) {
        name = `${name}`
        if (invalidTokenRegex.test(name) || name === '') {
          throw new TypeError(`${name} is not a legal HTTP header name`)
        }
      }

      function validateValue(value) {
        value = `${value}`
        if (invalidHeaderCharRegex.test(value)) {
          throw new TypeError(`${value} is not a legal HTTP header value`)
        }
      }

      /**
       * Find the key in the map object given a header name.
       *
       * Returns undefined if not found.
       *
       * @param   String  name  Header name
       * @return  String|Undefined
       */
      function find(map, name) {
        name = name.toLowerCase()
        for (const key in map) {
          if (key.toLowerCase() === name) {
            return key
          }
        }
        return undefined
      }

      const MAP = Symbol('map')
      class Headers {
        /**
         * Headers class
         *
         * @param   Object  headers  Response headers
         * @return  Void
         */
        constructor() {
          let init =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : undefined

          this[MAP] = Object.create(null)

          if (init instanceof Headers) {
            const rawHeaders = init.raw()
            const headerNames = Object.keys(rawHeaders)

            for (const headerName of headerNames) {
              for (const value of rawHeaders[headerName]) {
                this.append(headerName, value)
              }
            }

            return
          }

          // We don't worry about converting prop to ByteString here as append()
          // will handle it.
          if (init == null);
          else if (typeof init === 'object') {
            const method = init[Symbol.iterator]
            if (method != null) {
              if (typeof method !== 'function') {
                throw new TypeError('Header pairs must be iterable')
              }

              // sequence<sequence<ByteString>>
              // Note: per spec we have to first exhaust the lists then process them
              const pairs = []
              for (const pair of init) {
                if (
                  typeof pair !== 'object' ||
                  typeof pair[Symbol.iterator] !== 'function'
                ) {
                  throw new TypeError('Each header pair must be iterable')
                }
                pairs.push(Array.from(pair))
              }

              for (const pair of pairs) {
                if (pair.length !== 2) {
                  throw new TypeError(
                    'Each header pair must be a name/value tuple'
                  )
                }
                this.append(pair[0], pair[1])
              }
            } else {
              // record<ByteString, ByteString>
              for (const key of Object.keys(init)) {
                const value = init[key]
                this.append(key, value)
              }
            }
          } else {
            throw new TypeError('Provided initializer must be an object')
          }
        }

        /**
         * Return combined header value given name
         *
         * @param   String  name  Header name
         * @return  Mixed
         */
        get(name) {
          name = `${name}`
          validateName(name)
          const key = find(this[MAP], name)
          if (key === undefined) {
            return null
          }

          return this[MAP][key].join(', ')
        }

        /**
         * Iterate over all headers
         *
         * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
         * @param   Boolean   thisArg   `this` context for callback function
         * @return  Void
         */
        forEach(callback) {
          let thisArg =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : undefined

          let pairs = getHeaders(this)
          let i = 0
          while (i < pairs.length) {
            var _pairs$i = pairs[i]
            const name = _pairs$i[0],
              value = _pairs$i[1]

            callback.call(thisArg, value, name, this)
            pairs = getHeaders(this)
            i++
          }
        }

        /**
         * Overwrite header values given name
         *
         * @param   String  name   Header name
         * @param   String  value  Header value
         * @return  Void
         */
        set(name, value) {
          name = `${name}`
          value = `${value}`
          validateName(name)
          validateValue(value)
          const key = find(this[MAP], name)
          this[MAP][key !== undefined ? key : name] = [value]
        }

        /**
         * Append a value onto existing header
         *
         * @param   String  name   Header name
         * @param   String  value  Header value
         * @return  Void
         */
        append(name, value) {
          name = `${name}`
          value = `${value}`
          validateName(name)
          validateValue(value)
          const key = find(this[MAP], name)
          if (key !== undefined) {
            this[MAP][key].push(value)
          } else {
            this[MAP][name] = [value]
          }
        }

        /**
         * Check for header name existence
         *
         * @param   String   name  Header name
         * @return  Boolean
         */
        has(name) {
          name = `${name}`
          validateName(name)
          return find(this[MAP], name) !== undefined
        }

        /**
         * Delete all header values given name
         *
         * @param   String  name  Header name
         * @return  Void
         */
        delete(name) {
          name = `${name}`
          validateName(name)
          const key = find(this[MAP], name)
          if (key !== undefined) {
            delete this[MAP][key]
          }
        }

        /**
         * Return raw headers (non-spec api)
         *
         * @return  Object
         */
        raw() {
          return this[MAP]
        }

        /**
         * Get an iterator on keys.
         *
         * @return  Iterator
         */
        keys() {
          return createHeadersIterator(this, 'key')
        }

        /**
         * Get an iterator on values.
         *
         * @return  Iterator
         */
        values() {
          return createHeadersIterator(this, 'value')
        }

        /**
         * Get an iterator on entries.
         *
         * This is the default iterator of the Headers object.
         *
         * @return  Iterator
         */
        [Symbol.iterator]() {
          return createHeadersIterator(this, 'key+value')
        }
      }
      Headers.prototype.entries = Headers.prototype[Symbol.iterator]

      Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
        value: 'Headers',
        writable: false,
        enumerable: false,
        configurable: true
      })

      Object.defineProperties(Headers.prototype, {
        get: { enumerable: true },
        forEach: { enumerable: true },
        set: { enumerable: true },
        append: { enumerable: true },
        has: { enumerable: true },
        delete: { enumerable: true },
        keys: { enumerable: true },
        values: { enumerable: true },
        entries: { enumerable: true }
      })

      function getHeaders(headers) {
        let kind =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : 'key+value'

        const keys = Object.keys(headers[MAP]).sort()
        return keys.map(
          kind === 'key'
            ? function (k) {
                return k.toLowerCase()
              }
            : kind === 'value'
            ? function (k) {
                return headers[MAP][k].join(', ')
              }
            : function (k) {
                return [k.toLowerCase(), headers[MAP][k].join(', ')]
              }
        )
      }

      const INTERNAL = Symbol('internal')

      function createHeadersIterator(target, kind) {
        const iterator = Object.create(HeadersIteratorPrototype)
        iterator[INTERNAL] = {
          target,
          kind,
          index: 0
        }
        return iterator
      }

      const HeadersIteratorPrototype = Object.setPrototypeOf(
        {
          next() {
            // istanbul ignore if
            if (
              !this ||
              Object.getPrototypeOf(this) !== HeadersIteratorPrototype
            ) {
              throw new TypeError('Value of `this` is not a HeadersIterator')
            }

            var _INTERNAL = this[INTERNAL]
            const target = _INTERNAL.target,
              kind = _INTERNAL.kind,
              index = _INTERNAL.index

            const values = getHeaders(target, kind)
            const len = values.length
            if (index >= len) {
              return {
                value: undefined,
                done: true
              }
            }

            this[INTERNAL].index = index + 1

            return {
              value: values[index],
              done: false
            }
          }
        },
        Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()))
      )

      Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
        value: 'HeadersIterator',
        writable: false,
        enumerable: false,
        configurable: true
      })

      /**
       * Export the Headers object in a form that Node.js can consume.
       *
       * @param   Headers  headers
       * @return  Object
       */
      function exportNodeCompatibleHeaders(headers) {
        const obj = Object.assign({ __proto__: null }, headers[MAP])

        // http.request() only supports string as Host header. This hack makes
        // specifying custom Host header possible.
        const hostHeaderKey = find(headers[MAP], 'Host')
        if (hostHeaderKey !== undefined) {
          obj[hostHeaderKey] = obj[hostHeaderKey][0]
        }

        return obj
      }

      /**
       * Create a Headers object from an object of headers, ignoring those that do
       * not conform to HTTP grammar productions.
       *
       * @param   Object  obj  Object of headers
       * @return  Headers
       */
      function createHeadersLenient(obj) {
        const headers = new Headers()
        for (const name of Object.keys(obj)) {
          if (invalidTokenRegex.test(name)) {
            continue
          }
          if (Array.isArray(obj[name])) {
            for (const val of obj[name]) {
              if (invalidHeaderCharRegex.test(val)) {
                continue
              }
              if (headers[MAP][name] === undefined) {
                headers[MAP][name] = [val]
              } else {
                headers[MAP][name].push(val)
              }
            }
          } else if (!invalidHeaderCharRegex.test(obj[name])) {
            headers[MAP][name] = [obj[name]]
          }
        }
        return headers
      }

      const INTERNALS$1 = Symbol('Response internals')

      // fix an issue where "STATUS_CODES" aren't a named export for node <10
      const STATUS_CODES = http.STATUS_CODES

      /**
       * Response class
       *
       * @param   Stream  body  Readable stream
       * @param   Object  opts  Response options
       * @return  Void
       */
      class Response {
        constructor() {
          let body =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : null
          let opts =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : {}

          Body.call(this, body, opts)

          const status = opts.status || 200
          const headers = new Headers(opts.headers)

          if (body != null && !headers.has('Content-Type')) {
            const contentType = extractContentType(body)
            if (contentType) {
              headers.append('Content-Type', contentType)
            }
          }

          this[INTERNALS$1] = {
            url: opts.url,
            status,
            statusText: opts.statusText || STATUS_CODES[status],
            headers,
            counter: opts.counter
          }
        }

        get url() {
          return this[INTERNALS$1].url || ''
        }

        get status() {
          return this[INTERNALS$1].status
        }

        /**
         * Convenience property representing if the request ended normally
         */
        get ok() {
          return (
            this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300
          )
        }

        get redirected() {
          return this[INTERNALS$1].counter > 0
        }

        get statusText() {
          return this[INTERNALS$1].statusText
        }

        get headers() {
          return this[INTERNALS$1].headers
        }

        /**
         * Clone this response
         *
         * @return  Response
         */
        clone() {
          return new Response(clone(this), {
            url: this.url,
            status: this.status,
            statusText: this.statusText,
            headers: this.headers,
            ok: this.ok,
            redirected: this.redirected
          })
        }
      }

      Body.mixIn(Response.prototype)

      Object.defineProperties(Response.prototype, {
        url: { enumerable: true },
        status: { enumerable: true },
        ok: { enumerable: true },
        redirected: { enumerable: true },
        statusText: { enumerable: true },
        headers: { enumerable: true },
        clone: { enumerable: true }
      })

      Object.defineProperty(Response.prototype, Symbol.toStringTag, {
        value: 'Response',
        writable: false,
        enumerable: false,
        configurable: true
      })

      const INTERNALS$2 = Symbol('Request internals')

      // fix an issue where "format", "parse" aren't a named export for node <10
      const parse_url = Url.parse
      const format_url = Url.format

      const streamDestructionSupported = 'destroy' in Stream.Readable.prototype

      /**
       * Check if a value is an instance of Request.
       *
       * @param   Mixed   input
       * @return  Boolean
       */
      function isRequest(input) {
        return (
          typeof input === 'object' && typeof input[INTERNALS$2] === 'object'
        )
      }

      function isAbortSignal(signal) {
        const proto =
          signal && typeof signal === 'object' && Object.getPrototypeOf(signal)
        return !!(proto && proto.constructor.name === 'AbortSignal')
      }

      /**
       * Request class
       *
       * @param   Mixed   input  Url or Request instance
       * @param   Object  init   Custom options
       * @return  Void
       */
      class Request {
        constructor(input) {
          let init =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : {}

          let parsedURL

          // normalize input
          if (!isRequest(input)) {
            if (input && input.href) {
              // in order to support Node.js' Url objects; though WHATWG's URL objects
              // will fall into this branch also (since their `toString()` will return
              // `href` property anyway)
              parsedURL = parse_url(input.href)
            } else {
              // coerce input to a string before attempting to parse
              parsedURL = parse_url(`${input}`)
            }
            input = {}
          } else {
            parsedURL = parse_url(input.url)
          }

          let method = init.method || input.method || 'GET'
          method = method.toUpperCase()

          if (
            (init.body != null || (isRequest(input) && input.body !== null)) &&
            (method === 'GET' || method === 'HEAD')
          ) {
            throw new TypeError('Request with GET/HEAD method cannot have body')
          }

          let inputBody =
            init.body != null
              ? init.body
              : isRequest(input) && input.body !== null
              ? clone(input)
              : null

          Body.call(this, inputBody, {
            timeout: init.timeout || input.timeout || 0,
            size: init.size || input.size || 0
          })

          const headers = new Headers(init.headers || input.headers || {})

          if (inputBody != null && !headers.has('Content-Type')) {
            const contentType = extractContentType(inputBody)
            if (contentType) {
              headers.append('Content-Type', contentType)
            }
          }

          let signal = isRequest(input) ? input.signal : null
          if ('signal' in init) signal = init.signal

          if (signal != null && !isAbortSignal(signal)) {
            throw new TypeError(
              'Expected signal to be an instanceof AbortSignal'
            )
          }

          this[INTERNALS$2] = {
            method,
            redirect: init.redirect || input.redirect || 'follow',
            headers,
            parsedURL,
            signal
          }

          // node-fetch-only options
          this.follow =
            init.follow !== undefined
              ? init.follow
              : input.follow !== undefined
              ? input.follow
              : 20
          this.compress =
            init.compress !== undefined
              ? init.compress
              : input.compress !== undefined
              ? input.compress
              : true
          this.counter = init.counter || input.counter || 0
          this.agent = init.agent || input.agent
        }

        get method() {
          return this[INTERNALS$2].method
        }

        get url() {
          return format_url(this[INTERNALS$2].parsedURL)
        }

        get headers() {
          return this[INTERNALS$2].headers
        }

        get redirect() {
          return this[INTERNALS$2].redirect
        }

        get signal() {
          return this[INTERNALS$2].signal
        }

        /**
         * Clone this request
         *
         * @return  Request
         */
        clone() {
          return new Request(this)
        }
      }

      Body.mixIn(Request.prototype)

      Object.defineProperty(Request.prototype, Symbol.toStringTag, {
        value: 'Request',
        writable: false,
        enumerable: false,
        configurable: true
      })

      Object.defineProperties(Request.prototype, {
        method: { enumerable: true },
        url: { enumerable: true },
        headers: { enumerable: true },
        redirect: { enumerable: true },
        clone: { enumerable: true },
        signal: { enumerable: true }
      })

      /**
       * Convert a Request to Node.js http request options.
       *
       * @param   Request  A Request instance
       * @return  Object   The options object to be passed to http.request
       */
      function getNodeRequestOptions(request) {
        const parsedURL = request[INTERNALS$2].parsedURL
        const headers = new Headers(request[INTERNALS$2].headers)

        // fetch step 1.3
        if (!headers.has('Accept')) {
          headers.set('Accept', '*/*')
        }

        // Basic fetch
        if (!parsedURL.protocol || !parsedURL.hostname) {
          throw new TypeError('Only absolute URLs are supported')
        }

        if (!/^https?:$/.test(parsedURL.protocol)) {
          throw new TypeError('Only HTTP(S) protocols are supported')
        }

        if (
          request.signal &&
          request.body instanceof Stream.Readable &&
          !streamDestructionSupported
        ) {
          throw new Error(
            'Cancellation of streamed requests with AbortSignal is not supported in node < 8'
          )
        }

        // HTTP-network-or-cache fetch steps 2.4-2.7
        let contentLengthValue = null
        if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
          contentLengthValue = '0'
        }
        if (request.body != null) {
          const totalBytes = getTotalBytes(request)
          if (typeof totalBytes === 'number') {
            contentLengthValue = String(totalBytes)
          }
        }
        if (contentLengthValue) {
          headers.set('Content-Length', contentLengthValue)
        }

        // HTTP-network-or-cache fetch step 2.11
        if (!headers.has('User-Agent')) {
          headers.set(
            'User-Agent',
            'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)'
          )
        }

        // HTTP-network-or-cache fetch step 2.15
        if (request.compress && !headers.has('Accept-Encoding')) {
          headers.set('Accept-Encoding', 'gzip,deflate')
        }

        let agent = request.agent
        if (typeof agent === 'function') {
          agent = agent(parsedURL)
        }

        if (!headers.has('Connection') && !agent) {
          headers.set('Connection', 'close')
        }

        // HTTP-network fetch step 4.2
        // chunked encoding is handled by Node.js

        return Object.assign({}, parsedURL, {
          method: request.method,
          headers: exportNodeCompatibleHeaders(headers),
          agent
        })
      }

      /**
       * abort-error.js
       *
       * AbortError interface for cancelled requests
       */

      /**
       * Create AbortError instance
       *
       * @param   String      message      Error message for human
       * @return  AbortError
       */
      function AbortError(message) {
        Error.call(this, message)

        this.type = 'aborted'
        this.message = message

        // hide custom error implementation details from end-users
        Error.captureStackTrace(this, this.constructor)
      }

      AbortError.prototype = Object.create(Error.prototype)
      AbortError.prototype.constructor = AbortError
      AbortError.prototype.name = 'AbortError'

      // fix an issue where "PassThrough", "resolve" aren't a named export for node <10
      const PassThrough$1 = Stream.PassThrough
      const resolve_url = Url.resolve

      /**
       * Fetch function
       *
       * @param   Mixed    url   Absolute url or Request instance
       * @param   Object   opts  Fetch options
       * @return  Promise
       */
      function fetch(url, opts) {
        // allow custom promise
        if (!fetch.Promise) {
          throw new Error(
            'native promise missing, set fetch.Promise to your favorite alternative'
          )
        }

        Body.Promise = fetch.Promise

        // wrap http.request into fetch
        return new fetch.Promise(function (resolve, reject) {
          // build request object
          const request = new Request(url, opts)
          const options = getNodeRequestOptions(request)

          const send = (options.protocol === 'https:' ? https : http).request
          const signal = request.signal

          let response = null

          const abort = function abort() {
            let error = new AbortError('The user aborted a request.')
            reject(error)
            if (request.body && request.body instanceof Stream.Readable) {
              request.body.destroy(error)
            }
            if (!response || !response.body) return
            response.body.emit('error', error)
          }

          if (signal && signal.aborted) {
            abort()
            return
          }

          const abortAndFinalize = function abortAndFinalize() {
            abort()
            finalize()
          }

          // send request
          const req = send(options)
          let reqTimeout

          if (signal) {
            signal.addEventListener('abort', abortAndFinalize)
          }

          function finalize() {
            req.abort()
            if (signal) signal.removeEventListener('abort', abortAndFinalize)
            clearTimeout(reqTimeout)
          }

          if (request.timeout) {
            req.once('socket', function (socket) {
              reqTimeout = setTimeout(function () {
                reject(
                  new FetchError(
                    `network timeout at: ${request.url}`,
                    'request-timeout'
                  )
                )
                finalize()
              }, request.timeout)
            })
          }

          req.on('error', function (err) {
            reject(
              new FetchError(
                `request to ${request.url} failed, reason: ${err.message}`,
                'system',
                err
              )
            )
            finalize()
          })

          req.on('response', function (res) {
            clearTimeout(reqTimeout)

            const headers = createHeadersLenient(res.headers)

            // HTTP fetch step 5
            if (fetch.isRedirect(res.statusCode)) {
              // HTTP fetch step 5.2
              const location = headers.get('Location')

              // HTTP fetch step 5.3
              const locationURL =
                location === null ? null : resolve_url(request.url, location)

              // HTTP fetch step 5.5
              switch (request.redirect) {
                case 'error':
                  reject(
                    new FetchError(
                      `uri requested responds with a redirect, redirect mode is set to error: ${request.url}`,
                      'no-redirect'
                    )
                  )
                  finalize()
                  return
                case 'manual':
                  // node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
                  if (locationURL !== null) {
                    // handle corrupted header
                    try {
                      headers.set('Location', locationURL)
                    } catch (err) {
                      // istanbul ignore next: nodejs server prevent invalid response headers, we can't test this through normal request
                      reject(err)
                    }
                  }
                  break
                case 'follow':
                  // HTTP-redirect fetch step 2
                  if (locationURL === null) {
                    break
                  }

                  // HTTP-redirect fetch step 5
                  if (request.counter >= request.follow) {
                    reject(
                      new FetchError(
                        `maximum redirect reached at: ${request.url}`,
                        'max-redirect'
                      )
                    )
                    finalize()
                    return
                  }

                  // HTTP-redirect fetch step 6 (counter increment)
                  // Create a new Request object.
                  const requestOpts = {
                    headers: new Headers(request.headers),
                    follow: request.follow,
                    counter: request.counter + 1,
                    agent: request.agent,
                    compress: request.compress,
                    method: request.method,
                    body: request.body,
                    signal: request.signal,
                    timeout: request.timeout,
                    size: request.size
                  }

                  // HTTP-redirect fetch step 9
                  if (
                    res.statusCode !== 303 &&
                    request.body &&
                    getTotalBytes(request) === null
                  ) {
                    reject(
                      new FetchError(
                        'Cannot follow redirect with body being a readable stream',
                        'unsupported-redirect'
                      )
                    )
                    finalize()
                    return
                  }

                  // HTTP-redirect fetch step 11
                  if (
                    res.statusCode === 303 ||
                    ((res.statusCode === 301 || res.statusCode === 302) &&
                      request.method === 'POST')
                  ) {
                    requestOpts.method = 'GET'
                    requestOpts.body = undefined
                    requestOpts.headers.delete('content-length')
                  }

                  // HTTP-redirect fetch step 15
                  resolve(fetch(new Request(locationURL, requestOpts)))
                  finalize()
                  return
              }
            }

            // prepare response
            res.once('end', function () {
              if (signal) signal.removeEventListener('abort', abortAndFinalize)
            })
            let body = res.pipe(new PassThrough$1())

            const response_options = {
              url: request.url,
              status: res.statusCode,
              statusText: res.statusMessage,
              headers: headers,
              size: request.size,
              timeout: request.timeout,
              counter: request.counter
            }

            // HTTP-network fetch step 12.1.1.3
            const codings = headers.get('Content-Encoding')

            // HTTP-network fetch step 12.1.1.4: handle content codings

            // in following scenarios we ignore compression support
            // 1. compression support is disabled
            // 2. HEAD request
            // 3. no Content-Encoding header
            // 4. no content response (204)
            // 5. content not modified response (304)
            if (
              !request.compress ||
              request.method === 'HEAD' ||
              codings === null ||
              res.statusCode === 204 ||
              res.statusCode === 304
            ) {
              response = new Response(body, response_options)
              resolve(response)
              return
            }

            // For Node v6+
            // Be less strict when decoding compressed responses, since sometimes
            // servers send slightly invalid responses that are still accepted
            // by common browsers.
            // Always using Z_SYNC_FLUSH is what cURL does.
            const zlibOptions = {
              flush: zlib.Z_SYNC_FLUSH,
              finishFlush: zlib.Z_SYNC_FLUSH
            }

            // for gzip
            if (codings == 'gzip' || codings == 'x-gzip') {
              body = body.pipe(zlib.createGunzip(zlibOptions))
              response = new Response(body, response_options)
              resolve(response)
              return
            }

            // for deflate
            if (codings == 'deflate' || codings == 'x-deflate') {
              // handle the infamous raw deflate response from old servers
              // a hack for old IIS and Apache servers
              const raw = res.pipe(new PassThrough$1())
              raw.once('data', function (chunk) {
                // see http://stackoverflow.com/questions/37519828
                if ((chunk[0] & 0x0f) === 0x08) {
                  body = body.pipe(zlib.createInflate())
                } else {
                  body = body.pipe(zlib.createInflateRaw())
                }
                response = new Response(body, response_options)
                resolve(response)
              })
              return
            }

            // for br
            if (
              codings == 'br' &&
              typeof zlib.createBrotliDecompress === 'function'
            ) {
              body = body.pipe(zlib.createBrotliDecompress())
              response = new Response(body, response_options)
              resolve(response)
              return
            }

            // otherwise, use response as-is
            response = new Response(body, response_options)
            resolve(response)
          })

          writeToStream(req, request)
        })
      }
      /**
       * Redirect code matching
       *
       * @param   Number   code  Status code
       * @return  Boolean
       */
      fetch.isRedirect = function (code) {
        return (
          code === 301 ||
          code === 302 ||
          code === 303 ||
          code === 307 ||
          code === 308
        )
      }

      // expose Promise
      fetch.Promise = global.Promise

      module.exports = exports = fetch
      Object.defineProperty(exports, '__esModule', { value: true })
      exports.default = exports
      exports.Headers = Headers
      exports.Request = Request
      exports.Response = Response
      exports.FetchError = FetchError

      /***/
    },

    /***/ 2371: /***/ (module) => {
      'use strict'

      /**
       * Returns a `Buffer` instance from the given data URI `uri`.
       *
       * @param {String} uri Data URI to turn into a Buffer instance
       * @return {Buffer} Buffer instance from Data URI
       * @api public
       */
      function dataUriToBuffer(uri) {
        if (!/^data:/i.test(uri)) {
          throw new TypeError(
            '`uri` does not appear to be a Data URI (must begin with "data:")'
          )
        }
        // strip newlines
        uri = uri.replace(/\r?\n/g, '')
        // split the URI up into the "metadata" and the "data" portions
        const firstComma = uri.indexOf(',')
        if (firstComma === -1 || firstComma <= 4) {
          throw new TypeError('malformed data: URI')
        }
        // remove the "data:" scheme and parse the metadata
        const meta = uri.substring(5, firstComma).split(';')
        let charset = ''
        let base64 = false
        const type = meta[0] || 'text/plain'
        let typeFull = type
        for (let i = 1; i < meta.length; i++) {
          if (meta[i] === 'base64') {
            base64 = true
          } else {
            typeFull += `;${meta[i]}`
            if (meta[i].indexOf('charset=') === 0) {
              charset = meta[i].substring(8)
            }
          }
        }
        // defaults to US-ASCII only if type is not provided
        if (!meta[0] && !charset.length) {
          typeFull += ';charset=US-ASCII'
          charset = 'US-ASCII'
        }
        // get the encoded data portion and decode URI-encoded chars
        const encoding = base64 ? 'base64' : 'ascii'
        const data = unescape(uri.substring(firstComma + 1))
        const buffer = Buffer.from(data, encoding)
        // set `.type` and `.typeFull` properties to MIME type
        buffer.type = type
        buffer.typeFull = typeFull
        // set the `.charset` property
        buffer.charset = charset
        return buffer
      }
      module.exports = dataUriToBuffer
      //# sourceMappingURL=index.js.map

      /***/
    },

    /***/ 8932: /***/ (__unused_webpack_module, exports) => {
      'use strict'

      Object.defineProperty(exports, '__esModule', { value: true })

      class Deprecation extends Error {
        constructor(message) {
          super(message) // Maintains proper stack trace (only available on V8)

          /* istanbul ignore next */

          if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor)
          }

          this.name = 'Deprecation'
        }
      }

      exports.Deprecation = Deprecation

      /***/
    },

    /***/ 7117: /***/ (module) => {
      module.exports = function (glob, opts) {
        if (typeof glob !== 'string') {
          throw new TypeError('Expected a string')
        }

        var str = String(glob)

        // The regexp we are building, as a string.
        var reStr = ''

        // Whether we are matching so called "extended" globs (like bash) and should
        // support single character matching, matching ranges of characters, group
        // matching, etc.
        var extended = opts ? !!opts.extended : false

        // When globstar is _false_ (default), '/foo/*' is translated a regexp like
        // '^\/foo\/.*$' which will match any string beginning with '/foo/'
        // When globstar is _true_, '/foo/*' is translated to regexp like
        // '^\/foo\/[^/]*$' which will match any string beginning with '/foo/' BUT
        // which does not have a '/' to the right of it.
        // E.g. with '/foo/*' these will match: '/foo/bar', '/foo/bar.txt' but
        // these will not '/foo/bar/baz', '/foo/bar/baz.txt'
        // Lastely, when globstar is _true_, '/foo/**' is equivelant to '/foo/*' when
        // globstar is _false_
        var globstar = opts ? !!opts.globstar : false

        // If we are doing extended matching, this boolean is true when we are inside
        // a group (eg {*.html,*.js}), and false otherwise.
        var inGroup = false

        // RegExp flags (eg "i" ) to pass in to RegExp constructor.
        var flags = opts && typeof opts.flags === 'string' ? opts.flags : ''

        var c
        for (var i = 0, len = str.length; i < len; i++) {
          c = str[i]

          switch (c) {
            case '/':
            case '$':
            case '^':
            case '+':
            case '.':
            case '(':
            case ')':
            case '=':
            case '!':
            case '|':
              reStr += '\\' + c
              break

            case '?':
              if (extended) {
                reStr += '.'
                break
              }

            case '[':
            case ']':
              if (extended) {
                reStr += c
                break
              }

            case '{':
              if (extended) {
                inGroup = true
                reStr += '('
                break
              }

            case '}':
              if (extended) {
                inGroup = false
                reStr += ')'
                break
              }

            case ',':
              if (inGroup) {
                reStr += '|'
                break
              }
              reStr += '\\' + c
              break

            case '*':
              // Move over all consecutive "*"'s.
              // Also store the previous and next characters
              var prevChar = str[i - 1]
              var starCount = 1
              while (str[i + 1] === '*') {
                starCount++
                i++
              }
              var nextChar = str[i + 1]

              if (!globstar) {
                // globstar is disabled, so treat any number of "*" as one
                reStr += '.*'
              } else {
                // globstar is enabled, so determine if this is a globstar segment
                var isGlobstar =
                  starCount > 1 && // multiple "*"'s
                  (prevChar === '/' || prevChar === undefined) && // from the start of the segment
                  (nextChar === '/' || nextChar === undefined) // to the end of the segment

                if (isGlobstar) {
                  // it's a globstar, so match zero or more path segments
                  reStr += '((?:[^/]*(?:/|$))*)'
                  i++ // move over the "/"
                } else {
                  // it's not a globstar, so only match one path segment
                  reStr += '([^/]*)'
                }
              }
              break

            default:
              reStr += c
          }
        }

        // When regexp 'g' flag is specified don't
        // constrain the regular expression with ^ & $
        if (!flags || !~flags.indexOf('g')) {
          reStr = '^' + reStr + '$'
        }

        return new RegExp(reStr, flags)
      }

      /***/
    },

    /***/ 5382: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      'use strict'

      const fs = __nccwpck_require__(5747)
      const sections = __nccwpck_require__(1762)
      const defaults = __nccwpck_require__(5256)
      const stringify = __nccwpck_require__(905)
      const excerpt = __nccwpck_require__(3919)
      const engines = __nccwpck_require__(3190)
      const toFile = __nccwpck_require__(9652)
      const parse = __nccwpck_require__(9368)
      const utils = __nccwpck_require__(7405)

      /**
       * Takes a string or object with `content` property, extracts
       * and parses front-matter from the string, then returns an object
       * with `data`, `content` and other [useful properties](#returned-object).
       *
       * ```js
       * const matter = require('gray-matter');
       * console.log(matter('---\ntitle: Home\n---\nOther stuff'));
       * //=> { data: { title: 'Home'}, content: 'Other stuff' }
       * ```
       * @param {Object|String} `input` String, or object with `content` string
       * @param {Object} `options`
       * @return {Object}
       * @api public
       */

      function matter(input, options) {
        if (input === '') {
          return { data: {}, content: input, excerpt: '', orig: input }
        }

        let file = toFile(input)
        const cached = matter.cache[file.content]

        if (!options) {
          if (cached) {
            file = Object.assign({}, cached)
            file.orig = cached.orig
            return file
          }

          // only cache if there are no options passed. if we cache when options
          // are passed, we would need to also cache options values, which would
          // negate any performance benefits of caching
          matter.cache[file.content] = file
        }

        return parseMatter(file, options)
      }

      /**
       * Parse front matter
       */

      function parseMatter(file, options) {
        const opts = defaults(options)
        const open = opts.delimiters[0]
        const close = '\n' + opts.delimiters[1]
        let str = file.content

        if (opts.language) {
          file.language = opts.language
        }

        // get the length of the opening delimiter
        const openLen = open.length
        if (!utils.startsWith(str, open, openLen)) {
          excerpt(file, opts)
          return file
        }

        // if the next character after the opening delimiter is
        // a character from the delimiter, then it's not a front-
        // matter delimiter
        if (str.charAt(openLen) === open.slice(-1)) {
          return file
        }

        // strip the opening delimiter
        str = str.slice(openLen)
        const len = str.length

        // use the language defined after first delimiter, if it exists
        const language = matter.language(str, opts)
        if (language.name) {
          file.language = language.name
          str = str.slice(language.raw.length)
        }

        // get the index of the closing delimiter
        let closeIndex = str.indexOf(close)
        if (closeIndex === -1) {
          closeIndex = len
        }

        // get the raw front-matter block
        file.matter = str.slice(0, closeIndex)

        const block = file.matter.replace(/^\s*#[^\n]+/gm, '').trim()
        if (block === '') {
          file.isEmpty = true
          file.empty = file.content
          file.data = {}
        } else {
          // create file.data by parsing the raw file.matter block
          file.data = parse(file.language, file.matter, opts)
        }

        // update file.content
        if (closeIndex === len) {
          file.content = ''
        } else {
          file.content = str.slice(closeIndex + close.length)
          if (file.content[0] === '\r') {
            file.content = file.content.slice(1)
          }
          if (file.content[0] === '\n') {
            file.content = file.content.slice(1)
          }
        }

        excerpt(file, opts)

        if (opts.sections === true || typeof opts.section === 'function') {
          sections(file, opts.section)
        }
        return file
      }

      /**
       * Expose engines
       */

      matter.engines = engines

      /**
       * Stringify an object to YAML or the specified language, and
       * append it to the given string. By default, only YAML and JSON
       * can be stringified. See the [engines](#engines) section to learn
       * how to stringify other languages.
       *
       * ```js
       * console.log(matter.stringify('foo bar baz', {title: 'Home'}));
       * // results in:
       * // ---
       * // title: Home
       * // ---
       * // foo bar baz
       * ```
       * @param {String|Object} `file` The content string to append to stringified front-matter, or a file object with `file.content` string.
       * @param {Object} `data` Front matter to stringify.
       * @param {Object} `options` [Options](#options) to pass to gray-matter and [js-yaml].
       * @return {String} Returns a string created by wrapping stringified yaml with delimiters, and appending that to the given string.
       * @api public
       */

      matter.stringify = function (file, data, options) {
        if (typeof file === 'string') file = matter(file, options)
        return stringify(file, data, options)
      }

      /**
       * Synchronously read a file from the file system and parse
       * front matter. Returns the same object as the [main function](#matter).
       *
       * ```js
       * const file = matter.read('./content/blog-post.md');
       * ```
       * @param {String} `filepath` file path of the file to read.
       * @param {Object} `options` [Options](#options) to pass to gray-matter.
       * @return {Object} Returns [an object](#returned-object) with `data` and `content`
       * @api public
       */

      matter.read = function (filepath, options) {
        const str = fs.readFileSync(filepath, 'utf8')
        const file = matter(str, options)
        file.path = filepath
        return file
      }

      /**
       * Returns true if the given `string` has front matter.
       * @param  {String} `string`
       * @param  {Object} `options`
       * @return {Boolean} True if front matter exists.
       * @api public
       */

      matter.test = function (str, options) {
        return utils.startsWith(str, defaults(options).delimiters[0])
      }

      /**
       * Detect the language to use, if one is defined after the
       * first front-matter delimiter.
       * @param  {String} `string`
       * @param  {Object} `options`
       * @return {Object} Object with `raw` (actual language string), and `name`, the language with whitespace trimmed
       */

      matter.language = function (str, options) {
        const opts = defaults(options)
        const open = opts.delimiters[0]

        if (matter.test(str)) {
          str = str.slice(open.length)
        }

        const language = str.slice(0, str.search(/\r?\n/))
        return {
          raw: language,
          name: language ? language.trim() : ''
        }
      }

      /**
       * Expose `matter`
       */

      matter.cache = {}
      matter.clearCache = function () {
        matter.cache = {}
      }
      module.exports = matter

      /***/
    },

    /***/ 5256: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      'use strict'

      const engines = __nccwpck_require__(3190)
      const utils = __nccwpck_require__(7405)

      module.exports = function (options) {
        const opts = Object.assign({}, options)

        // ensure that delimiters are an array
        opts.delimiters = utils.arrayify(
          opts.delims || opts.delimiters || '---'
        )
        if (opts.delimiters.length === 1) {
          opts.delimiters.push(opts.delimiters[0])
        }

        opts.language = (opts.language || opts.lang || 'yaml').toLowerCase()
        opts.engines = Object.assign({}, engines, opts.parsers, opts.engines)
        return opts
      }

      /***/
    },

    /***/ 7669: /***/ (module) => {
      'use strict'

      module.exports = function (name, options) {
        let engine = options.engines[name] || options.engines[aliase(name)]
        if (typeof engine === 'undefined') {
          throw new Error('gray-matter engine "' + name + '" is not registered')
        }
        if (typeof engine === 'function') {
          engine = { parse: engine }
        }
        return engine
      }

      function aliase(name) {
        switch (name.toLowerCase()) {
          case 'js':
          case 'javascript':
            return 'javascript'
          case 'coffee':
          case 'coffeescript':
          case 'cson':
            return 'coffee'
          case 'yaml':
          case 'yml':
            return 'yaml'
          default: {
            return name
          }
        }
      }

      /***/
    },

    /***/ 3190: /***/ (module, exports, __nccwpck_require__) => {
      'use strict'

      const yaml = __nccwpck_require__(1917)

      /**
       * Default engines
       */

      const engines = (exports = module.exports)

      /**
       * YAML
       */

      engines.yaml = {
        parse: yaml.safeLoad.bind(yaml),
        stringify: yaml.safeDump.bind(yaml)
      }

      /**
       * JSON
       */

      engines.json = {
        parse: JSON.parse.bind(JSON),
        stringify: function (obj, options) {
          const opts = Object.assign({ replacer: null, space: 2 }, options)
          return JSON.stringify(obj, opts.replacer, opts.space)
        }
      }

      /**
       * JavaScript
       */

      engines.javascript = {
        parse: function parse(str, options, wrap) {
          /* eslint no-eval: 0 */
          try {
            if (wrap !== false) {
              str = '(function() {\nreturn ' + str.trim() + ';\n}());'
            }
            return eval(str) || {}
          } catch (err) {
            if (
              wrap !== false &&
              /(unexpected|identifier)/i.test(err.message)
            ) {
              return parse(str, options, false)
            }
            throw new SyntaxError(err)
          }
        },
        stringify: function () {
          throw new Error('stringifying JavaScript is not supported')
        }
      }

      /***/
    },

    /***/ 3919: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      'use strict'

      const defaults = __nccwpck_require__(5256)

      module.exports = function (file, options) {
        const opts = defaults(options)

        if (file.data == null) {
          file.data = {}
        }

        if (typeof opts.excerpt === 'function') {
          return opts.excerpt(file, opts)
        }

        const sep = file.data.excerpt_separator || opts.excerpt_separator
        if (sep == null && (opts.excerpt === false || opts.excerpt == null)) {
          return file
        }

        const delimiter =
          typeof opts.excerpt === 'string'
            ? opts.excerpt
            : sep || opts.delimiters[0]

        // if enabled, get the excerpt defined after front-matter
        const idx = file.content.indexOf(delimiter)
        if (idx !== -1) {
          file.excerpt = file.content.slice(0, idx)
        }

        return file
      }

      /***/
    },

    /***/ 9368: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      'use strict'

      const getEngine = __nccwpck_require__(7669)
      const defaults = __nccwpck_require__(5256)

      module.exports = function (language, str, options) {
        const opts = defaults(options)
        const engine = getEngine(language, opts)
        if (typeof engine.parse !== 'function') {
          throw new TypeError(
            'expected "' + language + '.parse" to be a function'
          )
        }
        return engine.parse(str, opts)
      }

      /***/
    },

    /***/ 905: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      'use strict'

      const typeOf = __nccwpck_require__(6961)
      const getEngine = __nccwpck_require__(7669)
      const defaults = __nccwpck_require__(5256)

      module.exports = function (file, data, options) {
        if (data == null && options == null) {
          switch (typeOf(file)) {
            case 'object':
              data = file.data
              options = {}
              break
            case 'string':
              return file
            default: {
              throw new TypeError('expected file to be a string or object')
            }
          }
        }

        const str = file.content
        const opts = defaults(options)
        if (data == null) {
          if (!opts.data) return file
          data = opts.data
        }

        const language = file.language || opts.language
        const engine = getEngine(language, opts)
        if (typeof engine.stringify !== 'function') {
          throw new TypeError(
            'expected "' + language + '.stringify" to be a function'
          )
        }

        data = Object.assign({}, file.data, data)
        const open = opts.delimiters[0]
        const close = opts.delimiters[1]
        const matter = engine.stringify(data, options).trim()
        let buf = ''

        if (matter !== '{}') {
          buf = newline(open) + newline(matter) + newline(close)
        }

        if (typeof file.excerpt === 'string' && file.excerpt !== '') {
          if (str.indexOf(file.excerpt.trim()) === -1) {
            buf += newline(file.excerpt) + newline(close)
          }
        }

        return buf + newline(str)
      }

      function newline(str) {
        return str.slice(-1) !== '\n' ? str + '\n' : str
      }

      /***/
    },

    /***/ 9652: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      'use strict'

      const typeOf = __nccwpck_require__(6961)
      const stringify = __nccwpck_require__(905)
      const utils = __nccwpck_require__(7405)

      /**
       * Normalize the given value to ensure an object is returned
       * with the expected properties.
       */

      module.exports = function (file) {
        if (typeOf(file) !== 'object') {
          file = { content: file }
        }

        if (typeOf(file.data) !== 'object') {
          file.data = {}
        }

        // if file was passed as an object, ensure that
        // "file.content" is set
        if (file.contents && file.content == null) {
          file.content = file.contents
        }

        // set non-enumerable properties on the file object
        utils.define(file, 'orig', utils.toBuffer(file.content))
        utils.define(file, 'language', file.language || '')
        utils.define(file, 'matter', file.matter || '')
        utils.define(file, 'stringify', function (data, options) {
          if (options && options.language) {
            file.language = options.language
          }
          return stringify(file, data, options)
        })

        // strip BOM and ensure that "file.content" is a string
        file.content = utils.toString(file.content)
        file.isEmpty = false
        file.excerpt = ''
        return file
      }

      /***/
    },

    /***/ 7405: /***/ (
      __unused_webpack_module,
      exports,
      __nccwpck_require__
    ) => {
      'use strict'

      const stripBom = __nccwpck_require__(6550)
      const typeOf = __nccwpck_require__(6961)

      exports.define = function (obj, key, val) {
        Reflect.defineProperty(obj, key, {
          enumerable: false,
          configurable: true,
          writable: true,
          value: val
        })
      }

      /**
       * Returns true if `val` is a buffer
       */

      exports.isBuffer = function (val) {
        return typeOf(val) === 'buffer'
      }

      /**
       * Returns true if `val` is an object
       */

      exports.isObject = function (val) {
        return typeOf(val) === 'object'
      }

      /**
       * Cast `input` to a buffer
       */

      exports.toBuffer = function (input) {
        return typeof input === 'string' ? Buffer.from(input) : input
      }

      /**
       * Cast `val` to a string.
       */

      exports.toString = function (input) {
        if (exports.isBuffer(input)) return stripBom(String(input))
        if (typeof input !== 'string') {
          throw new TypeError('expected input to be a string or buffer')
        }
        return stripBom(input)
      }

      /**
       * Cast `val` to an array.
       */

      exports.arrayify = function (val) {
        return val ? (Array.isArray(val) ? val : [val]) : []
      }

      /**
       * Returns true if `str` starts with `substr`.
       */

      exports.startsWith = function (str, substr, len) {
        if (typeof len !== 'number') len = substr.length
        return str.slice(0, len) === substr
      }

      /***/
    },

    /***/ 3287: /***/ (__unused_webpack_module, exports) => {
      'use strict'

      Object.defineProperty(exports, '__esModule', { value: true })

      /*!
       * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
       *
       * Copyright (c) 2014-2017, Jon Schlinkert.
       * Released under the MIT License.
       */

      function isObject(o) {
        return Object.prototype.toString.call(o) === '[object Object]'
      }

      function isPlainObject(o) {
        var ctor, prot

        if (isObject(o) === false) return false

        // If has modified constructor
        ctor = o.constructor
        if (ctor === undefined) return true

        // If has modified prototype
        prot = ctor.prototype
        if (isObject(prot) === false) return false

        // If constructor does not have an Object-specific method
        if (prot.hasOwnProperty('isPrototypeOf') === false) {
          return false
        }

        // Most likely a plain Object
        return true
      }

      exports.isPlainObject = isPlainObject

      /***/
    },

    /***/ 1917: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      'use strict'

      var yaml = __nccwpck_require__(916)

      module.exports = yaml

      /***/
    },

    /***/ 916: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      'use strict'

      var loader = __nccwpck_require__(5190)
      var dumper = __nccwpck_require__(3034)

      function deprecated(name) {
        return function () {
          throw new Error(
            'Function ' + name + ' is deprecated and cannot be used.'
          )
        }
      }

      module.exports.Type = __nccwpck_require__(967)
      module.exports.Schema = __nccwpck_require__(6514)
      module.exports.FAILSAFE_SCHEMA = __nccwpck_require__(6037)
      module.exports.JSON_SCHEMA = __nccwpck_require__(1571)
      module.exports.CORE_SCHEMA = __nccwpck_require__(2183)
      module.exports.DEFAULT_SAFE_SCHEMA = __nccwpck_require__(8949)
      module.exports.DEFAULT_FULL_SCHEMA = __nccwpck_require__(6874)
      module.exports.load = loader.load
      module.exports.loadAll = loader.loadAll
      module.exports.safeLoad = loader.safeLoad
      module.exports.safeLoadAll = loader.safeLoadAll
      module.exports.dump = dumper.dump
      module.exports.safeDump = dumper.safeDump
      module.exports.YAMLException = __nccwpck_require__(5199)

      // Deprecated schema names from JS-YAML 2.0.x
      module.exports.MINIMAL_SCHEMA = __nccwpck_require__(6037)
      module.exports.SAFE_SCHEMA = __nccwpck_require__(8949)
      module.exports.DEFAULT_SCHEMA = __nccwpck_require__(6874)

      // Deprecated functions from JS-YAML 1.x.x
      module.exports.scan = deprecated('scan')
      module.exports.parse = deprecated('parse')
      module.exports.compose = deprecated('compose')
      module.exports.addConstructor = deprecated('addConstructor')

      /***/
    },

    /***/ 9136: /***/ (module) => {
      'use strict'

      function isNothing(subject) {
        return typeof subject === 'undefined' || subject === null
      }

      function isObject(subject) {
        return typeof subject === 'object' && subject !== null
      }

      function toArray(sequence) {
        if (Array.isArray(sequence)) return sequence
        else if (isNothing(sequence)) return []

        return [sequence]
      }

      function extend(target, source) {
        var index, length, key, sourceKeys

        if (source) {
          sourceKeys = Object.keys(source)

          for (
            index = 0, length = sourceKeys.length;
            index < length;
            index += 1
          ) {
            key = sourceKeys[index]
            target[key] = source[key]
          }
        }

        return target
      }

      function repeat(string, count) {
        var result = '',
          cycle

        for (cycle = 0; cycle < count; cycle += 1) {
          result += string
        }

        return result
      }

      function isNegativeZero(number) {
        return number === 0 && Number.NEGATIVE_INFINITY === 1 / number
      }

      module.exports.isNothing = isNothing
      module.exports.isObject = isObject
      module.exports.toArray = toArray
      module.exports.repeat = repeat
      module.exports.isNegativeZero = isNegativeZero
      module.exports.extend = extend

      /***/
    },

    /***/ 3034: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      'use strict'

      /*eslint-disable no-use-before-define*/

      var common = __nccwpck_require__(9136)
      var YAMLException = __nccwpck_require__(5199)
      var DEFAULT_FULL_SCHEMA = __nccwpck_require__(6874)
      var DEFAULT_SAFE_SCHEMA = __nccwpck_require__(8949)

      var _toString = Object.prototype.toString
      var _hasOwnProperty = Object.prototype.hasOwnProperty

      var CHAR_TAB = 0x09 /* Tab */
      var CHAR_LINE_FEED = 0x0a /* LF */
      var CHAR_CARRIAGE_RETURN = 0x0d /* CR */
      var CHAR_SPACE = 0x20 /* Space */
      var CHAR_EXCLAMATION = 0x21 /* ! */
      var CHAR_DOUBLE_QUOTE = 0x22 /* " */
      var CHAR_SHARP = 0x23 /* # */
      var CHAR_PERCENT = 0x25 /* % */
      var CHAR_AMPERSAND = 0x26 /* & */
      var CHAR_SINGLE_QUOTE = 0x27 /* ' */
      var CHAR_ASTERISK = 0x2a /* * */
      var CHAR_COMMA = 0x2c /* , */
      var CHAR_MINUS = 0x2d /* - */
      var CHAR_COLON = 0x3a /* : */
      var CHAR_EQUALS = 0x3d /* = */
      var CHAR_GREATER_THAN = 0x3e /* > */
      var CHAR_QUESTION = 0x3f /* ? */
      var CHAR_COMMERCIAL_AT = 0x40 /* @ */
      var CHAR_LEFT_SQUARE_BRACKET = 0x5b /* [ */
      var CHAR_RIGHT_SQUARE_BRACKET = 0x5d /* ] */
      var CHAR_GRAVE_ACCENT = 0x60 /* ` */
      var CHAR_LEFT_CURLY_BRACKET = 0x7b /* { */
      var CHAR_VERTICAL_LINE = 0x7c /* | */
      var CHAR_RIGHT_CURLY_BRACKET = 0x7d /* } */

      var ESCAPE_SEQUENCES = {}

      ESCAPE_SEQUENCES[0x00] = '\\0'
      ESCAPE_SEQUENCES[0x07] = '\\a'
      ESCAPE_SEQUENCES[0x08] = '\\b'
      ESCAPE_SEQUENCES[0x09] = '\\t'
      ESCAPE_SEQUENCES[0x0a] = '\\n'
      ESCAPE_SEQUENCES[0x0b] = '\\v'
      ESCAPE_SEQUENCES[0x0c] = '\\f'
      ESCAPE_SEQUENCES[0x0d] = '\\r'
      ESCAPE_SEQUENCES[0x1b] = '\\e'
      ESCAPE_SEQUENCES[0x22] = '\\"'
      ESCAPE_SEQUENCES[0x5c] = '\\\\'
      ESCAPE_SEQUENCES[0x85] = '\\N'
      ESCAPE_SEQUENCES[0xa0] = '\\_'
      ESCAPE_SEQUENCES[0x2028] = '\\L'
      ESCAPE_SEQUENCES[0x2029] = '\\P'

      var DEPRECATED_BOOLEANS_SYNTAX = [
        'y',
        'Y',
        'yes',
        'Yes',
        'YES',
        'on',
        'On',
        'ON',
        'n',
        'N',
        'no',
        'No',
        'NO',
        'off',
        'Off',
        'OFF'
      ]

      function compileStyleMap(schema, map) {
        var result, keys, index, length, tag, style, type

        if (map === null) return {}

        result = {}
        keys = Object.keys(map)

        for (index = 0, length = keys.length; index < length; index += 1) {
          tag = keys[index]
          style = String(map[tag])

          if (tag.slice(0, 2) === '!!') {
            tag = 'tag:yaml.org,2002:' + tag.slice(2)
          }
          type = schema.compiledTypeMap['fallback'][tag]

          if (type && _hasOwnProperty.call(type.styleAliases, style)) {
            style = type.styleAliases[style]
          }

          result[tag] = style
        }

        return result
      }

      function encodeHex(character) {
        var string, handle, length

        string = character.toString(16).toUpperCase()

        if (character <= 0xff) {
          handle = 'x'
          length = 2
        } else if (character <= 0xffff) {
          handle = 'u'
          length = 4
        } else if (character <= 0xffffffff) {
          handle = 'U'
          length = 8
        } else {
          throw new YAMLException(
            'code point within a string may not be greater than 0xFFFFFFFF'
          )
        }

        return (
          '\\' + handle + common.repeat('0', length - string.length) + string
        )
      }

      function State(options) {
        this.schema = options['schema'] || DEFAULT_FULL_SCHEMA
        this.indent = Math.max(1, options['indent'] || 2)
        this.noArrayIndent = options['noArrayIndent'] || false
        this.skipInvalid = options['skipInvalid'] || false
        this.flowLevel = common.isNothing(options['flowLevel'])
          ? -1
          : options['flowLevel']
        this.styleMap = compileStyleMap(this.schema, options['styles'] || null)
        this.sortKeys = options['sortKeys'] || false
        this.lineWidth = options['lineWidth'] || 80
        this.noRefs = options['noRefs'] || false
        this.noCompatMode = options['noCompatMode'] || false
        this.condenseFlow = options['condenseFlow'] || false

        this.implicitTypes = this.schema.compiledImplicit
        this.explicitTypes = this.schema.compiledExplicit

        this.tag = null
        this.result = ''

        this.duplicates = []
        this.usedDuplicates = null
      }

      // Indents every line in a string. Empty lines (\n only) are not indented.
      function indentString(string, spaces) {
        var ind = common.repeat(' ', spaces),
          position = 0,
          next = -1,
          result = '',
          line,
          length = string.length

        while (position < length) {
          next = string.indexOf('\n', position)
          if (next === -1) {
            line = string.slice(position)
            position = length
          } else {
            line = string.slice(position, next + 1)
            position = next + 1
          }

          if (line.length && line !== '\n') result += ind

          result += line
        }

        return result
      }

      function generateNextLine(state, level) {
        return '\n' + common.repeat(' ', state.indent * level)
      }

      function testImplicitResolving(state, str) {
        var index, length, type

        for (
          index = 0, length = state.implicitTypes.length;
          index < length;
          index += 1
        ) {
          type = state.implicitTypes[index]

          if (type.resolve(str)) {
            return true
          }
        }

        return false
      }

      // [33] s-white ::= s-space | s-tab
      function isWhitespace(c) {
        return c === CHAR_SPACE || c === CHAR_TAB
      }

      // Returns true if the character can be printed without escaping.
      // From YAML 1.2: "any allowed characters known to be non-printable
      // should also be escaped. [However,] This isn’t mandatory"
      // Derived from nb-char - \t - #x85 - #xA0 - #x2028 - #x2029.
      function isPrintable(c) {
        return (
          (0x00020 <= c && c <= 0x00007e) ||
          (0x000a1 <= c && c <= 0x00d7ff && c !== 0x2028 && c !== 0x2029) ||
          (0x0e000 <= c && c <= 0x00fffd && c !== 0xfeff) /* BOM */ ||
          (0x10000 <= c && c <= 0x10ffff)
        )
      }

      // [34] ns-char ::= nb-char - s-white
      // [27] nb-char ::= c-printable - b-char - c-byte-order-mark
      // [26] b-char  ::= b-line-feed | b-carriage-return
      // [24] b-line-feed       ::=     #xA    /* LF */
      // [25] b-carriage-return ::=     #xD    /* CR */
      // [3]  c-byte-order-mark ::=     #xFEFF
      function isNsChar(c) {
        return (
          isPrintable(c) &&
          !isWhitespace(c) &&
          // byte-order-mark
          c !== 0xfeff &&
          // b-char
          c !== CHAR_CARRIAGE_RETURN &&
          c !== CHAR_LINE_FEED
        )
      }

      // Simplified test for values allowed after the first character in plain style.
      function isPlainSafe(c, prev) {
        // Uses a subset of nb-char - c-flow-indicator - ":" - "#"
        // where nb-char ::= c-printable - b-char - c-byte-order-mark.
        return (
          isPrintable(c) &&
          c !== 0xfeff &&
          // - c-flow-indicator
          c !== CHAR_COMMA &&
          c !== CHAR_LEFT_SQUARE_BRACKET &&
          c !== CHAR_RIGHT_SQUARE_BRACKET &&
          c !== CHAR_LEFT_CURLY_BRACKET &&
          c !== CHAR_RIGHT_CURLY_BRACKET &&
          // - ":" - "#"
          // /* An ns-char preceding */ "#"
          c !== CHAR_COLON &&
          (c !== CHAR_SHARP || (prev && isNsChar(prev)))
        )
      }

      // Simplified test for values allowed as the first character in plain style.
      function isPlainSafeFirst(c) {
        // Uses a subset of ns-char - c-indicator
        // where ns-char = nb-char - s-white.
        return (
          isPrintable(c) &&
          c !== 0xfeff &&
          !isWhitespace(c) && // - s-white
          // - (c-indicator ::=
          // “-” | “?” | “:” | “,” | “[” | “]” | “{” | “}”
          c !== CHAR_MINUS &&
          c !== CHAR_QUESTION &&
          c !== CHAR_COLON &&
          c !== CHAR_COMMA &&
          c !== CHAR_LEFT_SQUARE_BRACKET &&
          c !== CHAR_RIGHT_SQUARE_BRACKET &&
          c !== CHAR_LEFT_CURLY_BRACKET &&
          c !== CHAR_RIGHT_CURLY_BRACKET &&
          // | “#” | “&” | “*” | “!” | “|” | “=” | “>” | “'” | “"”
          c !== CHAR_SHARP &&
          c !== CHAR_AMPERSAND &&
          c !== CHAR_ASTERISK &&
          c !== CHAR_EXCLAMATION &&
          c !== CHAR_VERTICAL_LINE &&
          c !== CHAR_EQUALS &&
          c !== CHAR_GREATER_THAN &&
          c !== CHAR_SINGLE_QUOTE &&
          c !== CHAR_DOUBLE_QUOTE &&
          // | “%” | “@” | “`”)
          c !== CHAR_PERCENT &&
          c !== CHAR_COMMERCIAL_AT &&
          c !== CHAR_GRAVE_ACCENT
        )
      }

      // Determines whether block indentation indicator is required.
      function needIndentIndicator(string) {
        var leadingSpaceRe = /^\n* /
        return leadingSpaceRe.test(string)
      }

      var STYLE_PLAIN = 1,
        STYLE_SINGLE = 2,
        STYLE_LITERAL = 3,
        STYLE_FOLDED = 4,
        STYLE_DOUBLE = 5

      // Determines which scalar styles are possible and returns the preferred style.
      // lineWidth = -1 => no limit.
      // Pre-conditions: str.length > 0.
      // Post-conditions:
      //    STYLE_PLAIN or STYLE_SINGLE => no \n are in the string.
      //    STYLE_LITERAL => no lines are suitable for folding (or lineWidth is -1).
      //    STYLE_FOLDED => a line > lineWidth and can be folded (and lineWidth != -1).
      function chooseScalarStyle(
        string,
        singleLineOnly,
        indentPerLevel,
        lineWidth,
        testAmbiguousType
      ) {
        var i
        var char, prev_char
        var hasLineBreak = false
        var hasFoldableLine = false // only checked if shouldTrackWidth
        var shouldTrackWidth = lineWidth !== -1
        var previousLineBreak = -1 // count the first line correctly
        var plain =
          isPlainSafeFirst(string.charCodeAt(0)) &&
          !isWhitespace(string.charCodeAt(string.length - 1))

        if (singleLineOnly) {
          // Case: no block styles.
          // Check for disallowed characters to rule out plain and single.
          for (i = 0; i < string.length; i++) {
            char = string.charCodeAt(i)
            if (!isPrintable(char)) {
              return STYLE_DOUBLE
            }
            prev_char = i > 0 ? string.charCodeAt(i - 1) : null
            plain = plain && isPlainSafe(char, prev_char)
          }
        } else {
          // Case: block styles permitted.
          for (i = 0; i < string.length; i++) {
            char = string.charCodeAt(i)
            if (char === CHAR_LINE_FEED) {
              hasLineBreak = true
              // Check if any line can be folded.
              if (shouldTrackWidth) {
                hasFoldableLine =
                  hasFoldableLine ||
                  // Foldable line = too long, and not more-indented.
                  (i - previousLineBreak - 1 > lineWidth &&
                    string[previousLineBreak + 1] !== ' ')
                previousLineBreak = i
              }
            } else if (!isPrintable(char)) {
              return STYLE_DOUBLE
            }
            prev_char = i > 0 ? string.charCodeAt(i - 1) : null
            plain = plain && isPlainSafe(char, prev_char)
          }
          // in case the end is missing a \n
          hasFoldableLine =
            hasFoldableLine ||
            (shouldTrackWidth &&
              i - previousLineBreak - 1 > lineWidth &&
              string[previousLineBreak + 1] !== ' ')
        }
        // Although every style can represent \n without escaping, prefer block styles
        // for multiline, since they're more readable and they don't add empty lines.
        // Also prefer folding a super-long line.
        if (!hasLineBreak && !hasFoldableLine) {
          // Strings interpretable as another type have to be quoted;
          // e.g. the string 'true' vs. the boolean true.
          return plain && !testAmbiguousType(string)
            ? STYLE_PLAIN
            : STYLE_SINGLE
        }
        // Edge case: block indentation indicator can only have one digit.
        if (indentPerLevel > 9 && needIndentIndicator(string)) {
          return STYLE_DOUBLE
        }
        // At this point we know block styles are valid.
        // Prefer literal style unless we want to fold.
        return hasFoldableLine ? STYLE_FOLDED : STYLE_LITERAL
      }

      // Note: line breaking/folding is implemented for only the folded style.
      // NB. We drop the last trailing newline (if any) of a returned block scalar
      //  since the dumper adds its own newline. This always works:
      //    • No ending newline => unaffected; already using strip "-" chomping.
      //    • Ending newline    => removed then restored.
      //  Importantly, this keeps the "+" chomp indicator from gaining an extra line.
      function writeScalar(state, string, level, iskey) {
        state.dump = (function () {
          if (string.length === 0) {
            return "''"
          }
          if (
            !state.noCompatMode &&
            DEPRECATED_BOOLEANS_SYNTAX.indexOf(string) !== -1
          ) {
            return "'" + string + "'"
          }

          var indent = state.indent * Math.max(1, level) // no 0-indent scalars
          // As indentation gets deeper, let the width decrease monotonically
          // to the lower bound min(state.lineWidth, 40).
          // Note that this implies
          //  state.lineWidth ≤ 40 + state.indent: width is fixed at the lower bound.
          //  state.lineWidth > 40 + state.indent: width decreases until the lower bound.
          // This behaves better than a constant minimum width which disallows narrower options,
          // or an indent threshold which causes the width to suddenly increase.
          var lineWidth =
            state.lineWidth === -1
              ? -1
              : Math.max(
                  Math.min(state.lineWidth, 40),
                  state.lineWidth - indent
                )

          // Without knowing if keys are implicit/explicit, assume implicit for safety.
          var singleLineOnly =
            iskey ||
            // No block styles in flow mode.
            (state.flowLevel > -1 && level >= state.flowLevel)
          function testAmbiguity(string) {
            return testImplicitResolving(state, string)
          }

          switch (
            chooseScalarStyle(
              string,
              singleLineOnly,
              state.indent,
              lineWidth,
              testAmbiguity
            )
          ) {
            case STYLE_PLAIN:
              return string
            case STYLE_SINGLE:
              return "'" + string.replace(/'/g, "''") + "'"
            case STYLE_LITERAL:
              return (
                '|' +
                blockHeader(string, state.indent) +
                dropEndingNewline(indentString(string, indent))
              )
            case STYLE_FOLDED:
              return (
                '>' +
                blockHeader(string, state.indent) +
                dropEndingNewline(
                  indentString(foldString(string, lineWidth), indent)
                )
              )
            case STYLE_DOUBLE:
              return '"' + escapeString(string, lineWidth) + '"'
            default:
              throw new YAMLException('impossible error: invalid scalar style')
          }
        })()
      }

      // Pre-conditions: string is valid for a block scalar, 1 <= indentPerLevel <= 9.
      function blockHeader(string, indentPerLevel) {
        var indentIndicator = needIndentIndicator(string)
          ? String(indentPerLevel)
          : ''

        // note the special case: the string '\n' counts as a "trailing" empty line.
        var clip = string[string.length - 1] === '\n'
        var keep =
          clip && (string[string.length - 2] === '\n' || string === '\n')
        var chomp = keep ? '+' : clip ? '' : '-'

        return indentIndicator + chomp + '\n'
      }

      // (See the note for writeScalar.)
      function dropEndingNewline(string) {
        return string[string.length - 1] === '\n' ? string.slice(0, -1) : string
      }

      // Note: a long line without a suitable break point will exceed the width limit.
      // Pre-conditions: every char in str isPrintable, str.length > 0, width > 0.
      function foldString(string, width) {
        // In folded style, $k$ consecutive newlines output as $k+1$ newlines—
        // unless they're before or after a more-indented line, or at the very
        // beginning or end, in which case $k$ maps to $k$.
        // Therefore, parse each chunk as newline(s) followed by a content line.
        var lineRe = /(\n+)([^\n]*)/g

        // first line (possibly an empty line)
        var result = (function () {
          var nextLF = string.indexOf('\n')
          nextLF = nextLF !== -1 ? nextLF : string.length
          lineRe.lastIndex = nextLF
          return foldLine(string.slice(0, nextLF), width)
        })()
        // If we haven't reached the first content line yet, don't add an extra \n.
        var prevMoreIndented = string[0] === '\n' || string[0] === ' '
        var moreIndented

        // rest of the lines
        var match
        while ((match = lineRe.exec(string))) {
          var prefix = match[1],
            line = match[2]
          moreIndented = line[0] === ' '
          result +=
            prefix +
            (!prevMoreIndented && !moreIndented && line !== '' ? '\n' : '') +
            foldLine(line, width)
          prevMoreIndented = moreIndented
        }

        return result
      }

      // Greedy line breaking.
      // Picks the longest line under the limit each time,
      // otherwise settles for the shortest line over the limit.
      // NB. More-indented lines *cannot* be folded, as that would add an extra \n.
      function foldLine(line, width) {
        if (line === '' || line[0] === ' ') return line

        // Since a more-indented line adds a \n, breaks can't be followed by a space.
        var breakRe = / [^ ]/g // note: the match index will always be <= length-2.
        var match
        // start is an inclusive index. end, curr, and next are exclusive.
        var start = 0,
          end,
          curr = 0,
          next = 0
        var result = ''

        // Invariants: 0 <= start <= length-1.
        //   0 <= curr <= next <= max(0, length-2). curr - start <= width.
        // Inside the loop:
        //   A match implies length >= 2, so curr and next are <= length-2.
        while ((match = breakRe.exec(line))) {
          next = match.index
          // maintain invariant: curr - start <= width
          if (next - start > width) {
            end = curr > start ? curr : next // derive end <= length-2
            result += '\n' + line.slice(start, end)
            // skip the space that was output as \n
            start = end + 1 // derive start <= length-1
          }
          curr = next
        }

        // By the invariants, start <= length-1, so there is something left over.
        // It is either the whole string or a part starting from non-whitespace.
        result += '\n'
        // Insert a break if the remainder is too long and there is a break available.
        if (line.length - start > width && curr > start) {
          result += line.slice(start, curr) + '\n' + line.slice(curr + 1)
        } else {
          result += line.slice(start)
        }

        return result.slice(1) // drop extra \n joiner
      }

      // Escapes a double-quoted string.
      function escapeString(string) {
        var result = ''
        var char, nextChar
        var escapeSeq

        for (var i = 0; i < string.length; i++) {
          char = string.charCodeAt(i)
          // Check for surrogate pairs (reference Unicode 3.0 section "3.7 Surrogates").
          if (char >= 0xd800 && char <= 0xdbff /* high surrogate */) {
            nextChar = string.charCodeAt(i + 1)
            if (nextChar >= 0xdc00 && nextChar <= 0xdfff /* low surrogate */) {
              // Combine the surrogate pair and store it escaped.
              result += encodeHex(
                (char - 0xd800) * 0x400 + nextChar - 0xdc00 + 0x10000
              )
              // Advance index one extra since we already used that char here.
              i++
              continue
            }
          }
          escapeSeq = ESCAPE_SEQUENCES[char]
          result +=
            !escapeSeq && isPrintable(char)
              ? string[i]
              : escapeSeq || encodeHex(char)
        }

        return result
      }

      function writeFlowSequence(state, level, object) {
        var _result = '',
          _tag = state.tag,
          index,
          length

        for (index = 0, length = object.length; index < length; index += 1) {
          // Write only valid elements.
          if (writeNode(state, level, object[index], false, false)) {
            if (index !== 0) _result += ',' + (!state.condenseFlow ? ' ' : '')
            _result += state.dump
          }
        }

        state.tag = _tag
        state.dump = '[' + _result + ']'
      }

      function writeBlockSequence(state, level, object, compact) {
        var _result = '',
          _tag = state.tag,
          index,
          length

        for (index = 0, length = object.length; index < length; index += 1) {
          // Write only valid elements.
          if (writeNode(state, level + 1, object[index], true, true)) {
            if (!compact || index !== 0) {
              _result += generateNextLine(state, level)
            }

            if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
              _result += '-'
            } else {
              _result += '- '
            }

            _result += state.dump
          }
        }

        state.tag = _tag
        state.dump = _result || '[]' // Empty sequence if no valid values.
      }

      function writeFlowMapping(state, level, object) {
        var _result = '',
          _tag = state.tag,
          objectKeyList = Object.keys(object),
          index,
          length,
          objectKey,
          objectValue,
          pairBuffer

        for (
          index = 0, length = objectKeyList.length;
          index < length;
          index += 1
        ) {
          pairBuffer = ''
          if (index !== 0) pairBuffer += ', '

          if (state.condenseFlow) pairBuffer += '"'

          objectKey = objectKeyList[index]
          objectValue = object[objectKey]

          if (!writeNode(state, level, objectKey, false, false)) {
            continue // Skip this pair because of invalid key;
          }

          if (state.dump.length > 1024) pairBuffer += '? '

          pairBuffer +=
            state.dump +
            (state.condenseFlow ? '"' : '') +
            ':' +
            (state.condenseFlow ? '' : ' ')

          if (!writeNode(state, level, objectValue, false, false)) {
            continue // Skip this pair because of invalid value.
          }

          pairBuffer += state.dump

          // Both key and value are valid.
          _result += pairBuffer
        }

        state.tag = _tag
        state.dump = '{' + _result + '}'
      }

      function writeBlockMapping(state, level, object, compact) {
        var _result = '',
          _tag = state.tag,
          objectKeyList = Object.keys(object),
          index,
          length,
          objectKey,
          objectValue,
          explicitPair,
          pairBuffer

        // Allow sorting keys so that the output file is deterministic
        if (state.sortKeys === true) {
          // Default sorting
          objectKeyList.sort()
        } else if (typeof state.sortKeys === 'function') {
          // Custom sort function
          objectKeyList.sort(state.sortKeys)
        } else if (state.sortKeys) {
          // Something is wrong
          throw new YAMLException('sortKeys must be a boolean or a function')
        }

        for (
          index = 0, length = objectKeyList.length;
          index < length;
          index += 1
        ) {
          pairBuffer = ''

          if (!compact || index !== 0) {
            pairBuffer += generateNextLine(state, level)
          }

          objectKey = objectKeyList[index]
          objectValue = object[objectKey]

          if (!writeNode(state, level + 1, objectKey, true, true, true)) {
            continue // Skip this pair because of invalid key.
          }

          explicitPair =
            (state.tag !== null && state.tag !== '?') ||
            (state.dump && state.dump.length > 1024)

          if (explicitPair) {
            if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
              pairBuffer += '?'
            } else {
              pairBuffer += '? '
            }
          }

          pairBuffer += state.dump

          if (explicitPair) {
            pairBuffer += generateNextLine(state, level)
          }

          if (!writeNode(state, level + 1, objectValue, true, explicitPair)) {
            continue // Skip this pair because of invalid value.
          }

          if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
            pairBuffer += ':'
          } else {
            pairBuffer += ': '
          }

          pairBuffer += state.dump

          // Both key and value are valid.
          _result += pairBuffer
        }

        state.tag = _tag
        state.dump = _result || '{}' // Empty mapping if no valid pairs.
      }

      function detectType(state, object, explicit) {
        var _result, typeList, index, length, type, style

        typeList = explicit ? state.explicitTypes : state.implicitTypes

        for (index = 0, length = typeList.length; index < length; index += 1) {
          type = typeList[index]

          if (
            (type.instanceOf || type.predicate) &&
            (!type.instanceOf ||
              (typeof object === 'object' &&
                object instanceof type.instanceOf)) &&
            (!type.predicate || type.predicate(object))
          ) {
            state.tag = explicit ? type.tag : '?'

            if (type.represent) {
              style = state.styleMap[type.tag] || type.defaultStyle

              if (_toString.call(type.represent) === '[object Function]') {
                _result = type.represent(object, style)
              } else if (_hasOwnProperty.call(type.represent, style)) {
                _result = type.represent[style](object, style)
              } else {
                throw new YAMLException(
                  '!<' +
                    type.tag +
                    '> tag resolver accepts not "' +
                    style +
                    '" style'
                )
              }

              state.dump = _result
            }

            return true
          }
        }

        return false
      }

      // Serializes `object` and writes it to global `result`.
      // Returns true on success, or false on invalid object.
      //
      function writeNode(state, level, object, block, compact, iskey) {
        state.tag = null
        state.dump = object

        if (!detectType(state, object, false)) {
          detectType(state, object, true)
        }

        var type = _toString.call(state.dump)

        if (block) {
          block = state.flowLevel < 0 || state.flowLevel > level
        }

        var objectOrArray =
            type === '[object Object]' || type === '[object Array]',
          duplicateIndex,
          duplicate

        if (objectOrArray) {
          duplicateIndex = state.duplicates.indexOf(object)
          duplicate = duplicateIndex !== -1
        }

        if (
          (state.tag !== null && state.tag !== '?') ||
          duplicate ||
          (state.indent !== 2 && level > 0)
        ) {
          compact = false
        }

        if (duplicate && state.usedDuplicates[duplicateIndex]) {
          state.dump = '*ref_' + duplicateIndex
        } else {
          if (
            objectOrArray &&
            duplicate &&
            !state.usedDuplicates[duplicateIndex]
          ) {
            state.usedDuplicates[duplicateIndex] = true
          }
          if (type === '[object Object]') {
            if (block && Object.keys(state.dump).length !== 0) {
              writeBlockMapping(state, level, state.dump, compact)
              if (duplicate) {
                state.dump = '&ref_' + duplicateIndex + state.dump
              }
            } else {
              writeFlowMapping(state, level, state.dump)
              if (duplicate) {
                state.dump = '&ref_' + duplicateIndex + ' ' + state.dump
              }
            }
          } else if (type === '[object Array]') {
            var arrayLevel =
              state.noArrayIndent && level > 0 ? level - 1 : level
            if (block && state.dump.length !== 0) {
              writeBlockSequence(state, arrayLevel, state.dump, compact)
              if (duplicate) {
                state.dump = '&ref_' + duplicateIndex + state.dump
              }
            } else {
              writeFlowSequence(state, arrayLevel, state.dump)
              if (duplicate) {
                state.dump = '&ref_' + duplicateIndex + ' ' + state.dump
              }
            }
          } else if (type === '[object String]') {
            if (state.tag !== '?') {
              writeScalar(state, state.dump, level, iskey)
            }
          } else {
            if (state.skipInvalid) return false
            throw new YAMLException(
              'unacceptable kind of an object to dump ' + type
            )
          }

          if (state.tag !== null && state.tag !== '?') {
            state.dump = '!<' + state.tag + '> ' + state.dump
          }
        }

        return true
      }

      function getDuplicateReferences(object, state) {
        var objects = [],
          duplicatesIndexes = [],
          index,
          length

        inspectNode(object, objects, duplicatesIndexes)

        for (
          index = 0, length = duplicatesIndexes.length;
          index < length;
          index += 1
        ) {
          state.duplicates.push(objects[duplicatesIndexes[index]])
        }
        state.usedDuplicates = new Array(length)
      }

      function inspectNode(object, objects, duplicatesIndexes) {
        var objectKeyList, index, length

        if (object !== null && typeof object === 'object') {
          index = objects.indexOf(object)
          if (index !== -1) {
            if (duplicatesIndexes.indexOf(index) === -1) {
              duplicatesIndexes.push(index)
            }
          } else {
            objects.push(object)

            if (Array.isArray(object)) {
              for (
                index = 0, length = object.length;
                index < length;
                index += 1
              ) {
                inspectNode(object[index], objects, duplicatesIndexes)
              }
            } else {
              objectKeyList = Object.keys(object)

              for (
                index = 0, length = objectKeyList.length;
                index < length;
                index += 1
              ) {
                inspectNode(
                  object[objectKeyList[index]],
                  objects,
                  duplicatesIndexes
                )
              }
            }
          }
        }
      }

      function dump(input, options) {
        options = options || {}

        var state = new State(options)

        if (!state.noRefs) getDuplicateReferences(input, state)

        if (writeNode(state, 0, input, true, true)) return state.dump + '\n'

        return ''
      }

      function safeDump(input, options) {
        return dump(
          input,
          common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options)
        )
      }

      module.exports.dump = dump
      module.exports.safeDump = safeDump

      /***/
    },

    /***/ 5199: /***/ (module) => {
      'use strict'
      // YAML error class. http://stackoverflow.com/questions/8458984
      //

      function YAMLException(reason, mark) {
        // Super constructor
        Error.call(this)

        this.name = 'YAMLException'
        this.reason = reason
        this.mark = mark
        this.message =
          (this.reason || '(unknown reason)') +
          (this.mark ? ' ' + this.mark.toString() : '')

        // Include stack trace in error object
        if (Error.captureStackTrace) {
          // Chrome and NodeJS
          Error.captureStackTrace(this, this.constructor)
        } else {
          // FF, IE 10+ and Safari 6+. Fallback for others
          this.stack = new Error().stack || ''
        }
      }

      // Inherit from Error
      YAMLException.prototype = Object.create(Error.prototype)
      YAMLException.prototype.constructor = YAMLException

      YAMLException.prototype.toString = function toString(compact) {
        var result = this.name + ': '

        result += this.reason || '(unknown reason)'

        if (!compact && this.mark) {
          result += ' ' + this.mark.toString()
        }

        return result
      }

      module.exports = YAMLException

      /***/
    },

    /***/ 5190: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      'use strict'

      /*eslint-disable max-len,no-use-before-define*/

      var common = __nccwpck_require__(9136)
      var YAMLException = __nccwpck_require__(5199)
      var Mark = __nccwpck_require__(5426)
      var DEFAULT_SAFE_SCHEMA = __nccwpck_require__(8949)
      var DEFAULT_FULL_SCHEMA = __nccwpck_require__(6874)

      var _hasOwnProperty = Object.prototype.hasOwnProperty

      var CONTEXT_FLOW_IN = 1
      var CONTEXT_FLOW_OUT = 2
      var CONTEXT_BLOCK_IN = 3
      var CONTEXT_BLOCK_OUT = 4

      var CHOMPING_CLIP = 1
      var CHOMPING_STRIP = 2
      var CHOMPING_KEEP = 3

      var PATTERN_NON_PRINTABLE =
        /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/
      var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/
      var PATTERN_FLOW_INDICATORS = /[,\[\]\{\}]/
      var PATTERN_TAG_HANDLE = /^(?:!|!!|![a-z\-]+!)$/i
      var PATTERN_TAG_URI =
        /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i

      function _class(obj) {
        return Object.prototype.toString.call(obj)
      }

      function is_EOL(c) {
        return c === 0x0a /* LF */ || c === 0x0d /* CR */
      }

      function is_WHITE_SPACE(c) {
        return c === 0x09 /* Tab */ || c === 0x20 /* Space */
      }

      function is_WS_OR_EOL(c) {
        return (
          c === 0x09 /* Tab */ ||
          c === 0x20 /* Space */ ||
          c === 0x0a /* LF */ ||
          c === 0x0d /* CR */
        )
      }

      function is_FLOW_INDICATOR(c) {
        return (
          c === 0x2c /* , */ ||
          c === 0x5b /* [ */ ||
          c === 0x5d /* ] */ ||
          c === 0x7b /* { */ ||
          c === 0x7d /* } */
        )
      }

      function fromHexCode(c) {
        var lc

        if (0x30 /* 0 */ <= c && c <= 0x39 /* 9 */) {
          return c - 0x30
        }

        /*eslint-disable no-bitwise*/
        lc = c | 0x20

        if (0x61 /* a */ <= lc && lc <= 0x66 /* f */) {
          return lc - 0x61 + 10
        }

        return -1
      }

      function escapedHexLen(c) {
        if (c === 0x78 /* x */) {
          return 2
        }
        if (c === 0x75 /* u */) {
          return 4
        }
        if (c === 0x55 /* U */) {
          return 8
        }
        return 0
      }

      function fromDecimalCode(c) {
        if (0x30 /* 0 */ <= c && c <= 0x39 /* 9 */) {
          return c - 0x30
        }

        return -1
      }

      function simpleEscapeSequence(c) {
        /* eslint-disable indent */
        return c === 0x30 /* 0 */
          ? '\x00'
          : c === 0x61 /* a */
          ? '\x07'
          : c === 0x62 /* b */
          ? '\x08'
          : c === 0x74 /* t */
          ? '\x09'
          : c === 0x09 /* Tab */
          ? '\x09'
          : c === 0x6e /* n */
          ? '\x0A'
          : c === 0x76 /* v */
          ? '\x0B'
          : c === 0x66 /* f */
          ? '\x0C'
          : c === 0x72 /* r */
          ? '\x0D'
          : c === 0x65 /* e */
          ? '\x1B'
          : c === 0x20 /* Space */
          ? ' '
          : c === 0x22 /* " */
          ? '\x22'
          : c === 0x2f /* / */
          ? '/'
          : c === 0x5c /* \ */
          ? '\x5C'
          : c === 0x4e /* N */
          ? '\x85'
          : c === 0x5f /* _ */
          ? '\xA0'
          : c === 0x4c /* L */
          ? '\u2028'
          : c === 0x50 /* P */
          ? '\u2029'
          : ''
      }

      function charFromCodepoint(c) {
        if (c <= 0xffff) {
          return String.fromCharCode(c)
        }
        // Encode UTF-16 surrogate pair
        // https://en.wikipedia.org/wiki/UTF-16#Code_points_U.2B010000_to_U.2B10FFFF
        return String.fromCharCode(
          ((c - 0x010000) >> 10) + 0xd800,
          ((c - 0x010000) & 0x03ff) + 0xdc00
        )
      }

      var simpleEscapeCheck = new Array(256) // integer, for fast access
      var simpleEscapeMap = new Array(256)
      for (var i = 0; i < 256; i++) {
        simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0
        simpleEscapeMap[i] = simpleEscapeSequence(i)
      }

      function State(input, options) {
        this.input = input

        this.filename = options['filename'] || null
        this.schema = options['schema'] || DEFAULT_FULL_SCHEMA
        this.onWarning = options['onWarning'] || null
        this.legacy = options['legacy'] || false
        this.json = options['json'] || false
        this.listener = options['listener'] || null

        this.implicitTypes = this.schema.compiledImplicit
        this.typeMap = this.schema.compiledTypeMap

        this.length = input.length
        this.position = 0
        this.line = 0
        this.lineStart = 0
        this.lineIndent = 0

        this.documents = []

        /*
  this.version;
  this.checkLineBreaks;
  this.tagMap;
  this.anchorMap;
  this.tag;
  this.anchor;
  this.kind;
  this.result;*/
      }

      function generateError(state, message) {
        return new YAMLException(
          message,
          new Mark(
            state.filename,
            state.input,
            state.position,
            state.line,
            state.position - state.lineStart
          )
        )
      }

      function throwError(state, message) {
        throw generateError(state, message)
      }

      function throwWarning(state, message) {
        if (state.onWarning) {
          state.onWarning.call(null, generateError(state, message))
        }
      }

      var directiveHandlers = {
        YAML: function handleYamlDirective(state, name, args) {
          var match, major, minor

          if (state.version !== null) {
            throwError(state, 'duplication of %YAML directive')
          }

          if (args.length !== 1) {
            throwError(state, 'YAML directive accepts exactly one argument')
          }

          match = /^([0-9]+)\.([0-9]+)$/.exec(args[0])

          if (match === null) {
            throwError(state, 'ill-formed argument of the YAML directive')
          }

          major = parseInt(match[1], 10)
          minor = parseInt(match[2], 10)

          if (major !== 1) {
            throwError(state, 'unacceptable YAML version of the document')
          }

          state.version = args[0]
          state.checkLineBreaks = minor < 2

          if (minor !== 1 && minor !== 2) {
            throwWarning(state, 'unsupported YAML version of the document')
          }
        },

        TAG: function handleTagDirective(state, name, args) {
          var handle, prefix

          if (args.length !== 2) {
            throwError(state, 'TAG directive accepts exactly two arguments')
          }

          handle = args[0]
          prefix = args[1]

          if (!PATTERN_TAG_HANDLE.test(handle)) {
            throwError(
              state,
              'ill-formed tag handle (first argument) of the TAG directive'
            )
          }

          if (_hasOwnProperty.call(state.tagMap, handle)) {
            throwError(
              state,
              'there is a previously declared suffix for "' +
                handle +
                '" tag handle'
            )
          }

          if (!PATTERN_TAG_URI.test(prefix)) {
            throwError(
              state,
              'ill-formed tag prefix (second argument) of the TAG directive'
            )
          }

          state.tagMap[handle] = prefix
        }
      }

      function captureSegment(state, start, end, checkJson) {
        var _position, _length, _character, _result

        if (start < end) {
          _result = state.input.slice(start, end)

          if (checkJson) {
            for (
              _position = 0, _length = _result.length;
              _position < _length;
              _position += 1
            ) {
              _character = _result.charCodeAt(_position)
              if (
                !(
                  _character === 0x09 ||
                  (0x20 <= _character && _character <= 0x10ffff)
                )
              ) {
                throwError(state, 'expected valid JSON character')
              }
            }
          } else if (PATTERN_NON_PRINTABLE.test(_result)) {
            throwError(state, 'the stream contains non-printable characters')
          }

          state.result += _result
        }
      }

      function mergeMappings(state, destination, source, overridableKeys) {
        var sourceKeys, key, index, quantity

        if (!common.isObject(source)) {
          throwError(
            state,
            'cannot merge mappings; the provided source object is unacceptable'
          )
        }

        sourceKeys = Object.keys(source)

        for (
          index = 0, quantity = sourceKeys.length;
          index < quantity;
          index += 1
        ) {
          key = sourceKeys[index]

          if (!_hasOwnProperty.call(destination, key)) {
            destination[key] = source[key]
            overridableKeys[key] = true
          }
        }
      }

      function storeMappingPair(
        state,
        _result,
        overridableKeys,
        keyTag,
        keyNode,
        valueNode,
        startLine,
        startPos
      ) {
        var index, quantity

        // The output is a plain object here, so keys can only be strings.
        // We need to convert keyNode to a string, but doing so can hang the process
        // (deeply nested arrays that explode exponentially using aliases).
        if (Array.isArray(keyNode)) {
          keyNode = Array.prototype.slice.call(keyNode)

          for (
            index = 0, quantity = keyNode.length;
            index < quantity;
            index += 1
          ) {
            if (Array.isArray(keyNode[index])) {
              throwError(state, 'nested arrays are not supported inside keys')
            }

            if (
              typeof keyNode === 'object' &&
              _class(keyNode[index]) === '[object Object]'
            ) {
              keyNode[index] = '[object Object]'
            }
          }
        }

        // Avoid code execution in load() via toString property
        // (still use its own toString for arrays, timestamps,
        // and whatever user schema extensions happen to have @@toStringTag)
        if (
          typeof keyNode === 'object' &&
          _class(keyNode) === '[object Object]'
        ) {
          keyNode = '[object Object]'
        }

        keyNode = String(keyNode)

        if (_result === null) {
          _result = {}
        }

        if (keyTag === 'tag:yaml.org,2002:merge') {
          if (Array.isArray(valueNode)) {
            for (
              index = 0, quantity = valueNode.length;
              index < quantity;
              index += 1
            ) {
              mergeMappings(state, _result, valueNode[index], overridableKeys)
            }
          } else {
            mergeMappings(state, _result, valueNode, overridableKeys)
          }
        } else {
          if (
            !state.json &&
            !_hasOwnProperty.call(overridableKeys, keyNode) &&
            _hasOwnProperty.call(_result, keyNode)
          ) {
            state.line = startLine || state.line
            state.position = startPos || state.position
            throwError(state, 'duplicated mapping key')
          }
          _result[keyNode] = valueNode
          delete overridableKeys[keyNode]
        }

        return _result
      }

      function readLineBreak(state) {
        var ch

        ch = state.input.charCodeAt(state.position)

        if (ch === 0x0a /* LF */) {
          state.position++
        } else if (ch === 0x0d /* CR */) {
          state.position++
          if (state.input.charCodeAt(state.position) === 0x0a /* LF */) {
            state.position++
          }
        } else {
          throwError(state, 'a line break is expected')
        }

        state.line += 1
        state.lineStart = state.position
      }

      function skipSeparationSpace(state, allowComments, checkIndent) {
        var lineBreaks = 0,
          ch = state.input.charCodeAt(state.position)

        while (ch !== 0) {
          while (is_WHITE_SPACE(ch)) {
            ch = state.input.charCodeAt(++state.position)
          }

          if (allowComments && ch === 0x23 /* # */) {
            do {
              ch = state.input.charCodeAt(++state.position)
            } while (ch !== 0x0a /* LF */ && ch !== 0x0d /* CR */ && ch !== 0)
          }

          if (is_EOL(ch)) {
            readLineBreak(state)

            ch = state.input.charCodeAt(state.position)
            lineBreaks++
            state.lineIndent = 0

            while (ch === 0x20 /* Space */) {
              state.lineIndent++
              ch = state.input.charCodeAt(++state.position)
            }
          } else {
            break
          }
        }

        if (
          checkIndent !== -1 &&
          lineBreaks !== 0 &&
          state.lineIndent < checkIndent
        ) {
          throwWarning(state, 'deficient indentation')
        }

        return lineBreaks
      }

      function testDocumentSeparator(state) {
        var _position = state.position,
          ch

        ch = state.input.charCodeAt(_position)

        // Condition state.position === state.lineStart is tested
        // in parent on each call, for efficiency. No needs to test here again.
        if (
          (ch === 0x2d /* - */ || ch === 0x2e) /* . */ &&
          ch === state.input.charCodeAt(_position + 1) &&
          ch === state.input.charCodeAt(_position + 2)
        ) {
          _position += 3

          ch = state.input.charCodeAt(_position)

          if (ch === 0 || is_WS_OR_EOL(ch)) {
            return true
          }
        }

        return false
      }

      function writeFoldedLines(state, count) {
        if (count === 1) {
          state.result += ' '
        } else if (count > 1) {
          state.result += common.repeat('\n', count - 1)
        }
      }

      function readPlainScalar(state, nodeIndent, withinFlowCollection) {
        var preceding,
          following,
          captureStart,
          captureEnd,
          hasPendingContent,
          _line,
          _lineStart,
          _lineIndent,
          _kind = state.kind,
          _result = state.result,
          ch

        ch = state.input.charCodeAt(state.position)

        if (
          is_WS_OR_EOL(ch) ||
          is_FLOW_INDICATOR(ch) ||
          ch === 0x23 /* # */ ||
          ch === 0x26 /* & */ ||
          ch === 0x2a /* * */ ||
          ch === 0x21 /* ! */ ||
          ch === 0x7c /* | */ ||
          ch === 0x3e /* > */ ||
          ch === 0x27 /* ' */ ||
          ch === 0x22 /* " */ ||
          ch === 0x25 /* % */ ||
          ch === 0x40 /* @ */ ||
          ch === 0x60 /* ` */
        ) {
          return false
        }

        if (ch === 0x3f /* ? */ || ch === 0x2d /* - */) {
          following = state.input.charCodeAt(state.position + 1)

          if (
            is_WS_OR_EOL(following) ||
            (withinFlowCollection && is_FLOW_INDICATOR(following))
          ) {
            return false
          }
        }

        state.kind = 'scalar'
        state.result = ''
        captureStart = captureEnd = state.position
        hasPendingContent = false

        while (ch !== 0) {
          if (ch === 0x3a /* : */) {
            following = state.input.charCodeAt(state.position + 1)

            if (
              is_WS_OR_EOL(following) ||
              (withinFlowCollection && is_FLOW_INDICATOR(following))
            ) {
              break
            }
          } else if (ch === 0x23 /* # */) {
            preceding = state.input.charCodeAt(state.position - 1)

            if (is_WS_OR_EOL(preceding)) {
              break
            }
          } else if (
            (state.position === state.lineStart &&
              testDocumentSeparator(state)) ||
            (withinFlowCollection && is_FLOW_INDICATOR(ch))
          ) {
            break
          } else if (is_EOL(ch)) {
            _line = state.line
            _lineStart = state.lineStart
            _lineIndent = state.lineIndent
            skipSeparationSpace(state, false, -1)

            if (state.lineIndent >= nodeIndent) {
              hasPendingContent = true
              ch = state.input.charCodeAt(state.position)
              continue
            } else {
              state.position = captureEnd
              state.line = _line
              state.lineStart = _lineStart
              state.lineIndent = _lineIndent
              break
            }
          }

          if (hasPendingContent) {
            captureSegment(state, captureStart, captureEnd, false)
            writeFoldedLines(state, state.line - _line)
            captureStart = captureEnd = state.position
            hasPendingContent = false
          }

          if (!is_WHITE_SPACE(ch)) {
            captureEnd = state.position + 1
          }

          ch = state.input.charCodeAt(++state.position)
        }

        captureSegment(state, captureStart, captureEnd, false)

        if (state.result) {
          return true
        }

        state.kind = _kind
        state.result = _result
        return false
      }

      function readSingleQuotedScalar(state, nodeIndent) {
        var ch, captureStart, captureEnd

        ch = state.input.charCodeAt(state.position)

        if (ch !== 0x27 /* ' */) {
          return false
        }

        state.kind = 'scalar'
        state.result = ''
        state.position++
        captureStart = captureEnd = state.position

        while ((ch = state.input.charCodeAt(state.position)) !== 0) {
          if (ch === 0x27 /* ' */) {
            captureSegment(state, captureStart, state.position, true)
            ch = state.input.charCodeAt(++state.position)

            if (ch === 0x27 /* ' */) {
              captureStart = state.position
              state.position++
              captureEnd = state.position
            } else {
              return true
            }
          } else if (is_EOL(ch)) {
            captureSegment(state, captureStart, captureEnd, true)
            writeFoldedLines(
              state,
              skipSeparationSpace(state, false, nodeIndent)
            )
            captureStart = captureEnd = state.position
          } else if (
            state.position === state.lineStart &&
            testDocumentSeparator(state)
          ) {
            throwError(
              state,
              'unexpected end of the document within a single quoted scalar'
            )
          } else {
            state.position++
            captureEnd = state.position
          }
        }

        throwError(
          state,
          'unexpected end of the stream within a single quoted scalar'
        )
      }

      function readDoubleQuotedScalar(state, nodeIndent) {
        var captureStart, captureEnd, hexLength, hexResult, tmp, ch

        ch = state.input.charCodeAt(state.position)

        if (ch !== 0x22 /* " */) {
          return false
        }

        state.kind = 'scalar'
        state.result = ''
        state.position++
        captureStart = captureEnd = state.position

        while ((ch = state.input.charCodeAt(state.position)) !== 0) {
          if (ch === 0x22 /* " */) {
            captureSegment(state, captureStart, state.position, true)
            state.position++
            return true
          } else if (ch === 0x5c /* \ */) {
            captureSegment(state, captureStart, state.position, true)
            ch = state.input.charCodeAt(++state.position)

            if (is_EOL(ch)) {
              skipSeparationSpace(state, false, nodeIndent)

              // TODO: rework to inline fn with no type cast?
            } else if (ch < 256 && simpleEscapeCheck[ch]) {
              state.result += simpleEscapeMap[ch]
              state.position++
            } else if ((tmp = escapedHexLen(ch)) > 0) {
              hexLength = tmp
              hexResult = 0

              for (; hexLength > 0; hexLength--) {
                ch = state.input.charCodeAt(++state.position)

                if ((tmp = fromHexCode(ch)) >= 0) {
                  hexResult = (hexResult << 4) + tmp
                } else {
                  throwError(state, 'expected hexadecimal character')
                }
              }

              state.result += charFromCodepoint(hexResult)

              state.position++
            } else {
              throwError(state, 'unknown escape sequence')
            }

            captureStart = captureEnd = state.position
          } else if (is_EOL(ch)) {
            captureSegment(state, captureStart, captureEnd, true)
            writeFoldedLines(
              state,
              skipSeparationSpace(state, false, nodeIndent)
            )
            captureStart = captureEnd = state.position
          } else if (
            state.position === state.lineStart &&
            testDocumentSeparator(state)
          ) {
            throwError(
              state,
              'unexpected end of the document within a double quoted scalar'
            )
          } else {
            state.position++
            captureEnd = state.position
          }
        }

        throwError(
          state,
          'unexpected end of the stream within a double quoted scalar'
        )
      }

      function readFlowCollection(state, nodeIndent) {
        var readNext = true,
          _line,
          _tag = state.tag,
          _result,
          _anchor = state.anchor,
          following,
          terminator,
          isPair,
          isExplicitPair,
          isMapping,
          overridableKeys = {},
          keyNode,
          keyTag,
          valueNode,
          ch

        ch = state.input.charCodeAt(state.position)

        if (ch === 0x5b /* [ */) {
          terminator = 0x5d /* ] */
          isMapping = false
          _result = []
        } else if (ch === 0x7b /* { */) {
          terminator = 0x7d /* } */
          isMapping = true
          _result = {}
        } else {
          return false
        }

        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = _result
        }

        ch = state.input.charCodeAt(++state.position)

        while (ch !== 0) {
          skipSeparationSpace(state, true, nodeIndent)

          ch = state.input.charCodeAt(state.position)

          if (ch === terminator) {
            state.position++
            state.tag = _tag
            state.anchor = _anchor
            state.kind = isMapping ? 'mapping' : 'sequence'
            state.result = _result
            return true
          } else if (!readNext) {
            throwError(state, 'missed comma between flow collection entries')
          }

          keyTag = keyNode = valueNode = null
          isPair = isExplicitPair = false

          if (ch === 0x3f /* ? */) {
            following = state.input.charCodeAt(state.position + 1)

            if (is_WS_OR_EOL(following)) {
              isPair = isExplicitPair = true
              state.position++
              skipSeparationSpace(state, true, nodeIndent)
            }
          }

          _line = state.line
          composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true)
          keyTag = state.tag
          keyNode = state.result
          skipSeparationSpace(state, true, nodeIndent)

          ch = state.input.charCodeAt(state.position)

          if ((isExplicitPair || state.line === _line) && ch === 0x3a /* : */) {
            isPair = true
            ch = state.input.charCodeAt(++state.position)
            skipSeparationSpace(state, true, nodeIndent)
            composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true)
            valueNode = state.result
          }

          if (isMapping) {
            storeMappingPair(
              state,
              _result,
              overridableKeys,
              keyTag,
              keyNode,
              valueNode
            )
          } else if (isPair) {
            _result.push(
              storeMappingPair(
                state,
                null,
                overridableKeys,
                keyTag,
                keyNode,
                valueNode
              )
            )
          } else {
            _result.push(keyNode)
          }

          skipSeparationSpace(state, true, nodeIndent)

          ch = state.input.charCodeAt(state.position)

          if (ch === 0x2c /* , */) {
            readNext = true
            ch = state.input.charCodeAt(++state.position)
          } else {
            readNext = false
          }
        }

        throwError(
          state,
          'unexpected end of the stream within a flow collection'
        )
      }

      function readBlockScalar(state, nodeIndent) {
        var captureStart,
          folding,
          chomping = CHOMPING_CLIP,
          didReadContent = false,
          detectedIndent = false,
          textIndent = nodeIndent,
          emptyLines = 0,
          atMoreIndented = false,
          tmp,
          ch

        ch = state.input.charCodeAt(state.position)

        if (ch === 0x7c /* | */) {
          folding = false
        } else if (ch === 0x3e /* > */) {
          folding = true
        } else {
          return false
        }

        state.kind = 'scalar'
        state.result = ''

        while (ch !== 0) {
          ch = state.input.charCodeAt(++state.position)

          if (ch === 0x2b /* + */ || ch === 0x2d /* - */) {
            if (CHOMPING_CLIP === chomping) {
              chomping = ch === 0x2b /* + */ ? CHOMPING_KEEP : CHOMPING_STRIP
            } else {
              throwError(state, 'repeat of a chomping mode identifier')
            }
          } else if ((tmp = fromDecimalCode(ch)) >= 0) {
            if (tmp === 0) {
              throwError(
                state,
                'bad explicit indentation width of a block scalar; it cannot be less than one'
              )
            } else if (!detectedIndent) {
              textIndent = nodeIndent + tmp - 1
              detectedIndent = true
            } else {
              throwError(state, 'repeat of an indentation width identifier')
            }
          } else {
            break
          }
        }

        if (is_WHITE_SPACE(ch)) {
          do {
            ch = state.input.charCodeAt(++state.position)
          } while (is_WHITE_SPACE(ch))

          if (ch === 0x23 /* # */) {
            do {
              ch = state.input.charCodeAt(++state.position)
            } while (!is_EOL(ch) && ch !== 0)
          }
        }

        while (ch !== 0) {
          readLineBreak(state)
          state.lineIndent = 0

          ch = state.input.charCodeAt(state.position)

          while (
            (!detectedIndent || state.lineIndent < textIndent) &&
            ch === 0x20 /* Space */
          ) {
            state.lineIndent++
            ch = state.input.charCodeAt(++state.position)
          }

          if (!detectedIndent && state.lineIndent > textIndent) {
            textIndent = state.lineIndent
          }

          if (is_EOL(ch)) {
            emptyLines++
            continue
          }

          // End of the scalar.
          if (state.lineIndent < textIndent) {
            // Perform the chomping.
            if (chomping === CHOMPING_KEEP) {
              state.result += common.repeat(
                '\n',
                didReadContent ? 1 + emptyLines : emptyLines
              )
            } else if (chomping === CHOMPING_CLIP) {
              if (didReadContent) {
                // i.e. only if the scalar is not empty.
                state.result += '\n'
              }
            }

            // Break this `while` cycle and go to the funciton's epilogue.
            break
          }

          // Folded style: use fancy rules to handle line breaks.
          if (folding) {
            // Lines starting with white space characters (more-indented lines) are not folded.
            if (is_WHITE_SPACE(ch)) {
              atMoreIndented = true
              // except for the first content line (cf. Example 8.1)
              state.result += common.repeat(
                '\n',
                didReadContent ? 1 + emptyLines : emptyLines
              )

              // End of more-indented block.
            } else if (atMoreIndented) {
              atMoreIndented = false
              state.result += common.repeat('\n', emptyLines + 1)

              // Just one line break - perceive as the same line.
            } else if (emptyLines === 0) {
              if (didReadContent) {
                // i.e. only if we have already read some scalar content.
                state.result += ' '
              }

              // Several line breaks - perceive as different lines.
            } else {
              state.result += common.repeat('\n', emptyLines)
            }

            // Literal style: just add exact number of line breaks between content lines.
          } else {
            // Keep all line breaks except the header line break.
            state.result += common.repeat(
              '\n',
              didReadContent ? 1 + emptyLines : emptyLines
            )
          }

          didReadContent = true
          detectedIndent = true
          emptyLines = 0
          captureStart = state.position

          while (!is_EOL(ch) && ch !== 0) {
            ch = state.input.charCodeAt(++state.position)
          }

          captureSegment(state, captureStart, state.position, false)
        }

        return true
      }

      function readBlockSequence(state, nodeIndent) {
        var _line,
          _tag = state.tag,
          _anchor = state.anchor,
          _result = [],
          following,
          detected = false,
          ch

        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = _result
        }

        ch = state.input.charCodeAt(state.position)

        while (ch !== 0) {
          if (ch !== 0x2d /* - */) {
            break
          }

          following = state.input.charCodeAt(state.position + 1)

          if (!is_WS_OR_EOL(following)) {
            break
          }

          detected = true
          state.position++

          if (skipSeparationSpace(state, true, -1)) {
            if (state.lineIndent <= nodeIndent) {
              _result.push(null)
              ch = state.input.charCodeAt(state.position)
              continue
            }
          }

          _line = state.line
          composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true)
          _result.push(state.result)
          skipSeparationSpace(state, true, -1)

          ch = state.input.charCodeAt(state.position)

          if (
            (state.line === _line || state.lineIndent > nodeIndent) &&
            ch !== 0
          ) {
            throwError(state, 'bad indentation of a sequence entry')
          } else if (state.lineIndent < nodeIndent) {
            break
          }
        }

        if (detected) {
          state.tag = _tag
          state.anchor = _anchor
          state.kind = 'sequence'
          state.result = _result
          return true
        }
        return false
      }

      function readBlockMapping(state, nodeIndent, flowIndent) {
        var following,
          allowCompact,
          _line,
          _pos,
          _tag = state.tag,
          _anchor = state.anchor,
          _result = {},
          overridableKeys = {},
          keyTag = null,
          keyNode = null,
          valueNode = null,
          atExplicitKey = false,
          detected = false,
          ch

        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = _result
        }

        ch = state.input.charCodeAt(state.position)

        while (ch !== 0) {
          following = state.input.charCodeAt(state.position + 1)
          _line = state.line // Save the current line.
          _pos = state.position

          //
          // Explicit notation case. There are two separate blocks:
          // first for the key (denoted by "?") and second for the value (denoted by ":")
          //
          if (
            (ch === 0x3f /* ? */ || ch === 0x3a /*: */) &&
            is_WS_OR_EOL(following)
          ) {
            if (ch === 0x3f /* ? */) {
              if (atExplicitKey) {
                storeMappingPair(
                  state,
                  _result,
                  overridableKeys,
                  keyTag,
                  keyNode,
                  null
                )
                keyTag = keyNode = valueNode = null
              }

              detected = true
              atExplicitKey = true
              allowCompact = true
            } else if (atExplicitKey) {
              // i.e. 0x3A/* : */ === character after the explicit key.
              atExplicitKey = false
              allowCompact = true
            } else {
              throwError(
                state,
                'incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line'
              )
            }

            state.position += 1
            ch = following

            //
            // Implicit notation case. Flow-style node as the key first, then ":", and the value.
            //
          } else if (
            composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)
          ) {
            if (state.line === _line) {
              ch = state.input.charCodeAt(state.position)

              while (is_WHITE_SPACE(ch)) {
                ch = state.input.charCodeAt(++state.position)
              }

              if (ch === 0x3a /* : */) {
                ch = state.input.charCodeAt(++state.position)

                if (!is_WS_OR_EOL(ch)) {
                  throwError(
                    state,
                    'a whitespace character is expected after the key-value separator within a block mapping'
                  )
                }

                if (atExplicitKey) {
                  storeMappingPair(
                    state,
                    _result,
                    overridableKeys,
                    keyTag,
                    keyNode,
                    null
                  )
                  keyTag = keyNode = valueNode = null
                }

                detected = true
                atExplicitKey = false
                allowCompact = false
                keyTag = state.tag
                keyNode = state.result
              } else if (detected) {
                throwError(
                  state,
                  'can not read an implicit mapping pair; a colon is missed'
                )
              } else {
                state.tag = _tag
                state.anchor = _anchor
                return true // Keep the result of `composeNode`.
              }
            } else if (detected) {
              throwError(
                state,
                'can not read a block mapping entry; a multiline key may not be an implicit key'
              )
            } else {
              state.tag = _tag
              state.anchor = _anchor
              return true // Keep the result of `composeNode`.
            }
          } else {
            break // Reading is done. Go to the epilogue.
          }

          //
          // Common reading code for both explicit and implicit notations.
          //
          if (state.line === _line || state.lineIndent > nodeIndent) {
            if (
              composeNode(
                state,
                nodeIndent,
                CONTEXT_BLOCK_OUT,
                true,
                allowCompact
              )
            ) {
              if (atExplicitKey) {
                keyNode = state.result
              } else {
                valueNode = state.result
              }
            }

            if (!atExplicitKey) {
              storeMappingPair(
                state,
                _result,
                overridableKeys,
                keyTag,
                keyNode,
                valueNode,
                _line,
                _pos
              )
              keyTag = keyNode = valueNode = null
            }

            skipSeparationSpace(state, true, -1)
            ch = state.input.charCodeAt(state.position)
          }

          if (state.lineIndent > nodeIndent && ch !== 0) {
            throwError(state, 'bad indentation of a mapping entry')
          } else if (state.lineIndent < nodeIndent) {
            break
          }
        }

        //
        // Epilogue.
        //

        // Special case: last mapping's node contains only the key in explicit notation.
        if (atExplicitKey) {
          storeMappingPair(
            state,
            _result,
            overridableKeys,
            keyTag,
            keyNode,
            null
          )
        }

        // Expose the resulting mapping.
        if (detected) {
          state.tag = _tag
          state.anchor = _anchor
          state.kind = 'mapping'
          state.result = _result
        }

        return detected
      }

      function readTagProperty(state) {
        var _position,
          isVerbatim = false,
          isNamed = false,
          tagHandle,
          tagName,
          ch

        ch = state.input.charCodeAt(state.position)

        if (ch !== 0x21 /* ! */) return false

        if (state.tag !== null) {
          throwError(state, 'duplication of a tag property')
        }

        ch = state.input.charCodeAt(++state.position)

        if (ch === 0x3c /* < */) {
          isVerbatim = true
          ch = state.input.charCodeAt(++state.position)
        } else if (ch === 0x21 /* ! */) {
          isNamed = true
          tagHandle = '!!'
          ch = state.input.charCodeAt(++state.position)
        } else {
          tagHandle = '!'
        }

        _position = state.position

        if (isVerbatim) {
          do {
            ch = state.input.charCodeAt(++state.position)
          } while (ch !== 0 && ch !== 0x3e /* > */)

          if (state.position < state.length) {
            tagName = state.input.slice(_position, state.position)
            ch = state.input.charCodeAt(++state.position)
          } else {
            throwError(
              state,
              'unexpected end of the stream within a verbatim tag'
            )
          }
        } else {
          while (ch !== 0 && !is_WS_OR_EOL(ch)) {
            if (ch === 0x21 /* ! */) {
              if (!isNamed) {
                tagHandle = state.input.slice(_position - 1, state.position + 1)

                if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
                  throwError(
                    state,
                    'named tag handle cannot contain such characters'
                  )
                }

                isNamed = true
                _position = state.position + 1
              } else {
                throwError(state, 'tag suffix cannot contain exclamation marks')
              }
            }

            ch = state.input.charCodeAt(++state.position)
          }

          tagName = state.input.slice(_position, state.position)

          if (PATTERN_FLOW_INDICATORS.test(tagName)) {
            throwError(
              state,
              'tag suffix cannot contain flow indicator characters'
            )
          }
        }

        if (tagName && !PATTERN_TAG_URI.test(tagName)) {
          throwError(
            state,
            'tag name cannot contain such characters: ' + tagName
          )
        }

        if (isVerbatim) {
          state.tag = tagName
        } else if (_hasOwnProperty.call(state.tagMap, tagHandle)) {
          state.tag = state.tagMap[tagHandle] + tagName
        } else if (tagHandle === '!') {
          state.tag = '!' + tagName
        } else if (tagHandle === '!!') {
          state.tag = 'tag:yaml.org,2002:' + tagName
        } else {
          throwError(state, 'undeclared tag handle "' + tagHandle + '"')
        }

        return true
      }

      function readAnchorProperty(state) {
        var _position, ch

        ch = state.input.charCodeAt(state.position)

        if (ch !== 0x26 /* & */) return false

        if (state.anchor !== null) {
          throwError(state, 'duplication of an anchor property')
        }

        ch = state.input.charCodeAt(++state.position)
        _position = state.position

        while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
          ch = state.input.charCodeAt(++state.position)
        }

        if (state.position === _position) {
          throwError(
            state,
            'name of an anchor node must contain at least one character'
          )
        }

        state.anchor = state.input.slice(_position, state.position)
        return true
      }

      function readAlias(state) {
        var _position, alias, ch

        ch = state.input.charCodeAt(state.position)

        if (ch !== 0x2a /* * */) return false

        ch = state.input.charCodeAt(++state.position)
        _position = state.position

        while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
          ch = state.input.charCodeAt(++state.position)
        }

        if (state.position === _position) {
          throwError(
            state,
            'name of an alias node must contain at least one character'
          )
        }

        alias = state.input.slice(_position, state.position)

        if (!_hasOwnProperty.call(state.anchorMap, alias)) {
          throwError(state, 'unidentified alias "' + alias + '"')
        }

        state.result = state.anchorMap[alias]
        skipSeparationSpace(state, true, -1)
        return true
      }

      function composeNode(
        state,
        parentIndent,
        nodeContext,
        allowToSeek,
        allowCompact
      ) {
        var allowBlockStyles,
          allowBlockScalars,
          allowBlockCollections,
          indentStatus = 1, // 1: this>parent, 0: this=parent, -1: this<parent
          atNewLine = false,
          hasContent = false,
          typeIndex,
          typeQuantity,
          type,
          flowIndent,
          blockIndent

        if (state.listener !== null) {
          state.listener('open', state)
        }

        state.tag = null
        state.anchor = null
        state.kind = null
        state.result = null

        allowBlockStyles =
          allowBlockScalars =
          allowBlockCollections =
            CONTEXT_BLOCK_OUT === nodeContext ||
            CONTEXT_BLOCK_IN === nodeContext

        if (allowToSeek) {
          if (skipSeparationSpace(state, true, -1)) {
            atNewLine = true

            if (state.lineIndent > parentIndent) {
              indentStatus = 1
            } else if (state.lineIndent === parentIndent) {
              indentStatus = 0
            } else if (state.lineIndent < parentIndent) {
              indentStatus = -1
            }
          }
        }

        if (indentStatus === 1) {
          while (readTagProperty(state) || readAnchorProperty(state)) {
            if (skipSeparationSpace(state, true, -1)) {
              atNewLine = true
              allowBlockCollections = allowBlockStyles

              if (state.lineIndent > parentIndent) {
                indentStatus = 1
              } else if (state.lineIndent === parentIndent) {
                indentStatus = 0
              } else if (state.lineIndent < parentIndent) {
                indentStatus = -1
              }
            } else {
              allowBlockCollections = false
            }
          }
        }

        if (allowBlockCollections) {
          allowBlockCollections = atNewLine || allowCompact
        }

        if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
          if (
            CONTEXT_FLOW_IN === nodeContext ||
            CONTEXT_FLOW_OUT === nodeContext
          ) {
            flowIndent = parentIndent
          } else {
            flowIndent = parentIndent + 1
          }

          blockIndent = state.position - state.lineStart

          if (indentStatus === 1) {
            if (
              (allowBlockCollections &&
                (readBlockSequence(state, blockIndent) ||
                  readBlockMapping(state, blockIndent, flowIndent))) ||
              readFlowCollection(state, flowIndent)
            ) {
              hasContent = true
            } else {
              if (
                (allowBlockScalars && readBlockScalar(state, flowIndent)) ||
                readSingleQuotedScalar(state, flowIndent) ||
                readDoubleQuotedScalar(state, flowIndent)
              ) {
                hasContent = true
              } else if (readAlias(state)) {
                hasContent = true

                if (state.tag !== null || state.anchor !== null) {
                  throwError(state, 'alias node should not have any properties')
                }
              } else if (
                readPlainScalar(
                  state,
                  flowIndent,
                  CONTEXT_FLOW_IN === nodeContext
                )
              ) {
                hasContent = true

                if (state.tag === null) {
                  state.tag = '?'
                }
              }

              if (state.anchor !== null) {
                state.anchorMap[state.anchor] = state.result
              }
            }
          } else if (indentStatus === 0) {
            // Special case: block sequences are allowed to have same indentation level as the parent.
            // http://www.yaml.org/spec/1.2/spec.html#id2799784
            hasContent =
              allowBlockCollections && readBlockSequence(state, blockIndent)
          }
        }

        if (state.tag !== null && state.tag !== '!') {
          if (state.tag === '?') {
            // Implicit resolving is not allowed for non-scalar types, and '?'
            // non-specific tag is only automatically assigned to plain scalars.
            //
            // We only need to check kind conformity in case user explicitly assigns '?'
            // tag, for example like this: "!<?> [0]"
            //
            if (state.result !== null && state.kind !== 'scalar') {
              throwError(
                state,
                'unacceptable node kind for !<?> tag; it should be "scalar", not "' +
                  state.kind +
                  '"'
              )
            }

            for (
              typeIndex = 0, typeQuantity = state.implicitTypes.length;
              typeIndex < typeQuantity;
              typeIndex += 1
            ) {
              type = state.implicitTypes[typeIndex]

              if (type.resolve(state.result)) {
                // `state.result` updated in resolver if matched
                state.result = type.construct(state.result)
                state.tag = type.tag
                if (state.anchor !== null) {
                  state.anchorMap[state.anchor] = state.result
                }
                break
              }
            }
          } else if (
            _hasOwnProperty.call(
              state.typeMap[state.kind || 'fallback'],
              state.tag
            )
          ) {
            type = state.typeMap[state.kind || 'fallback'][state.tag]

            if (state.result !== null && type.kind !== state.kind) {
              throwError(
                state,
                'unacceptable node kind for !<' +
                  state.tag +
                  '> tag; it should be "' +
                  type.kind +
                  '", not "' +
                  state.kind +
                  '"'
              )
            }

            if (!type.resolve(state.result)) {
              // `state.result` updated in resolver if matched
              throwError(
                state,
                'cannot resolve a node with !<' + state.tag + '> explicit tag'
              )
            } else {
              state.result = type.construct(state.result)
              if (state.anchor !== null) {
                state.anchorMap[state.anchor] = state.result
              }
            }
          } else {
            throwError(state, 'unknown tag !<' + state.tag + '>')
          }
        }

        if (state.listener !== null) {
          state.listener('close', state)
        }
        return state.tag !== null || state.anchor !== null || hasContent
      }

      function readDocument(state) {
        var documentStart = state.position,
          _position,
          directiveName,
          directiveArgs,
          hasDirectives = false,
          ch

        state.version = null
        state.checkLineBreaks = state.legacy
        state.tagMap = {}
        state.anchorMap = {}

        while ((ch = state.input.charCodeAt(state.position)) !== 0) {
          skipSeparationSpace(state, true, -1)

          ch = state.input.charCodeAt(state.position)

          if (state.lineIndent > 0 || ch !== 0x25 /* % */) {
            break
          }

          hasDirectives = true
          ch = state.input.charCodeAt(++state.position)
          _position = state.position

          while (ch !== 0 && !is_WS_OR_EOL(ch)) {
            ch = state.input.charCodeAt(++state.position)
          }

          directiveName = state.input.slice(_position, state.position)
          directiveArgs = []

          if (directiveName.length < 1) {
            throwError(
              state,
              'directive name must not be less than one character in length'
            )
          }

          while (ch !== 0) {
            while (is_WHITE_SPACE(ch)) {
              ch = state.input.charCodeAt(++state.position)
            }

            if (ch === 0x23 /* # */) {
              do {
                ch = state.input.charCodeAt(++state.position)
              } while (ch !== 0 && !is_EOL(ch))
              break
            }

            if (is_EOL(ch)) break

            _position = state.position

            while (ch !== 0 && !is_WS_OR_EOL(ch)) {
              ch = state.input.charCodeAt(++state.position)
            }

            directiveArgs.push(state.input.slice(_position, state.position))
          }

          if (ch !== 0) readLineBreak(state)

          if (_hasOwnProperty.call(directiveHandlers, directiveName)) {
            directiveHandlers[directiveName](
              state,
              directiveName,
              directiveArgs
            )
          } else {
            throwWarning(
              state,
              'unknown document directive "' + directiveName + '"'
            )
          }
        }

        skipSeparationSpace(state, true, -1)

        if (
          state.lineIndent === 0 &&
          state.input.charCodeAt(state.position) === 0x2d /* - */ &&
          state.input.charCodeAt(state.position + 1) === 0x2d /* - */ &&
          state.input.charCodeAt(state.position + 2) === 0x2d /* - */
        ) {
          state.position += 3
          skipSeparationSpace(state, true, -1)
        } else if (hasDirectives) {
          throwError(state, 'directives end mark is expected')
        }

        composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true)
        skipSeparationSpace(state, true, -1)

        if (
          state.checkLineBreaks &&
          PATTERN_NON_ASCII_LINE_BREAKS.test(
            state.input.slice(documentStart, state.position)
          )
        ) {
          throwWarning(
            state,
            'non-ASCII line breaks are interpreted as content'
          )
        }

        state.documents.push(state.result)

        if (
          state.position === state.lineStart &&
          testDocumentSeparator(state)
        ) {
          if (state.input.charCodeAt(state.position) === 0x2e /* . */) {
            state.position += 3
            skipSeparationSpace(state, true, -1)
          }
          return
        }

        if (state.position < state.length - 1) {
          throwError(
            state,
            'end of the stream or a document separator is expected'
          )
        } else {
          return
        }
      }

      function loadDocuments(input, options) {
        input = String(input)
        options = options || {}

        if (input.length !== 0) {
          // Add tailing `\n` if not exists
          if (
            input.charCodeAt(input.length - 1) !== 0x0a /* LF */ &&
            input.charCodeAt(input.length - 1) !== 0x0d /* CR */
          ) {
            input += '\n'
          }

          // Strip BOM
          if (input.charCodeAt(0) === 0xfeff) {
            input = input.slice(1)
          }
        }

        var state = new State(input, options)

        var nullpos = input.indexOf('\0')

        if (nullpos !== -1) {
          state.position = nullpos
          throwError(state, 'null byte is not allowed in input')
        }

        // Use 0 as string terminator. That significantly simplifies bounds check.
        state.input += '\0'

        while (state.input.charCodeAt(state.position) === 0x20 /* Space */) {
          state.lineIndent += 1
          state.position += 1
        }

        while (state.position < state.length - 1) {
          readDocument(state)
        }

        return state.documents
      }

      function loadAll(input, iterator, options) {
        if (
          iterator !== null &&
          typeof iterator === 'object' &&
          typeof options === 'undefined'
        ) {
          options = iterator
          iterator = null
        }

        var documents = loadDocuments(input, options)

        if (typeof iterator !== 'function') {
          return documents
        }

        for (
          var index = 0, length = documents.length;
          index < length;
          index += 1
        ) {
          iterator(documents[index])
        }
      }

      function load(input, options) {
        var documents = loadDocuments(input, options)

        if (documents.length === 0) {
          /*eslint-disable no-undefined*/
          return undefined
        } else if (documents.length === 1) {
          return documents[0]
        }
        throw new YAMLException(
          'expected a single document in the stream, but found more'
        )
      }

      function safeLoadAll(input, iterator, options) {
        if (
          typeof iterator === 'object' &&
          iterator !== null &&
          typeof options === 'undefined'
        ) {
          options = iterator
          iterator = null
        }

        return loadAll(
          input,
          iterator,
          common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options)
        )
      }

      function safeLoad(input, options) {
        return load(
          input,
          common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options)
        )
      }

      module.exports.loadAll = loadAll
      module.exports.load = load
      module.exports.safeLoadAll = safeLoadAll
      module.exports.safeLoad = safeLoad

      /***/
    },

    /***/ 5426: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      'use strict'

      var common = __nccwpck_require__(9136)

      function Mark(name, buffer, position, line, column) {
        this.name = name
        this.buffer = buffer
        this.position = position
        this.line = line
        this.column = column
      }

      Mark.prototype.getSnippet = function getSnippet(indent, maxLength) {
        var head, start, tail, end, snippet

        if (!this.buffer) return null

        indent = indent || 4
        maxLength = maxLength || 75

        head = ''
        start = this.position

        while (
          start > 0 &&
          '\x00\r\n\x85\u2028\u2029'.indexOf(this.buffer.charAt(start - 1)) ===
            -1
        ) {
          start -= 1
          if (this.position - start > maxLength / 2 - 1) {
            head = ' ... '
            start += 5
            break
          }
        }

        tail = ''
        end = this.position

        while (
          end < this.buffer.length &&
          '\x00\r\n\x85\u2028\u2029'.indexOf(this.buffer.charAt(end)) === -1
        ) {
          end += 1
          if (end - this.position > maxLength / 2 - 1) {
            tail = ' ... '
            end -= 5
            break
          }
        }

        snippet = this.buffer.slice(start, end)

        return (
          common.repeat(' ', indent) +
          head +
          snippet +
          tail +
          '\n' +
          common.repeat(' ', indent + this.position - start + head.length) +
          '^'
        )
      }

      Mark.prototype.toString = function toString(compact) {
        var snippet,
          where = ''

        if (this.name) {
          where += 'in "' + this.name + '" '
        }

        where += 'at line ' + (this.line + 1) + ', column ' + (this.column + 1)

        if (!compact) {
          snippet = this.getSnippet()

          if (snippet) {
            where += ':\n' + snippet
          }
        }

        return where
      }

      module.exports = Mark

      /***/
    },

    /***/ 6514: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      'use strict'

      /*eslint-disable max-len*/

      var common = __nccwpck_require__(9136)
      var YAMLException = __nccwpck_require__(5199)
      var Type = __nccwpck_require__(967)

      function compileList(schema, name, result) {
        var exclude = []

        schema.include.forEach(function (includedSchema) {
          result = compileList(includedSchema, name, result)
        })

        schema[name].forEach(function (currentType) {
          result.forEach(function (previousType, previousIndex) {
            if (
              previousType.tag === currentType.tag &&
              previousType.kind === currentType.kind
            ) {
              exclude.push(previousIndex)
            }
          })

          result.push(currentType)
        })

        return result.filter(function (type, index) {
          return exclude.indexOf(index) === -1
        })
      }

      function compileMap(/* lists... */) {
        var result = {
            scalar: {},
            sequence: {},
            mapping: {},
            fallback: {}
          },
          index,
          length

        function collectType(type) {
          result[type.kind][type.tag] = result['fallback'][type.tag] = type
        }

        for (index = 0, length = arguments.length; index < length; index += 1) {
          arguments[index].forEach(collectType)
        }
        return result
      }

      function Schema(definition) {
        this.include = definition.include || []
        this.implicit = definition.implicit || []
        this.explicit = definition.explicit || []

        this.implicit.forEach(function (type) {
          if (type.loadKind && type.loadKind !== 'scalar') {
            throw new YAMLException(
              'There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.'
            )
          }
        })

        this.compiledImplicit = compileList(this, 'implicit', [])
        this.compiledExplicit = compileList(this, 'explicit', [])
        this.compiledTypeMap = compileMap(
          this.compiledImplicit,
          this.compiledExplicit
        )
      }

      Schema.DEFAULT = null

      Schema.create = function createSchema() {
        var schemas, types

        switch (arguments.length) {
          case 1:
            schemas = Schema.DEFAULT
            types = arguments[0]
            break

          case 2:
            schemas = arguments[0]
            types = arguments[1]
            break

          default:
            throw new YAMLException(
              'Wrong number of arguments for Schema.create function'
            )
        }

        schemas = common.toArray(schemas)
        types = common.toArray(types)

        if (
          !schemas.every(function (schema) {
            return schema instanceof Schema
          })
        ) {
          throw new YAMLException(
            'Specified list of super schemas (or a single Schema object) contains a non-Schema object.'
          )
        }

        if (
          !types.every(function (type) {
            return type instanceof Type
          })
        ) {
          throw new YAMLException(
            'Specified list of YAML types (or a single Type object) contains a non-Type object.'
          )
        }

        return new Schema({
          include: schemas,
          explicit: types
        })
      }

      module.exports = Schema

      /***/
    },

    /***/ 2183: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      'use strict'
      // Standard YAML's Core schema.
      // http://www.yaml.org/spec/1.2/spec.html#id2804923
      //
      // NOTE: JS-YAML does not support schema-specific tag resolution restrictions.
      // So, Core schema has no distinctions from JSON schema is JS-YAML.

      var Schema = __nccwpck_require__(6514)

      module.exports = new Schema({
        include: [__nccwpck_require__(1571)]
      })

      /***/
    },

    /***/ 6874: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      'use strict'
      // JS-YAML's default schema for `load` function.
      // It is not described in the YAML specification.
      //
      // This schema is based on JS-YAML's default safe schema and includes
      // JavaScript-specific types: !!js/undefined, !!js/regexp and !!js/function.
      //
      // Also this schema is used as default base schema at `Schema.create` function.

      var Schema = __nccwpck_require__(6514)

      module.exports = Schema.DEFAULT = new Schema({
        include: [__nccwpck_require__(8949)],
        explicit: [
          __nccwpck_require__(5914),
          __nccwpck_require__(9242),
          __nccwpck_require__(7278)
        ]
      })

      /***/
    },

    /***/ 8949: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      'use strict'
      // JS-YAML's default schema for `safeLoad` function.
      // It is not described in the YAML specification.
      //
      // This schema is based on standard YAML's Core schema and includes most of
      // extra types described at YAML tag repository. (http://yaml.org/type/)

      var Schema = __nccwpck_require__(6514)

      module.exports = new Schema({
        include: [__nccwpck_require__(2183)],
        implicit: [__nccwpck_require__(3714), __nccwpck_require__(1393)],
        explicit: [
          __nccwpck_require__(2551),
          __nccwpck_require__(6668),
          __nccwpck_require__(6039),
          __nccwpck_require__(9237)
        ]
      })

      /***/
    },

    /***/ 6037: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      'use strict'
      // Standard YAML's Failsafe schema.
      // http://www.yaml.org/spec/1.2/spec.html#id2802346

      var Schema = __nccwpck_require__(6514)

      module.exports = new Schema({
        explicit: [
          __nccwpck_require__(2672),
          __nccwpck_require__(5490),
          __nccwpck_require__(1173)
        ]
      })

      /***/
    },

    /***/ 1571: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      'use strict'
      // Standard YAML's JSON schema.
      // http://www.yaml.org/spec/1.2/spec.html#id2803231
      //
      // NOTE: JS-YAML does not support schema-specific tag resolution restrictions.
      // So, this schema is not such strict as defined in the YAML specification.
      // It allows numbers in binary notaion, use `Null` and `NULL` as `null`, etc.

      var Schema = __nccwpck_require__(6514)

      module.exports = new Schema({
        include: [__nccwpck_require__(6037)],
        implicit: [
          __nccwpck_require__(2671),
          __nccwpck_require__(4675),
          __nccwpck_require__(9963),
          __nccwpck_require__(5564)
        ]
      })

      /***/
    },

    /***/ 967: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      'use strict'

      var YAMLException = __nccwpck_require__(5199)

      var TYPE_CONSTRUCTOR_OPTIONS = [
        'kind',
        'resolve',
        'construct',
        'instanceOf',
        'predicate',
        'represent',
        'defaultStyle',
        'styleAliases'
      ]

      var YAML_NODE_KINDS = ['scalar', 'sequence', 'mapping']

      function compileStyleAliases(map) {
        var result = {}

        if (map !== null) {
          Object.keys(map).forEach(function (style) {
            map[style].forEach(function (alias) {
              result[String(alias)] = style
            })
          })
        }

        return result
      }

      function Type(tag, options) {
        options = options || {}

        Object.keys(options).forEach(function (name) {
          if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) {
            throw new YAMLException(
              'Unknown option "' +
                name +
                '" is met in definition of "' +
                tag +
                '" YAML type.'
            )
          }
        })

        // TODO: Add tag format check.
        this.tag = tag
        this.kind = options['kind'] || null
        this.resolve =
          options['resolve'] ||
          function () {
            return true
          }
        this.construct =
          options['construct'] ||
          function (data) {
            return data
          }
        this.instanceOf = options['instanceOf'] || null
        this.predicate = options['predicate'] || null
        this.represent = options['represent'] || null
        this.defaultStyle = options['defaultStyle'] || null
        this.styleAliases = compileStyleAliases(options['styleAliases'] || null)

        if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
          throw new YAMLException(
            'Unknown kind "' +
              this.kind +
              '" is specified for "' +
              tag +
              '" YAML type.'
          )
        }
      }

      module.exports = Type

      /***/
    },

    /***/ 2551: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      'use strict'

      /*eslint-disable no-bitwise*/

      var NodeBuffer

      try {
        // A trick for browserified version, to not include `Buffer` shim
        var _require = require
        NodeBuffer = _require('buffer').Buffer
      } catch (__) {}

      var Type = __nccwpck_require__(967)

      // [ 64, 65, 66 ] -> [ padding, CR, LF ]
      var BASE64_MAP =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r'

      function resolveYamlBinary(data) {
        if (data === null) return false

        var code,
          idx,
          bitlen = 0,
          max = data.length,
          map = BASE64_MAP

        // Convert one by one.
        for (idx = 0; idx < max; idx++) {
          code = map.indexOf(data.charAt(idx))

          // Skip CR/LF
          if (code > 64) continue

          // Fail on illegal characters
          if (code < 0) return false

          bitlen += 6
        }

        // If there are any bits left, source was corrupted
        return bitlen % 8 === 0
      }

      function constructYamlBinary(data) {
        var idx,
          tailbits,
          input = data.replace(/[\r\n=]/g, ''), // remove CR/LF & padding to simplify scan
          max = input.length,
          map = BASE64_MAP,
          bits = 0,
          result = []

        // Collect by 6*4 bits (3 bytes)

        for (idx = 0; idx < max; idx++) {
          if (idx % 4 === 0 && idx) {
            result.push((bits >> 16) & 0xff)
            result.push((bits >> 8) & 0xff)
            result.push(bits & 0xff)
          }

          bits = (bits << 6) | map.indexOf(input.charAt(idx))
        }

        // Dump tail

        tailbits = (max % 4) * 6

        if (tailbits === 0) {
          result.push((bits >> 16) & 0xff)
          result.push((bits >> 8) & 0xff)
          result.push(bits & 0xff)
        } else if (tailbits === 18) {
          result.push((bits >> 10) & 0xff)
          result.push((bits >> 2) & 0xff)
        } else if (tailbits === 12) {
          result.push((bits >> 4) & 0xff)
        }

        // Wrap into Buffer for NodeJS and leave Array for browser
        if (NodeBuffer) {
          // Support node 6.+ Buffer API when available
          return NodeBuffer.from
            ? NodeBuffer.from(result)
            : new NodeBuffer(result)
        }

        return result
      }

      function representYamlBinary(object /*, style*/) {
        var result = '',
          bits = 0,
          idx,
          tail,
          max = object.length,
          map = BASE64_MAP

        // Convert every three bytes to 4 ASCII characters.

        for (idx = 0; idx < max; idx++) {
          if (idx % 3 === 0 && idx) {
            result += map[(bits >> 18) & 0x3f]
            result += map[(bits >> 12) & 0x3f]
            result += map[(bits >> 6) & 0x3f]
            result += map[bits & 0x3f]
          }

          bits = (bits << 8) + object[idx]
        }

        // Dump tail

        tail = max % 3

        if (tail === 0) {
          result += map[(bits >> 18) & 0x3f]
          result += map[(bits >> 12) & 0x3f]
          result += map[(bits >> 6) & 0x3f]
          result += map[bits & 0x3f]
        } else if (tail === 2) {
          result += map[(bits >> 10) & 0x3f]
          result += map[(bits >> 4) & 0x3f]
          result += map[(bits << 2) & 0x3f]
          result += map[64]
        } else if (tail === 1) {
          result += map[(bits >> 2) & 0x3f]
          result += map[(bits << 4) & 0x3f]
          result += map[64]
          result += map[64]
        }

        return result
      }

      function isBinary(object) {
        return NodeBuffer && NodeBuffer.isBuffer(object)
      }

      module.exports = new Type('tag:yaml.org,2002:binary', {
        kind: 'scalar',
        resolve: resolveYamlBinary,
        construct: constructYamlBinary,
        predicate: isBinary,
        represent: representYamlBinary
      })

      /***/
    },

    /***/ 4675: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      'use strict'

      var Type = __nccwpck_require__(967)

      function resolveYamlBoolean(data) {
        if (data === null) return false

        var max = data.length

        return (
          (max === 4 &&
            (data === 'true' || data === 'True' || data === 'TRUE')) ||
          (max === 5 &&
            (data === 'false' || data === 'False' || data === 'FALSE'))
        )
      }

      function constructYamlBoolean(data) {
        return data === 'true' || data === 'True' || data === 'TRUE'
      }

      function isBoolean(object) {
        return Object.prototype.toString.call(object) === '[object Boolean]'
      }

      module.exports = new Type('tag:yaml.org,2002:bool', {
        kind: 'scalar',
        resolve: resolveYamlBoolean,
        construct: constructYamlBoolean,
        predicate: isBoolean,
        represent: {
          lowercase: function (object) {
            return object ? 'true' : 'false'
          },
          uppercase: function (object) {
            return object ? 'TRUE' : 'FALSE'
          },
          camelcase: function (object) {
            return object ? 'True' : 'False'
          }
        },
        defaultStyle: 'lowercase'
      })

      /***/
    },

    /***/ 5564: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      'use strict'

      var common = __nccwpck_require__(9136)
      var Type = __nccwpck_require__(967)

      var YAML_FLOAT_PATTERN = new RegExp(
        // 2.5e4, 2.5 and integers
        '^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?' +
          // .2e4, .2
          // special case, seems not from spec
          '|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?' +
          // 20:59
          '|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*' +
          // .inf
          '|[-+]?\\.(?:inf|Inf|INF)' +
          // .nan
          '|\\.(?:nan|NaN|NAN))$'
      )

      function resolveYamlFloat(data) {
        if (data === null) return false

        if (
          !YAML_FLOAT_PATTERN.test(data) ||
          // Quick hack to not allow integers end with `_`
          // Probably should update regexp & check speed
          data[data.length - 1] === '_'
        ) {
          return false
        }

        return true
      }

      function constructYamlFloat(data) {
        var value, sign, base, digits

        value = data.replace(/_/g, '').toLowerCase()
        sign = value[0] === '-' ? -1 : 1
        digits = []

        if ('+-'.indexOf(value[0]) >= 0) {
          value = value.slice(1)
        }

        if (value === '.inf') {
          return sign === 1
            ? Number.POSITIVE_INFINITY
            : Number.NEGATIVE_INFINITY
        } else if (value === '.nan') {
          return NaN
        } else if (value.indexOf(':') >= 0) {
          value.split(':').forEach(function (v) {
            digits.unshift(parseFloat(v, 10))
          })

          value = 0.0
          base = 1

          digits.forEach(function (d) {
            value += d * base
            base *= 60
          })

          return sign * value
        }
        return sign * parseFloat(value, 10)
      }

      var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/

      function representYamlFloat(object, style) {
        var res

        if (isNaN(object)) {
          switch (style) {
            case 'lowercase':
              return '.nan'
            case 'uppercase':
              return '.NAN'
            case 'camelcase':
              return '.NaN'
          }
        } else if (Number.POSITIVE_INFINITY === object) {
          switch (style) {
            case 'lowercase':
              return '.inf'
            case 'uppercase':
              return '.INF'
            case 'camelcase':
              return '.Inf'
          }
        } else if (Number.NEGATIVE_INFINITY === object) {
          switch (style) {
            case 'lowercase':
              return '-.inf'
            case 'uppercase':
              return '-.INF'
            case 'camelcase':
              return '-.Inf'
          }
        } else if (common.isNegativeZero(object)) {
          return '-0.0'
        }

        res = object.toString(10)

        // JS stringifier can build scientific format without dots: 5e-100,
        // while YAML requres dot: 5.e-100. Fix it with simple hack

        return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace('e', '.e') : res
      }

      function isFloat(object) {
        return (
          Object.prototype.toString.call(object) === '[object Number]' &&
          (object % 1 !== 0 || common.isNegativeZero(object))
        )
      }

      module.exports = new Type('tag:yaml.org,2002:float', {
        kind: 'scalar',
        resolve: resolveYamlFloat,
        construct: constructYamlFloat,
        predicate: isFloat,
        represent: representYamlFloat,
        defaultStyle: 'lowercase'
      })

      /***/
    },

    /***/ 9963: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      'use strict'

      var common = __nccwpck_require__(9136)
      var Type = __nccwpck_require__(967)

      function isHexCode(c) {
        return (
          (0x30 /* 0 */ <= c && c <= 0x39 /* 9 */) ||
          (0x41 /* A */ <= c && c <= 0x46 /* F */) ||
          (0x61 /* a */ <= c && c <= 0x66 /* f */)
        )
      }

      function isOctCode(c) {
        return 0x30 /* 0 */ <= c && c <= 0x37 /* 7 */
      }

      function isDecCode(c) {
        return 0x30 /* 0 */ <= c && c <= 0x39 /* 9 */
      }

      function resolveYamlInteger(data) {
        if (data === null) return false

        var max = data.length,
          index = 0,
          hasDigits = false,
          ch

        if (!max) return false

        ch = data[index]

        // sign
        if (ch === '-' || ch === '+') {
          ch = data[++index]
        }

        if (ch === '0') {
          // 0
          if (index + 1 === max) return true
          ch = data[++index]

          // base 2, base 8, base 16

          if (ch === 'b') {
            // base 2
            index++

            for (; index < max; index++) {
              ch = data[index]
              if (ch === '_') continue
              if (ch !== '0' && ch !== '1') return false
              hasDigits = true
            }
            return hasDigits && ch !== '_'
          }

          if (ch === 'x') {
            // base 16
            index++

            for (; index < max; index++) {
              ch = data[index]
              if (ch === '_') continue
              if (!isHexCode(data.charCodeAt(index))) return false
              hasDigits = true
            }
            return hasDigits && ch !== '_'
          }

          // base 8
          for (; index < max; index++) {
            ch = data[index]
            if (ch === '_') continue
            if (!isOctCode(data.charCodeAt(index))) return false
            hasDigits = true
          }
          return hasDigits && ch !== '_'
        }

        // base 10 (except 0) or base 60

        // value should not start with `_`;
        if (ch === '_') return false

        for (; index < max; index++) {
          ch = data[index]
          if (ch === '_') continue
          if (ch === ':') break
          if (!isDecCode(data.charCodeAt(index))) {
            return false
          }
          hasDigits = true
        }

        // Should have digits and should not end with `_`
        if (!hasDigits || ch === '_') return false

        // if !base60 - done;
        if (ch !== ':') return true

        // base60 almost not used, no needs to optimize
        return /^(:[0-5]?[0-9])+$/.test(data.slice(index))
      }

      function constructYamlInteger(data) {
        var value = data,
          sign = 1,
          ch,
          base,
          digits = []

        if (value.indexOf('_') !== -1) {
          value = value.replace(/_/g, '')
        }

        ch = value[0]

        if (ch === '-' || ch === '+') {
          if (ch === '-') sign = -1
          value = value.slice(1)
          ch = value[0]
        }

        if (value === '0') return 0

        if (ch === '0') {
          if (value[1] === 'b') return sign * parseInt(value.slice(2), 2)
          if (value[1] === 'x') return sign * parseInt(value, 16)
          return sign * parseInt(value, 8)
        }

        if (value.indexOf(':') !== -1) {
          value.split(':').forEach(function (v) {
            digits.unshift(parseInt(v, 10))
          })

          value = 0
          base = 1

          digits.forEach(function (d) {
            value += d * base
            base *= 60
          })

          return sign * value
        }

        return sign * parseInt(value, 10)
      }

      function isInteger(object) {
        return (
          Object.prototype.toString.call(object) === '[object Number]' &&
          object % 1 === 0 &&
          !common.isNegativeZero(object)
        )
      }

      module.exports = new Type('tag:yaml.org,2002:int', {
        kind: 'scalar',
        resolve: resolveYamlInteger,
        construct: constructYamlInteger,
        predicate: isInteger,
        represent: {
          binary: function (obj) {
            return obj >= 0
              ? '0b' + obj.toString(2)
              : '-0b' + obj.toString(2).slice(1)
          },
          octal: function (obj) {
            return obj >= 0
              ? '0' + obj.toString(8)
              : '-0' + obj.toString(8).slice(1)
          },
          decimal: function (obj) {
            return obj.toString(10)
          },
          /* eslint-disable max-len */
          hexadecimal: function (obj) {
            return obj >= 0
              ? '0x' + obj.toString(16).toUpperCase()
              : '-0x' + obj.toString(16).toUpperCase().slice(1)
          }
        },
        defaultStyle: 'decimal',
        styleAliases: {
          binary: [2, 'bin'],
          octal: [8, 'oct'],
          decimal: [10, 'dec'],
          hexadecimal: [16, 'hex']
        }
      })

      /***/
    },

    /***/ 7278: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      'use strict'

      var esprima

      // Browserified version does not have esprima
      //
      // 1. For node.js just require module as deps
      // 2. For browser try to require mudule via external AMD system.
      //    If not found - try to fallback to window.esprima. If not
      //    found too - then fail to parse.
      //
      try {
        // workaround to exclude package from browserify list.
        var _require = require
        esprima = _require('esprima')
      } catch (_) {
        /* eslint-disable no-redeclare */
        /* global window */
        if (typeof window !== 'undefined') esprima = window.esprima
      }

      var Type = __nccwpck_require__(967)

      function resolveJavascriptFunction(data) {
        if (data === null) return false

        try {
          var source = '(' + data + ')',
            ast = esprima.parse(source, { range: true })

          if (
            ast.type !== 'Program' ||
            ast.body.length !== 1 ||
            ast.body[0].type !== 'ExpressionStatement' ||
            (ast.body[0].expression.type !== 'ArrowFunctionExpression' &&
              ast.body[0].expression.type !== 'FunctionExpression')
          ) {
            return false
          }

          return true
        } catch (err) {
          return false
        }
      }

      function constructJavascriptFunction(data) {
        /*jslint evil:true*/

        var source = '(' + data + ')',
          ast = esprima.parse(source, { range: true }),
          params = [],
          body

        if (
          ast.type !== 'Program' ||
          ast.body.length !== 1 ||
          ast.body[0].type !== 'ExpressionStatement' ||
          (ast.body[0].expression.type !== 'ArrowFunctionExpression' &&
            ast.body[0].expression.type !== 'FunctionExpression')
        ) {
          throw new Error('Failed to resolve function')
        }

        ast.body[0].expression.params.forEach(function (param) {
          params.push(param.name)
        })

        body = ast.body[0].expression.body.range

        // Esprima's ranges include the first '{' and the last '}' characters on
        // function expressions. So cut them out.
        if (ast.body[0].expression.body.type === 'BlockStatement') {
          /*eslint-disable no-new-func*/
          return new Function(params, source.slice(body[0] + 1, body[1] - 1))
        }
        // ES6 arrow functions can omit the BlockStatement. In that case, just return
        // the body.
        /*eslint-disable no-new-func*/
        return new Function(params, 'return ' + source.slice(body[0], body[1]))
      }

      function representJavascriptFunction(object /*, style*/) {
        return object.toString()
      }

      function isFunction(object) {
        return Object.prototype.toString.call(object) === '[object Function]'
      }

      module.exports = new Type('tag:yaml.org,2002:js/function', {
        kind: 'scalar',
        resolve: resolveJavascriptFunction,
        construct: constructJavascriptFunction,
        predicate: isFunction,
        represent: representJavascriptFunction
      })

      /***/
    },

    /***/ 9242: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      'use strict'

      var Type = __nccwpck_require__(967)

      function resolveJavascriptRegExp(data) {
        if (data === null) return false
        if (data.length === 0) return false

        var regexp = data,
          tail = /\/([gim]*)$/.exec(data),
          modifiers = ''

        // if regexp starts with '/' it can have modifiers and must be properly closed
        // `/foo/gim` - modifiers tail can be maximum 3 chars
        if (regexp[0] === '/') {
          if (tail) modifiers = tail[1]

          if (modifiers.length > 3) return false
          // if expression starts with /, is should be properly terminated
          if (regexp[regexp.length - modifiers.length - 1] !== '/') return false
        }

        return true
      }

      function constructJavascriptRegExp(data) {
        var regexp = data,
          tail = /\/([gim]*)$/.exec(data),
          modifiers = ''

        // `/foo/gim` - tail can be maximum 4 chars
        if (regexp[0] === '/') {
          if (tail) modifiers = tail[1]
          regexp = regexp.slice(1, regexp.length - modifiers.length - 1)
        }

        return new RegExp(regexp, modifiers)
      }

      function representJavascriptRegExp(object /*, style*/) {
        var result = '/' + object.source + '/'

        if (object.global) result += 'g'
        if (object.multiline) result += 'm'
        if (object.ignoreCase) result += 'i'

        return result
      }

      function isRegExp(object) {
        return Object.prototype.toString.call(object) === '[object RegExp]'
      }

      module.exports = new Type('tag:yaml.org,2002:js/regexp', {
        kind: 'scalar',
        resolve: resolveJavascriptRegExp,
        construct: constructJavascriptRegExp,
        predicate: isRegExp,
        represent: representJavascriptRegExp
      })

      /***/
    },

    /***/ 5914: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      'use strict'

      var Type = __nccwpck_require__(967)

      function resolveJavascriptUndefined() {
        return true
      }

      function constructJavascriptUndefined() {
        /*eslint-disable no-undefined*/
        return undefined
      }

      function representJavascriptUndefined() {
        return ''
      }

      function isUndefined(object) {
        return typeof object === 'undefined'
      }

      module.exports = new Type('tag:yaml.org,2002:js/undefined', {
        kind: 'scalar',
        resolve: resolveJavascriptUndefined,
        construct: constructJavascriptUndefined,
        predicate: isUndefined,
        represent: representJavascriptUndefined
      })

      /***/
    },

    /***/ 1173: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      'use strict'

      var Type = __nccwpck_require__(967)

      module.exports = new Type('tag:yaml.org,2002:map', {
        kind: 'mapping',
        construct: function (data) {
          return data !== null ? data : {}
        }
      })

      /***/
    },

    /***/ 1393: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      'use strict'

      var Type = __nccwpck_require__(967)

      function resolveYamlMerge(data) {
        return data === '<<' || data === null
      }

      module.exports = new Type('tag:yaml.org,2002:merge', {
        kind: 'scalar',
        resolve: resolveYamlMerge
      })

      /***/
    },

    /***/ 2671: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      'use strict'

      var Type = __nccwpck_require__(967)

      function resolveYamlNull(data) {
        if (data === null) return true

        var max = data.length

        return (
          (max === 1 && data === '~') ||
          (max === 4 && (data === 'null' || data === 'Null' || data === 'NULL'))
        )
      }

      function constructYamlNull() {
        return null
      }

      function isNull(object) {
        return object === null
      }

      module.exports = new Type('tag:yaml.org,2002:null', {
        kind: 'scalar',
        resolve: resolveYamlNull,
        construct: constructYamlNull,
        predicate: isNull,
        represent: {
          canonical: function () {
            return '~'
          },
          lowercase: function () {
            return 'null'
          },
          uppercase: function () {
            return 'NULL'
          },
          camelcase: function () {
            return 'Null'
          }
        },
        defaultStyle: 'lowercase'
      })

      /***/
    },

    /***/ 6668: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      'use strict'

      var Type = __nccwpck_require__(967)

      var _hasOwnProperty = Object.prototype.hasOwnProperty
      var _toString = Object.prototype.toString

      function resolveYamlOmap(data) {
        if (data === null) return true

        var objectKeys = [],
          index,
          length,
          pair,
          pairKey,
          pairHasKey,
          object = data

        for (index = 0, length = object.length; index < length; index += 1) {
          pair = object[index]
          pairHasKey = false

          if (_toString.call(pair) !== '[object Object]') return false

          for (pairKey in pair) {
            if (_hasOwnProperty.call(pair, pairKey)) {
              if (!pairHasKey) pairHasKey = true
              else return false
            }
          }

          if (!pairHasKey) return false

          if (objectKeys.indexOf(pairKey) === -1) objectKeys.push(pairKey)
          else return false
        }

        return true
      }

      function constructYamlOmap(data) {
        return data !== null ? data : []
      }

      module.exports = new Type('tag:yaml.org,2002:omap', {
        kind: 'sequence',
        resolve: resolveYamlOmap,
        construct: constructYamlOmap
      })

      /***/
    },

    /***/ 6039: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      'use strict'

      var Type = __nccwpck_require__(967)

      var _toString = Object.prototype.toString

      function resolveYamlPairs(data) {
        if (data === null) return true

        var index,
          length,
          pair,
          keys,
          result,
          object = data

        result = new Array(object.length)

        for (index = 0, length = object.length; index < length; index += 1) {
          pair = object[index]

          if (_toString.call(pair) !== '[object Object]') return false

          keys = Object.keys(pair)

          if (keys.length !== 1) return false

          result[index] = [keys[0], pair[keys[0]]]
        }

        return true
      }

      function constructYamlPairs(data) {
        if (data === null) return []

        var index,
          length,
          pair,
          keys,
          result,
          object = data

        result = new Array(object.length)

        for (index = 0, length = object.length; index < length; index += 1) {
          pair = object[index]

          keys = Object.keys(pair)

          result[index] = [keys[0], pair[keys[0]]]
        }

        return result
      }

      module.exports = new Type('tag:yaml.org,2002:pairs', {
        kind: 'sequence',
        resolve: resolveYamlPairs,
        construct: constructYamlPairs
      })

      /***/
    },

    /***/ 5490: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      'use strict'

      var Type = __nccwpck_require__(967)

      module.exports = new Type('tag:yaml.org,2002:seq', {
        kind: 'sequence',
        construct: function (data) {
          return data !== null ? data : []
        }
      })

      /***/
    },

    /***/ 9237: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      'use strict'

      var Type = __nccwpck_require__(967)

      var _hasOwnProperty = Object.prototype.hasOwnProperty

      function resolveYamlSet(data) {
        if (data === null) return true

        var key,
          object = data

        for (key in object) {
          if (_hasOwnProperty.call(object, key)) {
            if (object[key] !== null) return false
          }
        }

        return true
      }

      function constructYamlSet(data) {
        return data !== null ? data : {}
      }

      module.exports = new Type('tag:yaml.org,2002:set', {
        kind: 'mapping',
        resolve: resolveYamlSet,
        construct: constructYamlSet
      })

      /***/
    },

    /***/ 2672: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      'use strict'

      var Type = __nccwpck_require__(967)

      module.exports = new Type('tag:yaml.org,2002:str', {
        kind: 'scalar',
        construct: function (data) {
          return data !== null ? data : ''
        }
      })

      /***/
    },

    /***/ 3714: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      'use strict'

      var Type = __nccwpck_require__(967)

      var YAML_DATE_REGEXP = new RegExp(
        '^([0-9][0-9][0-9][0-9])' + // [1] year
          '-([0-9][0-9])' + // [2] month
          '-([0-9][0-9])$'
      ) // [3] day

      var YAML_TIMESTAMP_REGEXP = new RegExp(
        '^([0-9][0-9][0-9][0-9])' + // [1] year
          '-([0-9][0-9]?)' + // [2] month
          '-([0-9][0-9]?)' + // [3] day
          '(?:[Tt]|[ \\t]+)' + // ...
          '([0-9][0-9]?)' + // [4] hour
          ':([0-9][0-9])' + // [5] minute
          ':([0-9][0-9])' + // [6] second
          '(?:\\.([0-9]*))?' + // [7] fraction
          '(?:[ \\t]*(Z|([-+])([0-9][0-9]?)' + // [8] tz [9] tz_sign [10] tz_hour
          '(?::([0-9][0-9]))?))?$'
      ) // [11] tz_minute

      function resolveYamlTimestamp(data) {
        if (data === null) return false
        if (YAML_DATE_REGEXP.exec(data) !== null) return true
        if (YAML_TIMESTAMP_REGEXP.exec(data) !== null) return true
        return false
      }

      function constructYamlTimestamp(data) {
        var match,
          year,
          month,
          day,
          hour,
          minute,
          second,
          fraction = 0,
          delta = null,
          tz_hour,
          tz_minute,
          date

        match = YAML_DATE_REGEXP.exec(data)
        if (match === null) match = YAML_TIMESTAMP_REGEXP.exec(data)

        if (match === null) throw new Error('Date resolve error')

        // match: [1] year [2] month [3] day

        year = +match[1]
        month = +match[2] - 1 // JS month starts with 0
        day = +match[3]

        if (!match[4]) {
          // no hour
          return new Date(Date.UTC(year, month, day))
        }

        // match: [4] hour [5] minute [6] second [7] fraction

        hour = +match[4]
        minute = +match[5]
        second = +match[6]

        if (match[7]) {
          fraction = match[7].slice(0, 3)
          while (fraction.length < 3) {
            // milli-seconds
            fraction += '0'
          }
          fraction = +fraction
        }

        // match: [8] tz [9] tz_sign [10] tz_hour [11] tz_minute

        if (match[9]) {
          tz_hour = +match[10]
          tz_minute = +(match[11] || 0)
          delta = (tz_hour * 60 + tz_minute) * 60000 // delta in mili-seconds
          if (match[9] === '-') delta = -delta
        }

        date = new Date(
          Date.UTC(year, month, day, hour, minute, second, fraction)
        )

        if (delta) date.setTime(date.getTime() - delta)

        return date
      }

      function representYamlTimestamp(object /*, style*/) {
        return object.toISOString()
      }

      module.exports = new Type('tag:yaml.org,2002:timestamp', {
        kind: 'scalar',
        resolve: resolveYamlTimestamp,
        construct: constructYamlTimestamp,
        instanceOf: Date,
        represent: representYamlTimestamp
      })

      /***/
    },

    /***/ 6961: /***/ (module) => {
      var toString = Object.prototype.toString

      module.exports = function kindOf(val) {
        if (val === void 0) return 'undefined'
        if (val === null) return 'null'

        var type = typeof val
        if (type === 'boolean') return 'boolean'
        if (type === 'string') return 'string'
        if (type === 'number') return 'number'
        if (type === 'symbol') return 'symbol'
        if (type === 'function') {
          return isGeneratorFn(val) ? 'generatorfunction' : 'function'
        }

        if (isArray(val)) return 'array'
        if (isBuffer(val)) return 'buffer'
        if (isArguments(val)) return 'arguments'
        if (isDate(val)) return 'date'
        if (isError(val)) return 'error'
        if (isRegexp(val)) return 'regexp'

        switch (ctorName(val)) {
          case 'Symbol':
            return 'symbol'
          case 'Promise':
            return 'promise'

          // Set, Map, WeakSet, WeakMap
          case 'WeakMap':
            return 'weakmap'
          case 'WeakSet':
            return 'weakset'
          case 'Map':
            return 'map'
          case 'Set':
            return 'set'

          // 8-bit typed arrays
          case 'Int8Array':
            return 'int8array'
          case 'Uint8Array':
            return 'uint8array'
          case 'Uint8ClampedArray':
            return 'uint8clampedarray'

          // 16-bit typed arrays
          case 'Int16Array':
            return 'int16array'
          case 'Uint16Array':
            return 'uint16array'

          // 32-bit typed arrays
          case 'Int32Array':
            return 'int32array'
          case 'Uint32Array':
            return 'uint32array'
          case 'Float32Array':
            return 'float32array'
          case 'Float64Array':
            return 'float64array'
        }

        if (isGeneratorObj(val)) {
          return 'generator'
        }

        // Non-plain objects
        type = toString.call(val)
        switch (type) {
          case '[object Object]':
            return 'object'
          // iterators
          case '[object Map Iterator]':
            return 'mapiterator'
          case '[object Set Iterator]':
            return 'setiterator'
          case '[object String Iterator]':
            return 'stringiterator'
          case '[object Array Iterator]':
            return 'arrayiterator'
        }

        // other
        return type.slice(8, -1).toLowerCase().replace(/\s/g, '')
      }

      function ctorName(val) {
        return typeof val.constructor === 'function'
          ? val.constructor.name
          : null
      }

      function isArray(val) {
        if (Array.isArray) return Array.isArray(val)
        return val instanceof Array
      }

      function isError(val) {
        return (
          val instanceof Error ||
          (typeof val.message === 'string' &&
            val.constructor &&
            typeof val.constructor.stackTraceLimit === 'number')
        )
      }

      function isDate(val) {
        if (val instanceof Date) return true
        return (
          typeof val.toDateString === 'function' &&
          typeof val.getDate === 'function' &&
          typeof val.setDate === 'function'
        )
      }

      function isRegexp(val) {
        if (val instanceof RegExp) return true
        return (
          typeof val.flags === 'string' &&
          typeof val.ignoreCase === 'boolean' &&
          typeof val.multiline === 'boolean' &&
          typeof val.global === 'boolean'
        )
      }

      function isGeneratorFn(name, val) {
        return ctorName(name) === 'GeneratorFunction'
      }

      function isGeneratorObj(val) {
        return (
          typeof val.throw === 'function' &&
          typeof val.return === 'function' &&
          typeof val.next === 'function'
        )
      }

      function isArguments(val) {
        try {
          if (
            typeof val.length === 'number' &&
            typeof val.callee === 'function'
          ) {
            return true
          }
        } catch (err) {
          if (err.message.indexOf('callee') !== -1) {
            return true
          }
        }
        return false
      }

      /**
       * If you need to support Safari 5-7 (8-10 yr-old browser),
       * take a look at https://github.com/feross/is-buffer
       */

      function isBuffer(val) {
        if (val.constructor && typeof val.constructor.isBuffer === 'function') {
          return val.constructor.isBuffer(val)
        }
        return false
      }

      /***/
    },

    /***/ 1223: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      var wrappy = __nccwpck_require__(2940)
      module.exports = wrappy(once)
      module.exports.strict = wrappy(onceStrict)

      once.proto = once(function () {
        Object.defineProperty(Function.prototype, 'once', {
          value: function () {
            return once(this)
          },
          configurable: true
        })

        Object.defineProperty(Function.prototype, 'onceStrict', {
          value: function () {
            return onceStrict(this)
          },
          configurable: true
        })
      })

      function once(fn) {
        var f = function () {
          if (f.called) return f.value
          f.called = true
          return (f.value = fn.apply(this, arguments))
        }
        f.called = false
        return f
      }

      function onceStrict(fn) {
        var f = function () {
          if (f.called) throw new Error(f.onceError)
          f.called = true
          return (f.value = fn.apply(this, arguments))
        }
        var name = fn.name || 'Function wrapped with `once`'
        f.onceError = name + " shouldn't be called more than once"
        f.called = false
        return f
      }

      /***/
    },

    /***/ 1762: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      'use strict'

      var typeOf = __nccwpck_require__(6961)
      var extend = __nccwpck_require__(3843)

      /**
       * Parse sections in `input` with the given `options`.
       *
       * ```js
       * var sections = require('{%= name %}');
       * var result = sections(input, options);
       * // { content: 'Content before sections', sections: [] }
       * ```
       * @param {String|Buffer|Object} `input` If input is an object, it's `content` property must be a string or buffer.
       * @param {Object} options
       * @return {Object} Returns an object with a `content` string and an array of `sections` objects.
       * @api public
       */

      module.exports = function (input, options) {
        if (typeof options === 'function') {
          options = { parse: options }
        }

        var file = toObject(input)
        var defaults = { section_delimiter: '---', parse: identity }
        var opts = extend({}, defaults, options)
        var delim = opts.section_delimiter
        var lines = file.content.split(/\r?\n/)
        var sections = null
        var section = createSection()
        var content = []
        var stack = []

        function initSections(val) {
          file.content = val
          sections = []
          content = []
        }

        function closeSection(val) {
          if (stack.length) {
            section.key = getKey(stack[0], delim)
            section.content = val
            opts.parse(section, sections)
            sections.push(section)
            section = createSection()
            content = []
            stack = []
          }
        }

        for (var i = 0; i < lines.length; i++) {
          var line = lines[i]
          var len = stack.length
          var ln = line.trim()

          if (isDelimiter(ln, delim)) {
            if (ln.length === 3 && i !== 0) {
              if (len === 0 || len === 2) {
                content.push(line)
                continue
              }
              stack.push(ln)
              section.data = content.join('\n')
              content = []
              continue
            }

            if (sections === null) {
              initSections(content.join('\n'))
            }

            if (len === 2) {
              closeSection(content.join('\n'))
            }

            stack.push(ln)
            continue
          }

          content.push(line)
        }

        if (sections === null) {
          initSections(content.join('\n'))
        } else {
          closeSection(content.join('\n'))
        }

        file.sections = sections
        return file
      }

      function isDelimiter(line, delim) {
        if (line.slice(0, delim.length) !== delim) {
          return false
        }
        if (line.charAt(delim.length + 1) === delim.slice(-1)) {
          return false
        }
        return true
      }

      function toObject(input) {
        if (typeOf(input) !== 'object') {
          input = { content: input }
        }

        if (typeof input.content !== 'string' && !isBuffer(input.content)) {
          throw new TypeError('expected a buffer or string')
        }

        input.content = input.content.toString()
        input.sections = []
        return input
      }

      function getKey(val, delim) {
        return val ? val.slice(delim.length).trim() : ''
      }

      function createSection() {
        return { key: '', data: '', content: '' }
      }

      function identity(val) {
        return val
      }

      function isBuffer(val) {
        if (
          val &&
          val.constructor &&
          typeof val.constructor.isBuffer === 'function'
        ) {
          return val.constructor.isBuffer(val)
        }
        return false
      }

      /***/
    },

    /***/ 3843: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      'use strict'

      var isObject = __nccwpck_require__(7967)

      module.exports = function extend(o /*, objects*/) {
        if (!isObject(o)) {
          o = {}
        }

        var len = arguments.length
        for (var i = 1; i < len; i++) {
          var obj = arguments[i]

          if (isObject(obj)) {
            assign(o, obj)
          }
        }
        return o
      }

      function assign(a, b) {
        for (var key in b) {
          if (hasOwn(b, key)) {
            a[key] = b[key]
          }
        }
      }

      /**
       * Returns true if the given `key` is an own property of `obj`.
       */

      function hasOwn(obj, key) {
        return Object.prototype.hasOwnProperty.call(obj, key)
      }

      /***/
    },

    /***/ 7967: /***/ (module) => {
      'use strict'
      /*!
       * is-extendable <https://github.com/jonschlinkert/is-extendable>
       *
       * Copyright (c) 2015, Jon Schlinkert.
       * Licensed under the MIT License.
       */

      module.exports = function isExtendable(val) {
        return (
          typeof val !== 'undefined' &&
          val !== null &&
          (typeof val === 'object' || typeof val === 'function')
        )
      }

      /***/
    },

    /***/ 6550: /***/ (module) => {
      'use strict'
      /*!
       * strip-bom-string <https://github.com/jonschlinkert/strip-bom-string>
       *
       * Copyright (c) 2015, 2017, Jon Schlinkert.
       * Released under the MIT License.
       */

      module.exports = function (str) {
        if (typeof str === 'string' && str.charAt(0) === '\ufeff') {
          return str.slice(1)
        }
        return str
      }

      /***/
    },

    /***/ 4920: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      var parser = __nccwpck_require__(5642)
      var compiler = __nccwpck_require__(8215)

      module.exports = {
        parse: function (input) {
          var nodes = parser.parse(input.toString())
          return compiler.compile(nodes)
        }
      }

      /***/
    },

    /***/ 8215: /***/ (module) => {
      'use strict'

      function compile(nodes) {
        var assignedPaths = []
        var valueAssignments = []
        var currentPath = ''
        var data = Object.create(null)
        var context = data
        var arrayMode = false

        return reduce(nodes)

        function reduce(nodes) {
          var node
          for (var i = 0; i < nodes.length; i++) {
            node = nodes[i]
            switch (node.type) {
              case 'Assign':
                assign(node)
                break
              case 'ObjectPath':
                setPath(node)
                break
              case 'ArrayPath':
                addTableArray(node)
                break
            }
          }

          return data
        }

        function genError(err, line, col) {
          var ex = new Error(err)
          ex.line = line
          ex.column = col
          throw ex
        }

        function assign(node) {
          var key = node.key
          var value = node.value
          var line = node.line
          var column = node.column

          var fullPath
          if (currentPath) {
            fullPath = currentPath + '.' + key
          } else {
            fullPath = key
          }
          if (typeof context[key] !== 'undefined') {
            genError(
              "Cannot redefine existing key '" + fullPath + "'.",
              line,
              column
            )
          }

          context[key] = reduceValueNode(value)

          if (!pathAssigned(fullPath)) {
            assignedPaths.push(fullPath)
            valueAssignments.push(fullPath)
          }
        }

        function pathAssigned(path) {
          return assignedPaths.indexOf(path) !== -1
        }

        function reduceValueNode(node) {
          if (node.type === 'Array') {
            return reduceArrayWithTypeChecking(node.value)
          } else if (node.type === 'InlineTable') {
            return reduceInlineTableNode(node.value)
          } else {
            return node.value
          }
        }

        function reduceInlineTableNode(values) {
          var obj = Object.create(null)
          for (var i = 0; i < values.length; i++) {
            var val = values[i]
            if (val.value.type === 'InlineTable') {
              obj[val.key] = reduceInlineTableNode(val.value.value)
            } else if (val.type === 'InlineTableValue') {
              obj[val.key] = reduceValueNode(val.value)
            }
          }

          return obj
        }

        function setPath(node) {
          var path = node.value
          var quotedPath = path.map(quoteDottedString).join('.')
          var line = node.line
          var column = node.column

          if (pathAssigned(quotedPath)) {
            genError(
              "Cannot redefine existing key '" + path + "'.",
              line,
              column
            )
          }
          assignedPaths.push(quotedPath)
          context = deepRef(data, path, Object.create(null), line, column)
          currentPath = path
        }

        function addTableArray(node) {
          var path = node.value
          var quotedPath = path.map(quoteDottedString).join('.')
          var line = node.line
          var column = node.column

          if (!pathAssigned(quotedPath)) {
            assignedPaths.push(quotedPath)
          }
          assignedPaths = assignedPaths.filter(function (p) {
            return p.indexOf(quotedPath) !== 0
          })
          assignedPaths.push(quotedPath)
          context = deepRef(data, path, [], line, column)
          currentPath = quotedPath

          if (context instanceof Array) {
            var newObj = Object.create(null)
            context.push(newObj)
            context = newObj
          } else {
            genError(
              "Cannot redefine existing key '" + path + "'.",
              line,
              column
            )
          }
        }

        // Given a path 'a.b.c', create (as necessary) `start.a`,
        // `start.a.b`, and `start.a.b.c`, assigning `value` to `start.a.b.c`.
        // If `a` or `b` are arrays and have items in them, the last item in the
        // array is used as the context for the next sub-path.
        function deepRef(start, keys, value, line, column) {
          var traversed = []
          var traversedPath = ''
          var path = keys.join('.')
          var ctx = start

          for (var i = 0; i < keys.length; i++) {
            var key = keys[i]
            traversed.push(key)
            traversedPath = traversed.join('.')
            if (typeof ctx[key] === 'undefined') {
              if (i === keys.length - 1) {
                ctx[key] = value
              } else {
                ctx[key] = Object.create(null)
              }
            } else if (
              i !== keys.length - 1 &&
              valueAssignments.indexOf(traversedPath) > -1
            ) {
              // already a non-object value at key, can't be used as part of a new path
              genError(
                "Cannot redefine existing key '" + traversedPath + "'.",
                line,
                column
              )
            }

            ctx = ctx[key]
            if (ctx instanceof Array && ctx.length && i < keys.length - 1) {
              ctx = ctx[ctx.length - 1]
            }
          }

          return ctx
        }

        function reduceArrayWithTypeChecking(array) {
          // Ensure that all items in the array are of the same type
          var firstType = null
          for (var i = 0; i < array.length; i++) {
            var node = array[i]
            if (firstType === null) {
              firstType = node.type
            } else {
              if (node.type !== firstType) {
                genError(
                  'Cannot add value of type ' +
                    node.type +
                    ' to array of type ' +
                    firstType +
                    '.',
                  node.line,
                  node.column
                )
              }
            }
          }

          // Recursively reduce array of nodes into array of the nodes' values
          return array.map(reduceValueNode)
        }

        function quoteDottedString(str) {
          if (str.indexOf('.') > -1) {
            return '"' + str + '"'
          } else {
            return str
          }
        }
      }

      module.exports = {
        compile: compile
      }

      /***/
    },

    /***/ 5642: /***/ (module) => {
      module.exports = (function () {
        /*
         * Generated by PEG.js 0.8.0.
         *
         * http://pegjs.majda.cz/
         */

        function peg$subclass(child, parent) {
          function ctor() {
            this.constructor = child
          }
          ctor.prototype = parent.prototype
          child.prototype = new ctor()
        }

        function SyntaxError(message, expected, found, offset, line, column) {
          this.message = message
          this.expected = expected
          this.found = found
          this.offset = offset
          this.line = line
          this.column = column

          this.name = 'SyntaxError'
        }

        peg$subclass(SyntaxError, Error)

        function parse(input) {
          var options = arguments.length > 1 ? arguments[1] : {},
            peg$FAILED = {},
            peg$startRuleFunctions = { start: peg$parsestart },
            peg$startRuleFunction = peg$parsestart,
            peg$c0 = [],
            peg$c1 = function () {
              return nodes
            },
            peg$c2 = peg$FAILED,
            peg$c3 = '#',
            peg$c4 = { type: 'literal', value: '#', description: '"#"' },
            peg$c5 = void 0,
            peg$c6 = { type: 'any', description: 'any character' },
            peg$c7 = '[',
            peg$c8 = { type: 'literal', value: '[', description: '"["' },
            peg$c9 = ']',
            peg$c10 = { type: 'literal', value: ']', description: '"]"' },
            peg$c11 = function (name) {
              addNode(node('ObjectPath', name, line, column))
            },
            peg$c12 = function (name) {
              addNode(node('ArrayPath', name, line, column))
            },
            peg$c13 = function (parts, name) {
              return parts.concat(name)
            },
            peg$c14 = function (name) {
              return [name]
            },
            peg$c15 = function (name) {
              return name
            },
            peg$c16 = '.',
            peg$c17 = { type: 'literal', value: '.', description: '"."' },
            peg$c18 = '=',
            peg$c19 = { type: 'literal', value: '=', description: '"="' },
            peg$c20 = function (key, value) {
              addNode(node('Assign', value, line, column, key))
            },
            peg$c21 = function (chars) {
              return chars.join('')
            },
            peg$c22 = function (node) {
              return node.value
            },
            peg$c23 = '"""',
            peg$c24 = {
              type: 'literal',
              value: '"""',
              description: '"\\"\\"\\""'
            },
            peg$c25 = null,
            peg$c26 = function (chars) {
              return node('String', chars.join(''), line, column)
            },
            peg$c27 = '"',
            peg$c28 = { type: 'literal', value: '"', description: '"\\""' },
            peg$c29 = "'''",
            peg$c30 = { type: 'literal', value: "'''", description: "\"'''\"" },
            peg$c31 = "'",
            peg$c32 = { type: 'literal', value: "'", description: '"\'"' },
            peg$c33 = function (char) {
              return char
            },
            peg$c34 = function (char) {
              return char
            },
            peg$c35 = '\\',
            peg$c36 = { type: 'literal', value: '\\', description: '"\\\\"' },
            peg$c37 = function () {
              return ''
            },
            peg$c38 = 'e',
            peg$c39 = { type: 'literal', value: 'e', description: '"e"' },
            peg$c40 = 'E',
            peg$c41 = { type: 'literal', value: 'E', description: '"E"' },
            peg$c42 = function (left, right) {
              return node('Float', parseFloat(left + 'e' + right), line, column)
            },
            peg$c43 = function (text) {
              return node('Float', parseFloat(text), line, column)
            },
            peg$c44 = '+',
            peg$c45 = { type: 'literal', value: '+', description: '"+"' },
            peg$c46 = function (digits) {
              return digits.join('')
            },
            peg$c47 = '-',
            peg$c48 = { type: 'literal', value: '-', description: '"-"' },
            peg$c49 = function (digits) {
              return '-' + digits.join('')
            },
            peg$c50 = function (text) {
              return node('Integer', parseInt(text, 10), line, column)
            },
            peg$c51 = 'true',
            peg$c52 = { type: 'literal', value: 'true', description: '"true"' },
            peg$c53 = function () {
              return node('Boolean', true, line, column)
            },
            peg$c54 = 'false',
            peg$c55 = {
              type: 'literal',
              value: 'false',
              description: '"false"'
            },
            peg$c56 = function () {
              return node('Boolean', false, line, column)
            },
            peg$c57 = function () {
              return node('Array', [], line, column)
            },
            peg$c58 = function (value) {
              return node('Array', value ? [value] : [], line, column)
            },
            peg$c59 = function (values) {
              return node('Array', values, line, column)
            },
            peg$c60 = function (values, value) {
              return node('Array', values.concat(value), line, column)
            },
            peg$c61 = function (value) {
              return value
            },
            peg$c62 = ',',
            peg$c63 = { type: 'literal', value: ',', description: '","' },
            peg$c64 = '{',
            peg$c65 = { type: 'literal', value: '{', description: '"{"' },
            peg$c66 = '}',
            peg$c67 = { type: 'literal', value: '}', description: '"}"' },
            peg$c68 = function (values) {
              return node('InlineTable', values, line, column)
            },
            peg$c69 = function (key, value) {
              return node('InlineTableValue', value, line, column, key)
            },
            peg$c70 = function (digits) {
              return '.' + digits
            },
            peg$c71 = function (date) {
              return date.join('')
            },
            peg$c72 = ':',
            peg$c73 = { type: 'literal', value: ':', description: '":"' },
            peg$c74 = function (time) {
              return time.join('')
            },
            peg$c75 = 'T',
            peg$c76 = { type: 'literal', value: 'T', description: '"T"' },
            peg$c77 = 'Z',
            peg$c78 = { type: 'literal', value: 'Z', description: '"Z"' },
            peg$c79 = function (date, time) {
              return node(
                'Date',
                new Date(date + 'T' + time + 'Z'),
                line,
                column
              )
            },
            peg$c80 = function (date, time) {
              return node('Date', new Date(date + 'T' + time), line, column)
            },
            peg$c81 = /^[ \t]/,
            peg$c82 = { type: 'class', value: '[ \\t]', description: '[ \\t]' },
            peg$c83 = '\n',
            peg$c84 = { type: 'literal', value: '\n', description: '"\\n"' },
            peg$c85 = '\r',
            peg$c86 = { type: 'literal', value: '\r', description: '"\\r"' },
            peg$c87 = /^[0-9a-f]/i,
            peg$c88 = {
              type: 'class',
              value: '[0-9a-f]i',
              description: '[0-9a-f]i'
            },
            peg$c89 = /^[0-9]/,
            peg$c90 = { type: 'class', value: '[0-9]', description: '[0-9]' },
            peg$c91 = '_',
            peg$c92 = { type: 'literal', value: '_', description: '"_"' },
            peg$c93 = function () {
              return ''
            },
            peg$c94 = /^[A-Za-z0-9_\-]/,
            peg$c95 = {
              type: 'class',
              value: '[A-Za-z0-9_\\-]',
              description: '[A-Za-z0-9_\\-]'
            },
            peg$c96 = function (d) {
              return d.join('')
            },
            peg$c97 = '\\"',
            peg$c98 = {
              type: 'literal',
              value: '\\"',
              description: '"\\\\\\""'
            },
            peg$c99 = function () {
              return '"'
            },
            peg$c100 = '\\\\',
            peg$c101 = {
              type: 'literal',
              value: '\\\\',
              description: '"\\\\\\\\"'
            },
            peg$c102 = function () {
              return '\\'
            },
            peg$c103 = '\\b',
            peg$c104 = {
              type: 'literal',
              value: '\\b',
              description: '"\\\\b"'
            },
            peg$c105 = function () {
              return '\b'
            },
            peg$c106 = '\\t',
            peg$c107 = {
              type: 'literal',
              value: '\\t',
              description: '"\\\\t"'
            },
            peg$c108 = function () {
              return '\t'
            },
            peg$c109 = '\\n',
            peg$c110 = {
              type: 'literal',
              value: '\\n',
              description: '"\\\\n"'
            },
            peg$c111 = function () {
              return '\n'
            },
            peg$c112 = '\\f',
            peg$c113 = {
              type: 'literal',
              value: '\\f',
              description: '"\\\\f"'
            },
            peg$c114 = function () {
              return '\f'
            },
            peg$c115 = '\\r',
            peg$c116 = {
              type: 'literal',
              value: '\\r',
              description: '"\\\\r"'
            },
            peg$c117 = function () {
              return '\r'
            },
            peg$c118 = '\\U',
            peg$c119 = {
              type: 'literal',
              value: '\\U',
              description: '"\\\\U"'
            },
            peg$c120 = function (digits) {
              return convertCodePoint(digits.join(''))
            },
            peg$c121 = '\\u',
            peg$c122 = {
              type: 'literal',
              value: '\\u',
              description: '"\\\\u"'
            },
            peg$currPos = 0,
            peg$reportedPos = 0,
            peg$cachedPos = 0,
            peg$cachedPosDetails = { line: 1, column: 1, seenCR: false },
            peg$maxFailPos = 0,
            peg$maxFailExpected = [],
            peg$silentFails = 0,
            peg$cache = {},
            peg$result

          if ('startRule' in options) {
            if (!(options.startRule in peg$startRuleFunctions)) {
              throw new Error(
                'Can\'t start parsing from rule "' + options.startRule + '".'
              )
            }

            peg$startRuleFunction = peg$startRuleFunctions[options.startRule]
          }

          function text() {
            return input.substring(peg$reportedPos, peg$currPos)
          }

          function offset() {
            return peg$reportedPos
          }

          function line() {
            return peg$computePosDetails(peg$reportedPos).line
          }

          function column() {
            return peg$computePosDetails(peg$reportedPos).column
          }

          function expected(description) {
            throw peg$buildException(
              null,
              [{ type: 'other', description: description }],
              peg$reportedPos
            )
          }

          function error(message) {
            throw peg$buildException(message, null, peg$reportedPos)
          }

          function peg$computePosDetails(pos) {
            function advance(details, startPos, endPos) {
              var p, ch

              for (p = startPos; p < endPos; p++) {
                ch = input.charAt(p)
                if (ch === '\n') {
                  if (!details.seenCR) {
                    details.line++
                  }
                  details.column = 1
                  details.seenCR = false
                } else if (ch === '\r' || ch === '\u2028' || ch === '\u2029') {
                  details.line++
                  details.column = 1
                  details.seenCR = true
                } else {
                  details.column++
                  details.seenCR = false
                }
              }
            }

            if (peg$cachedPos !== pos) {
              if (peg$cachedPos > pos) {
                peg$cachedPos = 0
                peg$cachedPosDetails = { line: 1, column: 1, seenCR: false }
              }
              advance(peg$cachedPosDetails, peg$cachedPos, pos)
              peg$cachedPos = pos
            }

            return peg$cachedPosDetails
          }

          function peg$fail(expected) {
            if (peg$currPos < peg$maxFailPos) {
              return
            }

            if (peg$currPos > peg$maxFailPos) {
              peg$maxFailPos = peg$currPos
              peg$maxFailExpected = []
            }

            peg$maxFailExpected.push(expected)
          }

          function peg$buildException(message, expected, pos) {
            function cleanupExpected(expected) {
              var i = 1

              expected.sort(function (a, b) {
                if (a.description < b.description) {
                  return -1
                } else if (a.description > b.description) {
                  return 1
                } else {
                  return 0
                }
              })

              while (i < expected.length) {
                if (expected[i - 1] === expected[i]) {
                  expected.splice(i, 1)
                } else {
                  i++
                }
              }
            }

            function buildMessage(expected, found) {
              function stringEscape(s) {
                function hex(ch) {
                  return ch.charCodeAt(0).toString(16).toUpperCase()
                }

                return s
                  .replace(/\\/g, '\\\\')
                  .replace(/"/g, '\\"')
                  .replace(/\x08/g, '\\b')
                  .replace(/\t/g, '\\t')
                  .replace(/\n/g, '\\n')
                  .replace(/\f/g, '\\f')
                  .replace(/\r/g, '\\r')
                  .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function (ch) {
                    return '\\x0' + hex(ch)
                  })
                  .replace(/[\x10-\x1F\x80-\xFF]/g, function (ch) {
                    return '\\x' + hex(ch)
                  })
                  .replace(/[\u0180-\u0FFF]/g, function (ch) {
                    return '\\u0' + hex(ch)
                  })
                  .replace(/[\u1080-\uFFFF]/g, function (ch) {
                    return '\\u' + hex(ch)
                  })
              }

              var expectedDescs = new Array(expected.length),
                expectedDesc,
                foundDesc,
                i

              for (i = 0; i < expected.length; i++) {
                expectedDescs[i] = expected[i].description
              }

              expectedDesc =
                expected.length > 1
                  ? expectedDescs.slice(0, -1).join(', ') +
                    ' or ' +
                    expectedDescs[expected.length - 1]
                  : expectedDescs[0]

              foundDesc = found
                ? '"' + stringEscape(found) + '"'
                : 'end of input'

              return (
                'Expected ' + expectedDesc + ' but ' + foundDesc + ' found.'
              )
            }

            var posDetails = peg$computePosDetails(pos),
              found = pos < input.length ? input.charAt(pos) : null

            if (expected !== null) {
              cleanupExpected(expected)
            }

            return new SyntaxError(
              message !== null ? message : buildMessage(expected, found),
              expected,
              found,
              pos,
              posDetails.line,
              posDetails.column
            )
          }

          function peg$parsestart() {
            var s0, s1, s2

            var key = peg$currPos * 49 + 0,
              cached = peg$cache[key]

            if (cached) {
              peg$currPos = cached.nextPos
              return cached.result
            }

            s0 = peg$currPos
            s1 = []
            s2 = peg$parseline()
            while (s2 !== peg$FAILED) {
              s1.push(s2)
              s2 = peg$parseline()
            }
            if (s1 !== peg$FAILED) {
              peg$reportedPos = s0
              s1 = peg$c1()
            }
            s0 = s1

            peg$cache[key] = { nextPos: peg$currPos, result: s0 }

            return s0
          }

          function peg$parseline() {
            var s0, s1, s2, s3, s4, s5, s6

            var key = peg$currPos * 49 + 1,
              cached = peg$cache[key]

            if (cached) {
              peg$currPos = cached.nextPos
              return cached.result
            }

            s0 = peg$currPos
            s1 = []
            s2 = peg$parseS()
            while (s2 !== peg$FAILED) {
              s1.push(s2)
              s2 = peg$parseS()
            }
            if (s1 !== peg$FAILED) {
              s2 = peg$parseexpression()
              if (s2 !== peg$FAILED) {
                s3 = []
                s4 = peg$parseS()
                while (s4 !== peg$FAILED) {
                  s3.push(s4)
                  s4 = peg$parseS()
                }
                if (s3 !== peg$FAILED) {
                  s4 = []
                  s5 = peg$parsecomment()
                  while (s5 !== peg$FAILED) {
                    s4.push(s5)
                    s5 = peg$parsecomment()
                  }
                  if (s4 !== peg$FAILED) {
                    s5 = []
                    s6 = peg$parseNL()
                    if (s6 !== peg$FAILED) {
                      while (s6 !== peg$FAILED) {
                        s5.push(s6)
                        s6 = peg$parseNL()
                      }
                    } else {
                      s5 = peg$c2
                    }
                    if (s5 === peg$FAILED) {
                      s5 = peg$parseEOF()
                    }
                    if (s5 !== peg$FAILED) {
                      s1 = [s1, s2, s3, s4, s5]
                      s0 = s1
                    } else {
                      peg$currPos = s0
                      s0 = peg$c2
                    }
                  } else {
                    peg$currPos = s0
                    s0 = peg$c2
                  }
                } else {
                  peg$currPos = s0
                  s0 = peg$c2
                }
              } else {
                peg$currPos = s0
                s0 = peg$c2
              }
            } else {
              peg$currPos = s0
              s0 = peg$c2
            }
            if (s0 === peg$FAILED) {
              s0 = peg$currPos
              s1 = []
              s2 = peg$parseS()
              if (s2 !== peg$FAILED) {
                while (s2 !== peg$FAILED) {
                  s1.push(s2)
                  s2 = peg$parseS()
                }
              } else {
                s1 = peg$c2
              }
              if (s1 !== peg$FAILED) {
                s2 = []
                s3 = peg$parseNL()
                if (s3 !== peg$FAILED) {
                  while (s3 !== peg$FAILED) {
                    s2.push(s3)
                    s3 = peg$parseNL()
                  }
                } else {
                  s2 = peg$c2
                }
                if (s2 === peg$FAILED) {
                  s2 = peg$parseEOF()
                }
                if (s2 !== peg$FAILED) {
                  s1 = [s1, s2]
                  s0 = s1
                } else {
                  peg$currPos = s0
                  s0 = peg$c2
                }
              } else {
                peg$currPos = s0
                s0 = peg$c2
              }
              if (s0 === peg$FAILED) {
                s0 = peg$parseNL()
              }
            }

            peg$cache[key] = { nextPos: peg$currPos, result: s0 }

            return s0
          }

          function peg$parseexpression() {
            var s0

            var key = peg$currPos * 49 + 2,
              cached = peg$cache[key]

            if (cached) {
              peg$currPos = cached.nextPos
              return cached.result
            }

            s0 = peg$parsecomment()
            if (s0 === peg$FAILED) {
              s0 = peg$parsepath()
              if (s0 === peg$FAILED) {
                s0 = peg$parsetablearray()
                if (s0 === peg$FAILED) {
                  s0 = peg$parseassignment()
                }
              }
            }

            peg$cache[key] = { nextPos: peg$currPos, result: s0 }

            return s0
          }

          function peg$parsecomment() {
            var s0, s1, s2, s3, s4, s5

            var key = peg$currPos * 49 + 3,
              cached = peg$cache[key]

            if (cached) {
              peg$currPos = cached.nextPos
              return cached.result
            }

            s0 = peg$currPos
            if (input.charCodeAt(peg$currPos) === 35) {
              s1 = peg$c3
              peg$currPos++
            } else {
              s1 = peg$FAILED
              if (peg$silentFails === 0) {
                peg$fail(peg$c4)
              }
            }
            if (s1 !== peg$FAILED) {
              s2 = []
              s3 = peg$currPos
              s4 = peg$currPos
              peg$silentFails++
              s5 = peg$parseNL()
              if (s5 === peg$FAILED) {
                s5 = peg$parseEOF()
              }
              peg$silentFails--
              if (s5 === peg$FAILED) {
                s4 = peg$c5
              } else {
                peg$currPos = s4
                s4 = peg$c2
              }
              if (s4 !== peg$FAILED) {
                if (input.length > peg$currPos) {
                  s5 = input.charAt(peg$currPos)
                  peg$currPos++
                } else {
                  s5 = peg$FAILED
                  if (peg$silentFails === 0) {
                    peg$fail(peg$c6)
                  }
                }
                if (s5 !== peg$FAILED) {
                  s4 = [s4, s5]
                  s3 = s4
                } else {
                  peg$currPos = s3
                  s3 = peg$c2
                }
              } else {
                peg$currPos = s3
                s3 = peg$c2
              }
              while (s3 !== peg$FAILED) {
                s2.push(s3)
                s3 = peg$currPos
                s4 = peg$currPos
                peg$silentFails++
                s5 = peg$parseNL()
                if (s5 === peg$FAILED) {
                  s5 = peg$parseEOF()
                }
                peg$silentFails--
                if (s5 === peg$FAILED) {
                  s4 = peg$c5
                } else {
                  peg$currPos = s4
                  s4 = peg$c2
                }
                if (s4 !== peg$FAILED) {
                  if (input.length > peg$currPos) {
                    s5 = input.charAt(peg$currPos)
                    peg$currPos++
                  } else {
                    s5 = peg$FAILED
                    if (peg$silentFails === 0) {
                      peg$fail(peg$c6)
                    }
                  }
                  if (s5 !== peg$FAILED) {
                    s4 = [s4, s5]
                    s3 = s4
                  } else {
                    peg$currPos = s3
                    s3 = peg$c2
                  }
                } else {
                  peg$currPos = s3
                  s3 = peg$c2
                }
              }
              if (s2 !== peg$FAILED) {
                s1 = [s1, s2]
                s0 = s1
              } else {
                peg$currPos = s0
                s0 = peg$c2
              }
            } else {
              peg$currPos = s0
              s0 = peg$c2
            }

            peg$cache[key] = { nextPos: peg$currPos, result: s0 }

            return s0
          }

          function peg$parsepath() {
            var s0, s1, s2, s3, s4, s5

            var key = peg$currPos * 49 + 4,
              cached = peg$cache[key]

            if (cached) {
              peg$currPos = cached.nextPos
              return cached.result
            }

            s0 = peg$currPos
            if (input.charCodeAt(peg$currPos) === 91) {
              s1 = peg$c7
              peg$currPos++
            } else {
              s1 = peg$FAILED
              if (peg$silentFails === 0) {
                peg$fail(peg$c8)
              }
            }
            if (s1 !== peg$FAILED) {
              s2 = []
              s3 = peg$parseS()
              while (s3 !== peg$FAILED) {
                s2.push(s3)
                s3 = peg$parseS()
              }
              if (s2 !== peg$FAILED) {
                s3 = peg$parsetable_key()
                if (s3 !== peg$FAILED) {
                  s4 = []
                  s5 = peg$parseS()
                  while (s5 !== peg$FAILED) {
                    s4.push(s5)
                    s5 = peg$parseS()
                  }
                  if (s4 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 93) {
                      s5 = peg$c9
                      peg$currPos++
                    } else {
                      s5 = peg$FAILED
                      if (peg$silentFails === 0) {
                        peg$fail(peg$c10)
                      }
                    }
                    if (s5 !== peg$FAILED) {
                      peg$reportedPos = s0
                      s1 = peg$c11(s3)
                      s0 = s1
                    } else {
                      peg$currPos = s0
                      s0 = peg$c2
                    }
                  } else {
                    peg$currPos = s0
                    s0 = peg$c2
                  }
                } else {
                  peg$currPos = s0
                  s0 = peg$c2
                }
              } else {
                peg$currPos = s0
                s0 = peg$c2
              }
            } else {
              peg$currPos = s0
              s0 = peg$c2
            }

            peg$cache[key] = { nextPos: peg$currPos, result: s0 }

            return s0
          }

          function peg$parsetablearray() {
            var s0, s1, s2, s3, s4, s5, s6, s7

            var key = peg$currPos * 49 + 5,
              cached = peg$cache[key]

            if (cached) {
              peg$currPos = cached.nextPos
              return cached.result
            }

            s0 = peg$currPos
            if (input.charCodeAt(peg$currPos) === 91) {
              s1 = peg$c7
              peg$currPos++
            } else {
              s1 = peg$FAILED
              if (peg$silentFails === 0) {
                peg$fail(peg$c8)
              }
            }
            if (s1 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 91) {
                s2 = peg$c7
                peg$currPos++
              } else {
                s2 = peg$FAILED
                if (peg$silentFails === 0) {
                  peg$fail(peg$c8)
                }
              }
              if (s2 !== peg$FAILED) {
                s3 = []
                s4 = peg$parseS()
                while (s4 !== peg$FAILED) {
                  s3.push(s4)
                  s4 = peg$parseS()
                }
                if (s3 !== peg$FAILED) {
                  s4 = peg$parsetable_key()
                  if (s4 !== peg$FAILED) {
                    s5 = []
                    s6 = peg$parseS()
                    while (s6 !== peg$FAILED) {
                      s5.push(s6)
                      s6 = peg$parseS()
                    }
                    if (s5 !== peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 93) {
                        s6 = peg$c9
                        peg$currPos++
                      } else {
                        s6 = peg$FAILED
                        if (peg$silentFails === 0) {
                          peg$fail(peg$c10)
                        }
                      }
                      if (s6 !== peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 93) {
                          s7 = peg$c9
                          peg$currPos++
                        } else {
                          s7 = peg$FAILED
                          if (peg$silentFails === 0) {
                            peg$fail(peg$c10)
                          }
                        }
                        if (s7 !== peg$FAILED) {
                          peg$reportedPos = s0
                          s1 = peg$c12(s4)
                          s0 = s1
                        } else {
                          peg$currPos = s0
                          s0 = peg$c2
                        }
                      } else {
                        peg$currPos = s0
                        s0 = peg$c2
                      }
                    } else {
                      peg$currPos = s0
                      s0 = peg$c2
                    }
                  } else {
                    peg$currPos = s0
                    s0 = peg$c2
                  }
                } else {
                  peg$currPos = s0
                  s0 = peg$c2
                }
              } else {
                peg$currPos = s0
                s0 = peg$c2
              }
            } else {
              peg$currPos = s0
              s0 = peg$c2
            }

            peg$cache[key] = { nextPos: peg$currPos, result: s0 }

            return s0
          }

          function peg$parsetable_key() {
            var s0, s1, s2

            var key = peg$currPos * 49 + 6,
              cached = peg$cache[key]

            if (cached) {
              peg$currPos = cached.nextPos
              return cached.result
            }

            s0 = peg$currPos
            s1 = []
            s2 = peg$parsedot_ended_table_key_part()
            if (s2 !== peg$FAILED) {
              while (s2 !== peg$FAILED) {
                s1.push(s2)
                s2 = peg$parsedot_ended_table_key_part()
              }
            } else {
              s1 = peg$c2
            }
            if (s1 !== peg$FAILED) {
              s2 = peg$parsetable_key_part()
              if (s2 !== peg$FAILED) {
                peg$reportedPos = s0
                s1 = peg$c13(s1, s2)
                s0 = s1
              } else {
                peg$currPos = s0
                s0 = peg$c2
              }
            } else {
              peg$currPos = s0
              s0 = peg$c2
            }
            if (s0 === peg$FAILED) {
              s0 = peg$currPos
              s1 = peg$parsetable_key_part()
              if (s1 !== peg$FAILED) {
                peg$reportedPos = s0
                s1 = peg$c14(s1)
              }
              s0 = s1
            }

            peg$cache[key] = { nextPos: peg$currPos, result: s0 }

            return s0
          }

          function peg$parsetable_key_part() {
            var s0, s1, s2, s3, s4

            var key = peg$currPos * 49 + 7,
              cached = peg$cache[key]

            if (cached) {
              peg$currPos = cached.nextPos
              return cached.result
            }

            s0 = peg$currPos
            s1 = []
            s2 = peg$parseS()
            while (s2 !== peg$FAILED) {
              s1.push(s2)
              s2 = peg$parseS()
            }
            if (s1 !== peg$FAILED) {
              s2 = peg$parsekey()
              if (s2 !== peg$FAILED) {
                s3 = []
                s4 = peg$parseS()
                while (s4 !== peg$FAILED) {
                  s3.push(s4)
                  s4 = peg$parseS()
                }
                if (s3 !== peg$FAILED) {
                  peg$reportedPos = s0
                  s1 = peg$c15(s2)
                  s0 = s1
                } else {
                  peg$currPos = s0
                  s0 = peg$c2
                }
              } else {
                peg$currPos = s0
                s0 = peg$c2
              }
            } else {
              peg$currPos = s0
              s0 = peg$c2
            }
            if (s0 === peg$FAILED) {
              s0 = peg$currPos
              s1 = []
              s2 = peg$parseS()
              while (s2 !== peg$FAILED) {
                s1.push(s2)
                s2 = peg$parseS()
              }
              if (s1 !== peg$FAILED) {
                s2 = peg$parsequoted_key()
                if (s2 !== peg$FAILED) {
                  s3 = []
                  s4 = peg$parseS()
                  while (s4 !== peg$FAILED) {
                    s3.push(s4)
                    s4 = peg$parseS()
                  }
                  if (s3 !== peg$FAILED) {
                    peg$reportedPos = s0
                    s1 = peg$c15(s2)
                    s0 = s1
                  } else {
                    peg$currPos = s0
                    s0 = peg$c2
                  }
                } else {
                  peg$currPos = s0
                  s0 = peg$c2
                }
              } else {
                peg$currPos = s0
                s0 = peg$c2
              }
            }

            peg$cache[key] = { nextPos: peg$currPos, result: s0 }

            return s0
          }

          function peg$parsedot_ended_table_key_part() {
            var s0, s1, s2, s3, s4, s5, s6

            var key = peg$currPos * 49 + 8,
              cached = peg$cache[key]

            if (cached) {
              peg$currPos = cached.nextPos
              return cached.result
            }

            s0 = peg$currPos
            s1 = []
            s2 = peg$parseS()
            while (s2 !== peg$FAILED) {
              s1.push(s2)
              s2 = peg$parseS()
            }
            if (s1 !== peg$FAILED) {
              s2 = peg$parsekey()
              if (s2 !== peg$FAILED) {
                s3 = []
                s4 = peg$parseS()
                while (s4 !== peg$FAILED) {
                  s3.push(s4)
                  s4 = peg$parseS()
                }
                if (s3 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 46) {
                    s4 = peg$c16
                    peg$currPos++
                  } else {
                    s4 = peg$FAILED
                    if (peg$silentFails === 0) {
                      peg$fail(peg$c17)
                    }
                  }
                  if (s4 !== peg$FAILED) {
                    s5 = []
                    s6 = peg$parseS()
                    while (s6 !== peg$FAILED) {
                      s5.push(s6)
                      s6 = peg$parseS()
                    }
                    if (s5 !== peg$FAILED) {
                      peg$reportedPos = s0
                      s1 = peg$c15(s2)
                      s0 = s1
                    } else {
                      peg$currPos = s0
                      s0 = peg$c2
                    }
                  } else {
                    peg$currPos = s0
                    s0 = peg$c2
                  }
                } else {
                  peg$currPos = s0
                  s0 = peg$c2
                }
              } else {
                peg$currPos = s0
                s0 = peg$c2
              }
            } else {
              peg$currPos = s0
              s0 = peg$c2
            }
            if (s0 === peg$FAILED) {
              s0 = peg$currPos
              s1 = []
              s2 = peg$parseS()
              while (s2 !== peg$FAILED) {
                s1.push(s2)
                s2 = peg$parseS()
              }
              if (s1 !== peg$FAILED) {
                s2 = peg$parsequoted_key()
                if (s2 !== peg$FAILED) {
                  s3 = []
                  s4 = peg$parseS()
                  while (s4 !== peg$FAILED) {
                    s3.push(s4)
                    s4 = peg$parseS()
                  }
                  if (s3 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 46) {
                      s4 = peg$c16
                      peg$currPos++
                    } else {
                      s4 = peg$FAILED
                      if (peg$silentFails === 0) {
                        peg$fail(peg$c17)
                      }
                    }
                    if (s4 !== peg$FAILED) {
                      s5 = []
                      s6 = peg$parseS()
                      while (s6 !== peg$FAILED) {
                        s5.push(s6)
                        s6 = peg$parseS()
                      }
                      if (s5 !== peg$FAILED) {
                        peg$reportedPos = s0
                        s1 = peg$c15(s2)
                        s0 = s1
                      } else {
                        peg$currPos = s0
                        s0 = peg$c2
                      }
                    } else {
                      peg$currPos = s0
                      s0 = peg$c2
                    }
                  } else {
                    peg$currPos = s0
                    s0 = peg$c2
                  }
                } else {
                  peg$currPos = s0
                  s0 = peg$c2
                }
              } else {
                peg$currPos = s0
                s0 = peg$c2
              }
            }

            peg$cache[key] = { nextPos: peg$currPos, result: s0 }

            return s0
          }

          function peg$parseassignment() {
            var s0, s1, s2, s3, s4, s5

            var key = peg$currPos * 49 + 9,
              cached = peg$cache[key]

            if (cached) {
              peg$currPos = cached.nextPos
              return cached.result
            }

            s0 = peg$currPos
            s1 = peg$parsekey()
            if (s1 !== peg$FAILED) {
              s2 = []
              s3 = peg$parseS()
              while (s3 !== peg$FAILED) {
                s2.push(s3)
                s3 = peg$parseS()
              }
              if (s2 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 61) {
                  s3 = peg$c18
                  peg$currPos++
                } else {
                  s3 = peg$FAILED
                  if (peg$silentFails === 0) {
                    peg$fail(peg$c19)
                  }
                }
                if (s3 !== peg$FAILED) {
                  s4 = []
                  s5 = peg$parseS()
                  while (s5 !== peg$FAILED) {
                    s4.push(s5)
                    s5 = peg$parseS()
                  }
                  if (s4 !== peg$FAILED) {
                    s5 = peg$parsevalue()
                    if (s5 !== peg$FAILED) {
                      peg$reportedPos = s0
                      s1 = peg$c20(s1, s5)
                      s0 = s1
                    } else {
                      peg$currPos = s0
                      s0 = peg$c2
                    }
                  } else {
                    peg$currPos = s0
                    s0 = peg$c2
                  }
                } else {
                  peg$currPos = s0
                  s0 = peg$c2
                }
              } else {
                peg$currPos = s0
                s0 = peg$c2
              }
            } else {
              peg$currPos = s0
              s0 = peg$c2
            }
            if (s0 === peg$FAILED) {
              s0 = peg$currPos
              s1 = peg$parsequoted_key()
              if (s1 !== peg$FAILED) {
                s2 = []
                s3 = peg$parseS()
                while (s3 !== peg$FAILED) {
                  s2.push(s3)
                  s3 = peg$parseS()
                }
                if (s2 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 61) {
                    s3 = peg$c18
                    peg$currPos++
                  } else {
                    s3 = peg$FAILED
                    if (peg$silentFails === 0) {
                      peg$fail(peg$c19)
                    }
                  }
                  if (s3 !== peg$FAILED) {
                    s4 = []
                    s5 = peg$parseS()
                    while (s5 !== peg$FAILED) {
                      s4.push(s5)
                      s5 = peg$parseS()
                    }
                    if (s4 !== peg$FAILED) {
                      s5 = peg$parsevalue()
                      if (s5 !== peg$FAILED) {
                        peg$reportedPos = s0
                        s1 = peg$c20(s1, s5)
                        s0 = s1
                      } else {
                        peg$currPos = s0
                        s0 = peg$c2
                      }
                    } else {
                      peg$currPos = s0
                      s0 = peg$c2
                    }
                  } else {
                    peg$currPos = s0
                    s0 = peg$c2
                  }
                } else {
                  peg$currPos = s0
                  s0 = peg$c2
                }
              } else {
                peg$currPos = s0
                s0 = peg$c2
              }
            }

            peg$cache[key] = { nextPos: peg$currPos, result: s0 }

            return s0
          }

          function peg$parsekey() {
            var s0, s1, s2

            var key = peg$currPos * 49 + 10,
              cached = peg$cache[key]

            if (cached) {
              peg$currPos = cached.nextPos
              return cached.result
            }

            s0 = peg$currPos
            s1 = []
            s2 = peg$parseASCII_BASIC()
            if (s2 !== peg$FAILED) {
              while (s2 !== peg$FAILED) {
                s1.push(s2)
                s2 = peg$parseASCII_BASIC()
              }
            } else {
              s1 = peg$c2
            }
            if (s1 !== peg$FAILED) {
              peg$reportedPos = s0
              s1 = peg$c21(s1)
            }
            s0 = s1

            peg$cache[key] = { nextPos: peg$currPos, result: s0 }

            return s0
          }

          function peg$parsequoted_key() {
            var s0, s1

            var key = peg$currPos * 49 + 11,
              cached = peg$cache[key]

            if (cached) {
              peg$currPos = cached.nextPos
              return cached.result
            }

            s0 = peg$currPos
            s1 = peg$parsedouble_quoted_single_line_string()
            if (s1 !== peg$FAILED) {
              peg$reportedPos = s0
              s1 = peg$c22(s1)
            }
            s0 = s1
            if (s0 === peg$FAILED) {
              s0 = peg$currPos
              s1 = peg$parsesingle_quoted_single_line_string()
              if (s1 !== peg$FAILED) {
                peg$reportedPos = s0
                s1 = peg$c22(s1)
              }
              s0 = s1
            }

            peg$cache[key] = { nextPos: peg$currPos, result: s0 }

            return s0
          }

          function peg$parsevalue() {
            var s0

            var key = peg$currPos * 49 + 12,
              cached = peg$cache[key]

            if (cached) {
              peg$currPos = cached.nextPos
              return cached.result
            }

            s0 = peg$parsestring()
            if (s0 === peg$FAILED) {
              s0 = peg$parsedatetime()
              if (s0 === peg$FAILED) {
                s0 = peg$parsefloat()
                if (s0 === peg$FAILED) {
                  s0 = peg$parseinteger()
                  if (s0 === peg$FAILED) {
                    s0 = peg$parseboolean()
                    if (s0 === peg$FAILED) {
                      s0 = peg$parsearray()
                      if (s0 === peg$FAILED) {
                        s0 = peg$parseinline_table()
                      }
                    }
                  }
                }
              }
            }

            peg$cache[key] = { nextPos: peg$currPos, result: s0 }

            return s0
          }

          function peg$parsestring() {
            var s0

            var key = peg$currPos * 49 + 13,
              cached = peg$cache[key]

            if (cached) {
              peg$currPos = cached.nextPos
              return cached.result
            }

            s0 = peg$parsedouble_quoted_multiline_string()
            if (s0 === peg$FAILED) {
              s0 = peg$parsedouble_quoted_single_line_string()
              if (s0 === peg$FAILED) {
                s0 = peg$parsesingle_quoted_multiline_string()
                if (s0 === peg$FAILED) {
                  s0 = peg$parsesingle_quoted_single_line_string()
                }
              }
            }

            peg$cache[key] = { nextPos: peg$currPos, result: s0 }

            return s0
          }

          function peg$parsedouble_quoted_multiline_string() {
            var s0, s1, s2, s3, s4

            var key = peg$currPos * 49 + 14,
              cached = peg$cache[key]

            if (cached) {
              peg$currPos = cached.nextPos
              return cached.result
            }

            s0 = peg$currPos
            if (input.substr(peg$currPos, 3) === peg$c23) {
              s1 = peg$c23
              peg$currPos += 3
            } else {
              s1 = peg$FAILED
              if (peg$silentFails === 0) {
                peg$fail(peg$c24)
              }
            }
            if (s1 !== peg$FAILED) {
              s2 = peg$parseNL()
              if (s2 === peg$FAILED) {
                s2 = peg$c25
              }
              if (s2 !== peg$FAILED) {
                s3 = []
                s4 = peg$parsemultiline_string_char()
                while (s4 !== peg$FAILED) {
                  s3.push(s4)
                  s4 = peg$parsemultiline_string_char()
                }
                if (s3 !== peg$FAILED) {
                  if (input.substr(peg$currPos, 3) === peg$c23) {
                    s4 = peg$c23
                    peg$currPos += 3
                  } else {
                    s4 = peg$FAILED
                    if (peg$silentFails === 0) {
                      peg$fail(peg$c24)
                    }
                  }
                  if (s4 !== peg$FAILED) {
                    peg$reportedPos = s0
                    s1 = peg$c26(s3)
                    s0 = s1
                  } else {
                    peg$currPos = s0
                    s0 = peg$c2
                  }
                } else {
                  peg$currPos = s0
                  s0 = peg$c2
                }
              } else {
                peg$currPos = s0
                s0 = peg$c2
              }
            } else {
              peg$currPos = s0
              s0 = peg$c2
            }

            peg$cache[key] = { nextPos: peg$currPos, result: s0 }

            return s0
          }

          function peg$parsedouble_quoted_single_line_string() {
            var s0, s1, s2, s3

            var key = peg$currPos * 49 + 15,
              cached = peg$cache[key]

            if (cached) {
              peg$currPos = cached.nextPos
              return cached.result
            }

            s0 = peg$currPos
            if (input.charCodeAt(peg$currPos) === 34) {
              s1 = peg$c27
              peg$currPos++
            } else {
              s1 = peg$FAILED
              if (peg$silentFails === 0) {
                peg$fail(peg$c28)
              }
            }
            if (s1 !== peg$FAILED) {
              s2 = []
              s3 = peg$parsestring_char()
              while (s3 !== peg$FAILED) {
                s2.push(s3)
                s3 = peg$parsestring_char()
              }
              if (s2 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 34) {
                  s3 = peg$c27
                  peg$currPos++
                } else {
                  s3 = peg$FAILED
                  if (peg$silentFails === 0) {
                    peg$fail(peg$c28)
                  }
                }
                if (s3 !== peg$FAILED) {
                  peg$reportedPos = s0
                  s1 = peg$c26(s2)
                  s0 = s1
                } else {
                  peg$currPos = s0
                  s0 = peg$c2
                }
              } else {
                peg$currPos = s0
                s0 = peg$c2
              }
            } else {
              peg$currPos = s0
              s0 = peg$c2
            }

            peg$cache[key] = { nextPos: peg$currPos, result: s0 }

            return s0
          }

          function peg$parsesingle_quoted_multiline_string() {
            var s0, s1, s2, s3, s4

            var key = peg$currPos * 49 + 16,
              cached = peg$cache[key]

            if (cached) {
              peg$currPos = cached.nextPos
              return cached.result
            }

            s0 = peg$currPos
            if (input.substr(peg$currPos, 3) === peg$c29) {
              s1 = peg$c29
              peg$currPos += 3
            } else {
              s1 = peg$FAILED
              if (peg$silentFails === 0) {
                peg$fail(peg$c30)
              }
            }
            if (s1 !== peg$FAILED) {
              s2 = peg$parseNL()
              if (s2 === peg$FAILED) {
                s2 = peg$c25
              }
              if (s2 !== peg$FAILED) {
                s3 = []
                s4 = peg$parsemultiline_literal_char()
                while (s4 !== peg$FAILED) {
                  s3.push(s4)
                  s4 = peg$parsemultiline_literal_char()
                }
                if (s3 !== peg$FAILED) {
                  if (input.substr(peg$currPos, 3) === peg$c29) {
                    s4 = peg$c29
                    peg$currPos += 3
                  } else {
                    s4 = peg$FAILED
                    if (peg$silentFails === 0) {
                      peg$fail(peg$c30)
                    }
                  }
                  if (s4 !== peg$FAILED) {
                    peg$reportedPos = s0
                    s1 = peg$c26(s3)
                    s0 = s1
                  } else {
                    peg$currPos = s0
                    s0 = peg$c2
                  }
                } else {
                  peg$currPos = s0
                  s0 = peg$c2
                }
              } else {
                peg$currPos = s0
                s0 = peg$c2
              }
            } else {
              peg$currPos = s0
              s0 = peg$c2
            }

            peg$cache[key] = { nextPos: peg$currPos, result: s0 }

            return s0
          }

          function peg$parsesingle_quoted_single_line_string() {
            var s0, s1, s2, s3

            var key = peg$currPos * 49 + 17,
              cached = peg$cache[key]

            if (cached) {
              peg$currPos = cached.nextPos
              return cached.result
            }

            s0 = peg$currPos
            if (input.charCodeAt(peg$currPos) === 39) {
              s1 = peg$c31
              peg$currPos++
            } else {
              s1 = peg$FAILED
              if (peg$silentFails === 0) {
                peg$fail(peg$c32)
              }
            }
            if (s1 !== peg$FAILED) {
              s2 = []
              s3 = peg$parseliteral_char()
              while (s3 !== peg$FAILED) {
                s2.push(s3)
                s3 = peg$parseliteral_char()
              }
              if (s2 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 39) {
                  s3 = peg$c31
                  peg$currPos++
                } else {
                  s3 = peg$FAILED
                  if (peg$silentFails === 0) {
                    peg$fail(peg$c32)
                  }
                }
                if (s3 !== peg$FAILED) {
                  peg$reportedPos = s0
                  s1 = peg$c26(s2)
                  s0 = s1
                } else {
                  peg$currPos = s0
                  s0 = peg$c2
                }
              } else {
                peg$currPos = s0
                s0 = peg$c2
              }
            } else {
              peg$currPos = s0
              s0 = peg$c2
            }

            peg$cache[key] = { nextPos: peg$currPos, result: s0 }

            return s0
          }

          function peg$parsestring_char() {
            var s0, s1, s2

            var key = peg$currPos * 49 + 18,
              cached = peg$cache[key]

            if (cached) {
              peg$currPos = cached.nextPos
              return cached.result
            }

            s0 = peg$parseESCAPED()
            if (s0 === peg$FAILED) {
              s0 = peg$currPos
              s1 = peg$currPos
              peg$silentFails++
              if (input.charCodeAt(peg$currPos) === 34) {
                s2 = peg$c27
                peg$currPos++
              } else {
                s2 = peg$FAILED
                if (peg$silentFails === 0) {
                  peg$fail(peg$c28)
                }
              }
              peg$silentFails--
              if (s2 === peg$FAILED) {
                s1 = peg$c5
              } else {
                peg$currPos = s1
                s1 = peg$c2
              }
              if (s1 !== peg$FAILED) {
                if (input.length > peg$currPos) {
                  s2 = input.charAt(peg$currPos)
                  peg$currPos++
                } else {
                  s2 = peg$FAILED
                  if (peg$silentFails === 0) {
                    peg$fail(peg$c6)
                  }
                }
                if (s2 !== peg$FAILED) {
                  peg$reportedPos = s0
                  s1 = peg$c33(s2)
                  s0 = s1
                } else {
                  peg$currPos = s0
                  s0 = peg$c2
                }
              } else {
                peg$currPos = s0
                s0 = peg$c2
              }
            }

            peg$cache[key] = { nextPos: peg$currPos, result: s0 }

            return s0
          }

          function peg$parseliteral_char() {
            var s0, s1, s2

            var key = peg$currPos * 49 + 19,
              cached = peg$cache[key]

            if (cached) {
              peg$currPos = cached.nextPos
              return cached.result
            }

            s0 = peg$currPos
            s1 = peg$currPos
            peg$silentFails++
            if (input.charCodeAt(peg$currPos) === 39) {
              s2 = peg$c31
              peg$currPos++
            } else {
              s2 = peg$FAILED
              if (peg$silentFails === 0) {
                peg$fail(peg$c32)
              }
            }
            peg$silentFails--
            if (s2 === peg$FAILED) {
              s1 = peg$c5
            } else {
              peg$currPos = s1
              s1 = peg$c2
            }
            if (s1 !== peg$FAILED) {
              if (input.length > peg$currPos) {
                s2 = input.charAt(peg$currPos)
                peg$currPos++
              } else {
                s2 = peg$FAILED
                if (peg$silentFails === 0) {
                  peg$fail(peg$c6)
                }
              }
              if (s2 !== peg$FAILED) {
                peg$reportedPos = s0
                s1 = peg$c33(s2)
                s0 = s1
              } else {
                peg$currPos = s0
                s0 = peg$c2
              }
            } else {
              peg$currPos = s0
              s0 = peg$c2
            }

            peg$cache[key] = { nextPos: peg$currPos, result: s0 }

            return s0
          }

          function peg$parsemultiline_string_char() {
            var s0, s1, s2

            var key = peg$currPos * 49 + 20,
              cached = peg$cache[key]

            if (cached) {
              peg$currPos = cached.nextPos
              return cached.result
            }

            s0 = peg$parseESCAPED()
            if (s0 === peg$FAILED) {
              s0 = peg$parsemultiline_string_delim()
              if (s0 === peg$FAILED) {
                s0 = peg$currPos
                s1 = peg$currPos
                peg$silentFails++
                if (input.substr(peg$currPos, 3) === peg$c23) {
                  s2 = peg$c23
                  peg$currPos += 3
                } else {
                  s2 = peg$FAILED
                  if (peg$silentFails === 0) {
                    peg$fail(peg$c24)
                  }
                }
                peg$silentFails--
                if (s2 === peg$FAILED) {
                  s1 = peg$c5
                } else {
                  peg$currPos = s1
                  s1 = peg$c2
                }
                if (s1 !== peg$FAILED) {
                  if (input.length > peg$currPos) {
                    s2 = input.charAt(peg$currPos)
                    peg$currPos++
                  } else {
                    s2 = peg$FAILED
                    if (peg$silentFails === 0) {
                      peg$fail(peg$c6)
                    }
                  }
                  if (s2 !== peg$FAILED) {
                    peg$reportedPos = s0
                    s1 = peg$c34(s2)
                    s0 = s1
                  } else {
                    peg$currPos = s0
                    s0 = peg$c2
                  }
                } else {
                  peg$currPos = s0
                  s0 = peg$c2
                }
              }
            }

            peg$cache[key] = { nextPos: peg$currPos, result: s0 }

            return s0
          }

          function peg$parsemultiline_string_delim() {
            var s0, s1, s2, s3, s4

            var key = peg$currPos * 49 + 21,
              cached = peg$cache[key]

            if (cached) {
              peg$currPos = cached.nextPos
              return cached.result
            }

            s0 = peg$currPos
            if (input.charCodeAt(peg$currPos) === 92) {
              s1 = peg$c35
              peg$currPos++
            } else {
              s1 = peg$FAILED
              if (peg$silentFails === 0) {
                peg$fail(peg$c36)
              }
            }
            if (s1 !== peg$FAILED) {
              s2 = peg$parseNL()
              if (s2 !== peg$FAILED) {
                s3 = []
                s4 = peg$parseNLS()
                while (s4 !== peg$FAILED) {
                  s3.push(s4)
                  s4 = peg$parseNLS()
                }
                if (s3 !== peg$FAILED) {
                  peg$reportedPos = s0
                  s1 = peg$c37()
                  s0 = s1
                } else {
                  peg$currPos = s0
                  s0 = peg$c2
                }
              } else {
                peg$currPos = s0
                s0 = peg$c2
              }
            } else {
              peg$currPos = s0
              s0 = peg$c2
            }

            peg$cache[key] = { nextPos: peg$currPos, result: s0 }

            return s0
          }

          function peg$parsemultiline_literal_char() {
            var s0, s1, s2

            var key = peg$currPos * 49 + 22,
              cached = peg$cache[key]

            if (cached) {
              peg$currPos = cached.nextPos
              return cached.result
            }

            s0 = peg$currPos
            s1 = peg$currPos
            peg$silentFails++
            if (input.substr(peg$currPos, 3) === peg$c29) {
              s2 = peg$c29
              peg$currPos += 3
            } else {
              s2 = peg$FAILED
              if (peg$silentFails === 0) {
                peg$fail(peg$c30)
              }
            }
            peg$silentFails--
            if (s2 === peg$FAILED) {
              s1 = peg$c5
            } else {
              peg$currPos = s1
              s1 = peg$c2
            }
            if (s1 !== peg$FAILED) {
              if (input.length > peg$currPos) {
                s2 = input.charAt(peg$currPos)
                peg$currPos++
              } else {
                s2 = peg$FAILED
                if (peg$silentFails === 0) {
                  peg$fail(peg$c6)
                }
              }
              if (s2 !== peg$FAILED) {
                peg$reportedPos = s0
                s1 = peg$c33(s2)
                s0 = s1
              } else {
                peg$currPos = s0
                s0 = peg$c2
              }
            } else {
              peg$currPos = s0
              s0 = peg$c2
            }

            peg$cache[key] = { nextPos: peg$currPos, result: s0 }

            return s0
          }

          function peg$parsefloat() {
            var s0, s1, s2, s3

            var key = peg$currPos * 49 + 23,
              cached = peg$cache[key]

            if (cached) {
              peg$currPos = cached.nextPos
              return cached.result
            }

            s0 = peg$currPos
            s1 = peg$parsefloat_text()
            if (s1 === peg$FAILED) {
              s1 = peg$parseinteger_text()
            }
            if (s1 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 101) {
                s2 = peg$c38
                peg$currPos++
              } else {
                s2 = peg$FAILED
                if (peg$silentFails === 0) {
                  peg$fail(peg$c39)
                }
              }
              if (s2 === peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 69) {
                  s2 = peg$c40
                  peg$currPos++
                } else {
                  s2 = peg$FAILED
                  if (peg$silentFails === 0) {
                    peg$fail(peg$c41)
                  }
                }
              }
              if (s2 !== peg$FAILED) {
                s3 = peg$parseinteger_text()
                if (s3 !== peg$FAILED) {
                  peg$reportedPos = s0
                  s1 = peg$c42(s1, s3)
                  s0 = s1
                } else {
                  peg$currPos = s0
                  s0 = peg$c2
                }
              } else {
                peg$currPos = s0
                s0 = peg$c2
              }
            } else {
              peg$currPos = s0
              s0 = peg$c2
            }
            if (s0 === peg$FAILED) {
              s0 = peg$currPos
              s1 = peg$parsefloat_text()
              if (s1 !== peg$FAILED) {
                peg$reportedPos = s0
                s1 = peg$c43(s1)
              }
              s0 = s1
            }

            peg$cache[key] = { nextPos: peg$currPos, result: s0 }

            return s0
          }

          function peg$parsefloat_text() {
            var s0, s1, s2, s3, s4, s5

            var key = peg$currPos * 49 + 24,
              cached = peg$cache[key]

            if (cached) {
              peg$currPos = cached.nextPos
              return cached.result
            }

            s0 = peg$currPos
            if (input.charCodeAt(peg$currPos) === 43) {
              s1 = peg$c44
              peg$currPos++
            } else {
              s1 = peg$FAILED
              if (peg$silentFails === 0) {
                peg$fail(peg$c45)
              }
            }
            if (s1 === peg$FAILED) {
              s1 = peg$c25
            }
            if (s1 !== peg$FAILED) {
              s2 = peg$currPos
              s3 = peg$parseDIGITS()
              if (s3 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 46) {
                  s4 = peg$c16
                  peg$currPos++
                } else {
                  s4 = peg$FAILED
                  if (peg$silentFails === 0) {
                    peg$fail(peg$c17)
                  }
                }
                if (s4 !== peg$FAILED) {
                  s5 = peg$parseDIGITS()
                  if (s5 !== peg$FAILED) {
                    s3 = [s3, s4, s5]
                    s2 = s3
                  } else {
                    peg$currPos = s2
                    s2 = peg$c2
                  }
                } else {
                  peg$currPos = s2
                  s2 = peg$c2
                }
              } else {
                peg$currPos = s2
                s2 = peg$c2
              }
              if (s2 !== peg$FAILED) {
                peg$reportedPos = s0
                s1 = peg$c46(s2)
                s0 = s1
              } else {
                peg$currPos = s0
                s0 = peg$c2
              }
            } else {
              peg$currPos = s0
              s0 = peg$c2
            }
            if (s0 === peg$FAILED) {
              s0 = peg$currPos
              if (input.charCodeAt(peg$currPos) === 45) {
                s1 = peg$c47
                peg$currPos++
              } else {
                s1 = peg$FAILED
                if (peg$silentFails === 0) {
                  peg$fail(peg$c48)
                }
              }
              if (s1 !== peg$FAILED) {
                s2 = peg$currPos
                s3 = peg$parseDIGITS()
                if (s3 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 46) {
                    s4 = peg$c16
                    peg$currPos++
                  } else {
                    s4 = peg$FAILED
                    if (peg$silentFails === 0) {
                      peg$fail(peg$c17)
                    }
                  }
                  if (s4 !== peg$FAILED) {
                    s5 = peg$parseDIGITS()
                    if (s5 !== peg$FAILED) {
                      s3 = [s3, s4, s5]
                      s2 = s3
                    } else {
                      peg$currPos = s2
                      s2 = peg$c2
                    }
                  } else {
                    peg$currPos = s2
                    s2 = peg$c2
                  }
                } else {
                  peg$currPos = s2
                  s2 = peg$c2
                }
                if (s2 !== peg$FAILED) {
                  peg$reportedPos = s0
                  s1 = peg$c49(s2)
                  s0 = s1
                } else {
                  peg$currPos = s0
                  s0 = peg$c2
                }
              } else {
                peg$currPos = s0
                s0 = peg$c2
              }
            }

            peg$cache[key] = { nextPos: peg$currPos, result: s0 }

            return s0
          }

          function peg$parseinteger() {
            var s0, s1

            var key = peg$currPos * 49 + 25,
              cached = peg$cache[key]

            if (cached) {
              peg$currPos = cached.nextPos
              return cached.result
            }

            s0 = peg$currPos
            s1 = peg$parseinteger_text()
            if (s1 !== peg$FAILED) {
              peg$reportedPos = s0
              s1 = peg$c50(s1)
            }
            s0 = s1

            peg$cache[key] = { nextPos: peg$currPos, result: s0 }

            return s0
          }

          function peg$parseinteger_text() {
            var s0, s1, s2, s3, s4

            var key = peg$currPos * 49 + 26,
              cached = peg$cache[key]

            if (cached) {
              peg$currPos = cached.nextPos
              return cached.result
            }

            s0 = peg$currPos
            if (input.charCodeAt(peg$currPos) === 43) {
              s1 = peg$c44
              peg$currPos++
            } else {
              s1 = peg$FAILED
              if (peg$silentFails === 0) {
                peg$fail(peg$c45)
              }
            }
            if (s1 === peg$FAILED) {
              s1 = peg$c25
            }
            if (s1 !== peg$FAILED) {
              s2 = []
              s3 = peg$parseDIGIT_OR_UNDER()
              if (s3 !== peg$FAILED) {
                while (s3 !== peg$FAILED) {
                  s2.push(s3)
                  s3 = peg$parseDIGIT_OR_UNDER()
                }
              } else {
                s2 = peg$c2
              }
              if (s2 !== peg$FAILED) {
                s3 = peg$currPos
                peg$silentFails++
                if (input.charCodeAt(peg$currPos) === 46) {
                  s4 = peg$c16
                  peg$currPos++
                } else {
                  s4 = peg$FAILED
                  if (peg$silentFails === 0) {
                    peg$fail(peg$c17)
                  }
                }
                peg$silentFails--
                if (s4 === peg$FAILED) {
                  s3 = peg$c5
                } else {
                  peg$currPos = s3
                  s3 = peg$c2
                }
                if (s3 !== peg$FAILED) {
                  peg$reportedPos = s0
                  s1 = peg$c46(s2)
                  s0 = s1
                } else {
                  peg$currPos = s0
                  s0 = peg$c2
                }
              } else {
                peg$currPos = s0
                s0 = peg$c2
              }
            } else {
              peg$currPos = s0
              s0 = peg$c2
            }
            if (s0 === peg$FAILED) {
              s0 = peg$currPos
              if (input.charCodeAt(peg$currPos) === 45) {
                s1 = peg$c47
                peg$currPos++
              } else {
                s1 = peg$FAILED
                if (peg$silentFails === 0) {
                  peg$fail(peg$c48)
                }
              }
              if (s1 !== peg$FAILED) {
                s2 = []
                s3 = peg$parseDIGIT_OR_UNDER()
                if (s3 !== peg$FAILED) {
                  while (s3 !== peg$FAILED) {
                    s2.push(s3)
                    s3 = peg$parseDIGIT_OR_UNDER()
                  }
                } else {
                  s2 = peg$c2
                }
                if (s2 !== peg$FAILED) {
                  s3 = peg$currPos
                  peg$silentFails++
                  if (input.charCodeAt(peg$currPos) === 46) {
                    s4 = peg$c16
                    peg$currPos++
                  } else {
                    s4 = peg$FAILED
                    if (peg$silentFails === 0) {
                      peg$fail(peg$c17)
                    }
                  }
                  peg$silentFails--
                  if (s4 === peg$FAILED) {
                    s3 = peg$c5
                  } else {
                    peg$currPos = s3
                    s3 = peg$c2
                  }
                  if (s3 !== peg$FAILED) {
                    peg$reportedPos = s0
                    s1 = peg$c49(s2)
                    s0 = s1
                  } else {
                    peg$currPos = s0
                    s0 = peg$c2
                  }
                } else {
                  peg$currPos = s0
                  s0 = peg$c2
                }
              } else {
                peg$currPos = s0
                s0 = peg$c2
              }
            }

            peg$cache[key] = { nextPos: peg$currPos, result: s0 }

            return s0
          }

          function peg$parseboolean() {
            var s0, s1

            var key = peg$currPos * 49 + 27,
              cached = peg$cache[key]

            if (cached) {
              peg$currPos = cached.nextPos
              return cached.result
            }

            s0 = peg$currPos
            if (input.substr(peg$currPos, 4) === peg$c51) {
              s1 = peg$c51
              peg$currPos += 4
            } else {
              s1 = peg$FAILED
              if (peg$silentFails === 0) {
                peg$fail(peg$c52)
              }
            }
            if (s1 !== peg$FAILED) {
              peg$reportedPos = s0
              s1 = peg$c53()
            }
            s0 = s1
            if (s0 === peg$FAILED) {
              s0 = peg$currPos
              if (input.substr(peg$currPos, 5) === peg$c54) {
                s1 = peg$c54
                peg$currPos += 5
              } else {
                s1 = peg$FAILED
                if (peg$silentFails === 0) {
                  peg$fail(peg$c55)
                }
              }
              if (s1 !== peg$FAILED) {
                peg$reportedPos = s0
                s1 = peg$c56()
              }
              s0 = s1
            }

            peg$cache[key] = { nextPos: peg$currPos, result: s0 }

            return s0
          }

          function peg$parsearray() {
            var s0, s1, s2, s3, s4

            var key = peg$currPos * 49 + 28,
              cached = peg$cache[key]

            if (cached) {
              peg$currPos = cached.nextPos
              return cached.result
            }

            s0 = peg$currPos
            if (input.charCodeAt(peg$currPos) === 91) {
              s1 = peg$c7
              peg$currPos++
            } else {
              s1 = peg$FAILED
              if (peg$silentFails === 0) {
                peg$fail(peg$c8)
              }
            }
            if (s1 !== peg$FAILED) {
              s2 = []
              s3 = peg$parsearray_sep()
              while (s3 !== peg$FAILED) {
                s2.push(s3)
                s3 = peg$parsearray_sep()
              }
              if (s2 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 93) {
                  s3 = peg$c9
                  peg$currPos++
                } else {
                  s3 = peg$FAILED
                  if (peg$silentFails === 0) {
                    peg$fail(peg$c10)
                  }
                }
                if (s3 !== peg$FAILED) {
                  peg$reportedPos = s0
                  s1 = peg$c57()
                  s0 = s1
                } else {
                  peg$currPos = s0
                  s0 = peg$c2
                }
              } else {
                peg$currPos = s0
                s0 = peg$c2
              }
            } else {
              peg$currPos = s0
              s0 = peg$c2
            }
            if (s0 === peg$FAILED) {
              s0 = peg$currPos
              if (input.charCodeAt(peg$currPos) === 91) {
                s1 = peg$c7
                peg$currPos++
              } else {
                s1 = peg$FAILED
                if (peg$silentFails === 0) {
                  peg$fail(peg$c8)
                }
              }
              if (s1 !== peg$FAILED) {
                s2 = peg$parsearray_value()
                if (s2 === peg$FAILED) {
                  s2 = peg$c25
                }
                if (s2 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 93) {
                    s3 = peg$c9
                    peg$currPos++
                  } else {
                    s3 = peg$FAILED
                    if (peg$silentFails === 0) {
                      peg$fail(peg$c10)
                    }
                  }
                  if (s3 !== peg$FAILED) {
                    peg$reportedPos = s0
                    s1 = peg$c58(s2)
                    s0 = s1
                  } else {
                    peg$currPos = s0
                    s0 = peg$c2
                  }
                } else {
                  peg$currPos = s0
                  s0 = peg$c2
                }
              } else {
                peg$currPos = s0
                s0 = peg$c2
              }
              if (s0 === peg$FAILED) {
                s0 = peg$currPos
                if (input.charCodeAt(peg$currPos) === 91) {
                  s1 = peg$c7
                  peg$currPos++
                } else {
                  s1 = peg$FAILED
                  if (peg$silentFails === 0) {
                    peg$fail(peg$c8)
                  }
                }
                if (s1 !== peg$FAILED) {
                  s2 = []
                  s3 = peg$parsearray_value_list()
                  if (s3 !== peg$FAILED) {
                    while (s3 !== peg$FAILED) {
                      s2.push(s3)
                      s3 = peg$parsearray_value_list()
                    }
                  } else {
                    s2 = peg$c2
                  }
                  if (s2 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 93) {
                      s3 = peg$c9
                      peg$currPos++
                    } else {
                      s3 = peg$FAILED
                      if (peg$silentFails === 0) {
                        peg$fail(peg$c10)
                      }
                    }
                    if (s3 !== peg$FAILED) {
                      peg$reportedPos = s0
                      s1 = peg$c59(s2)
                      s0 = s1
                    } else {
                      peg$currPos = s0
                      s0 = peg$c2
                    }
                  } else {
                    peg$currPos = s0
                    s0 = peg$c2
                  }
                } else {
                  peg$currPos = s0
                  s0 = peg$c2
                }
                if (s0 === peg$FAILED) {
                  s0 = peg$currPos
                  if (input.charCodeAt(peg$currPos) === 91) {
                    s1 = peg$c7
                    peg$currPos++
                  } else {
                    s1 = peg$FAILED
                    if (peg$silentFails === 0) {
                      peg$fail(peg$c8)
                    }
                  }
                  if (s1 !== peg$FAILED) {
                    s2 = []
                    s3 = peg$parsearray_value_list()
                    if (s3 !== peg$FAILED) {
                      while (s3 !== peg$FAILED) {
                        s2.push(s3)
                        s3 = peg$parsearray_value_list()
                      }
                    } else {
                      s2 = peg$c2
                    }
                    if (s2 !== peg$FAILED) {
                      s3 = peg$parsearray_value()
                      if (s3 !== peg$FAILED) {
                        if (input.charCodeAt(peg$currPos) === 93) {
                          s4 = peg$c9
                          peg$currPos++
                        } else {
                          s4 = peg$FAILED
                          if (peg$silentFails === 0) {
                            peg$fail(peg$c10)
                          }
                        }
                        if (s4 !== peg$FAILED) {
                          peg$reportedPos = s0
                          s1 = peg$c60(s2, s3)
                          s0 = s1
                        } else {
                          peg$currPos = s0
                          s0 = peg$c2
                        }
                      } else {
                        peg$currPos = s0
                        s0 = peg$c2
                      }
                    } else {
                      peg$currPos = s0
                      s0 = peg$c2
                    }
                  } else {
                    peg$currPos = s0
                    s0 = peg$c2
                  }
                }
              }
            }

            peg$cache[key] = { nextPos: peg$currPos, result: s0 }

            return s0
          }

          function peg$parsearray_value() {
            var s0, s1, s2, s3, s4

            var key = peg$currPos * 49 + 29,
              cached = peg$cache[key]

            if (cached) {
              peg$currPos = cached.nextPos
              return cached.result
            }

            s0 = peg$currPos
            s1 = []
            s2 = peg$parsearray_sep()
            while (s2 !== peg$FAILED) {
              s1.push(s2)
              s2 = peg$parsearray_sep()
            }
            if (s1 !== peg$FAILED) {
              s2 = peg$parsevalue()
              if (s2 !== peg$FAILED) {
                s3 = []
                s4 = peg$parsearray_sep()
                while (s4 !== peg$FAILED) {
                  s3.push(s4)
                  s4 = peg$parsearray_sep()
                }
                if (s3 !== peg$FAILED) {
                  peg$reportedPos = s0
                  s1 = peg$c61(s2)
                  s0 = s1
                } else {
                  peg$currPos = s0
                  s0 = peg$c2
                }
              } else {
                peg$currPos = s0
                s0 = peg$c2
              }
            } else {
              peg$currPos = s0
              s0 = peg$c2
            }

            peg$cache[key] = { nextPos: peg$currPos, result: s0 }

            return s0
          }

          function peg$parsearray_value_list() {
            var s0, s1, s2, s3, s4, s5, s6

            var key = peg$currPos * 49 + 30,
              cached = peg$cache[key]

            if (cached) {
              peg$currPos = cached.nextPos
              return cached.result
            }

            s0 = peg$currPos
            s1 = []
            s2 = peg$parsearray_sep()
            while (s2 !== peg$FAILED) {
              s1.push(s2)
              s2 = peg$parsearray_sep()
            }
            if (s1 !== peg$FAILED) {
              s2 = peg$parsevalue()
              if (s2 !== peg$FAILED) {
                s3 = []
                s4 = peg$parsearray_sep()
                while (s4 !== peg$FAILED) {
                  s3.push(s4)
                  s4 = peg$parsearray_sep()
                }
                if (s3 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 44) {
                    s4 = peg$c62
                    peg$currPos++
                  } else {
                    s4 = peg$FAILED
                    if (peg$silentFails === 0) {
                      peg$fail(peg$c63)
                    }
                  }
                  if (s4 !== peg$FAILED) {
                    s5 = []
                    s6 = peg$parsearray_sep()
                    while (s6 !== peg$FAILED) {
                      s5.push(s6)
                      s6 = peg$parsearray_sep()
                    }
                    if (s5 !== peg$FAILED) {
                      peg$reportedPos = s0
                      s1 = peg$c61(s2)
                      s0 = s1
                    } else {
                      peg$currPos = s0
                      s0 = peg$c2
                    }
                  } else {
                    peg$currPos = s0
                    s0 = peg$c2
                  }
                } else {
                  peg$currPos = s0
                  s0 = peg$c2
                }
              } else {
                peg$currPos = s0
                s0 = peg$c2
              }
            } else {
              peg$currPos = s0
              s0 = peg$c2
            }

            peg$cache[key] = { nextPos: peg$currPos, result: s0 }

            return s0
          }

          function peg$parsearray_sep() {
            var s0

            var key = peg$currPos * 49 + 31,
              cached = peg$cache[key]

            if (cached) {
              peg$currPos = cached.nextPos
              return cached.result
            }

            s0 = peg$parseS()
            if (s0 === peg$FAILED) {
              s0 = peg$parseNL()
              if (s0 === peg$FAILED) {
                s0 = peg$parsecomment()
              }
            }

            peg$cache[key] = { nextPos: peg$currPos, result: s0 }

            return s0
          }

          function peg$parseinline_table() {
            var s0, s1, s2, s3, s4, s5

            var key = peg$currPos * 49 + 32,
              cached = peg$cache[key]

            if (cached) {
              peg$currPos = cached.nextPos
              return cached.result
            }

            s0 = peg$currPos
            if (input.charCodeAt(peg$currPos) === 123) {
              s1 = peg$c64
              peg$currPos++
            } else {
              s1 = peg$FAILED
              if (peg$silentFails === 0) {
                peg$fail(peg$c65)
              }
            }
            if (s1 !== peg$FAILED) {
              s2 = []
              s3 = peg$parseS()
              while (s3 !== peg$FAILED) {
                s2.push(s3)
                s3 = peg$parseS()
              }
              if (s2 !== peg$FAILED) {
                s3 = []
                s4 = peg$parseinline_table_assignment()
                while (s4 !== peg$FAILED) {
                  s3.push(s4)
                  s4 = peg$parseinline_table_assignment()
                }
                if (s3 !== peg$FAILED) {
                  s4 = []
                  s5 = peg$parseS()
                  while (s5 !== peg$FAILED) {
                    s4.push(s5)
                    s5 = peg$parseS()
                  }
                  if (s4 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 125) {
                      s5 = peg$c66
                      peg$currPos++
                    } else {
                      s5 = peg$FAILED
                      if (peg$silentFails === 0) {
                        peg$fail(peg$c67)
                      }
                    }
                    if (s5 !== peg$FAILED) {
                      peg$reportedPos = s0
                      s1 = peg$c68(s3)
                      s0 = s1
                    } else {
                      peg$currPos = s0
                      s0 = peg$c2
                    }
                  } else {
                    peg$currPos = s0
                    s0 = peg$c2
                  }
                } else {
                  peg$currPos = s0
                  s0 = peg$c2
                }
              } else {
                peg$currPos = s0
                s0 = peg$c2
              }
            } else {
              peg$currPos = s0
              s0 = peg$c2
            }

            peg$cache[key] = { nextPos: peg$currPos, result: s0 }

            return s0
          }

          function peg$parseinline_table_assignment() {
            var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10

            var key = peg$currPos * 49 + 33,
              cached = peg$cache[key]

            if (cached) {
              peg$currPos = cached.nextPos
              return cached.result
            }

            s0 = peg$currPos
            s1 = []
            s2 = peg$parseS()
            while (s2 !== peg$FAILED) {
              s1.push(s2)
              s2 = peg$parseS()
            }
            if (s1 !== peg$FAILED) {
              s2 = peg$parsekey()
              if (s2 !== peg$FAILED) {
                s3 = []
                s4 = peg$parseS()
                while (s4 !== peg$FAILED) {
                  s3.push(s4)
                  s4 = peg$parseS()
                }
                if (s3 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 61) {
                    s4 = peg$c18
                    peg$currPos++
                  } else {
                    s4 = peg$FAILED
                    if (peg$silentFails === 0) {
                      peg$fail(peg$c19)
                    }
                  }
                  if (s4 !== peg$FAILED) {
                    s5 = []
                    s6 = peg$parseS()
                    while (s6 !== peg$FAILED) {
                      s5.push(s6)
                      s6 = peg$parseS()
                    }
                    if (s5 !== peg$FAILED) {
                      s6 = peg$parsevalue()
                      if (s6 !== peg$FAILED) {
                        s7 = []
                        s8 = peg$parseS()
                        while (s8 !== peg$FAILED) {
                          s7.push(s8)
                          s8 = peg$parseS()
                        }
                        if (s7 !== peg$FAILED) {
                          if (input.charCodeAt(peg$currPos) === 44) {
                            s8 = peg$c62
                            peg$currPos++
                          } else {
                            s8 = peg$FAILED
                            if (peg$silentFails === 0) {
                              peg$fail(peg$c63)
                            }
                          }
                          if (s8 !== peg$FAILED) {
                            s9 = []
                            s10 = peg$parseS()
                            while (s10 !== peg$FAILED) {
                              s9.push(s10)
                              s10 = peg$parseS()
                            }
                            if (s9 !== peg$FAILED) {
                              peg$reportedPos = s0
                              s1 = peg$c69(s2, s6)
                              s0 = s1
                            } else {
                              peg$currPos = s0
                              s0 = peg$c2
                            }
                          } else {
                            peg$currPos = s0
                            s0 = peg$c2
                          }
                        } else {
                          peg$currPos = s0
                          s0 = peg$c2
                        }
                      } else {
                        peg$currPos = s0
                        s0 = peg$c2
                      }
                    } else {
                      peg$currPos = s0
                      s0 = peg$c2
                    }
                  } else {
                    peg$currPos = s0
                    s0 = peg$c2
                  }
                } else {
                  peg$currPos = s0
                  s0 = peg$c2
                }
              } else {
                peg$currPos = s0
                s0 = peg$c2
              }
            } else {
              peg$currPos = s0
              s0 = peg$c2
            }
            if (s0 === peg$FAILED) {
              s0 = peg$currPos
              s1 = []
              s2 = peg$parseS()
              while (s2 !== peg$FAILED) {
                s1.push(s2)
                s2 = peg$parseS()
              }
              if (s1 !== peg$FAILED) {
                s2 = peg$parsekey()
                if (s2 !== peg$FAILED) {
                  s3 = []
                  s4 = peg$parseS()
                  while (s4 !== peg$FAILED) {
                    s3.push(s4)
                    s4 = peg$parseS()
                  }
                  if (s3 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 61) {
                      s4 = peg$c18
                      peg$currPos++
                    } else {
                      s4 = peg$FAILED
                      if (peg$silentFails === 0) {
                        peg$fail(peg$c19)
                      }
                    }
                    if (s4 !== peg$FAILED) {
                      s5 = []
                      s6 = peg$parseS()
                      while (s6 !== peg$FAILED) {
                        s5.push(s6)
                        s6 = peg$parseS()
                      }
                      if (s5 !== peg$FAILED) {
                        s6 = peg$parsevalue()
                        if (s6 !== peg$FAILED) {
                          peg$reportedPos = s0
                          s1 = peg$c69(s2, s6)
                          s0 = s1
                        } else {
                          peg$currPos = s0
                          s0 = peg$c2
                        }
                      } else {
                        peg$currPos = s0
                        s0 = peg$c2
                      }
                    } else {
                      peg$currPos = s0
                      s0 = peg$c2
                    }
                  } else {
                    peg$currPos = s0
                    s0 = peg$c2
                  }
                } else {
                  peg$currPos = s0
                  s0 = peg$c2
                }
              } else {
                peg$currPos = s0
                s0 = peg$c2
              }
            }

            peg$cache[key] = { nextPos: peg$currPos, result: s0 }

            return s0
          }

          function peg$parsesecfragment() {
            var s0, s1, s2

            var key = peg$currPos * 49 + 34,
              cached = peg$cache[key]

            if (cached) {
              peg$currPos = cached.nextPos
              return cached.result
            }

            s0 = peg$currPos
            if (input.charCodeAt(peg$currPos) === 46) {
              s1 = peg$c16
              peg$currPos++
            } else {
              s1 = peg$FAILED
              if (peg$silentFails === 0) {
                peg$fail(peg$c17)
              }
            }
            if (s1 !== peg$FAILED) {
              s2 = peg$parseDIGITS()
              if (s2 !== peg$FAILED) {
                peg$reportedPos = s0
                s1 = peg$c70(s2)
                s0 = s1
              } else {
                peg$currPos = s0
                s0 = peg$c2
              }
            } else {
              peg$currPos = s0
              s0 = peg$c2
            }

            peg$cache[key] = { nextPos: peg$currPos, result: s0 }

            return s0
          }

          function peg$parsedate() {
            var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11

            var key = peg$currPos * 49 + 35,
              cached = peg$cache[key]

            if (cached) {
              peg$currPos = cached.nextPos
              return cached.result
            }

            s0 = peg$currPos
            s1 = peg$currPos
            s2 = peg$parseDIGIT_OR_UNDER()
            if (s2 !== peg$FAILED) {
              s3 = peg$parseDIGIT_OR_UNDER()
              if (s3 !== peg$FAILED) {
                s4 = peg$parseDIGIT_OR_UNDER()
                if (s4 !== peg$FAILED) {
                  s5 = peg$parseDIGIT_OR_UNDER()
                  if (s5 !== peg$FAILED) {
                    if (input.charCodeAt(peg$currPos) === 45) {
                      s6 = peg$c47
                      peg$currPos++
                    } else {
                      s6 = peg$FAILED
                      if (peg$silentFails === 0) {
                        peg$fail(peg$c48)
                      }
                    }
                    if (s6 !== peg$FAILED) {
                      s7 = peg$parseDIGIT_OR_UNDER()
                      if (s7 !== peg$FAILED) {
                        s8 = peg$parseDIGIT_OR_UNDER()
                        if (s8 !== peg$FAILED) {
                          if (input.charCodeAt(peg$currPos) === 45) {
                            s9 = peg$c47
                            peg$currPos++
                          } else {
                            s9 = peg$FAILED
                            if (peg$silentFails === 0) {
                              peg$fail(peg$c48)
                            }
                          }
                          if (s9 !== peg$FAILED) {
                            s10 = peg$parseDIGIT_OR_UNDER()
                            if (s10 !== peg$FAILED) {
                              s11 = peg$parseDIGIT_OR_UNDER()
                              if (s11 !== peg$FAILED) {
                                s2 = [s2, s3, s4, s5, s6, s7, s8, s9, s10, s11]
                                s1 = s2
                              } else {
                                peg$currPos = s1
                                s1 = peg$c2
                              }
                            } else {
                              peg$currPos = s1
                              s1 = peg$c2
                            }
                          } else {
                            peg$currPos = s1
                            s1 = peg$c2
                          }
                        } else {
                          peg$currPos = s1
                          s1 = peg$c2
                        }
                      } else {
                        peg$currPos = s1
                        s1 = peg$c2
                      }
                    } else {
                      peg$currPos = s1
                      s1 = peg$c2
                    }
                  } else {
                    peg$currPos = s1
                    s1 = peg$c2
                  }
                } else {
                  peg$currPos = s1
                  s1 = peg$c2
                }
              } else {
                peg$currPos = s1
                s1 = peg$c2
              }
            } else {
              peg$currPos = s1
              s1 = peg$c2
            }
            if (s1 !== peg$FAILED) {
              peg$reportedPos = s0
              s1 = peg$c71(s1)
            }
            s0 = s1

            peg$cache[key] = { nextPos: peg$currPos, result: s0 }

            return s0
          }

          function peg$parsetime() {
            var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10

            var key = peg$currPos * 49 + 36,
              cached = peg$cache[key]

            if (cached) {
              peg$currPos = cached.nextPos
              return cached.result
            }

            s0 = peg$currPos
            s1 = peg$currPos
            s2 = peg$parseDIGIT_OR_UNDER()
            if (s2 !== peg$FAILED) {
              s3 = peg$parseDIGIT_OR_UNDER()
              if (s3 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 58) {
                  s4 = peg$c72
                  peg$currPos++
                } else {
                  s4 = peg$FAILED
                  if (peg$silentFails === 0) {
                    peg$fail(peg$c73)
                  }
                }
                if (s4 !== peg$FAILED) {
                  s5 = peg$parseDIGIT_OR_UNDER()
                  if (s5 !== peg$FAILED) {
                    s6 = peg$parseDIGIT_OR_UNDER()
                    if (s6 !== peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 58) {
                        s7 = peg$c72
                        peg$currPos++
                      } else {
                        s7 = peg$FAILED
                        if (peg$silentFails === 0) {
                          peg$fail(peg$c73)
                        }
                      }
                      if (s7 !== peg$FAILED) {
                        s8 = peg$parseDIGIT_OR_UNDER()
                        if (s8 !== peg$FAILED) {
                          s9 = peg$parseDIGIT_OR_UNDER()
                          if (s9 !== peg$FAILED) {
                            s10 = peg$parsesecfragment()
                            if (s10 === peg$FAILED) {
                              s10 = peg$c25
                            }
                            if (s10 !== peg$FAILED) {
                              s2 = [s2, s3, s4, s5, s6, s7, s8, s9, s10]
                              s1 = s2
                            } else {
                              peg$currPos = s1
                              s1 = peg$c2
                            }
                          } else {
                            peg$currPos = s1
                            s1 = peg$c2
                          }
                        } else {
                          peg$currPos = s1
                          s1 = peg$c2
                        }
                      } else {
                        peg$currPos = s1
                        s1 = peg$c2
                      }
                    } else {
                      peg$currPos = s1
                      s1 = peg$c2
                    }
                  } else {
                    peg$currPos = s1
                    s1 = peg$c2
                  }
                } else {
                  peg$currPos = s1
                  s1 = peg$c2
                }
              } else {
                peg$currPos = s1
                s1 = peg$c2
              }
            } else {
              peg$currPos = s1
              s1 = peg$c2
            }
            if (s1 !== peg$FAILED) {
              peg$reportedPos = s0
              s1 = peg$c74(s1)
            }
            s0 = s1

            peg$cache[key] = { nextPos: peg$currPos, result: s0 }

            return s0
          }

          function peg$parsetime_with_offset() {
            var s0,
              s1,
              s2,
              s3,
              s4,
              s5,
              s6,
              s7,
              s8,
              s9,
              s10,
              s11,
              s12,
              s13,
              s14,
              s15,
              s16

            var key = peg$currPos * 49 + 37,
              cached = peg$cache[key]

            if (cached) {
              peg$currPos = cached.nextPos
              return cached.result
            }

            s0 = peg$currPos
            s1 = peg$currPos
            s2 = peg$parseDIGIT_OR_UNDER()
            if (s2 !== peg$FAILED) {
              s3 = peg$parseDIGIT_OR_UNDER()
              if (s3 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 58) {
                  s4 = peg$c72
                  peg$currPos++
                } else {
                  s4 = peg$FAILED
                  if (peg$silentFails === 0) {
                    peg$fail(peg$c73)
                  }
                }
                if (s4 !== peg$FAILED) {
                  s5 = peg$parseDIGIT_OR_UNDER()
                  if (s5 !== peg$FAILED) {
                    s6 = peg$parseDIGIT_OR_UNDER()
                    if (s6 !== peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 58) {
                        s7 = peg$c72
                        peg$currPos++
                      } else {
                        s7 = peg$FAILED
                        if (peg$silentFails === 0) {
                          peg$fail(peg$c73)
                        }
                      }
                      if (s7 !== peg$FAILED) {
                        s8 = peg$parseDIGIT_OR_UNDER()
                        if (s8 !== peg$FAILED) {
                          s9 = peg$parseDIGIT_OR_UNDER()
                          if (s9 !== peg$FAILED) {
                            s10 = peg$parsesecfragment()
                            if (s10 === peg$FAILED) {
                              s10 = peg$c25
                            }
                            if (s10 !== peg$FAILED) {
                              if (input.charCodeAt(peg$currPos) === 45) {
                                s11 = peg$c47
                                peg$currPos++
                              } else {
                                s11 = peg$FAILED
                                if (peg$silentFails === 0) {
                                  peg$fail(peg$c48)
                                }
                              }
                              if (s11 === peg$FAILED) {
                                if (input.charCodeAt(peg$currPos) === 43) {
                                  s11 = peg$c44
                                  peg$currPos++
                                } else {
                                  s11 = peg$FAILED
                                  if (peg$silentFails === 0) {
                                    peg$fail(peg$c45)
                                  }
                                }
                              }
                              if (s11 !== peg$FAILED) {
                                s12 = peg$parseDIGIT_OR_UNDER()
                                if (s12 !== peg$FAILED) {
                                  s13 = peg$parseDIGIT_OR_UNDER()
                                  if (s13 !== peg$FAILED) {
                                    if (input.charCodeAt(peg$currPos) === 58) {
                                      s14 = peg$c72
                                      peg$currPos++
                                    } else {
                                      s14 = peg$FAILED
                                      if (peg$silentFails === 0) {
                                        peg$fail(peg$c73)
                                      }
                                    }
                                    if (s14 !== peg$FAILED) {
                                      s15 = peg$parseDIGIT_OR_UNDER()
                                      if (s15 !== peg$FAILED) {
                                        s16 = peg$parseDIGIT_OR_UNDER()
                                        if (s16 !== peg$FAILED) {
                                          s2 = [
                                            s2,
                                            s3,
                                            s4,
                                            s5,
                                            s6,
                                            s7,
                                            s8,
                                            s9,
                                            s10,
                                            s11,
                                            s12,
                                            s13,
                                            s14,
                                            s15,
                                            s16
                                          ]
                                          s1 = s2
                                        } else {
                                          peg$currPos = s1
                                          s1 = peg$c2
                                        }
                                      } else {
                                        peg$currPos = s1
                                        s1 = peg$c2
                                      }
                                    } else {
                                      peg$currPos = s1
                                      s1 = peg$c2
                                    }
                                  } else {
                                    peg$currPos = s1
                                    s1 = peg$c2
                                  }
                                } else {
                                  peg$currPos = s1
                                  s1 = peg$c2
                                }
                              } else {
                                peg$currPos = s1
                                s1 = peg$c2
                              }
                            } else {
                              peg$currPos = s1
                              s1 = peg$c2
                            }
                          } else {
                            peg$currPos = s1
                            s1 = peg$c2
                          }
                        } else {
                          peg$currPos = s1
                          s1 = peg$c2
                        }
                      } else {
                        peg$currPos = s1
                        s1 = peg$c2
                      }
                    } else {
                      peg$currPos = s1
                      s1 = peg$c2
                    }
                  } else {
                    peg$currPos = s1
                    s1 = peg$c2
                  }
                } else {
                  peg$currPos = s1
                  s1 = peg$c2
                }
              } else {
                peg$currPos = s1
                s1 = peg$c2
              }
            } else {
              peg$currPos = s1
              s1 = peg$c2
            }
            if (s1 !== peg$FAILED) {
              peg$reportedPos = s0
              s1 = peg$c74(s1)
            }
            s0 = s1

            peg$cache[key] = { nextPos: peg$currPos, result: s0 }

            return s0
          }

          function peg$parsedatetime() {
            var s0, s1, s2, s3, s4

            var key = peg$currPos * 49 + 38,
              cached = peg$cache[key]

            if (cached) {
              peg$currPos = cached.nextPos
              return cached.result
            }

            s0 = peg$currPos
            s1 = peg$parsedate()
            if (s1 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 84) {
                s2 = peg$c75
                peg$currPos++
              } else {
                s2 = peg$FAILED
                if (peg$silentFails === 0) {
                  peg$fail(peg$c76)
                }
              }
              if (s2 !== peg$FAILED) {
                s3 = peg$parsetime()
                if (s3 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 90) {
                    s4 = peg$c77
                    peg$currPos++
                  } else {
                    s4 = peg$FAILED
                    if (peg$silentFails === 0) {
                      peg$fail(peg$c78)
                    }
                  }
                  if (s4 !== peg$FAILED) {
                    peg$reportedPos = s0
                    s1 = peg$c79(s1, s3)
                    s0 = s1
                  } else {
                    peg$currPos = s0
                    s0 = peg$c2
                  }
                } else {
                  peg$currPos = s0
                  s0 = peg$c2
                }
              } else {
                peg$currPos = s0
                s0 = peg$c2
              }
            } else {
              peg$currPos = s0
              s0 = peg$c2
            }
            if (s0 === peg$FAILED) {
              s0 = peg$currPos
              s1 = peg$parsedate()
              if (s1 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 84) {
                  s2 = peg$c75
                  peg$currPos++
                } else {
                  s2 = peg$FAILED
                  if (peg$silentFails === 0) {
                    peg$fail(peg$c76)
                  }
                }
                if (s2 !== peg$FAILED) {
                  s3 = peg$parsetime_with_offset()
                  if (s3 !== peg$FAILED) {
                    peg$reportedPos = s0
                    s1 = peg$c80(s1, s3)
                    s0 = s1
                  } else {
                    peg$currPos = s0
                    s0 = peg$c2
                  }
                } else {
                  peg$currPos = s0
                  s0 = peg$c2
                }
              } else {
                peg$currPos = s0
                s0 = peg$c2
              }
            }

            peg$cache[key] = { nextPos: peg$currPos, result: s0 }

            return s0
          }

          function peg$parseS() {
            var s0

            var key = peg$currPos * 49 + 39,
              cached = peg$cache[key]

            if (cached) {
              peg$currPos = cached.nextPos
              return cached.result
            }

            if (peg$c81.test(input.charAt(peg$currPos))) {
              s0 = input.charAt(peg$currPos)
              peg$currPos++
            } else {
              s0 = peg$FAILED
              if (peg$silentFails === 0) {
                peg$fail(peg$c82)
              }
            }

            peg$cache[key] = { nextPos: peg$currPos, result: s0 }

            return s0
          }

          function peg$parseNL() {
            var s0, s1, s2

            var key = peg$currPos * 49 + 40,
              cached = peg$cache[key]

            if (cached) {
              peg$currPos = cached.nextPos
              return cached.result
            }

            if (input.charCodeAt(peg$currPos) === 10) {
              s0 = peg$c83
              peg$currPos++
            } else {
              s0 = peg$FAILED
              if (peg$silentFails === 0) {
                peg$fail(peg$c84)
              }
            }
            if (s0 === peg$FAILED) {
              s0 = peg$currPos
              if (input.charCodeAt(peg$currPos) === 13) {
                s1 = peg$c85
                peg$currPos++
              } else {
                s1 = peg$FAILED
                if (peg$silentFails === 0) {
                  peg$fail(peg$c86)
                }
              }
              if (s1 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 10) {
                  s2 = peg$c83
                  peg$currPos++
                } else {
                  s2 = peg$FAILED
                  if (peg$silentFails === 0) {
                    peg$fail(peg$c84)
                  }
                }
                if (s2 !== peg$FAILED) {
                  s1 = [s1, s2]
                  s0 = s1
                } else {
                  peg$currPos = s0
                  s0 = peg$c2
                }
              } else {
                peg$currPos = s0
                s0 = peg$c2
              }
            }

            peg$cache[key] = { nextPos: peg$currPos, result: s0 }

            return s0
          }

          function peg$parseNLS() {
            var s0

            var key = peg$currPos * 49 + 41,
              cached = peg$cache[key]

            if (cached) {
              peg$currPos = cached.nextPos
              return cached.result
            }

            s0 = peg$parseNL()
            if (s0 === peg$FAILED) {
              s0 = peg$parseS()
            }

            peg$cache[key] = { nextPos: peg$currPos, result: s0 }

            return s0
          }

          function peg$parseEOF() {
            var s0, s1

            var key = peg$currPos * 49 + 42,
              cached = peg$cache[key]

            if (cached) {
              peg$currPos = cached.nextPos
              return cached.result
            }

            s0 = peg$currPos
            peg$silentFails++
            if (input.length > peg$currPos) {
              s1 = input.charAt(peg$currPos)
              peg$currPos++
            } else {
              s1 = peg$FAILED
              if (peg$silentFails === 0) {
                peg$fail(peg$c6)
              }
            }
            peg$silentFails--
            if (s1 === peg$FAILED) {
              s0 = peg$c5
            } else {
              peg$currPos = s0
              s0 = peg$c2
            }

            peg$cache[key] = { nextPos: peg$currPos, result: s0 }

            return s0
          }

          function peg$parseHEX() {
            var s0

            var key = peg$currPos * 49 + 43,
              cached = peg$cache[key]

            if (cached) {
              peg$currPos = cached.nextPos
              return cached.result
            }

            if (peg$c87.test(input.charAt(peg$currPos))) {
              s0 = input.charAt(peg$currPos)
              peg$currPos++
            } else {
              s0 = peg$FAILED
              if (peg$silentFails === 0) {
                peg$fail(peg$c88)
              }
            }

            peg$cache[key] = { nextPos: peg$currPos, result: s0 }

            return s0
          }

          function peg$parseDIGIT_OR_UNDER() {
            var s0, s1

            var key = peg$currPos * 49 + 44,
              cached = peg$cache[key]

            if (cached) {
              peg$currPos = cached.nextPos
              return cached.result
            }

            if (peg$c89.test(input.charAt(peg$currPos))) {
              s0 = input.charAt(peg$currPos)
              peg$currPos++
            } else {
              s0 = peg$FAILED
              if (peg$silentFails === 0) {
                peg$fail(peg$c90)
              }
            }
            if (s0 === peg$FAILED) {
              s0 = peg$currPos
              if (input.charCodeAt(peg$currPos) === 95) {
                s1 = peg$c91
                peg$currPos++
              } else {
                s1 = peg$FAILED
                if (peg$silentFails === 0) {
                  peg$fail(peg$c92)
                }
              }
              if (s1 !== peg$FAILED) {
                peg$reportedPos = s0
                s1 = peg$c93()
              }
              s0 = s1
            }

            peg$cache[key] = { nextPos: peg$currPos, result: s0 }

            return s0
          }

          function peg$parseASCII_BASIC() {
            var s0

            var key = peg$currPos * 49 + 45,
              cached = peg$cache[key]

            if (cached) {
              peg$currPos = cached.nextPos
              return cached.result
            }

            if (peg$c94.test(input.charAt(peg$currPos))) {
              s0 = input.charAt(peg$currPos)
              peg$currPos++
            } else {
              s0 = peg$FAILED
              if (peg$silentFails === 0) {
                peg$fail(peg$c95)
              }
            }

            peg$cache[key] = { nextPos: peg$currPos, result: s0 }

            return s0
          }

          function peg$parseDIGITS() {
            var s0, s1, s2

            var key = peg$currPos * 49 + 46,
              cached = peg$cache[key]

            if (cached) {
              peg$currPos = cached.nextPos
              return cached.result
            }

            s0 = peg$currPos
            s1 = []
            s2 = peg$parseDIGIT_OR_UNDER()
            if (s2 !== peg$FAILED) {
              while (s2 !== peg$FAILED) {
                s1.push(s2)
                s2 = peg$parseDIGIT_OR_UNDER()
              }
            } else {
              s1 = peg$c2
            }
            if (s1 !== peg$FAILED) {
              peg$reportedPos = s0
              s1 = peg$c96(s1)
            }
            s0 = s1

            peg$cache[key] = { nextPos: peg$currPos, result: s0 }

            return s0
          }

          function peg$parseESCAPED() {
            var s0, s1

            var key = peg$currPos * 49 + 47,
              cached = peg$cache[key]

            if (cached) {
              peg$currPos = cached.nextPos
              return cached.result
            }

            s0 = peg$currPos
            if (input.substr(peg$currPos, 2) === peg$c97) {
              s1 = peg$c97
              peg$currPos += 2
            } else {
              s1 = peg$FAILED
              if (peg$silentFails === 0) {
                peg$fail(peg$c98)
              }
            }
            if (s1 !== peg$FAILED) {
              peg$reportedPos = s0
              s1 = peg$c99()
            }
            s0 = s1
            if (s0 === peg$FAILED) {
              s0 = peg$currPos
              if (input.substr(peg$currPos, 2) === peg$c100) {
                s1 = peg$c100
                peg$currPos += 2
              } else {
                s1 = peg$FAILED
                if (peg$silentFails === 0) {
                  peg$fail(peg$c101)
                }
              }
              if (s1 !== peg$FAILED) {
                peg$reportedPos = s0
                s1 = peg$c102()
              }
              s0 = s1
              if (s0 === peg$FAILED) {
                s0 = peg$currPos
                if (input.substr(peg$currPos, 2) === peg$c103) {
                  s1 = peg$c103
                  peg$currPos += 2
                } else {
                  s1 = peg$FAILED
                  if (peg$silentFails === 0) {
                    peg$fail(peg$c104)
                  }
                }
                if (s1 !== peg$FAILED) {
                  peg$reportedPos = s0
                  s1 = peg$c105()
                }
                s0 = s1
                if (s0 === peg$FAILED) {
                  s0 = peg$currPos
                  if (input.substr(peg$currPos, 2) === peg$c106) {
                    s1 = peg$c106
                    peg$currPos += 2
                  } else {
                    s1 = peg$FAILED
                    if (peg$silentFails === 0) {
                      peg$fail(peg$c107)
                    }
                  }
                  if (s1 !== peg$FAILED) {
                    peg$reportedPos = s0
                    s1 = peg$c108()
                  }
                  s0 = s1
                  if (s0 === peg$FAILED) {
                    s0 = peg$currPos
                    if (input.substr(peg$currPos, 2) === peg$c109) {
                      s1 = peg$c109
                      peg$currPos += 2
                    } else {
                      s1 = peg$FAILED
                      if (peg$silentFails === 0) {
                        peg$fail(peg$c110)
                      }
                    }
                    if (s1 !== peg$FAILED) {
                      peg$reportedPos = s0
                      s1 = peg$c111()
                    }
                    s0 = s1
                    if (s0 === peg$FAILED) {
                      s0 = peg$currPos
                      if (input.substr(peg$currPos, 2) === peg$c112) {
                        s1 = peg$c112
                        peg$currPos += 2
                      } else {
                        s1 = peg$FAILED
                        if (peg$silentFails === 0) {
                          peg$fail(peg$c113)
                        }
                      }
                      if (s1 !== peg$FAILED) {
                        peg$reportedPos = s0
                        s1 = peg$c114()
                      }
                      s0 = s1
                      if (s0 === peg$FAILED) {
                        s0 = peg$currPos
                        if (input.substr(peg$currPos, 2) === peg$c115) {
                          s1 = peg$c115
                          peg$currPos += 2
                        } else {
                          s1 = peg$FAILED
                          if (peg$silentFails === 0) {
                            peg$fail(peg$c116)
                          }
                        }
                        if (s1 !== peg$FAILED) {
                          peg$reportedPos = s0
                          s1 = peg$c117()
                        }
                        s0 = s1
                        if (s0 === peg$FAILED) {
                          s0 = peg$parseESCAPED_UNICODE()
                        }
                      }
                    }
                  }
                }
              }
            }

            peg$cache[key] = { nextPos: peg$currPos, result: s0 }

            return s0
          }

          function peg$parseESCAPED_UNICODE() {
            var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10

            var key = peg$currPos * 49 + 48,
              cached = peg$cache[key]

            if (cached) {
              peg$currPos = cached.nextPos
              return cached.result
            }

            s0 = peg$currPos
            if (input.substr(peg$currPos, 2) === peg$c118) {
              s1 = peg$c118
              peg$currPos += 2
            } else {
              s1 = peg$FAILED
              if (peg$silentFails === 0) {
                peg$fail(peg$c119)
              }
            }
            if (s1 !== peg$FAILED) {
              s2 = peg$currPos
              s3 = peg$parseHEX()
              if (s3 !== peg$FAILED) {
                s4 = peg$parseHEX()
                if (s4 !== peg$FAILED) {
                  s5 = peg$parseHEX()
                  if (s5 !== peg$FAILED) {
                    s6 = peg$parseHEX()
                    if (s6 !== peg$FAILED) {
                      s7 = peg$parseHEX()
                      if (s7 !== peg$FAILED) {
                        s8 = peg$parseHEX()
                        if (s8 !== peg$FAILED) {
                          s9 = peg$parseHEX()
                          if (s9 !== peg$FAILED) {
                            s10 = peg$parseHEX()
                            if (s10 !== peg$FAILED) {
                              s3 = [s3, s4, s5, s6, s7, s8, s9, s10]
                              s2 = s3
                            } else {
                              peg$currPos = s2
                              s2 = peg$c2
                            }
                          } else {
                            peg$currPos = s2
                            s2 = peg$c2
                          }
                        } else {
                          peg$currPos = s2
                          s2 = peg$c2
                        }
                      } else {
                        peg$currPos = s2
                        s2 = peg$c2
                      }
                    } else {
                      peg$currPos = s2
                      s2 = peg$c2
                    }
                  } else {
                    peg$currPos = s2
                    s2 = peg$c2
                  }
                } else {
                  peg$currPos = s2
                  s2 = peg$c2
                }
              } else {
                peg$currPos = s2
                s2 = peg$c2
              }
              if (s2 !== peg$FAILED) {
                peg$reportedPos = s0
                s1 = peg$c120(s2)
                s0 = s1
              } else {
                peg$currPos = s0
                s0 = peg$c2
              }
            } else {
              peg$currPos = s0
              s0 = peg$c2
            }
            if (s0 === peg$FAILED) {
              s0 = peg$currPos
              if (input.substr(peg$currPos, 2) === peg$c121) {
                s1 = peg$c121
                peg$currPos += 2
              } else {
                s1 = peg$FAILED
                if (peg$silentFails === 0) {
                  peg$fail(peg$c122)
                }
              }
              if (s1 !== peg$FAILED) {
                s2 = peg$currPos
                s3 = peg$parseHEX()
                if (s3 !== peg$FAILED) {
                  s4 = peg$parseHEX()
                  if (s4 !== peg$FAILED) {
                    s5 = peg$parseHEX()
                    if (s5 !== peg$FAILED) {
                      s6 = peg$parseHEX()
                      if (s6 !== peg$FAILED) {
                        s3 = [s3, s4, s5, s6]
                        s2 = s3
                      } else {
                        peg$currPos = s2
                        s2 = peg$c2
                      }
                    } else {
                      peg$currPos = s2
                      s2 = peg$c2
                    }
                  } else {
                    peg$currPos = s2
                    s2 = peg$c2
                  }
                } else {
                  peg$currPos = s2
                  s2 = peg$c2
                }
                if (s2 !== peg$FAILED) {
                  peg$reportedPos = s0
                  s1 = peg$c120(s2)
                  s0 = s1
                } else {
                  peg$currPos = s0
                  s0 = peg$c2
                }
              } else {
                peg$currPos = s0
                s0 = peg$c2
              }
            }

            peg$cache[key] = { nextPos: peg$currPos, result: s0 }

            return s0
          }

          var nodes = []

          function genError(err, line, col) {
            var ex = new Error(err)
            ex.line = line
            ex.column = col
            throw ex
          }

          function addNode(node) {
            nodes.push(node)
          }

          function node(type, value, line, column, key) {
            var obj = {
              type: type,
              value: value,
              line: line(),
              column: column()
            }
            if (key) obj.key = key
            return obj
          }

          function convertCodePoint(str, line, col) {
            var num = parseInt('0x' + str)

            if (
              !isFinite(num) ||
              Math.floor(num) != num ||
              num < 0 ||
              num > 0x10ffff ||
              (num > 0xd7ff && num < 0xe000)
            ) {
              genError('Invalid Unicode escape code: ' + str, line, col)
            } else {
              return fromCodePoint(num)
            }
          }

          function fromCodePoint() {
            var MAX_SIZE = 0x4000
            var codeUnits = []
            var highSurrogate
            var lowSurrogate
            var index = -1
            var length = arguments.length
            if (!length) {
              return ''
            }
            var result = ''
            while (++index < length) {
              var codePoint = Number(arguments[index])
              if (codePoint <= 0xffff) {
                // BMP code point
                codeUnits.push(codePoint)
              } else {
                // Astral code point; split in surrogate halves
                // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
                codePoint -= 0x10000
                highSurrogate = (codePoint >> 10) + 0xd800
                lowSurrogate = (codePoint % 0x400) + 0xdc00
                codeUnits.push(highSurrogate, lowSurrogate)
              }
              if (index + 1 == length || codeUnits.length > MAX_SIZE) {
                result += String.fromCharCode.apply(null, codeUnits)
                codeUnits.length = 0
              }
            }
            return result
          }

          peg$result = peg$startRuleFunction()

          if (peg$result !== peg$FAILED && peg$currPos === input.length) {
            return peg$result
          } else {
            if (peg$result !== peg$FAILED && peg$currPos < input.length) {
              peg$fail({ type: 'end', description: 'end of input' })
            }

            throw peg$buildException(null, peg$maxFailExpected, peg$maxFailPos)
          }
        }

        return {
          SyntaxError: SyntaxError,
          parse: parse
        }
      })()

      /***/
    },

    /***/ 4294: /***/ (
      module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      module.exports = __nccwpck_require__(4219)

      /***/
    },

    /***/ 4219: /***/ (
      __unused_webpack_module,
      exports,
      __nccwpck_require__
    ) => {
      'use strict'

      var net = __nccwpck_require__(1631)
      var tls = __nccwpck_require__(4016)
      var http = __nccwpck_require__(8605)
      var https = __nccwpck_require__(7211)
      var events = __nccwpck_require__(8614)
      var assert = __nccwpck_require__(2357)
      var util = __nccwpck_require__(1669)

      exports.httpOverHttp = httpOverHttp
      exports.httpsOverHttp = httpsOverHttp
      exports.httpOverHttps = httpOverHttps
      exports.httpsOverHttps = httpsOverHttps

      function httpOverHttp(options) {
        var agent = new TunnelingAgent(options)
        agent.request = http.request
        return agent
      }

      function httpsOverHttp(options) {
        var agent = new TunnelingAgent(options)
        agent.request = http.request
        agent.createSocket = createSecureSocket
        agent.defaultPort = 443
        return agent
      }

      function httpOverHttps(options) {
        var agent = new TunnelingAgent(options)
        agent.request = https.request
        return agent
      }

      function httpsOverHttps(options) {
        var agent = new TunnelingAgent(options)
        agent.request = https.request
        agent.createSocket = createSecureSocket
        agent.defaultPort = 443
        return agent
      }

      function TunnelingAgent(options) {
        var self = this
        self.options = options || {}
        self.proxyOptions = self.options.proxy || {}
        self.maxSockets =
          self.options.maxSockets || http.Agent.defaultMaxSockets
        self.requests = []
        self.sockets = []

        self.on('free', function onFree(socket, host, port, localAddress) {
          var options = toOptions(host, port, localAddress)
          for (var i = 0, len = self.requests.length; i < len; ++i) {
            var pending = self.requests[i]
            if (
              pending.host === options.host &&
              pending.port === options.port
            ) {
              // Detect the request to connect same origin server,
              // reuse the connection.
              self.requests.splice(i, 1)
              pending.request.onSocket(socket)
              return
            }
          }
          socket.destroy()
          self.removeSocket(socket)
        })
      }
      util.inherits(TunnelingAgent, events.EventEmitter)

      TunnelingAgent.prototype.addRequest = function addRequest(
        req,
        host,
        port,
        localAddress
      ) {
        var self = this
        var options = mergeOptions(
          { request: req },
          self.options,
          toOptions(host, port, localAddress)
        )

        if (self.sockets.length >= this.maxSockets) {
          // We are over limit so we'll add it to the queue.
          self.requests.push(options)
          return
        }

        // If we are under maxSockets create a new one.
        self.createSocket(options, function (socket) {
          socket.on('free', onFree)
          socket.on('close', onCloseOrRemove)
          socket.on('agentRemove', onCloseOrRemove)
          req.onSocket(socket)

          function onFree() {
            self.emit('free', socket, options)
          }

          function onCloseOrRemove(err) {
            self.removeSocket(socket)
            socket.removeListener('free', onFree)
            socket.removeListener('close', onCloseOrRemove)
            socket.removeListener('agentRemove', onCloseOrRemove)
          }
        })
      }

      TunnelingAgent.prototype.createSocket = function createSocket(
        options,
        cb
      ) {
        var self = this
        var placeholder = {}
        self.sockets.push(placeholder)

        var connectOptions = mergeOptions({}, self.proxyOptions, {
          method: 'CONNECT',
          path: options.host + ':' + options.port,
          agent: false,
          headers: {
            host: options.host + ':' + options.port
          }
        })
        if (options.localAddress) {
          connectOptions.localAddress = options.localAddress
        }
        if (connectOptions.proxyAuth) {
          connectOptions.headers = connectOptions.headers || {}
          connectOptions.headers['Proxy-Authorization'] =
            'Basic ' + new Buffer(connectOptions.proxyAuth).toString('base64')
        }

        debug('making CONNECT request')
        var connectReq = self.request(connectOptions)
        connectReq.useChunkedEncodingByDefault = false // for v0.6
        connectReq.once('response', onResponse) // for v0.6
        connectReq.once('upgrade', onUpgrade) // for v0.6
        connectReq.once('connect', onConnect) // for v0.7 or later
        connectReq.once('error', onError)
        connectReq.end()

        function onResponse(res) {
          // Very hacky. This is necessary to avoid http-parser leaks.
          res.upgrade = true
        }

        function onUpgrade(res, socket, head) {
          // Hacky.
          process.nextTick(function () {
            onConnect(res, socket, head)
          })
        }

        function onConnect(res, socket, head) {
          connectReq.removeAllListeners()
          socket.removeAllListeners()

          if (res.statusCode !== 200) {
            debug(
              'tunneling socket could not be established, statusCode=%d',
              res.statusCode
            )
            socket.destroy()
            var error = new Error(
              'tunneling socket could not be established, ' +
                'statusCode=' +
                res.statusCode
            )
            error.code = 'ECONNRESET'
            options.request.emit('error', error)
            self.removeSocket(placeholder)
            return
          }
          if (head.length > 0) {
            debug('got illegal response body from proxy')
            socket.destroy()
            var error = new Error('got illegal response body from proxy')
            error.code = 'ECONNRESET'
            options.request.emit('error', error)
            self.removeSocket(placeholder)
            return
          }
          debug('tunneling connection has established')
          self.sockets[self.sockets.indexOf(placeholder)] = socket
          return cb(socket)
        }

        function onError(cause) {
          connectReq.removeAllListeners()

          debug(
            'tunneling socket could not be established, cause=%s\n',
            cause.message,
            cause.stack
          )
          var error = new Error(
            'tunneling socket could not be established, ' +
              'cause=' +
              cause.message
          )
          error.code = 'ECONNRESET'
          options.request.emit('error', error)
          self.removeSocket(placeholder)
        }
      }

      TunnelingAgent.prototype.removeSocket = function removeSocket(socket) {
        var pos = this.sockets.indexOf(socket)
        if (pos === -1) {
          return
        }
        this.sockets.splice(pos, 1)

        var pending = this.requests.shift()
        if (pending) {
          // If we have pending requests and a socket gets closed a new one
          // needs to be created to take over in the pool for the one that closed.
          this.createSocket(pending, function (socket) {
            pending.request.onSocket(socket)
          })
        }
      }

      function createSecureSocket(options, cb) {
        var self = this
        TunnelingAgent.prototype.createSocket.call(
          self,
          options,
          function (socket) {
            var hostHeader = options.request.getHeader('host')
            var tlsOptions = mergeOptions({}, self.options, {
              socket: socket,
              servername: hostHeader
                ? hostHeader.replace(/:.*$/, '')
                : options.host
            })

            // 0 is dummy port for v0.6
            var secureSocket = tls.connect(0, tlsOptions)
            self.sockets[self.sockets.indexOf(socket)] = secureSocket
            cb(secureSocket)
          }
        )
      }

      function toOptions(host, port, localAddress) {
        if (typeof host === 'string') {
          // since v0.10
          return {
            host: host,
            port: port,
            localAddress: localAddress
          }
        }
        return host // for v0.11 or later
      }

      function mergeOptions(target) {
        for (var i = 1, len = arguments.length; i < len; ++i) {
          var overrides = arguments[i]
          if (typeof overrides === 'object') {
            var keys = Object.keys(overrides)
            for (var j = 0, keyLen = keys.length; j < keyLen; ++j) {
              var k = keys[j]
              if (overrides[k] !== undefined) {
                target[k] = overrides[k]
              }
            }
          }
        }
        return target
      }

      var debug
      if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) {
        debug = function () {
          var args = Array.prototype.slice.call(arguments)
          if (typeof args[0] === 'string') {
            args[0] = 'TUNNEL: ' + args[0]
          } else {
            args.unshift('TUNNEL:')
          }
          console.error.apply(console, args)
        }
      } else {
        debug = function () {}
      }
      exports.debug = debug // for test

      /***/
    },

    /***/ 5030: /***/ (__unused_webpack_module, exports) => {
      'use strict'

      Object.defineProperty(exports, '__esModule', { value: true })

      function getUserAgent() {
        if (typeof navigator === 'object' && 'userAgent' in navigator) {
          return navigator.userAgent
        }

        if (typeof process === 'object' && 'version' in process) {
          return `Node.js/${process.version.substr(1)} (${process.platform}; ${
            process.arch
          })`
        }

        return '<environment undetectable>'
      }

      exports.getUserAgent = getUserAgent
      //# sourceMappingURL=index.js.map

      /***/
    },

    /***/ 1452: /***/ function (__unused_webpack_module, exports) {
      /**
       * web-streams-polyfill v3.1.0
       */
      ;(function (global, factory) {
        true ? factory(exports) : 0
      })(this, function (exports) {
        'use strict'

        /// <reference lib="es2015.symbol" />
        const SymbolPolyfill =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? Symbol
            : (description) => `Symbol(${description})`

        /// <reference lib="dom" />
        function noop() {
          return undefined
        }
        function getGlobals() {
          if (typeof self !== 'undefined') {
            return self
          } else if (typeof window !== 'undefined') {
            return window
          } else if (typeof global !== 'undefined') {
            return global
          }
          return undefined
        }
        const globals = getGlobals()

        function typeIsObject(x) {
          return (
            (typeof x === 'object' && x !== null) || typeof x === 'function'
          )
        }
        const rethrowAssertionErrorRejection = noop

        const originalPromise = Promise
        const originalPromiseThen = Promise.prototype.then
        const originalPromiseResolve = Promise.resolve.bind(originalPromise)
        const originalPromiseReject = Promise.reject.bind(originalPromise)
        function newPromise(executor) {
          return new originalPromise(executor)
        }
        function promiseResolvedWith(value) {
          return originalPromiseResolve(value)
        }
        function promiseRejectedWith(reason) {
          return originalPromiseReject(reason)
        }
        function PerformPromiseThen(promise, onFulfilled, onRejected) {
          // There doesn't appear to be any way to correctly emulate the behaviour from JavaScript, so this is just an
          // approximation.
          return originalPromiseThen.call(promise, onFulfilled, onRejected)
        }
        function uponPromise(promise, onFulfilled, onRejected) {
          PerformPromiseThen(
            PerformPromiseThen(promise, onFulfilled, onRejected),
            undefined,
            rethrowAssertionErrorRejection
          )
        }
        function uponFulfillment(promise, onFulfilled) {
          uponPromise(promise, onFulfilled)
        }
        function uponRejection(promise, onRejected) {
          uponPromise(promise, undefined, onRejected)
        }
        function transformPromiseWith(
          promise,
          fulfillmentHandler,
          rejectionHandler
        ) {
          return PerformPromiseThen(
            promise,
            fulfillmentHandler,
            rejectionHandler
          )
        }
        function setPromiseIsHandledToTrue(promise) {
          PerformPromiseThen(promise, undefined, rethrowAssertionErrorRejection)
        }
        const queueMicrotask = (() => {
          const globalQueueMicrotask = globals && globals.queueMicrotask
          if (typeof globalQueueMicrotask === 'function') {
            return globalQueueMicrotask
          }
          const resolvedPromise = promiseResolvedWith(undefined)
          return (fn) => PerformPromiseThen(resolvedPromise, fn)
        })()
        function reflectCall(F, V, args) {
          if (typeof F !== 'function') {
            throw new TypeError('Argument is not a function')
          }
          return Function.prototype.apply.call(F, V, args)
        }
        function promiseCall(F, V, args) {
          try {
            return promiseResolvedWith(reflectCall(F, V, args))
          } catch (value) {
            return promiseRejectedWith(value)
          }
        }

        // Original from Chromium
        // https://chromium.googlesource.com/chromium/src/+/0aee4434a4dba42a42abaea9bfbc0cd196a63bc1/third_party/blink/renderer/core/streams/SimpleQueue.js
        const QUEUE_MAX_ARRAY_SIZE = 16384
        /**
         * Simple queue structure.
         *
         * Avoids scalability issues with using a packed array directly by using
         * multiple arrays in a linked list and keeping the array size bounded.
         */
        class SimpleQueue {
          constructor() {
            this._cursor = 0
            this._size = 0
            // _front and _back are always defined.
            this._front = {
              _elements: [],
              _next: undefined
            }
            this._back = this._front
            // The cursor is used to avoid calling Array.shift().
            // It contains the index of the front element of the array inside the
            // front-most node. It is always in the range [0, QUEUE_MAX_ARRAY_SIZE).
            this._cursor = 0
            // When there is only one node, size === elements.length - cursor.
            this._size = 0
          }
          get length() {
            return this._size
          }
          // For exception safety, this method is structured in order:
          // 1. Read state
          // 2. Calculate required state mutations
          // 3. Perform state mutations
          push(element) {
            const oldBack = this._back
            let newBack = oldBack
            if (oldBack._elements.length === QUEUE_MAX_ARRAY_SIZE - 1) {
              newBack = {
                _elements: [],
                _next: undefined
              }
            }
            // push() is the mutation most likely to throw an exception, so it
            // goes first.
            oldBack._elements.push(element)
            if (newBack !== oldBack) {
              this._back = newBack
              oldBack._next = newBack
            }
            ++this._size
          }
          // Like push(), shift() follows the read -> calculate -> mutate pattern for
          // exception safety.
          shift() {
            // must not be called on an empty queue
            const oldFront = this._front
            let newFront = oldFront
            const oldCursor = this._cursor
            let newCursor = oldCursor + 1
            const elements = oldFront._elements
            const element = elements[oldCursor]
            if (newCursor === QUEUE_MAX_ARRAY_SIZE) {
              newFront = oldFront._next
              newCursor = 0
            }
            // No mutations before this point.
            --this._size
            this._cursor = newCursor
            if (oldFront !== newFront) {
              this._front = newFront
            }
            // Permit shifted element to be garbage collected.
            elements[oldCursor] = undefined
            return element
          }
          // The tricky thing about forEach() is that it can be called
          // re-entrantly. The queue may be mutated inside the callback. It is easy to
          // see that push() within the callback has no negative effects since the end
          // of the queue is checked for on every iteration. If shift() is called
          // repeatedly within the callback then the next iteration may return an
          // element that has been removed. In this case the callback will be called
          // with undefined values until we either "catch up" with elements that still
          // exist or reach the back of the queue.
          forEach(callback) {
            let i = this._cursor
            let node = this._front
            let elements = node._elements
            while (i !== elements.length || node._next !== undefined) {
              if (i === elements.length) {
                node = node._next
                elements = node._elements
                i = 0
                if (elements.length === 0) {
                  break
                }
              }
              callback(elements[i])
              ++i
            }
          }
          // Return the element that would be returned if shift() was called now,
          // without modifying the queue.
          peek() {
            // must not be called on an empty queue
            const front = this._front
            const cursor = this._cursor
            return front._elements[cursor]
          }
        }

        function ReadableStreamReaderGenericInitialize(reader, stream) {
          reader._ownerReadableStream = stream
          stream._reader = reader
          if (stream._state === 'readable') {
            defaultReaderClosedPromiseInitialize(reader)
          } else if (stream._state === 'closed') {
            defaultReaderClosedPromiseInitializeAsResolved(reader)
          } else {
            defaultReaderClosedPromiseInitializeAsRejected(
              reader,
              stream._storedError
            )
          }
        }
        // A client of ReadableStreamDefaultReader and ReadableStreamBYOBReader may use these functions directly to bypass state
        // check.
        function ReadableStreamReaderGenericCancel(reader, reason) {
          const stream = reader._ownerReadableStream
          return ReadableStreamCancel(stream, reason)
        }
        function ReadableStreamReaderGenericRelease(reader) {
          if (reader._ownerReadableStream._state === 'readable') {
            defaultReaderClosedPromiseReject(
              reader,
              new TypeError(
                `Reader was released and can no longer be used to monitor the stream's closedness`
              )
            )
          } else {
            defaultReaderClosedPromiseResetToRejected(
              reader,
              new TypeError(
                `Reader was released and can no longer be used to monitor the stream's closedness`
              )
            )
          }
          reader._ownerReadableStream._reader = undefined
          reader._ownerReadableStream = undefined
        }
        // Helper functions for the readers.
        function readerLockException(name) {
          return new TypeError(
            'Cannot ' + name + ' a stream using a released reader'
          )
        }
        // Helper functions for the ReadableStreamDefaultReader.
        function defaultReaderClosedPromiseInitialize(reader) {
          reader._closedPromise = newPromise((resolve, reject) => {
            reader._closedPromise_resolve = resolve
            reader._closedPromise_reject = reject
          })
        }
        function defaultReaderClosedPromiseInitializeAsRejected(
          reader,
          reason
        ) {
          defaultReaderClosedPromiseInitialize(reader)
          defaultReaderClosedPromiseReject(reader, reason)
        }
        function defaultReaderClosedPromiseInitializeAsResolved(reader) {
          defaultReaderClosedPromiseInitialize(reader)
          defaultReaderClosedPromiseResolve(reader)
        }
        function defaultReaderClosedPromiseReject(reader, reason) {
          if (reader._closedPromise_reject === undefined) {
            return
          }
          setPromiseIsHandledToTrue(reader._closedPromise)
          reader._closedPromise_reject(reason)
          reader._closedPromise_resolve = undefined
          reader._closedPromise_reject = undefined
        }
        function defaultReaderClosedPromiseResetToRejected(reader, reason) {
          defaultReaderClosedPromiseInitializeAsRejected(reader, reason)
        }
        function defaultReaderClosedPromiseResolve(reader) {
          if (reader._closedPromise_resolve === undefined) {
            return
          }
          reader._closedPromise_resolve(undefined)
          reader._closedPromise_resolve = undefined
          reader._closedPromise_reject = undefined
        }

        const AbortSteps = SymbolPolyfill('[[AbortSteps]]')
        const ErrorSteps = SymbolPolyfill('[[ErrorSteps]]')
        const CancelSteps = SymbolPolyfill('[[CancelSteps]]')
        const PullSteps = SymbolPolyfill('[[PullSteps]]')

        /// <reference lib="es2015.core" />
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite#Polyfill
        const NumberIsFinite =
          Number.isFinite ||
          function (x) {
            return typeof x === 'number' && isFinite(x)
          }

        /// <reference lib="es2015.core" />
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#Polyfill
        const MathTrunc =
          Math.trunc ||
          function (v) {
            return v < 0 ? Math.ceil(v) : Math.floor(v)
          }

        // https://heycam.github.io/webidl/#idl-dictionaries
        function isDictionary(x) {
          return typeof x === 'object' || typeof x === 'function'
        }
        function assertDictionary(obj, context) {
          if (obj !== undefined && !isDictionary(obj)) {
            throw new TypeError(`${context} is not an object.`)
          }
        }
        // https://heycam.github.io/webidl/#idl-callback-functions
        function assertFunction(x, context) {
          if (typeof x !== 'function') {
            throw new TypeError(`${context} is not a function.`)
          }
        }
        // https://heycam.github.io/webidl/#idl-object
        function isObject(x) {
          return (
            (typeof x === 'object' && x !== null) || typeof x === 'function'
          )
        }
        function assertObject(x, context) {
          if (!isObject(x)) {
            throw new TypeError(`${context} is not an object.`)
          }
        }
        function assertRequiredArgument(x, position, context) {
          if (x === undefined) {
            throw new TypeError(
              `Parameter ${position} is required in '${context}'.`
            )
          }
        }
        function assertRequiredField(x, field, context) {
          if (x === undefined) {
            throw new TypeError(`${field} is required in '${context}'.`)
          }
        }
        // https://heycam.github.io/webidl/#idl-unrestricted-double
        function convertUnrestrictedDouble(value) {
          return Number(value)
        }
        function censorNegativeZero(x) {
          return x === 0 ? 0 : x
        }
        function integerPart(x) {
          return censorNegativeZero(MathTrunc(x))
        }
        // https://heycam.github.io/webidl/#idl-unsigned-long-long
        function convertUnsignedLongLongWithEnforceRange(value, context) {
          const lowerBound = 0
          const upperBound = Number.MAX_SAFE_INTEGER
          let x = Number(value)
          x = censorNegativeZero(x)
          if (!NumberIsFinite(x)) {
            throw new TypeError(`${context} is not a finite number`)
          }
          x = integerPart(x)
          if (x < lowerBound || x > upperBound) {
            throw new TypeError(
              `${context} is outside the accepted range of ${lowerBound} to ${upperBound}, inclusive`
            )
          }
          if (!NumberIsFinite(x) || x === 0) {
            return 0
          }
          // TODO Use BigInt if supported?
          // let xBigInt = BigInt(integerPart(x));
          // xBigInt = BigInt.asUintN(64, xBigInt);
          // return Number(xBigInt);
          return x
        }

        function assertReadableStream(x, context) {
          if (!IsReadableStream(x)) {
            throw new TypeError(`${context} is not a ReadableStream.`)
          }
        }

        // Abstract operations for the ReadableStream.
        function AcquireReadableStreamDefaultReader(stream) {
          return new ReadableStreamDefaultReader(stream)
        }
        // ReadableStream API exposed for controllers.
        function ReadableStreamAddReadRequest(stream, readRequest) {
          stream._reader._readRequests.push(readRequest)
        }
        function ReadableStreamFulfillReadRequest(stream, chunk, done) {
          const reader = stream._reader
          const readRequest = reader._readRequests.shift()
          if (done) {
            readRequest._closeSteps()
          } else {
            readRequest._chunkSteps(chunk)
          }
        }
        function ReadableStreamGetNumReadRequests(stream) {
          return stream._reader._readRequests.length
        }
        function ReadableStreamHasDefaultReader(stream) {
          const reader = stream._reader
          if (reader === undefined) {
            return false
          }
          if (!IsReadableStreamDefaultReader(reader)) {
            return false
          }
          return true
        }
        /**
         * A default reader vended by a {@link ReadableStream}.
         *
         * @public
         */
        class ReadableStreamDefaultReader {
          constructor(stream) {
            assertRequiredArgument(stream, 1, 'ReadableStreamDefaultReader')
            assertReadableStream(stream, 'First parameter')
            if (IsReadableStreamLocked(stream)) {
              throw new TypeError(
                'This stream has already been locked for exclusive reading by another reader'
              )
            }
            ReadableStreamReaderGenericInitialize(this, stream)
            this._readRequests = new SimpleQueue()
          }
          /**
           * Returns a promise that will be fulfilled when the stream becomes closed,
           * or rejected if the stream ever errors or the reader's lock is released before the stream finishes closing.
           */
          get closed() {
            if (!IsReadableStreamDefaultReader(this)) {
              return promiseRejectedWith(
                defaultReaderBrandCheckException('closed')
              )
            }
            return this._closedPromise
          }
          /**
           * If the reader is active, behaves the same as {@link ReadableStream.cancel | stream.cancel(reason)}.
           */
          cancel(reason = undefined) {
            if (!IsReadableStreamDefaultReader(this)) {
              return promiseRejectedWith(
                defaultReaderBrandCheckException('cancel')
              )
            }
            if (this._ownerReadableStream === undefined) {
              return promiseRejectedWith(readerLockException('cancel'))
            }
            return ReadableStreamReaderGenericCancel(this, reason)
          }
          /**
           * Returns a promise that allows access to the next chunk from the stream's internal queue, if available.
           *
           * If reading a chunk causes the queue to become empty, more data will be pulled from the underlying source.
           */
          read() {
            if (!IsReadableStreamDefaultReader(this)) {
              return promiseRejectedWith(
                defaultReaderBrandCheckException('read')
              )
            }
            if (this._ownerReadableStream === undefined) {
              return promiseRejectedWith(readerLockException('read from'))
            }
            let resolvePromise
            let rejectPromise
            const promise = newPromise((resolve, reject) => {
              resolvePromise = resolve
              rejectPromise = reject
            })
            const readRequest = {
              _chunkSteps: (chunk) =>
                resolvePromise({ value: chunk, done: false }),
              _closeSteps: () =>
                resolvePromise({ value: undefined, done: true }),
              _errorSteps: (e) => rejectPromise(e)
            }
            ReadableStreamDefaultReaderRead(this, readRequest)
            return promise
          }
          /**
           * Releases the reader's lock on the corresponding stream. After the lock is released, the reader is no longer active.
           * If the associated stream is errored when the lock is released, the reader will appear errored in the same way
           * from now on; otherwise, the reader will appear closed.
           *
           * A reader's lock cannot be released while it still has a pending read request, i.e., if a promise returned by
           * the reader's {@link ReadableStreamDefaultReader.read | read()} method has not yet been settled. Attempting to
           * do so will throw a `TypeError` and leave the reader locked to the stream.
           */
          releaseLock() {
            if (!IsReadableStreamDefaultReader(this)) {
              throw defaultReaderBrandCheckException('releaseLock')
            }
            if (this._ownerReadableStream === undefined) {
              return
            }
            if (this._readRequests.length > 0) {
              throw new TypeError(
                'Tried to release a reader lock when that reader has pending read() calls un-settled'
              )
            }
            ReadableStreamReaderGenericRelease(this)
          }
        }
        Object.defineProperties(ReadableStreamDefaultReader.prototype, {
          cancel: { enumerable: true },
          read: { enumerable: true },
          releaseLock: { enumerable: true },
          closed: { enumerable: true }
        })
        if (typeof SymbolPolyfill.toStringTag === 'symbol') {
          Object.defineProperty(
            ReadableStreamDefaultReader.prototype,
            SymbolPolyfill.toStringTag,
            {
              value: 'ReadableStreamDefaultReader',
              configurable: true
            }
          )
        }
        // Abstract operations for the readers.
        function IsReadableStreamDefaultReader(x) {
          if (!typeIsObject(x)) {
            return false
          }
          if (!Object.prototype.hasOwnProperty.call(x, '_readRequests')) {
            return false
          }
          return x instanceof ReadableStreamDefaultReader
        }
        function ReadableStreamDefaultReaderRead(reader, readRequest) {
          const stream = reader._ownerReadableStream
          stream._disturbed = true
          if (stream._state === 'closed') {
            readRequest._closeSteps()
          } else if (stream._state === 'errored') {
            readRequest._errorSteps(stream._storedError)
          } else {
            stream._readableStreamController[PullSteps](readRequest)
          }
        }
        // Helper functions for the ReadableStreamDefaultReader.
        function defaultReaderBrandCheckException(name) {
          return new TypeError(
            `ReadableStreamDefaultReader.prototype.${name} can only be used on a ReadableStreamDefaultReader`
          )
        }

        /// <reference lib="es2018.asynciterable" />
        /* eslint-disable @typescript-eslint/no-empty-function */
        const AsyncIteratorPrototype = Object.getPrototypeOf(
          Object.getPrototypeOf(async function* () {}).prototype
        )

        /// <reference lib="es2018.asynciterable" />
        class ReadableStreamAsyncIteratorImpl {
          constructor(reader, preventCancel) {
            this._ongoingPromise = undefined
            this._isFinished = false
            this._reader = reader
            this._preventCancel = preventCancel
          }
          next() {
            const nextSteps = () => this._nextSteps()
            this._ongoingPromise = this._ongoingPromise
              ? transformPromiseWith(this._ongoingPromise, nextSteps, nextSteps)
              : nextSteps()
            return this._ongoingPromise
          }
          return(value) {
            const returnSteps = () => this._returnSteps(value)
            return this._ongoingPromise
              ? transformPromiseWith(
                  this._ongoingPromise,
                  returnSteps,
                  returnSteps
                )
              : returnSteps()
          }
          _nextSteps() {
            if (this._isFinished) {
              return Promise.resolve({ value: undefined, done: true })
            }
            const reader = this._reader
            if (reader._ownerReadableStream === undefined) {
              return promiseRejectedWith(readerLockException('iterate'))
            }
            let resolvePromise
            let rejectPromise
            const promise = newPromise((resolve, reject) => {
              resolvePromise = resolve
              rejectPromise = reject
            })
            const readRequest = {
              _chunkSteps: (chunk) => {
                this._ongoingPromise = undefined
                // This needs to be delayed by one microtask, otherwise we stop pulling too early which breaks a test.
                // FIXME Is this a bug in the specification, or in the test?
                queueMicrotask(() =>
                  resolvePromise({ value: chunk, done: false })
                )
              },
              _closeSteps: () => {
                this._ongoingPromise = undefined
                this._isFinished = true
                ReadableStreamReaderGenericRelease(reader)
                resolvePromise({ value: undefined, done: true })
              },
              _errorSteps: (reason) => {
                this._ongoingPromise = undefined
                this._isFinished = true
                ReadableStreamReaderGenericRelease(reader)
                rejectPromise(reason)
              }
            }
            ReadableStreamDefaultReaderRead(reader, readRequest)
            return promise
          }
          _returnSteps(value) {
            if (this._isFinished) {
              return Promise.resolve({ value, done: true })
            }
            this._isFinished = true
            const reader = this._reader
            if (reader._ownerReadableStream === undefined) {
              return promiseRejectedWith(
                readerLockException('finish iterating')
              )
            }
            if (!this._preventCancel) {
              const result = ReadableStreamReaderGenericCancel(reader, value)
              ReadableStreamReaderGenericRelease(reader)
              return transformPromiseWith(result, () => ({ value, done: true }))
            }
            ReadableStreamReaderGenericRelease(reader)
            return promiseResolvedWith({ value, done: true })
          }
        }
        const ReadableStreamAsyncIteratorPrototype = {
          next() {
            if (!IsReadableStreamAsyncIterator(this)) {
              return promiseRejectedWith(
                streamAsyncIteratorBrandCheckException('next')
              )
            }
            return this._asyncIteratorImpl.next()
          },
          return(value) {
            if (!IsReadableStreamAsyncIterator(this)) {
              return promiseRejectedWith(
                streamAsyncIteratorBrandCheckException('return')
              )
            }
            return this._asyncIteratorImpl.return(value)
          }
        }
        if (AsyncIteratorPrototype !== undefined) {
          Object.setPrototypeOf(
            ReadableStreamAsyncIteratorPrototype,
            AsyncIteratorPrototype
          )
        }
        // Abstract operations for the ReadableStream.
        function AcquireReadableStreamAsyncIterator(stream, preventCancel) {
          const reader = AcquireReadableStreamDefaultReader(stream)
          const impl = new ReadableStreamAsyncIteratorImpl(
            reader,
            preventCancel
          )
          const iterator = Object.create(ReadableStreamAsyncIteratorPrototype)
          iterator._asyncIteratorImpl = impl
          return iterator
        }
        function IsReadableStreamAsyncIterator(x) {
          if (!typeIsObject(x)) {
            return false
          }
          if (!Object.prototype.hasOwnProperty.call(x, '_asyncIteratorImpl')) {
            return false
          }
          try {
            // noinspection SuspiciousTypeOfGuard
            return (
              x._asyncIteratorImpl instanceof ReadableStreamAsyncIteratorImpl
            )
          } catch (_a) {
            return false
          }
        }
        // Helper functions for the ReadableStream.
        function streamAsyncIteratorBrandCheckException(name) {
          return new TypeError(
            `ReadableStreamAsyncIterator.${name} can only be used on a ReadableSteamAsyncIterator`
          )
        }

        /// <reference lib="es2015.core" />
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN#Polyfill
        const NumberIsNaN =
          Number.isNaN ||
          function (x) {
            // eslint-disable-next-line no-self-compare
            return x !== x
          }

        function CreateArrayFromList(elements) {
          // We use arrays to represent lists, so this is basically a no-op.
          // Do a slice though just in case we happen to depend on the unique-ness.
          return elements.slice()
        }
        function CopyDataBlockBytes(dest, destOffset, src, srcOffset, n) {
          new Uint8Array(dest).set(
            new Uint8Array(src, srcOffset, n),
            destOffset
          )
        }
        // Not implemented correctly
        function TransferArrayBuffer(O) {
          return O
        }
        // Not implemented correctly
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        function IsDetachedBuffer(O) {
          return false
        }
        function ArrayBufferSlice(buffer, begin, end) {
          // ArrayBuffer.prototype.slice is not available on IE10
          // https://www.caniuse.com/mdn-javascript_builtins_arraybuffer_slice
          if (buffer.slice) {
            return buffer.slice(begin, end)
          }
          const length = end - begin
          const slice = new ArrayBuffer(length)
          CopyDataBlockBytes(slice, 0, buffer, begin, length)
          return slice
        }

        function IsNonNegativeNumber(v) {
          if (typeof v !== 'number') {
            return false
          }
          if (NumberIsNaN(v)) {
            return false
          }
          if (v < 0) {
            return false
          }
          return true
        }
        function CloneAsUint8Array(O) {
          const buffer = ArrayBufferSlice(
            O.buffer,
            O.byteOffset,
            O.byteOffset + O.byteLength
          )
          return new Uint8Array(buffer)
        }

        function DequeueValue(container) {
          const pair = container._queue.shift()
          container._queueTotalSize -= pair.size
          if (container._queueTotalSize < 0) {
            container._queueTotalSize = 0
          }
          return pair.value
        }
        function EnqueueValueWithSize(container, value, size) {
          if (!IsNonNegativeNumber(size) || size === Infinity) {
            throw new RangeError(
              'Size must be a finite, non-NaN, non-negative number.'
            )
          }
          container._queue.push({ value, size })
          container._queueTotalSize += size
        }
        function PeekQueueValue(container) {
          const pair = container._queue.peek()
          return pair.value
        }
        function ResetQueue(container) {
          container._queue = new SimpleQueue()
          container._queueTotalSize = 0
        }

        /**
         * A pull-into request in a {@link ReadableByteStreamController}.
         *
         * @public
         */
        class ReadableStreamBYOBRequest {
          constructor() {
            throw new TypeError('Illegal constructor')
          }
          /**
           * Returns the view for writing in to, or `null` if the BYOB request has already been responded to.
           */
          get view() {
            if (!IsReadableStreamBYOBRequest(this)) {
              throw byobRequestBrandCheckException('view')
            }
            return this._view
          }
          respond(bytesWritten) {
            if (!IsReadableStreamBYOBRequest(this)) {
              throw byobRequestBrandCheckException('respond')
            }
            assertRequiredArgument(bytesWritten, 1, 'respond')
            bytesWritten = convertUnsignedLongLongWithEnforceRange(
              bytesWritten,
              'First parameter'
            )
            if (this._associatedReadableByteStreamController === undefined) {
              throw new TypeError('This BYOB request has been invalidated')
            }
            if (IsDetachedBuffer(this._view.buffer));
            ReadableByteStreamControllerRespond(
              this._associatedReadableByteStreamController,
              bytesWritten
            )
          }
          respondWithNewView(view) {
            if (!IsReadableStreamBYOBRequest(this)) {
              throw byobRequestBrandCheckException('respondWithNewView')
            }
            assertRequiredArgument(view, 1, 'respondWithNewView')
            if (!ArrayBuffer.isView(view)) {
              throw new TypeError(
                'You can only respond with array buffer views'
              )
            }
            if (this._associatedReadableByteStreamController === undefined) {
              throw new TypeError('This BYOB request has been invalidated')
            }
            if (IsDetachedBuffer(view.buffer));
            ReadableByteStreamControllerRespondWithNewView(
              this._associatedReadableByteStreamController,
              view
            )
          }
        }
        Object.defineProperties(ReadableStreamBYOBRequest.prototype, {
          respond: { enumerable: true },
          respondWithNewView: { enumerable: true },
          view: { enumerable: true }
        })
        if (typeof SymbolPolyfill.toStringTag === 'symbol') {
          Object.defineProperty(
            ReadableStreamBYOBRequest.prototype,
            SymbolPolyfill.toStringTag,
            {
              value: 'ReadableStreamBYOBRequest',
              configurable: true
            }
          )
        }
        /**
         * Allows control of a {@link ReadableStream | readable byte stream}'s state and internal queue.
         *
         * @public
         */
        class ReadableByteStreamController {
          constructor() {
            throw new TypeError('Illegal constructor')
          }
          /**
           * Returns the current BYOB pull request, or `null` if there isn't one.
           */
          get byobRequest() {
            if (!IsReadableByteStreamController(this)) {
              throw byteStreamControllerBrandCheckException('byobRequest')
            }
            return ReadableByteStreamControllerGetBYOBRequest(this)
          }
          /**
           * Returns the desired size to fill the controlled stream's internal queue. It can be negative, if the queue is
           * over-full. An underlying byte source ought to use this information to determine when and how to apply backpressure.
           */
          get desiredSize() {
            if (!IsReadableByteStreamController(this)) {
              throw byteStreamControllerBrandCheckException('desiredSize')
            }
            return ReadableByteStreamControllerGetDesiredSize(this)
          }
          /**
           * Closes the controlled readable stream. Consumers will still be able to read any previously-enqueued chunks from
           * the stream, but once those are read, the stream will become closed.
           */
          close() {
            if (!IsReadableByteStreamController(this)) {
              throw byteStreamControllerBrandCheckException('close')
            }
            if (this._closeRequested) {
              throw new TypeError(
                'The stream has already been closed; do not close it again!'
              )
            }
            const state = this._controlledReadableByteStream._state
            if (state !== 'readable') {
              throw new TypeError(
                `The stream (in ${state} state) is not in the readable state and cannot be closed`
              )
            }
            ReadableByteStreamControllerClose(this)
          }
          enqueue(chunk) {
            if (!IsReadableByteStreamController(this)) {
              throw byteStreamControllerBrandCheckException('enqueue')
            }
            assertRequiredArgument(chunk, 1, 'enqueue')
            if (!ArrayBuffer.isView(chunk)) {
              throw new TypeError('chunk must be an array buffer view')
            }
            if (chunk.byteLength === 0) {
              throw new TypeError('chunk must have non-zero byteLength')
            }
            if (chunk.buffer.byteLength === 0) {
              throw new TypeError(
                `chunk's buffer must have non-zero byteLength`
              )
            }
            if (this._closeRequested) {
              throw new TypeError('stream is closed or draining')
            }
            const state = this._controlledReadableByteStream._state
            if (state !== 'readable') {
              throw new TypeError(
                `The stream (in ${state} state) is not in the readable state and cannot be enqueued to`
              )
            }
            ReadableByteStreamControllerEnqueue(this, chunk)
          }
          /**
           * Errors the controlled readable stream, making all future interactions with it fail with the given error `e`.
           */
          error(e = undefined) {
            if (!IsReadableByteStreamController(this)) {
              throw byteStreamControllerBrandCheckException('error')
            }
            ReadableByteStreamControllerError(this, e)
          }
          /** @internal */
          [CancelSteps](reason) {
            ReadableByteStreamControllerClearPendingPullIntos(this)
            ResetQueue(this)
            const result = this._cancelAlgorithm(reason)
            ReadableByteStreamControllerClearAlgorithms(this)
            return result
          }
          /** @internal */
          [PullSteps](readRequest) {
            const stream = this._controlledReadableByteStream
            if (this._queueTotalSize > 0) {
              const entry = this._queue.shift()
              this._queueTotalSize -= entry.byteLength
              ReadableByteStreamControllerHandleQueueDrain(this)
              const view = new Uint8Array(
                entry.buffer,
                entry.byteOffset,
                entry.byteLength
              )
              readRequest._chunkSteps(view)
              return
            }
            const autoAllocateChunkSize = this._autoAllocateChunkSize
            if (autoAllocateChunkSize !== undefined) {
              let buffer
              try {
                buffer = new ArrayBuffer(autoAllocateChunkSize)
              } catch (bufferE) {
                readRequest._errorSteps(bufferE)
                return
              }
              const pullIntoDescriptor = {
                buffer,
                bufferByteLength: autoAllocateChunkSize,
                byteOffset: 0,
                byteLength: autoAllocateChunkSize,
                bytesFilled: 0,
                elementSize: 1,
                viewConstructor: Uint8Array,
                readerType: 'default'
              }
              this._pendingPullIntos.push(pullIntoDescriptor)
            }
            ReadableStreamAddReadRequest(stream, readRequest)
            ReadableByteStreamControllerCallPullIfNeeded(this)
          }
        }
        Object.defineProperties(ReadableByteStreamController.prototype, {
          close: { enumerable: true },
          enqueue: { enumerable: true },
          error: { enumerable: true },
          byobRequest: { enumerable: true },
          desiredSize: { enumerable: true }
        })
        if (typeof SymbolPolyfill.toStringTag === 'symbol') {
          Object.defineProperty(
            ReadableByteStreamController.prototype,
            SymbolPolyfill.toStringTag,
            {
              value: 'ReadableByteStreamController',
              configurable: true
            }
          )
        }
        // Abstract operations for the ReadableByteStreamController.
        function IsReadableByteStreamController(x) {
          if (!typeIsObject(x)) {
            return false
          }
          if (
            !Object.prototype.hasOwnProperty.call(
              x,
              '_controlledReadableByteStream'
            )
          ) {
            return false
          }
          return x instanceof ReadableByteStreamController
        }
        function IsReadableStreamBYOBRequest(x) {
          if (!typeIsObject(x)) {
            return false
          }
          if (
            !Object.prototype.hasOwnProperty.call(
              x,
              '_associatedReadableByteStreamController'
            )
          ) {
            return false
          }
          return x instanceof ReadableStreamBYOBRequest
        }
        function ReadableByteStreamControllerCallPullIfNeeded(controller) {
          const shouldPull =
            ReadableByteStreamControllerShouldCallPull(controller)
          if (!shouldPull) {
            return
          }
          if (controller._pulling) {
            controller._pullAgain = true
            return
          }
          controller._pulling = true
          // TODO: Test controller argument
          const pullPromise = controller._pullAlgorithm()
          uponPromise(
            pullPromise,
            () => {
              controller._pulling = false
              if (controller._pullAgain) {
                controller._pullAgain = false
                ReadableByteStreamControllerCallPullIfNeeded(controller)
              }
            },
            (e) => {
              ReadableByteStreamControllerError(controller, e)
            }
          )
        }
        function ReadableByteStreamControllerClearPendingPullIntos(controller) {
          ReadableByteStreamControllerInvalidateBYOBRequest(controller)
          controller._pendingPullIntos = new SimpleQueue()
        }
        function ReadableByteStreamControllerCommitPullIntoDescriptor(
          stream,
          pullIntoDescriptor
        ) {
          let done = false
          if (stream._state === 'closed') {
            done = true
          }
          const filledView =
            ReadableByteStreamControllerConvertPullIntoDescriptor(
              pullIntoDescriptor
            )
          if (pullIntoDescriptor.readerType === 'default') {
            ReadableStreamFulfillReadRequest(stream, filledView, done)
          } else {
            ReadableStreamFulfillReadIntoRequest(stream, filledView, done)
          }
        }
        function ReadableByteStreamControllerConvertPullIntoDescriptor(
          pullIntoDescriptor
        ) {
          const bytesFilled = pullIntoDescriptor.bytesFilled
          const elementSize = pullIntoDescriptor.elementSize
          return new pullIntoDescriptor.viewConstructor(
            pullIntoDescriptor.buffer,
            pullIntoDescriptor.byteOffset,
            bytesFilled / elementSize
          )
        }
        function ReadableByteStreamControllerEnqueueChunkToQueue(
          controller,
          buffer,
          byteOffset,
          byteLength
        ) {
          controller._queue.push({ buffer, byteOffset, byteLength })
          controller._queueTotalSize += byteLength
        }
        function ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(
          controller,
          pullIntoDescriptor
        ) {
          const elementSize = pullIntoDescriptor.elementSize
          const currentAlignedBytes =
            pullIntoDescriptor.bytesFilled -
            (pullIntoDescriptor.bytesFilled % elementSize)
          const maxBytesToCopy = Math.min(
            controller._queueTotalSize,
            pullIntoDescriptor.byteLength - pullIntoDescriptor.bytesFilled
          )
          const maxBytesFilled = pullIntoDescriptor.bytesFilled + maxBytesToCopy
          const maxAlignedBytes =
            maxBytesFilled - (maxBytesFilled % elementSize)
          let totalBytesToCopyRemaining = maxBytesToCopy
          let ready = false
          if (maxAlignedBytes > currentAlignedBytes) {
            totalBytesToCopyRemaining =
              maxAlignedBytes - pullIntoDescriptor.bytesFilled
            ready = true
          }
          const queue = controller._queue
          while (totalBytesToCopyRemaining > 0) {
            const headOfQueue = queue.peek()
            const bytesToCopy = Math.min(
              totalBytesToCopyRemaining,
              headOfQueue.byteLength
            )
            const destStart =
              pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled
            CopyDataBlockBytes(
              pullIntoDescriptor.buffer,
              destStart,
              headOfQueue.buffer,
              headOfQueue.byteOffset,
              bytesToCopy
            )
            if (headOfQueue.byteLength === bytesToCopy) {
              queue.shift()
            } else {
              headOfQueue.byteOffset += bytesToCopy
              headOfQueue.byteLength -= bytesToCopy
            }
            controller._queueTotalSize -= bytesToCopy
            ReadableByteStreamControllerFillHeadPullIntoDescriptor(
              controller,
              bytesToCopy,
              pullIntoDescriptor
            )
            totalBytesToCopyRemaining -= bytesToCopy
          }
          return ready
        }
        function ReadableByteStreamControllerFillHeadPullIntoDescriptor(
          controller,
          size,
          pullIntoDescriptor
        ) {
          pullIntoDescriptor.bytesFilled += size
        }
        function ReadableByteStreamControllerHandleQueueDrain(controller) {
          if (controller._queueTotalSize === 0 && controller._closeRequested) {
            ReadableByteStreamControllerClearAlgorithms(controller)
            ReadableStreamClose(controller._controlledReadableByteStream)
          } else {
            ReadableByteStreamControllerCallPullIfNeeded(controller)
          }
        }
        function ReadableByteStreamControllerInvalidateBYOBRequest(controller) {
          if (controller._byobRequest === null) {
            return
          }
          controller._byobRequest._associatedReadableByteStreamController =
            undefined
          controller._byobRequest._view = null
          controller._byobRequest = null
        }
        function ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(
          controller
        ) {
          while (controller._pendingPullIntos.length > 0) {
            if (controller._queueTotalSize === 0) {
              return
            }
            const pullIntoDescriptor = controller._pendingPullIntos.peek()
            if (
              ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(
                controller,
                pullIntoDescriptor
              )
            ) {
              ReadableByteStreamControllerShiftPendingPullInto(controller)
              ReadableByteStreamControllerCommitPullIntoDescriptor(
                controller._controlledReadableByteStream,
                pullIntoDescriptor
              )
            }
          }
        }
        function ReadableByteStreamControllerPullInto(
          controller,
          view,
          readIntoRequest
        ) {
          const stream = controller._controlledReadableByteStream
          let elementSize = 1
          if (view.constructor !== DataView) {
            elementSize = view.constructor.BYTES_PER_ELEMENT
          }
          const ctor = view.constructor
          // try {
          const buffer = TransferArrayBuffer(view.buffer)
          // } catch (e) {
          //   readIntoRequest._errorSteps(e);
          //   return;
          // }
          const pullIntoDescriptor = {
            buffer,
            bufferByteLength: buffer.byteLength,
            byteOffset: view.byteOffset,
            byteLength: view.byteLength,
            bytesFilled: 0,
            elementSize,
            viewConstructor: ctor,
            readerType: 'byob'
          }
          if (controller._pendingPullIntos.length > 0) {
            controller._pendingPullIntos.push(pullIntoDescriptor)
            // No ReadableByteStreamControllerCallPullIfNeeded() call since:
            // - No change happens on desiredSize
            // - The source has already been notified of that there's at least 1 pending read(view)
            ReadableStreamAddReadIntoRequest(stream, readIntoRequest)
            return
          }
          if (stream._state === 'closed') {
            const emptyView = new ctor(
              pullIntoDescriptor.buffer,
              pullIntoDescriptor.byteOffset,
              0
            )
            readIntoRequest._closeSteps(emptyView)
            return
          }
          if (controller._queueTotalSize > 0) {
            if (
              ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(
                controller,
                pullIntoDescriptor
              )
            ) {
              const filledView =
                ReadableByteStreamControllerConvertPullIntoDescriptor(
                  pullIntoDescriptor
                )
              ReadableByteStreamControllerHandleQueueDrain(controller)
              readIntoRequest._chunkSteps(filledView)
              return
            }
            if (controller._closeRequested) {
              const e = new TypeError(
                'Insufficient bytes to fill elements in the given buffer'
              )
              ReadableByteStreamControllerError(controller, e)
              readIntoRequest._errorSteps(e)
              return
            }
          }
          controller._pendingPullIntos.push(pullIntoDescriptor)
          ReadableStreamAddReadIntoRequest(stream, readIntoRequest)
          ReadableByteStreamControllerCallPullIfNeeded(controller)
        }
        function ReadableByteStreamControllerRespondInClosedState(
          controller,
          firstDescriptor
        ) {
          const stream = controller._controlledReadableByteStream
          if (ReadableStreamHasBYOBReader(stream)) {
            while (ReadableStreamGetNumReadIntoRequests(stream) > 0) {
              const pullIntoDescriptor =
                ReadableByteStreamControllerShiftPendingPullInto(controller)
              ReadableByteStreamControllerCommitPullIntoDescriptor(
                stream,
                pullIntoDescriptor
              )
            }
          }
        }
        function ReadableByteStreamControllerRespondInReadableState(
          controller,
          bytesWritten,
          pullIntoDescriptor
        ) {
          ReadableByteStreamControllerFillHeadPullIntoDescriptor(
            controller,
            bytesWritten,
            pullIntoDescriptor
          )
          if (pullIntoDescriptor.bytesFilled < pullIntoDescriptor.elementSize) {
            return
          }
          ReadableByteStreamControllerShiftPendingPullInto(controller)
          const remainderSize =
            pullIntoDescriptor.bytesFilled % pullIntoDescriptor.elementSize
          if (remainderSize > 0) {
            const end =
              pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled
            const remainder = ArrayBufferSlice(
              pullIntoDescriptor.buffer,
              end - remainderSize,
              end
            )
            ReadableByteStreamControllerEnqueueChunkToQueue(
              controller,
              remainder,
              0,
              remainder.byteLength
            )
          }
          pullIntoDescriptor.bytesFilled -= remainderSize
          ReadableByteStreamControllerCommitPullIntoDescriptor(
            controller._controlledReadableByteStream,
            pullIntoDescriptor
          )
          ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(
            controller
          )
        }
        function ReadableByteStreamControllerRespondInternal(
          controller,
          bytesWritten
        ) {
          const firstDescriptor = controller._pendingPullIntos.peek()
          ReadableByteStreamControllerInvalidateBYOBRequest(controller)
          const state = controller._controlledReadableByteStream._state
          if (state === 'closed') {
            ReadableByteStreamControllerRespondInClosedState(controller)
          } else {
            ReadableByteStreamControllerRespondInReadableState(
              controller,
              bytesWritten,
              firstDescriptor
            )
          }
          ReadableByteStreamControllerCallPullIfNeeded(controller)
        }
        function ReadableByteStreamControllerShiftPendingPullInto(controller) {
          const descriptor = controller._pendingPullIntos.shift()
          return descriptor
        }
        function ReadableByteStreamControllerShouldCallPull(controller) {
          const stream = controller._controlledReadableByteStream
          if (stream._state !== 'readable') {
            return false
          }
          if (controller._closeRequested) {
            return false
          }
          if (!controller._started) {
            return false
          }
          if (
            ReadableStreamHasDefaultReader(stream) &&
            ReadableStreamGetNumReadRequests(stream) > 0
          ) {
            return true
          }
          if (
            ReadableStreamHasBYOBReader(stream) &&
            ReadableStreamGetNumReadIntoRequests(stream) > 0
          ) {
            return true
          }
          const desiredSize =
            ReadableByteStreamControllerGetDesiredSize(controller)
          if (desiredSize > 0) {
            return true
          }
          return false
        }
        function ReadableByteStreamControllerClearAlgorithms(controller) {
          controller._pullAlgorithm = undefined
          controller._cancelAlgorithm = undefined
        }
        // A client of ReadableByteStreamController may use these functions directly to bypass state check.
        function ReadableByteStreamControllerClose(controller) {
          const stream = controller._controlledReadableByteStream
          if (controller._closeRequested || stream._state !== 'readable') {
            return
          }
          if (controller._queueTotalSize > 0) {
            controller._closeRequested = true
            return
          }
          if (controller._pendingPullIntos.length > 0) {
            const firstPendingPullInto = controller._pendingPullIntos.peek()
            if (firstPendingPullInto.bytesFilled > 0) {
              const e = new TypeError(
                'Insufficient bytes to fill elements in the given buffer'
              )
              ReadableByteStreamControllerError(controller, e)
              throw e
            }
          }
          ReadableByteStreamControllerClearAlgorithms(controller)
          ReadableStreamClose(stream)
        }
        function ReadableByteStreamControllerEnqueue(controller, chunk) {
          const stream = controller._controlledReadableByteStream
          if (controller._closeRequested || stream._state !== 'readable') {
            return
          }
          const buffer = chunk.buffer
          const byteOffset = chunk.byteOffset
          const byteLength = chunk.byteLength
          const transferredBuffer = TransferArrayBuffer(buffer)
          if (controller._pendingPullIntos.length > 0) {
            const firstPendingPullInto = controller._pendingPullIntos.peek()
            if (IsDetachedBuffer(firstPendingPullInto.buffer));
            firstPendingPullInto.buffer = TransferArrayBuffer(
              firstPendingPullInto.buffer
            )
          }
          ReadableByteStreamControllerInvalidateBYOBRequest(controller)
          if (ReadableStreamHasDefaultReader(stream)) {
            if (ReadableStreamGetNumReadRequests(stream) === 0) {
              ReadableByteStreamControllerEnqueueChunkToQueue(
                controller,
                transferredBuffer,
                byteOffset,
                byteLength
              )
            } else {
              const transferredView = new Uint8Array(
                transferredBuffer,
                byteOffset,
                byteLength
              )
              ReadableStreamFulfillReadRequest(stream, transferredView, false)
            }
          } else if (ReadableStreamHasBYOBReader(stream)) {
            // TODO: Ideally in this branch detaching should happen only if the buffer is not consumed fully.
            ReadableByteStreamControllerEnqueueChunkToQueue(
              controller,
              transferredBuffer,
              byteOffset,
              byteLength
            )
            ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(
              controller
            )
          } else {
            ReadableByteStreamControllerEnqueueChunkToQueue(
              controller,
              transferredBuffer,
              byteOffset,
              byteLength
            )
          }
          ReadableByteStreamControllerCallPullIfNeeded(controller)
        }
        function ReadableByteStreamControllerError(controller, e) {
          const stream = controller._controlledReadableByteStream
          if (stream._state !== 'readable') {
            return
          }
          ReadableByteStreamControllerClearPendingPullIntos(controller)
          ResetQueue(controller)
          ReadableByteStreamControllerClearAlgorithms(controller)
          ReadableStreamError(stream, e)
        }
        function ReadableByteStreamControllerGetBYOBRequest(controller) {
          if (
            controller._byobRequest === null &&
            controller._pendingPullIntos.length > 0
          ) {
            const firstDescriptor = controller._pendingPullIntos.peek()
            const view = new Uint8Array(
              firstDescriptor.buffer,
              firstDescriptor.byteOffset + firstDescriptor.bytesFilled,
              firstDescriptor.byteLength - firstDescriptor.bytesFilled
            )
            const byobRequest = Object.create(
              ReadableStreamBYOBRequest.prototype
            )
            SetUpReadableStreamBYOBRequest(byobRequest, controller, view)
            controller._byobRequest = byobRequest
          }
          return controller._byobRequest
        }
        function ReadableByteStreamControllerGetDesiredSize(controller) {
          const state = controller._controlledReadableByteStream._state
          if (state === 'errored') {
            return null
          }
          if (state === 'closed') {
            return 0
          }
          return controller._strategyHWM - controller._queueTotalSize
        }
        function ReadableByteStreamControllerRespond(controller, bytesWritten) {
          const firstDescriptor = controller._pendingPullIntos.peek()
          const state = controller._controlledReadableByteStream._state
          if (state === 'closed') {
            if (bytesWritten !== 0) {
              throw new TypeError(
                'bytesWritten must be 0 when calling respond() on a closed stream'
              )
            }
          } else {
            if (bytesWritten === 0) {
              throw new TypeError(
                'bytesWritten must be greater than 0 when calling respond() on a readable stream'
              )
            }
            if (
              firstDescriptor.bytesFilled + bytesWritten >
              firstDescriptor.byteLength
            ) {
              throw new RangeError('bytesWritten out of range')
            }
          }
          firstDescriptor.buffer = TransferArrayBuffer(firstDescriptor.buffer)
          ReadableByteStreamControllerRespondInternal(controller, bytesWritten)
        }
        function ReadableByteStreamControllerRespondWithNewView(
          controller,
          view
        ) {
          const firstDescriptor = controller._pendingPullIntos.peek()
          const state = controller._controlledReadableByteStream._state
          if (state === 'closed') {
            if (view.byteLength !== 0) {
              throw new TypeError(
                "The view's length must be 0 when calling respondWithNewView() on a closed stream"
              )
            }
          } else {
            if (view.byteLength === 0) {
              throw new TypeError(
                "The view's length must be greater than 0 when calling respondWithNewView() on a readable stream"
              )
            }
          }
          if (
            firstDescriptor.byteOffset + firstDescriptor.bytesFilled !==
            view.byteOffset
          ) {
            throw new RangeError(
              'The region specified by view does not match byobRequest'
            )
          }
          if (firstDescriptor.bufferByteLength !== view.buffer.byteLength) {
            throw new RangeError(
              'The buffer of view has different capacity than byobRequest'
            )
          }
          if (
            firstDescriptor.bytesFilled + view.byteLength >
            firstDescriptor.byteLength
          ) {
            throw new RangeError(
              'The region specified by view is larger than byobRequest'
            )
          }
          firstDescriptor.buffer = TransferArrayBuffer(view.buffer)
          ReadableByteStreamControllerRespondInternal(
            controller,
            view.byteLength
          )
        }
        function SetUpReadableByteStreamController(
          stream,
          controller,
          startAlgorithm,
          pullAlgorithm,
          cancelAlgorithm,
          highWaterMark,
          autoAllocateChunkSize
        ) {
          controller._controlledReadableByteStream = stream
          controller._pullAgain = false
          controller._pulling = false
          controller._byobRequest = null
          // Need to set the slots so that the assert doesn't fire. In the spec the slots already exist implicitly.
          controller._queue = controller._queueTotalSize = undefined
          ResetQueue(controller)
          controller._closeRequested = false
          controller._started = false
          controller._strategyHWM = highWaterMark
          controller._pullAlgorithm = pullAlgorithm
          controller._cancelAlgorithm = cancelAlgorithm
          controller._autoAllocateChunkSize = autoAllocateChunkSize
          controller._pendingPullIntos = new SimpleQueue()
          stream._readableStreamController = controller
          const startResult = startAlgorithm()
          uponPromise(
            promiseResolvedWith(startResult),
            () => {
              controller._started = true
              ReadableByteStreamControllerCallPullIfNeeded(controller)
            },
            (r) => {
              ReadableByteStreamControllerError(controller, r)
            }
          )
        }
        function SetUpReadableByteStreamControllerFromUnderlyingSource(
          stream,
          underlyingByteSource,
          highWaterMark
        ) {
          const controller = Object.create(
            ReadableByteStreamController.prototype
          )
          let startAlgorithm = () => undefined
          let pullAlgorithm = () => promiseResolvedWith(undefined)
          let cancelAlgorithm = () => promiseResolvedWith(undefined)
          if (underlyingByteSource.start !== undefined) {
            startAlgorithm = () => underlyingByteSource.start(controller)
          }
          if (underlyingByteSource.pull !== undefined) {
            pullAlgorithm = () => underlyingByteSource.pull(controller)
          }
          if (underlyingByteSource.cancel !== undefined) {
            cancelAlgorithm = (reason) => underlyingByteSource.cancel(reason)
          }
          const autoAllocateChunkSize =
            underlyingByteSource.autoAllocateChunkSize
          if (autoAllocateChunkSize === 0) {
            throw new TypeError('autoAllocateChunkSize must be greater than 0')
          }
          SetUpReadableByteStreamController(
            stream,
            controller,
            startAlgorithm,
            pullAlgorithm,
            cancelAlgorithm,
            highWaterMark,
            autoAllocateChunkSize
          )
        }
        function SetUpReadableStreamBYOBRequest(request, controller, view) {
          request._associatedReadableByteStreamController = controller
          request._view = view
        }
        // Helper functions for the ReadableStreamBYOBRequest.
        function byobRequestBrandCheckException(name) {
          return new TypeError(
            `ReadableStreamBYOBRequest.prototype.${name} can only be used on a ReadableStreamBYOBRequest`
          )
        }
        // Helper functions for the ReadableByteStreamController.
        function byteStreamControllerBrandCheckException(name) {
          return new TypeError(
            `ReadableByteStreamController.prototype.${name} can only be used on a ReadableByteStreamController`
          )
        }

        // Abstract operations for the ReadableStream.
        function AcquireReadableStreamBYOBReader(stream) {
          return new ReadableStreamBYOBReader(stream)
        }
        // ReadableStream API exposed for controllers.
        function ReadableStreamAddReadIntoRequest(stream, readIntoRequest) {
          stream._reader._readIntoRequests.push(readIntoRequest)
        }
        function ReadableStreamFulfillReadIntoRequest(stream, chunk, done) {
          const reader = stream._reader
          const readIntoRequest = reader._readIntoRequests.shift()
          if (done) {
            readIntoRequest._closeSteps(chunk)
          } else {
            readIntoRequest._chunkSteps(chunk)
          }
        }
        function ReadableStreamGetNumReadIntoRequests(stream) {
          return stream._reader._readIntoRequests.length
        }
        function ReadableStreamHasBYOBReader(stream) {
          const reader = stream._reader
          if (reader === undefined) {
            return false
          }
          if (!IsReadableStreamBYOBReader(reader)) {
            return false
          }
          return true
        }
        /**
         * A BYOB reader vended by a {@link ReadableStream}.
         *
         * @public
         */
        class ReadableStreamBYOBReader {
          constructor(stream) {
            assertRequiredArgument(stream, 1, 'ReadableStreamBYOBReader')
            assertReadableStream(stream, 'First parameter')
            if (IsReadableStreamLocked(stream)) {
              throw new TypeError(
                'This stream has already been locked for exclusive reading by another reader'
              )
            }
            if (
              !IsReadableByteStreamController(stream._readableStreamController)
            ) {
              throw new TypeError(
                'Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte ' +
                  'source'
              )
            }
            ReadableStreamReaderGenericInitialize(this, stream)
            this._readIntoRequests = new SimpleQueue()
          }
          /**
           * Returns a promise that will be fulfilled when the stream becomes closed, or rejected if the stream ever errors or
           * the reader's lock is released before the stream finishes closing.
           */
          get closed() {
            if (!IsReadableStreamBYOBReader(this)) {
              return promiseRejectedWith(
                byobReaderBrandCheckException('closed')
              )
            }
            return this._closedPromise
          }
          /**
           * If the reader is active, behaves the same as {@link ReadableStream.cancel | stream.cancel(reason)}.
           */
          cancel(reason = undefined) {
            if (!IsReadableStreamBYOBReader(this)) {
              return promiseRejectedWith(
                byobReaderBrandCheckException('cancel')
              )
            }
            if (this._ownerReadableStream === undefined) {
              return promiseRejectedWith(readerLockException('cancel'))
            }
            return ReadableStreamReaderGenericCancel(this, reason)
          }
          /**
           * Attempts to reads bytes into view, and returns a promise resolved with the result.
           *
           * If reading a chunk causes the queue to become empty, more data will be pulled from the underlying source.
           */
          read(view) {
            if (!IsReadableStreamBYOBReader(this)) {
              return promiseRejectedWith(byobReaderBrandCheckException('read'))
            }
            if (!ArrayBuffer.isView(view)) {
              return promiseRejectedWith(
                new TypeError('view must be an array buffer view')
              )
            }
            if (view.byteLength === 0) {
              return promiseRejectedWith(
                new TypeError('view must have non-zero byteLength')
              )
            }
            if (view.buffer.byteLength === 0) {
              return promiseRejectedWith(
                new TypeError(`view's buffer must have non-zero byteLength`)
              )
            }
            if (IsDetachedBuffer(view.buffer));
            if (this._ownerReadableStream === undefined) {
              return promiseRejectedWith(readerLockException('read from'))
            }
            let resolvePromise
            let rejectPromise
            const promise = newPromise((resolve, reject) => {
              resolvePromise = resolve
              rejectPromise = reject
            })
            const readIntoRequest = {
              _chunkSteps: (chunk) =>
                resolvePromise({ value: chunk, done: false }),
              _closeSteps: (chunk) =>
                resolvePromise({ value: chunk, done: true }),
              _errorSteps: (e) => rejectPromise(e)
            }
            ReadableStreamBYOBReaderRead(this, view, readIntoRequest)
            return promise
          }
          /**
           * Releases the reader's lock on the corresponding stream. After the lock is released, the reader is no longer active.
           * If the associated stream is errored when the lock is released, the reader will appear errored in the same way
           * from now on; otherwise, the reader will appear closed.
           *
           * A reader's lock cannot be released while it still has a pending read request, i.e., if a promise returned by
           * the reader's {@link ReadableStreamBYOBReader.read | read()} method has not yet been settled. Attempting to
           * do so will throw a `TypeError` and leave the reader locked to the stream.
           */
          releaseLock() {
            if (!IsReadableStreamBYOBReader(this)) {
              throw byobReaderBrandCheckException('releaseLock')
            }
            if (this._ownerReadableStream === undefined) {
              return
            }
            if (this._readIntoRequests.length > 0) {
              throw new TypeError(
                'Tried to release a reader lock when that reader has pending read() calls un-settled'
              )
            }
            ReadableStreamReaderGenericRelease(this)
          }
        }
        Object.defineProperties(ReadableStreamBYOBReader.prototype, {
          cancel: { enumerable: true },
          read: { enumerable: true },
          releaseLock: { enumerable: true },
          closed: { enumerable: true }
        })
        if (typeof SymbolPolyfill.toStringTag === 'symbol') {
          Object.defineProperty(
            ReadableStreamBYOBReader.prototype,
            SymbolPolyfill.toStringTag,
            {
              value: 'ReadableStreamBYOBReader',
              configurable: true
            }
          )
        }
        // Abstract operations for the readers.
        function IsReadableStreamBYOBReader(x) {
          if (!typeIsObject(x)) {
            return false
          }
          if (!Object.prototype.hasOwnProperty.call(x, '_readIntoRequests')) {
            return false
          }
          return x instanceof ReadableStreamBYOBReader
        }
        function ReadableStreamBYOBReaderRead(reader, view, readIntoRequest) {
          const stream = reader._ownerReadableStream
          stream._disturbed = true
          if (stream._state === 'errored') {
            readIntoRequest._errorSteps(stream._storedError)
          } else {
            ReadableByteStreamControllerPullInto(
              stream._readableStreamController,
              view,
              readIntoRequest
            )
          }
        }
        // Helper functions for the ReadableStreamBYOBReader.
        function byobReaderBrandCheckException(name) {
          return new TypeError(
            `ReadableStreamBYOBReader.prototype.${name} can only be used on a ReadableStreamBYOBReader`
          )
        }

        function ExtractHighWaterMark(strategy, defaultHWM) {
          const { highWaterMark } = strategy
          if (highWaterMark === undefined) {
            return defaultHWM
          }
          if (NumberIsNaN(highWaterMark) || highWaterMark < 0) {
            throw new RangeError('Invalid highWaterMark')
          }
          return highWaterMark
        }
        function ExtractSizeAlgorithm(strategy) {
          const { size } = strategy
          if (!size) {
            return () => 1
          }
          return size
        }

        function convertQueuingStrategy(init, context) {
          assertDictionary(init, context)
          const highWaterMark =
            init === null || init === void 0 ? void 0 : init.highWaterMark
          const size = init === null || init === void 0 ? void 0 : init.size
          return {
            highWaterMark:
              highWaterMark === undefined
                ? undefined
                : convertUnrestrictedDouble(highWaterMark),
            size:
              size === undefined
                ? undefined
                : convertQueuingStrategySize(
                    size,
                    `${context} has member 'size' that`
                  )
          }
        }
        function convertQueuingStrategySize(fn, context) {
          assertFunction(fn, context)
          return (chunk) => convertUnrestrictedDouble(fn(chunk))
        }

        function convertUnderlyingSink(original, context) {
          assertDictionary(original, context)
          const abort =
            original === null || original === void 0 ? void 0 : original.abort
          const close =
            original === null || original === void 0 ? void 0 : original.close
          const start =
            original === null || original === void 0 ? void 0 : original.start
          const type =
            original === null || original === void 0 ? void 0 : original.type
          const write =
            original === null || original === void 0 ? void 0 : original.write
          return {
            abort:
              abort === undefined
                ? undefined
                : convertUnderlyingSinkAbortCallback(
                    abort,
                    original,
                    `${context} has member 'abort' that`
                  ),
            close:
              close === undefined
                ? undefined
                : convertUnderlyingSinkCloseCallback(
                    close,
                    original,
                    `${context} has member 'close' that`
                  ),
            start:
              start === undefined
                ? undefined
                : convertUnderlyingSinkStartCallback(
                    start,
                    original,
                    `${context} has member 'start' that`
                  ),
            write:
              write === undefined
                ? undefined
                : convertUnderlyingSinkWriteCallback(
                    write,
                    original,
                    `${context} has member 'write' that`
                  ),
            type
          }
        }
        function convertUnderlyingSinkAbortCallback(fn, original, context) {
          assertFunction(fn, context)
          return (reason) => promiseCall(fn, original, [reason])
        }
        function convertUnderlyingSinkCloseCallback(fn, original, context) {
          assertFunction(fn, context)
          return () => promiseCall(fn, original, [])
        }
        function convertUnderlyingSinkStartCallback(fn, original, context) {
          assertFunction(fn, context)
          return (controller) => reflectCall(fn, original, [controller])
        }
        function convertUnderlyingSinkWriteCallback(fn, original, context) {
          assertFunction(fn, context)
          return (chunk, controller) =>
            promiseCall(fn, original, [chunk, controller])
        }

        function assertWritableStream(x, context) {
          if (!IsWritableStream(x)) {
            throw new TypeError(`${context} is not a WritableStream.`)
          }
        }

        function isAbortSignal(value) {
          if (typeof value !== 'object' || value === null) {
            return false
          }
          try {
            return typeof value.aborted === 'boolean'
          } catch (_a) {
            // AbortSignal.prototype.aborted throws if its brand check fails
            return false
          }
        }
        const supportsAbortController = typeof AbortController === 'function'
        /**
         * Construct a new AbortController, if supported by the platform.
         *
         * @internal
         */
        function createAbortController() {
          if (supportsAbortController) {
            return new AbortController()
          }
          return undefined
        }

        /**
         * A writable stream represents a destination for data, into which you can write.
         *
         * @public
         */
        class WritableStream {
          constructor(rawUnderlyingSink = {}, rawStrategy = {}) {
            if (rawUnderlyingSink === undefined) {
              rawUnderlyingSink = null
            } else {
              assertObject(rawUnderlyingSink, 'First parameter')
            }
            const strategy = convertQueuingStrategy(
              rawStrategy,
              'Second parameter'
            )
            const underlyingSink = convertUnderlyingSink(
              rawUnderlyingSink,
              'First parameter'
            )
            InitializeWritableStream(this)
            const type = underlyingSink.type
            if (type !== undefined) {
              throw new RangeError('Invalid type is specified')
            }
            const sizeAlgorithm = ExtractSizeAlgorithm(strategy)
            const highWaterMark = ExtractHighWaterMark(strategy, 1)
            SetUpWritableStreamDefaultControllerFromUnderlyingSink(
              this,
              underlyingSink,
              highWaterMark,
              sizeAlgorithm
            )
          }
          /**
           * Returns whether or not the writable stream is locked to a writer.
           */
          get locked() {
            if (!IsWritableStream(this)) {
              throw streamBrandCheckException$2('locked')
            }
            return IsWritableStreamLocked(this)
          }
          /**
           * Aborts the stream, signaling that the producer can no longer successfully write to the stream and it is to be
           * immediately moved to an errored state, with any queued-up writes discarded. This will also execute any abort
           * mechanism of the underlying sink.
           *
           * The returned promise will fulfill if the stream shuts down successfully, or reject if the underlying sink signaled
           * that there was an error doing so. Additionally, it will reject with a `TypeError` (without attempting to cancel
           * the stream) if the stream is currently locked.
           */
          abort(reason = undefined) {
            if (!IsWritableStream(this)) {
              return promiseRejectedWith(streamBrandCheckException$2('abort'))
            }
            if (IsWritableStreamLocked(this)) {
              return promiseRejectedWith(
                new TypeError('Cannot abort a stream that already has a writer')
              )
            }
            return WritableStreamAbort(this, reason)
          }
          /**
           * Closes the stream. The underlying sink will finish processing any previously-written chunks, before invoking its
           * close behavior. During this time any further attempts to write will fail (without erroring the stream).
           *
           * The method returns a promise that will fulfill if all remaining chunks are successfully written and the stream
           * successfully closes, or rejects if an error is encountered during this process. Additionally, it will reject with
           * a `TypeError` (without attempting to cancel the stream) if the stream is currently locked.
           */
          close() {
            if (!IsWritableStream(this)) {
              return promiseRejectedWith(streamBrandCheckException$2('close'))
            }
            if (IsWritableStreamLocked(this)) {
              return promiseRejectedWith(
                new TypeError('Cannot close a stream that already has a writer')
              )
            }
            if (WritableStreamCloseQueuedOrInFlight(this)) {
              return promiseRejectedWith(
                new TypeError('Cannot close an already-closing stream')
              )
            }
            return WritableStreamClose(this)
          }
          /**
           * Creates a {@link WritableStreamDefaultWriter | writer} and locks the stream to the new writer. While the stream
           * is locked, no other writer can be acquired until this one is released.
           *
           * This functionality is especially useful for creating abstractions that desire the ability to write to a stream
           * without interruption or interleaving. By getting a writer for the stream, you can ensure nobody else can write at
           * the same time, which would cause the resulting written data to be unpredictable and probably useless.
           */
          getWriter() {
            if (!IsWritableStream(this)) {
              throw streamBrandCheckException$2('getWriter')
            }
            return AcquireWritableStreamDefaultWriter(this)
          }
        }
        Object.defineProperties(WritableStream.prototype, {
          abort: { enumerable: true },
          close: { enumerable: true },
          getWriter: { enumerable: true },
          locked: { enumerable: true }
        })
        if (typeof SymbolPolyfill.toStringTag === 'symbol') {
          Object.defineProperty(
            WritableStream.prototype,
            SymbolPolyfill.toStringTag,
            {
              value: 'WritableStream',
              configurable: true
            }
          )
        }
        // Abstract operations for the WritableStream.
        function AcquireWritableStreamDefaultWriter(stream) {
          return new WritableStreamDefaultWriter(stream)
        }
        // Throws if and only if startAlgorithm throws.
        function CreateWritableStream(
          startAlgorithm,
          writeAlgorithm,
          closeAlgorithm,
          abortAlgorithm,
          highWaterMark = 1,
          sizeAlgorithm = () => 1
        ) {
          const stream = Object.create(WritableStream.prototype)
          InitializeWritableStream(stream)
          const controller = Object.create(
            WritableStreamDefaultController.prototype
          )
          SetUpWritableStreamDefaultController(
            stream,
            controller,
            startAlgorithm,
            writeAlgorithm,
            closeAlgorithm,
            abortAlgorithm,
            highWaterMark,
            sizeAlgorithm
          )
          return stream
        }
        function InitializeWritableStream(stream) {
          stream._state = 'writable'
          // The error that will be reported by new method calls once the state becomes errored. Only set when [[state]] is
          // 'erroring' or 'errored'. May be set to an undefined value.
          stream._storedError = undefined
          stream._writer = undefined
          // Initialize to undefined first because the constructor of the controller checks this
          // variable to validate the caller.
          stream._writableStreamController = undefined
          // This queue is placed here instead of the writer class in order to allow for passing a writer to the next data
          // producer without waiting for the queued writes to finish.
          stream._writeRequests = new SimpleQueue()
          // Write requests are removed from _writeRequests when write() is called on the underlying sink. This prevents
          // them from being erroneously rejected on error. If a write() call is in-flight, the request is stored here.
          stream._inFlightWriteRequest = undefined
          // The promise that was returned from writer.close(). Stored here because it may be fulfilled after the writer
          // has been detached.
          stream._closeRequest = undefined
          // Close request is removed from _closeRequest when close() is called on the underlying sink. This prevents it
          // from being erroneously rejected on error. If a close() call is in-flight, the request is stored here.
          stream._inFlightCloseRequest = undefined
          // The promise that was returned from writer.abort(). This may also be fulfilled after the writer has detached.
          stream._pendingAbortRequest = undefined
          // The backpressure signal set by the controller.
          stream._backpressure = false
        }
        function IsWritableStream(x) {
          if (!typeIsObject(x)) {
            return false
          }
          if (
            !Object.prototype.hasOwnProperty.call(
              x,
              '_writableStreamController'
            )
          ) {
            return false
          }
          return x instanceof WritableStream
        }
        function IsWritableStreamLocked(stream) {
          if (stream._writer === undefined) {
            return false
          }
          return true
        }
        function WritableStreamAbort(stream, reason) {
          var _a
          if (stream._state === 'closed' || stream._state === 'errored') {
            return promiseResolvedWith(undefined)
          }
          stream._writableStreamController._abortReason = reason
          ;(_a = stream._writableStreamController._abortController) === null ||
          _a === void 0
            ? void 0
            : _a.abort()
          // TypeScript narrows the type of `stream._state` down to 'writable' | 'erroring',
          // but it doesn't know that signaling abort runs author code that might have changed the state.
          // Widen the type again by casting to WritableStreamState.
          const state = stream._state
          if (state === 'closed' || state === 'errored') {
            return promiseResolvedWith(undefined)
          }
          if (stream._pendingAbortRequest !== undefined) {
            return stream._pendingAbortRequest._promise
          }
          let wasAlreadyErroring = false
          if (state === 'erroring') {
            wasAlreadyErroring = true
            // reason will not be used, so don't keep a reference to it.
            reason = undefined
          }
          const promise = newPromise((resolve, reject) => {
            stream._pendingAbortRequest = {
              _promise: undefined,
              _resolve: resolve,
              _reject: reject,
              _reason: reason,
              _wasAlreadyErroring: wasAlreadyErroring
            }
          })
          stream._pendingAbortRequest._promise = promise
          if (!wasAlreadyErroring) {
            WritableStreamStartErroring(stream, reason)
          }
          return promise
        }
        function WritableStreamClose(stream) {
          const state = stream._state
          if (state === 'closed' || state === 'errored') {
            return promiseRejectedWith(
              new TypeError(
                `The stream (in ${state} state) is not in the writable state and cannot be closed`
              )
            )
          }
          const promise = newPromise((resolve, reject) => {
            const closeRequest = {
              _resolve: resolve,
              _reject: reject
            }
            stream._closeRequest = closeRequest
          })
          const writer = stream._writer
          if (
            writer !== undefined &&
            stream._backpressure &&
            state === 'writable'
          ) {
            defaultWriterReadyPromiseResolve(writer)
          }
          WritableStreamDefaultControllerClose(stream._writableStreamController)
          return promise
        }
        // WritableStream API exposed for controllers.
        function WritableStreamAddWriteRequest(stream) {
          const promise = newPromise((resolve, reject) => {
            const writeRequest = {
              _resolve: resolve,
              _reject: reject
            }
            stream._writeRequests.push(writeRequest)
          })
          return promise
        }
        function WritableStreamDealWithRejection(stream, error) {
          const state = stream._state
          if (state === 'writable') {
            WritableStreamStartErroring(stream, error)
            return
          }
          WritableStreamFinishErroring(stream)
        }
        function WritableStreamStartErroring(stream, reason) {
          const controller = stream._writableStreamController
          stream._state = 'erroring'
          stream._storedError = reason
          const writer = stream._writer
          if (writer !== undefined) {
            WritableStreamDefaultWriterEnsureReadyPromiseRejected(
              writer,
              reason
            )
          }
          if (
            !WritableStreamHasOperationMarkedInFlight(stream) &&
            controller._started
          ) {
            WritableStreamFinishErroring(stream)
          }
        }
        function WritableStreamFinishErroring(stream) {
          stream._state = 'errored'
          stream._writableStreamController[ErrorSteps]()
          const storedError = stream._storedError
          stream._writeRequests.forEach((writeRequest) => {
            writeRequest._reject(storedError)
          })
          stream._writeRequests = new SimpleQueue()
          if (stream._pendingAbortRequest === undefined) {
            WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream)
            return
          }
          const abortRequest = stream._pendingAbortRequest
          stream._pendingAbortRequest = undefined
          if (abortRequest._wasAlreadyErroring) {
            abortRequest._reject(storedError)
            WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream)
            return
          }
          const promise = stream._writableStreamController[AbortSteps](
            abortRequest._reason
          )
          uponPromise(
            promise,
            () => {
              abortRequest._resolve()
              WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream)
            },
            (reason) => {
              abortRequest._reject(reason)
              WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream)
            }
          )
        }
        function WritableStreamFinishInFlightWrite(stream) {
          stream._inFlightWriteRequest._resolve(undefined)
          stream._inFlightWriteRequest = undefined
        }
        function WritableStreamFinishInFlightWriteWithError(stream, error) {
          stream._inFlightWriteRequest._reject(error)
          stream._inFlightWriteRequest = undefined
          WritableStreamDealWithRejection(stream, error)
        }
        function WritableStreamFinishInFlightClose(stream) {
          stream._inFlightCloseRequest._resolve(undefined)
          stream._inFlightCloseRequest = undefined
          const state = stream._state
          if (state === 'erroring') {
            // The error was too late to do anything, so it is ignored.
            stream._storedError = undefined
            if (stream._pendingAbortRequest !== undefined) {
              stream._pendingAbortRequest._resolve()
              stream._pendingAbortRequest = undefined
            }
          }
          stream._state = 'closed'
          const writer = stream._writer
          if (writer !== undefined) {
            defaultWriterClosedPromiseResolve(writer)
          }
        }
        function WritableStreamFinishInFlightCloseWithError(stream, error) {
          stream._inFlightCloseRequest._reject(error)
          stream._inFlightCloseRequest = undefined
          // Never execute sink abort() after sink close().
          if (stream._pendingAbortRequest !== undefined) {
            stream._pendingAbortRequest._reject(error)
            stream._pendingAbortRequest = undefined
          }
          WritableStreamDealWithRejection(stream, error)
        }
        // TODO(ricea): Fix alphabetical order.
        function WritableStreamCloseQueuedOrInFlight(stream) {
          if (
            stream._closeRequest === undefined &&
            stream._inFlightCloseRequest === undefined
          ) {
            return false
          }
          return true
        }
        function WritableStreamHasOperationMarkedInFlight(stream) {
          if (
            stream._inFlightWriteRequest === undefined &&
            stream._inFlightCloseRequest === undefined
          ) {
            return false
          }
          return true
        }
        function WritableStreamMarkCloseRequestInFlight(stream) {
          stream._inFlightCloseRequest = stream._closeRequest
          stream._closeRequest = undefined
        }
        function WritableStreamMarkFirstWriteRequestInFlight(stream) {
          stream._inFlightWriteRequest = stream._writeRequests.shift()
        }
        function WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream) {
          if (stream._closeRequest !== undefined) {
            stream._closeRequest._reject(stream._storedError)
            stream._closeRequest = undefined
          }
          const writer = stream._writer
          if (writer !== undefined) {
            defaultWriterClosedPromiseReject(writer, stream._storedError)
          }
        }
        function WritableStreamUpdateBackpressure(stream, backpressure) {
          const writer = stream._writer
          if (writer !== undefined && backpressure !== stream._backpressure) {
            if (backpressure) {
              defaultWriterReadyPromiseReset(writer)
            } else {
              defaultWriterReadyPromiseResolve(writer)
            }
          }
          stream._backpressure = backpressure
        }
        /**
         * A default writer vended by a {@link WritableStream}.
         *
         * @public
         */
        class WritableStreamDefaultWriter {
          constructor(stream) {
            assertRequiredArgument(stream, 1, 'WritableStreamDefaultWriter')
            assertWritableStream(stream, 'First parameter')
            if (IsWritableStreamLocked(stream)) {
              throw new TypeError(
                'This stream has already been locked for exclusive writing by another writer'
              )
            }
            this._ownerWritableStream = stream
            stream._writer = this
            const state = stream._state
            if (state === 'writable') {
              if (
                !WritableStreamCloseQueuedOrInFlight(stream) &&
                stream._backpressure
              ) {
                defaultWriterReadyPromiseInitialize(this)
              } else {
                defaultWriterReadyPromiseInitializeAsResolved(this)
              }
              defaultWriterClosedPromiseInitialize(this)
            } else if (state === 'erroring') {
              defaultWriterReadyPromiseInitializeAsRejected(
                this,
                stream._storedError
              )
              defaultWriterClosedPromiseInitialize(this)
            } else if (state === 'closed') {
              defaultWriterReadyPromiseInitializeAsResolved(this)
              defaultWriterClosedPromiseInitializeAsResolved(this)
            } else {
              const storedError = stream._storedError
              defaultWriterReadyPromiseInitializeAsRejected(this, storedError)
              defaultWriterClosedPromiseInitializeAsRejected(this, storedError)
            }
          }
          /**
           * Returns a promise that will be fulfilled when the stream becomes closed, or rejected if the stream ever errors or
           * the writer’s lock is released before the stream finishes closing.
           */
          get closed() {
            if (!IsWritableStreamDefaultWriter(this)) {
              return promiseRejectedWith(
                defaultWriterBrandCheckException('closed')
              )
            }
            return this._closedPromise
          }
          /**
           * Returns the desired size to fill the stream’s internal queue. It can be negative, if the queue is over-full.
           * A producer can use this information to determine the right amount of data to write.
           *
           * It will be `null` if the stream cannot be successfully written to (due to either being errored, or having an abort
           * queued up). It will return zero if the stream is closed. And the getter will throw an exception if invoked when
           * the writer’s lock is released.
           */
          get desiredSize() {
            if (!IsWritableStreamDefaultWriter(this)) {
              throw defaultWriterBrandCheckException('desiredSize')
            }
            if (this._ownerWritableStream === undefined) {
              throw defaultWriterLockException('desiredSize')
            }
            return WritableStreamDefaultWriterGetDesiredSize(this)
          }
          /**
           * Returns a promise that will be fulfilled when the desired size to fill the stream’s internal queue transitions
           * from non-positive to positive, signaling that it is no longer applying backpressure. Once the desired size dips
           * back to zero or below, the getter will return a new promise that stays pending until the next transition.
           *
           * If the stream becomes errored or aborted, or the writer’s lock is released, the returned promise will become
           * rejected.
           */
          get ready() {
            if (!IsWritableStreamDefaultWriter(this)) {
              return promiseRejectedWith(
                defaultWriterBrandCheckException('ready')
              )
            }
            return this._readyPromise
          }
          /**
           * If the reader is active, behaves the same as {@link WritableStream.abort | stream.abort(reason)}.
           */
          abort(reason = undefined) {
            if (!IsWritableStreamDefaultWriter(this)) {
              return promiseRejectedWith(
                defaultWriterBrandCheckException('abort')
              )
            }
            if (this._ownerWritableStream === undefined) {
              return promiseRejectedWith(defaultWriterLockException('abort'))
            }
            return WritableStreamDefaultWriterAbort(this, reason)
          }
          /**
           * If the reader is active, behaves the same as {@link WritableStream.close | stream.close()}.
           */
          close() {
            if (!IsWritableStreamDefaultWriter(this)) {
              return promiseRejectedWith(
                defaultWriterBrandCheckException('close')
              )
            }
            const stream = this._ownerWritableStream
            if (stream === undefined) {
              return promiseRejectedWith(defaultWriterLockException('close'))
            }
            if (WritableStreamCloseQueuedOrInFlight(stream)) {
              return promiseRejectedWith(
                new TypeError('Cannot close an already-closing stream')
              )
            }
            return WritableStreamDefaultWriterClose(this)
          }
          /**
           * Releases the writer’s lock on the corresponding stream. After the lock is released, the writer is no longer active.
           * If the associated stream is errored when the lock is released, the writer will appear errored in the same way from
           * now on; otherwise, the writer will appear closed.
           *
           * Note that the lock can still be released even if some ongoing writes have not yet finished (i.e. even if the
           * promises returned from previous calls to {@link WritableStreamDefaultWriter.write | write()} have not yet settled).
           * It’s not necessary to hold the lock on the writer for the duration of the write; the lock instead simply prevents
           * other producers from writing in an interleaved manner.
           */
          releaseLock() {
            if (!IsWritableStreamDefaultWriter(this)) {
              throw defaultWriterBrandCheckException('releaseLock')
            }
            const stream = this._ownerWritableStream
            if (stream === undefined) {
              return
            }
            WritableStreamDefaultWriterRelease(this)
          }
          write(chunk = undefined) {
            if (!IsWritableStreamDefaultWriter(this)) {
              return promiseRejectedWith(
                defaultWriterBrandCheckException('write')
              )
            }
            if (this._ownerWritableStream === undefined) {
              return promiseRejectedWith(defaultWriterLockException('write to'))
            }
            return WritableStreamDefaultWriterWrite(this, chunk)
          }
        }
        Object.defineProperties(WritableStreamDefaultWriter.prototype, {
          abort: { enumerable: true },
          close: { enumerable: true },
          releaseLock: { enumerable: true },
          write: { enumerable: true },
          closed: { enumerable: true },
          desiredSize: { enumerable: true },
          ready: { enumerable: true }
        })
        if (typeof SymbolPolyfill.toStringTag === 'symbol') {
          Object.defineProperty(
            WritableStreamDefaultWriter.prototype,
            SymbolPolyfill.toStringTag,
            {
              value: 'WritableStreamDefaultWriter',
              configurable: true
            }
          )
        }
        // Abstract operations for the WritableStreamDefaultWriter.
        function IsWritableStreamDefaultWriter(x) {
          if (!typeIsObject(x)) {
            return false
          }
          if (
            !Object.prototype.hasOwnProperty.call(x, '_ownerWritableStream')
          ) {
            return false
          }
          return x instanceof WritableStreamDefaultWriter
        }
        // A client of WritableStreamDefaultWriter may use these functions directly to bypass state check.
        function WritableStreamDefaultWriterAbort(writer, reason) {
          const stream = writer._ownerWritableStream
          return WritableStreamAbort(stream, reason)
        }
        function WritableStreamDefaultWriterClose(writer) {
          const stream = writer._ownerWritableStream
          return WritableStreamClose(stream)
        }
        function WritableStreamDefaultWriterCloseWithErrorPropagation(writer) {
          const stream = writer._ownerWritableStream
          const state = stream._state
          if (
            WritableStreamCloseQueuedOrInFlight(stream) ||
            state === 'closed'
          ) {
            return promiseResolvedWith(undefined)
          }
          if (state === 'errored') {
            return promiseRejectedWith(stream._storedError)
          }
          return WritableStreamDefaultWriterClose(writer)
        }
        function WritableStreamDefaultWriterEnsureClosedPromiseRejected(
          writer,
          error
        ) {
          if (writer._closedPromiseState === 'pending') {
            defaultWriterClosedPromiseReject(writer, error)
          } else {
            defaultWriterClosedPromiseResetToRejected(writer, error)
          }
        }
        function WritableStreamDefaultWriterEnsureReadyPromiseRejected(
          writer,
          error
        ) {
          if (writer._readyPromiseState === 'pending') {
            defaultWriterReadyPromiseReject(writer, error)
          } else {
            defaultWriterReadyPromiseResetToRejected(writer, error)
          }
        }
        function WritableStreamDefaultWriterGetDesiredSize(writer) {
          const stream = writer._ownerWritableStream
          const state = stream._state
          if (state === 'errored' || state === 'erroring') {
            return null
          }
          if (state === 'closed') {
            return 0
          }
          return WritableStreamDefaultControllerGetDesiredSize(
            stream._writableStreamController
          )
        }
        function WritableStreamDefaultWriterRelease(writer) {
          const stream = writer._ownerWritableStream
          const releasedError = new TypeError(
            `Writer was released and can no longer be used to monitor the stream's closedness`
          )
          WritableStreamDefaultWriterEnsureReadyPromiseRejected(
            writer,
            releasedError
          )
          // The state transitions to "errored" before the sink abort() method runs, but the writer.closed promise is not
          // rejected until afterwards. This means that simply testing state will not work.
          WritableStreamDefaultWriterEnsureClosedPromiseRejected(
            writer,
            releasedError
          )
          stream._writer = undefined
          writer._ownerWritableStream = undefined
        }
        function WritableStreamDefaultWriterWrite(writer, chunk) {
          const stream = writer._ownerWritableStream
          const controller = stream._writableStreamController
          const chunkSize = WritableStreamDefaultControllerGetChunkSize(
            controller,
            chunk
          )
          if (stream !== writer._ownerWritableStream) {
            return promiseRejectedWith(defaultWriterLockException('write to'))
          }
          const state = stream._state
          if (state === 'errored') {
            return promiseRejectedWith(stream._storedError)
          }
          if (
            WritableStreamCloseQueuedOrInFlight(stream) ||
            state === 'closed'
          ) {
            return promiseRejectedWith(
              new TypeError(
                'The stream is closing or closed and cannot be written to'
              )
            )
          }
          if (state === 'erroring') {
            return promiseRejectedWith(stream._storedError)
          }
          const promise = WritableStreamAddWriteRequest(stream)
          WritableStreamDefaultControllerWrite(controller, chunk, chunkSize)
          return promise
        }
        const closeSentinel = {}
        /**
         * Allows control of a {@link WritableStream | writable stream}'s state and internal queue.
         *
         * @public
         */
        class WritableStreamDefaultController {
          constructor() {
            throw new TypeError('Illegal constructor')
          }
          /**
           * The reason which was passed to `WritableStream.abort(reason)` when the stream was aborted.
           */
          get abortReason() {
            if (!IsWritableStreamDefaultController(this)) {
              throw defaultControllerBrandCheckException$2('abortReason')
            }
            return this._abortReason
          }
          /**
           * An `AbortSignal` that can be used to abort the pending write or close operation when the stream is aborted.
           */
          get signal() {
            if (!IsWritableStreamDefaultController(this)) {
              throw defaultControllerBrandCheckException$2('signal')
            }
            if (this._abortController === undefined) {
              // Older browsers or older Node versions may not support `AbortController` or `AbortSignal`.
              // We don't want to bundle and ship an `AbortController` polyfill together with our polyfill,
              // so instead we only implement support for `signal` if we find a global `AbortController` constructor.
              throw new TypeError(
                'WritableStreamDefaultController.prototype.signal is not supported'
              )
            }
            return this._abortController.signal
          }
          /**
           * Closes the controlled writable stream, making all future interactions with it fail with the given error `e`.
           *
           * This method is rarely used, since usually it suffices to return a rejected promise from one of the underlying
           * sink's methods. However, it can be useful for suddenly shutting down a stream in response to an event outside the
           * normal lifecycle of interactions with the underlying sink.
           */
          error(e = undefined) {
            if (!IsWritableStreamDefaultController(this)) {
              throw defaultControllerBrandCheckException$2('error')
            }
            const state = this._controlledWritableStream._state
            if (state !== 'writable') {
              // The stream is closed, errored or will be soon. The sink can't do anything useful if it gets an error here, so
              // just treat it as a no-op.
              return
            }
            WritableStreamDefaultControllerError(this, e)
          }
          /** @internal */
          [AbortSteps](reason) {
            const result = this._abortAlgorithm(reason)
            WritableStreamDefaultControllerClearAlgorithms(this)
            return result
          }
          /** @internal */
          [ErrorSteps]() {
            ResetQueue(this)
          }
        }
        Object.defineProperties(WritableStreamDefaultController.prototype, {
          error: { enumerable: true }
        })
        if (typeof SymbolPolyfill.toStringTag === 'symbol') {
          Object.defineProperty(
            WritableStreamDefaultController.prototype,
            SymbolPolyfill.toStringTag,
            {
              value: 'WritableStreamDefaultController',
              configurable: true
            }
          )
        }
        // Abstract operations implementing interface required by the WritableStream.
        function IsWritableStreamDefaultController(x) {
          if (!typeIsObject(x)) {
            return false
          }
          if (
            !Object.prototype.hasOwnProperty.call(
              x,
              '_controlledWritableStream'
            )
          ) {
            return false
          }
          return x instanceof WritableStreamDefaultController
        }
        function SetUpWritableStreamDefaultController(
          stream,
          controller,
          startAlgorithm,
          writeAlgorithm,
          closeAlgorithm,
          abortAlgorithm,
          highWaterMark,
          sizeAlgorithm
        ) {
          controller._controlledWritableStream = stream
          stream._writableStreamController = controller
          // Need to set the slots so that the assert doesn't fire. In the spec the slots already exist implicitly.
          controller._queue = undefined
          controller._queueTotalSize = undefined
          ResetQueue(controller)
          controller._abortReason = undefined
          controller._abortController = createAbortController()
          controller._started = false
          controller._strategySizeAlgorithm = sizeAlgorithm
          controller._strategyHWM = highWaterMark
          controller._writeAlgorithm = writeAlgorithm
          controller._closeAlgorithm = closeAlgorithm
          controller._abortAlgorithm = abortAlgorithm
          const backpressure =
            WritableStreamDefaultControllerGetBackpressure(controller)
          WritableStreamUpdateBackpressure(stream, backpressure)
          const startResult = startAlgorithm()
          const startPromise = promiseResolvedWith(startResult)
          uponPromise(
            startPromise,
            () => {
              controller._started = true
              WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller)
            },
            (r) => {
              controller._started = true
              WritableStreamDealWithRejection(stream, r)
            }
          )
        }
        function SetUpWritableStreamDefaultControllerFromUnderlyingSink(
          stream,
          underlyingSink,
          highWaterMark,
          sizeAlgorithm
        ) {
          const controller = Object.create(
            WritableStreamDefaultController.prototype
          )
          let startAlgorithm = () => undefined
          let writeAlgorithm = () => promiseResolvedWith(undefined)
          let closeAlgorithm = () => promiseResolvedWith(undefined)
          let abortAlgorithm = () => promiseResolvedWith(undefined)
          if (underlyingSink.start !== undefined) {
            startAlgorithm = () => underlyingSink.start(controller)
          }
          if (underlyingSink.write !== undefined) {
            writeAlgorithm = (chunk) => underlyingSink.write(chunk, controller)
          }
          if (underlyingSink.close !== undefined) {
            closeAlgorithm = () => underlyingSink.close()
          }
          if (underlyingSink.abort !== undefined) {
            abortAlgorithm = (reason) => underlyingSink.abort(reason)
          }
          SetUpWritableStreamDefaultController(
            stream,
            controller,
            startAlgorithm,
            writeAlgorithm,
            closeAlgorithm,
            abortAlgorithm,
            highWaterMark,
            sizeAlgorithm
          )
        }
        // ClearAlgorithms may be called twice. Erroring the same stream in multiple ways will often result in redundant calls.
        function WritableStreamDefaultControllerClearAlgorithms(controller) {
          controller._writeAlgorithm = undefined
          controller._closeAlgorithm = undefined
          controller._abortAlgorithm = undefined
          controller._strategySizeAlgorithm = undefined
        }
        function WritableStreamDefaultControllerClose(controller) {
          EnqueueValueWithSize(controller, closeSentinel, 0)
          WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller)
        }
        function WritableStreamDefaultControllerGetChunkSize(
          controller,
          chunk
        ) {
          try {
            return controller._strategySizeAlgorithm(chunk)
          } catch (chunkSizeE) {
            WritableStreamDefaultControllerErrorIfNeeded(controller, chunkSizeE)
            return 1
          }
        }
        function WritableStreamDefaultControllerGetDesiredSize(controller) {
          return controller._strategyHWM - controller._queueTotalSize
        }
        function WritableStreamDefaultControllerWrite(
          controller,
          chunk,
          chunkSize
        ) {
          try {
            EnqueueValueWithSize(controller, chunk, chunkSize)
          } catch (enqueueE) {
            WritableStreamDefaultControllerErrorIfNeeded(controller, enqueueE)
            return
          }
          const stream = controller._controlledWritableStream
          if (
            !WritableStreamCloseQueuedOrInFlight(stream) &&
            stream._state === 'writable'
          ) {
            const backpressure =
              WritableStreamDefaultControllerGetBackpressure(controller)
            WritableStreamUpdateBackpressure(stream, backpressure)
          }
          WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller)
        }
        // Abstract operations for the WritableStreamDefaultController.
        function WritableStreamDefaultControllerAdvanceQueueIfNeeded(
          controller
        ) {
          const stream = controller._controlledWritableStream
          if (!controller._started) {
            return
          }
          if (stream._inFlightWriteRequest !== undefined) {
            return
          }
          const state = stream._state
          if (state === 'erroring') {
            WritableStreamFinishErroring(stream)
            return
          }
          if (controller._queue.length === 0) {
            return
          }
          const value = PeekQueueValue(controller)
          if (value === closeSentinel) {
            WritableStreamDefaultControllerProcessClose(controller)
          } else {
            WritableStreamDefaultControllerProcessWrite(controller, value)
          }
        }
        function WritableStreamDefaultControllerErrorIfNeeded(
          controller,
          error
        ) {
          if (controller._controlledWritableStream._state === 'writable') {
            WritableStreamDefaultControllerError(controller, error)
          }
        }
        function WritableStreamDefaultControllerProcessClose(controller) {
          const stream = controller._controlledWritableStream
          WritableStreamMarkCloseRequestInFlight(stream)
          DequeueValue(controller)
          const sinkClosePromise = controller._closeAlgorithm()
          WritableStreamDefaultControllerClearAlgorithms(controller)
          uponPromise(
            sinkClosePromise,
            () => {
              WritableStreamFinishInFlightClose(stream)
            },
            (reason) => {
              WritableStreamFinishInFlightCloseWithError(stream, reason)
            }
          )
        }
        function WritableStreamDefaultControllerProcessWrite(
          controller,
          chunk
        ) {
          const stream = controller._controlledWritableStream
          WritableStreamMarkFirstWriteRequestInFlight(stream)
          const sinkWritePromise = controller._writeAlgorithm(chunk)
          uponPromise(
            sinkWritePromise,
            () => {
              WritableStreamFinishInFlightWrite(stream)
              const state = stream._state
              DequeueValue(controller)
              if (
                !WritableStreamCloseQueuedOrInFlight(stream) &&
                state === 'writable'
              ) {
                const backpressure =
                  WritableStreamDefaultControllerGetBackpressure(controller)
                WritableStreamUpdateBackpressure(stream, backpressure)
              }
              WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller)
            },
            (reason) => {
              if (stream._state === 'writable') {
                WritableStreamDefaultControllerClearAlgorithms(controller)
              }
              WritableStreamFinishInFlightWriteWithError(stream, reason)
            }
          )
        }
        function WritableStreamDefaultControllerGetBackpressure(controller) {
          const desiredSize =
            WritableStreamDefaultControllerGetDesiredSize(controller)
          return desiredSize <= 0
        }
        // A client of WritableStreamDefaultController may use these functions directly to bypass state check.
        function WritableStreamDefaultControllerError(controller, error) {
          const stream = controller._controlledWritableStream
          WritableStreamDefaultControllerClearAlgorithms(controller)
          WritableStreamStartErroring(stream, error)
        }
        // Helper functions for the WritableStream.
        function streamBrandCheckException$2(name) {
          return new TypeError(
            `WritableStream.prototype.${name} can only be used on a WritableStream`
          )
        }
        // Helper functions for the WritableStreamDefaultController.
        function defaultControllerBrandCheckException$2(name) {
          return new TypeError(
            `WritableStreamDefaultController.prototype.${name} can only be used on a WritableStreamDefaultController`
          )
        }
        // Helper functions for the WritableStreamDefaultWriter.
        function defaultWriterBrandCheckException(name) {
          return new TypeError(
            `WritableStreamDefaultWriter.prototype.${name} can only be used on a WritableStreamDefaultWriter`
          )
        }
        function defaultWriterLockException(name) {
          return new TypeError(
            'Cannot ' + name + ' a stream using a released writer'
          )
        }
        function defaultWriterClosedPromiseInitialize(writer) {
          writer._closedPromise = newPromise((resolve, reject) => {
            writer._closedPromise_resolve = resolve
            writer._closedPromise_reject = reject
            writer._closedPromiseState = 'pending'
          })
        }
        function defaultWriterClosedPromiseInitializeAsRejected(
          writer,
          reason
        ) {
          defaultWriterClosedPromiseInitialize(writer)
          defaultWriterClosedPromiseReject(writer, reason)
        }
        function defaultWriterClosedPromiseInitializeAsResolved(writer) {
          defaultWriterClosedPromiseInitialize(writer)
          defaultWriterClosedPromiseResolve(writer)
        }
        function defaultWriterClosedPromiseReject(writer, reason) {
          if (writer._closedPromise_reject === undefined) {
            return
          }
          setPromiseIsHandledToTrue(writer._closedPromise)
          writer._closedPromise_reject(reason)
          writer._closedPromise_resolve = undefined
          writer._closedPromise_reject = undefined
          writer._closedPromiseState = 'rejected'
        }
        function defaultWriterClosedPromiseResetToRejected(writer, reason) {
          defaultWriterClosedPromiseInitializeAsRejected(writer, reason)
        }
        function defaultWriterClosedPromiseResolve(writer) {
          if (writer._closedPromise_resolve === undefined) {
            return
          }
          writer._closedPromise_resolve(undefined)
          writer._closedPromise_resolve = undefined
          writer._closedPromise_reject = undefined
          writer._closedPromiseState = 'resolved'
        }
        function defaultWriterReadyPromiseInitialize(writer) {
          writer._readyPromise = newPromise((resolve, reject) => {
            writer._readyPromise_resolve = resolve
            writer._readyPromise_reject = reject
          })
          writer._readyPromiseState = 'pending'
        }
        function defaultWriterReadyPromiseInitializeAsRejected(writer, reason) {
          defaultWriterReadyPromiseInitialize(writer)
          defaultWriterReadyPromiseReject(writer, reason)
        }
        function defaultWriterReadyPromiseInitializeAsResolved(writer) {
          defaultWriterReadyPromiseInitialize(writer)
          defaultWriterReadyPromiseResolve(writer)
        }
        function defaultWriterReadyPromiseReject(writer, reason) {
          if (writer._readyPromise_reject === undefined) {
            return
          }
          setPromiseIsHandledToTrue(writer._readyPromise)
          writer._readyPromise_reject(reason)
          writer._readyPromise_resolve = undefined
          writer._readyPromise_reject = undefined
          writer._readyPromiseState = 'rejected'
        }
        function defaultWriterReadyPromiseReset(writer) {
          defaultWriterReadyPromiseInitialize(writer)
        }
        function defaultWriterReadyPromiseResetToRejected(writer, reason) {
          defaultWriterReadyPromiseInitializeAsRejected(writer, reason)
        }
        function defaultWriterReadyPromiseResolve(writer) {
          if (writer._readyPromise_resolve === undefined) {
            return
          }
          writer._readyPromise_resolve(undefined)
          writer._readyPromise_resolve = undefined
          writer._readyPromise_reject = undefined
          writer._readyPromiseState = 'fulfilled'
        }

        /// <reference lib="dom" />
        const NativeDOMException =
          typeof DOMException !== 'undefined' ? DOMException : undefined

        /// <reference types="node" />
        function isDOMExceptionConstructor(ctor) {
          if (!(typeof ctor === 'function' || typeof ctor === 'object')) {
            return false
          }
          try {
            new ctor()
            return true
          } catch (_a) {
            return false
          }
        }
        function createDOMExceptionPolyfill() {
          // eslint-disable-next-line no-shadow
          const ctor = function DOMException(message, name) {
            this.message = message || ''
            this.name = name || 'Error'
            if (Error.captureStackTrace) {
              Error.captureStackTrace(this, this.constructor)
            }
          }
          ctor.prototype = Object.create(Error.prototype)
          Object.defineProperty(ctor.prototype, 'constructor', {
            value: ctor,
            writable: true,
            configurable: true
          })
          return ctor
        }
        // eslint-disable-next-line no-redeclare
        const DOMException$1 = isDOMExceptionConstructor(NativeDOMException)
          ? NativeDOMException
          : createDOMExceptionPolyfill()

        function ReadableStreamPipeTo(
          source,
          dest,
          preventClose,
          preventAbort,
          preventCancel,
          signal
        ) {
          const reader = AcquireReadableStreamDefaultReader(source)
          const writer = AcquireWritableStreamDefaultWriter(dest)
          source._disturbed = true
          let shuttingDown = false
          // This is used to keep track of the spec's requirement that we wait for ongoing writes during shutdown.
          let currentWrite = promiseResolvedWith(undefined)
          return newPromise((resolve, reject) => {
            let abortAlgorithm
            if (signal !== undefined) {
              abortAlgorithm = () => {
                const error = new DOMException$1('Aborted', 'AbortError')
                const actions = []
                if (!preventAbort) {
                  actions.push(() => {
                    if (dest._state === 'writable') {
                      return WritableStreamAbort(dest, error)
                    }
                    return promiseResolvedWith(undefined)
                  })
                }
                if (!preventCancel) {
                  actions.push(() => {
                    if (source._state === 'readable') {
                      return ReadableStreamCancel(source, error)
                    }
                    return promiseResolvedWith(undefined)
                  })
                }
                shutdownWithAction(
                  () => Promise.all(actions.map((action) => action())),
                  true,
                  error
                )
              }
              if (signal.aborted) {
                abortAlgorithm()
                return
              }
              signal.addEventListener('abort', abortAlgorithm)
            }
            // Using reader and writer, read all chunks from this and write them to dest
            // - Backpressure must be enforced
            // - Shutdown must stop all activity
            function pipeLoop() {
              return newPromise((resolveLoop, rejectLoop) => {
                function next(done) {
                  if (done) {
                    resolveLoop()
                  } else {
                    // Use `PerformPromiseThen` instead of `uponPromise` to avoid
                    // adding unnecessary `.catch(rethrowAssertionErrorRejection)` handlers
                    PerformPromiseThen(pipeStep(), next, rejectLoop)
                  }
                }
                next(false)
              })
            }
            function pipeStep() {
              if (shuttingDown) {
                return promiseResolvedWith(true)
              }
              return PerformPromiseThen(writer._readyPromise, () => {
                return newPromise((resolveRead, rejectRead) => {
                  ReadableStreamDefaultReaderRead(reader, {
                    _chunkSteps: (chunk) => {
                      currentWrite = PerformPromiseThen(
                        WritableStreamDefaultWriterWrite(writer, chunk),
                        undefined,
                        noop
                      )
                      resolveRead(false)
                    },
                    _closeSteps: () => resolveRead(true),
                    _errorSteps: rejectRead
                  })
                })
              })
            }
            // Errors must be propagated forward
            isOrBecomesErrored(source, reader._closedPromise, (storedError) => {
              if (!preventAbort) {
                shutdownWithAction(
                  () => WritableStreamAbort(dest, storedError),
                  true,
                  storedError
                )
              } else {
                shutdown(true, storedError)
              }
            })
            // Errors must be propagated backward
            isOrBecomesErrored(dest, writer._closedPromise, (storedError) => {
              if (!preventCancel) {
                shutdownWithAction(
                  () => ReadableStreamCancel(source, storedError),
                  true,
                  storedError
                )
              } else {
                shutdown(true, storedError)
              }
            })
            // Closing must be propagated forward
            isOrBecomesClosed(source, reader._closedPromise, () => {
              if (!preventClose) {
                shutdownWithAction(() =>
                  WritableStreamDefaultWriterCloseWithErrorPropagation(writer)
                )
              } else {
                shutdown()
              }
            })
            // Closing must be propagated backward
            if (
              WritableStreamCloseQueuedOrInFlight(dest) ||
              dest._state === 'closed'
            ) {
              const destClosed = new TypeError(
                'the destination writable stream closed before all data could be piped to it'
              )
              if (!preventCancel) {
                shutdownWithAction(
                  () => ReadableStreamCancel(source, destClosed),
                  true,
                  destClosed
                )
              } else {
                shutdown(true, destClosed)
              }
            }
            setPromiseIsHandledToTrue(pipeLoop())
            function waitForWritesToFinish() {
              // Another write may have started while we were waiting on this currentWrite, so we have to be sure to wait
              // for that too.
              const oldCurrentWrite = currentWrite
              return PerformPromiseThen(currentWrite, () =>
                oldCurrentWrite !== currentWrite
                  ? waitForWritesToFinish()
                  : undefined
              )
            }
            function isOrBecomesErrored(stream, promise, action) {
              if (stream._state === 'errored') {
                action(stream._storedError)
              } else {
                uponRejection(promise, action)
              }
            }
            function isOrBecomesClosed(stream, promise, action) {
              if (stream._state === 'closed') {
                action()
              } else {
                uponFulfillment(promise, action)
              }
            }
            function shutdownWithAction(
              action,
              originalIsError,
              originalError
            ) {
              if (shuttingDown) {
                return
              }
              shuttingDown = true
              if (
                dest._state === 'writable' &&
                !WritableStreamCloseQueuedOrInFlight(dest)
              ) {
                uponFulfillment(waitForWritesToFinish(), doTheRest)
              } else {
                doTheRest()
              }
              function doTheRest() {
                uponPromise(
                  action(),
                  () => finalize(originalIsError, originalError),
                  (newError) => finalize(true, newError)
                )
              }
            }
            function shutdown(isError, error) {
              if (shuttingDown) {
                return
              }
              shuttingDown = true
              if (
                dest._state === 'writable' &&
                !WritableStreamCloseQueuedOrInFlight(dest)
              ) {
                uponFulfillment(waitForWritesToFinish(), () =>
                  finalize(isError, error)
                )
              } else {
                finalize(isError, error)
              }
            }
            function finalize(isError, error) {
              WritableStreamDefaultWriterRelease(writer)
              ReadableStreamReaderGenericRelease(reader)
              if (signal !== undefined) {
                signal.removeEventListener('abort', abortAlgorithm)
              }
              if (isError) {
                reject(error)
              } else {
                resolve(undefined)
              }
            }
          })
        }

        /**
         * Allows control of a {@link ReadableStream | readable stream}'s state and internal queue.
         *
         * @public
         */
        class ReadableStreamDefaultController {
          constructor() {
            throw new TypeError('Illegal constructor')
          }
          /**
           * Returns the desired size to fill the controlled stream's internal queue. It can be negative, if the queue is
           * over-full. An underlying source ought to use this information to determine when and how to apply backpressure.
           */
          get desiredSize() {
            if (!IsReadableStreamDefaultController(this)) {
              throw defaultControllerBrandCheckException$1('desiredSize')
            }
            return ReadableStreamDefaultControllerGetDesiredSize(this)
          }
          /**
           * Closes the controlled readable stream. Consumers will still be able to read any previously-enqueued chunks from
           * the stream, but once those are read, the stream will become closed.
           */
          close() {
            if (!IsReadableStreamDefaultController(this)) {
              throw defaultControllerBrandCheckException$1('close')
            }
            if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(this)) {
              throw new TypeError(
                'The stream is not in a state that permits close'
              )
            }
            ReadableStreamDefaultControllerClose(this)
          }
          enqueue(chunk = undefined) {
            if (!IsReadableStreamDefaultController(this)) {
              throw defaultControllerBrandCheckException$1('enqueue')
            }
            if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(this)) {
              throw new TypeError(
                'The stream is not in a state that permits enqueue'
              )
            }
            return ReadableStreamDefaultControllerEnqueue(this, chunk)
          }
          /**
           * Errors the controlled readable stream, making all future interactions with it fail with the given error `e`.
           */
          error(e = undefined) {
            if (!IsReadableStreamDefaultController(this)) {
              throw defaultControllerBrandCheckException$1('error')
            }
            ReadableStreamDefaultControllerError(this, e)
          }
          /** @internal */
          [CancelSteps](reason) {
            ResetQueue(this)
            const result = this._cancelAlgorithm(reason)
            ReadableStreamDefaultControllerClearAlgorithms(this)
            return result
          }
          /** @internal */
          [PullSteps](readRequest) {
            const stream = this._controlledReadableStream
            if (this._queue.length > 0) {
              const chunk = DequeueValue(this)
              if (this._closeRequested && this._queue.length === 0) {
                ReadableStreamDefaultControllerClearAlgorithms(this)
                ReadableStreamClose(stream)
              } else {
                ReadableStreamDefaultControllerCallPullIfNeeded(this)
              }
              readRequest._chunkSteps(chunk)
            } else {
              ReadableStreamAddReadRequest(stream, readRequest)
              ReadableStreamDefaultControllerCallPullIfNeeded(this)
            }
          }
        }
        Object.defineProperties(ReadableStreamDefaultController.prototype, {
          close: { enumerable: true },
          enqueue: { enumerable: true },
          error: { enumerable: true },
          desiredSize: { enumerable: true }
        })
        if (typeof SymbolPolyfill.toStringTag === 'symbol') {
          Object.defineProperty(
            ReadableStreamDefaultController.prototype,
            SymbolPolyfill.toStringTag,
            {
              value: 'ReadableStreamDefaultController',
              configurable: true
            }
          )
        }
        // Abstract operations for the ReadableStreamDefaultController.
        function IsReadableStreamDefaultController(x) {
          if (!typeIsObject(x)) {
            return false
          }
          if (
            !Object.prototype.hasOwnProperty.call(
              x,
              '_controlledReadableStream'
            )
          ) {
            return false
          }
          return x instanceof ReadableStreamDefaultController
        }
        function ReadableStreamDefaultControllerCallPullIfNeeded(controller) {
          const shouldPull =
            ReadableStreamDefaultControllerShouldCallPull(controller)
          if (!shouldPull) {
            return
          }
          if (controller._pulling) {
            controller._pullAgain = true
            return
          }
          controller._pulling = true
          const pullPromise = controller._pullAlgorithm()
          uponPromise(
            pullPromise,
            () => {
              controller._pulling = false
              if (controller._pullAgain) {
                controller._pullAgain = false
                ReadableStreamDefaultControllerCallPullIfNeeded(controller)
              }
            },
            (e) => {
              ReadableStreamDefaultControllerError(controller, e)
            }
          )
        }
        function ReadableStreamDefaultControllerShouldCallPull(controller) {
          const stream = controller._controlledReadableStream
          if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
            return false
          }
          if (!controller._started) {
            return false
          }
          if (
            IsReadableStreamLocked(stream) &&
            ReadableStreamGetNumReadRequests(stream) > 0
          ) {
            return true
          }
          const desiredSize =
            ReadableStreamDefaultControllerGetDesiredSize(controller)
          if (desiredSize > 0) {
            return true
          }
          return false
        }
        function ReadableStreamDefaultControllerClearAlgorithms(controller) {
          controller._pullAlgorithm = undefined
          controller._cancelAlgorithm = undefined
          controller._strategySizeAlgorithm = undefined
        }
        // A client of ReadableStreamDefaultController may use these functions directly to bypass state check.
        function ReadableStreamDefaultControllerClose(controller) {
          if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
            return
          }
          const stream = controller._controlledReadableStream
          controller._closeRequested = true
          if (controller._queue.length === 0) {
            ReadableStreamDefaultControllerClearAlgorithms(controller)
            ReadableStreamClose(stream)
          }
        }
        function ReadableStreamDefaultControllerEnqueue(controller, chunk) {
          if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
            return
          }
          const stream = controller._controlledReadableStream
          if (
            IsReadableStreamLocked(stream) &&
            ReadableStreamGetNumReadRequests(stream) > 0
          ) {
            ReadableStreamFulfillReadRequest(stream, chunk, false)
          } else {
            let chunkSize
            try {
              chunkSize = controller._strategySizeAlgorithm(chunk)
            } catch (chunkSizeE) {
              ReadableStreamDefaultControllerError(controller, chunkSizeE)
              throw chunkSizeE
            }
            try {
              EnqueueValueWithSize(controller, chunk, chunkSize)
            } catch (enqueueE) {
              ReadableStreamDefaultControllerError(controller, enqueueE)
              throw enqueueE
            }
          }
          ReadableStreamDefaultControllerCallPullIfNeeded(controller)
        }
        function ReadableStreamDefaultControllerError(controller, e) {
          const stream = controller._controlledReadableStream
          if (stream._state !== 'readable') {
            return
          }
          ResetQueue(controller)
          ReadableStreamDefaultControllerClearAlgorithms(controller)
          ReadableStreamError(stream, e)
        }
        function ReadableStreamDefaultControllerGetDesiredSize(controller) {
          const state = controller._controlledReadableStream._state
          if (state === 'errored') {
            return null
          }
          if (state === 'closed') {
            return 0
          }
          return controller._strategyHWM - controller._queueTotalSize
        }
        // This is used in the implementation of TransformStream.
        function ReadableStreamDefaultControllerHasBackpressure(controller) {
          if (ReadableStreamDefaultControllerShouldCallPull(controller)) {
            return false
          }
          return true
        }
        function ReadableStreamDefaultControllerCanCloseOrEnqueue(controller) {
          const state = controller._controlledReadableStream._state
          if (!controller._closeRequested && state === 'readable') {
            return true
          }
          return false
        }
        function SetUpReadableStreamDefaultController(
          stream,
          controller,
          startAlgorithm,
          pullAlgorithm,
          cancelAlgorithm,
          highWaterMark,
          sizeAlgorithm
        ) {
          controller._controlledReadableStream = stream
          controller._queue = undefined
          controller._queueTotalSize = undefined
          ResetQueue(controller)
          controller._started = false
          controller._closeRequested = false
          controller._pullAgain = false
          controller._pulling = false
          controller._strategySizeAlgorithm = sizeAlgorithm
          controller._strategyHWM = highWaterMark
          controller._pullAlgorithm = pullAlgorithm
          controller._cancelAlgorithm = cancelAlgorithm
          stream._readableStreamController = controller
          const startResult = startAlgorithm()
          uponPromise(
            promiseResolvedWith(startResult),
            () => {
              controller._started = true
              ReadableStreamDefaultControllerCallPullIfNeeded(controller)
            },
            (r) => {
              ReadableStreamDefaultControllerError(controller, r)
            }
          )
        }
        function SetUpReadableStreamDefaultControllerFromUnderlyingSource(
          stream,
          underlyingSource,
          highWaterMark,
          sizeAlgorithm
        ) {
          const controller = Object.create(
            ReadableStreamDefaultController.prototype
          )
          let startAlgorithm = () => undefined
          let pullAlgorithm = () => promiseResolvedWith(undefined)
          let cancelAlgorithm = () => promiseResolvedWith(undefined)
          if (underlyingSource.start !== undefined) {
            startAlgorithm = () => underlyingSource.start(controller)
          }
          if (underlyingSource.pull !== undefined) {
            pullAlgorithm = () => underlyingSource.pull(controller)
          }
          if (underlyingSource.cancel !== undefined) {
            cancelAlgorithm = (reason) => underlyingSource.cancel(reason)
          }
          SetUpReadableStreamDefaultController(
            stream,
            controller,
            startAlgorithm,
            pullAlgorithm,
            cancelAlgorithm,
            highWaterMark,
            sizeAlgorithm
          )
        }
        // Helper functions for the ReadableStreamDefaultController.
        function defaultControllerBrandCheckException$1(name) {
          return new TypeError(
            `ReadableStreamDefaultController.prototype.${name} can only be used on a ReadableStreamDefaultController`
          )
        }

        function ReadableStreamTee(stream, cloneForBranch2) {
          if (
            IsReadableByteStreamController(stream._readableStreamController)
          ) {
            return ReadableByteStreamTee(stream)
          }
          return ReadableStreamDefaultTee(stream)
        }
        function ReadableStreamDefaultTee(stream, cloneForBranch2) {
          const reader = AcquireReadableStreamDefaultReader(stream)
          let reading = false
          let canceled1 = false
          let canceled2 = false
          let reason1
          let reason2
          let branch1
          let branch2
          let resolveCancelPromise
          const cancelPromise = newPromise((resolve) => {
            resolveCancelPromise = resolve
          })
          function pullAlgorithm() {
            if (reading) {
              return promiseResolvedWith(undefined)
            }
            reading = true
            const readRequest = {
              _chunkSteps: (chunk) => {
                // This needs to be delayed a microtask because it takes at least a microtask to detect errors (using
                // reader._closedPromise below), and we want errors in stream to error both branches immediately. We cannot let
                // successful synchronously-available reads get ahead of asynchronously-available errors.
                queueMicrotask(() => {
                  reading = false
                  const chunk1 = chunk
                  const chunk2 = chunk
                  // There is no way to access the cloning code right now in the reference implementation.
                  // If we add one then we'll need an implementation for serializable objects.
                  // if (!canceled2 && cloneForBranch2) {
                  //   chunk2 = StructuredDeserialize(StructuredSerialize(chunk2));
                  // }
                  if (!canceled1) {
                    ReadableStreamDefaultControllerEnqueue(
                      branch1._readableStreamController,
                      chunk1
                    )
                  }
                  if (!canceled2) {
                    ReadableStreamDefaultControllerEnqueue(
                      branch2._readableStreamController,
                      chunk2
                    )
                  }
                })
              },
              _closeSteps: () => {
                reading = false
                if (!canceled1) {
                  ReadableStreamDefaultControllerClose(
                    branch1._readableStreamController
                  )
                }
                if (!canceled2) {
                  ReadableStreamDefaultControllerClose(
                    branch2._readableStreamController
                  )
                }
                if (!canceled1 || !canceled2) {
                  resolveCancelPromise(undefined)
                }
              },
              _errorSteps: () => {
                reading = false
              }
            }
            ReadableStreamDefaultReaderRead(reader, readRequest)
            return promiseResolvedWith(undefined)
          }
          function cancel1Algorithm(reason) {
            canceled1 = true
            reason1 = reason
            if (canceled2) {
              const compositeReason = CreateArrayFromList([reason1, reason2])
              const cancelResult = ReadableStreamCancel(stream, compositeReason)
              resolveCancelPromise(cancelResult)
            }
            return cancelPromise
          }
          function cancel2Algorithm(reason) {
            canceled2 = true
            reason2 = reason
            if (canceled1) {
              const compositeReason = CreateArrayFromList([reason1, reason2])
              const cancelResult = ReadableStreamCancel(stream, compositeReason)
              resolveCancelPromise(cancelResult)
            }
            return cancelPromise
          }
          function startAlgorithm() {
            // do nothing
          }
          branch1 = CreateReadableStream(
            startAlgorithm,
            pullAlgorithm,
            cancel1Algorithm
          )
          branch2 = CreateReadableStream(
            startAlgorithm,
            pullAlgorithm,
            cancel2Algorithm
          )
          uponRejection(reader._closedPromise, (r) => {
            ReadableStreamDefaultControllerError(
              branch1._readableStreamController,
              r
            )
            ReadableStreamDefaultControllerError(
              branch2._readableStreamController,
              r
            )
            if (!canceled1 || !canceled2) {
              resolveCancelPromise(undefined)
            }
          })
          return [branch1, branch2]
        }
        function ReadableByteStreamTee(stream) {
          let reader = AcquireReadableStreamDefaultReader(stream)
          let reading = false
          let canceled1 = false
          let canceled2 = false
          let reason1
          let reason2
          let branch1
          let branch2
          let resolveCancelPromise
          const cancelPromise = newPromise((resolve) => {
            resolveCancelPromise = resolve
          })
          function forwardReaderError(thisReader) {
            uponRejection(thisReader._closedPromise, (r) => {
              if (thisReader !== reader) {
                return
              }
              ReadableByteStreamControllerError(
                branch1._readableStreamController,
                r
              )
              ReadableByteStreamControllerError(
                branch2._readableStreamController,
                r
              )
              if (!canceled1 || !canceled2) {
                resolveCancelPromise(undefined)
              }
            })
          }
          function pullWithDefaultReader() {
            if (IsReadableStreamBYOBReader(reader)) {
              ReadableStreamReaderGenericRelease(reader)
              reader = AcquireReadableStreamDefaultReader(stream)
              forwardReaderError(reader)
            }
            const readRequest = {
              _chunkSteps: (chunk) => {
                // This needs to be delayed a microtask because it takes at least a microtask to detect errors (using
                // reader._closedPromise below), and we want errors in stream to error both branches immediately. We cannot let
                // successful synchronously-available reads get ahead of asynchronously-available errors.
                queueMicrotask(() => {
                  reading = false
                  const chunk1 = chunk
                  let chunk2 = chunk
                  if (!canceled1 && !canceled2) {
                    try {
                      chunk2 = CloneAsUint8Array(chunk)
                    } catch (cloneE) {
                      ReadableByteStreamControllerError(
                        branch1._readableStreamController,
                        cloneE
                      )
                      ReadableByteStreamControllerError(
                        branch2._readableStreamController,
                        cloneE
                      )
                      resolveCancelPromise(ReadableStreamCancel(stream, cloneE))
                      return
                    }
                  }
                  if (!canceled1) {
                    ReadableByteStreamControllerEnqueue(
                      branch1._readableStreamController,
                      chunk1
                    )
                  }
                  if (!canceled2) {
                    ReadableByteStreamControllerEnqueue(
                      branch2._readableStreamController,
                      chunk2
                    )
                  }
                })
              },
              _closeSteps: () => {
                reading = false
                if (!canceled1) {
                  ReadableByteStreamControllerClose(
                    branch1._readableStreamController
                  )
                }
                if (!canceled2) {
                  ReadableByteStreamControllerClose(
                    branch2._readableStreamController
                  )
                }
                if (
                  branch1._readableStreamController._pendingPullIntos.length > 0
                ) {
                  ReadableByteStreamControllerRespond(
                    branch1._readableStreamController,
                    0
                  )
                }
                if (
                  branch2._readableStreamController._pendingPullIntos.length > 0
                ) {
                  ReadableByteStreamControllerRespond(
                    branch2._readableStreamController,
                    0
                  )
                }
                if (!canceled1 || !canceled2) {
                  resolveCancelPromise(undefined)
                }
              },
              _errorSteps: () => {
                reading = false
              }
            }
            ReadableStreamDefaultReaderRead(reader, readRequest)
          }
          function pullWithBYOBReader(view, forBranch2) {
            if (IsReadableStreamDefaultReader(reader)) {
              ReadableStreamReaderGenericRelease(reader)
              reader = AcquireReadableStreamBYOBReader(stream)
              forwardReaderError(reader)
            }
            const byobBranch = forBranch2 ? branch2 : branch1
            const otherBranch = forBranch2 ? branch1 : branch2
            const readIntoRequest = {
              _chunkSteps: (chunk) => {
                // This needs to be delayed a microtask because it takes at least a microtask to detect errors (using
                // reader._closedPromise below), and we want errors in stream to error both branches immediately. We cannot let
                // successful synchronously-available reads get ahead of asynchronously-available errors.
                queueMicrotask(() => {
                  reading = false
                  const byobCanceled = forBranch2 ? canceled2 : canceled1
                  const otherCanceled = forBranch2 ? canceled1 : canceled2
                  if (!otherCanceled) {
                    let clonedChunk
                    try {
                      clonedChunk = CloneAsUint8Array(chunk)
                    } catch (cloneE) {
                      ReadableByteStreamControllerError(
                        byobBranch._readableStreamController,
                        cloneE
                      )
                      ReadableByteStreamControllerError(
                        otherBranch._readableStreamController,
                        cloneE
                      )
                      resolveCancelPromise(ReadableStreamCancel(stream, cloneE))
                      return
                    }
                    if (!byobCanceled) {
                      ReadableByteStreamControllerRespondWithNewView(
                        byobBranch._readableStreamController,
                        chunk
                      )
                    }
                    ReadableByteStreamControllerEnqueue(
                      otherBranch._readableStreamController,
                      clonedChunk
                    )
                  } else if (!byobCanceled) {
                    ReadableByteStreamControllerRespondWithNewView(
                      byobBranch._readableStreamController,
                      chunk
                    )
                  }
                })
              },
              _closeSteps: (chunk) => {
                reading = false
                const byobCanceled = forBranch2 ? canceled2 : canceled1
                const otherCanceled = forBranch2 ? canceled1 : canceled2
                if (!byobCanceled) {
                  ReadableByteStreamControllerClose(
                    byobBranch._readableStreamController
                  )
                }
                if (!otherCanceled) {
                  ReadableByteStreamControllerClose(
                    otherBranch._readableStreamController
                  )
                }
                if (chunk !== undefined) {
                  if (!byobCanceled) {
                    ReadableByteStreamControllerRespondWithNewView(
                      byobBranch._readableStreamController,
                      chunk
                    )
                  }
                  if (
                    !otherCanceled &&
                    otherBranch._readableStreamController._pendingPullIntos
                      .length > 0
                  ) {
                    ReadableByteStreamControllerRespond(
                      otherBranch._readableStreamController,
                      0
                    )
                  }
                }
                if (!byobCanceled || !otherCanceled) {
                  resolveCancelPromise(undefined)
                }
              },
              _errorSteps: () => {
                reading = false
              }
            }
            ReadableStreamBYOBReaderRead(reader, view, readIntoRequest)
          }
          function pull1Algorithm() {
            if (reading) {
              return promiseResolvedWith(undefined)
            }
            reading = true
            const byobRequest = ReadableByteStreamControllerGetBYOBRequest(
              branch1._readableStreamController
            )
            if (byobRequest === null) {
              pullWithDefaultReader()
            } else {
              pullWithBYOBReader(byobRequest._view, false)
            }
            return promiseResolvedWith(undefined)
          }
          function pull2Algorithm() {
            if (reading) {
              return promiseResolvedWith(undefined)
            }
            reading = true
            const byobRequest = ReadableByteStreamControllerGetBYOBRequest(
              branch2._readableStreamController
            )
            if (byobRequest === null) {
              pullWithDefaultReader()
            } else {
              pullWithBYOBReader(byobRequest._view, true)
            }
            return promiseResolvedWith(undefined)
          }
          function cancel1Algorithm(reason) {
            canceled1 = true
            reason1 = reason
            if (canceled2) {
              const compositeReason = CreateArrayFromList([reason1, reason2])
              const cancelResult = ReadableStreamCancel(stream, compositeReason)
              resolveCancelPromise(cancelResult)
            }
            return cancelPromise
          }
          function cancel2Algorithm(reason) {
            canceled2 = true
            reason2 = reason
            if (canceled1) {
              const compositeReason = CreateArrayFromList([reason1, reason2])
              const cancelResult = ReadableStreamCancel(stream, compositeReason)
              resolveCancelPromise(cancelResult)
            }
            return cancelPromise
          }
          function startAlgorithm() {
            return
          }
          branch1 = CreateReadableByteStream(
            startAlgorithm,
            pull1Algorithm,
            cancel1Algorithm
          )
          branch2 = CreateReadableByteStream(
            startAlgorithm,
            pull2Algorithm,
            cancel2Algorithm
          )
          forwardReaderError(reader)
          return [branch1, branch2]
        }

        function convertUnderlyingDefaultOrByteSource(source, context) {
          assertDictionary(source, context)
          const original = source
          const autoAllocateChunkSize =
            original === null || original === void 0
              ? void 0
              : original.autoAllocateChunkSize
          const cancel =
            original === null || original === void 0 ? void 0 : original.cancel
          const pull =
            original === null || original === void 0 ? void 0 : original.pull
          const start =
            original === null || original === void 0 ? void 0 : original.start
          const type =
            original === null || original === void 0 ? void 0 : original.type
          return {
            autoAllocateChunkSize:
              autoAllocateChunkSize === undefined
                ? undefined
                : convertUnsignedLongLongWithEnforceRange(
                    autoAllocateChunkSize,
                    `${context} has member 'autoAllocateChunkSize' that`
                  ),
            cancel:
              cancel === undefined
                ? undefined
                : convertUnderlyingSourceCancelCallback(
                    cancel,
                    original,
                    `${context} has member 'cancel' that`
                  ),
            pull:
              pull === undefined
                ? undefined
                : convertUnderlyingSourcePullCallback(
                    pull,
                    original,
                    `${context} has member 'pull' that`
                  ),
            start:
              start === undefined
                ? undefined
                : convertUnderlyingSourceStartCallback(
                    start,
                    original,
                    `${context} has member 'start' that`
                  ),
            type:
              type === undefined
                ? undefined
                : convertReadableStreamType(
                    type,
                    `${context} has member 'type' that`
                  )
          }
        }
        function convertUnderlyingSourceCancelCallback(fn, original, context) {
          assertFunction(fn, context)
          return (reason) => promiseCall(fn, original, [reason])
        }
        function convertUnderlyingSourcePullCallback(fn, original, context) {
          assertFunction(fn, context)
          return (controller) => promiseCall(fn, original, [controller])
        }
        function convertUnderlyingSourceStartCallback(fn, original, context) {
          assertFunction(fn, context)
          return (controller) => reflectCall(fn, original, [controller])
        }
        function convertReadableStreamType(type, context) {
          type = `${type}`
          if (type !== 'bytes') {
            throw new TypeError(
              `${context} '${type}' is not a valid enumeration value for ReadableStreamType`
            )
          }
          return type
        }

        function convertReaderOptions(options, context) {
          assertDictionary(options, context)
          const mode =
            options === null || options === void 0 ? void 0 : options.mode
          return {
            mode:
              mode === undefined
                ? undefined
                : convertReadableStreamReaderMode(
                    mode,
                    `${context} has member 'mode' that`
                  )
          }
        }
        function convertReadableStreamReaderMode(mode, context) {
          mode = `${mode}`
          if (mode !== 'byob') {
            throw new TypeError(
              `${context} '${mode}' is not a valid enumeration value for ReadableStreamReaderMode`
            )
          }
          return mode
        }

        function convertIteratorOptions(options, context) {
          assertDictionary(options, context)
          const preventCancel =
            options === null || options === void 0
              ? void 0
              : options.preventCancel
          return { preventCancel: Boolean(preventCancel) }
        }

        function convertPipeOptions(options, context) {
          assertDictionary(options, context)
          const preventAbort =
            options === null || options === void 0
              ? void 0
              : options.preventAbort
          const preventCancel =
            options === null || options === void 0
              ? void 0
              : options.preventCancel
          const preventClose =
            options === null || options === void 0
              ? void 0
              : options.preventClose
          const signal =
            options === null || options === void 0 ? void 0 : options.signal
          if (signal !== undefined) {
            assertAbortSignal(signal, `${context} has member 'signal' that`)
          }
          return {
            preventAbort: Boolean(preventAbort),
            preventCancel: Boolean(preventCancel),
            preventClose: Boolean(preventClose),
            signal
          }
        }
        function assertAbortSignal(signal, context) {
          if (!isAbortSignal(signal)) {
            throw new TypeError(`${context} is not an AbortSignal.`)
          }
        }

        function convertReadableWritablePair(pair, context) {
          assertDictionary(pair, context)
          const readable =
            pair === null || pair === void 0 ? void 0 : pair.readable
          assertRequiredField(readable, 'readable', 'ReadableWritablePair')
          assertReadableStream(
            readable,
            `${context} has member 'readable' that`
          )
          const writable =
            pair === null || pair === void 0 ? void 0 : pair.writable
          assertRequiredField(writable, 'writable', 'ReadableWritablePair')
          assertWritableStream(
            writable,
            `${context} has member 'writable' that`
          )
          return { readable, writable }
        }

        /**
         * A readable stream represents a source of data, from which you can read.
         *
         * @public
         */
        class ReadableStream {
          constructor(rawUnderlyingSource = {}, rawStrategy = {}) {
            if (rawUnderlyingSource === undefined) {
              rawUnderlyingSource = null
            } else {
              assertObject(rawUnderlyingSource, 'First parameter')
            }
            const strategy = convertQueuingStrategy(
              rawStrategy,
              'Second parameter'
            )
            const underlyingSource = convertUnderlyingDefaultOrByteSource(
              rawUnderlyingSource,
              'First parameter'
            )
            InitializeReadableStream(this)
            if (underlyingSource.type === 'bytes') {
              if (strategy.size !== undefined) {
                throw new RangeError(
                  'The strategy for a byte stream cannot have a size function'
                )
              }
              const highWaterMark = ExtractHighWaterMark(strategy, 0)
              SetUpReadableByteStreamControllerFromUnderlyingSource(
                this,
                underlyingSource,
                highWaterMark
              )
            } else {
              const sizeAlgorithm = ExtractSizeAlgorithm(strategy)
              const highWaterMark = ExtractHighWaterMark(strategy, 1)
              SetUpReadableStreamDefaultControllerFromUnderlyingSource(
                this,
                underlyingSource,
                highWaterMark,
                sizeAlgorithm
              )
            }
          }
          /**
           * Whether or not the readable stream is locked to a {@link ReadableStreamDefaultReader | reader}.
           */
          get locked() {
            if (!IsReadableStream(this)) {
              throw streamBrandCheckException$1('locked')
            }
            return IsReadableStreamLocked(this)
          }
          /**
           * Cancels the stream, signaling a loss of interest in the stream by a consumer.
           *
           * The supplied `reason` argument will be given to the underlying source's {@link UnderlyingSource.cancel | cancel()}
           * method, which might or might not use it.
           */
          cancel(reason = undefined) {
            if (!IsReadableStream(this)) {
              return promiseRejectedWith(streamBrandCheckException$1('cancel'))
            }
            if (IsReadableStreamLocked(this)) {
              return promiseRejectedWith(
                new TypeError(
                  'Cannot cancel a stream that already has a reader'
                )
              )
            }
            return ReadableStreamCancel(this, reason)
          }
          getReader(rawOptions = undefined) {
            if (!IsReadableStream(this)) {
              throw streamBrandCheckException$1('getReader')
            }
            const options = convertReaderOptions(rawOptions, 'First parameter')
            if (options.mode === undefined) {
              return AcquireReadableStreamDefaultReader(this)
            }
            return AcquireReadableStreamBYOBReader(this)
          }
          pipeThrough(rawTransform, rawOptions = {}) {
            if (!IsReadableStream(this)) {
              throw streamBrandCheckException$1('pipeThrough')
            }
            assertRequiredArgument(rawTransform, 1, 'pipeThrough')
            const transform = convertReadableWritablePair(
              rawTransform,
              'First parameter'
            )
            const options = convertPipeOptions(rawOptions, 'Second parameter')
            if (IsReadableStreamLocked(this)) {
              throw new TypeError(
                'ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream'
              )
            }
            if (IsWritableStreamLocked(transform.writable)) {
              throw new TypeError(
                'ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream'
              )
            }
            const promise = ReadableStreamPipeTo(
              this,
              transform.writable,
              options.preventClose,
              options.preventAbort,
              options.preventCancel,
              options.signal
            )
            setPromiseIsHandledToTrue(promise)
            return transform.readable
          }
          pipeTo(destination, rawOptions = {}) {
            if (!IsReadableStream(this)) {
              return promiseRejectedWith(streamBrandCheckException$1('pipeTo'))
            }
            if (destination === undefined) {
              return promiseRejectedWith(`Parameter 1 is required in 'pipeTo'.`)
            }
            if (!IsWritableStream(destination)) {
              return promiseRejectedWith(
                new TypeError(
                  `ReadableStream.prototype.pipeTo's first argument must be a WritableStream`
                )
              )
            }
            let options
            try {
              options = convertPipeOptions(rawOptions, 'Second parameter')
            } catch (e) {
              return promiseRejectedWith(e)
            }
            if (IsReadableStreamLocked(this)) {
              return promiseRejectedWith(
                new TypeError(
                  'ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream'
                )
              )
            }
            if (IsWritableStreamLocked(destination)) {
              return promiseRejectedWith(
                new TypeError(
                  'ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream'
                )
              )
            }
            return ReadableStreamPipeTo(
              this,
              destination,
              options.preventClose,
              options.preventAbort,
              options.preventCancel,
              options.signal
            )
          }
          /**
           * Tees this readable stream, returning a two-element array containing the two resulting branches as
           * new {@link ReadableStream} instances.
           *
           * Teeing a stream will lock it, preventing any other consumer from acquiring a reader.
           * To cancel the stream, cancel both of the resulting branches; a composite cancellation reason will then be
           * propagated to the stream's underlying source.
           *
           * Note that the chunks seen in each branch will be the same object. If the chunks are not immutable,
           * this could allow interference between the two branches.
           */
          tee() {
            if (!IsReadableStream(this)) {
              throw streamBrandCheckException$1('tee')
            }
            const branches = ReadableStreamTee(this)
            return CreateArrayFromList(branches)
          }
          values(rawOptions = undefined) {
            if (!IsReadableStream(this)) {
              throw streamBrandCheckException$1('values')
            }
            const options = convertIteratorOptions(
              rawOptions,
              'First parameter'
            )
            return AcquireReadableStreamAsyncIterator(
              this,
              options.preventCancel
            )
          }
        }
        Object.defineProperties(ReadableStream.prototype, {
          cancel: { enumerable: true },
          getReader: { enumerable: true },
          pipeThrough: { enumerable: true },
          pipeTo: { enumerable: true },
          tee: { enumerable: true },
          values: { enumerable: true },
          locked: { enumerable: true }
        })
        if (typeof SymbolPolyfill.toStringTag === 'symbol') {
          Object.defineProperty(
            ReadableStream.prototype,
            SymbolPolyfill.toStringTag,
            {
              value: 'ReadableStream',
              configurable: true
            }
          )
        }
        if (typeof SymbolPolyfill.asyncIterator === 'symbol') {
          Object.defineProperty(
            ReadableStream.prototype,
            SymbolPolyfill.asyncIterator,
            {
              value: ReadableStream.prototype.values,
              writable: true,
              configurable: true
            }
          )
        }
        // Abstract operations for the ReadableStream.
        // Throws if and only if startAlgorithm throws.
        function CreateReadableStream(
          startAlgorithm,
          pullAlgorithm,
          cancelAlgorithm,
          highWaterMark = 1,
          sizeAlgorithm = () => 1
        ) {
          const stream = Object.create(ReadableStream.prototype)
          InitializeReadableStream(stream)
          const controller = Object.create(
            ReadableStreamDefaultController.prototype
          )
          SetUpReadableStreamDefaultController(
            stream,
            controller,
            startAlgorithm,
            pullAlgorithm,
            cancelAlgorithm,
            highWaterMark,
            sizeAlgorithm
          )
          return stream
        }
        // Throws if and only if startAlgorithm throws.
        function CreateReadableByteStream(
          startAlgorithm,
          pullAlgorithm,
          cancelAlgorithm
        ) {
          const stream = Object.create(ReadableStream.prototype)
          InitializeReadableStream(stream)
          const controller = Object.create(
            ReadableByteStreamController.prototype
          )
          SetUpReadableByteStreamController(
            stream,
            controller,
            startAlgorithm,
            pullAlgorithm,
            cancelAlgorithm,
            0,
            undefined
          )
          return stream
        }
        function InitializeReadableStream(stream) {
          stream._state = 'readable'
          stream._reader = undefined
          stream._storedError = undefined
          stream._disturbed = false
        }
        function IsReadableStream(x) {
          if (!typeIsObject(x)) {
            return false
          }
          if (
            !Object.prototype.hasOwnProperty.call(
              x,
              '_readableStreamController'
            )
          ) {
            return false
          }
          return x instanceof ReadableStream
        }
        function IsReadableStreamLocked(stream) {
          if (stream._reader === undefined) {
            return false
          }
          return true
        }
        // ReadableStream API exposed for controllers.
        function ReadableStreamCancel(stream, reason) {
          stream._disturbed = true
          if (stream._state === 'closed') {
            return promiseResolvedWith(undefined)
          }
          if (stream._state === 'errored') {
            return promiseRejectedWith(stream._storedError)
          }
          ReadableStreamClose(stream)
          const reader = stream._reader
          if (reader !== undefined && IsReadableStreamBYOBReader(reader)) {
            reader._readIntoRequests.forEach((readIntoRequest) => {
              readIntoRequest._closeSteps(undefined)
            })
            reader._readIntoRequests = new SimpleQueue()
          }
          const sourceCancelPromise =
            stream._readableStreamController[CancelSteps](reason)
          return transformPromiseWith(sourceCancelPromise, noop)
        }
        function ReadableStreamClose(stream) {
          stream._state = 'closed'
          const reader = stream._reader
          if (reader === undefined) {
            return
          }
          defaultReaderClosedPromiseResolve(reader)
          if (IsReadableStreamDefaultReader(reader)) {
            reader._readRequests.forEach((readRequest) => {
              readRequest._closeSteps()
            })
            reader._readRequests = new SimpleQueue()
          }
        }
        function ReadableStreamError(stream, e) {
          stream._state = 'errored'
          stream._storedError = e
          const reader = stream._reader
          if (reader === undefined) {
            return
          }
          defaultReaderClosedPromiseReject(reader, e)
          if (IsReadableStreamDefaultReader(reader)) {
            reader._readRequests.forEach((readRequest) => {
              readRequest._errorSteps(e)
            })
            reader._readRequests = new SimpleQueue()
          } else {
            reader._readIntoRequests.forEach((readIntoRequest) => {
              readIntoRequest._errorSteps(e)
            })
            reader._readIntoRequests = new SimpleQueue()
          }
        }
        // Helper functions for the ReadableStream.
        function streamBrandCheckException$1(name) {
          return new TypeError(
            `ReadableStream.prototype.${name} can only be used on a ReadableStream`
          )
        }

        function convertQueuingStrategyInit(init, context) {
          assertDictionary(init, context)
          const highWaterMark =
            init === null || init === void 0 ? void 0 : init.highWaterMark
          assertRequiredField(
            highWaterMark,
            'highWaterMark',
            'QueuingStrategyInit'
          )
          return {
            highWaterMark: convertUnrestrictedDouble(highWaterMark)
          }
        }

        // The size function must not have a prototype property nor be a constructor
        const byteLengthSizeFunction = (chunk) => {
          return chunk.byteLength
        }
        Object.defineProperty(byteLengthSizeFunction, 'name', {
          value: 'size',
          configurable: true
        })
        /**
         * A queuing strategy that counts the number of bytes in each chunk.
         *
         * @public
         */
        class ByteLengthQueuingStrategy {
          constructor(options) {
            assertRequiredArgument(options, 1, 'ByteLengthQueuingStrategy')
            options = convertQueuingStrategyInit(options, 'First parameter')
            this._byteLengthQueuingStrategyHighWaterMark = options.highWaterMark
          }
          /**
           * Returns the high water mark provided to the constructor.
           */
          get highWaterMark() {
            if (!IsByteLengthQueuingStrategy(this)) {
              throw byteLengthBrandCheckException('highWaterMark')
            }
            return this._byteLengthQueuingStrategyHighWaterMark
          }
          /**
           * Measures the size of `chunk` by returning the value of its `byteLength` property.
           */
          get size() {
            if (!IsByteLengthQueuingStrategy(this)) {
              throw byteLengthBrandCheckException('size')
            }
            return byteLengthSizeFunction
          }
        }
        Object.defineProperties(ByteLengthQueuingStrategy.prototype, {
          highWaterMark: { enumerable: true },
          size: { enumerable: true }
        })
        if (typeof SymbolPolyfill.toStringTag === 'symbol') {
          Object.defineProperty(
            ByteLengthQueuingStrategy.prototype,
            SymbolPolyfill.toStringTag,
            {
              value: 'ByteLengthQueuingStrategy',
              configurable: true
            }
          )
        }
        // Helper functions for the ByteLengthQueuingStrategy.
        function byteLengthBrandCheckException(name) {
          return new TypeError(
            `ByteLengthQueuingStrategy.prototype.${name} can only be used on a ByteLengthQueuingStrategy`
          )
        }
        function IsByteLengthQueuingStrategy(x) {
          if (!typeIsObject(x)) {
            return false
          }
          if (
            !Object.prototype.hasOwnProperty.call(
              x,
              '_byteLengthQueuingStrategyHighWaterMark'
            )
          ) {
            return false
          }
          return x instanceof ByteLengthQueuingStrategy
        }

        // The size function must not have a prototype property nor be a constructor
        const countSizeFunction = () => {
          return 1
        }
        Object.defineProperty(countSizeFunction, 'name', {
          value: 'size',
          configurable: true
        })
        /**
         * A queuing strategy that counts the number of chunks.
         *
         * @public
         */
        class CountQueuingStrategy {
          constructor(options) {
            assertRequiredArgument(options, 1, 'CountQueuingStrategy')
            options = convertQueuingStrategyInit(options, 'First parameter')
            this._countQueuingStrategyHighWaterMark = options.highWaterMark
          }
          /**
           * Returns the high water mark provided to the constructor.
           */
          get highWaterMark() {
            if (!IsCountQueuingStrategy(this)) {
              throw countBrandCheckException('highWaterMark')
            }
            return this._countQueuingStrategyHighWaterMark
          }
          /**
           * Measures the size of `chunk` by always returning 1.
           * This ensures that the total queue size is a count of the number of chunks in the queue.
           */
          get size() {
            if (!IsCountQueuingStrategy(this)) {
              throw countBrandCheckException('size')
            }
            return countSizeFunction
          }
        }
        Object.defineProperties(CountQueuingStrategy.prototype, {
          highWaterMark: { enumerable: true },
          size: { enumerable: true }
        })
        if (typeof SymbolPolyfill.toStringTag === 'symbol') {
          Object.defineProperty(
            CountQueuingStrategy.prototype,
            SymbolPolyfill.toStringTag,
            {
              value: 'CountQueuingStrategy',
              configurable: true
            }
          )
        }
        // Helper functions for the CountQueuingStrategy.
        function countBrandCheckException(name) {
          return new TypeError(
            `CountQueuingStrategy.prototype.${name} can only be used on a CountQueuingStrategy`
          )
        }
        function IsCountQueuingStrategy(x) {
          if (!typeIsObject(x)) {
            return false
          }
          if (
            !Object.prototype.hasOwnProperty.call(
              x,
              '_countQueuingStrategyHighWaterMark'
            )
          ) {
            return false
          }
          return x instanceof CountQueuingStrategy
        }

        function convertTransformer(original, context) {
          assertDictionary(original, context)
          const flush =
            original === null || original === void 0 ? void 0 : original.flush
          const readableType =
            original === null || original === void 0
              ? void 0
              : original.readableType
          const start =
            original === null || original === void 0 ? void 0 : original.start
          const transform =
            original === null || original === void 0
              ? void 0
              : original.transform
          const writableType =
            original === null || original === void 0
              ? void 0
              : original.writableType
          return {
            flush:
              flush === undefined
                ? undefined
                : convertTransformerFlushCallback(
                    flush,
                    original,
                    `${context} has member 'flush' that`
                  ),
            readableType,
            start:
              start === undefined
                ? undefined
                : convertTransformerStartCallback(
                    start,
                    original,
                    `${context} has member 'start' that`
                  ),
            transform:
              transform === undefined
                ? undefined
                : convertTransformerTransformCallback(
                    transform,
                    original,
                    `${context} has member 'transform' that`
                  ),
            writableType
          }
        }
        function convertTransformerFlushCallback(fn, original, context) {
          assertFunction(fn, context)
          return (controller) => promiseCall(fn, original, [controller])
        }
        function convertTransformerStartCallback(fn, original, context) {
          assertFunction(fn, context)
          return (controller) => reflectCall(fn, original, [controller])
        }
        function convertTransformerTransformCallback(fn, original, context) {
          assertFunction(fn, context)
          return (chunk, controller) =>
            promiseCall(fn, original, [chunk, controller])
        }

        // Class TransformStream
        /**
         * A transform stream consists of a pair of streams: a {@link WritableStream | writable stream},
         * known as its writable side, and a {@link ReadableStream | readable stream}, known as its readable side.
         * In a manner specific to the transform stream in question, writes to the writable side result in new data being
         * made available for reading from the readable side.
         *
         * @public
         */
        class TransformStream {
          constructor(
            rawTransformer = {},
            rawWritableStrategy = {},
            rawReadableStrategy = {}
          ) {
            if (rawTransformer === undefined) {
              rawTransformer = null
            }
            const writableStrategy = convertQueuingStrategy(
              rawWritableStrategy,
              'Second parameter'
            )
            const readableStrategy = convertQueuingStrategy(
              rawReadableStrategy,
              'Third parameter'
            )
            const transformer = convertTransformer(
              rawTransformer,
              'First parameter'
            )
            if (transformer.readableType !== undefined) {
              throw new RangeError('Invalid readableType specified')
            }
            if (transformer.writableType !== undefined) {
              throw new RangeError('Invalid writableType specified')
            }
            const readableHighWaterMark = ExtractHighWaterMark(
              readableStrategy,
              0
            )
            const readableSizeAlgorithm = ExtractSizeAlgorithm(readableStrategy)
            const writableHighWaterMark = ExtractHighWaterMark(
              writableStrategy,
              1
            )
            const writableSizeAlgorithm = ExtractSizeAlgorithm(writableStrategy)
            let startPromise_resolve
            const startPromise = newPromise((resolve) => {
              startPromise_resolve = resolve
            })
            InitializeTransformStream(
              this,
              startPromise,
              writableHighWaterMark,
              writableSizeAlgorithm,
              readableHighWaterMark,
              readableSizeAlgorithm
            )
            SetUpTransformStreamDefaultControllerFromTransformer(
              this,
              transformer
            )
            if (transformer.start !== undefined) {
              startPromise_resolve(
                transformer.start(this._transformStreamController)
              )
            } else {
              startPromise_resolve(undefined)
            }
          }
          /**
           * The readable side of the transform stream.
           */
          get readable() {
            if (!IsTransformStream(this)) {
              throw streamBrandCheckException('readable')
            }
            return this._readable
          }
          /**
           * The writable side of the transform stream.
           */
          get writable() {
            if (!IsTransformStream(this)) {
              throw streamBrandCheckException('writable')
            }
            return this._writable
          }
        }
        Object.defineProperties(TransformStream.prototype, {
          readable: { enumerable: true },
          writable: { enumerable: true }
        })
        if (typeof SymbolPolyfill.toStringTag === 'symbol') {
          Object.defineProperty(
            TransformStream.prototype,
            SymbolPolyfill.toStringTag,
            {
              value: 'TransformStream',
              configurable: true
            }
          )
        }
        function InitializeTransformStream(
          stream,
          startPromise,
          writableHighWaterMark,
          writableSizeAlgorithm,
          readableHighWaterMark,
          readableSizeAlgorithm
        ) {
          function startAlgorithm() {
            return startPromise
          }
          function writeAlgorithm(chunk) {
            return TransformStreamDefaultSinkWriteAlgorithm(stream, chunk)
          }
          function abortAlgorithm(reason) {
            return TransformStreamDefaultSinkAbortAlgorithm(stream, reason)
          }
          function closeAlgorithm() {
            return TransformStreamDefaultSinkCloseAlgorithm(stream)
          }
          stream._writable = CreateWritableStream(
            startAlgorithm,
            writeAlgorithm,
            closeAlgorithm,
            abortAlgorithm,
            writableHighWaterMark,
            writableSizeAlgorithm
          )
          function pullAlgorithm() {
            return TransformStreamDefaultSourcePullAlgorithm(stream)
          }
          function cancelAlgorithm(reason) {
            TransformStreamErrorWritableAndUnblockWrite(stream, reason)
            return promiseResolvedWith(undefined)
          }
          stream._readable = CreateReadableStream(
            startAlgorithm,
            pullAlgorithm,
            cancelAlgorithm,
            readableHighWaterMark,
            readableSizeAlgorithm
          )
          // The [[backpressure]] slot is set to undefined so that it can be initialised by TransformStreamSetBackpressure.
          stream._backpressure = undefined
          stream._backpressureChangePromise = undefined
          stream._backpressureChangePromise_resolve = undefined
          TransformStreamSetBackpressure(stream, true)
          stream._transformStreamController = undefined
        }
        function IsTransformStream(x) {
          if (!typeIsObject(x)) {
            return false
          }
          if (
            !Object.prototype.hasOwnProperty.call(
              x,
              '_transformStreamController'
            )
          ) {
            return false
          }
          return x instanceof TransformStream
        }
        // This is a no-op if both sides are already errored.
        function TransformStreamError(stream, e) {
          ReadableStreamDefaultControllerError(
            stream._readable._readableStreamController,
            e
          )
          TransformStreamErrorWritableAndUnblockWrite(stream, e)
        }
        function TransformStreamErrorWritableAndUnblockWrite(stream, e) {
          TransformStreamDefaultControllerClearAlgorithms(
            stream._transformStreamController
          )
          WritableStreamDefaultControllerErrorIfNeeded(
            stream._writable._writableStreamController,
            e
          )
          if (stream._backpressure) {
            // Pretend that pull() was called to permit any pending write() calls to complete. TransformStreamSetBackpressure()
            // cannot be called from enqueue() or pull() once the ReadableStream is errored, so this will will be the final time
            // _backpressure is set.
            TransformStreamSetBackpressure(stream, false)
          }
        }
        function TransformStreamSetBackpressure(stream, backpressure) {
          // Passes also when called during construction.
          if (stream._backpressureChangePromise !== undefined) {
            stream._backpressureChangePromise_resolve()
          }
          stream._backpressureChangePromise = newPromise((resolve) => {
            stream._backpressureChangePromise_resolve = resolve
          })
          stream._backpressure = backpressure
        }
        // Class TransformStreamDefaultController
        /**
         * Allows control of the {@link ReadableStream} and {@link WritableStream} of the associated {@link TransformStream}.
         *
         * @public
         */
        class TransformStreamDefaultController {
          constructor() {
            throw new TypeError('Illegal constructor')
          }
          /**
           * Returns the desired size to fill the readable side’s internal queue. It can be negative, if the queue is over-full.
           */
          get desiredSize() {
            if (!IsTransformStreamDefaultController(this)) {
              throw defaultControllerBrandCheckException('desiredSize')
            }
            const readableController =
              this._controlledTransformStream._readable
                ._readableStreamController
            return ReadableStreamDefaultControllerGetDesiredSize(
              readableController
            )
          }
          enqueue(chunk = undefined) {
            if (!IsTransformStreamDefaultController(this)) {
              throw defaultControllerBrandCheckException('enqueue')
            }
            TransformStreamDefaultControllerEnqueue(this, chunk)
          }
          /**
           * Errors both the readable side and the writable side of the controlled transform stream, making all future
           * interactions with it fail with the given error `e`. Any chunks queued for transformation will be discarded.
           */
          error(reason = undefined) {
            if (!IsTransformStreamDefaultController(this)) {
              throw defaultControllerBrandCheckException('error')
            }
            TransformStreamDefaultControllerError(this, reason)
          }
          /**
           * Closes the readable side and errors the writable side of the controlled transform stream. This is useful when the
           * transformer only needs to consume a portion of the chunks written to the writable side.
           */
          terminate() {
            if (!IsTransformStreamDefaultController(this)) {
              throw defaultControllerBrandCheckException('terminate')
            }
            TransformStreamDefaultControllerTerminate(this)
          }
        }
        Object.defineProperties(TransformStreamDefaultController.prototype, {
          enqueue: { enumerable: true },
          error: { enumerable: true },
          terminate: { enumerable: true },
          desiredSize: { enumerable: true }
        })
        if (typeof SymbolPolyfill.toStringTag === 'symbol') {
          Object.defineProperty(
            TransformStreamDefaultController.prototype,
            SymbolPolyfill.toStringTag,
            {
              value: 'TransformStreamDefaultController',
              configurable: true
            }
          )
        }
        // Transform Stream Default Controller Abstract Operations
        function IsTransformStreamDefaultController(x) {
          if (!typeIsObject(x)) {
            return false
          }
          if (
            !Object.prototype.hasOwnProperty.call(
              x,
              '_controlledTransformStream'
            )
          ) {
            return false
          }
          return x instanceof TransformStreamDefaultController
        }
        function SetUpTransformStreamDefaultController(
          stream,
          controller,
          transformAlgorithm,
          flushAlgorithm
        ) {
          controller._controlledTransformStream = stream
          stream._transformStreamController = controller
          controller._transformAlgorithm = transformAlgorithm
          controller._flushAlgorithm = flushAlgorithm
        }
        function SetUpTransformStreamDefaultControllerFromTransformer(
          stream,
          transformer
        ) {
          const controller = Object.create(
            TransformStreamDefaultController.prototype
          )
          let transformAlgorithm = (chunk) => {
            try {
              TransformStreamDefaultControllerEnqueue(controller, chunk)
              return promiseResolvedWith(undefined)
            } catch (transformResultE) {
              return promiseRejectedWith(transformResultE)
            }
          }
          let flushAlgorithm = () => promiseResolvedWith(undefined)
          if (transformer.transform !== undefined) {
            transformAlgorithm = (chunk) =>
              transformer.transform(chunk, controller)
          }
          if (transformer.flush !== undefined) {
            flushAlgorithm = () => transformer.flush(controller)
          }
          SetUpTransformStreamDefaultController(
            stream,
            controller,
            transformAlgorithm,
            flushAlgorithm
          )
        }
        function TransformStreamDefaultControllerClearAlgorithms(controller) {
          controller._transformAlgorithm = undefined
          controller._flushAlgorithm = undefined
        }
        function TransformStreamDefaultControllerEnqueue(controller, chunk) {
          const stream = controller._controlledTransformStream
          const readableController = stream._readable._readableStreamController
          if (
            !ReadableStreamDefaultControllerCanCloseOrEnqueue(
              readableController
            )
          ) {
            throw new TypeError(
              'Readable side is not in a state that permits enqueue'
            )
          }
          // We throttle transform invocations based on the backpressure of the ReadableStream, but we still
          // accept TransformStreamDefaultControllerEnqueue() calls.
          try {
            ReadableStreamDefaultControllerEnqueue(readableController, chunk)
          } catch (e) {
            // This happens when readableStrategy.size() throws.
            TransformStreamErrorWritableAndUnblockWrite(stream, e)
            throw stream._readable._storedError
          }
          const backpressure =
            ReadableStreamDefaultControllerHasBackpressure(readableController)
          if (backpressure !== stream._backpressure) {
            TransformStreamSetBackpressure(stream, true)
          }
        }
        function TransformStreamDefaultControllerError(controller, e) {
          TransformStreamError(controller._controlledTransformStream, e)
        }
        function TransformStreamDefaultControllerPerformTransform(
          controller,
          chunk
        ) {
          const transformPromise = controller._transformAlgorithm(chunk)
          return transformPromiseWith(transformPromise, undefined, (r) => {
            TransformStreamError(controller._controlledTransformStream, r)
            throw r
          })
        }
        function TransformStreamDefaultControllerTerminate(controller) {
          const stream = controller._controlledTransformStream
          const readableController = stream._readable._readableStreamController
          ReadableStreamDefaultControllerClose(readableController)
          const error = new TypeError('TransformStream terminated')
          TransformStreamErrorWritableAndUnblockWrite(stream, error)
        }
        // TransformStreamDefaultSink Algorithms
        function TransformStreamDefaultSinkWriteAlgorithm(stream, chunk) {
          const controller = stream._transformStreamController
          if (stream._backpressure) {
            const backpressureChangePromise = stream._backpressureChangePromise
            return transformPromiseWith(backpressureChangePromise, () => {
              const writable = stream._writable
              const state = writable._state
              if (state === 'erroring') {
                throw writable._storedError
              }
              return TransformStreamDefaultControllerPerformTransform(
                controller,
                chunk
              )
            })
          }
          return TransformStreamDefaultControllerPerformTransform(
            controller,
            chunk
          )
        }
        function TransformStreamDefaultSinkAbortAlgorithm(stream, reason) {
          // abort() is not called synchronously, so it is possible for abort() to be called when the stream is already
          // errored.
          TransformStreamError(stream, reason)
          return promiseResolvedWith(undefined)
        }
        function TransformStreamDefaultSinkCloseAlgorithm(stream) {
          // stream._readable cannot change after construction, so caching it across a call to user code is safe.
          const readable = stream._readable
          const controller = stream._transformStreamController
          const flushPromise = controller._flushAlgorithm()
          TransformStreamDefaultControllerClearAlgorithms(controller)
          // Return a promise that is fulfilled with undefined on success.
          return transformPromiseWith(
            flushPromise,
            () => {
              if (readable._state === 'errored') {
                throw readable._storedError
              }
              ReadableStreamDefaultControllerClose(
                readable._readableStreamController
              )
            },
            (r) => {
              TransformStreamError(stream, r)
              throw readable._storedError
            }
          )
        }
        // TransformStreamDefaultSource Algorithms
        function TransformStreamDefaultSourcePullAlgorithm(stream) {
          // Invariant. Enforced by the promises returned by start() and pull().
          TransformStreamSetBackpressure(stream, false)
          // Prevent the next pull() call until there is backpressure.
          return stream._backpressureChangePromise
        }
        // Helper functions for the TransformStreamDefaultController.
        function defaultControllerBrandCheckException(name) {
          return new TypeError(
            `TransformStreamDefaultController.prototype.${name} can only be used on a TransformStreamDefaultController`
          )
        }
        // Helper functions for the TransformStream.
        function streamBrandCheckException(name) {
          return new TypeError(
            `TransformStream.prototype.${name} can only be used on a TransformStream`
          )
        }

        exports.ByteLengthQueuingStrategy = ByteLengthQueuingStrategy
        exports.CountQueuingStrategy = CountQueuingStrategy
        exports.ReadableByteStreamController = ReadableByteStreamController
        exports.ReadableStream = ReadableStream
        exports.ReadableStreamBYOBReader = ReadableStreamBYOBReader
        exports.ReadableStreamBYOBRequest = ReadableStreamBYOBRequest
        exports.ReadableStreamDefaultController =
          ReadableStreamDefaultController
        exports.ReadableStreamDefaultReader = ReadableStreamDefaultReader
        exports.TransformStream = TransformStream
        exports.TransformStreamDefaultController =
          TransformStreamDefaultController
        exports.WritableStream = WritableStream
        exports.WritableStreamDefaultController =
          WritableStreamDefaultController
        exports.WritableStreamDefaultWriter = WritableStreamDefaultWriter

        Object.defineProperty(exports, '__esModule', { value: true })
      })
      //# sourceMappingURL=ponyfill.es2018.js.map

      /***/
    },

    /***/ 2940: /***/ (module) => {
      // Returns a wrapper function that returns a wrapped callback
      // The wrapper function should do some stuff, and return a
      // presumably different callback function.
      // This makes sure that own properties are retained, so that
      // decorations and such are not lost along the way.
      module.exports = wrappy
      function wrappy(fn, cb) {
        if (fn && cb) return wrappy(fn)(cb)

        if (typeof fn !== 'function')
          throw new TypeError('need wrapper function')

        Object.keys(fn).forEach(function (k) {
          wrapper[k] = fn[k]
        })

        return wrapper

        function wrapper() {
          var args = new Array(arguments.length)
          for (var i = 0; i < args.length; i++) {
            args[i] = arguments[i]
          }
          var ret = fn.apply(this, args)
          var cb = args[args.length - 1]
          if (typeof ret === 'function' && ret !== cb) {
            Object.keys(cb).forEach(function (k) {
              ret[k] = cb[k]
            })
          }
          return ret
        }
      }

      /***/
    },

    /***/ 2877: /***/ (module) => {
      module.exports = eval('require')('encoding')

      /***/
    },

    /***/ 9081: /***/ (module) => {
      module.exports = eval('require')('stream/web')

      /***/
    },

    /***/ 8010: /***/ (
      __unused_webpack_module,
      __unused_webpack_exports,
      __nccwpck_require__
    ) => {
      /* c8 ignore start */
      // 64 KiB (same size chrome slice theirs blob into Uint8array's)
      const POOL_SIZE = 65536

      if (!globalThis.ReadableStream) {
        try {
          Object.assign(globalThis, __nccwpck_require__(9081))
        } catch (error) {
          // TODO: Remove when only supporting node >= 16.5.0
          Object.assign(globalThis, __nccwpck_require__(1452))
        }
      }

      try {
        const { Blob } = __nccwpck_require__(4293)
        if (Blob && !Blob.prototype.stream) {
          Blob.prototype.stream = function name(params) {
            let position = 0
            const blob = this

            return new ReadableStream({
              type: 'bytes',
              async pull(ctrl) {
                const chunk = blob.slice(
                  position,
                  Math.min(blob.size, position + POOL_SIZE)
                )
                const buffer = await chunk.arrayBuffer()
                position += buffer.byteLength
                ctrl.enqueue(new Uint8Array(buffer))

                if (position === blob.size) {
                  ctrl.close()
                }
              }
            })
          }
        }
      } catch (error) {}
      /* c8 ignore end */

      /***/
    },

    /***/ 2357: /***/ (module) => {
      'use strict'
      module.exports = require('assert')

      /***/
    },

    /***/ 4293: /***/ (module) => {
      'use strict'
      module.exports = require('buffer')

      /***/
    },

    /***/ 8614: /***/ (module) => {
      'use strict'
      module.exports = require('events')

      /***/
    },

    /***/ 5747: /***/ (module) => {
      'use strict'
      module.exports = require('fs')

      /***/
    },

    /***/ 8605: /***/ (module) => {
      'use strict'
      module.exports = require('http')

      /***/
    },

    /***/ 7211: /***/ (module) => {
      'use strict'
      module.exports = require('https')

      /***/
    },

    /***/ 1631: /***/ (module) => {
      'use strict'
      module.exports = require('net')

      /***/
    },

    /***/ 2087: /***/ (module) => {
      'use strict'
      module.exports = require('os')

      /***/
    },

    /***/ 5622: /***/ (module) => {
      'use strict'
      module.exports = require('path')

      /***/
    },

    /***/ 2413: /***/ (module) => {
      'use strict'
      module.exports = require('stream')

      /***/
    },

    /***/ 4016: /***/ (module) => {
      'use strict'
      module.exports = require('tls')

      /***/
    },

    /***/ 8835: /***/ (module) => {
      'use strict'
      module.exports = require('url')

      /***/
    },

    /***/ 1669: /***/ (module) => {
      'use strict'
      module.exports = require('util')

      /***/
    },

    /***/ 8761: /***/ (module) => {
      'use strict'
      module.exports = require('zlib')

      /***/
    }

    /******/
  }
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {}
  /******/
  /******/ // The require function
  /******/ function __nccwpck_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId]
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {}
      /******/
    })
    /******/
    /******/ // Execute the module function
    /******/ var threw = true
    /******/ try {
      /******/ __webpack_modules__[moduleId].call(
        module.exports,
        module,
        module.exports,
        __nccwpck_require__
      )
      /******/ threw = false
      /******/
    } finally {
      /******/ if (threw) delete __webpack_module_cache__[moduleId]
      /******/
    }
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/make namespace object */
  /******/ ;(() => {
    /******/ // define __esModule on exports
    /******/ __nccwpck_require__.r = (exports) => {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        })
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true })
      /******/
    }
    /******/
  })()
  /******/
  /******/ /* webpack/runtime/compat */
  /******/
  /******/ if (typeof __nccwpck_require__ !== 'undefined')
    __nccwpck_require__.ab =
      __dirname +
      '/' /************************************************************************/
  var __webpack_exports__ = {}
  // This entry need to be wrapped in an IIFE because it need to be in strict mode.
  ;(() => {
    'use strict'
    // ESM COMPAT FLAG
    __nccwpck_require__.r(__webpack_exports__)

    // EXTERNAL MODULE: ./node_modules/@actions/core/lib/core.js
    var core = __nccwpck_require__(2186)
    // EXTERNAL MODULE: ./node_modules/@actions/github/lib/github.js
    var github = __nccwpck_require__(5438)
    // EXTERNAL MODULE: ./node_modules/gray-matter/index.js
    var gray_matter = __nccwpck_require__(5382)
    // EXTERNAL MODULE: ./node_modules/toml/index.js
    var toml = __nccwpck_require__(4920) // CONCATENATED MODULE: ./src/seocheck.mjs
    function fails(frontmatter, elem, condition) {
      if (!frontmatter.data[elem]) {
        return true
      } else if (frontmatter.data[elem].length <= 0) {
        return true
      } else if (frontmatter.data[elem].length > condition) {
        return true
      }
    }

    function check(file) {
      const errors = []
      const conditions = []
      conditions.push({
        title: 'maxTitleLength',
        attribute: 'title',
        value: parseInt(core.getInput('max_title_length'))
      })
      conditions.push({
        title: 'maxDescriptionLength',
        attribute: 'description',
        value: parseInt(core.getInput('max_description_length'))
      })
      conditions.push({
        title: 'maxSlugLength',
        attribute: 'slug',
        value: parseInt(core.getInput('max_slug_length'))
      })

      let frontmatter
      if (file.content.startsWith('+++')) {
        frontmatter = gray_matter(file.content, {
          language: 'toml',
          delims: '+++',
          engines: {
            toml: toml.parse.bind(toml)
          }
        })
      } else {
        frontmatter = gray_matter(file.content)
      }

      if (
        !frontmatter ||
        !frontmatter.data ||
        Object.keys(frontmatter.data).length <= 0
      ) {
        core.info(`No valid frontmatter in ${file.name}`)
        return {
          file: file.name,
          ok: false
        }
      }

      for (const condition of conditions) {
        if (fails(frontmatter, condition.attribute, condition.value)) {
          const actual = frontmatter.data[condition.attribute]
            ? frontmatter.data[condition.attribute].length
            : 0
          errors.push({
            title: condition.title,
            attribute: condition.attribute,
            expected: condition.value,
            actual: actual
          })
        }
      }

      if (errors.length > 0) {
        return {
          file: file.name,
          ok: false,
          errors: errors
        }
      } else {
        return {
          file: file.name,
          ok: true
        }
      }
    }

    // EXTERNAL MODULE: external "http"
    var external_http_ = __nccwpck_require__(8605)
    // EXTERNAL MODULE: external "https"
    var external_https_ = __nccwpck_require__(7211)
    // EXTERNAL MODULE: external "zlib"
    var external_zlib_ = __nccwpck_require__(8761)
    // EXTERNAL MODULE: external "stream"
    var external_stream_ = __nccwpck_require__(2413)
    // EXTERNAL MODULE: ./node_modules/data-uri-to-buffer/dist/src/index.js
    var src = __nccwpck_require__(2371)
    // EXTERNAL MODULE: external "util"
    var external_util_ = __nccwpck_require__(1669)
    // EXTERNAL MODULE: ./node_modules/fetch-blob/streams.cjs
    var streams = __nccwpck_require__(8010) // CONCATENATED MODULE: ./node_modules/fetch-blob/index.js
    // TODO (jimmywarting): in the feature use conditional loading with top level await (requires 14.x)
    // Node has recently added whatwg stream into core

    /** @typedef {import('buffer').Blob} NodeBlob} */

    // 64 KiB (same size chrome slice theirs blob into Uint8array's)
    const POOL_SIZE = 65536

    /** @param {(Blob | NodeBlob | Uint8Array)[]} parts */
    async function* toIterator(parts, clone = true) {
      for (let part of parts) {
        if ('stream' in part) {
          yield* part.stream()
        } else if (ArrayBuffer.isView(part)) {
          if (clone) {
            let position = part.byteOffset
            let end = part.byteOffset + part.byteLength
            while (position !== end) {
              const size = Math.min(end - position, POOL_SIZE)
              const chunk = part.buffer.slice(position, position + size)
              position += chunk.byteLength
              yield new Uint8Array(chunk)
            }
          } else {
            yield part
          }
        } else {
          /* c8 ignore start */
          // For blobs that have arrayBuffer but no stream method (nodes buffer.Blob)
          let position = 0
          while (position !== part.size) {
            const chunk = part.slice(
              position,
              Math.min(part.size, position + POOL_SIZE)
            )
            const buffer = await chunk.arrayBuffer()
            position += buffer.byteLength
            yield new Uint8Array(buffer)
          }
          /* c8 ignore end */
        }
      }
    }

    const _Blob = class Blob {
      /** @type {Array.<(Blob|Uint8Array)>} */
      #parts = []
      #type = ''
      #size = 0

      /**
       * The Blob() constructor returns a new Blob object. The content
       * of the blob consists of the concatenation of the values given
       * in the parameter array.
       *
       * @param {*} blobParts
       * @param {{ type?: string }} [options]
       */
      constructor(blobParts = [], options = {}) {
        let size = 0

        const parts = blobParts.map((element) => {
          let part
          if (ArrayBuffer.isView(element)) {
            part = new Uint8Array(
              element.buffer.slice(
                element.byteOffset,
                element.byteOffset + element.byteLength
              )
            )
          } else if (element instanceof ArrayBuffer) {
            part = new Uint8Array(element.slice(0))
          } else if (element instanceof Blob) {
            part = element
          } else {
            part = new TextEncoder().encode(element)
          }

          size += ArrayBuffer.isView(part) ? part.byteLength : part.size
          return part
        })

        const type = options.type === undefined ? '' : String(options.type)

        this.#type = /[^\u0020-\u007E]/.test(type) ? '' : type
        this.#size = size
        this.#parts = parts
      }

      /**
       * The Blob interface's size property returns the
       * size of the Blob in bytes.
       */
      get size() {
        return this.#size
      }

      /**
       * The type property of a Blob object returns the MIME type of the file.
       */
      get type() {
        return this.#type
      }

      /**
       * The text() method in the Blob interface returns a Promise
       * that resolves with a string containing the contents of
       * the blob, interpreted as UTF-8.
       *
       * @return {Promise<string>}
       */
      async text() {
        // More optimized than using this.arrayBuffer()
        // that requires twice as much ram
        const decoder = new TextDecoder()
        let str = ''
        for await (let part of toIterator(this.#parts, false)) {
          str += decoder.decode(part, { stream: true })
        }
        // Remaining
        str += decoder.decode()
        return str
      }

      /**
       * The arrayBuffer() method in the Blob interface returns a
       * Promise that resolves with the contents of the blob as
       * binary data contained in an ArrayBuffer.
       *
       * @return {Promise<ArrayBuffer>}
       */
      async arrayBuffer() {
        // Easier way... Just a unnecessary overhead
        // const view = new Uint8Array(this.size);
        // await this.stream().getReader({mode: 'byob'}).read(view);
        // return view.buffer;

        const data = new Uint8Array(this.size)
        let offset = 0
        for await (const chunk of toIterator(this.#parts, false)) {
          data.set(chunk, offset)
          offset += chunk.length
        }

        return data.buffer
      }

      stream() {
        const it = toIterator(this.#parts, true)

        return new ReadableStream({
          type: 'bytes',
          async pull(ctrl) {
            const chunk = await it.next()
            chunk.done ? ctrl.close() : ctrl.enqueue(chunk.value)
          }
        })
      }

      /**
       * The Blob interface's slice() method creates and returns a
       * new Blob object which contains data from a subset of the
       * blob on which it's called.
       *
       * @param {number} [start]
       * @param {number} [end]
       * @param {string} [type]
       */
      slice(start = 0, end = this.size, type = '') {
        const { size } = this

        let relativeStart =
          start < 0 ? Math.max(size + start, 0) : Math.min(start, size)
        let relativeEnd =
          end < 0 ? Math.max(size + end, 0) : Math.min(end, size)

        const span = Math.max(relativeEnd - relativeStart, 0)
        const parts = this.#parts
        const blobParts = []
        let added = 0

        for (const part of parts) {
          // don't add the overflow to new blobParts
          if (added >= span) {
            break
          }

          const size = ArrayBuffer.isView(part) ? part.byteLength : part.size
          if (relativeStart && size <= relativeStart) {
            // Skip the beginning and change the relative
            // start & end position as we skip the unwanted parts
            relativeStart -= size
            relativeEnd -= size
          } else {
            let chunk
            if (ArrayBuffer.isView(part)) {
              chunk = part.subarray(relativeStart, Math.min(size, relativeEnd))
              added += chunk.byteLength
            } else {
              chunk = part.slice(relativeStart, Math.min(size, relativeEnd))
              added += chunk.size
            }
            blobParts.push(chunk)
            relativeStart = 0 // All next sequential parts should start at 0
          }
        }

        const blob = new Blob([], { type: String(type).toLowerCase() })
        blob.#size = span
        blob.#parts = blobParts

        return blob
      }

      get [Symbol.toStringTag]() {
        return 'Blob'
      }

      static [Symbol.hasInstance](object) {
        return (
          object &&
          typeof object === 'object' &&
          typeof object.constructor === 'function' &&
          (typeof object.stream === 'function' ||
            typeof object.arrayBuffer === 'function') &&
          /^(Blob|File)$/.test(object[Symbol.toStringTag])
        )
      }
    }

    Object.defineProperties(_Blob.prototype, {
      size: { enumerable: true },
      type: { enumerable: true },
      slice: { enumerable: true }
    })

    /** @type {typeof globalThis.Blob} */
    const Blob = _Blob
    /* harmony default export */ const fetch_blob = Blob // CONCATENATED MODULE: ./node_modules/node-fetch/src/errors/base.js

    class FetchBaseError extends Error {
      constructor(message, type) {
        super(message)
        // Hide custom error implementation details from end-users
        Error.captureStackTrace(this, this.constructor)

        this.type = type
      }

      get name() {
        return this.constructor.name
      }

      get [Symbol.toStringTag]() {
        return this.constructor.name
      }
    } // CONCATENATED MODULE: ./node_modules/node-fetch/src/errors/fetch-error.js

    /**
     * @typedef {{ address?: string, code: string, dest?: string, errno: number, info?: object, message: string, path?: string, port?: number, syscall: string}} SystemError
     */

    /**
     * FetchError interface for operational errors
     */
    class FetchError extends FetchBaseError {
      /**
       * @param  {string} message -      Error message for human
       * @param  {string} [type] -        Error type for machine
       * @param  {SystemError} [systemError] - For Node.js system error
       */
      constructor(message, type, systemError) {
        super(message, type)
        // When err.type is `system`, err.erroredSysCall contains system error and err.code contains system error code
        if (systemError) {
          // eslint-disable-next-line no-multi-assign
          this.code = this.errno = systemError.code
          this.erroredSysCall = systemError.syscall
        }
      }
    } // CONCATENATED MODULE: external "crypto"

    const external_crypto_namespaceObject = require('crypto') // CONCATENATED MODULE: ./node_modules/node-fetch/src/utils/is.js
    /**
     * Is.js
     *
     * Object type checks.
     */

    const NAME = Symbol.toStringTag

    /**
     * Check if `obj` is a URLSearchParams object
     * ref: https://github.com/node-fetch/node-fetch/issues/296#issuecomment-307598143
     *
     * @param  {*} obj
     * @return {boolean}
     */
    const isURLSearchParameters = (object) => {
      return (
        typeof object === 'object' &&
        typeof object.append === 'function' &&
        typeof object.delete === 'function' &&
        typeof object.get === 'function' &&
        typeof object.getAll === 'function' &&
        typeof object.has === 'function' &&
        typeof object.set === 'function' &&
        typeof object.sort === 'function' &&
        object[NAME] === 'URLSearchParams'
      )
    }

    /**
     * Check if `object` is a W3C `Blob` object (which `File` inherits from)
     *
     * @param  {*} obj
     * @return {boolean}
     */
    const isBlob = (object) => {
      return (
        typeof object === 'object' &&
        typeof object.arrayBuffer === 'function' &&
        typeof object.type === 'string' &&
        typeof object.stream === 'function' &&
        typeof object.constructor === 'function' &&
        /^(Blob|File)$/.test(object[NAME])
      )
    }

    /**
     * Check if `obj` is a spec-compliant `FormData` object
     *
     * @param {*} object
     * @return {boolean}
     */
    function isFormData(object) {
      return (
        typeof object === 'object' &&
        typeof object.append === 'function' &&
        typeof object.set === 'function' &&
        typeof object.get === 'function' &&
        typeof object.getAll === 'function' &&
        typeof object.delete === 'function' &&
        typeof object.keys === 'function' &&
        typeof object.values === 'function' &&
        typeof object.entries === 'function' &&
        typeof object.constructor === 'function' &&
        object[NAME] === 'FormData'
      )
    }

    /**
     * Check if `obj` is an instance of AbortSignal.
     *
     * @param  {*} obj
     * @return {boolean}
     */
    const isAbortSignal = (object) => {
      return (
        typeof object === 'object' &&
        (object[NAME] === 'AbortSignal' || object[NAME] === 'EventTarget')
      )
    } // CONCATENATED MODULE: ./node_modules/node-fetch/src/utils/form-data.js

    const carriage = '\r\n'
    const dashes = '-'.repeat(2)
    const carriageLength = Buffer.byteLength(carriage)

    /**
     * @param {string} boundary
     */
    const getFooter = (boundary) =>
      `${dashes}${boundary}${dashes}${carriage.repeat(2)}`

    /**
     * @param {string} boundary
     * @param {string} name
     * @param {*} field
     *
     * @return {string}
     */
    function getHeader(boundary, name, field) {
      let header = ''

      header += `${dashes}${boundary}${carriage}`
      header += `Content-Disposition: form-data; name="${name}"`

      if (isBlob(field)) {
        header += `; filename="${field.name}"${carriage}`
        header += `Content-Type: ${field.type || 'application/octet-stream'}`
      }

      return `${header}${carriage.repeat(2)}`
    }

    /**
     * @return {string}
     */
    const getBoundary = () =>
      (0, external_crypto_namespaceObject.randomBytes)(8).toString('hex')

    /**
     * @param {FormData} form
     * @param {string} boundary
     */
    async function* formDataIterator(form, boundary) {
      for (const [name, value] of form) {
        yield getHeader(boundary, name, value)

        if (isBlob(value)) {
          yield* value.stream()
        } else {
          yield value
        }

        yield carriage
      }

      yield getFooter(boundary)
    }

    /**
     * @param {FormData} form
     * @param {string} boundary
     */
    function getFormDataLength(form, boundary) {
      let length = 0

      for (const [name, value] of form) {
        length += Buffer.byteLength(getHeader(boundary, name, value))

        length += isBlob(value) ? value.size : Buffer.byteLength(String(value))

        length += carriageLength
      }

      length += Buffer.byteLength(getFooter(boundary))

      return length
    } // CONCATENATED MODULE: ./node_modules/node-fetch/src/body.js

    /**
     * Body.js
     *
     * Body interface provides common methods for Request and Response
     */

    const INTERNALS = Symbol('Body internals')

    /**
     * Body mixin
     *
     * Ref: https://fetch.spec.whatwg.org/#body
     *
     * @param   Stream  body  Readable stream
     * @param   Object  opts  Response options
     * @return  Void
     */
    class Body {
      constructor(body, { size = 0 } = {}) {
        let boundary = null

        if (body === null) {
          // Body is undefined or null
          body = null
        } else if (isURLSearchParameters(body)) {
          // Body is a URLSearchParams
          body = Buffer.from(body.toString())
        } else if (isBlob(body)) {
          // Body is blob
        } else if (Buffer.isBuffer(body)) {
          // Body is Buffer
        } else if (external_util_.types.isAnyArrayBuffer(body)) {
          // Body is ArrayBuffer
          body = Buffer.from(body)
        } else if (ArrayBuffer.isView(body)) {
          // Body is ArrayBufferView
          body = Buffer.from(body.buffer, body.byteOffset, body.byteLength)
        } else if (body instanceof external_stream_) {
          // Body is stream
        } else if (isFormData(body)) {
          // Body is an instance of formdata-node
          boundary = `NodeFetchFormDataBoundary${getBoundary()}`
          body = external_stream_.Readable.from(
            formDataIterator(body, boundary)
          )
        } else {
          // None of the above
          // coerce to string then buffer
          body = Buffer.from(String(body))
        }

        this[INTERNALS] = {
          body,
          boundary,
          disturbed: false,
          error: null
        }
        this.size = size

        if (body instanceof external_stream_) {
          body.on('error', (error_) => {
            const error =
              error_ instanceof FetchBaseError
                ? error_
                : new FetchError(
                    `Invalid response body while trying to fetch ${this.url}: ${error_.message}`,
                    'system',
                    error_
                  )
            this[INTERNALS].error = error
          })
        }
      }

      get body() {
        return this[INTERNALS].body
      }

      get bodyUsed() {
        return this[INTERNALS].disturbed
      }

      /**
       * Decode response as ArrayBuffer
       *
       * @return  Promise
       */
      async arrayBuffer() {
        const { buffer, byteOffset, byteLength } = await consumeBody(this)
        return buffer.slice(byteOffset, byteOffset + byteLength)
      }

      /**
       * Return raw response as Blob
       *
       * @return Promise
       */
      async blob() {
        const ct =
          (this.headers && this.headers.get('content-type')) ||
          (this[INTERNALS].body && this[INTERNALS].body.type) ||
          ''
        const buf = await this.buffer()

        return new fetch_blob([buf], {
          type: ct
        })
      }

      /**
       * Decode response as json
       *
       * @return  Promise
       */
      async json() {
        const buffer = await consumeBody(this)
        return JSON.parse(buffer.toString())
      }

      /**
       * Decode response as text
       *
       * @return  Promise
       */
      async text() {
        const buffer = await consumeBody(this)
        return buffer.toString()
      }

      /**
       * Decode response as buffer (non-spec api)
       *
       * @return  Promise
       */
      buffer() {
        return consumeBody(this)
      }
    }

    // In browsers, all properties are enumerable.
    Object.defineProperties(Body.prototype, {
      body: { enumerable: true },
      bodyUsed: { enumerable: true },
      arrayBuffer: { enumerable: true },
      blob: { enumerable: true },
      json: { enumerable: true },
      text: { enumerable: true }
    })

    /**
     * Consume and convert an entire Body to a Buffer.
     *
     * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
     *
     * @return Promise
     */
    async function consumeBody(data) {
      if (data[INTERNALS].disturbed) {
        throw new TypeError(`body used already for: ${data.url}`)
      }

      data[INTERNALS].disturbed = true

      if (data[INTERNALS].error) {
        throw data[INTERNALS].error
      }

      let { body } = data

      // Body is null
      if (body === null) {
        return Buffer.alloc(0)
      }

      // Body is blob
      if (isBlob(body)) {
        body = external_stream_.Readable.from(body.stream())
      }

      // Body is buffer
      if (Buffer.isBuffer(body)) {
        return body
      }

      /* c8 ignore next 3 */
      if (!(body instanceof external_stream_)) {
        return Buffer.alloc(0)
      }

      // Body is stream
      // get ready to actually consume the body
      const accum = []
      let accumBytes = 0

      try {
        for await (const chunk of body) {
          if (data.size > 0 && accumBytes + chunk.length > data.size) {
            const error = new FetchError(
              `content size at ${data.url} over limit: ${data.size}`,
              'max-size'
            )
            body.destroy(error)
            throw error
          }

          accumBytes += chunk.length
          accum.push(chunk)
        }
      } catch (error) {
        const error_ =
          error instanceof FetchBaseError
            ? error
            : new FetchError(
                `Invalid response body while trying to fetch ${data.url}: ${error.message}`,
                'system',
                error
              )
        throw error_
      }

      if (body.readableEnded === true || body._readableState.ended === true) {
        try {
          if (accum.every((c) => typeof c === 'string')) {
            return Buffer.from(accum.join(''))
          }

          return Buffer.concat(accum, accumBytes)
        } catch (error) {
          throw new FetchError(
            `Could not create Buffer from response body for ${data.url}: ${error.message}`,
            'system',
            error
          )
        }
      } else {
        throw new FetchError(
          `Premature close of server response while trying to fetch ${data.url}`
        )
      }
    }

    /**
     * Clone body given Res/Req instance
     *
     * @param   Mixed   instance       Response or Request instance
     * @param   String  highWaterMark  highWaterMark for both PassThrough body streams
     * @return  Mixed
     */
    const clone = (instance, highWaterMark) => {
      let p1
      let p2
      let { body } = instance

      // Don't allow cloning a used body
      if (instance.bodyUsed) {
        throw new Error('cannot clone body after it is used')
      }

      // Check that body is a stream and not form-data object
      // note: we can't clone the form-data object without having it as a dependency
      if (
        body instanceof external_stream_ &&
        typeof body.getBoundary !== 'function'
      ) {
        // Tee instance body
        p1 = new external_stream_.PassThrough({ highWaterMark })
        p2 = new external_stream_.PassThrough({ highWaterMark })
        body.pipe(p1)
        body.pipe(p2)
        // Set instance body to teed body and return the other teed body
        instance[INTERNALS].body = p1
        body = p2
      }

      return body
    }

    /**
     * Performs the operation "extract a `Content-Type` value from |object|" as
     * specified in the specification:
     * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
     *
     * This function assumes that instance.body is present.
     *
     * @param {any} body Any options.body input
     * @returns {string | null}
     */
    const extractContentType = (body, request) => {
      // Body is null or undefined
      if (body === null) {
        return null
      }

      // Body is string
      if (typeof body === 'string') {
        return 'text/plain;charset=UTF-8'
      }

      // Body is a URLSearchParams
      if (isURLSearchParameters(body)) {
        return 'application/x-www-form-urlencoded;charset=UTF-8'
      }

      // Body is blob
      if (isBlob(body)) {
        return body.type || null
      }

      // Body is a Buffer (Buffer, ArrayBuffer or ArrayBufferView)
      if (
        Buffer.isBuffer(body) ||
        external_util_.types.isAnyArrayBuffer(body) ||
        ArrayBuffer.isView(body)
      ) {
        return null
      }

      // Detect form data input from form-data module
      if (body && typeof body.getBoundary === 'function') {
        return `multipart/form-data;boundary=${body.getBoundary()}`
      }

      if (isFormData(body)) {
        return `multipart/form-data; boundary=${request[INTERNALS].boundary}`
      }

      // Body is stream - can't really do much about this
      if (body instanceof external_stream_) {
        return null
      }

      // Body constructor defaults other things to string
      return 'text/plain;charset=UTF-8'
    }

    /**
     * The Fetch Standard treats this as if "total bytes" is a property on the body.
     * For us, we have to explicitly get it with a function.
     *
     * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
     *
     * @param {any} obj.body Body object from the Body instance.
     * @returns {number | null}
     */
    const getTotalBytes = (request) => {
      const { body } = request

      // Body is null or undefined
      if (body === null) {
        return 0
      }

      // Body is Blob
      if (isBlob(body)) {
        return body.size
      }

      // Body is Buffer
      if (Buffer.isBuffer(body)) {
        return body.length
      }

      // Detect form data input from form-data module
      if (body && typeof body.getLengthSync === 'function') {
        return body.hasKnownLength && body.hasKnownLength()
          ? body.getLengthSync()
          : null
      }

      // Body is a spec-compliant form-data
      if (isFormData(body)) {
        return getFormDataLength(request[INTERNALS].boundary)
      }

      // Body is stream
      return null
    }

    /**
     * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
     *
     * @param {Stream.Writable} dest The stream to write to.
     * @param obj.body Body object from the Body instance.
     * @returns {void}
     */
    const writeToStream = (dest, { body }) => {
      if (body === null) {
        // Body is null
        dest.end()
      } else if (isBlob(body)) {
        // Body is Blob
        external_stream_.Readable.from(body.stream()).pipe(dest)
      } else if (Buffer.isBuffer(body)) {
        // Body is buffer
        dest.write(body)
        dest.end()
      } else {
        // Body is stream
        body.pipe(dest)
      }
    } // CONCATENATED MODULE: ./node_modules/node-fetch/src/headers.js

    /**
     * Headers.js
     *
     * Headers class offers convenient helpers
     */

    const validateHeaderName =
      typeof external_http_.validateHeaderName === 'function'
        ? external_http_.validateHeaderName
        : (name) => {
            if (!/^[\^`\-\w!#$%&'*+.|~]+$/.test(name)) {
              const error = new TypeError(
                `Header name must be a valid HTTP token [${name}]`
              )
              Object.defineProperty(error, 'code', {
                value: 'ERR_INVALID_HTTP_TOKEN'
              })
              throw error
            }
          }

    const validateHeaderValue =
      typeof external_http_.validateHeaderValue === 'function'
        ? external_http_.validateHeaderValue
        : (name, value) => {
            if (/[^\t\u0020-\u007E\u0080-\u00FF]/.test(value)) {
              const error = new TypeError(
                `Invalid character in header content ["${name}"]`
              )
              Object.defineProperty(error, 'code', {
                value: 'ERR_INVALID_CHAR'
              })
              throw error
            }
          }

    /**
     * @typedef {Headers | Record<string, string> | Iterable<readonly [string, string]> | Iterable<Iterable<string>>} HeadersInit
     */

    /**
     * This Fetch API interface allows you to perform various actions on HTTP request and response headers.
     * These actions include retrieving, setting, adding to, and removing.
     * A Headers object has an associated header list, which is initially empty and consists of zero or more name and value pairs.
     * You can add to this using methods like append() (see Examples.)
     * In all methods of this interface, header names are matched by case-insensitive byte sequence.
     *
     */
    class Headers extends URLSearchParams {
      /**
       * Headers class
       *
       * @constructor
       * @param {HeadersInit} [init] - Response headers
       */
      constructor(init) {
        // Validate and normalize init object in [name, value(s)][]
        /** @type {string[][]} */
        let result = []
        if (init instanceof Headers) {
          const raw = init.raw()
          for (const [name, values] of Object.entries(raw)) {
            result.push(...values.map((value) => [name, value]))
          }
        } else if (init == null) {
          // eslint-disable-line no-eq-null, eqeqeq
          // No op
        } else if (
          typeof init === 'object' &&
          !external_util_.types.isBoxedPrimitive(init)
        ) {
          const method = init[Symbol.iterator]
          // eslint-disable-next-line no-eq-null, eqeqeq
          if (method == null) {
            // Record<ByteString, ByteString>
            result.push(...Object.entries(init))
          } else {
            if (typeof method !== 'function') {
              throw new TypeError('Header pairs must be iterable')
            }

            // Sequence<sequence<ByteString>>
            // Note: per spec we have to first exhaust the lists then process them
            result = [...init]
              .map((pair) => {
                if (
                  typeof pair !== 'object' ||
                  external_util_.types.isBoxedPrimitive(pair)
                ) {
                  throw new TypeError(
                    'Each header pair must be an iterable object'
                  )
                }

                return [...pair]
              })
              .map((pair) => {
                if (pair.length !== 2) {
                  throw new TypeError(
                    'Each header pair must be a name/value tuple'
                  )
                }

                return [...pair]
              })
          }
        } else {
          throw new TypeError(
            "Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)"
          )
        }

        // Validate and lowercase
        result =
          result.length > 0
            ? result.map(([name, value]) => {
                validateHeaderName(name)
                validateHeaderValue(name, String(value))
                return [String(name).toLowerCase(), String(value)]
              })
            : undefined

        super(result)

        // Returning a Proxy that will lowercase key names, validate parameters and sort keys
        // eslint-disable-next-line no-constructor-return
        return new Proxy(this, {
          get(target, p, receiver) {
            switch (p) {
              case 'append':
              case 'set':
                return (name, value) => {
                  validateHeaderName(name)
                  validateHeaderValue(name, String(value))
                  return URLSearchParams.prototype[p].call(
                    target,
                    String(name).toLowerCase(),
                    String(value)
                  )
                }

              case 'delete':
              case 'has':
              case 'getAll':
                return (name) => {
                  validateHeaderName(name)
                  return URLSearchParams.prototype[p].call(
                    target,
                    String(name).toLowerCase()
                  )
                }

              case 'keys':
                return () => {
                  target.sort()
                  return new Set(
                    URLSearchParams.prototype.keys.call(target)
                  ).keys()
                }

              default:
                return Reflect.get(target, p, receiver)
            }
          }
          /* c8 ignore next */
        })
      }

      get [Symbol.toStringTag]() {
        return this.constructor.name
      }

      toString() {
        return Object.prototype.toString.call(this)
      }

      get(name) {
        const values = this.getAll(name)
        if (values.length === 0) {
          return null
        }

        let value = values.join(', ')
        if (/^content-encoding$/i.test(name)) {
          value = value.toLowerCase()
        }

        return value
      }

      forEach(callback, thisArg = undefined) {
        for (const name of this.keys()) {
          Reflect.apply(callback, thisArg, [this.get(name), name, this])
        }
      }

      *values() {
        for (const name of this.keys()) {
          yield this.get(name)
        }
      }

      /**
       * @type {() => IterableIterator<[string, string]>}
       */
      *entries() {
        for (const name of this.keys()) {
          yield [name, this.get(name)]
        }
      }

      [Symbol.iterator]() {
        return this.entries()
      }

      /**
       * Node-fetch non-spec method
       * returning all headers and their values as array
       * @returns {Record<string, string[]>}
       */
      raw() {
        return [...this.keys()].reduce((result, key) => {
          result[key] = this.getAll(key)
          return result
        }, {})
      }

      /**
       * For better console.log(headers) and also to convert Headers into Node.js Request compatible format
       */
      [Symbol.for('nodejs.util.inspect.custom')]() {
        return [...this.keys()].reduce((result, key) => {
          const values = this.getAll(key)
          // Http.request() only supports string as Host header.
          // This hack makes specifying custom Host header possible.
          if (key === 'host') {
            result[key] = values[0]
          } else {
            result[key] = values.length > 1 ? values : values[0]
          }

          return result
        }, {})
      }
    }

    /**
     * Re-shaping object for Web IDL tests
     * Only need to do it for overridden methods
     */
    Object.defineProperties(
      Headers.prototype,
      ['get', 'entries', 'forEach', 'values'].reduce((result, property) => {
        result[property] = { enumerable: true }
        return result
      }, {})
    )

    /**
     * Create a Headers object from an http.IncomingMessage.rawHeaders, ignoring those that do
     * not conform to HTTP grammar productions.
     * @param {import('http').IncomingMessage['rawHeaders']} headers
     */
    function fromRawHeaders(headers = []) {
      return new Headers(
        headers
          // Split into pairs
          .reduce((result, value, index, array) => {
            if (index % 2 === 0) {
              result.push(array.slice(index, index + 2))
            }

            return result
          }, [])
          .filter(([name, value]) => {
            try {
              validateHeaderName(name)
              validateHeaderValue(name, String(value))
              return true
            } catch {
              return false
            }
          })
      )
    } // CONCATENATED MODULE: ./node_modules/node-fetch/src/utils/is-redirect.js

    const redirectStatus = new Set([301, 302, 303, 307, 308])

    /**
     * Redirect code matching
     *
     * @param {number} code - Status code
     * @return {boolean}
     */
    const isRedirect = (code) => {
      return redirectStatus.has(code)
    } // CONCATENATED MODULE: ./node_modules/node-fetch/src/response.js

    /**
     * Response.js
     *
     * Response class provides content decoding
     */

    const response_INTERNALS = Symbol('Response internals')

    /**
     * Response class
     *
     * Ref: https://fetch.spec.whatwg.org/#response-class
     *
     * @param   Stream  body  Readable stream
     * @param   Object  opts  Response options
     * @return  Void
     */
    class Response extends Body {
      constructor(body = null, options = {}) {
        super(body, options)

        // eslint-disable-next-line no-eq-null, eqeqeq, no-negated-condition
        const status = options.status != null ? options.status : 200

        const headers = new Headers(options.headers)

        if (body !== null && !headers.has('Content-Type')) {
          const contentType = extractContentType(body)
          if (contentType) {
            headers.append('Content-Type', contentType)
          }
        }

        this[response_INTERNALS] = {
          type: 'default',
          url: options.url,
          status,
          statusText: options.statusText || '',
          headers,
          counter: options.counter,
          highWaterMark: options.highWaterMark
        }
      }

      get type() {
        return this[response_INTERNALS].type
      }

      get url() {
        return this[response_INTERNALS].url || ''
      }

      get status() {
        return this[response_INTERNALS].status
      }

      /**
       * Convenience property representing if the request ended normally
       */
      get ok() {
        return (
          this[response_INTERNALS].status >= 200 &&
          this[response_INTERNALS].status < 300
        )
      }

      get redirected() {
        return this[response_INTERNALS].counter > 0
      }

      get statusText() {
        return this[response_INTERNALS].statusText
      }

      get headers() {
        return this[response_INTERNALS].headers
      }

      get highWaterMark() {
        return this[response_INTERNALS].highWaterMark
      }

      /**
       * Clone this response
       *
       * @return  Response
       */
      clone() {
        return new Response(clone(this, this.highWaterMark), {
          type: this.type,
          url: this.url,
          status: this.status,
          statusText: this.statusText,
          headers: this.headers,
          ok: this.ok,
          redirected: this.redirected,
          size: this.size
        })
      }

      /**
       * @param {string} url    The URL that the new response is to originate from.
       * @param {number} status An optional status code for the response (e.g., 302.)
       * @returns {Response}    A Response object.
       */
      static redirect(url, status = 302) {
        if (!isRedirect(status)) {
          throw new RangeError(
            'Failed to execute "redirect" on "response": Invalid status code'
          )
        }

        return new Response(null, {
          headers: {
            location: new URL(url).toString()
          },
          status
        })
      }

      static error() {
        const response = new Response(null, { status: 0, statusText: '' })
        response[response_INTERNALS].type = 'error'
        return response
      }

      get [Symbol.toStringTag]() {
        return 'Response'
      }
    }

    Object.defineProperties(Response.prototype, {
      type: { enumerable: true },
      url: { enumerable: true },
      status: { enumerable: true },
      ok: { enumerable: true },
      redirected: { enumerable: true },
      statusText: { enumerable: true },
      headers: { enumerable: true },
      clone: { enumerable: true }
    })

    // EXTERNAL MODULE: external "url"
    var external_url_ = __nccwpck_require__(8835) // CONCATENATED MODULE: ./node_modules/node-fetch/src/utils/get-search.js
    const getSearch = (parsedURL) => {
      if (parsedURL.search) {
        return parsedURL.search
      }

      const lastOffset = parsedURL.href.length - 1
      const hash =
        parsedURL.hash || (parsedURL.href[lastOffset] === '#' ? '#' : '')
      return parsedURL.href[lastOffset - hash.length] === '?' ? '?' : ''
    } // CONCATENATED MODULE: ./node_modules/node-fetch/src/request.js

    /**
     * Request.js
     *
     * Request class contains server only options
     *
     * All spec algorithm step numbers are based on https://fetch.spec.whatwg.org/commit-snapshots/ae716822cb3a61843226cd090eefc6589446c1d2/.
     */

    const request_INTERNALS = Symbol('Request internals')

    /**
     * Check if `obj` is an instance of Request.
     *
     * @param  {*} obj
     * @return {boolean}
     */
    const isRequest = (object) => {
      return (
        typeof object === 'object' &&
        typeof object[request_INTERNALS] === 'object'
      )
    }

    /**
     * Request class
     *
     * Ref: https://fetch.spec.whatwg.org/#request-class
     *
     * @param   Mixed   input  Url or Request instance
     * @param   Object  init   Custom options
     * @return  Void
     */
    class Request extends Body {
      constructor(input, init = {}) {
        let parsedURL

        // Normalize input and force URL to be encoded as UTF-8 (https://github.com/node-fetch/node-fetch/issues/245)
        if (isRequest(input)) {
          parsedURL = new URL(input.url)
        } else {
          parsedURL = new URL(input)
          input = {}
        }

        let method = init.method || input.method || 'GET'
        method = method.toUpperCase()

        // eslint-disable-next-line no-eq-null, eqeqeq
        if (
          (init.body != null || isRequest(input)) &&
          input.body !== null &&
          (method === 'GET' || method === 'HEAD')
        ) {
          throw new TypeError('Request with GET/HEAD method cannot have body')
        }

        const inputBody = init.body
          ? init.body
          : isRequest(input) && input.body !== null
          ? clone(input)
          : null

        super(inputBody, {
          size: init.size || input.size || 0
        })

        const headers = new Headers(init.headers || input.headers || {})

        if (inputBody !== null && !headers.has('Content-Type')) {
          const contentType = extractContentType(inputBody, this)
          if (contentType) {
            headers.append('Content-Type', contentType)
          }
        }

        let signal = isRequest(input) ? input.signal : null
        if ('signal' in init) {
          signal = init.signal
        }

        // eslint-disable-next-line no-eq-null, eqeqeq
        if (signal != null && !isAbortSignal(signal)) {
          throw new TypeError(
            'Expected signal to be an instanceof AbortSignal or EventTarget'
          )
        }

        this[request_INTERNALS] = {
          method,
          redirect: init.redirect || input.redirect || 'follow',
          headers,
          parsedURL,
          signal
        }

        // Node-fetch-only options
        this.follow =
          init.follow === undefined
            ? input.follow === undefined
              ? 20
              : input.follow
            : init.follow
        this.compress =
          init.compress === undefined
            ? input.compress === undefined
              ? true
              : input.compress
            : init.compress
        this.counter = init.counter || input.counter || 0
        this.agent = init.agent || input.agent
        this.highWaterMark = init.highWaterMark || input.highWaterMark || 16384
        this.insecureHTTPParser =
          init.insecureHTTPParser || input.insecureHTTPParser || false
      }

      get method() {
        return this[request_INTERNALS].method
      }

      get url() {
        return (0, external_url_.format)(this[request_INTERNALS].parsedURL)
      }

      get headers() {
        return this[request_INTERNALS].headers
      }

      get redirect() {
        return this[request_INTERNALS].redirect
      }

      get signal() {
        return this[request_INTERNALS].signal
      }

      /**
       * Clone this request
       *
       * @return  Request
       */
      clone() {
        return new Request(this)
      }

      get [Symbol.toStringTag]() {
        return 'Request'
      }
    }

    Object.defineProperties(Request.prototype, {
      method: { enumerable: true },
      url: { enumerable: true },
      headers: { enumerable: true },
      redirect: { enumerable: true },
      clone: { enumerable: true },
      signal: { enumerable: true }
    })

    /**
     * Convert a Request to Node.js http request options.
     *
     * @param   Request  A Request instance
     * @return  Object   The options object to be passed to http.request
     */
    const getNodeRequestOptions = (request) => {
      const { parsedURL } = request[request_INTERNALS]
      const headers = new Headers(request[request_INTERNALS].headers)

      // Fetch step 1.3
      if (!headers.has('Accept')) {
        headers.set('Accept', '*/*')
      }

      // HTTP-network-or-cache fetch steps 2.4-2.7
      let contentLengthValue = null
      if (request.body === null && /^(post|put)$/i.test(request.method)) {
        contentLengthValue = '0'
      }

      if (request.body !== null) {
        const totalBytes = getTotalBytes(request)
        // Set Content-Length if totalBytes is a number (that is not NaN)
        if (typeof totalBytes === 'number' && !Number.isNaN(totalBytes)) {
          contentLengthValue = String(totalBytes)
        }
      }

      if (contentLengthValue) {
        headers.set('Content-Length', contentLengthValue)
      }

      // HTTP-network-or-cache fetch step 2.11
      if (!headers.has('User-Agent')) {
        headers.set('User-Agent', 'node-fetch')
      }

      // HTTP-network-or-cache fetch step 2.15
      if (request.compress && !headers.has('Accept-Encoding')) {
        headers.set('Accept-Encoding', 'gzip,deflate,br')
      }

      let { agent } = request
      if (typeof agent === 'function') {
        agent = agent(parsedURL)
      }

      if (!headers.has('Connection') && !agent) {
        headers.set('Connection', 'close')
      }

      // HTTP-network fetch step 4.2
      // chunked encoding is handled by Node.js

      const search = getSearch(parsedURL)

      // Manually spread the URL object instead of spread syntax
      const requestOptions = {
        path: parsedURL.pathname + search,
        pathname: parsedURL.pathname,
        hostname: parsedURL.hostname,
        protocol: parsedURL.protocol,
        port: parsedURL.port,
        hash: parsedURL.hash,
        search: parsedURL.search,
        query: parsedURL.query,
        href: parsedURL.href,
        method: request.method,
        headers: headers[Symbol.for('nodejs.util.inspect.custom')](),
        insecureHTTPParser: request.insecureHTTPParser,
        agent
      }

      return requestOptions
    } // CONCATENATED MODULE: ./node_modules/node-fetch/src/errors/abort-error.js

    /**
     * AbortError interface for cancelled requests
     */
    class AbortError extends FetchBaseError {
      constructor(message, type = 'aborted') {
        super(message, type)
      }
    } // CONCATENATED MODULE: ./node_modules/node-fetch/src/index.js

    /**
     * Index.js
     *
     * a request API compatible with window.fetch
     *
     * All spec algorithm step numbers are based on https://fetch.spec.whatwg.org/commit-snapshots/ae716822cb3a61843226cd090eefc6589446c1d2/.
     */

    const supportedSchemas = new Set(['data:', 'http:', 'https:'])

    /**
     * Fetch function
     *
     * @param   {string | URL | import('./request').default} url - Absolute url or Request instance
     * @param   {*} [options_] - Fetch options
     * @return  {Promise<import('./response').default>}
     */
    async function fetch(url, options_) {
      return new Promise((resolve, reject) => {
        // Build request object
        const request = new Request(url, options_)
        const options = getNodeRequestOptions(request)
        if (!supportedSchemas.has(options.protocol)) {
          throw new TypeError(
            `node-fetch cannot load ${url}. URL scheme "${options.protocol.replace(
              /:$/,
              ''
            )}" is not supported.`
          )
        }

        if (options.protocol === 'data:') {
          const data = src(request.url)
          const response = new Response(data, {
            headers: { 'Content-Type': data.typeFull }
          })
          resolve(response)
          return
        }

        // Wrap http.request into fetch
        const send = (
          options.protocol === 'https:' ? external_https_ : external_http_
        ).request
        const { signal } = request
        let response = null

        const abort = () => {
          const error = new AbortError('The operation was aborted.')
          reject(error)
          if (
            request.body &&
            request.body instanceof external_stream_.Readable
          ) {
            request.body.destroy(error)
          }

          if (!response || !response.body) {
            return
          }

          response.body.emit('error', error)
        }

        if (signal && signal.aborted) {
          abort()
          return
        }

        const abortAndFinalize = () => {
          abort()
          finalize()
        }

        // Send request
        const request_ = send(options)

        if (signal) {
          signal.addEventListener('abort', abortAndFinalize)
        }

        const finalize = () => {
          request_.abort()
          if (signal) {
            signal.removeEventListener('abort', abortAndFinalize)
          }
        }

        request_.on('error', (error) => {
          reject(
            new FetchError(
              `request to ${request.url} failed, reason: ${error.message}`,
              'system',
              error
            )
          )
          finalize()
        })

        fixResponseChunkedTransferBadEnding(request_, (error) => {
          response.body.destroy(error)
        })

        /* c8 ignore next 18 */
        if (process.version < 'v14') {
          // Before Node.js 14, pipeline() does not fully support async iterators and does not always
          // properly handle when the socket close/end events are out of order.
          request_.on('socket', (s) => {
            let endedWithEventsCount
            s.prependListener('end', () => {
              endedWithEventsCount = s._eventsCount
            })
            s.prependListener('close', (hadError) => {
              // if end happened before close but the socket didn't emit an error, do it now
              if (
                response &&
                endedWithEventsCount < s._eventsCount &&
                !hadError
              ) {
                const error = new Error('Premature close')
                error.code = 'ERR_STREAM_PREMATURE_CLOSE'
                response.body.emit('error', error)
              }
            })
          })
        }

        request_.on('response', (response_) => {
          request_.setTimeout(0)
          const headers = fromRawHeaders(response_.rawHeaders)

          // HTTP fetch step 5
          if (isRedirect(response_.statusCode)) {
            // HTTP fetch step 5.2
            const location = headers.get('Location')

            // HTTP fetch step 5.3
            const locationURL =
              location === null ? null : new URL(location, request.url)

            // HTTP fetch step 5.5
            switch (request.redirect) {
              case 'error':
                reject(
                  new FetchError(
                    `uri requested responds with a redirect, redirect mode is set to error: ${request.url}`,
                    'no-redirect'
                  )
                )
                finalize()
                return
              case 'manual':
                // Node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
                if (locationURL !== null) {
                  headers.set('Location', locationURL)
                }

                break
              case 'follow': {
                // HTTP-redirect fetch step 2
                if (locationURL === null) {
                  break
                }

                // HTTP-redirect fetch step 5
                if (request.counter >= request.follow) {
                  reject(
                    new FetchError(
                      `maximum redirect reached at: ${request.url}`,
                      'max-redirect'
                    )
                  )
                  finalize()
                  return
                }

                // HTTP-redirect fetch step 6 (counter increment)
                // Create a new Request object.
                const requestOptions = {
                  headers: new Headers(request.headers),
                  follow: request.follow,
                  counter: request.counter + 1,
                  agent: request.agent,
                  compress: request.compress,
                  method: request.method,
                  body: request.body,
                  signal: request.signal,
                  size: request.size
                }

                // HTTP-redirect fetch step 9
                if (
                  response_.statusCode !== 303 &&
                  request.body &&
                  options_.body instanceof external_stream_.Readable
                ) {
                  reject(
                    new FetchError(
                      'Cannot follow redirect with body being a readable stream',
                      'unsupported-redirect'
                    )
                  )
                  finalize()
                  return
                }

                // HTTP-redirect fetch step 11
                if (
                  response_.statusCode === 303 ||
                  ((response_.statusCode === 301 ||
                    response_.statusCode === 302) &&
                    request.method === 'POST')
                ) {
                  requestOptions.method = 'GET'
                  requestOptions.body = undefined
                  requestOptions.headers.delete('content-length')
                }

                // HTTP-redirect fetch step 15
                resolve(fetch(new Request(locationURL, requestOptions)))
                finalize()
                return
              }

              default:
                return reject(
                  new TypeError(
                    `Redirect option '${request.redirect}' is not a valid value of RequestRedirect`
                  )
                )
            }
          }

          // Prepare response
          if (signal) {
            response_.once('end', () => {
              signal.removeEventListener('abort', abortAndFinalize)
            })
          }

          let body = (0, external_stream_.pipeline)(
            response_,
            new external_stream_.PassThrough(),
            reject
          )
          // see https://github.com/nodejs/node/pull/29376
          if (process.version < 'v12.10') {
            response_.on('aborted', abortAndFinalize)
          }

          const responseOptions = {
            url: request.url,
            status: response_.statusCode,
            statusText: response_.statusMessage,
            headers,
            size: request.size,
            counter: request.counter,
            highWaterMark: request.highWaterMark
          }

          // HTTP-network fetch step 12.1.1.3
          const codings = headers.get('Content-Encoding')

          // HTTP-network fetch step 12.1.1.4: handle content codings

          // in following scenarios we ignore compression support
          // 1. compression support is disabled
          // 2. HEAD request
          // 3. no Content-Encoding header
          // 4. no content response (204)
          // 5. content not modified response (304)
          if (
            !request.compress ||
            request.method === 'HEAD' ||
            codings === null ||
            response_.statusCode === 204 ||
            response_.statusCode === 304
          ) {
            response = new Response(body, responseOptions)
            resolve(response)
            return
          }

          // For Node v6+
          // Be less strict when decoding compressed responses, since sometimes
          // servers send slightly invalid responses that are still accepted
          // by common browsers.
          // Always using Z_SYNC_FLUSH is what cURL does.
          const zlibOptions = {
            flush: external_zlib_.Z_SYNC_FLUSH,
            finishFlush: external_zlib_.Z_SYNC_FLUSH
          }

          // For gzip
          if (codings === 'gzip' || codings === 'x-gzip') {
            body = (0, external_stream_.pipeline)(
              body,
              external_zlib_.createGunzip(zlibOptions),
              reject
            )
            response = new Response(body, responseOptions)
            resolve(response)
            return
          }

          // For deflate
          if (codings === 'deflate' || codings === 'x-deflate') {
            // Handle the infamous raw deflate response from old servers
            // a hack for old IIS and Apache servers
            const raw = (0, external_stream_.pipeline)(
              response_,
              new external_stream_.PassThrough(),
              reject
            )
            raw.once('data', (chunk) => {
              // See http://stackoverflow.com/questions/37519828
              body =
                (chunk[0] & 0x0f) === 0x08
                  ? (0, external_stream_.pipeline)(
                      body,
                      external_zlib_.createInflate(),
                      reject
                    )
                  : (0, external_stream_.pipeline)(
                      body,
                      external_zlib_.createInflateRaw(),
                      reject
                    )

              response = new Response(body, responseOptions)
              resolve(response)
            })
            return
          }

          // For br
          if (codings === 'br') {
            body = (0, external_stream_.pipeline)(
              body,
              external_zlib_.createBrotliDecompress(),
              reject
            )
            response = new Response(body, responseOptions)
            resolve(response)
            return
          }

          // Otherwise, use response as-is
          response = new Response(body, responseOptions)
          resolve(response)
        })

        writeToStream(request_, request)
      })
    }

    function fixResponseChunkedTransferBadEnding(request, errorCallback) {
      const LAST_CHUNK = Buffer.from('0\r\n\r\n')

      let isChunkedTransfer = false
      let properLastChunkReceived = false
      let previousChunk

      request.on('response', (response) => {
        const { headers } = response
        isChunkedTransfer =
          headers['transfer-encoding'] === 'chunked' &&
          !headers['content-length']
      })

      request.on('socket', (socket) => {
        const onSocketClose = () => {
          if (isChunkedTransfer && !properLastChunkReceived) {
            const error = new Error('Premature close')
            error.code = 'ERR_STREAM_PREMATURE_CLOSE'
            errorCallback(error)
          }
        }

        socket.prependListener('close', onSocketClose)

        request.on('abort', () => {
          socket.removeListener('close', onSocketClose)
        })

        socket.on('data', (buf) => {
          properLastChunkReceived =
            Buffer.compare(buf.slice(-5), LAST_CHUNK) === 0

          // Sometimes final 0-length chunk and end of message code are in separate packets
          if (!properLastChunkReceived && previousChunk) {
            properLastChunkReceived =
              Buffer.compare(
                previousChunk.slice(-3),
                LAST_CHUNK.slice(0, 3)
              ) === 0 &&
              Buffer.compare(buf.slice(-2), LAST_CHUNK.slice(3)) === 0
          }

          previousChunk = buf
        })
      })
    } // CONCATENATED MODULE: ./src/getFile.mjs

    function getErrorText(res) {
      try {
        return res.text()
      } catch (err) {
        return res.statusText
      }
    }

    async function getError(res, path) {
      const errorText = await getErrorText(res)
      const error = new Error(
        `GitHub raw download error (${path} - ${res.status}): ${errorText}`
      )

      error.status = res.status
      error.headers = res.headers.raw()

      return error
    }

    async function getRawFileFromGitHub(rawUrl) {
      const options = {}
      if (process.env.GITHUB_TOKEN) {
        options.headers = {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
        }
      }
      const res = await fetch(rawUrl, options)
      if (res.ok) return res.text()
      throw await getError(res, rawUrl)
    }

    async function getFile(file) {
      let rawUrl = file.raw_url.replace(
        'https://github.com',
        'https://raw.githubusercontent.com'
      )
      rawUrl = rawUrl.replace('/raw/', '/')

      return {
        name: file.filename,
        content: await getRawFileFromGitHub(rawUrl)
      }
    }

    // EXTERNAL MODULE: ./node_modules/glob-to-regexp/index.js
    var glob_to_regexp = __nccwpck_require__(7117) // CONCATENATED MODULE: ./src/listFiles.mjs
    async function listFiles_files() {
      const context = github.context
      const pullNumber = context.payload.pull_request.number
      const includes = core.getInput('includes')
      const excludes = core.getInput('excludes')

      const octokit = github.getOctokit(process.env.GITHUB_TOKEN)
      const { data: list } = await octokit.rest.pulls.listFiles({
        ...context.repo,
        pull_number: pullNumber
      })

      const mdx = list.filter((f) => {
        const reIncluded = glob_to_regexp(includes, { extended: true })
        const reExcluded = glob_to_regexp(excludes, { extended: true })

        return (
          reIncluded.test(f.filename) === true &&
          reExcluded.test(f.filename) === false
        )
      })

      const filePromises = mdx.map(getFile)
      return Promise.all(filePromises)
    } // CONCATENATED MODULE: ./src/comment.mjs

    function comment(results) {
      let str = ''
      results.forEach((r) => {
        str += `\n${r.ok ? ':white_check_mark:' : ':x:'}: ${r.file}`
        if (r.errors) {
          r.errors.map((e) => {
            str += `\n- :small_red_triangle: **${e.title}**: _${e.attribute}_ has **${e.actual}** characters. Should be less than **${e.expected}**`
          })
          str += '\n\n'
        }
      })
      return str.toString()
    } // CONCATENATED MODULE: ./src/index.mjs

    async function run() {
      const octokit = github.getOctokit(process.env.GITHUB_TOKEN)
      const context = github.context
      let hasErrors = false

      try {
        core.info(`Starting Markdown SEO Check ...`)
        const files = await listFiles_files()
        if (!files || files.length === 0) {
          return
        }
        const results = files.map(check).filter((i) => i.file)
        hasErrors = results.filter((r) => r.errors && r.errors.length > 0)
        const message = comment(results)
        if (message && message.length > 0) {
          await octokit.rest.issues.createComment({
            ...context.repo,
            issue_number: context.payload.number,
            body: `SEO Check: \n\n${message}`
          })
        }

        if (hasErrors && hasErrors.length > 0) {
          core.warning(hasErrors)
          core.setFailed('Check failed.')
        }
      } catch (error) {
        core.error(error)
        core.setFailed(error.message)
      }
    }

    run()
  })()

  module.exports = __webpack_exports__
  /******/
})()
//# sourceMappingURL=index.js.map
