        var visualIntervalId, youtubePlayer; // 160704 추가 : youtubePlayer 변수 추가
        
        /* 160704 Youtube 컨트롤 스크립트 추가 */
        // !!!! 유튜브에서 정의한 필수 함수(함수명 고정)
        function onYouTubeIframeAPIReady() {
            if ($("#youtubeTarget").length > 0) {
                youtubePlayer = new YT.Player('youtubeTarget', {
                    width: '819',
                    height: '465',
                    videoId: 'FswY79J7S1g',
                    playerVars: { 'autoplay': 0, 'controls': 0, 'showinfo': 0, 'rel': 0 },
                    events: {
                        'onReady': onPlayerReady
                    }
                });
            }
        }
        function onPlayerReady(event) {
            //event.target.setVolume(100);
        }
        /* 160704 Youtube 컨트롤 스크립트 추가 끝 */
        
        $(document).ready(function(){
            // 160829 추가 : 윈도우 리사이즈 이벤트 추가
            $(window).on("resize", windowResizeHandler);
            windowResizeHandler();
            
            // 비주얼 영역 기본 셋팅
            $(".visual-list").data("currentIndex", 0);
            $(".visual-list").data("totalCount", $(".visual-list li").length);
            //$(".visual-list").data("visualWidth", $(".visual-list li").width()); // 160829 삭제
            $(".visual-list").data("motionType", null);
            $(".visual-text-list").data("visualWidth", $(".visual-text-list li").width());
            setVisualPosition();
            
            // 160824 추가 : 배너가 1개인 경우 좌우 버튼, 플레이 버튼 이벤트 미등록 및 화면에서 숨김
            // 160825 수정 : 배너가 1개인 경우 배너 컨트롤러 영역 전체 이벤트 미등록 및 화면에서 숨김
            if ($(".visual-list").data("totalCount") == 1) {
                $(".visual-list").addClass("one-banner");
                // 160829 수정 : 숨기지 않고 삭제하도록 수정
                $(".visual-page-wrap, .inner-visual-dimmed").remove();    // 160829 수정 : 숨길 타겟 class 수정
                return;
            }
            // 160830 추가 : 배너가 2개인 경우 미리 노출 될 이미지 셋팅을 위해 1벌 복사
            else if ($(".visual-list").data("totalCount") == 2) {
                var list = $(".visual-list li");
                list.each(function(index){
                    $(".visual-list").append($(this).clone().addClass("clone"));
                });
                $(".visual-list").data("totalCount", $(".visual-list li").length);
                $(".visual-list").data("isCloned", true);
                
                // 160831 추가 : 텍스트 clone 스크립트 추가
                var textList = $(".visual-text-list li");
                textList.each(function(index){
                    $(".visual-text-list").append($(this).clone().addClass("clone"));
                });
                setVisualPosition();
            }
            // 160829 수정 : 배너 컨트롤 영역 기본 숨겨놓은 상태에서 필요시 노출하도록 변경
            $(".visual-page-wrap, .inner-visual-dimmed").show();
            $(".inner-visual-wrap").on("click", function (event){
                // 정지 재생 버튼 클릭이 아닌 경우
                if ($(event.target)[0].tagName.toLowerCase() != "button") {
                    clearVisualInterval();
                }
                else {
                    if ($($(event.target)[0]).hasClass("button-visual-playstop")) {
                        // 자동 재생중 상태
                        if ($($(event.target)[0]).hasClass("play")) {
                            clearVisualInterval();
                        }
                        else {
                            setVisualInterval();
                        }
                    }
                }
            });
            // 비주얼 영역 기본 셋팅 끝
            
            // 비주얼 이전, 다음 버튼 기능 구현
            $(".button-visual-prev").on("click", function (event){
                // 인터벌이 돌고 있는 경우 clear
                if (visualIntervalId != -1) {
                    clearVisualInterval();
                }
                
                // 모션 진행중인 경우 return
                if ($(".visual-list li").is(':animated'))
                    return;
                    
                $(".visual-list").data("motionType", "prev");
                
                setVisualPosition();
                
                // 마지막 비주얼이 나와야 하는 경우
                if ($(".visual-list").data("currentIndex") == 0) {
                    $(".visual-list").data("currentIndex", $(".visual-list").data("totalCount") - 1);
                }
                else {
                    $(".visual-list").data("currentIndex", $(".visual-list").data("currentIndex") - 1);
                }
                slideVisualList();
            });
            
            $(".button-visual-next").on("click", function (event){
                // 인터벌이 돌고 있는 경우 clear
                if (visualIntervalId != -1) {
                    clearVisualInterval();
                }
                
                // 모션 진행중인 경우 return
                if ($(".visual-list li").is(':animated'))
                    return;
                
                $(".visual-list").data("motionType", "next");
                
                setVisualPosition();
                
                // 첫번째 비주얼이 나와야 하는 경우
                if ($(".visual-list").data("currentIndex") == $(".visual-list").data("totalCount") - 1) {
                    $(".visual-list").data("currentIndex", 0);
                }
                else {
                    $(".visual-list").data("currentIndex", $(".visual-list").data("currentIndex") + 1);
                }
                slideVisualList();
            });
            // 비주얼 이전, 다음 버튼 기능 구현 끝
            
            setVisualInterval();
        });
        
        // 160829 추가 : 윈도우 리사이즈 이벤트 추가
        function windowResizeHandler(event){
            if ($(".visual-list li").length == 1)
                return;
            $(".visual-list li").width($(".inner-visual-wrap").width() - 251);
            setVisualPosition();
        }
        
        function setVisualInterval() {
            visualIntervalId = setInterval(function (){
                $(".visual-list").data("motionType", "next");
                setVisualPosition();
                // 첫번째 비주얼이 나와야 하는 경우
                if ($(".visual-list").data("currentIndex") == $(".visual-list").data("totalCount") - 1) {
                    $(".visual-list").data("currentIndex", 0);
                }
                else {
                    $(".visual-list").data("currentIndex", $(".visual-list").data("currentIndex") + 1);
                }
                slideVisualList();
            }, 5000);
            
            $(".button-visual-playstop").addClass("play");
        }
        
        function clearVisualInterval() {
            clearInterval(visualIntervalId);
            visualIntervalId = -1;
            
            $(".button-visual-playstop").removeClass("play");
        }
        
        function setVisualPosition() {
            var currentIndex = $(".visual-list").data("currentIndex");
            
            $(".visual-list li").each(function (index){
                if ($(".visual-list").data("motionType") == null) {
                    $(this).data("idx", index);
                }
                else if ($(".visual-list").data("motionType") == "prev" && $(this).data("idx") > 1) {
                    $(this).data("idx", $(this).data("idx") - $(".visual-list").data("totalCount"));
                }
                else if ($(".visual-list").data("motionType") == "next" && $(this).data("idx") < 0) {
                    $(this).data("idx", $(this).data("idx") + $(".visual-list").data("totalCount"));
                }
                $(".visual-text-list li").eq(index).data("idx", $(this).data("idx"));
                
                $(this).css({
                    left: $(this).width() * ($(this).data("idx"))   // 160829 수정 : 계산식 수정
                });
                $(".visual-text-list li").eq(index).css({
                    left: $(".visual-text-list").data("visualWidth") * ($(this).data("idx"))
                });
            });
        }
        
        // 비주얼 슬라이드 이동 스크립트
        function slideVisualList() {
            // 현재 페이지 번호 갱신
            changeCurrentPageNo();
            var calcIdx = $(".visual-list").data("motionType") == "prev" ? 1 : -1;
            $(".visual-list li").each(function (index){
                $(this).animate({
                    left: $(this).width() * ($(this).data("idx") + calcIdx)   // 160829 수정 : 계산식 수정
                }, 500);
                $(".visual-text-list li").eq(index).animate({
                    left: $(".visual-text-list").data("visualWidth") * ($(this).data("idx") + calcIdx)
                }, 500);
                
                $(this).data("idx", $(this).data("idx") + calcIdx);
                $(".visual-text-list li").eq(index).data("idx", $(this).data("idx"));
            });
            // 160704 추가 : 슬라이드 시 유튜브 영상이 존재하고 플레이중인 경우 동영상 일시정지 스크립트
            if (youtubePlayer != undefined && youtubePlayer.getPlayerState && youtubePlayer.getPlayerState() == 1) {
                youtubePlayer.pauseVideo();
            }
        }
        
        // 현재 페이지 번호 갱신
        // 160830 수정 : 배너가 2개일때 클론 추가로 인한 수정
        function changeCurrentPageNo() {
            var textPageNo;
            var currentIdx = $(".visual-list").data("currentIndex");
            if ($(".visual-list").data("isCloned"))
                currentIdx = currentIdx % 2;
            if (currentIdx + 1 < 10) {
                textPageNo = "0" + (currentIdx + 1);
            }
            else {
                textPageNo = currentIdx + 1;
            }
            
            $(".page-now").text(textPageNo);
        }