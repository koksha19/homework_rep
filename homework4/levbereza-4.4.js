class PaginationHelper {
    constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPafe = itemsPerPage;
    }
    itemCount() {
        let items = 0;
        for(let item of this.collection){
            items++;
        }
        return items;
    }
    pageCount() {
        return Math.ceil(this.collection.length / this.itemsPerPafe);

    }
    pageItemCount(pageIndex) {
        if(pageIndex < 0 || pageIndex >= this.pageCount()){
            return -1;
        } else if (pageIndex === this.pageCount()-1){
            if (this.collection.length % this.itemsPerPafe === 0){
                return this.itemsPerPafe;
            }
            return this.collection.length % this.itemsPerPafe;
        } else{
            return this.itemsPerPafe;
        }
    }
    pageIndex(itemIndex) {
        if(itemIndex >= this.collection.length || itemIndex < 0){
            return -1;
        }
        return Math.floor(itemIndex / this.itemsPerPafe);
    }
}
const beb = new PaginationHelper([1, 2, 3, 4, 5, 6],6);
console.log(beb.itemCount());
console.log(beb.pageCount());
console.log(beb.pageItemCount(0));
console.log(beb.pageIndex(7));