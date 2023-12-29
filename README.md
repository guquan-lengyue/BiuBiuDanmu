# BiuBiuDanmu
一个视频弹幕分享的好地方 
A good place to share danmu

# 弹幕存储格式
```JS
{
    "vn": "Naruto[01]",     // 影视作品名  (必选)
    "txt": "Sasuke",        // 弹幕文本 (必选)
    "t": "10086",           // 弹幕发送在视频的所播放的时间 单位毫秒(ms) (必选)
    "fs": "16",             // 文本字体大小 单位px (必选)
    "fc": "0xDDF4FF",       // 文本字体颜色 0xRRGGBB (必选)
    "pt": "top",            // 弹幕的出现形式 可选值 [scroll,top,bottom] (必选)
    "sn": "孤泉冷月",        // 发送者的名称 (必选)
    "lang":"zh-hans"        // 弹幕文本语言 
}
```
## 字段解释 (*标识必选)
### *vn (videoName) 影视作品名
> 命名规则 <影视作品名>[季数与集数（期数与话数）]  
> 例如    
>   `Naruto[01]` : 火影忍者第一集.  
>   `Oppenheimer`: 奥本海默   
>   `Yes, Prime Minister[S01E02]`: 是! 首相 第一季第二集

### *txt (text) 弹幕文本
> 应该是UTF-8编码  
> 例如:   
> `你好世界! Hello World`  
> `ナルト うちはサスケ`


### *t (time) 弹幕发送在视频的所播放的时间 单位 ms 
> 视频开始到到弹幕要出现的时间
> 例如   
> `10086`

### *fs (fontSize) 字体大小 单位 px
> 字幕文本展示的大小   
> 例如   
> `16`

### *fc (fontColor) 字体颜色 使用16进制颜色 
> 例如    
> `0xDDF4FF`

### *pt (playType) 弹幕展示的方式
> 三种基本展示方式    
> `top` : 顶部   
> `bottom` : 底部   
> `scrool`: 滚动   

### *sn (senderName) 发送者名称
> 例如:  
> `孤泉冷月`

### lang (language) 文本语言
> 例如:   
> `zh-hans`
