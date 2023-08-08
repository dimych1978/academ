import Content from "./content/content";
import Filter from "./menu/filter/filter";
import Search from "/src/components/main/search/search";
import stylesParents from "/src/components/main/main-style/main.module.css";
import Title from "/src/pages/title/title";



function Centerblock() {
  return (
    <div className={stylesParents._centerblock}>
      <Search />
      <Title pageName={"Треки"} />
      <Filter />
      <Content />
    </div>
  );
}

export default Centerblock;
