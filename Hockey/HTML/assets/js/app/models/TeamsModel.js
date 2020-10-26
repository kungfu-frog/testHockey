Class(function TeamsModel() {

    const API_URL = `https://statsapi.web.nhl.com/api/v1/teams`;

    this.fetch = async function() {
        let teams = []
        try{
            let resultJson = await get(API_URL);
            if(resultJson && resultJson.teams) {
                teams = resultJson.teams;
            }
        } catch(e) {
            alert('Oops an error occurred fetching the teams api');
        }
        return teams;
    }
    
});