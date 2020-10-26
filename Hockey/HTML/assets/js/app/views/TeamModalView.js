Class(function TeamModalView(team) {
    Inherit(this, Element);

    const _this = this;
    const $this = this.element;

    var _background, _content, _heading, _firstYear, _conference, _division, _venue, _cta;

    //*** Constructor
    (function () {
        initHTML();
    })();

    function initHTML() {
        $this.css({
            width: '100%',
            height: '100%',
            left: 0,
            top: 0
        })
        initBackground();
        initContent();
        initHeading();
        initDetails();
    }
    
    function initBackground() {
        _background = $this.create('TeamModalView_Background');
        _background.css({
            position: 'static',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            background: 'rgba(0,0,0,0.7)'
        });
    }

    function initContent() {
        _content = $this.create('TeamModalView_Content');
        _content.css({
            background: 'white',
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            padding: 50,
            minWidth: 400
        });
    }

    function initHeading() {
        _heading = _content.create('TeamModalView_Heading');
        _heading.css({
            position: 'relative',
            width: '100%',
            textAlign: 'center',
            fontSize: 22,
            boxSizing: 'border-box',
            fontWeight: 'bold',
            padding: 10,
            margin: '10px 0',
            marginTop: 0,
            paddingTop: 0
        });
        _heading.text(team.name);
    }

    function initDetails() {
        const itemCss = {
            position: 'relative',
            padding: 8,
            fontSize: 12,
            textAlign: 'center'
        }

        _firstYear = _content.create('TeamModalView_FirstYear');
        _firstYear.css(itemCss);
        _firstYear.text(`First year of play: ${team.firstYearOfPlay}`);

        _conference = _content.create('TeamModalView_Conference');
        _conference.css(itemCss);
        _conference.text(`Conference: ${team.conference.name}`);

        _division = _content.create('TeamModalView_Division');
        _division.css(itemCss);
        _division.text(`Division: ${team.division.name}`);

        _venue = _content.create('TeamModalView_Venue');
        _venue.css(itemCss);
        _venue.text(`Venue: ${team.venue.name}`);

        _cta = _content.create('TeamModalView_Cta');
        _cta.css({
            //todo
            margin: '0 auto'
        })
        _cta.text('View official site');
    }

    this.animateIn = function() {
        //*** TODO.  Get creative! */
    }

    this.animateOut = function() {
        //*** this MUST return a promise.  Once the promise is resolved, it will remove from DOM */
        
    }

})