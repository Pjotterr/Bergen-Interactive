PanoramaStudioViewerParams = {
"panoramaStudioViewer": {
"key": "",
"control": {
        "mousemode": "drag",
        "touchmode": "drag"
    },
"data": {
        "id": "globalData",
        "messageBoxStyle": "min-width: 25%; text-shadow: none; line-height: 100%; color:#ffffff; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; box-shadow: 4px 4px 1px 0px rgba(0,0,0,0.33);background: rgba(0,0,0,0.66);"
    },
"include": [
        {
            "src": "New Panorama1_controls.js"
        }
    ],
"node": {
	"autoplay": {
	        "pan": 0.08,
	        "reference": "screen",
	        "restart": 5,
	        "returnToLevel": true,
	        "status": "off",
	        "tilt": 0,
	        "zoom": 1
	    },
	"camera": {
	        "maxpan": 359.9999999999999,
	        "maxtilt": 89.99999999999997,
	        "minpan": 0,
	        "mintilt": -89.99999999999997
	    },
	"hotspot": [
	        {
	            "animation": {
	                "duration": 1.28,
	                "frames": 32,
	                "height": 128,
	                "width": 128
	            },
	            "bitmap": "pap_rings_2x.png",
	            "bitmapscale": "1.0",
	            "bitmaptype": "floating",
	            "href": "javascript:",
	            "hsinfo": {
	                "align": "center",
	                "captureMouse": true,
	                "checkHover": true,
	                "id": "hsinfo0",
	                "maxwidth": "66%",
	                "onclick": function(){ this.viewer.action('hideMessage'); } ,
	                "style": "min-width: 25%; text-shadow: none; line-height: 100%; color:#ffffff; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; box-shadow: 4px 4px 1px 0px rgba(0,0,0,0.33);background: rgba(0,0,0,0.66); transform-origin : 0% 0% 0px; transform: translate(0px, 0px) translateZ(10000px);",
	                "text": "<div style='padding: 16px;' class='panoStudioViewerText1'><style>div.panoStudioViewerText1 a, a:visited {color: #FDB815;} div.panoStudioViewerText1 a:hover, a:active {color: #EFF517;}</style>UIB</div>",
	                "xoff": 0,
	                "yoff": -30
	            },
	            "onclick": function(){ this.viewer.action('toggleMessage',this.hsinfo); },
	            "opacity": "1.00;1.00",
	            "position": "193.5450,5.8950",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "UIB"
	            },
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_red.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "https://hybel.no/bolig/270282/rom-i-leilighet-stromgaten-54-bergen/",
	            "opacity": "1.00;1.00",
	            "position": "157.2750,9.0450",
	            "target": "",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Strømgaten 54"
	            },
	            "transition": "zoomin,2",
	            "unit": "deg"
	        },
	        {
	            "animation": {
	                "duration": 1.28,
	                "frames": 32,
	                "height": 128,
	                "width": 128
	            },
	            "bitmap": "pap_rings_2x.png",
	            "bitmapscale": "1.0",
	            "bitmaptype": "floating",
	            "href": "javascript:",
	            "hsinfo": {
	                "align": "center",
	                "captureMouse": true,
	                "checkHover": true,
	                "id": "hsinfo2",
	                "maxwidth": "66%",
	                "onclick": function(){ this.viewer.action('hideMessage'); } ,
	                "style": "min-width: 25%; text-shadow: none; line-height: 100%; color:#ffffff; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; box-shadow: 4px 4px 1px 0px rgba(0,0,0,0.33);background: rgba(0,0,0,0.66); transform-origin : 0% 0% 0px; transform: translate(0px, 0px) translateZ(10000px);",
	                "text": "<div style='padding: 16px;' class='panoStudioViewerText1'><style>div.panoStudioViewerText1 a, a:visited {color: #FDB815;} div.panoStudioViewerText1 a:hover, a:active {color: #EFF517;}</style>BI</div>",
	                "xoff": 0,
	                "yoff": -30
	            },
	            "onclick": function(){ this.viewer.action('toggleMessage',this.hsinfo); },
	            "opacity": "1.00;1.00",
	            "position": "163.7100,4.9950",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "BI"
	            },
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_red.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "https://hybel.no/bolig/257394/rom-i-bofellesskap-storms-gate-2-bergen-6/",
	            "opacity": "1.00;1.00",
	            "position": "184.0050,5.7600",
	            "target": "",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Stormsgate 2"
	            },
	            "transition": "zoomin,2",
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_red.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "https://hybel.no/bolig/275313/rom-i-bofellesskap-nygardsgaten-62-bergen/",
	            "opacity": "1.00;1.00",
	            "position": "114.9750,14.2200",
	            "target": "",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Nygårdsgaten 62"
	            },
	            "transition": "zoomin,2",
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_green.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "https://hybel.no/bolig/305481/rom-i-bofellesskap-lyder-sagens-gate-21-bergen/",
	            "opacity": "1.00;1.00",
	            "position": "119.9700,15.3000",
	            "target": "",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Lyder Sagens Gate 21"
	            },
	            "transition": "zoomin,2",
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_yellow.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "https://hybel.no/bolig/275515/rom-i-bofellesskap-nygardsgaten-39-bergen-2/",
	            "opacity": "1.00;1.00",
	            "position": "119.9250,17.5950",
	            "target": "",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Nygårdsgaten 39"
	            },
	            "transition": "zoomin,2",
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_blue.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "https://hybel.no/bolig/322631/rom-i-bofellesskap-nygardsgaten-37-bergen-2/",
	            "opacity": "1.00;1.00",
	            "position": "120.1050,19.7550",
	            "target": "",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Nygårdsgaten 37"
	            },
	            "transition": "zoomin,2",
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_red.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "https://hybel.no/bolig/297786/leilighet-6-roms-jorgen-moes-gate-10c-bergen/",
	            "opacity": "1.00;1.00",
	            "position": "125.6400,2.0700",
	            "target": "",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Jørgen Moes Gate 10"
	            },
	            "transition": "zoomin,2",
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_blue.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "https://hybel.no/bolig/305578/rom-i-bofellesskap-michael-krohns-gate-37-bergen/",
	            "opacity": "1.00;1.00",
	            "position": "148.0500,2.8350",
	            "target": "",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Michael Krohns Gate 37"
	            },
	            "transition": "zoomin,2",
	            "unit": "deg"
	        },
	        {
	            "animation": {
	                "duration": 1.28,
	                "frames": 32,
	                "height": 128,
	                "width": 128
	            },
	            "bitmap": "pap_rings_2x.png",
	            "bitmapscale": "1.0",
	            "bitmaptype": "floating",
	            "href": "javascript:",
	            "hsinfo": {
	                "align": "center",
	                "captureMouse": true,
	                "checkHover": true,
	                "id": "hsinfo10",
	                "maxwidth": "66%",
	                "onclick": function(){ this.viewer.action('hideMessage'); } ,
	                "style": "min-width: 25%; text-shadow: none; line-height: 100%; color:#ffffff; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; box-shadow: 4px 4px 1px 0px rgba(0,0,0,0.33);background: rgba(0,0,0,0.66); transform-origin : 0% 0% 0px; transform: translate(0px, 0px) translateZ(10000px);",
	                "text": "<div style='padding: 16px;' class='panoStudioViewerText1'><style>div.panoStudioViewerText1 a, a:visited {color: #FDB815;} div.panoStudioViewerText1 a:hover, a:active {color: #EFF517;}</style>\njuridiske fakultet (UiB)</div>",
	                "xoff": 0,
	                "yoff": -30
	            },
	            "onclick": function(){ this.viewer.action('toggleMessage',this.hsinfo); },
	            "opacity": "1.00;1.00",
	            "position": "257.6250,3.0150",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "juridiske fakultet (UiB)"
	            },
	            "unit": "deg"
	        },
	        {
	            "animation": {
	                "duration": 1.28,
	                "frames": 32,
	                "height": 128,
	                "width": 128
	            },
	            "bitmap": "pap_rings_2x.png",
	            "bitmapscale": "1.0",
	            "bitmaptype": "floating",
	            "href": "javascript:",
	            "hsinfo": {
	                "align": "center",
	                "captureMouse": true,
	                "checkHover": true,
	                "id": "hsinfo11",
	                "maxwidth": "66%",
	                "onclick": function(){ this.viewer.action('hideMessage'); } ,
	                "style": "min-width: 25%; text-shadow: none; line-height: 100%; color:#ffffff; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; box-shadow: 4px 4px 1px 0px rgba(0,0,0,0.33);background: rgba(0,0,0,0.66); transform-origin : 0% 0% 0px; transform: translate(0px, 0px) translateZ(10000px);",
	                "text": "<div style='padding: 16px;' class='panoStudioViewerText1'><style>div.panoStudioViewerText1 a, a:visited {color: #FDB815;} div.panoStudioViewerText1 a:hover, a:active {color: #EFF517;}</style>NHH</div>",
	                "xoff": 0,
	                "yoff": -30
	            },
	            "onclick": function(){ this.viewer.action('toggleMessage',this.hsinfo); },
	            "opacity": "1.00;1.00",
	            "position": "319.3200,0.0450",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "NHH"
	            },
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_yellow.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "https://hybel.no/bolig/258323/rom-i-bofellesskap-nye-sandviksveien-46-bergen-8/",
	            "opacity": "1.00;1.00",
	            "position": "331.7850,1.1250",
	            "target": "",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "Nye SandvikSveien 46"
	            },
	            "transition": "zoomin,2",
	            "unit": "deg"
	        },
	        {
	            "anchor": "20,57",
	            "bitmap": "pap_marker_blue.png",
	            "bitmapscale": "1.0;1.1",
	            "bitmaptype": "floating",
	            "href": "https://hybel.no/bolig/321132/leilighet-4-roms-ovre-korskirkeallmenningen-6-bergen-2/",
	            "opacity": "1.00;1.00",
	            "position": "348.9300,3.2850",
	            "target": "",
	            "textbox": {
	                "align": "top",
	                "style": "color:#ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: normal; text-align:center; display: inline;",
	                "text": "OKA6"
	            },
	            "transition": "zoomin,2",
	            "unit": "deg"
	        }
	    ],
	"hotspots": {
	        "visible": true
	    },
	"id": "New Panorama1",
	"image":{"baseindex":1,"bitmap":[{"back":{"src":"New Panorama1_tiles/New Panorama1_t_1b_%y_%x.jpg"},"down":{"src":"New Panorama1_tiles/New Panorama1_t_1d_%y_%x.jpg"},"front":{"src":"New Panorama1_tiles/New Panorama1_t_1f_%y_%x.jpg"},"height":2546,"left":{"src":"New Panorama1_tiles/New Panorama1_t_1l_%y_%x.jpg"},"right":{"src":"New Panorama1_tiles/New Panorama1_t_1r_%y_%x.jpg"},"tilesize":637,"up":{"src":"New Panorama1_tiles/New Panorama1_t_1u_%y_%x.jpg"},"width":2546},{"back":{"src":"New Panorama1_tiles/New Panorama1_t_2b_%y_%x.jpg"},"down":{"src":"New Panorama1_tiles/New Panorama1_t_2d_%y_%x.jpg"},"front":{"src":"New Panorama1_tiles/New Panorama1_t_2f_%y_%x.jpg"},"height":1273,"left":{"src":"New Panorama1_tiles/New Panorama1_t_2l_%y_%x.jpg"},"right":{"src":"New Panorama1_tiles/New Panorama1_t_2r_%y_%x.jpg"},"tilesize":637,"up":{"src":"New Panorama1_tiles/New Panorama1_t_2u_%y_%x.jpg"},"width":1273},{"back":{"src":"New Panorama1_tiles/New Panorama1_t_3b_%y_%x.jpg"},"down":{"src":"New Panorama1_tiles/New Panorama1_t_3d_%y_%x.jpg"},"front":{"src":"New Panorama1_tiles/New Panorama1_t_3f_%y_%x.jpg"},"height":637,"left":{"src":"New Panorama1_tiles/New Panorama1_t_3l_%y_%x.jpg"},"right":{"src":"New Panorama1_tiles/New Panorama1_t_3r_%y_%x.jpg"},"tilesize":637,"up":{"src":"New Panorama1_tiles/New Panorama1_t_3u_%y_%x.jpg"},"width":637}],"multilevel":true,"preview":{"src":"New Panorama1_tiles/New Panorama1_preview.jpg"},"projection":"cubic"},
	"view": {
	        "hfov": 90,
	        "pan": 180,
	        "tilt": 0
	    }
},
"version": "4.2"
}
}