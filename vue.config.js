module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/ptm-reflection/'
    : '/',
  outputDir: 'docs'
}
