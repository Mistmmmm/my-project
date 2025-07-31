//1.绝对定位菜单
// 要操作的元素
const menu_box = document.querySelector('.menu-box');
const menu_button = document.querySelector('.menu-button');
// 为菜单按钮绑定点击事件
menu_button.addEventListener('click', function() {
	menu_box.classList.toggle('active');
})


//2.侧边栏
let menuitem = document.querySelector('.menu-item')
let menuitem4 = document.querySelector('.menu-item4')
let menuitem2 = document.querySelector('.menu-item2')
let menuitem3 = document.querySelector('.menu-item3')
let menuToggle = document.querySelector('.menuToggle')
let sidebar = document.querySelector('.sidebar')
menuToggle.onclick = function() {
	menuToggle.classList.toggle('active')
	sidebar.classList.toggle('active')
	menuitem.classList.toggle('menu-item1')
	menuitem4.classList.toggle('menu-item1')
	menuitem2.classList.toggle('menu-item1')
	menuitem3.classList.toggle('menu-item1')
}
let Menulist = document.querySelectorAll('.Menulist li')

function activeLink() {
	Menulist.forEach((item) => {
		item.classList.remove('active')
	})
	this.classList.add('active')
}
Menulist.forEach((item) => {
	item.addEventListener('click', activeLink)
})
document.addEventListener('DOMContentLoaded', function() {
	const menuHeaders = document.querySelectorAll('.menu-header');

	menuHeaders.forEach(header => {
		header.addEventListener('click', function() {
			// 移除所有 menu-header 的 active 类
			menuHeaders.forEach(h => {
				h.classList.remove('menu-header1');
				//同时移除其他相关类
				h.classList.remove('active');
			});

			// 为当前点击的添加类
			this.classList.add('menu-header1');
			this.classList.add('active'); // 可选的额外类

			//展开下拉菜单
			const content = this.nextElementSibling;
			if (content && content.classList.contains('dropdown-content')) {
				content.classList.toggle('show');
			}
		});
	});

	// 点击页面其他区域重置
	document.addEventListener('click', function(e) {
		if (!e.target.closest('.menu-header')) {
			menuHeaders.forEach(h => {
				h.classList.remove('menu-header1');
			});
		}
	});
});


//3.下拉框
// 点击页面其他区域关闭所有下拉菜单
document.addEventListener('click', function(event) {
	if (!event.target.closest('.menu-header')) {
		const openMenus = document.querySelectorAll('.dropdown-content.show');
		openMenus.forEach(menu => {
			menu.classList.remove('show');
			// 重置所有箭头
			const arrows = document.querySelectorAll('.arrow');
			arrows.forEach(arrow => {
				arrow.style.transform = 'rotate(0)';
			});
		});
	}
});


//4.手风琴
var acc = document.querySelectorAll(".accordion")
for (var i = 0; i < acc.length; i++) {
	acc[i].onclick = function() {
		this.classList.toggle("active")
		var panel = this.nextElementSibling
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px"
		}
	}
}




//5.Tab切换
// 获取要操作的元素
const items = document.querySelectorAll('.item');
const sections = document.querySelectorAll('section');
const sections1 = document.querySelectorAll('section1');
const sections2 = document.querySelectorAll('section2');
const items1 = document.querySelectorAll('.item1');
// 移除选中态
function removeActive() {
	// 移除标签选中态样式
	items.forEach(item => {
		item.classList.remove('active');
	});
	// 移除内容区选中态样式
	sections.forEach(item => {
		item.classList.remove('active');
	});
}

function removeActive2() {
	items1.forEach(item1 => {
		item1.classList.remove('active1');
	});
	// 移除内容区选中态样式
	sections1.forEach(item1 => {
		item1.classList.remove('active1');
	});
	sections2.forEach(item1 => {
		item1.classList.remove('active1');
	});
}
// 遍历所有标签
items.forEach((item, index) => {
	// 为每个标签绑定点击事件
	item.addEventListener('click', function() {
		// 移除选中态样式
		removeActive();
		// 为当前标签添加选中样式
		item.classList.add('active');
		// 为当前内容区添加选中样式
		sections[index].classList.add('active');
	})
})
items1.forEach((item1, index) => {
	// 为每个标签绑定点击事件
	item1.addEventListener('click', function() {
		// 移除选中态样式
		removeActive2();
		// 为当前标签添加选中样式
		item1.classList.add('active1');
		// 为当前内容区添加选中样式
		sections1[index].classList.add('active1');
		sections2[index].classList.add('active1');
	})
})



//6.音乐播放器
// 要操作的元素
let play_pause = document.querySelector('.play-pause'),
	player_track = document.querySelector('.player-track'),
	album_cover = document.querySelector('.album-cover'),
	bofanghezi = document.querySelector('.bofanghezi'),
	album_name = document.querySelector('.album-name'),
	track_name = document.querySelector('.track-name'),
	track_time = document.querySelector('.track-time'),
	current_time = document.querySelector('.current-time'),
	total_time = document.querySelector('.total-time'),
	progress_box = document.querySelector('.progress-box'),
	hover_time = document.querySelector('.hover-time'),
	hover_bar = document.querySelector('.hover-bar'),
	progress_bar = document.querySelector('.progress-bar'),
	play_prev = document.querySelector('.play-prev'),
	play_next = document.querySelector('.play-next');
// 专辑名数组
let albums = ['水龙吟', '拂晓', '不眠之夜', '不乱不破', '独角戏'];
// 歌曲信息数组
let track_names = ['HOYO-MiX/优素Yusuf - 水龙吟', 'HOYO-MiX/NIDA - 拂晓', 'HOYO-MiX - 不眠之夜', 'HOYO-MiX - 不乱不破',
	'HOYO-MiX - 独角戏'
];
// 定义变量
let progress_t, //鼠标在进度条上悬停的位置
	progress_loc, //鼠标在进度条上悬停的音频位置
	c_m, //悬停音频位置(分钟)
	ct_minutes, //悬停播放位置(分)
	ct_seconds, //悬停播放位置(秒)
	cur_minutes, //当前播放时间(分)
	cur_seconds, //当前播放时间(秒)
	dur_minutes, //音频总时长(分)
	dur_seconds, //音频总时长(秒)
	play_progress; //播放进度
// 当前歌曲下标
let cur_index = -1;
// 初始化
function initPlayer() {
	audio = new Audio(); //创建音频对象
	audio.loop = false; //不循环播放
	selectTrack(0);
	// 绑定播放暂停按钮的点击事件
	play_pause.addEventListener('click', playPause);
	// 进度条鼠标移动事件 - 显示悬停预览
	progress_box.addEventListener('mousemove', function(e) {
		showHover(e);
	});
	// 进度条鼠标离开事件 - 隐藏悬停预览
	progress_box.addEventListener('mouseout', hideHover);
	// 进度条点击事件 - 跳转到点击位置播放
	progress_box.addEventListener('click', playFromClickedPos);
	// 音频播放位置改变事件,实时更新进度条和时间显示
	audio.addEventListener('timeupdate', updateCurTime);
	// 上一首按钮点击事件
	play_prev.addEventListener('click', function() {
		selectTrack(-1);
	});
	// 下一首按钮点击事件
	play_next.addEventListener('click', function() {
		selectTrack(1);
	});
}
// 播放暂停
function playPause() {
	setTimeout(function() {
		if (audio.paused) {
			player_track.classList.add('active');
			play_pause.querySelector('.fa').classList = 'fa fa-pause';
			album_cover.classList.add('active');
			audio.play();
		} else {
			player_track.classList.remove('active');
			play_pause.querySelector('.fa').classList = 'fa fa-play';
			album_cover.classList.remove('active');
			audio.pause();
		}
	}, 300); //0.3s延迟
}
// 显示悬停播放位置弹层
function showHover(e) {
	// 计算鼠标在进度条上的悬停位置(当前鼠标的X坐标-进度条在窗口中的left位置,相对于进度条左侧的距离）
	progress_t = e.clientX - progress_box.getBoundingClientRect().left;
	// 计算鼠标在进度条上悬停时的音频位置
	// audio.duration 音频总时长
	// 根据相对位置计算对应的音频时间点
	// 公式：总时长 × (鼠标位置 / 进度条总宽度)
	progress_loc = audio.duration * (progress_t / progress_box.getBoundingClientRect().width);
	// 设置悬停进度条的宽度（深色部分）
	hover_bar.style.width = progress_t + 'px';
	// 计算时间（分钟）
	c_m = progress_loc / 60;
	// 向下取整得到分钟数
	ct_minutes = Math.floor(c_m);
	// 计算剩余秒数
	ct_seconds = Math.floor(progress_loc - ct_minutes * 60);
	// 时间格式化：补零处理
	if (ct_minutes < 10) {
		ct_minutes = '0' + ct_minutes;
	}
	if (ct_seconds < 10) {
		ct_seconds = '0' + ct_seconds;
	}
	// 处理NaN情况（音频未加载完成时）
	if (isNaN(ct_minutes) || isNaN(ct_seconds)) {
		hover_time.innerText = '--:--';
	} else {
		// 显示格式化后的时间（如 03:45）
		hover_time.innerText = ct_minutes + ':' + ct_seconds;
	}
	// 设置悬停播放位置弹层的位置并显示
	hover_time.style.left = progress_t + 'px';
	hover_time.style.marginLeft = '-20px'; // 居中对齐
	hover_time.style.display = 'block'; // 显示提示框
}
// 隐藏悬停播放位置弹层
function hideHover() {
	// 重置悬停进度条和提示框
	hover_bar.style.width = '0px';
	hover_time.innerText = '00:00';
	hover_time.style.left = '0px';
	hover_time.style.marginLeft = '0px';
	// 隐藏提示框
	hover_time.style.display = 'none';
}
// 从点击的位置开始播放
function playFromClickedPos() {
	// 设置当前播放时间，音频当前播放位置为点击位置对应的时间
	audio.currentTime = progress_loc;
	// 设置进度条宽度
	progress_bar.style.width = progress_t + 'px';
	// 隐藏悬停播放位置弹层
	hideHover();
}
// 改变当前播放时间，与上面一样，自己看解释
function updateCurTime() {
	// 当前播放时间(分)
	cur_minutes = Math.floor(audio.currentTime / 60);
	// 当前播放时间(秒)
	cur_seconds = Math.floor(audio.currentTime - cur_minutes * 60);
	// 音频总时长(分)
	dur_minutes = Math.floor(audio.duration / 60);
	// 音频总时长(秒)
	dur_seconds = Math.floor(audio.duration - dur_minutes * 60);
	// 计算播放进度
	play_progress = audio.currentTime / audio.duration * 100;

	if (cur_minutes < 10) {
		cur_minutes = '0' + cur_minutes;
	}
	if (cur_seconds < 10) {
		cur_seconds = '0' + cur_seconds;
	}
	if (dur_minutes < 10) {
		dur_minutes = '0' + dur_minutes;
	}
	if (dur_seconds < 10) {
		dur_seconds = '0' + dur_seconds;
	}
	// 设置播放时间
	if (isNaN(cur_minutes) || isNaN(cur_seconds)) {
		current_time.innerText = '00:00';
	} else {
		current_time.innerText = cur_minutes + ':' + cur_seconds;
	}
	// 设置总时长
	if (isNaN(dur_minutes) || isNaN(dur_seconds)) {
		total_time.innerText = '00:00';
	} else {
		total_time.innerText = dur_minutes + ':' + dur_seconds;
	}
	// 设置进度条宽度
	progress_bar.style.width = play_progress + '%';
	// 播放完毕, 恢复样式
	if (play_progress == 100) {
		play_pause.querySelector('.fa').classList = 'fa fa-play';
		progress_bar.style.width = '0px';
		current_time.innerText = '00:00';
		player_track.classList.remove('active');
		album_cover.classList.remove('active');
	}
}
// 切换歌曲(flag: 0=初始, 1=下一首, -1=上一首)
function selectTrack(flag) {
	if (flag == 0 || flag == 1) {
		++cur_index;
	} else {
		--cur_index;
	}

	if (cur_index > -1 && cur_index < albums.length) {
		if (flag == 0) {
			play_pause.querySelector('.fa').classList = 'fa fa-play';
		} else {
			play_pause.querySelector('.fa').classList = 'fa fa-pause';
		}
		progress_bar.style.width = '0px';
		current_time.innerText = '00:00';
		total_time.innerText = '00:00';
		// 当前专辑名
		let cur_album = albums[cur_index];
		// 当前歌曲信息(歌手 - 歌名)
		let cur_track_name = track_names[cur_index];
		// 设置音频路径
		audio.src = './mp3/' + cur_album + '.mp3';
		if (flag != 0) {
			// 当切换上一首,下一首时,自动播放
			audio.play();
			player_track.classList.add('active');
			album_cover.classList.add('active');
		}
		// 设置专辑名
		album_name.innerText = cur_album;
		// 设置歌曲信息
		track_name.innerText = cur_track_name;
		// 设置封面
		album_cover.querySelector('.active').classList.remove('active');
		album_cover.getElementsByTagName('img')[cur_index].classList.add('active');
		// 将封面设置为背景大图
		bofanghezi.style.backgroundImage = 'url(' + album_cover.getElementsByTagName('img')[cur_index].getAttribute(
				'src') +
			')';
	} else {
		// 切换溢出专辑数组时, 恢复cur_index
		if (flag == 0 || flag == 1) {
			--cur_index;
		} else {
			++cur_index;
		}
	}
}
// 初始化播放器
initPlayer();
// 获取音乐按钮和关闭按钮
const musicButton = document.querySelector('.yinyuebofang');
const closeButton = document.querySelector('.close-button');
const bofangzhengping = document.querySelector('.bofangzhengping');
const bofanghezie = document.querySelector('.bofanghezi');
// 点击音乐按钮显示播放器
musicButton.addEventListener('click', function() {
	bofangzhengping.style.display = 'flex';
	bofanghezie.style.display = 'flex';
});
// 点击关闭按钮隐藏播放器
closeButton.addEventListener('click', function() {
	bofangzhengping.style.display = 'none';
	bofanghezie.style.display = 'none';
});



//7.瀑布流
document.addEventListener('DOMContentLoaded', function() {
	// 获取元素
	const zuanshi = document.querySelector('.zuanshi');
	const sortableContainer = document.querySelector('.sortable');
	const closeButton = document.querySelector('.close-button2');

	// 点击钻石显示瀑布流
	zuanshi.addEventListener('click', function() {
		document.body.style.overflow = 'hidden'; // 防止页面滚动
		sortableContainer.classList.add('active');
	});

	// 点击关闭按钮隐藏瀑布流
	closeButton.addEventListener('click', function(e) {
		e.stopPropagation(); // 防止事件冒泡
		document.body.style.overflow = ''; // 恢复页面滚动
		sortableContainer.classList.remove('active');
	});

	// 点击遮罩层也可以关闭
	sortableContainer.addEventListener('click', function(e) {
		if (e.target === sortableContainer) {
			document.body.style.overflow = '';
		}
	});
});

//8.Tab乱破
var index = 0; // 点击计数器，记录按钮点击次数
$('.contentTab-l button').click(function() {
	index++; // 点击次数+1
	if (index % 2 == 1) {
		// 标题样式：向左上移动95px，宽度缩小至50%
		$('.contentTab-l h2').attr("style",
			"transform: translate(-95px, 10px); width: 50%;")
		// 文本样式：向左上移动95px，宽度缩小至50%，字体调整
		$('.contentTab-l span').attr("style",
			"transform: translate(-95px, 10px); width: 50%; font: 400 20px 'Gochi Hand'; line-height: 1.5; "
		)
		// 按钮样式：宽度缩小，旋转180°，居中显示
		$('.contentTab-l button').attr("style",
			"width: 100px; height: 55px; top: 15%; background-position-x: 0px; transform: rotate(180deg);display:flex;justify-content: center;align-items: center;"
		)
		// 圆形元素样式：放大，移动到右侧，边框样式调整
		$('.circle').attr("style",
			"width: 400px;height: 400px;left: 57%;top: 50%;border: 23px #ffffff dashed; ")
		// 左侧图片样式：上移到底部边界
		$('.contentTab-l img').attr("style",
			"bottom: 0px;")
		// 左右栏宽度调整：左栏60%，右栏40%
		$('.contentTab-l').attr("style",
			"width: 60%;")
		$('.contentTab-r').attr("style",
			"width: 40%;z-index:667")
		// 右侧图片样式：重置缩放和旋转，添加圆角
		$('.img').attr("style",
			"padding: 5px; transform: scale(1);")
		$('.img img').attr("style",
			"transform: rotate(0);width: 100%;height: 100%;box-shadow: none;border-radius: 30px;")
		// 通过动态创建style标签修改伪元素样式
		var style = document.createElement('style');
		style.innerHTML = `
                .contentTab::before {
                   width: 900px;
                   height: 900px;
                   left: 49%;
                   bottom: -27%;
                }
            `;
		document.head.appendChild(style);
		var style = document.createElement('style');
		style.innerHTML = `
                .contentTab::after {
                    opacity: 0;
                }
            `;
		document.head.appendChild(style);

	} else {
		//和上面差不多，自己看解释去
		$('.contentTab-l h2').attr("style",
			" transform: translateY(-30px); width: 80%;")
		$('.contentTab-l span').attr("style",
			"transform: translateY(-50px); width: 80%; font: 100 15px 'Gochi Hand'; line-height: 2; ")
		$('.contentTab-l button').attr("style",
			"width: 150px; height: 50px; top: 80%; background-position-x: 0; transform: rotate(0deg);")
		$('.circle').attr("style",
			"width: 800px;height: 800px;left: -440px;bottom: -440px;border: 43px #fff dashed; ")
		$('.contentTab-l img').attr("style",
			"bottom: -500px;")
		$('.contentTab-l').attr("style",
			"width: 35%;")
		$('.contentTab-r').attr("style",
			"width: 65%;")
		$('.img').attr("style",
			"padding: 0px;  ")
		$('.img img').attr("style",
			"width: 60%;height: 90%;box-shadow: 10px 20px 28px #0c48888c;border-radius: 0px;")
		// 通过动态创建style标签修改伪元素样式
		var style = document.createElement('style');
		style.innerHTML = `
                .contentTab::before {
                   width: 700px;
                   height: 700px;
                   left: -420px;
                   bottom:-420px;
                }
            `;
		document.head.appendChild(style);
		var style = document.createElement('style');
		style.innerHTML = `
                .contentTab::after {
                    opacity: 1;
                }
            `;
		document.head.appendChild(style);
	}
})

//9.花火翻转
class Cardhua {
	constructor({
		imageUrl,
		onDismiss,
		onLike,
		onDislike
	}) {
		this.imageUrl = imageUrl;
		this.onDismiss = onDismiss;
		this.onLike = onLike;
		this.onDislike = onDislike;
		this.#init();
	}

	// private properties
	#startPoint;
	#offsetX;
	#offsetY;

	#isTouchDevice = () => {
		    // 检测是否为触摸设备
		return (('ontouchstart' in window) ||
			(navigator.maxTouchPoints > 0) ||
			(navigator.msMaxTouchPoints > 0));
	}

	#init = () => {
		const cardhua = document.createElement('div');
		cardhua.classList.add('cardhua');
		const img = document.createElement('img');
		img.src = this.imageUrl;
		cardhua.append(img);
		this.element = cardhua;
		if (this.#isTouchDevice()) {
			this.#listenToTouchEvents();
		} else {
			this.#listenToMouseEvents();
		}
	}

	#listenToTouchEvents = () => {
		this.element.addEventListener('touchstart', (e) => {
			const touch = e.changedTouches[0];
			if (!touch) return;
			const {
				clientX,
				clientY
			} = touch;
			this.#startPoint = {
				x: clientX,
				y: clientY
			}
			document.addEventListener('touchmove', this.#handleTouchMove);
			this.element.style.transition = 'transform 0s';
		});

		document.addEventListener('touchend', this.#handleTouchEnd);
		document.addEventListener('cancel', this.#handleTouchEnd);
	}

	#listenToMouseEvents = () => {
		this.element.addEventListener('mousedown', (e) => {
			const {
				clientX,
				clientY
			} = e;
			this.#startPoint = {
				x: clientX,
				y: clientY
			}
			document.addEventListener('mousemove', this.#handleMouseMove);
			this.element.style.transition = 'transform 0s';
		});

		document.addEventListener('mouseup', this.#handleMoveUp);

		// prevent cardhua from being dragged
		this.element.addEventListener('dragstart', (e) => {
			e.preventDefault();
		});
	}

	#handleMove = (x, y) => {
		this.#offsetX = x - this.#startPoint.x;
		this.#offsetY = y - this.#startPoint.y;
		const rotate = this.#offsetX * 0.1;
		this.element.style.transform = `translate(${this.#offsetX}px, ${this.#offsetY}px) rotate(${rotate}deg)`;
		// dismiss cardhua
		if (Math.abs(this.#offsetX) > this.element.clientWidth * 0.7) {
			this.#dismiss(this.#offsetX > 0 ? 1 : -1);
		}
	}

	// mouse event handlers
	#handleMouseMove = (e) => {
		e.preventDefault();
		if (!this.#startPoint) return;
		const {
			clientX,
			clientY
		} = e;
		this.#handleMove(clientX, clientY);
	}

	#handleMoveUp = () => {
		this.#startPoint = null;
		document.removeEventListener('mousemove', this.#handleMouseMove);
		this.element.style.transform = '';
	}

	// touch event handlers
	#handleTouchMove = (e) => {
		if (!this.#startPoint) return;
		const touch = e.changedTouches[0];
		if (!touch) return;
		const {
			clientX,
			clientY
		} = touch;
		this.#handleMove(clientX, clientY);
	}

	#handleTouchEnd = () => {
		this.#startPoint = null;
		document.removeEventListener('touchmove', this.#handleTouchMove);
		this.element.style.transform = '';
	}

	#dismiss = (direction) => {
		this.#startPoint = null;
		document.removeEventListener('mouseup', this.#handleMoveUp);
		document.removeEventListener('mousemove', this.#handleMouseMove);
		document.removeEventListener('touchend', this.#handleTouchEnd);
		document.removeEventListener('touchmove', this.#handleTouchMove);
		this.element.style.transition = 'transform 1s';
		this.element.style.transform =
			`translate(${direction * window.innerWidth}px, ${this.#offsetY}px) rotate(${90 * direction}deg)`;
		this.element.classList.add('dismissing');
		setTimeout(() => {
			this.element.remove();
		}, 1000);
		if (typeof this.onDismiss === 'function') {
			this.onDismiss();
		}
		if (typeof this.onLike === 'function' && direction === 1) {
			this.onLike();
		}
		if (typeof this.onDislike === 'function' && direction === -1) {
			this.onDislike();
		}
	}
}


// DOM
const swiper = document.querySelector('#swiper');
const like = document.querySelector('#like');
const dislike = document.querySelector('#dislike');

// constants
const urls = [
	'./images/花火/花火1.jpg',
	'./images/花火/花火2.jpg',
	'./images/花火/花火3.jpg',
	'./images/花火/花火4.jpg',
	'./images/花火/花火5.jpg'
];

// variables
let cardhuaCount = 0;

// functions
function appendNewcardhua() {
	const cardhua = new Cardhua({
		imageUrl: urls[cardhuaCount % 5], // 循环使用图片
		onDismiss: appendNewcardhua,
		onLike: () => {
			like.style.animationPlayState = 'running';
			like.classList.toggle('trigger');
		},
		onDislike: () => {
			dislike.style.animationPlayState = 'running';
			dislike.classList.toggle('trigger');
		}
	});
	swiper.append(cardhua.element);
	cardhuaCount++;

	const cardhuas = swiper.querySelectorAll('.cardhua:not(.dismissing)');
	cardhuas.forEach((cardhua, index) => {
		cardhua.style.setProperty('--i', index);
	});
}

// first 5 cardhuas
for (let i = 0; i < 5; i++) {
	appendNewcardhua();
}


// 11.电梯导航
// 电梯导航功能
document.addEventListener('DOMContentLoaded', function() {
	// 获取所有导航链接
	const navLinks = document.querySelectorAll('.sidebar .submenu-item, .sidebar a[href^="#"]');

	// 获取所有对应的内容区块
	const sections = document.querySelectorAll(
		'.kapianyi, .kapianer, .kapiansan, .kapiansi, .kapianwu, .kapianliu');

	// 为每个导航链接添加点击事件
	navLinks.forEach(link => {
		link.addEventListener('click', function(e) {
			e.preventDefault();
			const targetId = this.getAttribute('href');
			const targetSection = document.querySelector(targetId);
			if (targetSection) {
// 12.平滑滚动到目标区块
				window.scrollTo({
					top: targetSection.offsetTop - 50, // 减去一些偏移量，避免被固定导航栏遮挡
					behavior: 'smooth'
				});
				// 更新导航菜单高亮状态
				updateActiveNav(targetId);
			}
		});
	});

	// 使用Intersection Observer API来检测当前可见的区块
	const observerOptions = {
		root: null,
		rootMargin: '0px',
		threshold: 0.3
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const id = entry.target.getAttribute('id');
				updateActiveNav(`#${id}`);
			}
		});
	}, observerOptions);

	// 观察所有内容区块
	sections.forEach(section => {
		observer.observe(section);
	});

	// 更新当前活动导航项的函数
	function updateActiveNav(targetId) {
		// 移除所有活动状态
		document.querySelectorAll('.sidebar li.active').forEach(item => {
			item.classList.remove('active');
		});

		// 找到对应的导航项并添加活动状态
		const activeNav = document.querySelector(`.sidebar a[href="${targetId}"]`);
		if (activeNav) {
			// 找到最近的li父元素
			let parentLi = activeNav.closest('li');
			while (parentLi) {
				parentLi.classList.add('active');
				parentLi = parentLi.parentElement.closest('li');
			}

			// 如果导航项在折叠菜单中，展开父菜单
			const parentMenu = activeNav.closest('.dropdown-content');
			if (parentMenu) {
				parentMenu.classList.add('show');
				const menuHeader = parentMenu.previousElementSibling;
				if (menuHeader) {
					menuHeader.classList.add('menu-header1');
					const arrow = menuHeader.querySelector('.arrow');
					if (arrow) {
						arrow.style.transform = 'rotate(180deg)';
					}
				}
			}
		}
	}
});