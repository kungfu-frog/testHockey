const _DIR_ = __dirname.toLowerCase().split('/tools')[0];
const _HTML_ = _DIR_ + '/html/';
const _HYDRA_ = require('./findHydra')();
const _HYDRA_TOOLS_ = _HYDRA_ + '/tools/';

const _fs = require('fs-extra');
const _execSync = require('child_process').execSync;

const _config = require(_DIR_ + '/project.json');

const walkSync = require('walkdir').sync;

// Pass second argument to force update (`$ node hydra y`)
const _isFullUpdate = true;//process.argv[2];
const _missingModules = [];

(function() {
    checkModules();

    // Exit if nothing to update
    if (!_isFullUpdate && !_missingModules.length) return;
    buildHydra();
    updateModules();
    copySource();
})();

function checkModules() {
    let modules = ['core', 'thread'];

    // Manually add es5 version of thread
    if (modules.indexOf('thread') > -1) modules.push('thread-es5');

    modules.forEach(mod => {
        let localPath = `${_HTML_}assets/js/hydra/hydra-${mod}.js`;
        if (!_isFullUpdate && _fs.existsSync(localPath)) return;
        _missingModules.push(mod);
    });
}

function buildHydra() {
    _execSync(`node ${_HYDRA_TOOLS_}build.js`, {stdio: 'inherit'});
}

function updateModules() {
    _missingModules.forEach(mod => {
        let localPath = `${_HTML_}assets/js/hydra/hydra-${mod}.js`;
        let hydraPath = `${_HYDRA_}/build/hydra-${mod}.js`;
        _fs.writeFileSync(localPath, _fs.readFileSync(hydraPath));
        try { _fs.chmodSync(localPath, '777'); } catch(e) { };
    });
}

function copySource() {
    if (!_fs.existsSync(`${_HTML_}assets/js/hydra/src`)) _fs.mkdirSync(`${_HTML_}assets/js/hydra/src`);
    _fs.copySync(`${_HYDRA_}/HTML`, `${_HTML_}assets/js/hydra/src`);

    try { _fs.chmodSync(`${_HTML_}assets/js/hydra/src`, '777'); } catch(e) { };

    walkSync(`${_HTML_}assets/js/hydra/src`, path => {
        if (path.includes('.js')) {
            try { _fs.chmodSync(path, '777'); } catch(e) { };
        } else if (path.includes('.')) {
            _fs.unlinkSync(path);
            return;
        }

        try { _fs.chmodSync(path, '777'); } catch(e) { };
    });
}