- the main app is in folder 'www'
- to start embedded server, install required npm modules
	npm install
- start the server and open new browser using
	grunt

Notes
1. There are 2 errors in create-question route. it caused by MultiFile plugin.
   To fix it, i need to dig into the plugin and test it to make sure it is not broken.
   but, because the deadline is strict, i leave it for final fix if i win
2. There are 2 errors in icons.css related to retina support. i hope you don't mind.