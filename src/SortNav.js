import React from 'react';

export default function SortNav(props) {
  return (
    <form>
      <label>Filter patterns: </label>
      <select onChange={e => props.patternChange(e.target.value)}>
        <option value="">all</option>
        <option value="checked">checked</option>
        <option value="gingham">gingham</option>
        <option value="stripes">stripes</option>
      </select>
    </form>
  );
}
