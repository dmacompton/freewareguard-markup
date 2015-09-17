$(document).ready(function(){
	
	$('.new-search img, .search-close').click(function(){
				$('.new-menu').toggleClass('search-active');
				$('.new-logo').toggleClass('search-active');
				$('.new-search .search-string').toggleClass('active');
                                $('.new-search .search-string input').focus();
			});
			$('.new-menu').click(function(){
				$('.new-menu').toggleClass('mobile-active');
				$('.new-platform').removeClass('mobile-active');
			});
			$('.new-platform').click(function(){
				$('.new-platform').toggleClass('mobile-active');
				$('.new-menu').removeClass('mobile-active');
			});
			$('.new-menu li').click(function(e){
				e.stopPropagation();
			});
			$('.new-menu > li').click(function(){
				$(this).toggleClass('active');
			});

			$('.new-menu').mouseover(function(){
				$('.new-menu > li').on('click',function(e){
					e.stopPropagation();
					$(this).toggleClass('active');
				});
			});
			$('.new-menu').mouseleave(function(){
				$('.new-menu > li').off('click');
			});
	
	var isOverGoogleAd = false;
	var currentObj = '';
	 
	$( "#aswift_2,#aswift_1,#aswift_0" )
	.mouseover(
		function(){
			isOverGoogleAd = true;
			currentObj = $(this).attr('id');
		}
	)
	.mouseout(
		function(){
			isOverGoogleAd = false;
			currentObj = $(this).attr('id');
	}
	)
	;
	$( window ).blur(
		function(eventObject){
			if (isOverGoogleAd){
				
				typePage = ($('#aswift_2').length == 0) ? 'Category' : 'Install';
				ga('send', 'event', typePage, $('#nameP').val());
				
				var dataT = {
					'pub' : $('#'+currentObj).closest('.adsbygoogle').attr('data-ad-client'),
					'slot' : $('#'+currentObj).closest('.adsbygoogle').attr('data-ad-slot'),
					'place' : currentObj,
					'page' : typePage,
					'name' : $('#nameP').val()
				};
				
				$.ajax({
					url : '/ablocks/setClick',
					type : 'post',
					data : dataT
				});
				
				
			}
		}
	)

	.focus()
	;
	
	$('.rm').click(function() {
		if ($('.inset_text').css('overflow') == 'hidden') {
			$('.inset_text').css({'height':'auto', 'overflow':'visible'});
			$(this).html('Hide');
		}
		else {
			$('.inset_text').css({'height':'305px', 'overflow':'hidden'});
			$(this).html('Read more...');
		}
	});
	
	$('#comments_more').click(function() {
		if ($(this).html() == 'More') {
			$('.comments .crow').fadeIn("slow");
			$(this).html('Hide');
		}
		else {
			$('.comments .crow:nth-child(n+2)').fadeOut("slow");
			$(this).html('More');
		}
	});
	
	$('.stars i').hover(
	function() {
		ind = $(this).index();
		$('.stars i').removeClass('active');
		$('.stars i').each(function()
		{
			if ($(this).index() > ind) return false;
			$(this).addClass('active');
		});
	},
	function() {
		exist = parseInt($('input[name="mark"]').val())-1;
		$('.stars i').removeClass('active');
		$('.stars i').each(function()
		{
			if ($(this).index() > exist) return false;
			$(this).addClass('active');
		});
	});

	$('.stars i').click(function(){
		$('input[name="mark"]').val($(this).index()+1);
	});
        	$('.starss i').hover(
	function() {
		ind = $(this).index();
		$('.starss i').removeClass('active');
		$('.starss i').each(function()
		{
			if ($(this).index() > ind) return false;
			$(this).addClass('active');
		});
	},
	function() {
		exist = parseInt($('input[name="mark"]').val())-1;
		$('.starss i').removeClass('active');
		$('.starss i').each(function()
		{
			if ($(this).index() > exist) return false;
			$(this).addClass('active');
		});
	});

	$('.starss i').click(function(){
		$('input[name="mark"]').val($(this).index()+1);
	});
	
	$('.user-stars i').hover(
	function() {
		ind = $(this).index();
		$('.user-stars i').removeClass('active');
		$('.user-stars i').each(function()
		{
			if ($(this).index() > ind) return false;
			$(this).addClass('active');
		});
	},
	function() {
		exist = parseInt($('input[name="user-mark"]').val())-1;
		$('.user-stars i').removeClass('active');
		$('.user-stars i').each(function()
		{
			if ($(this).index() > exist) return false;
			$(this).addClass('active');
		});
	});

	$('.user-stars i').click(function(){
		$('input[name="user-mark"]').val($(this).index()+1);
		$.ajax({
			url: '/control/ajaxSetRating/',
			type: 'post',
			async: false,
			data: { 'mark' : $('input[name="user-mark"]').val(), 'post_id' : $('input[name="post_id"]').val() },
			success: function(dat) { $('#ajaxrating').html(dat); }
		});
		$.ajax({
			url: '/control/ajaxGetStars/',
			type: 'post',
			async: false,
			data: { 'post_id' : $('input[name="post_id"]').val() },
			success: function(dat) { $('.user-stars').html(dat); }
		});
		$('input[name="mark"]').val($('input[name="user-mark"]').val());
		$('.stars>i').each(function() {
			if ($(this).index() < parseInt($('input[name="user-mark"]').val())) $(this).addClass('active');
		});
		$('[name="signup"]').click();
		$('[id="signup"]').click();
	});
	
	$('#catalog-header').toggle(
		function() {
			$('.float-header-down').css({'left':$('#catalog-header').position().left-200});
			$('.float-header-down').animate({'height':'show'}, 300);
			$(this).closest('.float-header-item').find('.float-arrow').css({'transform':'rotate(0deg)'});
		},
		function() {
			$('.float-header-down').animate({'height':'hide'}, 300);
			$(this).closest('.float-header-item').find('.float-arrow').css({'transform':'rotate(180deg)'});
		}
	);
	$('#catalog-header').mouseover(
		function() {
			$('.float-header-down').css({'left':$('#catalog-header').position().left-200});
			$('.float-header-down').animate({'height':'show'}, 300);
			$(this).closest('.float-header-item').find('.float-arrow').css({'transform':'rotate(0deg)'});
		}					
	);
	$('.float-header-down').mouseleave(
		function() {
			$(this).animate({'height':'hide'}, 300);
			$(this).closest('.float-header-item').find('.float-arrow').css({'transform':'rotate(180deg)'});
		}		
	);
	
	$('#float-platforms').toggle(
		function() {
			$('.float-header-plat').css({'left':$('#float-platforms').position().left-10});
			$('.float-header-plat').animate({'height':'show'}, 300);
			$(this).closest('.float-header-item').find('.float-arrow').css({'transform':'rotate(0deg)'});
		},
		function() {
			$('.float-header-plat').animate({'height':'hide'}, 300);
			$(this).closest('.float-header-item').find('.float-arrow').css({'transform':'rotate(180deg)'});
		}
	);
	$('#float-platforms').mouseover(
		function() {
			$('.float-header-plat').css({'left':$('#float-platforms').position().left-10});
			$('.float-header-plat').animate({'height':'show'}, 300);
			$(this).closest('.float-header-item').find('.float-arrow').css({'transform':'rotate(0deg)'});
		}					
	);
	$('.float-header-plat').mouseleave(
		function() {
			$(this).animate({'height':'hide'}, 300);
			$(this).closest('.float-header-item').find('.float-arrow').css({'transform':'rotate(180deg)'});
		}		
	);
	
	$(window).scroll(function() {
		if ($(document).scrollTop() > 139) {
			if ($('.float-hidden:eq(0)').css('display') == 'none')
				$('.float-header-menu').animate({'width':'83em'}, 100, function() {
					$('.float-hidden').css({'display':'block'});
				});
		}
		else {if ($('.float-hidden:eq(0)').css('display') == 'block') {		
				$('.float-header-menu').css({'width':'83em'}); 
				$('.float-hidden').css({'display':'none'});
			}
		}
	});
	
	$(document).not('.search-area').click(function (){
		$('.result_search').css('display', 'none');
	});
	//-----js для autocomplete поиска верхней панели сайта - begin
	$('.search_panel').keyup(function(event){
		if (event.keyCode == 40)
		{			
			var flag = false;
			$('.result_search>p').each(function() 
			{
				if ($(this).hasClass('result_hover')) 
				{
					$(this).removeClass('result_hover'); 
					ind = $(this).index();
					$('.result_search>p:eq('+((ind+1).toString())+')').addClass('result_hover');
					flag = true;
					return false;
				} 
			});
			if (!flag)
				$('.result_search>p:eq(0)').addClass('result_hover');
		}
		else if (event.keyCode == 38)
		{			
			var flag = false;
			$('.result_search>p').each(function() 
			{
				if ($(this).hasClass('result_hover')) 
				{
					$(this).removeClass('result_hover'); 
					ind = $(this).index();
					$('.result_search>p:eq('+((ind-1).toString())+')').addClass('result_hover');
					flag = true;
					return false;					
				} 
			});
			if (!flag)
				$('.result_search>p:eq(9)').addClass('result_hover');
		}
		else if (event.keyCode == 13)
		{
			flag = false;
			$('.result_search>p').each(function() 
			{
				if ($(this).hasClass('result_hover')) 
				{
					document.location.href = $(this).find('a:eq(0)').attr('href');
					flag = true;
					return false;					
				} 
			});
			var word = $(this).val();
			if (word.length > 0 && !flag)
				document.location.href = '/search/?s='+word;
		}
		else
		{
			var word = $(this).val();
			$.ajax({
				url: '/control/ajaxGetPostSearch/',
				type: 'post',
				data: { 'word' : word },
				success: function(dat) { if (word.length > 0) $('.result_search').css('display','block').html(dat); else $('.result_search').html(''); }
			});
		}
	});
	//-----js для autocomplete поиска верхней панели сайта - end
        
        	//-----js для autocomplete поиска в шапке сайта - begin
	$('#s').keyup(function(event){ 
		if (event.keyCode == 40)
		{	
			var flag = false;
			$('.result_search_header>p').each(function() 
			{
				if ($(this).hasClass('result_hover')) 
				{
					$(this).removeClass('result_hover'); 
					ind = $(this).index();
					$('.result_search_header>p:eq('+((ind+1).toString())+')').addClass('result_hover');
					flag = true;
					return false;
				} 
			});
			if (!flag)
				$('.result_search_header>p:eq(0)').addClass('result_hover');
		}
		else if (event.keyCode == 38)
		{			
			var flag = false;
			$('.result_search_header>p').each(function() 
			{
				if ($(this).hasClass('result_hover')) 
				{
					$(this).removeClass('result_hover'); 
					ind = $(this).index();
					$('.result_search_header>p:eq('+((ind-1).toString())+')').addClass('result_hover');
					flag = true;
					return false;					
				} 
			});
			if (!flag)
				$('.result_search_header>p:eq(9)').addClass('result_hover');
		}
		else if (event.keyCode == 13)
		{
			flag = false;
			$('.result_search_header>p').each(function() 
			{
				if ($(this).hasClass('result_hover')) 
				{
					document.location.href = $(this).find('a:eq(0)').attr('href');
					flag = true;
					return false;					
				} 
			});
			var word = $(this).val();
			if (word.length > 0 && !flag)
				document.location.href = '/search/?s='+word;
		}
		else
		{
			var word = $(this).val();
			$.ajax({
				url: '/control/ajaxGetPostSearchTop/',
				type: 'post',
				data: { 'word' : word },
				success: function(dat) { if (word.length > 0){ $('.result_search_header').css('padding-top','10px');$('.result_search_header').css('display','block').html(dat); if(dat==''){$('.result_search_header').css('display','none')}} else {$('.result_search_header').html('');} }
			});
		}
	});
      
	$(document).click(function(event){
		if(!$(event.target).closest('.result_search_header').length && !$(event.target).closest('#searchform').length) {
			$(".result_search_header").css('display', 'none');
			return;
		}
	});
	//-----js для autocomplete поиска в шапке  сайта - end
        
});

function checkmail(value) {
	reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
	if (!value.match(reg)) return true;
	return false;
}

function subscribe_aftercomment() {
	var mail;
	var exp = (document.location.hash).split('-');
	var id = exp[1];
	
	$.ajax({
		url: '/control/getSubMail/',
		type: 'post',
		async: false,
		data: { 'id' : id },
		success: function(dat) { mail = dat; }
	});
	
	$('#mce-EMAIL').val(mail);
	$('#mc-embedded-subscribe-form').submit();
}

function valid(obj) {
	var er = 0;
        var comment =$.trim(obj.closest('form').find('[name="comment"]').val());
        console.log(comment.length);
	obj.closest('form').find('.req').each(function() {
		if ($(this).val() == '') {
			$('[for="'+$(this).attr('name')+'"]').css('display', 'block');
			er = er + 1;
		}
		else {
			if ($(this).attr('name') == 'email' && checkmail(obj.closest('form').find('[name="email"]').val())) {
				obj.closest('form').find('[for="email"]').css('display', 'block');
				obj.closest('form').find('[for="email"]').html('please enter a valid email address.');
				er = er + 1;
			}
			else
				$('[for="'+$(this).attr('name')+'"]').css('display', 'none');
		}
	});
        if (comment.length <50) {
		obj.closest('form').find('[for="comment"]').css('display', 'block');
		er = er + 1;
	}
	else
		obj.closest('form').find('[for="comment"]').css('display', 'none');
	
	if (obj.closest('form').find('[name="mark"]').val() == 0) {
		obj.closest('form').find('[for="mark"]').css('display', 'block');
		er = er + 1;
	}
	else
		obj.closest('form').find('[for="mark"]').css('display', 'none');
	
	
	if (er == 0)
		return true;
	return false;
};