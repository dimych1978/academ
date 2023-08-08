import FilterAuthor from './filter-auhthor'
import FilterYear from './filter-year'
import FilterGenre from './filter-genre'
import stylesParents from '/src/components/main/centerblock/centerblock-style/centerblock.module.css'
import styles from './filter-style/filter.module.css'

function Filter() {
  return (
    <div className={stylesParents._filter}>
      <div className={styles._title}>Искать по: </div>
      <FilterAuthor />
      <FilterYear />
      <FilterGenre />
    </div>
  )
}
export default Filter
