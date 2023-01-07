fx_version 'adamant'

game 'gta5'
author 'SYNO'
description 'SY_CARRY'

version '1.3'

lua54 'yes'
use_experimental_fxv2_oal 'yes'

escrow_ignore {
	'config.lua', 
}

server_scripts {
	'config.lua',
	'server/main.lua'
}

client_scripts {
	'config.lua',
	'client/main.lua'
}

files {
	'html/ui.html',
	'html/styles.css',
	'html/scripts.js',
	'html/debounce.min.js',
	'html/fonts/BebasNeueBold.ttf',
	'html/fonts/*.otf',
	'html/img/*.png'
}

ui_page 'html/ui.html'

dependency '/assetpacks'