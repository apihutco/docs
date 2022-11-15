# WebSocket

测试 WebSocket 请求，支持单机与广播

## 请求地址

`WSS`

> [wss://apihut.co/ws](wss://apihut.co/ws)

> [wss://apihut.co/ws/:channel](wss://apihut.co/ws/:channel)

## 路径参数
### :channel

自定义字符串，表示一个频道id

## 响应结果

视连接的模式决定响应结果
- 单机模式：只有本机能收到发出的数据
- 广播模式：连接上同一频道的客户端都能收到频道内其他客户端发出的数据，同理，本客户端发出的数据也会被广播到其他客户端

## 示例
### 单机收发
wss://apihut.co/ws
```shell
# send
hello
# receive
hello

# send
apihut
# receive
apihut
```

### 频道广播
wss://apihut.co/ws/test

client1
```text
# send
hello,I'm client1
```

client2
```text
# receive
hello,I‘m client1
```

client3
```text
# receive
hello,I‘m client1
```
