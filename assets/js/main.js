$(document).ready(function () {
	// 視差初始化
	new universalParallax().init();
	// AOS初始化
	AOS.init();
	// chart初始化
	chart();
	// 選擇器
	selector_nav();
	// 計數器
	$(".count_number").each(counting);
	// table rwd
	rwd_table();
	// 手機版導覽列不要下滑
	is_phone_nav();
	// 首頁菜單切換parallax跟著一起換
	index_menu_switch();
	// 圖片resize
	// pic_resize();
});
// resize
$(window).resize(function () {
	// table rwd
	rwd_table();
	// 手機版導覽列不要下滑
	is_phone_nav();
});
// go_to_top
$('a#go_to_top[href*="#"]')
	.not('[href="#"]')
	.not('[href="#0"]')
	.click(function (t) {
		if (
			location.pathname.replace(/^\//, "") ==
				this.pathname.replace(/^\//, "") &&
			location.hostname == this.hostname
		) {
			var e = $(this.hash);
			(e = e.length ? e : $("[name=" + this.hash.slice(1) + "]")),
				e.length &&
					(t.preventDefault(),
					$("html, body").animate(
						{
							scrollTop: e.offset().top,
						},
						600,
						function () {
							var t = $(e);
							if ((t.focus(), t.is(":focus"))) return !1;
							t.attr("tabindex", "-1"), t.focus();
						}
					));
		}
	});

// ====================================================================================================
// function
// ====================================================================================================
// selector_nav
function selector_nav() {
	// 顯示ALL
	// $("#selector_nav").children(":first").text("ALL");
	// 點擊ALL
	$("#selector_nav").children(":first").click();
	// 預設選取
	$("#selector_nav").children(":first").addClass("active");
	// 標籤加上顏色
	$("#selector_nav button").click(function () {
		$("#selector_nav button").removeClass("active");
		$(this).addClass("active");
	});
}
// chart
function chart() {
	$(".chart").easyPieChart({
		size: 100,
		scaleColor: false,
		lineWidth: "6",
		trackColor: "#f9f9f9",
		animate: { duration: 2000, enabled: true },
	});
}
// 計數器
function counting() {
	var start = 0;
	var duration = 1500;
	var obj = $(this);
	var end = obj.attr("data-number");
	var increment = 0.1;

	if (start === end) return;
	var range = end - start;
	var current = start;
	var stepTime = Math.abs(Math.floor(duration / range) * increment);

	var timer = setInterval(function () {
		current += increment;
		obj.html(Math.round(current * 100) / 100 + "%");
		if (current >= end) {
			clearInterval(timer);
		}
	}, stepTime);
}
// 標籤selector
function switch_tab(tabID) {
	$(".tab-pane1").css("display", "none");

	if (tabID == "tab_sponsor") {
		$("#" + tabID).attr("style", "display: grid !important");
	} 
	else {
		$("#" + tabID).attr("style", "display: block !important");
	}
}
// 下拉動畫
$(".dropdown_animation a.title").click(function () {
	var content = $(this).siblings(".content");

	content.slideToggle("slow", function () {
		if (content.is(":visible")) {} 
		else {
			content
				.siblings("a.title")
				.children(".grey_block")
				.children("i")
				.removeClass("open");
			content
				.siblings("a.title").css("background-color","#f7f7f7");
		}
	});
	content
		.siblings("a.title")
		.children(".grey_block")
		.children("i")
		.addClass("open");
	content
		.siblings("a.title").css("background-color","#fff");
});

// table rwd
function rwd_table() {
	if ($(window).width() > 992) {
		// 移除手機版table樣式
		$("table.table.table-striped").removeClass("rwd-table");
	} else if ($(window).width() <= 992) {
		// 手機版table樣式
		$("table.table.table-striped").addClass("rwd-table");
	}
}
// 捐款表單縮放
$("input[type=radio][name=receipt]").change(function () {
	if (this.value == "need") {
		$(".choose_address").slideToggle("slow");
	} else if (this.value == "no") {
		$(".choose_address").slideToggle("slow");
	}
});
$("input[type=radio][name=receipt_address]").change(function () {
	if (this.value == "same") {
		$(".select_address").slideToggle("slow");
	} else if (this.value == "other") {
		$(".select_address").slideToggle("slow");
	}
});
// 手機版導覽選單動畫不要下滑
function is_phone_nav() {
	if ($(window).width() > 992) {
		$("li.nav-item.dropdown .dropdown-menu").addClass("animate__animated");
	} else if ($(window).width() <= 992) {
		$("li.nav-item.dropdown .dropdown-menu").removeClass("animate__animated");
	}
}

// 首頁菜單切換parallax跟著一起換
function index_menu_switch() {
	// $('.active_parallax').attr('style','display: none !important')
	// $('.active1_parallax').attr('style','display: block !important')
	$('a.active1').click(function (e) { 
		$('.active_parallax').attr('style','display: none !important')
		$('.active1_parallax').attr('style','display: block !important')
	});
	$('a.active2').click(function (e) { 
		$('.active_parallax').attr('style','display: none !important')
		$('.active2_parallax').attr('style','display: block !important')
	});
	$('a.active3').click(function (e) { 
		$('.active_parallax').attr('style','display: none !important')
		$('.active3_parallax').attr('style','display: block !important')
	});
	$('a.active4').click(function (e) { 
		$('.active_parallax').attr('style','display: none !important')
		$('.active4_parallax').attr('style','display: block !important')
	});
	$('a.active5').click(function (e) { 
		$('.active_parallax').attr('style','display: none !important')
		$('.active5_parallax').attr('style','display: block !important')
	});
	$('a.active6').click(function (e) { 
		$('.active_parallax').attr('style','display: none !important')
		$('.active6_parallax').attr('style','display: block !important')
	});
}

// 會員圖片縮放
function pic_resize() {
	var bar = $('#zoom_bar')
	var pic = $('#resize_pic')
	pic.css("transform",'scale('+bar.val()+')');
}
// ====================================================================================================
// normal
// ====================================================================================================
// 首頁手機版swiper區塊調整排版
$(".d-lg-none .swiper")
	.parents(".bg_parallax")
	.css({ display: "block", height: "auto" });

// 首頁手機版swiper區塊slick
$(".swiper").slick({
	arrows: true,
	centerMode: true,
	infinite: true,
	autoplay: true,
	dots: true,
	autoplaySpeed: 200000,
	slidesToShow: 3,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 576,
			settings: {
				centerMode: false,
				slidesToShow: 1,
			},
		},
	],
});


// 地圖切換選單
$(".menu-toggle").click(function(e) {
	e.preventDefault();
	$("#wrapper").toggleClass("toggled");
  });

// 報名國際志工選單
$("a.choose_pane").click(function () {
	var url = $(this).attr('href');
	// 側邊選單切換
	$("ul.foreign_volunteer_nav li a").removeClass("active");
	$(this).addClass("active");

	// 內容切換
	$(".tab-pane").removeClass("show");
	$(".tab-pane").removeClass("active");
	$(url).addClass("show");
	$(url).addClass("active");

	// 按底下按鈕，側邊跟著一起選
	$("ul.foreign_volunteer_nav li a").each(function() {
		if ($(this).attr('href')==url) {
			$(this).addClass("active");
		}
	});
	$("html, body").animate({ scrollTop: 0 }, "slow");
	
})

// 資金運用規則chart
new Chart($("#canvas1"), {
	type: 'doughnut',
	data: {
		labels: ["貨櫃運送","物資募集","沙蚤治療","物資發送","業務執行"],
		datasets: [{
			data: [45, 15, 15, 15, 10],
			backgroundColor: [
				"#CD7E68",
				"#D79885",
				"#DFAD9E",
				"#E5BDB1",
				"#EBC9C0"
			]
		}]
	},
	options: {
		responsive: true,
		animation:{
			duration: 1500
		},
		legend:{
			position: 'left',
			// 使label無法點擊
			onClick: (e) => e.stopPropagation(),
			labels:{
				// label字體大小
				fontSize: 16
			}
		},
		tooltips: {
			callbacks: {
				label: function(tooltipItem, data) {
					return data['labels'][tooltipItem['index']];
				}
      		}
		},
		plugins: {
			labels: {
				render: 'percentage',
				fontColor: 'white',
				fontStyle: 'bold',
				fontSize: '16'
			}
		}
	}
});
new Chart($("#canvas2"), {
	type: 'doughnut',
	data: {
		labels: ["貨櫃改建","軟、硬體設備","業務執行","貨櫃轉運置放"],
		datasets: [{
			data: [50, 35, 10, 5],
			backgroundColor: [
				"#E1315A",
				"#E74A7A",
				"#EB6995",
				"#F085A9"
			]
		}]
	},
	options: {
		responsive: true,
		animation:{
			duration: 1500
		},
		legend:{
			position: 'left',
			// 使label無法點擊
			onClick: (e) => e.stopPropagation(),
			labels:{
				// label字體大小
				fontSize: 16
			}
		},
		tooltips: {
			callbacks: {
				label: function(tooltipItem, data) {
					return data['labels'][tooltipItem['index']];
				}
      		}
		},
		plugins: {
			labels: {
				render: 'percentage',
				fontColor: 'white',
				fontStyle: 'bold',
				fontSize: '16'
			}
		}
	}
});
new Chart($("#canvas3"), {
	type: 'doughnut',
	data: {
		labels: ["鑿井工程","供水系統","安裝建設","水質檢驗","後續維護"],
		datasets: [{
			data: [50, 21, 15, 8, 6],
			backgroundColor: [
				"#038DCB",
				"#48A4D4",
				"#6EB5DE",
				"#8BC3E4",
				"#A4D0EA"
			]
		}]
	},
	options: {
		responsive: true,
		animation:{
			duration: 1500
		},
		legend:{
			position: 'left',
			// 使label無法點擊
			onClick: (e) => e.stopPropagation(),
			labels:{
				// label字體大小
				fontSize: 16
			}
		},
		tooltips: {
			callbacks: {
				label: function(tooltipItem, data) {
					return data['labels'][tooltipItem['index']];
				}
      		}
		},
		plugins: {
			labels: {
				render: 'percentage',
				fontColor: 'white',
				fontStyle: 'bold',
				fontSize: '16'
			}
		}
	}
});
new Chart($("#canvas4"), {
	type: 'doughnut',
	data: {
		labels: ["示範農場","農耕教學","養雞培力","業務執行"],
		datasets: [{
			data: [40, 35, 15, 10],
			backgroundColor: [
				"#86E027",
				"#9EE550",
				"#B2EA73",
				"#C2EE8E"
			]
		}]
	},
	options: {
		responsive: true,
		animation:{
			duration: 1500
		},
		legend:{
			position: 'left',
			// 使label無法點擊
			onClick: (e) => e.stopPropagation(),
			labels:{
				// label字體大小
				fontSize: 16
			}
		},
		tooltips: {
			callbacks: {
				label: function(tooltipItem, data) {
					return data['labels'][tooltipItem['index']];
				}
      		}
		},
		plugins: {
			labels: {
				render: 'percentage',
				fontColor: 'white',
				fontStyle: 'bold',
				fontSize: '16'
			}
		}
	}
}); 
new Chart($("#canvas5"), {
	type: 'doughnut',
	data: {
		labels: ["宣教推廣","宣教教育","業務執行","工廠基地管理"],
		datasets: [{
			data: [30, 30, 20, 20],
			backgroundColor: [
				"#C32522",
				"#CF424A",
				"#D9646E",
				"#E08289"
			]
		}]
	},
	options: {
		responsive: true,
		animation:{
			duration: 1500
		},
		legend:{
			position: 'left',
			// 使label無法點擊
			onClick: (e) => e.stopPropagation(),
			labels:{
				// label字體大小
				fontSize: 16
			}
		},
		tooltips: {
			callbacks: {
				label: function(tooltipItem, data) {
					return data['labels'][tooltipItem['index']];
				}
      		}
		},
		plugins: {
			labels: {
				render: 'percentage',
				fontColor: 'white',
				fontStyle: 'bold',
				fontSize: '16'
			}
		}
	}
});

// 執行團隊切標籤動畫
$('.nav-link').on("click",function () {
	$('.profile').removeClass('aos-animate');
	setTimeout(function() {
		$('.profile').addClass('aos-animate');
	}, 200);
})