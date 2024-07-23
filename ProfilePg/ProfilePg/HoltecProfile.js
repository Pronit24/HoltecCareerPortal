function loadFile(event) {
    const output = document.getElementById('profile-picture');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function() {
        URL.revokeObjectURL(output.src)
    }
}

function toggleMenu() {
    var menu = document.getElementById('profileMenu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

// Close the menu if clicked outside
window.onclick = function(event) {
    if (!event.target.matches('.profile-circle')) {
        var menus = document.getElementsByClassName('profile-menu');
        for (var i = 0; i < menus.length; i++) {
            var openMenu = menus[i];
            if (openMenu.style.display === 'block') {
                openMenu.style.display = 'none';
            }
        }
    }
}
