module.exports = {
  name: 'login-utils',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/login/utils',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
