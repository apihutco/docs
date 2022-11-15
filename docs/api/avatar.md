# 哈希头像

根据哈希值生成头像



## 请求地址
`HTTPS` `GET`

> https://apihut.co/avatar

> https://apihut.net/avatar/:hash



## 路径参数

| 参数 | 必填 | 说明                       |
| ---- | ---- | -------------------------- |
| hash | 否   | 哈希值，为空则取请求来源IP |



## 请求参数

| 参数            | 缩写 | 必填 | 说明                         |                              |
| --------------- | ---- | ---- |----------------------------| ---------------------------- |
| block           |      |      | 块数量                        |                              |
| size            | s    | 否   | 图像大小                       |                              |
| default         | d    | 否   | 生成失败返回的默认图像的链接             |                              |
| random          |      | 否   | 不管赋值是什么，出现 `random` 参数则随机  | 随机范围为 hash 和 fillcolor |
| density         |      | 否   | 块密度                        |                              |
| quality         |      | 否   | 图像质量（jpg，jpeg可用）           |                              |
| namespace       | n    | 否   | 命名空间                       |                              |
| output          | o    | 否   | 输出格式  [列表](#输出格式)          |                              |
| backgroundcolor |      | 否   | 背景颜色，png支持透明 `transparent` |                              |
| fillcolor       |      | 否   | 填充颜色                       |                              |

### 输出格式



## 示例

![哈希头像](https://apihut.co/avatar?random=1&bgcolor=transparent&size=128)



### 使用

HTML

```html
<img src="https://apihut.co/avatar?random=1&bgcolor=transparent" alt="哈希头像">
```

Markdown

```markdown
![哈希头像](https://apihut.co/avatar?random=1&bgcolor=transparent)
```

