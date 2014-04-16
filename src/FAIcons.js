/** @jsx React.DOM */
var FAIcon = FAIcon || {};

(function(FAIcon, window){

	function createFAIcon(type){
		var iconType = type;
		return React.createClass({
			render:function(){
				var type = iconType || this.props.type;
				var cs = React.addons.classSet;
				var classes = {
					'fa':true,
					'fa-spin': this.props.spin,
					'fa-fw': this.props.fixedWidth,
					'fa-li': this.props.li,
					'fa-border': this.props.border,
				};
				classes['fa-' + type] = type;
				classes['fa-' + this.props.size] = this.props.size;
				classes['fa-rotate-' + this.props.rotate] = this.props.rotate;
				classes['fa-flip-' + this.props.flip] = this.props.flip;
				classes['fa-stack-' + this.props.stack] = this.props.stack;
				classes['fa-align-' + this.props.align] = this.props.align;

				var className = cs(classes) + " " + this.props.className;

				return (
					<i className={className}>{this.props.children}</i>
				);
			}
		});
	}

	var FAIconStack = React.createClass({
		render:function(){
			var cs = React.addons.classSet;
			var classes = {
				'fa-stack':true,
			}
			classes['fa-' + this.props.size] = this.props.size;

			var className = cs(classes) + " " + this.props.className;

			return (
				<span className={className}>{this.props.children}</span>
			);
		}
	});

	var FAUl = React.createClass({
		render:function(){
			var cs = React.addons.classSet;
			var classes = {
				'fa-ul':true,
			}
			var className = cs(classes) + " " + this.props.className;

			return (
				<ul className={className}>{this.props.children}</ul>
			);
		}
	});

	FAIcon = {
		FAIcon: createFAIcon(),
		FAUl: FAUl,
		FAStack: FAIconStack,
	}

	var icons = ['glass','music','search','envelope-o','heart','star','star-o','user','film','th-large','th','th-list','check','times','search-plus','search-minus','power-off','signal','cog','trash-o','home','file-o','clock-o','road','download','arrow-circle-o-down','arrow-circle-o-up','inbox','play-circle-o','repeat','refresh','list-alt','lock','flag','headphones','volume-off','volume-down','volume-up','qrcode','barcode','tag','tags','book','bookmark','print','camera','font','bold','italic','text-height','text-width','align-left','align-center','align-right','align-justify','list','outdent','indent','video-camera','picture-o','pencil','map-marker','adjust','tint','pencil-square-o','share-square-o','check-square-o','arrows','step-backward','fast-backward','backward','play','pause','stop','forward','fast-forward','step-forward','eject','chevron-left','chevron-right','plus-circle','minus-circle','times-circle','check-circle','question-circle','info-circle','crosshairs','times-circle-o','check-circle-o','ban','arrow-left','arrow-right','arrow-up','arrow-down','share','expand','compress','plus','minus','asterisk','exclamation-circle','gift','leaf','fire','eye','eye-slash','exclamation-triangle','plane','calendar','random','comment','magnet','chevron-up','chevron-down','retweet','shopping-cart','folder','folder-open','arrows-v','arrows-h','bar-chart-o','twitter-square','facebook-square','camera-retro','key','cogs','comments','thumbs-o-up','thumbs-o-down','star-half','heart-o','sign-out','linkedin-square','thumb-tack','external-link','sign-in','trophy','github-square','upload','lemon-o','phone','square-o','bookmark-o','phone-square','twitter','facebook','github','unlock','credit-card','rss','hdd-o','bullhorn','bell','certificate','hand-o-right','hand-o-left','hand-o-up','hand-o-down','arrow-circle-left','arrow-circle-right','arrow-circle-up','arrow-circle-down','globe','wrench','tasks','filter','briefcase','arrows-alt','users','link','cloud','flask','scissors','files-o','paperclip','floppy-o','square','bars','list-ul','list-ol','strikethrough','underline','table','magic','truck','pinterest','pinterest-square','google-plus-square','google-plus','money','caret-down','caret-up','caret-left','caret-right','columns','sort','sort-asc','sort-desc','envelope','linkedin','undo','gavel','tachometer','comment-o','comments-o','bolt','sitemap','umbrella','clipboard','lightbulb-o','exchange','cloud-download','cloud-upload','user-md','stethoscope','suitcase','bell-o','coffee','cutlery','file-text-o','building-o','hospital-o','ambulance','medkit','fighter-jet','beer','h-square','plus-square','angle-double-left','angle-double-right','angle-double-up','angle-double-down','angle-left','angle-right','angle-up','angle-down','desktop','laptop','tablet','mobile','circle-o','quote-left','quote-right','spinner','circle','reply','github-alt','folder-o','folder-open-o','smile-o','frown-o','meh-o','gamepad','keyboard-o','flag-o','flag-checkered','terminal','code','reply-all','mail-reply-all','star-half-o','location-arrow','crop','code-fork','chain-broken','question','info','exclamation','superscript','subscript','eraser','puzzle-piece','microphone','microphone-slash','shield','calendar-o','fire-extinguisher','rocket','maxcdn','chevron-circle-left','chevron-circle-right','chevron-circle-up','chevron-circle-down','html5','css3','anchor','unlock-alt','bullseye','ellipsis-h','ellipsis-v','rss-square','play-circle','ticket','minus-square','minus-square-o','level-up','level-down','check-square','pencil-square','external-link-square','share-square','compass','caret-square-o-down','caret-square-o-up','caret-square-o-right','eur','gbp','usd','inr','jpy','rub','krw','btc','file','file-text','sort-alpha-asc','sort-alpha-desc','sort-amount-asc','sort-amount-desc','sort-numeric-asc','sort-numeric-desc','thumbs-up','thumbs-down','youtube-square','youtube','xing','xing-square','youtube-play','dropbox','stack-overflow','instagram','flickr','adn','bitbucket','bitbucket-square','tumblr','tumblr-square','long-arrow-down','long-arrow-up','long-arrow-left','long-arrow-right','apple','windows','android','linux','dribbble','skype','foursquare','trello','female','male','gittip','sun-o','moon-o','archive','bug','vk','weibo','renren','pagelines','stack-exchange','arrow-circle-o-right','arrow-circle-o-left','caret-square-o-left','dot-circle-o','wheelchair','vimeo-square','try','plus-square-o'];

	for(var i in icons){
		var parts = icons[i].toLowerCase().split("-");
		for(var i in parts){
			var p = parts[i];
            parts[i] = p.charAt(0).toUpperCase() + p.slice(1);
		}
		FAIcon["FA" + parts.join("")] = createFAIcon(icons[i]);
	}

	//Register in window global for browsers
	if(window){
		for(var i in FAIcon){
			window[i] = FAIcon[i];
		}
	}

})(FAIcon, window);

if(typeof(module) !== "undefined" && module && module.exports) module.exports = FAIcon;

if(typeof(define) !== "undefined" && define && define.call){
	define(['FAIcon'] , function (FAIcon) {
	    return FAIcon;
	});
}
