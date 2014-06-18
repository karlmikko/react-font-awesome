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

				var className = cs(classes) + " " + (this.props.className || '');

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

			var className = cs(classes) + " " + (this.props.className || '');

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
			var className = cs(classes) + " " + (this.props.className || '');

			return (
				<ul className={className}>{this.props.children}</ul>
			);
		}
	});

	var Icon = createFAIcon();

	var FAAnimate = React.createClass({
		getInitialState:function(){
			return {
				childCount: 0,
				child:(<span />)
			};
		},
		componentWillMount:function(){
			if(this.props.children){
				this.timer = setInterval(function(){
					var newchild = this.state.childCount + 1;
					if(this.props.children.length <= newchild){
						newchild = 0;
					}
					this.setState({
						childCount:newchild,
						child:this.props.children[newchild]
					});
				}.bind(this), this.props.interval || 1000);
				
				this.setState({
					child:this.props.children[0]
				});
			}
		},
		componentWillUnmount:function(){
			clearInterval(this.timer);
		},
		render:function(){
			return this.state.child;
		}
	});

	FAIcon = {
		FAIcon: Icon,
		FAUl: FAUl,
		FAStack: FAIconStack,
		FAAnimate: FAAnimate,
	};

	var icons = ['tomobile','bank','behance','behance-square','bomb','building','cab','car','child','circle-o-notch','circle-thin','codepen','cube','cubes','database','delicious','deviantart','digg','drupal','empire','envelope-square','fax','file-archive-o','file-audio-o','file-code-o','file-excel-o','file-image-o','file-movie-o','file-pdf-o','file-photo-o','file-picture-o','file-powerpoint-o','file-sound-o','file-video-o','file-word-o','file-zip-o','ge','git','git-square','google','graduation-cap','hacker-news','header','history','institution','joomla','jsfiddle','language','life-bouy','life-ring','life-saver','mortar-board','openid','paper-plane','paper-plane-o','paragraph','paw','pied-piper','pied-piper-alt','pied-piper-square','qq','ra','rebel','recycle','reddit','reddit-square','send','send-o','share-alt','share-alt-square','slack','sliders','soundcloud','space-shuttle','spoon','spotify','steam','steam-square','stumbleupon','stumbleupon-circle','support','taxi','tencent-weibo','tree','university','vine','wechat','weixin','wordpress','yahoo','adjust','anchor','archive','arrows','arrows-h','arrows-v','asterisk','automobile','ban','bank','bar-chart-o','barcode','bars','beer','bell','bell-o','bolt','bomb','book','bookmark','bookmark-o','briefcase','bug','building','building-o','bullhorn','bullseye','cab','calendar','calendar-o','camera','camera-retro','car','caret-square-o-down','caret-square-o-left','caret-square-o-right','caret-square-o-up','certificate','check','check-circle','check-circle-o','check-square','check-square-o','child','circle','circle-o','circle-o-notch','circle-thin','clock-o','cloud','cloud-download','cloud-upload','code','code-fork','coffee','cog','cogs','comment','comment-o','comments','comments-o','compass','credit-card','crop','crosshairs','cube','cubes','cutlery','dashboard','database','desktop','dot-circle-o','download','edit','ellipsis-h','ellipsis-v','envelope','envelope-o','envelope-square','eraser','exchange','exclamation','exclamation-circle','exclamation-triangle','external-link','external-link-square','eye','eye-slash','fax','female','fighter-jet','file-archive-o','file-audio-o','file-code-o','file-excel-o','file-image-o','file-movie-o','file-pdf-o','file-photo-o','file-picture-o','file-powerpoint-o','file-sound-o','file-video-o','file-word-o','file-zip-o','film','filter','fire','fire-extinguisher','flag','flag-checkered','flag-o','flash','flask','folder','folder-o','folder-open','folder-open-o','frown-o','gamepad','gavel','gear','gears','gift','glass','globe','graduation-cap','group','hdd-o','headphones','heart','heart-o','history','home','image','inbox','info','info-circle','institution','key','keyboard-o','language','laptop','leaf','legal','lemon-o','level-down','level-up','life-bouy','life-ring','life-saver','lightbulb-o','location-arrow','lock','magic','magnet','mail-forward','mail-reply','mail-reply-all','male','map-marker','meh-o','microphone','microphone-slash','minus','minus-circle','minus-square','minus-square-o','mobile','mobile-phone','money','moon-o','mortar-board','music','navicon','paper-plane','paper-plane-o','paw','pencil','pencil-square','pencil-square-o','phone','phone-square','photo','picture-o','plane','plus','plus-circle','plus-square','plus-square-o','power-off','print','puzzle-piece','qrcode','question','question-circle','quote-left','quote-right','random','recycle','refresh','reorder','reply','reply-all','retweet','road','rocket','rss','rss-square','search','search-minus','search-plus','send','send-o','share','share-alt','share-alt-square','share-square','share-square-o','shield','shopping-cart','sign-in','sign-out','signal','sitemap','sliders','smile-o','sort','sort-alpha-asc','sort-alpha-desc','sort-amount-asc','sort-amount-desc','sort-asc','sort-desc','sort-down','sort-numeric-asc','sort-numeric-desc','sort-up','space-shuttle','spinner','spoon','square','square-o','star','star-half','star-half-empty','star-half-full','star-half-o','star-o','suitcase','sun-o','support','tablet','tachometer','tag','tags','tasks','taxi','terminal','thumb-tack','thumbs-down','thumbs-o-down','thumbs-o-up','thumbs-up','ticket','times','times-circle','times-circle-o','tint','toggle-down','toggle-left','toggle-right','toggle-up','trash-o','tree','trophy','truck','umbrella','university','unlock','unlock-alt','unsorted','upload','user','users','video-camera','volume-down','volume-off','volume-up','warning','wheelchair','wrench','file','file-archive-o','file-audio-o','file-code-o','file-excel-o','file-image-o','file-movie-o','file-o','file-pdf-o','file-photo-o','file-picture-o','file-powerpoint-o','file-sound-o','file-text','file-text-o','file-video-o','file-word-o','file-zip-o','circle-o-notch','cog','gear','refresh','spinner','check-square','check-square-o','circle','circle-o','dot-circle-o','minus-square','minus-square-o','plus-square','plus-square-o','square','square-o','bitcoin','btc','cny','dollar','eur','euro','gbp','inr','jpy','krw','money','rmb','rouble','rub','ruble','rupee','try','turkish-lira','usd','won','yen','align-center','align-justify','align-left','align-right','bold','chain','chain-broken','clipboard','columns','copy','cut','dedent','eraser','file','file-o','file-text','file-text-o','files-o','floppy-o','font','header','indent','italic','link','list','list-alt','list-ol','list-ul','outdent','paperclip','paragraph','paste','repeat','rotate-left','rotate-right','save','scissors','strikethrough','subscript','superscript','table','text-height','text-width','th','th-large','th-list','underline','undo','unlink','angle-double-down','angle-double-left','angle-double-right','angle-double-up','angle-down','angle-left','angle-right','angle-up','arrow-circle-down','arrow-circle-left','arrow-circle-o-down','arrow-circle-o-left','arrow-circle-o-right','arrow-circle-o-up','arrow-circle-right','arrow-circle-up','arrow-down','arrow-left','arrow-right','arrow-up','arrows','arrows-alt','arrows-h','arrows-v','caret-down','caret-left','caret-right','caret-square-o-down','caret-square-o-left','caret-square-o-right','caret-square-o-up','caret-up','chevron-circle-down','chevron-circle-left','chevron-circle-right','chevron-circle-up','chevron-down','chevron-left','chevron-right','chevron-up','hand-o-down','hand-o-left','hand-o-right','hand-o-up','long-arrow-down','long-arrow-left','long-arrow-right','long-arrow-up','toggle-down','toggle-left','toggle-right','toggle-up','arrows-alt','backward','compress','eject','expand','fast-backward','fast-forward','forward','pause','play','play-circle','play-circle-o','step-backward','step-forward','stop','youtube-play','adn','android','apple','behance','behance-square','bitbucket','bitbucket-square','bitcoin','btc','codepen','css3','delicious','deviantart','digg','dribbble','dropbox','drupal','empire','facebook','facebook-square','flickr','foursquare','ge','git','git-square','github','github-alt','github-square','gittip','google','google-plus','google-plus-square','hacker-news','html5','instagram','joomla','jsfiddle','linkedin','linkedin-square','linux','maxcdn','openid','pagelines','pied-piper','pied-piper-alt','pied-piper-square','pinterest','pinterest-square','qq','ra','rebel','reddit','reddit-square','renren','share-alt','share-alt-square','skype','slack','soundcloud','spotify','stack-exchange','stack-overflow','steam','steam-square','stumbleupon','stumbleupon-circle','tencent-weibo','trello','tumblr','tumblr-square','twitter','twitter-square','vimeo-square','vine','vk','wechat','weibo','weixin','windows','wordpress','xing','xing-square','yahoo','youtube','youtube-play','youtube-square','ambulance','h-square','hospital-o','medkit','plus-square','stethoscope','user-md','wheelchair'];

	function camelcase(str){
		var p = str.toLowerCase().split("-");
		for(var i in p){
            p[i] = p[i].charAt(0).toUpperCase() + p[i].slice(1);
		}
		return p.join("");
	}

	for(var i in icons){
		FAIcon["FA" + camelcase(icons[i])] = createFAIcon(icons[i]);
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
