import React from 'react';
import './App.css';
import { FixedSizeList, VariableSizeList } from 'react-window';
import { list, ListData } from 'data/data';

const itemCount = list.length;
const sizeDict = {
  large: 45,
  medium: 35,
  small: 27,
};

const Row = (props: {
  index: number;
  style: React.CSSProperties;
  data: ListData;
}) => {
  const { index, style, data } = props;
  const { _id, gender, name } = data[index];
  return (
    <div
      className={`d-flex ${index % 2 === 0 ? 'even' : 'odd'}`}
      key={_id}
      style={style}
    >
      Name: {name} and gender: {gender}
    </div>
  );
};

function App() {
  const itemSize = (index: number) => {
    const { size } = list[index];
    return sizeDict[size];
  };
  return (
    <div className='App d-flex'>
      <div id='windowed-FixedSizeList' style={{ marginRight: 10 }}>
        <h1> Fixed Size List</h1>
        <FixedSizeList
          className='List'
          height={300}
          itemCount={itemCount}
          itemSize={35}
          width={400}
          itemData={list}
        >
          {/* @ts-ignore */}
          {Row}
        </FixedSizeList>
      </div>
      <div id='windowed-VariableSizeList'>
        <h1> Variable Size List</h1>

        <VariableSizeList
          className='List'
          height={300}
          itemCount={itemCount}
          itemSize={itemSize}
          width={400}
          itemData={list}
        >
          {/* @ts-ignore */}
          {Row}
        </VariableSizeList>
      </div>
    </div>
  );
}

export default App;
