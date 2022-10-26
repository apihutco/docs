# GET

测试 GET 请求

## 请求地址
> https://apihut.co/get

> https://apihut.co/get/:output

## 路径参数

### :output
返回格式

| 参数   | 值        |
|------|----------|
| json | Json格式返回 |
| text | 纯文本格式返回  |

## 响应结果

根据用户请求参数返回

> **相同参数处理规则**
> 
> 对于采用相同Key的参数，会将其合并到同一个Key下，并以数组的形式返回 [示例](###示例)

## 示例

### JSON格式返回
`GET` https://apihut.co/get?hello=apihut&name=northes

```json
{
    "code": 2000,
    "msg": "成功",
    "data": {
        "hello": "apihut",
        "name": "northes"
    }
}
```

### 纯文本格式返回
`GET` https://apihut.co/get/text

```text
hello:apihut name:northes 
```

### 存在相同Key
`GET` https://apihut.co/get?key=first&key=second

```json
{
    "code": 2000,
    "msg": "成功",
    "data": {
        "key": [
            "first",
            "second"
        ]
    }
}
```

