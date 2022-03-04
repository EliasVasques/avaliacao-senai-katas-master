

class ScoreKeeper {

    
    _timeA = 0;
    _timeB = 0;
    

    scoreTeamA1() {
        this._timeA += 1;
    }

    scoreTeamA2(){
        this._timeA += 2;
    }

    scoreTeamA3(){
        this._timeA += 3;
    }
    
    scoreTeamB1(){
        this._timeB += 1;
    }

    scoreTeamB2(){
        this._timeB += 2;
    }

    scoreTeamB3(){
        this._timeB += 3;
    }

    getScore() {
        let timeAFormated = "0".repeat(3 - String(this._timeA).length) + String(this._timeA);
        let timeBFormated = "0".repeat(3 - String(this._timeB).length) + String(this._timeB);
        return timeAFormated + ":" + timeBFormated; 
    }
}

export {ScoreKeeper}