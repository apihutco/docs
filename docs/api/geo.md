# 地理位置信息

根据地域名查询地理位置信息

## 请求地址

`HTTPS` `GET`

> https://apihut.co/geo

## 请求参数

| 参数     | 必填 | 说明                     |
| -------- | ---- | ------------------------ |
| location | 是   | 县、市、区、直辖市级名称 |
| adm      | 否   | 直辖市、省级名称         |

> adm 参数主要用于应对仅查 location 存在同名地区的情况

## 响应结果

| 名称       | 类型   | 说明     |
| ---------- | ------ | -------- |
| country    | string | 国家     |
| province   | string | 省份     |
| city       | string | 市       |
| district   | string | 区       |
| geo_id     | string | GeoID    |
| time_zone  | string | 时区     |
| utc_offset | string | 相对时区 |


## 示例

### 仅使用 `location` 查询

`GET`

https://apihut.co/geo?location=朝阳

```json
{
    "code": 2000,
    "msg": "成功",
    "data": {
        "country": "中国",
        "province": "辽宁省",
        "city": "朝阳",
        "district": "朝阳",
        "geo_id": 101071201,
        "time_zone": "Asia/Shanghai",
        "utc_offset": "+08:00"
    }
}
```

### 使用 `adm` 进行限制

`GET`

https://apihut.co/geo?location=朝阳&adm=北京

```json
{
    "code": 2000,
    "msg": "成功",
    "data": {
        "country": "中国",
        "province": "北京市",
        "city": "北京",
        "district": "朝阳",
        "geo_id": 101010300,
        "time_zone": "Asia/Shanghai",
        "utc_offset": "+08:00"
    }
}
```