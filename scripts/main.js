$(document).ready(function(){
/*--------------------------------------------- variables ---------------------------------------------*/
//navbar variables
var profileDropdown = $("#profile-dropdown");
var navbarSupportedContent = $("#navbarSupportedContent");
//updates variables
var acceptBtn = $(".connection-accept");
var rejectBtn = $(".connection-reject");
//home ads variables
var homeQuestionAd = $("#new-questions .ad-space");
var homeQuestionFilter = $("#new-questions .filter");
var homeQuestionAdContainer = $("#new-questions");
var homePostAd = $("#posts .ad-space");
var homePostFilter = $("#posts .filter");
var homePostAdContainer = $("#posts");
var bookmarkBtn = $(".bookmark-btn");
//making filter arrow variable
var filterArrow = $(".filter-arrow");
//add links to add post form variables
var countPostLinks=0;
var postAddLinksFields = $("#post-add-link");
//add links to add question form variables
var countQuesLinks=0;
var quesAddLinksFields = $("#ques-add-link");


/*------------------------- chat variables -------------------------*/
//cut text in all chat pop-up variables
var allChatMsg = $(".all-chat-msg p");
//add status to chats in all-chat-box variables
var chatFriendInfoStatus = $("#chat .status");
//make btns work in all-chat window variables
var allChatBtn = $("#chat-btn");
var allChatCloseBtn = $("#close");
var chatBoxAll = $("#all-chats .chat-box");
//close single-chat variables
var clsSchat = $(".cls-s-chat");
var allChatFreindBtn = $(".chat-friend .all-chat-msg, .chat-friend img");
var singleChatBox = $(".single-chat");


/*------------------------- sign-up page variables -------------------------*/
//upload profile picture variables
var uploadPicBtn = $("#sign-up-upload-pic");
var uploadPicInput = $("#sign-up-profile-pic");
//add positions and education variables
var eduFields = $("#educations");
var countEdu = 0;
var posFields = $("#positions");
var countPos = 0;

/*------------------------- single post page variables -------------------------*/
var editPostBtn = $("#edit-post");
var cancelEditPostBtn = $("#cancel-edit-post");
var editPostForm = $("#edit-post-form");

/*------------------------- single question page variables -------------------------*/
var countAnsLinks=0;
var ansAddLinksFields = $("#ans-add-link");

//edit question btn variables
var editQuestionBtn = $("#edit-question");
var cancelEditQuestion = $("#cancel-edit");
var editQuestionContainer = $("#edit-question-container");

/*------------------------- account page variables -------------------------*/
var editUploadPicBtn = $("#edit-account-upload-pic");
var editUploadPicInput = $("#change-pic-input");
var editSaveUploadedPicBtn = $("#edit-account-save-pic");
var editSaveUploadedPicSubmitBtn = $("#submit-change-pic-form");
//view and hide edit variables
var viewEditBtn = $("#edit-account");
var cancelEditBtn = $("#cancel-edit");
var viewAccount = $("#veiw-account");
var editAccount = $("#edit-account-div");



/*--------------------------------------------- functions ---------------------------------------------*/
//on window resize function
$(window).resize(function(){
    //make the location of the profile dropdown responsive
    addProfileDropdown();
    //width of accept and reject buttons
    adjustWidth(acceptBtn, rejectBtn);
    //adjust height of ad spaces
    adSpaceHeight(homeQuestionAd, homeQuestionFilter, homeQuestionAdContainer);
    adSpaceHeight(homePostAd, homePostFilter, homePostAdContainer);
    //fix footer in bottom
    fixFooter();
})




//make the location of the profile dropdown responsive
function addProfileDropdown(){
    profileDropdown.remove();
    if ($( window ).width() >= 992){
        navbarSupportedContent.append(profileDropdown);
    } else {
        navbarSupportedContent.prepend(profileDropdown);
    }
}
addProfileDropdown();


//fix footer in the bottom
function fixFooter(){
    if($("body").height() <= $(window).height()){
        if($('footer').hasClass("fixed-bottom") == false){
            $('footer').addClass("fixed-bottom");
        }
    } else if($('footer').hasClass("fixed-bottom")){
        $("footer").removeClass("fixed-bottom");
    }
}
fixFooter();

//adjust width of elements
function adjustWidth(ele1, ele2){
    ele2.width(ele1.width());
}
//width of accept and reject buttons
adjustWidth(acceptBtn, rejectBtn);



//adjust height of ad spaces
function adSpaceHeight(ad, filter, containerDiv){
    ad.height(containerDiv.height() - filter.height() - 200);
}
adSpaceHeight(homeQuestionAd, homeQuestionFilter, homeQuestionAdContainer);
adSpaceHeight(homePostAd, homePostFilter, homePostAdContainer);

//change the bookmark star
bookmarkBtn.click(function(e){
    e.preventDefault();
    let thisBtn = $(this);
    if(thisBtn.hasClass('not-bookmarked')){
        thisBtn.html("<i class='fas fa-star'></i>");
        thisBtn.removeClass('not-bookmarked');
        thisBtn.attr('title', 'Remove from bookmarks');
    }else if(thisBtn.hasClass('not-bookmarked') == false){
        thisBtn.html("<i class='far fa-star'></i>");
        thisBtn.addClass('not-bookmarked');
        thisBtn.attr('title', 'Add to bookmarks');
    }
}) 

//add links to add post form function
$("#postAddLinkBtn").click(function(e){
    e.preventDefault();
    if(countPostLinks >= 9){
        alert("Maximum of nine link entries exceeded");
        return;
    } else {
        countPostLinks ++;
        postAddLinksFields.append(
            "<div id='postAddLink"+countPostLinks+"' style='margin-bottom: 25px'> \
            <p><input type='text' class='sh-form-control' name='postAddLinkName"+countPostLinks+"' value='' placeholder='Link Name'/>\
            <input type='button' value='-' class='btn btn-outline-dark minus-btn' onclick='$(\"#postAddLink"+countPostLinks+"\").remove();return false;'></p>\
            <p><input type='text' class='sh-form-control' name='postAddLinkUrl"+countPostLinks+"' value='' placeholder='Link Url'></p>\
            </div>"
        );
    }
})

//add links to add question form function
$("#quesAddLink").click(function(e){
    e.preventDefault();
    if(countQuesLinks >= 9){
        alert("Maximum of nine link entries exceeded");
        return;
    } else {
        countQuesLinks ++;
        quesAddLinksFields.append(
            "<div id='quesAddLink"+countQuesLinks+"' style='margin-bottom: 25px'> \
            <p><input type='text' class='sh-form-control' name='quesAddLinkName"+countQuesLinks+"' value='' placeholder='Link Name'/>\
            <input type='button' value='-' class='btn btn-outline-dark minus-btn' onclick='$(\"#quesAddLink"+countQuesLinks+"\").remove();return false;'></p>\
            <p><input type='text' class='sh-form-control' name='quesAddLinkUrl"+countQuesLinks+"' value='' placeholder='Link Url'></p>\
            </div>"
        );
    }
})








//making filter arrow function
filterArrow.click(function(){
    let thisArrow = $(this);
    if(thisArrow.hasClass('clicked')){
        thisArrow.removeClass('clicked');
        // console.log(thisArrow.closest(".filter"))
        thisArrow.closest(".filter").children(".filter-form").removeClass("view");
    }else if(thisArrow.hasClass('clicked') == false){
        thisArrow.addClass('clicked');
        thisArrow.closest(".filter").children(".filter-form").addClass("view");
    }
})




/*------------------------- chat functions -------------------------*/
//cut text in all chat pop-up functions
allChatMsg.each(function(){
    let thisMsg = $(this).text();
    let shortTxt = thisMsg.substring(0, 22) + "...";
    $(this).text(shortTxt);
})
//add status to chats in all-chat-box functions
chatFriendInfoStatus.each(function(){
    let thisStatus = $(this);
    if(thisStatus.hasClass('online')){
        thisStatus.text('Online');
    } else{
        thisStatus.text('Offline')
    }
})
//make btns work in all-chat window functions
//toggle d-none class from all chat box
allChatBtn.click(function(){
    if(chatBoxAll.hasClass('d-none')){
        chatBoxAll.removeClass('d-none');
        AllChatBodyHeight();
    } else {
        chatBoxAll.addClass('d-none');        
    }
});
//remove d-none from all chat box
allChatCloseBtn.click(function(){
    chatBoxAll.addClass('d-none');
})
//close single-chat function
clsSchat.click(function(){
    $(this).closest(".single-chat").addClass('d-none');
})

//view single chat function
allChatFreindBtn.click(function(){
    chatBoxAll.addClass('d-none');
    singleChatBox.removeClass('d-none');
    singleChatBodyHeight();
})
//adjust height of s-chat-body
function singleChatBodyHeight(){
    if(window.innerWidth < 768 ){
        $(".s-chat-body").css( 'height', window.innerHeight - $(".s-chat-header").outerHeight() - $(".s-chat-type-message").outerHeight() - $('nav').outerHeight() + "px");
    } else {
        $(".s-chat-body").height(380);
    }
}
function AllChatBodyHeight(){
    if(window.innerWidth < 768 ){
        $(".chat-box-body").css('height', window.innerHeight - $(".chat-box-header").outerHeight() - $(".chat-box-search").outerHeight() - $("#chat-btn").outerHeight() - $('nav').outerHeight() + "px");
    } else {
        $(".chat-box-body").height(380);
    }
}
//make single chat window btns work
$(".add-files-to-single-chat").click(function(){
    $(this).closest(".s-chat-type-message").find('input[type=file]').trigger('click');
})
$(".s-chat-type-message").find('input[type=file]').change(function(){
    $(this).closest(".s-chat-type-message").find('input[type=submit]').trigger('click');
})
$(".send-msg-in-single-chat").click(function(){
    $(this).closest(".s-chat-type-message").find('input[type=submit]').trigger('click');
})














/*------------------------- sign-up page functions -------------------------*/
//trigger upload file btn
uploadPicBtn.click(function(e){
    e.preventDefault();
    uploadPicInput.trigger('click');
})
// preview profile pic
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#preview-profile-pic').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]); // convert to base64 string
    }
}
uploadPicInput.change(function() {
    readURL(this);
});

//add positions and education
$("#addPos").click(function(e){
    e.preventDefault();
    if(countPos >= 9){
        alert("Maximum of nine position entries exceeded");
        return;
    } else {
        countPos ++;
        posFields.append(
            "<div id='position"+countPos+"' style='margin-bottom: 25px'> \
            <p><input type='text' class='sh-form-control' name='pos"+countPos+"' placeholder='Position'>\
            <input type='button' value='-' class='btn btn-outline-dark minus-btn' onclick='$(\"#position"+countPos+"\").remove();return false;'></p>\
            <p><input type='text' class='sh-form-control' name='year"+countPos+"' value='' placeholder='Year'></p>\
            </div>"
        )
    }
})
$("#addEdu").click(function(e){
    e.preventDefault();
    if(countEdu >= 9){
        alert("Maximum of nine Education entries exceeded");
        return;
    } else {
        countEdu ++;
        eduFields.append(
            "<div id='education"+countEdu+"' style='margin-bottom: 25px'> \
            <p><input type='text' class='sh-form-control' name='edu_school"+countEdu+"' value='' placeholder='School'/>\
            <input type='button' value='-' class='btn btn-outline-dark minus-btn' onclick='$(\"#education"+countEdu+"\").remove();return false;'></p>\
            <p><input type='text' class='sh-form-control' name='edu_year"+countEdu+"' value='' placeholder='Year'></p>\
            </div>"
        );
        // $('.school').autocomplete({ source: "school.php" });
    }
})



/*------------------------- single post page functions -------------------------*/
editPostBtn.click(function(e){
    e.preventDefault();
    if(editPostForm.hasClass('d-none')){
        editPostForm.removeClass('d-none')
    }
})
cancelEditPostBtn.click(function(e){
    e.preventDefault();
    if(editPostForm.hasClass('d-none')===false){
        editPostForm.addClass('d-none')
    }
})




/*------------------------- single question page functions -------------------------*/
$("#ansAddLink").click(function(e){
    e.preventDefault();
    if(countAnsLinks >= 9){
        alert("Maximum of nine link entries exceeded");
        return;
    } else {
        countAnsLinks ++;
        ansAddLinksFields.append(
            "<div id='ansAddLink"+countAnsLinks+"' style='margin-bottom: 25px'> \
            <p><input type='text' class='sh-form-control' name='ansAddLinkName"+countAnsLinks+"' value='' placeholder='Link Name'/>\
            <input type='button' value='-' class='btn btn-outline-dark minus-btn' onclick='$(\"#ansAddLink"+countAnsLinks+"\").remove();return false;'></p>\
            <p><input type='text' class='sh-form-control' name='ansAddLinkUrl"+countAnsLinks+"' value='' placeholder='Link Url'></p>\
            </div>"
        );
    }
})

//edit question function
editQuestionBtn.click(function(e){
    e.preventDefault();
    if(editQuestionContainer.hasClass('d-none')){
        editQuestionContainer.removeClass('d-none');
    }
})
cancelEditQuestion.click(function(e){
    e.preventDefault();
    if(editQuestionContainer.hasClass('d-none') == false){
        editQuestionContainer.addClass('d-none');
    }
})



/*------------------------- account page functions -------------------------*/
//trigger upload pic btn
editUploadPicBtn.click(function(e){
    e.preventDefault();
    editUploadPicInput.trigger('click');
})
//trigger submit change pic btn
editSaveUploadedPicBtn.click(function(e){
    e.preventDefault();
    editSaveUploadedPicSubmitBtn.trigger('click');
})
// preview profile pic
editUploadPicInput.change(function() {
    readURL(this);
});


//view and hide edit functions
viewEditBtn.click(function(e){
    e.preventDefault();
    viewAccount.addClass("d-none");
    editAccount.removeClass("d-none");
});
cancelEditBtn.click(function(e){
    e.preventDefault();
    viewAccount.removeClass("d-none");
    editAccount.addClass("d-none");
    $('html,body').scrollTop(0);
})










/*--------------------------------------------- APIs ---------------------------------------------*/
/* new post preview swiper */
var swiper = new Swiper('#swipe1', {
    zoom: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    noSwipingClass: 'swiper-no-swiping'
});

var swiper2 = new Swiper('#swipe2', {
    zoom: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    noSwipingClass: 'swiper-no-swiping'
});
//stop playing videos when swiping slides 
var swiperArray = [swiper, swiper2];
var swipperIds = ["#swipe1 .video-js", "#swipe2 .video-js"];
for(let i=0; i<swiperArray; i++){
    swiperArray[i].on('slideChange', function () {
        let videoList = $(swipperIds[i]);
        for(i=0; i<videoList.length; i++){
            videoList[i].player.pause();
        }
    });
}
//stop playing videos when swiping slides 
// swiper.on('slideChange', function () {
//     let videoList = $("#swipe1 .video-js");
//     for(i=0; i<videoList.length; i++){
//         videoList[i].player.pause();
//     }
// });


//pause all other videojs instances on the page, when play is clicked
$(".video-js").each(function (videoIndex) {
    var videoId = $(this).attr("id");
    videojs(videoId).ready(function(){
        this.on("play", function(e) {
            $(".video-js").each(function (index) {
                if (videoIndex !== index) {
                    this.player.pause();
                }
            });
        });
    });
});





/*--------------------------------------------- trial functions ---------------------------------------------*/





//make like buttons work
$(".like-dislike .like").click(function(){
    let thisParent = $(this).closest(".like-dislike");
    let thisLike = thisParent.children(".like");
    let thisDislike = thisParent.children(".dislike");

    if(thisLike.hasClass("far") ){
        thisLike.removeClass("far");
        thisLike.addClass("fas");
        if(thisDislike.hasClass("fas")){
            thisDislike.removeClass("fas");
            thisDislike.addClass("far");
        }
    } else if(thisLike.hasClass("fas")){
        thisLike.removeClass("fas");
        thisLike.addClass("far");
    }
})

//make dislike buttons work
$(".like-dislike .dislike").click(function(){
    let thisParent = $(this).closest(".like-dislike");
    let thisLike = thisParent.children(".like");
    let thisDislike = thisParent.children(".dislike");

    if(thisDislike.hasClass("far")){
        thisDislike.removeClass("far");
        thisDislike.addClass("fas");
        if(thisLike.hasClass("fas")){
            thisLike.removeClass("fas");
            thisLike.addClass("far");
        }
    }else if(thisDislike.hasClass("fas")){
        thisDislike.removeClass("fas");
        thisDislike.addClass("far");
    }
})







//add voted class 
$(".vote-div .vote").click(function(e){
    e.preventDefault();
    $(this).blur();
    if($(this).hasClass("voted")){
        $(this).removeClass("voted");
        $(this).removeClass("btn-dark");
        $(this).addClass("btn-outline-dark");
        $(this).text("Vote");
        $(this).closest(".vote-div").children(".unvote").addClass("d-none")
    } else {
        $(".vote-div .vote").each(function(){
            if($(this).hasClass("voted")){
                $(this).removeClass("voted");
                $(this).removeClass("btn-dark");
                $(this).addClass("btn-outline-dark");
                $(this).text("Vote");
                $(this).closest(".vote-div").children(".unvote").addClass("d-none")
            }
        });
        $(this).addClass("voted");
        $(this).addClass("btn-dark");
        $(this).removeClass("btn-outline-dark");
        $(this).text("Voted");
        $(this).closest(".vote-div").children(".unvote").removeClass("d-none")
    }
})



//remove voted class
$(".vote-div .unvote").click(function(e){
    e.preventDefault();
    $(this).blur();
    $(this).closest(".vote-div").children(".vote").removeClass("voted");
    $(this).closest(".vote-div").children(".vote").removeClass("btn-dark");
    $(this).closest(".vote-div").children(".vote").addClass("btn-outline-dark");
    $(this).closest(".vote-div").children(".vote").text("vote");
    $(this).addClass("d-none")
});





















//view reply to comment 
$(".reply-btn").click(function(e){
    e.preventDefault();
    if($(this).siblings(".reply-form").hasClass("d-none")){
        $(this).siblings(".reply-form").removeClass("d-none");
    }
})

$(".cancel-reply").click(function(e){
    e.preventDefault();
    $(this).closest(".reply-form").addClass("d-none")
})


/*--------------------------------------------- Ajax ---------------------------------------------*/

})