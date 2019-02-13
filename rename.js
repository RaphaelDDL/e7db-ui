var path = require('path');
var fs = require('fs');
var glob = require('glob');
var log = console.log;

const fileArray = glob.sync(path.resolve('./_gameassets/sorted/heroes/') + `**/**/*.png`, {});

if (!fileArray || (fileArray && !fileArray.length)) {
    log(`No JSON files found.`);
}
log(`BUILD: ${fileArray.length}  files were found.`);

fileArray.map((filepath) => {
    var path = filepath.substr(0, filepath.lastIndexOf('/')) + '/';
    var filename = filepath.substr(filepath.lastIndexOf('/') + 1);
    var nameToReplace = '';

    switch (true) {
        case /_s\.png$/.test(filename):
            nameToReplace = 'icon.png';
            break;
        case /_su\.png$/.test(filename):
            nameToReplace = 'full.png';
            break;
        case /_l\.png$/.test(filename):
            nameToReplace = 'small.png';
            break;
        case /^sk_/.test(filename) && /_1\.png$/.test(filename):
            nameToReplace = 'sk_1.png';
            break;
        case /^sk_/.test(filename) && /_2\.png$/.test(filename):
            nameToReplace = 'sk_2.png';
            break;
        case /^sk_/.test(filename) && /_3\.png$/.test(filename):
            nameToReplace = 'sk_3.png';
            break;
        case /^pa_/.test(filename) && /_1\.png$/.test(filename):
            nameToReplace = 'sk_1p.png';
            break;
        case /^pa_/.test(filename) && /_2\.png$/.test(filename):
            nameToReplace = 'sk_2p.png';
            break;
        case /^pa_/.test(filename) && /_3\.png$/.test(filename):
            nameToReplace = 'sk_3p.png';
            break;
        default:
            nameToReplace = '';
            log('none');
    }

    if (nameToReplace) {
        fs.rename(filepath, `${path}${nameToReplace}`, function(err) {
            if (err) throw err;
            log('renamed complete');
        });
    }
    // }
});
