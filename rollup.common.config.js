  // 공통
  import htmlTemplate from 'rollup-plugin-generate-html-template';
  import scss from 'rollup-plugin-scss';

  export default {
      input: 'src/js/index.js',
      output:{
          file: './dist/bundle.js',
          format:'cjs',
          souremap: true
      },
      plugins: [
          scss({
              insert: true,
              sourceMap: true
          }),
          htmlTemplate({
              template: 'src/index.html',
              target: 'index.html' // 마지막 번들되는
          })
      ]
  }