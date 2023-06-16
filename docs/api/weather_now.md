# 天气状况(实时)

根据指定地理位置查询实时天气

## 请求地址

`HTTPS` `GET`

> [https://apihut.co/weather/now](https://apihut.co/weather/now)

## 请求参数

| 参数     | 必填 | 说明                           |
| -------- | ---- | ------------------------------ |
| location | 是   | 地理位置GeoID [查询](./geo.md) |

## 响应结果

| 参数       | 说明             |
| ---------- | ---------------- |
| location   | GeoID            |
| obs_time   | 数据刷新时间     |
| temp       | 温度，摄氏度     |
| feels_like | 体感温度，摄氏度 |
| text       | 天气状况描述     |
| wind360    | 360°风向         |
| wind_dir   | 风向             |
| humidity   | 相对湿度         |
| precip     | 小时降雨量       |
| fx_link    | 界面             |
| sources    | 数据源           |

## 示例

### 查询指定地理位置的天气信息

```json
{
    "code": 2000,
    "msg": "成功",
    "data": {
        "location": "101280604",
        "obs_time": "2023-06-16T11:12+08:00",
        "temp": "25",
        "feels_like": "28",
        "text": "雨",
        "wind360": "0",
        "wind_dir": "北风",
        "humidity": "95",
        "precip": "11.8",
        "fx_link": "https://www.qweather.com/weather/nanshan-101280604.html",
        "sources": [
            "QWeather",
            "NMC",
            "ECMWF"
        ]
    }
}
```