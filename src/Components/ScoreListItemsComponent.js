import {introListTemplate} from '../../variables';

export default class ScoreListItemsComponent {
    constructor(data) {
        this.introScoreData = data;
    }

    render() {
        return this.introScoreData.reduce((carry, item) => {
            carry += introListTemplate
                .replace(/__STUDENTNAME__/, item.userName)
                .replace(/__STUDENTICON__/, item.userId)
                .replace(/__STUDENTSCORE__/, item.userScore);
            return carry;
        }, '');
    }
}
