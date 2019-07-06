module.exports = {
    name: 'gui',
    preset: '../../jest.config.js',
    coverageDirectory: '../../coverage/apps/gui',
    snapshotSerializers: [
        'jest-preset-angular/AngularSnapshotSerializer.js',
        'jest-preset-angular/HTMLCommentSerializer.js'
    ]
};
