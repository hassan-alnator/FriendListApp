
export default class Paginator {

    /**
     * paginating the set of data passed to the function 
     * returning the preview data based on the current page and the items per page
     * 
     * @static
     * @param {Number} currentPage 
     * @param {Number} itemsPerPage 
     * @param {Array} items 
     * @returns {Array} preview data
     * @memberof Paginator
     */
    static paginate(currentPage, itemsPerPage, items) {

        const fromItem = (itemsPerPage * (currentPage - 1));
        const toItem = (itemsPerPage * currentPage);

        return [...items].slice(fromItem, toItem)

    }

    /**
     * calculating the number of pages based on the number of items
     * 
     * @static
     * @param {Int} itemsPerPage 
     * @param {Int} numbreOfItems 
     * @returns {Int} number of pages
     * @memberof Paginator
     */
    static calculateNumberOfPages(itemsPerPage, NumberOfItems) {
        return Math.floor(NumberOfItems / itemsPerPage)
    }
}


