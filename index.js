
// watchlist drop down menu
let watchlist = document.querySelector('.right-navbar__dropdown__watchlist a')
let watchlistDropdown = document.querySelector('.watchlist-dropdown')
let testing = document.querySelector('.h2')
console.log(testing)
console.log(watchlistDropdown.contains(testing))

watchlist.addEventListener('click', function(){
    watchlistDropdown.classList.toggle('js-watchlist-dropdown__watchlist')
console.log(watchlistDropdown.classList)
})

// document.body.addEventListener('mouseover', function(e) {if (!e.target.classList.contains('watchlist-dropdown')) {
//         if(!watchlistDropdown.contains(e.target)){
//             setTimeout(hideWatchlist,1000)
//             function hideWatchlist (){
//                 watchlistDropdown.classList.remove("js-watchlist-dropdown__watchlist")
//             }
//         }
        
//         // console.log(e.target)
//     }
// });