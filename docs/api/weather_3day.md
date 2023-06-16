# 天气预报(3日)

根据指定地理位置查询未来3天的天气预报

## 请求地址

`HTTPS` `GET`

> [https://apihut.co/weather/3day](https://apihut.co/weather/3day)

## 请求参数

| 参数     | 必填 | 说明                           |
| -------- | ---- | ------------------------------ |
| location | 是   | 地理位置GeoID [查询](./geo.md) |

## 响应结果

| 参数       | 说明             |
| ---------- | ---------------- |
| location   | GeoID            |
| fx_date    | 日期             |
| min_temp   | 最低温度，摄氏度 |
| max_temp   | 最高温度，摄氏度 |
| text_day   | 白天天气状况描述 |
| text_night | 夜晚天气状况描述 |
| wind360    | 360°风向         |
| wind_dir   | 风向             |
| humidity   | 相对湿度         |
| precip     | 小时降雨量       |
| fx_link    | 界面             |

## 示例

### 查询指定地理位置的天气信息

```json
{
    "code": 2000,
    "msg": "成功",
    "data": [
        {
            "location": "101280604",
            "fx_date": "2023-06-16",
            "min_temp": "25",
            "max_temp": "30",
            "text_day": "大雨",
            "text_night": "大雨",
            "wind360": "0",
            "wind_dir": "北风",
            "humidity": "86",
            "precip": "37.2",
            "fx_link": "https://www.qweather.com/weather/nanshan-101280604.html"
        },
        {
            "location": "101280604",
            "fx_date": "2023-06-17",
            "min_temp": "26",
            "max_temp": "31",
            "text_day": "雷阵雨",
            "text_night": "雷阵雨",
            "wind360": "0",
            "wind_dir": "北风",
            "humidity": "84",
            "precip": "35.2",
            "fx_link": "https://www.qweather.com/weather/nanshan-101280604.html"
        },
        {
            "location": "101280604",
            "fx_date": "2023-06-18",
            "min_temp": "27",
            "max_temp": "31",
            "text_day": "阵雨",
            "text_night": "阵雨",
            "wind360": "0",
            "wind_dir": "北风",
            "humidity": "86",
            "precip": "8.1",
            "fx_link": "https://www.qweather.com/weather/nanshan-101280604.html"
        }
    ]
}
```