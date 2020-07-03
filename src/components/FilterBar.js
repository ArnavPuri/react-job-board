import React from "react";

export default function FilterBar(props) {
    let filters = props.filters;
    return (
        <React.Fragment>
            {filters.length > 0 && <div className="filter-card">
                <div className="filters">{filters.map((filter) =>
                    <div className={'filter-chip'}>
                        <div className={'filter-name'}>{filter}</div>
                        <span className={'remove-button'} onClick={(e) => props.removeFilter(filter)}>✖</span></div>)}
                </div>
                <p className="clear" onClick={(event => props.clearFilters())}>Clear</p>
            </div>}
        </React.Fragment>
    )
}