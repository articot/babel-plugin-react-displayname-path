var babel = require('@babel/core');
var fs = require('fs');
var path = require('path');
var fixturesDir = path.join(__dirname, 'fixtures');

var pluginPath = path.join(__dirname, '../');
var assert = require('assert');
describe('react-displayname-path transform', function() {
    fs.readdirSync(fixturesDir).forEach(function(fixture) {
        var actual = transformFile(path.join(fixturesDir, fixture, 'input.js'));
        var expected = readFile(path.join(fixturesDir, fixture, 'expected.js'));

        it('transforms ' + path.basename(fixture), function() {
            assert.equal(actual, expected);
        });
    });
});

function readFile(filename) {
    var file = fs.readFileSync(filename, 'utf8').trim();
    file = file.replace(/\r\n/g, '\n');
    return file;
}

function transformFile(filename) {
    return babel.transformFileSync(filename, {
        presets: ['@babel/preset-react'],
        plugins: [
            [
                pluginPath,
                {
                    knownComponents: [
                        'Component5a',
                        'Component5b',
                        'Component5c'
                    ]
                }
            ],
            [
                '@babel/plugin-proposal-decorators',
                { decoratorsBeforeExport: true }
            ],
            ['@babel/plugin-proposal-class-properties']
        ]
    }).code;
}
