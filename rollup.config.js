import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'
import uglify from 'rollup-plugin-uglify'

export default {
  entry: 'src/index.js',
  format: 'umd',
  moduleName: 'memoized-change-handler',
  plugins: [
    babel({ 
      exclude: 'node_modules/**' 
    }),
    replace({
      ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    (process.env.NODE_ENV === 'production' && uglify())
  ]
}
