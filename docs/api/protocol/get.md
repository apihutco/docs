# GET

测试 GET 请求

未传参时将返回默认首页

## 请求地址

`HTTPS` `GET`

> [https://apihut.co/](https://apihut.co/)

## 请求参数
### output

指定返回格式

| 值   | 说明               |
| ---- | ------------------ |
| json | JSON格式返回，默认 |
| text | 纯文本格式返回     |

> output字段将在相应结果中被移除

## 响应结果

根据用户请求参数返回

> **相同参数处理规则**
> 
> 对于采用相同Key的参数，会将其合并到同一个Key下，并以数组的形式返回 [示例](#示例) 

## 示例

### JSON格式返回

`GET` 

https://apihut.co?name=apihut&greet=hello

```json
{
    "name": "apihut",
    "greet": "hello"
}
```

### 纯文本格式返回

`GET` 

https://apihut.co?name=apihut&greet=hello&output=text

```
name:apihut greet:hello
```

### 存在相同Key

`GET` 

https://apihut.co?key=first&key=second

```json
{
    "key": [
        "first",
        "second"
    ]
}
```

