import Form from "next/form";
import SearchFormBtn from "./SearchFormBtn";
import { Search } from "lucide-react";

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form action={"/"} scroll={false} className="search-form">
      <input
        type="text"
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="Search Startups"
      />
      <div className="flex gap-2">
        {query && <SearchFormBtn />}
        <button type="submit" className="text-white search-btn">
          <Search className="size-5" />
        </button>
      </div>
    </Form>
  );
};

export default SearchForm;
