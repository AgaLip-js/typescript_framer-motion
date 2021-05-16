import { ReactElement, ReactNode, useState } from 'react';
import './App.css';
import UseEffectComponent from './UseEffectComponent';
import UseStateComponent from './UseStateComponent';

// export interface
export interface HeadingProps {title: string};

// Conventional props
function Heading({title}: HeadingProps){
  return (
    <h1>{title}</h1>
  )
}

function HeadingWithContent({children}: {children: ReactNode}): ReactElement{
  return (
    <h1>{children}</h1>
  )
}

// Default Props
const defaultConainerProps = {
  heading: <strong>My heading</strong>
}

function Container({heading, children}: {children: ReactNode} & typeof defaultConainerProps): ReactElement{
  return (
    <div>
      <h1>{heading}</h1>
      {children}
    </div>
  )
}

Container.defaultProps = defaultConainerProps;

// Functional props
// ? optional
function TextWithNumber({header, children} : {header?:(num:number) =>ReactNode; children: (num:number) =>ReactNode}) {
  const [state, setState] = useState<number>(1);

  return (
    <div>
      {/* call only if header is pass*/}
      <h3>{header?.(state)}</h3>
      <div>{children(state)}</div>
      <div><button onClick={()=> setState(state + 1)}>Add</button></div>
    </div>
  )
}

// List - generic function
function List<ListItem>({
  items,
  render
} : {
  items: ListItem[],
  render: (item: ListItem) => ReactNode
}) {
  return(
    <ul>
      {items.map((item, index)=>(
        <li key={index}>
          {render(item)}
        </li>
      ))}
    </ul>
  )
}


function App() {
  return (
    <div className="App">
      <Heading title='kupa'></Heading>
      <HeadingWithContent><strong>HI!</strong></HeadingWithContent>
      <Container><strong>HI!</strong></Container>
      <TextWithNumber header={(num: number)=> <span>Header {num}</span>}>{(num: number)=> <div>Today's number is {num} </div>}</TextWithNumber>
      <List items={['jack', 'Sadie', "oso"]} render={(item:string)=> <div>{item.toLowerCase()}</div>}></List>

      <h1>UseState</h1>
      <UseStateComponent number={22}/>

      <h1>UseEffect</h1>
      <UseEffectComponent/>
    </div>
  );
}

export default App;
