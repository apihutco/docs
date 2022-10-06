# 一句问候

基于时间、日期、季节、天气状况等因素返回一句问候

### 请求地址

`HTTPS` `GET`

[https://apihut.net/greet](https://apihut.net/greet)

### 请求参数

| 参数     | 必填 | 说明           |
| -------- | ---- | -------------- |
| time     | 否   | 时间 [代码列表](#time时间)       |
| day      | 否   | 星期 [代码列表](#day星期)       |
| weather  | 否   | 天气 [代码列表](#weather天气)       |
| language | 否   | 语言 [代码列表](#language语言)           |
| no_range | 否   | 不使用随机返回 |

### 响应结果

| 名称       | 类型   | 说明                           |
| ---------- | ------ | ------------------------------ |
| code       | int    | 状态码                      |
| msg        | string | 状态信息                       |
| data       | object | 天气结果                       |
| - word     | string | 词语                           |
| - sentence | string | 句子                           |
| - author   | string | 句子作者，没作者则不返回此字段 |

### 返回示例

```json
{
  "code": 200,
  "msg": "成功",
  "data": {
    "word": "傍晚好",
    "sentence": "来日方长，何惧车遥马慢"
  }
}
```

## 参数代码

参数默认使用 Asia/Shanghai 时间

### Time时间

| 代码 | 含义               |
| ---- | ------------------ |
| -1   | 不使用此因素       |
| 0    | 使用默认（可不填） |
| 1    | 凌晨               |
| 2    | 早上               |
| 3    | 中午               |
| 4    | 下午               |
| 5    | 傍晚               |
| 6    | 夜晚               |
| 7    | 深夜               |

### Day星期

| 代码 | 含义               |
| ---- | ------------------ |
| -1   | 不使用此因素       |
| 0    | 使用默认（可不填） |
| 1    | 星期一             |
| 2    | 星期二             |
| 3    | 星期三             |
| 4    | 星期四             |
| 5    | 星期五             |
| 6    | 星期六             |
| 7    | 星期天             |

### Weather天气

> 未确定，还有改动

| 代码 | 含义         |
| ---- | ------------ |
| -1   | 不使用此因素 |
| 1    | 晴           |
| 2    | 阴           |
| 3    | 云           |
| 4    | 风           |
| 5    | 雨           |
| 6    | 雪           |
| 7    | 台风         |

### Language语言

| 代码 | 含义                     |
| ---- | ------------------------ |
| 0    | 简体中文（默认，可不填） |
| 1    | 英语                     |
