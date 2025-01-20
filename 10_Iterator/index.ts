const dataset = Array.from({ length: 100 }, (_, i) => i + 1);

class PaginationIterator {
  data: Array<any>;
  pageSize: number;
  currentPage: number;
  constructor(data: any, pageSize: number) {
    this.data = data;
    this.pageSize = pageSize;
    this.currentPage = 1;
  }

  hasNext() {
    return this.currentPage * this.pageSize < this.data.length;
  }

  next() {
    if (!this.hasNext()) {
      throw new Error("Invalid page");
    }
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;
    const pageItems = this.data.slice(start, end);
    this.currentPage++;

    return pageItems;
  }

  goToPage(page: number) {
    if (page <= 0 || page > Math.ceil(this.data.length / this.pageSize)) {
      throw new Error("Invalid page");
    }
    const start = (page - 1) * this.pageSize;
    const end = start + this.pageSize;
    const pageItems = this.data.slice(start, end);
    this.currentPage = page;
    return pageItems;
  }

  reset() {
    this.currentPage = 1;
  }
}

const pagination =new PaginationIterator(dataset,10)
console.log(pagination.hasNext())
console.log(pagination.next())
console.log(pagination.goToPage(5))
pagination.reset()
console.log(pagination.next())


