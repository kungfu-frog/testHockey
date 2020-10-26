Class(function TeamsListController() {
    Inherit(this, Component);

    var _this = this;
    var _view, _model, _teams;

    //*** Constructor
    (async function() {
        initModel()
        initView();
    })();

    function initModel() {
        _model = _this.initClass(TeamsModel);
    }

    async function initView() {
        _teams = await _model.fetch();
        _view = _this.initClass(TeamsListView);

        _teams.forEach((team, index) => {
            const listItemView = _this.initClass(TeamsListItemView, {...team, index});
            _view.addTeam(listItemView);
        })

        Stage.add(_view.element);
        _view.animateIn();
    }

    //*** public functions */



});