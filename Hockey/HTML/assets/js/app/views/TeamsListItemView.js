Class(function TeamsListItemView(team, index) {
    Inherit(this, Element);
    const _this = this;
    const $this = this.element;
    let _wrapper, _teamName, _conference, _id;

    //*** Constructor
    (function () {
        initHTML();
    })();

    function initHTML() {
        $this.css({
            position: 'relative'
        });
        initWrapper();
        initId();
        initTeamName();
        initConference();
    }

    function initWrapper() {
        _wrapper = $this.create('TeamListItemView_Wrapper');
        _wrapper.css({
            position: 'relative',
            display: 'flex',
            width: '100%',
            height: 'auto',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: team.index % 2 ? "#e8e8e8" : "white",
            padding: "5px 0"
        });
    }

    function initId() {
        _id = _wrapper.create('TeamListItemView_Id');
        _id.css({
            position: 'relative',
            width: 50,
            height: 'auto'
        });
        _id.text(team.id);
    }

    function initTeamName() {
        _teamName = _wrapper.create('TeamListItemView_TeamName');
        _teamName.css({
            position: 'relative',
            width: 200,
            height: 'auto'
        });
        _teamName.text(team.name);
    }

    function initConference() {
        _conference = _wrapper.create('TeamListItemView_Conference');
        _conference.css({
            position: 'relative',
            width: 120,
            height: 'auto'
        });
        _conference.text(team.conference.name);
    }

});