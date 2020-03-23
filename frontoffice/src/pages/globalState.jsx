import {observable, decorate,action,computed} from 'mobx'

class GlobalState{
    reviewList = [
        {review: "This is a nice article", stars: 2},
        {review: "A lovely review", stars: 4},
      ];
    
      addReview(e) {
        this.reviewList.push(e);
      }
    
      get reviewCount() {
        return this.reviewList.length;
      }
    
      get averageScore() {
        let avr = 0;
        this.reviewList.map(e => avr += e.stars);
        return Math.round(avr / this.reviewList.length * 100) / 100;
      }
}

decorate(GlobalState, {
    reviewList: observable,
    addReview: action,
    averageScore: computed,
    reviewCount: computed
});

export default GlobalState