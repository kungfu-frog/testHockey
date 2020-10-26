Class(function TeamsListView() {
    Inherit(this, Element);
    const _this = this;
    const $this = this.element;
    let _header;

    //*** Constructor
    (function () {
        initHTML();
        initHeader();
        initColumns();
    })();

    //*** Private functions */

    function initHTML() {
        $this.css({
            position: 'relative',
            width: 500,
            margin: '0 auto'
        })
    }

    function initHeader() {
        _header = $this.create('TeamListView_Header')
        _header.css({
            position: 'relative',
            width: '100%',
            textAlign: 'center',
            fontSize: 22,
            boxSizing: 'border-box',
            fontWeight: 'bold',
            padding: 10,
            margin: '10px 0'
        });
        _header.text('2020 NHL Teams');
    }

    function initColumns() {

        var _wrapper = $this.create('TeamListView_Wrapper');
        _wrapper.css({
            position: 'relative',
            display: 'flex',
            width: '100%',
            height: 'auto',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 15
        });
    
        var _id = _wrapper.create('TeamListView_Id');
        _id.css({
            position: 'relative',
            width: 50,
            fontSize: 10,
            height: 'auto'
        });
        _id.text('ID');
    

        var _teamName = _wrapper.create('TeamListView_TeamName');
        _teamName.css({
            position: 'relative',
            width: 200,
            fontSize: 10,
            height: 'auto'
        });
        _teamName.text('Team Name');
    
        var _conference = _wrapper.create('TeamListView_Conference');
        _conference.css({
            position: 'relative',
            width: 120,
            fontSize: 10,
            height: 'auto'
        });
        _conference.text('Conference');
        
    }

    //*** Public functions */
    this.addTeam = function(listItemView) {
        $this.add(listItemView);
    }

});