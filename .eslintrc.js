module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "prettier/prettier": [
      // eslint校验 不成功的话 error || 2 则报错 1位warn  off或者0则无提示
      "error",
      {
        semi: false,
        printWidth: 160 // 超过160换行
      }
    ]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
}
