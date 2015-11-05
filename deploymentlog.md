Last login: Tue Nov  3 18:58:42 on ttys001


~ ❯❯❯ desktop
~/desktop ❯❯❯ git clone https://github.com/USER/2015-10-shortly-deploy.git
Cloning into '2015-10-shortly-deploy'...
Username for 'https://github.com': USER
Password for 'https://USER@github.com': 
remote: Counting objects: 47, done.
remote: Compressing objects: 100% (42/42), done.
remote: Total 47 (delta 1), reused 47 (delta 1), pack-reused 0
Unpacking objects: 100% (47/47), done.
Checking connectivity... done.
~/desktop ❯❯❯ cd 2015-10-shortly-deploy
~/d/2015-10-shortly-deploy git:master ❯❯❯ git remote -v
origin  https://github.com/USER/2015-10-shortly-deploy.git (fetch)
origin  https://github.com/USER/2015-10-shortly-deploy.git (push)
~/d/2015-10-shortly-deploy git:master ❯❯❯ git remote add DhiMalo https://github.com/DhiMalo/2015-10-shortly-deploy.git
~/d/2015-10-shortly-deploy git:master ❯❯❯ git remote -v
DhiMalo https://github.com/DhiMalo/2015-10-shortly-deploy.git (fetch)
DhiMalo https://github.com/DhiMalo/2015-10-shortly-deploy.git (push)
origin  https://github.com/USER/2015-10-shortly-deploy.git (fetch)
origin  https://github.com/USER/2015-10-shortly-deploy.git (push)
~/d/2015-10-shortly-deploy git:master ❯❯❯   npm install -g git+https://github.com/SOURCE/liberator.git
^R[D|[[C\for 'https://github.com': -
^[[C^[[C^[[C^[[C^[[C^[[C^[[C^[[C^[[C^[[C^[[C^[[C^[[D^[[D^[[D^[[D^[[D^[[D^[[D^[[D^R[D^[[D^[[-
^[[C^[[C^[[C^[[C^[[C^[[C^[[C^[[C^[[C^[[C^[[C^[[C^[[D^[[D^[[D^[[D^[[D^[[D^[[D^[[D^R[D^[[D^[\
^[[C^[[C^[[C^[[C^[[C^[[C^[[C^[[C^[[C^[[C^[[C^[[C^[[D^[[D^[[D^[[D^[[D^[[D^[[D^[[D^R[D^[[|
^[[C^[[C^[[C^[[C^[[C^[[C^[[C^[[C^[[C^[[C^[[C^[[C^[[D^[[D^[[D^[[D^[[D^[[D^[[D^[[D^R[D^[/
^[[C^[[C^[[C^[[C^[[C^[[C^[[C^[[C^[[C^[[C^[[C^[[C^[[D^[[D^[[D^[[D^[[D^[[D^[[D^[[D^R[-
^[[C^[[C^[[C^[[C^[[C^[[C^[[C^[[C^[[C^[[C^[[C^[[C^[[D^[[D^[[D^[[D^[[D^[[D^[[D^[[D^R\
^R[C^[[C^[[C^[[C^[[C^[[C^[[C^[[C^[[C^[[C^[[C^[[C^[[D^[[D^[[D^[[D^[[D^[[D^[[D^[|D
^R[C^[[C^[[C^[[C^[[C^[[C^[[C^[[C^[[C^[[C^[[C^[[C^[[D^[[D^[[D^[[D^[[D^[[D^[[D^[/
^C[C^[[C^[[C^[[C^[[C^[[C^[[C^[[C^[[C^[[C^[[C^[[C^[[D^[[D^[[D^[[D^[[D^[[D^[[-
~/d/2015-10-shortly-deploy git:master ❯❯❯   npm install -g git+https://github.com/SOURCE/liberator.git
\\ername for 'https://github.com': |
\assword for 'https://USER@github.com': |
^C[C\ame for 'https://github.com': /
~/d/2015-10-shortly-deploy git:master ❯❯❯   npm install -g git+https://github.com/SOURCE/liberator.git
^R[B/ame for 'https://github.com': -
^R[A^[[|
^C[A^[/
~/d/2015-10-shortly-deploy git:master ❯❯❯                                     ⏎
~/d/2015-10-shortly-deploy git:master ❯❯❯ ls                                  ⏎
Gruntfile.js     deploy.sh        public           test
app              lib              server-config.js views
db               package.json     server.js
~/d/2015-10-shortly-deploy git:master ❯❯❯ pwd
/Users/student/desktop/2015-10-shortly-deploy
~/d/2015-10-shortly-deploy git:master ❯❯❯ npm install
npm ERR! Darwin 14.3.0
npm ERR! argv "node" "/usr/local/bin/npm" "install"
npm ERR! node v0.12.0
npm ERR! npm  v2.5.1
npm ERR! code ETARGET

npm ERR! notarget No compatible version found: sqlite3@'>=3.8.10 <3.9.0'
npm ERR! notarget Valid install targets:
npm ERR! notarget ["2.0.0","2.0.1","2.0.2","2.0.3","2.0.4","2.0.5","2.0.6","2.0.7","2.0.8","2.0.9","2.0.10","2.0.11","2.0.12","2.0.13","2.0.14","2.0.15","2.0.16","2.0.17","2.0.18","2.1.0","2.1.1","2.1.2","2.1.3","2.1.4","2.1.5","2.1.7","2.1.8","2.1.9","2.1.10","2.1.11","2.1.12","2.1.13","2.1.14","2.1.15","2.1.16","2.1.17","2.1.18","2.1.19","2.2.0","2.2.1","2.2.2","2.2.3","2.2.4","2.2.6","2.2.7","3.0.0","3.0.1","3.0.2","3.0.4","3.0.5","3.0.6","3.0.7","3.0.8","3.0.9","3.0.10","3.1.0","3.1.1"]
npm ERR! notarget 
npm ERR! notarget This is most likely not a problem with npm itself.
npm ERR! notarget In most cases you or one of your dependencies are requesting
npm ERR! notarget a package version that doesn't exist.

npm ERR! Please include the following file with any support request:
npm ERR!     /Users/student/Desktop/2015-10-shortly-deploy/npm-debug.log
~/d/2015-10-shortly-deploy git:master ❯❯❯ npm -v                            ⏎ ◼
2.5.1
~/d/2015-10-shortly-deploy git:master ❯❯❯ node -v                             ◼
v0.12.0
~/d/2015-10-shortly-deploy git:master ❯❯❯ npm install -g                      ◼
npm ERR! Darwin 14.3.0
npm ERR! argv "node" "/usr/local/bin/npm" "install" "-g"
npm ERR! node v0.12.0
npm ERR! npm  v2.5.1
npm ERR! code ETARGET

npm ERR! notarget No compatible version found: sqlite3@'>=3.8.10 <3.9.0'
npm ERR! notarget Valid install targets:
npm ERR! notarget ["2.0.0","2.0.1","2.0.2","2.0.3","2.0.4","2.0.5","2.0.6","2.0.7","2.0.8","2.0.9","2.0.10","2.0.11","2.0.12","2.0.13","2.0.14","2.0.15","2.0.16","2.0.17","2.0.18","2.1.0","2.1.1","2.1.2","2.1.3","2.1.4","2.1.5","2.1.7","2.1.8","2.1.9","2.1.10","2.1.11","2.1.12","2.1.13","2.1.14","2.1.15","2.1.16","2.1.17","2.1.18","2.1.19","2.2.0","2.2.1","2.2.2","2.2.3","2.2.4","2.2.6","2.2.7","3.0.0","3.0.1","3.0.2","3.0.4","3.0.5","3.0.6","3.0.7","3.0.8","3.0.9","3.0.10","3.1.0","3.1.1"]
npm ERR! notarget 
npm ERR! notarget This is most likely not a problem with npm itself.
npm ERR! notarget In most cases you or one of your dependencies are requesting
npm ERR! notarget a package version that doesn't exist.

npm ERR! Please include the following file with any support request:
npm ERR!     /Users/student/Desktop/2015-10-shortly-deploy/npm-debug.log
~/d/2015-10-shortly-deploy git:master ❯❯❯ ls                                ⏎ ◼
Gruntfile.js     deploy.sh        package.json     server.js
app              lib              public           test
db               npm-debug.log    server-config.js views
~/d/2015-10-shortly-deploy git:master ❯❯❯ npm install                         ◼
npm ERR! Darwin 14.3.0
npm ERR! argv "node" "/usr/local/bin/npm" "install"
npm ERR! node v0.12.0
npm ERR! npm  v2.5.1
npm ERR! code ETARGET

npm ERR! notarget No compatible version found: sqlite3@'>=3.8.10 <3.9.0'
npm ERR! notarget Valid install targets:
npm ERR! notarget ["2.0.0","2.0.1","2.0.2","2.0.3","2.0.4","2.0.5","2.0.6","2.0.7","2.0.8","2.0.9","2.0.10","2.0.11","2.0.12","2.0.13","2.0.14","2.0.15","2.0.16","2.0.17","2.0.18","2.1.0","2.1.1","2.1.2","2.1.3","2.1.4","2.1.5","2.1.7","2.1.8","2.1.9","2.1.10","2.1.11","2.1.12","2.1.13","2.1.14","2.1.15","2.1.16","2.1.17","2.1.18","2.1.19","2.2.0","2.2.1","2.2.2","2.2.3","2.2.4","2.2.6","2.2.7","3.0.0","3.0.1","3.0.2","3.0.4","3.0.5","3.0.6","3.0.7","3.0.8","3.0.9","3.0.10","3.1.0","3.1.1"]
npm ERR! notarget 
npm ERR! notarget This is most likely not a problem with npm itself.
npm ERR! notarget In most cases you or one of your dependencies are requesting
npm ERR! notarget a package version that doesn't exist.

npm ERR! Please include the following file with any support request:
npm ERR!     /Users/student/Desktop/2015-10-shortly-deploy/npm-debug.log
~/d/2015-10-shortly-deploy git:master ❯❯❯ npm install                       ⏎ ◼
npm WARN engine hawk@0.10.2: wanted: {"node":"0.8.x"} (current: {"node":"0.12.0","npm":"2.5.1"})
npm WARN engine sntp@0.1.4: wanted: {"node":"0.8.x"} (current: {"node":"0.12.0","npm":"2.5.1"})
npm WARN engine hoek@0.7.6: wanted: {"node":"0.8.x"} (current: {"node":"0.12.0","npm":"2.5.1"})
npm WARN engine boom@0.3.8: wanted: {"node":"0.8.x"} (current: {"node":"0.12.0","npm":"2.5.1"})
npm WARN engine cryptiles@0.1.3: wanted: {"node":"0.8.x"} (current: {"node":"0.12.0","npm":"2.5.1"})
npm WARN engine hawk@0.10.2: wanted: {"node":"0.8.x"} (current: {"node":"0.12.0","npm":"2.5.1"})
npm WARN engine hawk@0.10.2: wanted: {"node":"0.8.x"} (current: {"node":"0.12.0","npm":"2.5.1"})
npm WARN engine boom@0.3.8: wanted: {"node":"0.8.x"} (current: {"node":"0.12.0","npm":"2.5.1"})
npm WARN engine hoek@0.7.6: wanted: {"node":"0.8.x"} (current: {"node":"0.12.0","npm":"2.5.1"})
npm WARN engine sntp@0.1.4: wanted: {"node":"0.8.x"} (current: {"node":"0.12.0","npm":"2.5.1"})
npm WARN engine cryptiles@0.1.3: wanted: {"node":"0.8.x"} (current: {"node":"0.12.0","npm":"2.5.1"})
npm WARN engine boom@0.3.8: wanted: {"node":"0.8.x"} (current: {"node":"0.12.0","npm":"2.5.1"})
npm WARN engine hoek@0.7.6: wanted: {"node":"0.8.x"} (current: {"node":"0.12.0","npm":"2.5.1"})
npm WARN engine cryptiles@0.1.3: wanted: {"node":"0.8.x"} (current: {"node":"0.12.0","npm":"2.5.1"})
npm WARN engine sntp@0.1.4: wanted: {"node":"0.8.x"} (current: {"node":"0.12.0","npm":"2.5.1"})
-
> kerberos@0.0.11 install /Users/student/Desktop/2015-10-shortly-deploy/node_modules/mongoose/node_modules/mongodb/node_modules/kerberos
> (node-gyp rebuild 2> builderror.log) || (exit 0)

  CXX(target) Release/obj.target/kerberos/lib/kerberos.o
  CXX(target) Release/obj.target/kerberos/lib/worker.o
  CC(target) Release/obj.target/kerberos/lib/kerberosgss.o
  CC(target) Release/obj.target/kerberos/lib/base64.o
  CXX(target) Release/obj.target/kerberos/lib/kerberos_context.o
  SOLINK_MODULE(target) Release/kerberos.node
  SOLINK_MODULE(target) Release/kerberos.node: Finished

> bson@0.2.22 install /Users/student/Desktop/2015-10-shortly-deploy/node_modules/mongoose/node_modules/mongodb/node_modules/bson
> (node-gyp rebuild 2> builderror.log) || (exit 0)

  CXX(target) Release/obj.target/bson/ext/bson.o
  SOLINK_MODULE(target) Release/bson.node
  SOLINK_MODULE(target) Release/bson.node: Finished

> sqlite3@3.1.1 install /Users/student/Desktop/2015-10-shortly-deploy/node_modules/sqlite3
> node-pre-gyp install --fallback-to-build

[sqlite3] Success: "/Users/student/Desktop/2015-10-shortly-deploy/node_modules/sqlite3/lib/binding/node-v14-darwin-x64/node_sqlite3.node" is installed via remote
bcrypt-nodejs@0.0.3 node_modules/bcrypt-nodejs

grunt-contrib-concat@0.3.0 node_modules/grunt-contrib-concat

express-partials@0.2.0 node_modules/express-partials

grunt-shell@0.6.4 node_modules/grunt-shell
└── chalk@0.3.0 (ansi-styles@0.2.0, has-color@0.1.7)

ejs@0.8.8 node_modules/ejs

chai@1.10.0 node_modules/chai
├── assertion-error@1.0.0
└── deep-eql@0.1.3 (type-detect@0.1.1)

grunt-contrib-cssmin@0.9.0 node_modules/grunt-contrib-cssmin
├── chalk@0.4.0 (has-color@0.1.7, ansi-styles@1.0.0, strip-ansi@0.1.1)
├── clean-css@2.1.8 (commander@2.1.0)
└── maxmin@0.1.0 (pretty-bytes@0.1.2, gzip-size@0.1.1)

supertest@0.10.0 node_modules/supertest
├── methods@0.1.0
└── superagent@0.17.0 (methods@0.0.1, extend@1.2.1, cookiejar@1.3.0, qs@0.6.5, debug@0.7.4, emitter-component@1.0.0, reduce-component@1.0.1, mime@1.2.5, formidable@1.0.14)

bluebird@1.0.8 node_modules/bluebird

request@2.65.0 node_modules/request
├── aws-sign2@0.6.0
├── forever-agent@0.6.1
├── caseless@0.11.0
├── stringstream@0.0.5
├── tunnel-agent@0.4.1
├── oauth-sign@0.8.0
├── isstream@0.1.2
├── json-stringify-safe@5.0.1
├── extend@3.0.0
├── node-uuid@1.4.3
├── combined-stream@1.0.5 (delayed-stream@1.0.0)
├── qs@5.2.0
├── form-data@1.0.0-rc3 (async@1.5.0)
├── mime-types@2.1.7 (mime-db@1.19.0)
├── tough-cookie@2.2.0
├── http-signature@0.11.0 (assert-plus@0.1.5, asn1@0.1.11, ctype@0.5.3)
├── bl@1.0.0 (readable-stream@2.0.4)
├── har-validator@2.0.2 (pinkie-promise@1.0.0, commander@2.9.0, chalk@1.1.1, is-my-json-valid@2.12.2)
└── hawk@3.1.0 (cryptiles@2.0.5, sntp@1.0.9, boom@2.10.1, hoek@2.16.3)

mocha@1.21.5 node_modules/mocha
├── escape-string-regexp@1.0.2
├── diff@1.0.8
├── growl@1.8.1
├── commander@2.3.0
├── debug@2.0.0 (ms@0.6.2)
├── mkdirp@0.5.0 (minimist@0.0.8)
├── glob@3.2.3 (inherits@2.0.1, graceful-fs@2.0.3, minimatch@0.2.14)
└── jade@0.26.3 (commander@0.6.1, mkdirp@0.3.0)

grunt-mocha-test@0.10.2 node_modules/grunt-mocha-test
├── hooker@0.2.3
├── fs-extra@0.8.1 (jsonfile@1.1.1, rimraf@2.2.8, ncp@0.4.2, mkdirp@0.3.5)
└── mocha@1.18.2 (diff@1.0.7, growl@1.7.0, commander@2.0.0, mkdirp@0.3.5, debug@2.2.0, glob@3.2.3, jade@0.26.3)

grunt-contrib-watch@0.6.1 node_modules/grunt-contrib-watch
├── async@0.2.10
├── tiny-lr-fork@0.0.5 (debug@0.7.4, faye-websocket@0.4.4, noptify@0.0.3, qs@0.5.6)
├── gaze@0.5.2 (globule@0.1.0)
└── lodash@2.4.2

grunt@0.4.5 node_modules/grunt
├── which@1.0.9
├── dateformat@1.0.2-1.2.3
├── eventemitter2@0.4.14
├── getobject@0.1.0
├── rimraf@2.2.8
├── colors@0.6.2
├── async@0.1.22
├── hooker@0.2.3
├── grunt-legacy-util@0.2.0
├── nopt@1.0.10 (abbrev@1.0.7)
├── exit@0.1.2
├── minimatch@0.2.14 (sigmund@1.0.1, lru-cache@2.7.0)
├── glob@3.1.21 (inherits@1.0.2, graceful-fs@1.2.3)
├── lodash@0.9.2
├── coffee-script@1.3.3
├── underscore.string@2.2.1
├── iconv-lite@0.2.11
├── findup-sync@0.1.3 (glob@3.2.11, lodash@2.4.2)
├── grunt-legacy-log@0.1.2 (grunt-legacy-log-utils@0.1.1, underscore.string@2.3.3, lodash@2.4.2)
└── js-yaml@2.0.5 (argparse@0.1.16, esprima@1.0.4)

grunt-contrib-uglify@0.4.1 node_modules/grunt-contrib-uglify
├── chalk@0.4.0 (has-color@0.1.7, ansi-styles@1.0.0, strip-ansi@0.1.1)
├── maxmin@0.1.0 (pretty-bytes@0.1.2, gzip-size@0.1.1)
└── uglify-js@2.5.0 (uglify-to-browserify@1.0.2, async@0.2.10, yargs@3.5.4, source-map@0.5.3)

grunt-contrib-jshint@0.9.2 node_modules/grunt-contrib-jshint
├── hooker@0.2.3
└── jshint@2.4.4 (console-browserify@0.1.6, exit@0.1.2, underscore@1.4.4, minimatch@0.4.0, cli@0.4.5, shelljs@0.1.4, htmlparser2@3.3.0)

forever@0.10.11 node_modules/forever
├── watch@0.8.0
├── colors@0.6.2
├── pkginfo@0.3.0
├── timespan@2.3.0
├── optimist@0.6.1 (wordwrap@0.0.3, minimist@0.0.10)
├── nssocket@0.5.3 (eventemitter2@0.4.14, lazy@1.0.11)
├── utile@0.2.1 (deep-equal@1.0.1, ncp@0.4.2, async@0.2.10, i@0.3.3, mkdirp@0.5.1, rimraf@2.4.3)
├── nconf@0.6.9 (ini@1.3.4, async@0.2.9, optimist@0.6.0)
├── cliff@0.1.8 (eyes@0.1.8, winston@0.6.2)
├── winston@0.7.3 (cycle@1.0.3, stack-trace@0.0.9, eyes@0.1.8, async@0.2.10, request@2.16.6)
├── forever-monitor@1.2.3 (watch@0.5.1, minimatch@0.2.14, utile@0.1.7, ps-tree@0.0.3, broadway@0.2.10)
└── flatiron@0.3.11 (optimist@0.6.0, director@1.1.10, prompt@0.2.11, broadway@0.2.9)

bookshelf@0.6.12 node_modules/bookshelf
├── trigger-then@0.3.0
├── inflection@1.2.7
├── backbone@1.1.0 (underscore@1.8.3)
├── bluebird@1.2.4
└── lodash@3.10.1

knex@0.5.16 node_modules/knex
├── colors@0.6.2
├── generic-pool-redux@0.1.0
├── mkdirp@0.3.5
├── optimist@0.6.1 (wordwrap@0.0.3, minimist@0.0.10)
├── bluebird@1.2.4
└── lodash@3.10.1

grunt-nodemon@0.2.1 node_modules/grunt-nodemon
└── nodemon@1.0.20 (minimatch@0.2.14, ps-tree@0.0.3, update-notifier@0.1.10)

express@3.4.8 node_modules/express
├── methods@0.1.0
├── merge-descriptors@0.0.1
├── debug@0.8.1
├── range-parser@0.0.4
├── fresh@0.2.0
├── cookie-signature@1.0.1
├── buffer-crc32@0.2.1
├── cookie@0.1.0
├── mkdirp@0.3.5
├── commander@1.3.2 (keypress@0.1.0)
├── send@0.1.4 (mime@1.2.11)
└── connect@2.12.0 (uid2@0.0.3, qs@0.6.6, pause@0.0.1, bytes@0.2.1, batch@0.5.0, raw-body@1.1.2, negotiator@0.3.0, multiparty@2.2.0)

mongoose@3.8.36 node_modules/mongoose
├── regexp-clone@0.0.1
├── sliced@0.0.5
├── muri@1.1.0
├── hooks@0.2.1
├── mpath@0.1.1
├── mpromise@0.4.3
├── ms@0.1.0
├── mquery@1.6.1 (debug@2.2.0, bluebird@2.9.26)
└── mongodb@1.4.38 (readable-stream@2.0.4, kerberos@0.0.11, bson@0.2.22)

sqlite3@3.1.1 node_modules/sqlite3
└── nan@2.1.0
~/d/2015-10-shortly-deploy git:master ❯❯❯ npm install nodemon               ✱ ◼
\
> fsevents@1.0.4 install /Users/student/Desktop/2015-10-shortly-deploy/node_modules/nodemon/node_modules/chokidar/node_modules/fsevents
> node-pre-gyp install --fallback-to-build

[fsevents] Success: "/Users/student/Desktop/2015-10-shortly-deploy/node_modules/nodemon/node_modules/chokidar/node_modules/fsevents/lib/binding/Release/node-v14-darwin-x64/fse.node" is installed via remote
npm WARN prefer global nodemon@1.8.1 should be installed with -g
^[[Anodemon@1.8.1 node_modules/nodemon
├── undefsafe@0.0.3
├── es6-promise@3.0.2
├── debug@2.2.0 (ms@0.7.1)
├── minimatch@3.0.0 (brace-expansion@1.1.1)
├── touch@1.0.0 (nopt@1.0.10)
├── lodash.defaults@3.1.2 (lodash.restparam@3.6.1, lodash.assign@3.2.0)
├── ps-tree@1.0.1 (event-stream@3.3.2)
├── update-notifier@0.5.0 (is-npm@1.0.0, chalk@1.1.1, string-length@1.0.1, repeating@1.1.3, semver-diff@2.0.0, configstore@1.3.0, latest-version@1.0.1)
└── chokidar@1.2.0 (arrify@1.0.0, path-is-absolute@1.0.0, glob-parent@2.0.0, async-each@0.1.6, is-glob@2.0.1, is-binary-path@1.0.1, lodash.flatten@3.0.2, readdirp@2.0.0, anymatch@1.3.0, fsevents@1.0.4)
~/d/2015-10-shortly-deploy git:master ❯❯❯ npm install -g  nodemon           ✱ ◼
-
> fsevents@1.0.4 install /usr/local/lib/node_modules/nodemon/node_modules/chokidar/node_modules/fsevents
> node-pre-gyp install --fallback-to-build

[fsevents] Success: "/usr/local/lib/node_modules/nodemon/node_modules/chokidar/node_modules/fsevents/lib/binding/Release/node-v14-darwin-x64/fse.node" is installed via remote
/usr/local/bin/nodemon -> /usr/local/lib/node_modules/nodemon/bin/nodemon.js
nodemon@1.8.1 /usr/local/lib/node_modules/nodemon
├── undefsafe@0.0.3
├── es6-promise@3.0.2
├── debug@2.2.0 (ms@0.7.1)
├── minimatch@3.0.0 (brace-expansion@1.1.1)
├── touch@1.0.0 (nopt@1.0.10)
├── lodash.defaults@3.1.2 (lodash.restparam@3.6.1, lodash.assign@3.2.0)
├── ps-tree@1.0.1 (event-stream@3.3.2)
├── update-notifier@0.5.0 (is-npm@1.0.0, semver-diff@2.0.0, chalk@1.1.1, string-length@1.0.1, repeating@1.1.3, configstore@1.3.0, latest-version@1.0.1)
└── chokidar@1.2.0 (arrify@1.0.0, path-is-absolute@1.0.0, glob-parent@2.0.0, async-each@0.1.6, is-binary-path@1.0.1, is-glob@2.0.1, lodash.flatten@3.0.2, readdirp@2.0.0, anymatch@1.3.0, fsevents@1.0.4)
~/d/2015-10-shortly-deploy git:master ❯❯❯ npm install -g azure-cli          ✱ ◼
 
> fibers@1.0.7 install /usr/local/lib/node_modules/azure-cli/node_modules/streamline/node_modules/fibers
> node build.js || nodejs build.js

`darwin-x64-v8-3.28` exists; testing
Binary is fine; exiting
/usr/local/bin/azure -> /usr/local/lib/node_modules/azure-cli/bin/azure
azure-cli@0.9.10 /usr/local/lib/node_modules/azure-cli
├── easy-table@0.0.1
├── eyes@0.1.8
├── azure-arm-commerce@0.1.1
├── xmlbuilder@0.4.3
├── azure-asm-subscription@0.10.1
├── through@2.3.4
├── colors@0.6.2
├── swagger-schema-official@2.0.0-a33091a
├── async@1.4.2
├── node-uuid@1.2.0
├── wordwrap@0.0.2
├── azure-gallery@2.0.0-pre.18
├── streamline-streams@0.1.5
├── azure-arm-rediscache@0.0.2
├── mime@1.2.11
├── image-size@0.3.5
├── validator@3.1.0
├── azure-arm-trafficmanager@0.10.2
├── azure-asm-trafficmanager@0.10.3
├── azure-asm-storage@0.10.1
├── azure-arm-apiapp@0.1.3
├── tv4@1.2.7
├── tmp@0.0.25
├── azure-asm-mgmt@0.10.1
├── caller-id@0.1.0 (stack-trace@0.0.9)
├── commander@1.0.4 (keypress@0.1.0)
├── azure-arm-authorization@1.0.0
├── walk@2.3.9 (foreachasync@3.0.0)
├── azure-arm-dns@0.10.1
├── azure-extra@0.1.11
├── underscore@1.4.4
├── readable-stream@1.0.33 (isarray@0.0.1, inherits@2.0.1, string_decoder@0.10.31, core-util-is@1.0.1)
├── tunnel@0.0.2
├── js2xmlparser@1.0.0
├── azure-asm-hdinsight@0.10.2
├── xml2js@0.1.14 (sax@1.1.4)
├── event-stream@3.1.5 (stream-combiner@0.0.4, duplexer@0.1.1, from@0.1.3, pause-stream@0.0.11, map-stream@0.1.0, split@0.2.10)
├── openssl-wrapper@0.2.1 (debug@0.7.4, q@0.9.7)
├── azure-monitoring@0.10.2
├── azure-keyvault@0.10.1 (node-uuid@1.4.3)
├── jsrsasign@4.8.2
├── azure-arm-resource@0.10.3
├── azure-asm-sql@0.10.1
├── azure-asm-sb@0.10.1
├── ssh-key-to-pem@0.11.0 (asn1@0.1.11, ctype@0.5.2)
├── azure-arm-insights@0.10.1
├── azure-asm-website@0.10.1
├── github@0.1.6
├── omelette@0.1.0
├── azure-arm-compute@0.12.0
├── azure-asm-network@0.10.2
├── winston@0.6.2 (cycle@1.0.3, stack-trace@0.0.9, async@0.1.22, pkginfo@0.2.3, request@2.9.203)
├── request@2.52.0 (caseless@0.9.0, forever-agent@0.5.2, aws-sign2@0.5.0, stringstream@0.0.5, tunnel-agent@0.4.1, oauth-sign@0.6.0, isstream@0.1.2, json-stringify-safe@5.0.1, bl@0.9.4, node-uuid@1.4.3, qs@2.3.3, combined-stream@0.0.7, form-data@0.2.0, tough-cookie@2.2.0, http-signature@0.10.1, mime-types@2.0.14, hawk@2.3.1)
├── azure-arm-network@0.10.6
├── jszip@2.5.0 (pako@0.2.8)
├── kuduscript@1.0.2 (commander@1.1.1, streamline@0.4.11)
├── azure-asm-compute@0.11.0
├── azure-common@0.9.13 (dateformat@1.0.2-1.2.3, duplexer@0.1.1, envconf@0.0.4, validator@3.22.2, xml2js@0.2.7, request@2.45.0)
├── azure-arm-website@0.10.0 (azure-common@0.9.12)
├── node-forge@0.6.23
├── moment@2.6.0
├── streamline@0.10.17 (galaxy@0.1.12, source-map@0.1.43, fibers@1.0.7)
├── adal-node@0.1.17 (node-uuid@1.4.1, xmldom@0.1.19, xpath.js@1.0.6, date-utils@1.2.17, jws@3.1.0)
└── azure-storage@0.6.0 (extend@1.2.1, node-uuid@1.4.3, validator@3.22.2, xml2js@0.2.7, request@2.57.0)
~/d/2015-10-shortly-deploy git:master ❯❯❯ azure account download            ✱ ◼
info:    Executing command account download
info:    Launching browser to http://go.microsoft.com/fwlink/?LinkId=254432
help:    Save the downloaded file, then execute the command
help:      account import <file>
info:    account download command OK
~/d/2015-10-shortly-deploy git:master ❯❯❯ azure account download            ✱ ◼
info:    Executing command account download
info:    Launching browser to http://go.microsoft.com/fwlink/?LinkId=254432
help:    Save the downloaded file, then execute the command
help:      account import <file>
info:    account download command OK
~/d/2015-10-shortly-deploy git:master ❯❯❯ azure account download            ✱ ◼
info:    Executing command account download
info:    Launching browser to http://go.microsoft.com/fwlink/?LinkId=254432
help:    Save the downloaded file, then execute the command
help:      account import <file>
info:    account download command OK
~/d/2015-10-shortly-deploy git:master ❯❯❯ azure account import Free Trial-11-4-2015-credentials.publishsettings
info:    Executing command account import
error:   ENOENT, no such file or directory 'Free'
info:    Error information has been recorded to /Users/student/.azure/azure.err
error:   account import command failed

~/d/2015-10-shortly-deploy git:master ❯❯❯ azure account import /Users/student/downloads/Free\Trial-11-4-2015-credentials.publishsettings
info:    Executing command account import
error:   ENOENT, no such file or directory '/Users/student/downloads/FreeTrial-11-4-2015-credentials.publishsettings'
info:    Error information has been recorded to /Users/student/.azure/azure.err
error:   account import command failed

~/d/2015-10-shortly-deploy git:master ❯❯❯ azure account import /Users/student/downloads/FreeTrial-11-4-2015-credentials.publishsettings
info:    Executing command account import
info:    account import command OK
~/d/2015-10-shortly-deploy git:master ❯❯❯ azure account list                ✱ ◼
info:    Executing command account list
data:    Name        Id                                    Current  State
data:    ----------  ------------------------------------  -------  -----
data:    Free Trial  677880d3-7015-4c5a-9107-39d3672e2dd0  true     n/a  
info:    account list command OK
~/d/2015-10-shortly-deploy git:master ❯❯❯ azure account set 677880d3-7015-4c5a-9107-39d3672e2dd0
info:    Executing command account set
info:    Setting subscription to "Free Trial" with id "677880d3-7015-4c5a-9107-39d3672e2dd0".
info:    Changes saved
info:    account set command OK
~/d/2015-10-shortly-deploy git:master ❯❯❯ azure site create ShortyLink.com --git
info:    Executing command site create
+ Getting locations                                                            
+ Getting sites                                                                
+ Getting locations                                                            
help:    Choose a location
  1) West US
  2) North Europe
  3) West Europe
  4) East Asia
  5) Southeast Asia
  6) Central US
  7) Japan West
  8) Japan East
  9) East US 2
  10) North Central US
  11) Brazil South
  12) East US
  13) South Central US
  : 1
info:    Creating a new web site at ShortyLink.com.azurewebsites.net
/error:   Failed to create site                                                
+
error:   Error: The host name shortylink.com.azurewebsites.net is invalid.
info:    Error information has been recorded to /Users/student/.azure/azure.err
error:   site create command failed

~/d/2015-10-shortly-deploy git:master ❯❯❯ azure site create ShortyLink --git
info:    Executing command site create
+ Getting locations                                                            
+ Getting sites                                                                
+ Getting locations                                                            
help:    Choose a location
  1) West US
  2) North Europe
  3) West Europe
  4) East Asia
  5) Southeast Asia
  6) Central US
  7) Japan West
  8) Japan East
  9) East US 2
  10) North Central US
  11) Brazil South
  12) East US
  13) South Central US
  : 1
info:    Creating a new web site at ShortyLink.azurewebsites.net
-info:    Created website at shortylink.azurewebsites.net                      
+
info:    Creating default iisnode.yml file
info:    Initializing remote Azure repository
+ Updating site information                                                    
info:    Remote azure repository initialized
+ Getting site information                                                     
+ Getting user information                                                     
<DELETED>
info:    Executing `git remote add azure https://USER@shortylink.scm.azurewebsites.net/ShortyLink.git`
info:    A new remote, 'azure', has been added to your local git repository
info:    Use git locally to make changes to your site, commit, and then use 'git push azure master' to deploy to Azure
info:    site create command OK
~/d/2015-10-shortly-deploy git:master ❯❯❯ git remote -v                     ✱ ◼
DhiMalo https://github.com/DhiMalo/2015-10-shortly-deploy.git (fetch)
DhiMalo https://github.com/DhiMalo/2015-10-shortly-deploy.git (push)
azure https://USER@shortylink.scm.azurewebsites.net/ShortyLink.git (fetch)
azure https://USER@shortylink.scm.azurewebsites.net/ShortyLink.git (push)
origin  https://github.com/USER/2015-10-shortly-deploy.git (fetch)
origin  https://github.com/USER/2015-10-shortly-deploy.git (push)
~/d/2015-10-shortly-deploy git:master ❯❯❯ azure site appsetting list shortylink
info:    Executing command site appsetting list
+ Getting site config information                                              
data:    Name                          Value  
data:    ----------------------------  -------
data:    WEBSITE_NODE_DEFAULT_VERSION  0.10.32
info:    site appsetting list command OK
~/d/2015-10-shortly-deploy git:master ❯❯❯ azure site appsetting add NODE_ENV=production
info:    Executing command site appsetting add
+ Getting site config information                                              
+ Updating site config information                                             
info:    site appsetting add command OK
~/d/2015-10-shortly-deploy git:master ❯❯❯ azure site appsetting list shortylink
info:    Executing command site appsetting list
+ Getting site config information                                              
data:    Name                          Value     
data:    ----------------------------  ----------
data:    WEBSITE_NODE_DEFAULT_VERSION  0.10.32   
data:    NODE_ENV                      production
info:    site appsetting list command OK
~/d/2015-10-shortly-deploy git:master ❯❯❯ azure site scale mode standard shortylink
info:    Executing command site scale mode
+ Getting site information                                                     
info:    site scale mode command OK
~/d/2015-10-shortly-deploy git:master ❯❯❯ git push azure master             ✱ ◼
<DELETED>
Counting objects: 47, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (43/43), done.
Writing objects: 100% (47/47), 192.33 KiB | 0 bytes/s, done.
Total 47 (delta 1), reused 0 (delta 0)
remote: Updating branch 'master'.
remote: Updating submodules.
remote: Preparing deployment for commit id '8ff92885b5'.
remote: Running custom deployment command...
remote: Running deployment command...
remote: Handling node.js deployment.
remote: KuduSync.NET from: 'D:\home\site\repository' to: 'D:\home\site\wwwroot'
remote: Deleting file: 'hostingstart.html'
remote: Copying file: '.gitignore'
remote: Copying file: '.jshintrc'
remote: Copying file: 'Gruntfile.js'
remote: Copying file: 'package.json'
remote: Copying file: 'server-config.js'
remote: Copying file: 'server.js'
remote: Copying file: 'app\config.js'
remote: Copying file: 'app\collections\links.js'
remote: Copying file: 'app\collections\users.js'
remote: Copying file: 'app\models\link.js'
remote: Copying file: 'app\models\user.js'
remote: Copying file: 'db\.gitkeep'
remote: Copying file: 'lib\request-handler.js'
remote: Copying file: 'lib\utility.js'
remote: Copying file: 'public\redirect_icon.png'
remote: Copying file: 'public\spiffygif_46x46.gif'
remote: Copying file: 'public\style.css'
remote: Copying file: 'public\client\app.js'
remote: Copying file: 'public\client\createLinkView.js'
remote: Copying file: 'public\client\link.js'
remote: Copying file: 'public\client\links.js'
remote: Copying file: 'public\client\linksView.js'
remote: Copying file: 'public\client\linkView.js'
remote: Copying file: 'public\client\router.js'
remote: Copying file: 'public\dist\.gitkeep'
remote: 
remote: Copying file: 'public\lib\backbone.js'
remote: Copying file: 'public\lib\handlebars.js'
remote: Copying file: 'public\lib\jquery.js'
remote: Copying file: 'public\lib\underscore.js'
remote: Copying file: 'test\ServerSpec.js'
remote: Copying file: 'views\index.ejs'
remote: Copying file: 'views\layout.ejs'
remote: Copying file: 'views\login.ejs'
remote: Copying file: 'views\signup.ejs'
remote: Looking for app.js/server.js under site root.
remote: Using start-up script server.js
remote: Generated web.config.
remote: The package.json file does not specify node.js engine version constraints.
remote: The node.js application will run with the default node.js version 0.10.32.
remote: ..
remote: npm ERR! notarget No compatible version found: sqlite3@'>=3.8.10-0 <3.9.0-0'
remote: An error has occurred during web site deployment.
remote: npm ERR! notarget Valid install targets:
remote: npm failed
remote: npm ERR! notarget ["2.0.0","2.0.1","2.0.2","2.0.3","2.0.4","2.0.5","2.0.6","2.0.7","2.0.8","2.0.9","2.0.10","2.0.11","2.0.12","2.0.13","2.0.14","2.0.15","2.0.16","2.0.17","2.0.18","2.1.0","2.1.1","2.1.2","2.1.3","2.1.4","2.1.5","2.1.7","2.1.8","2.1.9","2.1.10","2.1.11","2.1.12","2.1.13","2.1.14","2.1.15","2.1.16","2.1.17","2.1.18","2.1.19","2.2.0","2.2.1","2.2.2","2.2.3","2.2.4","2.2.6","2.2.7","3.0.0","3.0.1","3.0.2","3.0.4","3.0.5","3.0.6","3.0.7","3.0.8","3.0.9","3.0.10","3.1.0","3.1.1"]
remote: npm ERR! notarget 
remote: npm ERR! notarget This is most likely not a problem with npm itself.
remote: npm ERR! notarget In most cases you or one of your dependencies are requesting
remote: npm ERR! notarget a package version that doesn't exist.
remote: 
remote: npm ERR! System Windows_NT 6.2.9200
remote: npm ERR! command "d:\\Program Files (x86)\\nodejs\\0.10.32\\node.exe" "D:\\Program Files (x86)\\npm\\1.4.28\\node_modules\\npm\\bin\\npm-cli.js" "install" "--production"
remote: npm ERR! cwd d:\home\site\wwwroot
remote: npm ERR! node -v v0.10.32
remote: npm ERR! npm -v 1.4.28
remote: npm ERR! code ETARGET
remote: 
remote: Error - Changes committed to remote repository but deployment to website failed.
To https://USER@shortylink.scm.azurewebsites.net/ShortyLink.git
 * [new branch]      master -> master
~/d/2015-10-shortly-deploy git:master ❯❯❯ git push azure master                      ✱ ◼
Password for 'https://USER@shortylink.scm.azurewebsites.net': 
Everything up-to-date
~/d/2015-10-shortly-deploy git:master ❯❯❯ git status                                 ✱ ◼
On branch master
Your branch is up-to-date with 'origin/master'.
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

  modified:   package.json
  modified:   server.js

Untracked files:
  (use "git add <file>..." to include in what will be committed)

  db/shortly.sqlite
  node_modules/

no changes added to commit (use "git add" and/or "git commit -a")
~/d/2015-10-shortly-deploy git:master ❯❯❯ azure site log tail shortylink             ✱ ◼
info:    Executing command site log tail
2015-11-04T23:55:28  Welcome, you are now connected to log-streaming service.
2015-11-04T23:56:28  No new trace in the past 1 min(s).
Wed Nov 04 2015 23:56:43 GMT+0000 (Coordinated Universal Time): Unaught exception: Error: Cannot find module 'express'
    at Function.Module._resolveFilename (module.js:338:15)
    at Function.Module._load (module.js:280:25)
    at Module.require (module.js:364:17)
    at require (module.js:380:17)
    at Object.<anonymous> (D:\home\site\wwwroot\server-config.js:1:77)
    at Module._compile (module.js:456:26)
    at Object.Module._extensions..js (module.js:474:10)
    at Module.load (module.js:356:32)
    at Function.Module._load (module.js:312:12)
    at Module.require (module.js:364:17)
Application has thrown an uncaught exception and is terminated:
Error: Cannot find module 'express'
    at Function.Module._resolveFilename (module.js:338:15)
    at Function.Module._load (module.js:280:25)
    at Module.require (module.js:364:17)
    at require (module.js:380:17)
    at Object.<anonymous> (D:\home\site\wwwroot\server-config.js:1:77)
    at Module._compile (module.js:456:26)
    at Object.Module._extensions..js (module.js:474:10)
    at Module.load (module.js:356:32)
    at Function.Module._load (module.js:312:12)
    at Module.require (module.js:364:17)
Wed Nov 04 2015 23:56:43 GMT+0000 (Coordinated Universal Time): Unaught exception: Error: Cannot find module 'express'
    at Function.Module._resolveFilename (module.js:338:15)
    at Function.Module._load (module.js:280:25)
    at Module.require (module.js:364:17)
    at require (module.js:380:17)
    at Object.<anonymous> (D:\home\site\wwwroot\server-config.js:1:77)
    at Module._compile (module.js:456:26)
    at Object.Module._extensions..js (module.js:474:10)
    at Module.load (module.js:356:32)
    at Function.Module._load (module.js:312:12)
    at Module.require (module.js:364:17)
Application has thrown an uncaught exception and is terminated:
Error: Cannot find module 'express'
    at Function.Module._resolveFilename (module.js:338:15)
    at Function.Module._load (module.js:280:25)
    at Module.require (module.js:364:17)
    at require (module.js:380:17)
    at Object.<anonymous> (D:\home\site\wwwroot\server-config.js:1:77)
    at Module._compile (module.js:456:26)
    at Object.Module._extensions..js (module.js:474:10)
    at Module.load (module.js:356:32)
    at Function.Module._load (module.js:312:12)
    at Module.require (module.js:364:17)
2015-11-04T23:58:29  No new trace in the past 1 min(s).
2015-11-04T23:59:29  No new trace in the past 2 min(s).
2015-11-05T00:00:29  No new trace in the past 3 min(s).
2015-11-05T00:01:29  No new trace in the past 4 min(s).
^C
~/d/2015-10-shortly-deploy git:master ❯❯❯ git status                               ⏎ ✱ ◼
On branch master
Your branch is up-to-date with 'origin/master'.
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

  modified:   package.json
  modified:   server.js

Untracked files:
  (use "git add <file>..." to include in what will be committed)

  db/shortly.sqlite
  node_modules/

no changes added to commit (use "git add" and/or "git commit -a")
~/d/2015-10-shortly-deploy git:master ❯❯❯ git add .                                  ✱ ◼
warning: CRLF will be replaced by LF in node_modules/bcrypt-nodejs/.gitattributes.
The file will have its original line endings in your working directory.
warning: CRLF will be replaced by LF in node_modules/bcrypt-nodejs/.npmignore.
The file will have its original line endings in your working directory.
warning: CRLF will be replaced by LF in node_modules/bcrypt-nodejs/LICENSE.
The file will have its original line endings in your working directory.
warning: CRLF will be replaced by LF in node_modules/bcrypt-nodejs/README.md.
The file will have its original line endings in your working directory.
warning: CRLF will be replaced by LF in node_modules/bcrypt-nodejs/bCrypt.js.
The file will have its original line endings in your working directory.
warning: CRLF will be replaced by LF in node_modules/bcrypt-nodejs/test-async.js.
The file will have its original line endings in your working directory.
warning: CRLF will be replaced by LF in node_modules/bcrypt-nodejs/test-sync.js.
The file will have its original line endings in your working directory.
^C
~/d/2015-10-shortly-deploy git:master ❯❯❯ git status                               ⏎ ✱ ◼
On branch master
Your branch is up-to-date with 'origin/master'.
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

  modified:   package.json
  modified:   server.js

Untracked files:
  (use "git add <file>..." to include in what will be committed)

  db/shortly.sqlite
  node_modules/

no changes added to commit (use "git add" and/or "git commit -a")
~/d/2015-10-shortly-deploy git:master ❯❯❯ git add package.json                       ✱ ◼
~/d/2015-10-shortly-deploy git:master ❯❯❯ git add server.js                        ✚ ✱ ◼
~/d/2015-10-shortly-deploy git:master ❯❯❯ git commit                                 ✚ ◼
[master 977553a] Changed package to rid sqlite err mess
 2 files changed, 3 insertions(+), 1 deletion(-)
~/d/2015-10-shortly-deploy git:master ❯❯❯ git push azure master                      ⬆ ◼
Password for 'https://USER@shortylink.scm.azurewebsites.net': 
Counting objects: 4, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 534 bytes | 0 bytes/s, done.
Total 4 (delta 2), reused 0 (delta 0)
remote: Updating branch 'master'.
remote: Updating submodules.
remote: Preparing deployment for commit id '977553a135'.
remote: Running custom deployment command...
remote: Running deployment command...
remote: Handling node.js deployment.
remote: KuduSync.NET from: 'D:\home\site\repository' to: 'D:\home\site\wwwroot'
remote: Copying file: 'package.json'
remote: Copying file: 'server.js'
remote: Looking for app.js/server.js under site root.
remote: Using start-up script server.js
remote: Generated web.config.
remote: The package.json file does not specify node.js engine version constraints.
remote: The node.js application will run with the default node.js version 0.10.32.
remote: .......................................................................
remote: npm WARN engine cryptiles@2.0.5: wanted: {"node":">=0.10.40"} (current: {"node":"0.10.32","npm":"1.4.28"})
remote: npm WARN engine boom@2.10.1: wanted: {"node":">=0.10.40"} (current: {"node":"0.10.32","npm":"1.4.28"})
remote: npm WARN engine hoek@2.16.3: wanted: {"node":">=0.10.40"} (current: {"node":"0.10.32","npm":"1.4.28"})
remote: .................
remote: npm WARN engine hawk@0.10.2: wanted: {"node":"0.8.x"} (current: {"node":"0.10.32","npm":"1.4.28"})
remote: ..............
remote: npm WARN engine cryptiles@0.1.3: wanted: {"node":"0.8.x"} (current: {"node":"0.10.32","npm":"1.4.28"})
remote: npm WARN engine sntp@0.1.4: wanted: {"node":"0.8.x"} (current: {"node":"0.10.32","npm":"1.4.28"})
remote: npm WARN engine hoek@0.7.6: wanted: {"node":"0.8.x"} (current: {"node":"0.10.32","npm":"1.4.28"})
remote: npm WARN engine boom@0.3.8: wanted: {"node":"0.8.x"} (current: {"node":"0.10.32","npm":"1.4.28"})
remote: npm WARN engine hawk@0.10.2: wanted: {"node":"0.8.x"} (current: {"node":"0.10.32","npm":"1.4.28"})
remote: ..
remote: npm WARN engine boom@0.3.8: wanted: {"node":"0.8.x"} (current: {"node":"0.10.32","npm":"1.4.28"})
remote: npm WARN engine hoek@0.7.6: wanted: {"node":"0.8.x"} (current: {"node":"0.10.32","npm":"1.4.28"})
remote: npm WARN engine cryptiles@0.1.3: wanted: {"node":"0.8.x"} (current: {"node":"0.10.32","npm":"1.4.28"})
remote: npm WARN engine sntp@0.1.4: wanted: {"node":"0.8.x"} (current: {"node":"0.10.32","npm":"1.4.28"})
remote: npm WARN engine hawk@0.10.2: wanted: {"node":"0.8.x"} (current: {"node":"0.10.32","npm":"1.4.28"})
remote: npm WARN engine sntp@0.1.4: wanted: {"node":"0.8.x"} (current: {"node":"0.10.32","npm":"1.4.28"})
remote: npm WARN engine hoek@0.7.6: wanted: {"node":"0.8.x"} (current: {"node":"0.10.32","npm":"1.4.28"})
remote: npm WARN engine boom@0.3.8: wanted: {"node":"0.8.x"} (current: {"node":"0.10.32","npm":"1.4.28"})
remote: npm WARN engine cryptiles@0.1.3: wanted: {"node":"0.8.x"} (current: {"node":"0.10.32","npm":"1.4.28"})
remote: ..
remote: 
remote: > kerberos@0.0.11 install d:\home\site\wwwroot\node_modules\mongoose\node_modules\mongodb\node_modules\kerberos
remote: > (node-gyp rebuild 2> builderror.log) || (exit 0)
remote: 
remote: 
remote: d:\home\site\wwwroot\node_modules\mongoose\node_modules\mongodb\node_modules\kerberos>node "c:\Program Files (x86)\npm\1.4.28\node_modules\npm\bin\node-gyp-bin\\..\..\node_modules\node-gyp\bin\node-gyp.js" rebuild 
remote: ...................
remote: 
remote: > bson@0.2.22 install d:\home\site\wwwroot\node_modules\mongoose\node_modules\mongodb\node_modules\bson
remote: > (node-gyp rebuild 2> builderror.log) || (exit 0)
remote: 
remote: 
remote: d:\home\site\wwwroot\node_modules\mongoose\node_modules\mongodb\node_modules\bson>node "c:\Program Files (x86)\npm\1.4.28\node_modules\npm\bin\node-gyp-bin\\..\..\node_modules\node-gyp\bin\node-gyp.js" rebuild 
remote: ..........................
remote: 
remote: > sqlite3@3.1.1 install d:\home\site\wwwroot\node_modules\sqlite3
remote: > node-pre-gyp install --fallback-to-build
remote: 
remote: ......
remote: [sqlite3] Success: "d:\home\site\wwwroot\node_modules\sqlite3\lib\binding\node-v11-win32-ia32\node_sqlite3.node" is installed via remote
remote: ...
remote: bcrypt-nodejs@0.0.3 node_modules\bcrypt-nodejs
remote: 
remote: grunt-shell@0.6.4 node_modules\grunt-shell
remote: +-- chalk@0.3.0 (has-color@0.1.7, ansi-styles@0.2.0)
remote: 
remote: grunt-contrib-concat@0.3.0 node_modules\grunt-contrib-concat
remote: 
remote: express-partials@0.2.0 node_modules\express-partials
remote: 
remote: ejs@0.8.8 node_modules\ejs
remote: 
remote: grunt-contrib-cssmin@0.9.0 node_modules\grunt-contrib-cssmin
remote: +-- chalk@0.4.0 (ansi-styles@1.0.0, strip-ansi@0.1.1, has-color@0.1.7)
remote: +-- clean-css@2.1.8 (commander@2.1.0)
remote: +-- maxmin@0.1.0 (pretty-bytes@0.1.2, gzip-size@0.1.1)
remote: 
remote: chai@1.10.0 node_modules\chai
remote: +-- assertion-error@1.0.0
remote: +-- deep-eql@0.1.3 (type-detect@0.1.1)
remote: 
remote: bluebird@1.0.8 node_modules\bluebird
remote: 
remote: request@2.65.0 node_modules\request
remote: +-- aws-sign2@0.6.0
remote: +-- forever-agent@0.6.1
remote: +-- caseless@0.11.0
remote: +-- stringstream@0.0.5
remote: +-- tunnel-agent@0.4.1
remote: +-- oauth-sign@0.8.0
remote: +-- isstream@0.1.2
remote: +-- json-stringify-safe@5.0.1
remote: +-- extend@3.0.0
remote: +-- combined-stream@1.0.5 (delayed-stream@1.0.0)
remote: +-- node-uuid@1.4.3
remote: +-- qs@5.2.0
remote: +-- mime-types@2.1.7 (mime-db@1.19.0)
remote: +-- tough-cookie@2.2.0
remote: +-- form-data@1.0.0-rc3 (async@1.5.0)
remote: +-- http-signature@0.11.0 (assert-plus@0.1.5, asn1@0.1.11, ctype@0.5.3)
remote: +-- har-validator@2.0.2 (pinkie-promise@1.0.0, commander@2.9.0, chalk@1.1.1, is-my-json-valid@2.12.2)
remote: +-- bl@1.0.0 (readable-stream@2.0.4)
remote: +-- hawk@3.1.0 (cryptiles@2.0.5, sntp@1.0.9, boom@2.10.1, hoek@2.16.3)
remote: 
remote: mocha@1.21.5 node_modules\mocha
remote: +-- escape-string-regexp@1.0.2
remote: +-- growl@1.8.1
remote: +-- diff@1.0.8
remote: +-- commander@2.3.0
remote: +-- debug@2.0.0 (ms@0.6.2)
remote: +-- mkdirp@0.5.0 (minimist@0.0.8)
remote: +-- glob@3.2.3 (inherits@2.0.1, graceful-fs@2.0.3, minimatch@0.2.14)
remote: +-- jade@0.26.3 (commander@0.6.1, mkdirp@0.3.0)
remote: 
remote: grunt-contrib-watch@0.6.1 node_modules\grunt-contrib-watch
remote: +-- async@0.2.10
remote: +-- tiny-lr-fork@0.0.5 (debug@0.7.4, faye-websocket@0.4.4, noptify@0.0.3, qs@0.5.6)
remote: +-- gaze@0.5.2 (globule@0.1.0)
remote: ??-- lodash@2.4.2
remote: 
remote: grunt-mocha-test@0.10.2 node_modules\grunt-mocha-test
remote: +-- hooker@0.2.3
remote: +-- fs-extra@0.8.1 (jsonfile@1.1.1, rimraf@2.2.8, ncp@0.4.2, mkdirp@0.3.5)
remote: +-- mocha@1.18.2 (diff@1.0.7, growl@1.7.0, commander@2.0.0, mkdirp@0.3.5, debug@2.2.0, glob@3.2.3, jade@0.26.3)
remote: 
remote: grunt-contrib-jshint@0.9.2 node_modules\grunt-contrib-jshint
remote: +-- hooker@0.2.3
remote: +-- jshint@2.4.4 (console-browserify@0.1.6, exit@0.1.2, underscore@1.4.4, minimatch@0.4.0, cli@0.4.5, shelljs@0.1.4, htmlparser2@3.3.0)
remote: 
remote: grunt-contrib-uglify@0.4.1 node_modules\grunt-contrib-uglify
remote: +-- chalk@0.4.0 (has-color@0.1.7, ansi-styles@1.0.0, strip-ansi@0.1.1)
remote: +-- maxmin@0.1.0 (pretty-bytes@0.1.2, gzip-size@0.1.1)
remote: +-- uglify-js@2.5.0 (uglify-to-browserify@1.0.2, async@0.2.10, yargs@3.5.4, source-map@0.5.3)
remote: 
remote: grunt@0.4.5 node_modules\grunt
remote: +-- dateformat@1.0.2-1.2.3
remote: +-- which@1.0.9
remote: +-- eventemitter2@0.4.14
remote: +-- getobject@0.1.0
remote: +-- colors@0.6.2
remote: +-- async@0.1.22
remote: +-- grunt-legacy-util@0.2.0
remote: +-- rimraf@2.2.8
remote: +-- exit@0.1.2
remote: +-- nopt@1.0.10 (abbrev@1.0.7)
remote: +-- hooker@0.2.3
remote: +-- minimatch@0.2.14 (sigmund@1.0.1, lru-cache@2.7.0)
remote: +-- glob@3.1.21 (inherits@1.0.2, graceful-fs@1.2.3)
remote: +-- lodash@0.9.2
remote: +-- coffee-script@1.3.3
remote: +-- underscore.string@2.2.1
remote: +-- iconv-lite@0.2.11
remote: +-- js-yaml@2.0.5 (argparse@0.1.16, esprima@1.0.4)
remote: +-- findup-sync@0.1.3 (glob@3.2.11, lodash@2.4.2)
remote: +-- grunt-legacy-log@0.1.2 (grunt-legacy-log-utils@0.1.1, underscore.string@2.3.3, lodash@2.4.2)
remote: 
remote: forever@0.10.11 node_modules\forever
remote: +-- watch@0.8.0
remote: +-- colors@0.6.2
remote: +-- pkginfo@0.3.0
remote: +-- timespan@2.3.0
remote: +-- optimist@0.6.1 (wordwrap@0.0.3, minimist@0.0.10)
remote: +-- nssocket@0.5.3 (eventemitter2@0.4.14, lazy@1.0.11)
remote: +-- utile@0.2.1 (deep-equal@1.0.1, ncp@0.4.2, async@0.2.10, i@0.3.3, mkdirp@0.5.1, rimraf@2.4.3)
remote: +-- nconf@0.6.9 (ini@1.3.4, async@0.2.9, optimist@0.6.0)
remote: +-- cliff@0.1.8 (eyes@0.1.8, winston@0.6.2)
remote: +-- winston@0.7.3 (cycle@1.0.3, stack-trace@0.0.9, eyes@0.1.8, async@0.2.10, request@2.16.6)
remote: +-- forever-monitor@1.2.3 (watch@0.5.1, minimatch@0.2.14, utile@0.1.7, ps-tree@0.0.3, broadway@0.2.10)
remote: +-- flatiron@0.3.11 (optimist@0.6.0, director@1.1.10, prompt@0.2.11, broadway@0.2.9)
remote: 
remote: bookshelf@0.6.12 node_modules\bookshelf
remote: +-- trigger-then@0.3.0
remote: +-- inflection@1.2.7
remote: +-- backbone@1.1.0 (underscore@1.8.3)
remote: +-- bluebird@1.2.4
remote: +-- lodash@3.10.1
remote: 
remote: knex@0.5.16 node_modules\knex
remote: +-- colors@0.6.2
remote: +-- generic-pool-redux@0.1.0
remote: +-- mkdirp@0.3.5
remote: +-- optimist@0.6.1 (minimist@0.0.10, wordwrap@0.0.3)
remote: +-- bluebird@1.2.4
remote: +-- lodash@3.10.1
remote: 
remote: express@3.4.8 node_modules\express
remote: +-- methods@0.1.0
remote: +-- merge-descriptors@0.0.1
remote: +-- cookie-signature@1.0.1
remote: +-- range-parser@0.0.4
remote: +-- fresh@0.2.0
remote: +-- debug@0.8.1
remote: +-- buffer-crc32@0.2.1
remote: +-- cookie@0.1.0
remote: +-- commander@1.3.2 (keypress@0.1.0)
remote: +-- mkdirp@0.3.5
remote: +-- send@0.1.4 (mime@1.2.11)
remote: +-- connect@2.12.0 (uid2@0.0.3, pause@0.0.1, qs@0.6.6, bytes@0.2.1, raw-body@1.1.2, batch@0.5.0, negotiator@0.3.0, multiparty@2.2.0)
remote: 
remote: mongoose@3.8.36 node_modules\mongoose
remote: +-- regexp-clone@0.0.1
remote: +-- muri@1.1.0
remote: +-- sliced@0.0.5
remote: +-- hooks@0.2.1
remote: +-- mpath@0.1.1
remote: +-- mpromise@0.4.3
remote: +-- ms@0.1.0
remote: +-- mquery@1.6.1 (debug@2.2.0, bluebird@2.9.26)
remote: +-- mongodb@1.4.38 (readable-stream@2.0.4, kerberos@0.0.11, bson@0.2.22)
remote: 
remote: grunt-nodemon@0.2.1 node_modules\grunt-nodemon
remote: +-- nodemon@1.0.20 (minimatch@0.2.14, ps-tree@0.0.3, update-notifier@0.1.10)
remote: 
remote: sqlite3@3.1.1 node_modules\sqlite3
remote: +-- nan@2.1.0
remote: npm WARN prefer global grunt-cli@0.1.13 should be installed with -g
remote: .............
remote: grunt-cli@0.1.13 node_modules\grunt-cli
remote: +-- nopt@1.0.10 (abbrev@1.0.7)
remote: +-- resolve@0.3.1
remote: +-- findup-sync@0.1.3 (glob@3.2.11, lodash@2.4.2)
remote: .........................................
remote: 
remote: Done, without errors.
remote: Finished successfully.
remote: Deployment successful.
To https://USER@shortylink.scm.azurewebsites.net/ShortyLink.git
   8ff9288..977553a  master -> master
~/d/2015-10-shortly-deploy git:master ❯❯❯ azure site log tail shortylink             ⬆ ◼
info:    Executing command site log tail
2015-11-05T00:08:52  Welcome, you are now connected to log-streaming service.
^C
~/d/2015-10-shortly-deploy git:master ❯❯❯ azure site browse                        ⏎ ⬆ ◼
info:    Executing command site browse
info:    Launching browser to http://shortylink.azurewebsites.net
info:    site browse command OK
~/d/2015-10-shortly-deploy git:master ❯❯❯ azure site log tail shortylink             ⬆ ◼
info:    Executing command site log tail
2015-11-05T00:11:27  Welcome, you are now connected to log-streaming service.
2015-11-05T00:12:27  No new trace in the past 1 min(s).
^C
~/d/2015-10-shortly-deploy git:master ❯❯❯ azure site browse                        ⏎ ⬆ ◼
info:    Executing command site browse
info:    Launching browser to http://shortylink.azurewebsites.net
info:    site browse command OK
~/d/2015-10-shortly-deploy git:master ❯❯❯ azure site scale mode free shortylink      ⬆ ◼
info:    Executing command site scale mode
+ Getting site information                                                     
info:    site scale mode command OK
~/d/2015-10-shortly-deploy git:master ❯❯❯ nodemon server.js                          ⬆ ◼
[nodemon] 1.8.1
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`
connect.multipart() will be removed in connect 3.0
visit https://github.com/senchalabs/connect/wiki/Connect-3.0 for alternatives
connect.limit() will be removed in connect 3.0
Server now listening on port 4568
events.js:85
      throw er; // Unhandled 'error' event
            ^
Error: listen EADDRINUSE
    at exports._errnoException (util.js:746:11)
    at Server._listen2 (net.js:1129:14)
    at listen (net.js:1155:10)
    at Server.listen (net.js:1240:5)
    at Function.app.listen (/Users/student/Desktop/2015-10-shortly-deploy/node_modules/express/lib/application.js:533:24)
    at Object.<anonymous> (/Users/student/Desktop/2015-10-shortly-deploy/server.js:5:5)
    at Module._compile (module.js:460:26)
    at Object.Module._extensions..js (module.js:478:10)
    at Module.load (module.js:355:32)
    at Function.Module._load (module.js:310:12)
[nodemon] app crashed - waiting for file changes before starting...
^C%                                                                                      ~/d/2015-10-shortly-deploy git:master ❯❯❯ nodemon server.js                          ⬆ ◼
[nodemon] 1.8.1
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`
connect.multipart() will be removed in connect 3.0
visit https://github.com/senchalabs/connect/wiki/Connect-3.0 for alternatives
connect.limit() will be removed in connect 3.0
Server now listening on port 4568
events.js:85
      throw er; // Unhandled 'error' event
            ^
Error: listen EADDRINUSE
    at exports._errnoException (util.js:746:11)
    at Server._listen2 (net.js:1129:14)
    at listen (net.js:1155:10)
    at Server.listen (net.js:1240:5)
    at Function.app.listen (/Users/student/Desktop/2015-10-shortly-deploy/node_modules/express/lib/application.js:533:24)
    at Object.<anonymous> (/Users/student/Desktop/2015-10-shortly-deploy/server.js:5:5)
    at Module._compile (module.js:460:26)
    at Object.Module._extensions..js (module.js:478:10)
    at Module.load (module.js:355:32)
    at Function.Module._load (module.js:310:12)
[nodemon] app crashed - waiting for file changes before starting...

