import { ScoreKeeper } from "../src/score-board";

describe('score-board', () => {

    it('Time A should receives 1 more point.', () => {
        let game = new ScoreKeeper();
        game.scoreTeamA1();
        expect(game.getScore()).toBe('001:000');
    })

    it('Time A should receives 2 more points.', () => {
        let game = new ScoreKeeper();
        game.scoreTeamA2();
        expect(game.getScore()).toBe('002:000');
    })

    it('Time A should receives 3 more points.', () => {
        let game = new ScoreKeeper();
        game.scoreTeamA3();
        expect(game.getScore()).toBe('003:000');
    })

    it('Time B should receives 1 more point.', () => {
        let game = new ScoreKeeper();
        game.scoreTeamB1();
        expect(game.getScore()).toBe('000:001');
    })

    it('Time B should receives 2 more points.', () => {
        let game = new ScoreKeeper();
        game.scoreTeamB2();
        expect(game.getScore()).toBe('000:002');
    })

    it('Time B should receives 3 more points.', () => {
        let game = new ScoreKeeper();
        game.scoreTeamB3();
        expect(game.getScore()).toBe('000:003');
    })
})