function ready(fn) {
    if (document.readyState != 'loading'){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
ready(go);

function go() {
    var panels = document.querySelectorAll('.panel');
    var masthead = document.getElementById('masthead');
    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth||e.clientWidth||g.clientWidth,
    y = w.innerHeight||e.clientHeight||g.clientHeight;
    var globalId;
    function scrollMasthead() {
        Array.prototype.forEach.call(panels, function(el, i) {
            var rect = el.getBoundingClientRect();
            var bodyRect = g.getBoundingClientRect();
            if (bodyRect.top < 0 && rect.top <= 108 && rect.top > 108 - el.scrollHeight) {
                masthead.classList.add('color-'+el.getAttribute('id'));
            }
            else {
                masthead.classList.remove('color-'+el.getAttribute('id'));
            }
        });
        globalId = requestAnimationFrame(scrollMasthead);
    }
    globalId = requestAnimationFrame(scrollMasthead);

    document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.keyCode == 27) {
            document.body.classList.remove('lightbox-active');
        }
    };
    document.getElementById('lightbox').addEventListener('click', function(e) {
        document.body.classList.remove('lightbox-active');
    });
    document.getElementById('lightbox-close').addEventListener('click', function(e) {
        document.body.classList.remove('lightbox-active');
    });
    document.getElementById('lightbox-content').addEventListener('click', function(e) {
        e.stopPropagation();
    });

    document.getElementById('hire-us').addEventListener('click', function(e) {
        e.preventDefault();
        document.body.classList.add('lightbox-active');
        window.setTimeout(function () {
            document.getElementById('name').focus();
        }, 300);
    });
    document.getElementById('hire-us').addEventListener('touchstart', function(e) {
        e.preventDefault();
        e.stopPropagation();
        document.body.classList.add('lightbox-active');
    });
    document.getElementById('email-link').addEventListener('click', function(e) {
        e.preventDefault();
        document.body.classList.add('lightbox-active');
        window.setTimeout(function () {
            document.getElementById('name').focus();
        }, 300);
    });
    document.getElementById('email-link').addEventListener('touchstart', function(e) {
        e.preventDefault();
        e.stopPropagation();
        document.body.classList.add('lightbox-active');
    });
}