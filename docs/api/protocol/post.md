# POST

测试 POST 请求

## 请求地址
`HTTPS` `POST`
> https://apihut.co/post


## 路径参数
无

## 响应结果
按请求body原样返回

## 示例
`POST` https://apihut.co/post
### Request
```json
{
    "hello":"apihut"
}
```
### Response
```json
{
    "code": 2000,
    "msg": "成功",
    "data": {
        "hello": "apihut"
    }
}
```
