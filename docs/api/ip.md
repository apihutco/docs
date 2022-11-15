---
lastUpdated: true
---

# IP定位

支持IPV4和IPV6两种地址，支持部分国外国家和地区的IP解析

## 请求地址

`HTTPS` `GET`

> https://apihut.co/ip

> https://apihut.co/ip/:ip

> https://apihut.co/ip/:output/:ip

## 路径参数

### :ip

IP地址，非必填，缺省时会使用请求端的IP

### :output

| 参数   | 值        |
|------|----------|
| json | Json格式返回 |
| text | 纯文本格式返回  |

## 响应结果

| 名称       | 类型     | 说明             |
|----------|--------|----------------|
| ip       | string | 用于定位的IP        |
| country  | string | 国家             |
| province | string | 省份             |
| city     | string | 市              |
| district | string | 区              |
| isp      | string | 运营商            |
| location | string | 定位坐标(经纬度)      |
| source   | string | 数据源 [列表](#数据源) |

### 数据源

| 数据源 | 代码      |
|-----|---------|
| 高德  | gaode   |
| 腾讯  | tencent |

## 示例

### 返回请求来源IP的JSON定位信息

`GET` https://apihut.co/ip

```json
{
  "code": 2000,
  "msg": "成功",
  "data": {
    "ip": "111.206.145.41",
    "country": "中国",
    "province": "北京市",
    "city": "北京市",
    "district": "海淀区",
    "isp": "联通",
    "location": "116.405285,39.904989",
    "source": "gaode"
  }
}
```

### 返回指定IP的JSON定位信息

`GET` https://apihut.co/ip/111.206.145.41

```json
{
  "code": 2000,
  "msg": "成功",
  "data": {
    "ip": "111.206.145.41",
    "country": "中国",
    "province": "北京市",
    "city": "北京市",
    "district": "海淀区",
    "isp": "联通",
    "location": "116.405285,39.904989",
    "source": "gaode"
  }
}
```

### 返回IP纯文本

`GET` https://apihut.co/ip/text

```
111.206.145.41
```

