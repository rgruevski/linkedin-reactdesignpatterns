const people = [{
	name: 'John Doe',
	age: 54,
	hairColor: 'brown',
	hobbies: ['swimming', 'bicycling', 'video games'],
}, {
	name: 'Brenda Smith',
	age: 33,
	hairColor: 'black',
	hobbies: ['golf', 'mathematics'],
}, {
	name: 'Jane Garcia',
	age: 27,
	hairColor: 'blonde',
	hobbies: ['biology', 'medicine', 'gymnastics'],
}];
const products = [{
	name: 'Flat-Screen TV',
	price: '$300',
	description: 'Huge LCD screen, a great deal',
	rating: 4.5,
}, {
	name: 'Basketball',
	price: '$10',
	description: 'Just like the pros use',
	rating: 3.8,
}, {
	name: 'Running Shoes',
	price: '$120',
	description: 'State-of-the-art technology for optimum running',
	rating: 4.2,
}];
import React from "react";
import styled from "styled-components";
import { RegularList } from "./components/RegularList";
import { SmallPersonListItem } from './components/people/SmallPersonListItem';
import { LargePersonListItem } from './components/people/LargePersonListItem';
import { NumberedList } from "./components/NumberedList";
import { LargeProductListItem } from './components/products/LargeProductListItem';
import { SmallProductListItem } from "./components/products/SmallProductListItem";
const CompStyle = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 28px;
    color: #222222;
    width: 100%;
    height: 95wh;
	display: flex;
	flex-direction: column;
`
const LeftHandCompStyle = styled(CompStyle)`
    background: green;
    text-align: right;
`;
const RightHandCompStyle = styled(CompStyle)`
    background: red;
`;
const LeftHandComponent = ({ name }) => <LeftHandCompStyle>{name}</LeftHandCompStyle>;
const RightHandComponent = ({ message }) => <RightHandCompStyle>{message}</RightHandCompStyle>;
function App() {
	return (
		<CompStyle>
			<RegularList
				items={people}
				resourceName="person"
				itemComponent={SmallPersonListItem} />
			<RegularList
				items={people}
				resourceName="person"
				itemComponent={LargePersonListItem} />
			<NumberedList
				items={products}
				resourceName="product"
				itemComponent={SmallProductListItem} />
			<NumberedList
				items={products}
				resourceName="product"
				itemComponent={LargeProductListItem} />
		</CompStyle>
	);
};
export default App;