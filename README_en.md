# BiuBiuDanmu
A good place to share danmu

# The storage struct
```JS
{
    "vn": "Naruto[01]",     // video name  (required)
    "txt": "Sasuke",        // danmu text (required)
    "t": "10086",           // how many ms after the video start to show the danmu. unit ms (required)
    "fs": "16",             // the font size of  danmu.  unit px (required)
    "fc": "0xDDF4FF",       // the font color of danmu.  (required)
    "pt": "top",            // how to display danmu. options=[scroll,top,bottom] (required)
    "sn": "孤泉冷月",        // sender's name (required)
    "lang":"zh-hans"        // the language of danmu
}
```
## field explain (* required)
### *vn (videoName) video name
> name rule <videoName>[SeasonEpisode]  
> eg    
>   `Naruto[01]` : Naruto Episode 1.  
>   `Oppenheimer`: Oppenheimer   
>   `Yes, Prime Minister[S01E02]`: Yes, Prime Minister Season 1 Episode 2

### *txt (text) danmu text
> must UTF-8 
> eg:   
> `你好世界! Hello World`  
> `ナルト うちはサスケ`


### *t (time) how many ms after the video start to show the danmu. unit ms
> eg:   
> `10086`

### *fs (fontSize) fontSize unit px
> The font size of danmu to display   
> eg:   
> `16`

### *fc (fontColor) font color 
> using hex color
> eg:    
> `0xDDF4FF`

### *pt (playType) how to show danmu in video
> 3 show types    
> `top` : display at top of video   
> `bottom` : display at bottom of video   
> `scrool`: scrool      

### *sn (senderName) sender's name
> eg:  
> `孤泉冷月`

### lang (language) the language of danmu
> eg:   
> `zh-hans`
