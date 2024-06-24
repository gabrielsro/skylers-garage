export default function SortFilterBar() {
  return (
    <div className="w-full flex">
      <div className="flex w-full justify-center gap-5">
        <select
          name="sort"
          id="sort"
          className="w-20 overflow-hidden overflow-ellipsis rounded-md"
        >
          <option hidden={true}>Sort By</option>
          <option value="price-descending">Price Lowest to Highest</option>
          <option value="price-descending">Price Highest to Lowest</option>
          <option value="price-descending">Newest to Oldest</option>
          <option value="price-descending">Oldest to Newest</option>
        </select>

        <select
          name="mileage"
          id="mileage"
          className="w-20 overflow-hidden overflow-ellipsis rounded-md"
        >
          <option hidden={true}>Mileage</option>
          <option value="price-descending">All</option>
          <option value="price-descending">&lt; 10k</option>
          <option value="price-descending">10k to 70k</option>
          <option value="price-descending">70k to 100k</option>
          <option value="price-descending">100k to 150k</option>
          <option value="price-descending">150k &gt;</option>
        </select>

        <select
          name="color"
          id="color"
          className="w-20 overflow-hidden overflow-ellipsis rounded-md"
        >
          <option hidden={true}>Color</option>
          <option value="price-descending">Color</option>
          <option value="price-descending">Black</option>
          <option value="price-descending">Brown</option>
          <option value="price-descending">Green</option>
          <option value="price-descending">Pink</option>
          <option value="price-descending">Red</option>
          <option value="price-descending">Silver</option>
          <option value="price-descending">White</option>
          <option value="price-descending">Yellow</option>
        </select>
      </div>
    </div>
  );
}
