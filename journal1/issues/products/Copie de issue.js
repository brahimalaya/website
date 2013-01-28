/*
 * These are you magazine's CSSs.
 * Plugins can include more CSS if needed.
 */
browse.addcss("issues/common/style.css");

/*
 * Your magazine's plugins.
 * Usually can be mapped to DOM elements for making them dynamic.
 */



/*
 * Your magazine metadata.
 */
browse._magazine.metadata={

	// Unique ID of your magazine and its version. Used for locally storing data.
	uid:"SAMPLEMAGAZINE0",
	version:1,
	
	// Issue related settings
	title:"Sample Magazine",
	number:"0",
	
	// Custom placeholders. Create your customized magazine-wide placeholders here.
	placeholders:{
		magazinecredits:
			"<b>Fonts</b><br>"+
			"<i>Diavlo</i> A font by Jos Buivenga (exljbris) -&gt; www.exljbris.com<br>"+
			"<br><b>Font tools</b><br>"+
			"<i>Font Squirrel</i> http://www.fontsquirrel.com/ for converting <i>Diavlo</i> font for being used on iPad<br>"+
			"<br><b>Colors palette</b><br>"+
			"<i>Quantic Stage</i> by rickomoreira http://kuler.adobe.com/#themeID/1093121<br>"+
			"<br><b>Gestures Stencils</b><br>"+
			"<i>Vector Gestural Icons</i> http://gesturecons.com/<br>"+
			"<br><b>Musics</b><br>"+
			"<i>Legend Of Sadness (intro)</i> by Robert Jaret &copy;2010<br>"+
			"<i>The Test Song</i> by Arnaldo Brenna &copy;2010<br>"+
			"<br><b>Tools &amp; Services</b><br>"+
			"<i>Manga Studio</i>, <i>The GIMP</i> and <i>Inkscape</i> for graphics<br>"+
			"<i>Textwrangler</i> as text editor<br>"+
			"The must-have <i>Toodledo.com</i> for managing tasks<br>"+
			"<br><b>2UP authors</b><br>"+
			"<i>Otilio Forlanelli</i> for the <i>L'editoria digitale e oltre.</i> article (http://www.otilio.eu/)<br>"+
			"<i>Bianca Brenna</i> for the <i>Literature on web</i> article (http://something-white.blogspot.com/)"+
			"<i>Simone Cicero</i> for the <i>Fitting technologies</i> article (http://meedabyte.wordpress.com/)"
	}
};
// ---
// Copyright (c) 2011 Francesco Cottone, http://www.kesiev.com/
// ---
/*
 * These are the condition to be used to check the magazine version to show.
 * Is a set of checks that are done to the device when the magazine is loaded or the active surface changes size.
 * When one of the condition is true, the tests are stopped and the related version ID is used.
 * Use:
 *
 * {islandscape:true,id:"<versionname>"} to set a version if the device is in landscape mode
 * {isportrait:true,id:"<versionname>"} to set a version if the device is in portrait mode
 * {sizelessthan:{width:<width>,height:<height>},id:"<versionname>"} to set a version checking the maximum display size
 * {sizemorethan:{width:<width>,height:<height>},id:"<versionname>"} to set a version checking the minimum display size
 * {sizeis:{width:<width>,height:<height>},id:"<versionname>"} to set a version checking the exact display size
 * {isipad:true,id:"<versionname>"} to set a version for iPad only
 * {isiphone:true,id:"<versionname>"} to set a version for iPhone only
 * {isipod:true,id:"<versionname>"} to set a version for iPod only
 * {isstandalone:true,id:"<versionname>"} to set a version if the app is in a bookmarklet
 * {isinbrowser:true,id:"<versionname>"} to set a version if the app is in loaded in the browser
 * {isonline:true,id:"<versionname>"} to set a version if the device is online
 * {isoffline:true,id:"<versionname>"} to set a version if the device is offline
 * {id:"<versionname>"} to set a version without condition (usually for fallback version)
 *
 * You can combine all the conditions together - will be evaluated in AND, so:
 *
 * {sizemorethan:{width:320,height:200},islandscape:true,id:"<versionname>"}
 *
 * Will apply the <versionname> version of the magazine if the screen resolution is greater than 320x200 AND the display is in landscape.
 *
 */
browse._magazine.version=[
	// default version for: size >= iPad, in Safari
	{islandscape:true,sizemorethan:{width:1023,height:659},id:"aurelien"},
	{isportrait:true,sizemorethan:{width:767,height:915},id:"aurelien"},
	 // mini version for: size >= iPhone, in fullscreen
	{islandscape:true,sizemorethan:{width:479,height:299},id:"aurelien"},
	{isportrait:true,sizemorethan:{width:319,height:459},id:"aurelien"},
	// bookmarklet instructions for: device is iphone or ipod
	// Unavailable for others
	{id:"unavailable"} 
];

/*
 * Your pages templates. Can be stacked one over another one when creating the page.
 * Usually are HTML files.
 */
browse._magazine.templates={

	miniarticlefulltop:{file:"issues/common/templates/mini/article-full-top.html"},


};

/*
 * Magazine content.
 * Is divided in "versions", that are decided using the browse._magazine.version queue.
 */
browse._magazine.versions={
			/*
			 * The "magazine unavailable" version. Contains just a page with a message explaining
			 * that the magazine wasn't designed for the device the user is using
			 */
			unavailable:{	
				metadata:{
					dontsavepositions:true
					// If switched to true the "last seen page" cookie is not persisted when the user
					// see this "version" of the magazine. Is a nice trick if you want to have
					// a landscape only magazine and you want to show just a message to warn the
					// user that if is using the device in portrait mode. If he switch back to the
					// right side, the last valid page is shown again - making this "version" of the
					// magazine just like a "message box". Just remember to catch the supported
					// resolution on the "versions" section and add the "just a messagebox" version
					// as fallback entry.
					// You can switch this on also if you don't want to save the last seen page for
					// your magazine.
				},
				sections:[{id:"unavailable",title:"Magazine unavailable"}],
				articles:{
					unavailable:[
						{
							title:"Magazine unavailable",
							pages:['unavailable']
						}
					]
				}
			},

			/*
			 * The "bookmarklet me" version. Contains just a page with a message explaining
			 * how to add to the iPhone/iPad home screen the magazine.
			 */
			bookmarklet:{	
				metadata:{
					dontsavepositions:true				
				},
				sections:[{id:"bookmarklet",title:"Bookmarklet me!"}],
				articles:{
					bookmarklet:[
						{
							title:"Bookmarklet me!",
							pages:['bookmarklet']
						}
					]
				}
			},
			
			
			/*
			 * The main version of our magazine.
			 */
			aurelien:{
				/*
				 * The minified magazine (for smaller devices);
				 */
				metadata:{}, // Any particular metadata
				sections:[
					{id:"rollingstart",title:"Rolling start",subtitle:"Something for getting started. An overview of #toolname#."}
				],
				/*
				 * The gui details. It appears doubletapping on a page.
				 */
				/*
				 * The single articles of this version. Articles are layouted horizontally.
				 */
				articles:{
					// The section name
					rollingstart:[
						// Each item of this array is an article. Each article has a title, a subtitle and a set of pages.
						{
							title:"Contact Us",
							// Titles and subtitles can have placeholders too.
							subtitle:"Adress, Phone number, Fax, E-mail adress.",
							pages:['contact']
						}
					],
				}
			}
};


/*
 * The magazine data. Are the single pages that are used when creating the magazine versions.
 * Each page can have different structure and composition.
 */
browse._magazine.data={

	// The "magazine" unavailable page. Since is quite simple, its HTML is built-in
	unavailable:{
		html:"<p style='font-family:helvetica;text-align:center;'><img src='#bundlepath#/images/warn.png'><br><br>Sorry!<br><br>The resolution of your device is not suitable<br>for <b>#magazinetitle#</b> issue <b>#magazinenumber#</b>.</p>"
	},
	bookmarklet:{
		html:"<p style='font-family:helvetica;text-align:center;'><img src='#bundlepath#/images/warn.png'><br><br>Add me to your home screen!<br><br>Hit the + icon on the bottom bar<br>and add this page to<br>your Home Screen to start reading<br><b>#magazinetitle#</b> issue <b>#magazinenumber#</b>.</p>"
	},

	// The magazine pages.

	/*
	 * NGE PAGES
	 */


	/*
	 * MINI PAGES
	 */

	contact:{
		template:["miniarticlefulltop"],
		placeholders:"issues/issue_ietest/articles/contact.txt",
		},

};