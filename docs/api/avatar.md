# 哈希头像

根据哈希值生成头像



## 请求地址
`HTTPS` `GET`

> https://apihut.co/avatar



## 请求参数
| 参数      | 类型   | 必填 | 说明                               | 取值范围                                    |
| --------- | ------ | ---- | ---------------------------------- | ------------------------------------------- |
| hash      | string | 否   | 哈希值，默认取请求来源IP哈希       | 最大32字符                                  |
| namespace | string | 否   | 命名空间（加盐），一般为网站名     | 最大32字符                                  |
| size      | int    | 否   | 数量，默认5                        | 大于等于4，小于等于64                       |
| density   | int    | 否   | 密度，默认3                        | 大于等于1，小于等于64                       |
| pixels    | int    | 否   | 像素，默认144                      | 大于等于1，小于等于300                      |
| bgcolor   | string | 否   | 背景颜色，默认#f0f0f0              | 十六进制颜色值，可去掉#，transparent 为透明 |
| fcolor    | string | 否   | 主体颜色，默认根据哈希值生成       | 十六进制颜色值，可去掉#                     |
| random    | bool   | 否   | 随机输出，影响范围：哈希，主体颜色 | 1，true，0，false                           |
| output    | string | 否   | 输出格式，默认image                | base64                                      |



## 返回示例

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

