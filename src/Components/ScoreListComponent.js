import ScoreListItemsComponent from './ScoreListItemsComponent';

const scoreListTemplate = `<div class="my-3 p-3 bg-white rounded shadow-sm position-relative score-list-container flipInX">
      <h4 class="pb-2 mb-3 question-title">Skor Listesi</h4>
      <div class="mt-3 intro-score-list">__ITEMS__</div>
      </div>`;


export default class ScoreListComponent {
    constructor(data) {
        this.data = data;
    }
    render() {
        return scoreListTemplate.replace('__ITEMS__', (new ScoreListItemsComponent(this.data)).render())
    }
}
