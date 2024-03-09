var GUI = (function () {
    var showMenu = () => {
        var showMenu = document.querySelector('.show-menu-mobile');
        var menu = document.querySelector('.menu');
        var overLay = document.querySelector('.over-lay');
        if (typeof showMenu != "undefined") {
            showMenu.addEventListener('click', () => {
                menu.classList.toggle('active');
                overLay.classList.toggle('active');
            })
        }
        if (typeof overLay != "undefined") {
            overLay.addEventListener('click', () => {
                menu.classList.remove('active');
                overLay.classList.remove('active');
            })
        }
    }
    var loadmap = () => {
        var maps = document.querySelector('#map');
        if (typeof maps === "object" && maps === null) return;
        var src = maps.getAttribute('data-map');
        var frame = document.createElement('iframe');
        frame.src = src;
        var action = setTimeout(function () {
            maps.append(frame);
        }, 1000);

    }
    var iconMenu = function () {
        var width_ = window.innerWidth;
        if (width_ < 1024) {
            var listItemLi = document.querySelectorAll('.menu li');
            listItemLi.forEach(function (element) {
                var ulChild = element.querySelector(':scope > ul');
                if (ulChild) {
                    var btnDropdown = document.createElement('span');
                    btnDropdown.className = 'btn-dropdown-menu';
                    btnDropdown.innerHTML = '<i class="fa fa-angle-down" aria-hidden="true"></i>';
                    element.appendChild(btnDropdown);
                    var timeSlide = 300;
                    btnDropdown.addEventListener('click', function (event) {
                        var _this = this;
                        _this.style.pointerEvents = 'none';

                        setTimeout(function () {
                            _this.style.pointerEvents = 'auto';
                        }, timeSlide);

                        var listUlChild = _this.previousElementSibling;
                        _this.classList.toggle('open');

                        if (listUlChild) {
                            if (listUlChild.style.display === 'none' || listUlChild.style.display === '') {
                                listUlChild.style.display = 'block';
                            } else {
                                listUlChild.style.display = 'none';
                            }
                        }
                    });
                }
            });
        }
    };

    var showModalRegister = function () {
        const openModalRegister = document.querySelectorAll(".btn-register");
        const closeModalRegister = document.querySelector(".box-close-modal");
        const modalRegister = document.querySelector(".popup-contact-quote");
        openModalRegister.forEach((itemOpen) => {
            if (modalRegister != undefined) {
                itemOpen.addEventListener("click", function () {
                    if (window.getComputedStyle(modalRegister).display === "none") {
                        modalRegister.classList.add("active");
                    }
                });
                closeModalRegister.addEventListener("click", function () {
                    if (window.getComputedStyle(modalRegister).display === "block") {
                        modalRegister.classList.remove("active");
                    }
                });
            } else {
                return;
            }
        })

    };
    var moduleTabContent = function () {
        var modules = document.querySelectorAll(".module-tab-content");
        modules.forEach((element) => {
            var tabLinks = element.querySelectorAll(".tab-links");
            var tabContents = element.querySelectorAll(".tab-content");
            if (tabLinks.length === 0 && tabContents.length === 0) return;
            tabLinks[0].classList.add("active");
            tabContents[0].classList.add("active");
            tabLinks.forEach(el => {
                el.addEventListener("click", openTabs)
            })

            function openTabs(el) {
                var btn = el.currentTarget;
                var electronic = btn.dataset.electronic;
                var data = btn.dataset.target;
                tabLinks.forEach((link) => {
                    if (link.dataset.target === data) {
                        link.classList.remove("active");
                    }
                });
                tabContents.forEach((content) => {
                    if (content.id === electronic) {
                        content.classList.add("active");
                    } else {
                        content.classList.remove("active");
                    }
                });
                document.querySelector("#" + electronic).classList.add("active")
                btn.classList.add("active");
            }
        });
    }
    return {
        _: function () {
            showMenu();
            loadmap();
            iconMenu();
            moduleTabContent();
        },
    };
})();

document.addEventListener("DOMContentLoaded", function () {
    GUI._();

})