import babel from 'rollup-plugin-babel'

export default {
    entry: 'src/index.js',
    format: 'cjs',
    plugins: [ babel() ],
    sourceMap: true,
    targets: [
        { dest: 'dist/net-info.js', format: 'cjs' },
        { dest: 'dist/net-info.es.js', format: 'es' }
    ]
}
