module.exports = {
  printWidth: 120, // 一行最多多少个字符（超过后会要求换行）
  useTabs: false, // 是否启用tab取代空格符缩进，和.editorconfig保持一致
  tabWidth: 2, // 指定每个缩进级别的空格数，默认2，和.editorconfig保持一致
  endOfLine: 'lf', // 换行符，和.editorconfig保持一致
  semi: true, // 行尾是否使用分号，默认为true
  singleQuote: true, // 字符串是否使用单引号
  jsxSingleQuote: false, // 在jsx里是否使用单引号
  trailingComma: 'none', // 对象或数组末尾是否添加逗号 none| es5| all
  bracketSpacing: true, // 对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
  quoteProps: 'as-needed', // 在何时需要给对象属性名添加引号（相当于JSON对象写法）
  arrowParens: 'avoid' // 箭头函数如果只有一个参数则省略括号
};
