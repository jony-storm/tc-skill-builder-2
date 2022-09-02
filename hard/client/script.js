window.onload = function () {
    const li_all = document.getElementsByTagName('li');
    for (let i = 0; i < li_all.length; i++) {
        li_all[i].getElementsByTagName('button')[0].addEventListener('click', up_handler)
        li_all[i].getElementsByTagName('button')[1].addEventListener('click', down_handler)
    }

    function up_handler(ev) {
        console.log("upbutton clicked");
        const wrapper = ev.target.closest("li");

        if (wrapper.previousElementSibling)
            wrapper.parentNode.insertBefore(wrapper, wrapper.previousElementSibling);
    }

    function down_handler(ev) {
        console.log("upbutton clicked");

        const wrapper = ev.target.closest("li");

        if (wrapper.nextElementSibling)
            wrapper.parentNode.insertBefore(wrapper.nextElementSibling, wrapper);
    }


}