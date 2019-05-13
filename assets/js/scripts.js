let prev_onload = window.onload;

window.onload = () => {
    if (typeof (prev_onload) == 'function')
        prev_onload();

    feather.replace()


    const sidebarOpenClassName = 'open';
    let sidebarButton = document.getElementsByClassName('sidebar-button');
    if (sidebarButton.length > 0) {
        sidebarButton = sidebarButton[0];

        sidebarButton.onclick = () => {
            let sidebar = document.getElementsByClassName('sidebar');
            if (sidebar.length > 0) {
                sidebar = sidebar[0];

                if (sidebar.className.indexOf(sidebarOpenClassName) > 0)
                    sidebar.className = sidebar.className.replace(' ' + sidebarOpenClassName, '');
                else
                    sidebar.className = sidebar.className + ' ' + sidebarOpenClassName;

            }
        }
    }
}