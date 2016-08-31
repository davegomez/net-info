import babel from 'rollup-plugin-babel'
import async from 'rollup-plugin-async'
import ramda from 'rollup-plugin-ramda'

export default {
    entry: 'src/index.js',
    format: 'cjs',
    plugins: [ ramda(), async(), babel() ],
    sourceMap: true,
    targets: [
        { dest: 'dist/net-info.js', format: 'cjs' },
        { dest: 'dist/net-info.es.js', format: 'es' }
    ]
}
