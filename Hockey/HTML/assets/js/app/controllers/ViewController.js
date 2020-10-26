Class(function ViewController() {
    Inherit(this, Element);
    const _this = this;
    const $this = this.element;
    let _listController;
    let _modalView;

    //*** Constructor
    (function () {
        initEvents();
        initListController();
    })();

    //*** Event handlers

    function initEvents() {
        _this.events.sub(ViewController.SHOW_TEAM_DETAIL, showTeamDetailModal);
        _this.events.sub(ViewController.HIDE_TEAM_DETAIL, hideTeamDetailModal);
    }

    function initListController() {
        _listController = _this.initClass(TeamsListController);
    }

    function showTeamDetailModal(team) {
        if(_modalView) {
            return;
        }
        _modalView = _this.initClass(TeamModalView, team);
        Stage.add(_modalView.element);
        _modalView.animateIn();
    }

    async function hideTeamDetailModal() {
        if(_modalView) {
            await _modalView.animateOut();
            _modalView.destroy();
            _modalView = null;
        }
    }

    //*** Public methods

}, 'singleton', () => {
    ViewController.SHOW_TEAM_DETAIL = "viewcontroller_show_team_detail";
    ViewController.HIDE_TEAM_DETAIL = "viewcontroller_hide_team_detail";
});