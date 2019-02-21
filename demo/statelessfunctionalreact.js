const ListItem = props => <li className="list-item">{props.item.name}</li>

const List = ({ items }) => (
  <ul className="list">{items.map(item => <ListItem item={item} />)}</ul>
)

const Body = props => {
  let items = transformItems(props.rawItems)
  return (
    <div>
      <h1>{props.header}</h1>
      <List items={items} />
    </div>
  )
}

function Page(props, context) {
  return (
    <div>
      <Body header="My List" rawItems={props.rawItems} />
    </div>
  )
}
Page.propTypes = {
  rawItems: React.PropTypes.array.isRequired
}
