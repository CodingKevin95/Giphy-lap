
function GiphyList(props) {
    return (
        <div className="filter">
            <input
                className="input" type="test" value={props.value}
                onChange={props.onChange} name="fruit-filter"
            />
            <button
                type="submit" className="btn" value={props.value} onClick={props.onClick}>
                Go
            </button>
        </div>
    )
}

export default GiphyList