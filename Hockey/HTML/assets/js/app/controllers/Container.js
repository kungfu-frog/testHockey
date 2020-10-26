Class(function Container() {
    Inherit(this, Element);
    const _this = this;
    const $this = this.element;

    //*** Constructor
    (function () {
        initViewController();
    })();

    function initViewController() {
        ViewController.instance();
    }

    //*** Event handlers

    //*** Public methods

}, 'singleton');