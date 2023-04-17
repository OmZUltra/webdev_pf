function fixedNav() {
    const nav2 = document.querySelector('#hidden_nav');
    
    window.addEventListener('scroll', function(){
        var scrollDist = window.scrollY;
        const thres = 119;
        if (scrollDist > thres) {
            nav2.style.top = 0;
        } else {
            nav2.style.top = '-5rem';
        }
    });
}

fixedNav();
